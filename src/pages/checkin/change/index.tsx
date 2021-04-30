import { IPostEmail, Email } from '@airpremia/core/api/booking/types';
import {
  useBooking, useScroll, useMe
} from '@airpremia/core/hooks';
import lodashMap from 'lodash/map';
import { useRouter } from 'next/router';
import moment from 'moment';
import { FC, useEffect, useMemo, useState } from 'react';
import {
  BookingChangeInfomation,
  BookingChangePassenger, BookingChangeTemplate,
  NewModal,
  PopupDescription, PopupTitle,
  TaskButton
} from 'src/components';
import { useModal } from 'src/hooks';
import { Container } from 'src/styles/layout';
import styled from 'styled-components';
import { EScrollType } from 'src/components/templates/centerPopup';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

interface IProps {}

const Change: FC<IProps> = () => {
  
  //팝업 
  const {
    onShowNewModal,
    UIStore: { newModal },
  } = useModal();
  const { onHideNewModal } = useModal();
  const router = useRouter();
  
  const {
    onLoadCancelablePassengerData,
    bookingSessionStore,
    bookingStore,
    onSubmitChangeDivide,
    onSendEmail,
  } = useBooking();

  const { meStore } = useMe();

  const {
    cancelablePassengerList,
  } = bookingSessionStore;

  const {
    bookingDetailInfo,
    isBookingChangeDivideSuccess,
    recordLocator,
  } = bookingStore;

  const { userInfo } = meStore;
  const { upScroll } = useScroll();

  const [
    toBeRemovedPassengerKey,
    setPassengerKey,
  ] = useState<null | string[]>(null);

  const [isAllActive, setAllActive] = useState<boolean>(
    false,
  );
  const [alertShow, setAlertShow] = useState<boolean>(
    false,
  );
  const [isAgreeCheckbox, setAgreeCheckbox] = useState<
    boolean
  >(false);
  const [isButtonActive, setButtonActive] = useState<
    boolean
  >(false);

  const allPassengerList = useMemo(
    () =>
      lodashMap(
        cancelablePassengerList,
        (item) => item.passengerKey,
      ),
    [cancelablePassengerList],
  );

  const onClickCheckbox = (key: string) => () => {
    let _list;
    if (toBeRemovedPassengerKey) {
      if (toBeRemovedPassengerKey.includes(key)) {
        _list = [...toBeRemovedPassengerKey];
        _list.splice(_list.indexOf(key), 1);
      } else {
        _list = [...toBeRemovedPassengerKey, key];
      }
    } else {
      _list = [key];
    }
    setPassengerKey(_list);
  };

  const onClickCheckboxAll = () => {
    if (isAllActive) {
      setPassengerKey([]);
    } else {
      setPassengerKey(allPassengerList);
    }
    setAllActive(!isAllActive);
  };

  const onAgreeCheckbox = () =>
    setAgreeCheckbox(!isAgreeCheckbox);

  const onPopup = () =>
    onShowNewModal('onPopup');

  const lists = [
    '위탁 수화물'
    ,'유료 좌석'
    ,'기내 와이파이'
    ,'기내식'
    ,'기내 편의용품'
  ];

  const doDividePassenger = () => {
    
    if (
      toBeRemovedPassengerKey &&
      toBeRemovedPassengerKey.length > 0
    ) {
      
      /**
       * 유아는 남고 성인만 분리 혹은 삭제되는것을 방지
       * >단, 현재 자리있는 유아의 담당성인 데이터가 적용되지않고있다. 
       * >따라서 성인, 유아 수로만 취소 변경 막아놓음.
       * >추후 수정 필요
       */
       const passengers = bookingDetailInfo?.passengers!!
       let adtCount=0
       let adtCount2=0
       let insCount=0
       let insCount2=0
       
       for(let i=0; i<passengers.length; i++) {
         const passenger = passengers[i]
         if (!toBeRemovedPassengerKey.includes(passenger.passengerKey)) { 
           if(passenger.type == 'ADT' && passenger.infant == null) {
             adtCount++
           } else if(passengers[i].type == 'INS') {
             insCount++
           }
         } else {
           if(passenger.type == 'ADT' && passenger.infant == null) {
             adtCount2++
           } else if(passengers[i].type == 'INS') {
             insCount2++
           }
         }
       }

       if( adtCount < insCount || adtCount2 < insCount2 ) {
         alert('유아 1명당 반드시 1명 이상의 성인이 필요합니다.')

       }else{
        onHideNewModal()
        onSubmitChangeDivide({
          passengerKeys: toBeRemovedPassengerKey,
        });

       }
       
    }
  };

  const onClickModal = () => {

    switch (newModal.target) {
      case 'onPopup':
        return (
          <NewModal
            className="hAuto"
            type={EScrollType.TYPE1}
            title={
              <S.modalTitle>
                <PopupTitle>부가서비스 환불 불가 안내</PopupTitle>
                <PopupDescription>
                  기존 신청한 서비스 중에 부가서비스 환불 규정에 따라 환불 불가능한 서비스가 있습니다. 일정 변경을 진행하시겠습니까?
                </PopupDescription>
              </S.modalTitle>
            }
            body={
              <S.modalBody>
                <h4>환불 불가 항목</h4>
                <div className="listWrap">
                  {lists.map((li, idx) => {
                    return <p key={idx.toString()}>{li}</p>
                  })}
                </div>
              </S.modalBody>
            }
            button={
              <S.btnArea className="twin">
                <TaskButton className="line" onClick={onHideNewModal}>취소</TaskButton>
                <TaskButton onClick={doDividePassenger}>계속하기</TaskButton>
              </S.btnArea>
            }
          />
        );
      default:
        return null;
    }    
    
  };

  //분리 완료
  useEffect(() => {
    if (isBookingChangeDivideSuccess) {

      //일부만 디바이드시 취소메일발송
      if(
        toBeRemovedPassengerKey &&
        allPassengerList.length > toBeRemovedPassengerKey.length
      ) {

        const name = userInfo.name.first != null ? userInfo.name.first+" "+userInfo.name.last : userInfo.name.toString()
        const email: Email = {
          name: name,
          address: userInfo.email,
        }
        const tripType = bookingDetailInfo?.bookingInfo?.tripType
        let tripHtml = '<p><sapn style="font-weight:bold;">가는길</span>'
                     + '   '+moment(bookingDetailInfo?.bookingInfo?.beginDate).format('YYYY년 MM월 DD일 HH:mm')
                     + '   '+bookingDetailInfo?.bookingInfo?.originText+'</p>'

        if(tripType == 'Round') {
          tripHtml += '<p><sapn style="font-weight:bold;">오는길</span>'
                    + '   '+moment(bookingDetailInfo?.bookingInfo?.endDate).format('YYYY년 MM월 DD일 HH:mm')
                    + '   '+bookingDetailInfo?.bookingInfo?.destinationText+'</p>'
        }

        const sendData: IPostEmail = {
          to: [email],
          cc: [],
          bcc: [],
          attachmentIds: [],
          title: '[에어프레미아] 예약 변경(분리) 안내',
          content: '<p>'+email.name+'님, '+ bookingDetailInfo?.bookingInfo?.recordLocator+' 예약이 취소되었습니다.</p>'
                  +'<p> -----------------------------------</p>'
                  +tripHtml
                  +'<p> -----------------------------------</p>'
                  +'<p>'+allPassengerList.length+'명 중 '+toBeRemovedPassengerKey.length+'명 예약 분리</p>'
                  +'<p>앞으로 많은 관심 부탁드립니다.</p>'
                  +'<p>감사합니다.</p>',
        }

        console.log("변경 이메일", sendData)
        onSendEmail(sendData);  
      }
      router.push(`/checkin/change/confirm?recordLocator=${recordLocator.value}`);
    }
  }, [isBookingChangeDivideSuccess]);

  useEffect(() => {
    
    if (allPassengerList.length > 1) {
      if(
        toBeRemovedPassengerKey &&
        toBeRemovedPassengerKey.length > 0 &&
        allPassengerList.length > toBeRemovedPassengerKey.length
      ) {
        setAlertShow(true);
      } else {
        setAlertShow(false);
      }
    }
  }, [toBeRemovedPassengerKey]);

  useEffect(() => {
    if (
      toBeRemovedPassengerKey &&
      toBeRemovedPassengerKey.length > 0 &&
      isAgreeCheckbox
    ) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [toBeRemovedPassengerKey, isAgreeCheckbox]);

  useEffect(() => {
    upScroll();
    onLoadCancelablePassengerData();
  }, []);

  return (
    <Container>
      {onClickModal()} 
      <BookingChangeTemplate
        infomations={<BookingChangeInfomation />}
        passengers={
          <BookingChangePassenger
            isAllActive={isAllActive}
            alertShow={alertShow}
            passengers={cancelablePassengerList}
            toBeRemovedPassengerKey={
              toBeRemovedPassengerKey
            }
            isAgreeCheckbox={isAgreeCheckbox}
            onAgreeCheckbox={onAgreeCheckbox}
            onClickCheckbox={onClickCheckbox}
            onClickCheckboxAll={onClickCheckboxAll}
          />
        }
        button={
          <TaskButton
            disabled={!isButtonActive}
            onClick={onPopup}
          >
            다음
          </TaskButton>
        }
      />
    </Container>
  );
  
};

const S = {
  container : styled.div`
  `,
  modalTitle : styled.div``,
  modalBody : styled.div`
    h4 { 
      margin-bottom: 20px;
      font-size: 21px;
      font-weight: 600;
    }

    .listWrap {

      p {
        padding-left: 10px;
        position: relative;
        font-size: 18px;

        &:before {
          content: '';
          width: 4px;
          height: 4px;
          background-color: ${DARK_GRAY1};
          display: inline-block;
          border-radius: 50%;
          position: absolute;
          left: 0;
          top: 14px;
        }
      }
    }

    @media only screen and (max-width: 767px) {       

      h4 {
        font-size: 16px;
      }

      .listWrap {

        p {
          font-size: 14px;

          &:before {
            width: 3px;
            height: 3px;
            top: 13px;
          }
        }
      }
    }
  `,

  btnArea : styled.div`
  `,
  
};

export default Change;
