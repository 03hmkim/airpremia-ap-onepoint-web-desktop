import styled from 'styled-components';
import { FC, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import {
  CheckinSearchTemplate,
  OnlineCheckinInfo,
  WarningList,
  CheckinListTemplate,
  OnlineCheckinCard,
  NothingOnlineCheckinCard,
} from 'src/components';
import { CheckinInquiryForm } from 'src/components/organisms/inquiryForm/index';
import {
  useAuth,
  useBooking,
  useScroll,
} from '@airpremia/core/hooks';
import { Container } from 'src/styles/layout';

interface IProps {}

const cautionList = [
  {
    title: '온라인 체크인 신청 안내',
    description: [
      '온라인 체크인을 신청하면 24시간 전에 자동으로 체크인이 완료되며 연락처로 탑승권이 전송됩니다.',
      '항공기 출발 24시간부터 1시간 전까지도  온라인 체크인 신청 완료 후에도 탑승권 발급 전까지 좌석 변경 및 항공편 변경이 가능합니다.',
      '입력한 승객 정보가 부정확하거나 유효하지 않을 경우 탑승권 발급이 불가능할 수 있습니다',
    ],
  },
  {
    title: '온라인 체크인 신청 불가한 경우',
    description: [
      <p>신분 할인 항공권 승객</p>,
      <p>다른 항공사 운항편 이용 고객</p>,
      <p>공항 직원의 확인이 필요한 서비스 신청 고객<br />예) 유아동반승객, 혼자 여행하는 어린이, 반려동물 동반 승객, 32주이상 임산부 승객, 휠체어 이용 승객 등</p>,
      <p>비상구 좌석을 구매하고자 하는 승객</p>,
      <p>복수 국적 보유자</p>,
    ],
  },
];

const CheckIn: FC<IProps> = () => {
  const router = useRouter();
  const {
    bookingStore,
    onLoadCountryCodeList,
    onFindAvailableCheckin,
  } = useBooking();
  const { 
    firstName,
    lastName,
    recordLocator,
    checkinList,
  } = bookingStore;
  const { authStore } = useAuth();
  const { upScroll } = useScroll();
  const { isLogIn } = authStore;
  const hasItem = useMemo(() => {
    return checkinList.length > 0;
  }, [checkinList]);

  useEffect(() => {
    if (isLogIn) {
      onFindAvailableCheckin();
    }
    onLoadCountryCodeList();
  }, [isLogIn]);

  useEffect(() => {
    upScroll();
  }, []);

  const onClickOnline = () => {
    router.push(
      `/checkin/online/findCheckin?firstName=${firstName.value}&lastName=${lastName.value}&recordLocator=${recordLocator.value}`,
    );
  };

  if (isLogIn) {
    return (
      <Container>
        <CheckinListTemplate
          title="온라인 체크인 신청"
          description={
            hasItem
              ? '온라인 체크인을 신청할 여정을 선택해주세요'
              : ''
          }
          onlineCheckinCard={
            hasItem ? (
              checkinList.map((item, i) => (
                <S.wrapper key={i.toString()}>
                  <OnlineCheckinCard {...item} />
                </S.wrapper>
              ))
            ) : (
              <NothingOnlineCheckinCard />
            )
          }
        />
      </Container>
    );
  }

  return (
    <Container>
      <CheckinSearchTemplate
        title="온라인 체크인 신청"
        inquiryForm={
          <CheckinInquiryForm
            needReservationNumber
            title="체크인하실 여정의 탑승자 정보를 입력해주세요 :-)"
            onClick={onClickOnline}
          />
        }
        onlineCheckinInfo={<OnlineCheckinInfo />}
        onlineCheckinApplyInfo={cautionList.map(
          (item, i) => (
            <WarningList
              key={`waringList${i.toString()}`}
              title={item.title}
              descriptions={item.description}
            />
          ),
        )}
      />
    </Container>
  );
};

const S = {
  container: styled.div``,

  wrapper: styled.div`
    margin-bottom: 10px;
  `,
};

export default CheckIn;
