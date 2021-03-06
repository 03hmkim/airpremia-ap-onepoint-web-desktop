import { IPostEmail, Email } from '@airpremia/core/api/booking/types';
import { FC, useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container } from 'src/styles/layout';
import lodashMap from 'lodash/map';
import {
  BookingCancelTemplate,
  BookingCancelInfomation,
  BookingCancelPassenger,
} from 'src/components';
import {
  useScroll,
  useBooking,
  useMe,
} from '@airpremia/core/hooks';
import { useUrl } from 'src/hooks';
import moment from 'moment';
import { TaskButton } from 'src/components';

interface IProps {}

const Cancel: FC<IProps> = () => {
  const router = useRouter();
  const {
    onLoadCancelablePassengerData,
    bookingSessionStore,
    bookingStore,
    onSubmitCancelPassenger,
    onSendEmail,
  } = useBooking();
  const {
    cancelablePassengerList,
    isBookingCancelPrepareSuccess,
    isBookingCancelPrepareFailed,
  } = bookingSessionStore;
  const { bookingDetailInfo } = bookingStore;
  const { upScroll } = useScroll();
  const { queries } = useUrl();
  const { meStore } = useMe();
  const { userInfo } = meStore;
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

  const onMoveRefundPage = () => {
    if (
      toBeRemovedPassengerKey &&
      toBeRemovedPassengerKey.length > 0
    ) {

      /**
       * ????????? ?????? ????????? ?????? ?????? ?????????????????? ??????
       * >???, ?????? ???????????? ????????? ???????????? ???????????? ????????????????????????. 
       * >????????? ??????, ?????? ????????? ?????? ?????? ????????????.
       * >?????? ?????? ??????
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
        alert('?????? 1?????? ????????? 1??? ????????? ????????? ???????????????.')
      }else{
        onSubmitCancelPassenger({
          passengerKeys: toBeRemovedPassengerKey,
        });
      }
    }
  };

  useEffect(() => {
    if (isBookingCancelPrepareSuccess && !isBookingCancelPrepareFailed) {
      
      //????????? ??????????????? ??????????????????
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
        let tripHtml = '<p><sapn style="font-weight:bold;">?????????</span>'
                     + '   '+moment(bookingDetailInfo?.bookingInfo?.beginDate).format('YYYY??? MM??? DD??? HH:mm')
                     + '   '+bookingDetailInfo?.bookingInfo?.originText+'</p>'

        if(tripType == 'Round') {
          tripHtml += '<p><sapn style="font-weight:bold;">?????????</span>'
                    + '   '+moment(bookingDetailInfo?.bookingInfo?.endDate).format('YYYY??? MM??? DD??? HH:mm')
                    + '   '+bookingDetailInfo?.bookingInfo?.destinationText+'</p>'
        }

        const sendData: IPostEmail = {
          to: [email],
          cc: [],
          bcc: [],
          attachmentIds: [],
          title: '[??????????????????] ?????? ??????(??????) ??????',
          content: '<p>'+email.name+'???, '+ bookingDetailInfo?.bookingInfo?.recordLocator+' ????????? ?????????????????????.</p>'
                  +'<p> -----------------------------------</p>'
                  +tripHtml
                  +'<p> -----------------------------------</p>'
                  +'<p>'+allPassengerList.length+'??? ??? '+toBeRemovedPassengerKey.length+'??? ?????? ??????</p>'
                  +'<p>????????? ?????? ?????? ??????????????????.</p>'
                  +'<p>???????????????.</p>',
        }

        console.log("?????? ?????? ?????????", sendData)
        onSendEmail(sendData);  
      }

      router.push(
        `/checkin/cancel/confirm?recordLocator=${queries.recordLocator}`,
      );
    } else if (!isBookingCancelPrepareSuccess && isBookingCancelPrepareFailed) {
      alert('????????? ????????? ??? ????????????. ?????? ????????? ?????????.')
      location.replace('/');
    }
  }, [isBookingCancelPrepareSuccess, isBookingCancelPrepareFailed]);

  useEffect(() => {
    if (allPassengerList.length > 5) {
      if (
        toBeRemovedPassengerKey &&
        toBeRemovedPassengerKey.length > 0 &&
        toBeRemovedPassengerKey.length < 6
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
      <BookingCancelTemplate
        infomations={<BookingCancelInfomation />}
        passengers={
          <BookingCancelPassenger
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
            onClick={onMoveRefundPage}
          >
            ??????
          </TaskButton>
        }
      />
    </Container>
  );
};

export default Cancel;
