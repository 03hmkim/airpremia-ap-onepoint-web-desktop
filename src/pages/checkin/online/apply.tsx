import {
  FC,
  useEffect,
  Fragment,
  useState,
  useCallback,
  useMemo,
} from 'react';
import queryString from 'query-string';
import { get } from 'lodash/fp';
import { flow, filter, map, reduce } from 'lodash/fp';
import styled from 'styled-components';
import { Container } from 'src/styles/layout';
import { useRouter } from 'next/router';
import { useSsr, useModal } from 'src/hooks';
import {
  useAuth,
  useBooking,
  useScroll,
  useLoading,
} from '@airpremia/core/hooks';
import {
  CheckinDetailInfoTemplate,
  GuideList,
  PassengerInfoShareButton,
  PassengerFormExpansionPanel,
  //PassengerForm2,
  CheckinPassengerDomForm,
  Checkbox,
  Loading,
  ModalRightSide,
  SsrModalSeat,
  TaskButton,
  PopupTitle,
  NewModal,
  PopupDescription,
} from 'src/components';
import {
  LIGHT_GRAY7,
  WHITE1,
  LIGHT_GRAY5,
} from '@airpremia/cdk/styles/colors';
import { IAvailableSsr } from '@airpremia/core/stores/models/ssr';
import {
  EDefaultModalTable,
  EModalPosition,
  EModalAnimationType,
} from '@airpremia/core/stores/models/ui';
import {
  convertGenderType,
  convertPassengerType,
} from '@airpremia/core/lib/service';
import { ICheckinStatusPassenger } from '@airpremia/core/stores/models/booking';
import { EScrollType } from 'src/components/templates/centerPopup';

interface IProps {}

const modalOptions = {
  isOpen: true,
  hasBackButton: false,
  hasCloseButton: true,
  target: EDefaultModalTable.NONE,
  position: EModalPosition.SIDE_RIGHT,
  animationType: EModalAnimationType.NONE,
};

const ApplyCheckin: FC<IProps> = ({}) => {
  const router = useRouter();
  const { authStore, handleCountryCodeLoad } = useAuth();
  const {
    bookingStore,
    onLoadCountryCodeList,
    onCheckinStatusLoad,
    onApplyTravelDocument,
    onCheckin,
  } = useBooking();
  const {
    ssrStore,
    onLoadCheckinSeatSsr,
    onUpdateSsrCheckinSeat,
    onHandleUpdateCheckinSsr,
  } = useSsr();
  const { upScroll } = useScroll();
  const {
    countryCodeList: authCountryCodeList,
  } = authStore;
  const {
    countryCodeList,
    currentCheckinData,
    journeys,
    noSeatPassengers,
    isTravelDocumentApplyRequest,
    isTravelDocumentApplySuccess,
    isPostCheckinSuccess,
  } = bookingStore;
  const {
    isSsrCheckinRequest,
    isSsrCheckinUpdate
  } = ssrStore;
  const [formFilled, setFormFilled] = useState<
    boolean[] | null
  >(null);
  const { showLoading, hideLoading } = useLoading();
  const [isAgreeActive, setAgreeActive] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isNextStep, setNextStep] = useState(false);
  const [isSeatModalShow, setSeatModalShow] = useState(
    false,
  );
  const [isTravelDocumentApply, setTravelDocumentApply] = useState(false);
  const [isCheckin, setCheckin] = useState(false);
  const [isSeatUpdate, setSeatUpdate] = useState(false);
  const [isCheckinStatusLoad, setCheckinStatusLoad] = useState(false);
  const [isModelLoad, setModelLoad] = useState(false);

  const checkboxProps = {
    isActive: isAgreeActive,
    onChange: () => setAgreeActive(!isAgreeActive),
  };
  
  function getTime() {
    let str: any = currentCheckinData?.journey.designator.departure;
    let departureDate = new Date(str.substr(0, 4), str.substr(5, 2)-1, str.substr(8, 2), str.substr(11, 2), str.substr(14, 2), str.substr(17, 2));
    departureDate.setSeconds(departureDate.getSeconds() + 3599);
    let checkDate = new Date();
    if(!isModelLoad && departureDate <= checkDate) {
      setModelLoad(true);
      onShowNewModal('checkin_impossible');
    }
  }

  function getCheckTime() {
    setInterval(getTime(), 1000);
  }

  const {
    onShowNewModal,
    UIStore: { newModal },
  } = useModal();

  const onClickHome = () => {
    router.push('/');
  }
  const onClickModal = () => {
    switch (newModal.target) {
      case 'checkin_impossible':
        return (
          <NewModal
            className="min hAuto"
            type={EScrollType.TYPE1}
            title={
              <S.modalTitle>
                <PopupTitle>온라인 체크인 가능 시간 초과</PopupTitle>
                <PopupDescription>출발까지 1시간 미만의 시간이 남아 온라인 체크인을 할 수 없습니다. 공항 카운터에서 체크인해주세요.</PopupDescription>
              </S.modalTitle>
            }
            body={
              <S.modalBody>
                <TaskButton onClick={onClickHome}>
                  확인
                </TaskButton>
              </S.modalBody>
            }
            hasCloseButton={false}
          />
        );
      default:
        return null;
    }
  };

  function dateCheck(str: any) {
    let departureDate = new Date(str.substr(0, 4), str.substr(5, 2)-1, str.substr(8, 2), str.substr(11, 2), str.substr(14, 2), str.substr(17, 2));
    departureDate.setDate(departureDate.getDate() - 1);
    let currentDate = new Date(); // 국제선 해외발인 경우 해당 나라의 시간으로 변경 필요
    let changeFlag;
    if(currentDate.getTime() >= departureDate.getTime()) {
      changeFlag = false;
    } else {
      changeFlag = true;
    }
    return changeFlag;
  }
  
  const guideListData = dateCheck(currentCheckinData?.journey.designator.departure) ? [
    {
      title: '온라인 체크인 신청 안내',
      descriptions: [
        '온라인 체크인을 신청하면 24시간 전에 자동으로 체크인이 완료되며 연락처로 탑승권이 전송됩니다.',
        '항공기 출발 24시간부터 1시간 전까지도  온라인 체크인 신청 완료 후에도 탑승권 발급 전까지 좌석 변경 및 항공편 변경이 가능합니다.',
        '입력한 승객 정보가 부정확하거나 유효하지 않을 경우 탑승권 발급이 불가능할 수 있습니다',
      ],
    },
  ] : [
    {
      title: '온라인 체크인 신청 안내',
      descriptions:  [
        '온라인 체크인을 신청하면 24시간 전에 자동으로 체크인이 완료되며 연락처로 탑승권이 전송됩니다.',
        '항공기 출발 24시간부터 1시간 전까지도  온라인 체크인 신청 완료 후에도 탑승권 발급 전까지 좌석 변경 및 항공편 변경이 가능합니다.',
        '입력한 승객 정보가 부정확하거나 유효하지 않을 경우 탑승권 발급이 불가능할 수 있습니다',
      ],
    },
    {
      title: '온라인 체크인 신청 불가한 경우',
      descriptions: [
        <p>신분 할인 항공권 승객</p>,
        <p>다른 항공사 운항편 이용 고객</p>,
        <p>공항 직원의 확인이 필요한 서비스 신청 고객<br />예) 유아동반승객, 혼자 여행하는 어린이, 반려동물 동반 승객, 32주이상 임산부 승객, 휠체어 이용 승객 등</p>,
        <p>비상구 좌석을 구매하고자 하는 승객</p>,
        <p>복수 국적 보유자</p>,
      ],
    },
  ];

  const getReservation = useCallback(() => {
    const parsed = queryString.parse(location.search);
    return flow(get('recordLocator'))(parsed);
  }, []);
  const getJourney = useCallback(() => {
    const parsed = queryString.parse(location.search);
    return flow(get('journeyKey'))(parsed);
  }, []);
  
  const checkCompleteStatus = () =>
  flow(
    map(
      (passenger: ICheckinStatusPassenger) =>
      passenger.onlineCheckInStatus,
    ),
    reduce(
      (status: boolean, it: string) =>
      status && it === 'Completed',
      true,
    ),
  )(currentCheckinData?.passengers);
          
  const renderButton = () => {
    const isCompleted = checkCompleteStatus();
    
    const text = isCompleted
      ? '예약 조회'
      : '온라인 체크인 신청';
    const onClick = isCompleted
      ? () => router.push('/checkin/find-trip')
      : onApplyTravelDocumentSubmit;

    return (
      <TaskButton onClick={onClick} disabled={!isActive}>
        {text}
      </TaskButton>
    );
  };

  const onModalOpen = useCallback(
    () => setSeatModalShow(true),
    [],
  );
  const onModalClose = useCallback(
    () => setSeatModalShow(false),
    [],
  );

  const params = useMemo(() => {
    return `journeyKey=${getJourney()}&recordLocator=${getReservation()}`;
  }, []);

  /* const onRouteCompletePage = () =>
    router.push(`/checkin/online/pay/complete?${params}`);
  const onRouteSeatPayCheckout = () =>
    router.push(`/checkin/online/pay/checkout?${params}`); */

  const renderNextStepButton = () => {
    return (
      <S.buttonWrapper>
        <TaskButton
          color={LIGHT_GRAY7}
          border={`solid 1px ${LIGHT_GRAY7}`}
          backgroundColor={WHITE1}
          disabled={!isActive}
          onClick={onAutoSeat}
        >
          좌석 자동 지정
        </TaskButton>
        <TaskButton
          onClick={onModalOpen}
          disabled={!isActive}
        >
          좌석 선택
        </TaskButton>
      </S.buttonWrapper>
    );
  };

  const segments = useMemo(() => {
    const { journeyKey } = router.query;

    const _journeyKey = Array.isArray(journeyKey)
      ? journeyKey[0]
      : journeyKey;

    return flow(
      filter(
        (item: IAvailableSsr) => item.key === _journeyKey,
      ),
    )(ssrStore.availableSsrs.segment);
  }, [ssrStore.availableSsrs.segment]);

  useEffect(() => {
    upScroll();
    const recordLocator = getReservation();
    const journeyKey = getJourney();
    if (!recordLocator || !journeyKey) {
      router.push('/checkin/online');
    }

    onCheckinStatusLoad({
      recordLocator,
      journeyKey,
    });
    setCheckinStatusLoad(true);
  }, []);

  useEffect(() => {
    if (!countryCodeList.length) {
      onLoadCountryCodeList();
    }
    if (!authCountryCodeList.length) {
      handleCountryCodeLoad();
    }
  }, [countryCodeList, authCountryCodeList]);

  useEffect(() => {
    if(isCheckinStatusLoad && currentCheckinData?.passengers.length) {
      onUpdateSsrCheckinSeat();

      if (
        !formFilled?.length
      ) {
        setFormFilled(
          Array(currentCheckinData?.passengers.length).fill(
            false,
          ),
        );
      }

      if (noSeatPassengers.length <= 0) {
        setNextStep(true);
      }

      getCheckTime();
    }
  }, [currentCheckinData]);

  useEffect(() => {
    if (journeys && !isNextStep) onLoadCheckinSeatSsr();
  }, [journeys]);

  useEffect(() => {
    const res =
      isAgreeActive &&
      formFilled?.reduce((acc, it) => acc && it, true);

    if (checkCompleteStatus()) {
      setActive(true);
    } else {
      setActive(res || false);
    }
  });

  let seatAuto = "";
  const onAutoSeat = () => {
    seatAuto = "seatAuto";
    onApplyTravelDocumentSubmit();
  }

  const onCheckinSubmit = () => {
    const recordLocator = getReservation();
    const journeyKey = getJourney();
    onCheckin({ recordLocator, journeyKey, seatAuto });
  };
   
  const onApplyTravelDocumentSubmit = () => {
    onApplyTravelDocument();
    setTravelDocumentApply(true);
  };

  const onSeatSubmit = async () =>
  // ssrIds: ISsrRequestItem[],
  {
    // if (!ssrIds.length) {
    //   onModalClose();
    //   return;
    // }

    // await ssrUpdate(ssrIds);
    //onRouteSeatPayCheckout();

    onApplyTravelDocumentSubmit();
    onHandleUpdateCheckinSsr();
    setSeatUpdate(true);

    onModalClose();
  };

  useEffect(() => {
    if(isSeatUpdate && !isSsrCheckinRequest && isTravelDocumentApply && !isTravelDocumentApplyRequest) {
      if (isSsrCheckinUpdate && isTravelDocumentApplySuccess) {
        onCheckinSubmit();
        setCheckin(true);
      } else {
        if (!isSsrCheckinUpdate && isTravelDocumentApplySuccess) {
          alert("좌석 지정에 실패하였습니다.");
        } else if (isSsrCheckinUpdate && !isTravelDocumentApplySuccess) {
          alert("정보 저장에 실패하였습니다.");
        } else {
          alert("체크인 신청에 실패하였습니다.");
        }
        router.push(`/checkin/online`);
      }
    }
  }, [isSsrCheckinUpdate, isTravelDocumentApplySuccess]);

  useEffect(() => {
    if(!isSeatUpdate && isTravelDocumentApply) {
      if (isTravelDocumentApplySuccess) {
        onCheckinSubmit();
        setCheckin(true);
      } else {
        alert("정보 저장에 실패하였습니다.");
        router.push(`/checkin/online`);
      }
    }
  }, [isTravelDocumentApplySuccess]);
  
  useEffect(() => {
    if(isCheckin) {
      if (isPostCheckinSuccess) {
        showLoading();
        router.push(`/checkin/online/pay/complete?${params}`);
      } else {
        hideLoading();
        alert("체크인 신청에 실패하였습니다.");
        router.push(`/checkin/online`);
      }
    }
  }, [isPostCheckinSuccess]);

  if (!currentCheckinData) {
    return <Loading />;
  }

  return (
    <Container>
      {onClickModal()}
      {isSeatModalShow && (
        <ModalRightSide
          modal={modalOptions}
          onHide={onModalClose}
        >
          <SsrModalSeat
            trips={journeys}
            passengers={noSeatPassengers}
            onSubmit={onSeatSubmit}
            newSegments={segments}
            type="checkin"
          />
        </ModalRightSide>
      )}
      <CheckinDetailInfoTemplate
        guide={guideListData.map((item, i) => (
          <GuideList
            key={`guideListData${i.toString()}`}
            title={item.title}
            descriptions={item.descriptions}
          />
        ))}
        passengerInfoShareButton={
          <PassengerInfoShareButton />
        }
        expansionPanel={
          <Fragment>
            {currentCheckinData.passengers.map(
              (item, i) => (
                <S.wrapper
                  key={`currentCheckinDataPassenger${i.toString()}`}
                >
                  <PassengerFormExpansionPanel
                    name={`${item.name?.last} ${item.name?.first}`}
                    genderLabel={convertGenderType(
                      item.gender || '',
                      true,
                    )}
                    typeLabel={convertPassengerType(
                      item.passengerTypeCode || '',
                    )}
                    disabled={
                      item.onlineCheckInStatus !==
                      'Applicable'
                    }
                    buttonLabel={
                      item.onlineCheckInStatusText
                    }
                  >
                    <CheckinPassengerDomForm //국제선인 경우 PassengerForm2
                      idx={i}
                      data={item}
                      formFilled={formFilled}
                      onChangeFilledStatus={setFormFilled}
                    />
                  </PassengerFormExpansionPanel>
                </S.wrapper>
              ),
            )}
          </Fragment>
        }
        confirmCheckbox={
          isNextStep && checkCompleteStatus() ? null 
          : (
            <Checkbox {...checkboxProps}>
              입력한 여권 정보와 실제 여권 정보가 일치합니다.
            </Checkbox>
          )
        }
        checkinButton={
          // 시연후에 아래 삼항연산자 순서 바꾸고 로직 수정
          isNextStep
            ? renderButton()
            : renderNextStepButton()
        }
        isCompleted={checkCompleteStatus()}
      />
    </Container>
  );
};

const S = {
  container: styled.div``,

  wrapper: styled.div``,

  buttonWrapper: styled.div`
    button {
      width: 240px;
      &:first-of-type {
        margin-right: 10px;
      }
    }
  `,

  modalTitle : styled.div``,

  modalBody: styled.div`
    padding: 40px 50px 0;
    .select {
      margin-top: 40px;
      font-size: 15px;
      line-height: 30px;
      letter-spacing: -0.23px;
      box-sizing: border-box;
      &>div{
        height: 40px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid ${LIGHT_GRAY5};
      }
      .newPosition{
        >div{
          max-height: 120px;
        }
      }
    }
  `,
};

export default ApplyCheckin;
