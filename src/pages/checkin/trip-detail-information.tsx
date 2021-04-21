import { useEffect, FC, useMemo } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import SvgOnlineCheckin from 'public/images/ico_online_checkin.svg';
import SvgReservationChange from 'public/images/ico_reservation_change.svg';
import SvgEvent from 'public/images/ico-event.svg';
import SvgReservationCancel from 'public/images/ico_reservation_cancel.svg';

import {
  useBooking,
  useScroll,
} from '@airpremia/core/hooks';
import { useUrl } from 'src/hooks';
import DetailInfoTemplate from 'src/components/templates/checkin/bookingDetailInfo';
import {
  ReservationDetailInfoGroup,
  BoardingPassInfoGroup,
  BoardingPassengerInfoGroup,
} from 'src/components';
import Failpage from './failpage';

interface IProps {}

const TripDetailInformation: FC<IProps> = ({}) => {
  const router = useRouter();
  const { bookingStore, onFindTrip } = useBooking();
  const { upScroll } = useScroll();
  const { queries } = useUrl();
  const { bookingDetailInfo } = bookingStore;

  const list = [
    {
      SvgIcon: SvgOnlineCheckin,
      text: '온라인 체크인',
      isShow: true,
      disabled: false,
      onClick: () =>
        router.push(
          `/checkin/online`,
        ),
    },
    {
      SvgIcon: SvgReservationChange,
      text: '일정 변경',
      isShow: true,
      disabled: false,
      onClick: () =>
        router.push(
          `/checkin/change`,
        ),
    },
    {
      SvgIcon: SvgEvent,
      text: '부가서비스 관리',
      isShow: true,
      disabled: false,
      onClick: () => { alert('서비스 준비 중입니다') },
    },
    {
      SvgIcon: SvgReservationCancel,
      text: '예약 취소',
      isShow: true,
      disabled: false,
      onClick: () =>
        router.push(
          `/checkin/cancel?recordLocator=${queries.recordLocator}`,
        ),
    },
  ]; 
  
  const {
    firstName,
    lastName,
    recordLocator,
  } = router.query;

  const getParams = useMemo(() => {

    const first = Array.isArray(firstName)
      ? firstName[0]
      : firstName;

    const last = Array.isArray(lastName)
      ? lastName[0]
      : lastName;

    const reservation = Array.isArray(recordLocator)
      ? recordLocator[0]
      : recordLocator;

    return {
      first: first,
      last: last,
      reservation: reservation,
    }
  }, [firstName, lastName, recordLocator]);

  useEffect(() => {
    upScroll();

    onFindTrip(getParams);
  }, []);

  if (!bookingDetailInfo) {

    return <Failpage />;
  }

  console.log(
    ' bookingDetailInfo', bookingDetailInfo,
    ' status : ',bookingDetailInfo.bookingInfo.status
    ,' isCanceled : ',bookingDetailInfo.bookingInfo.isCanceled
    ,' isCommingSoon : ',bookingDetailInfo.bookingInfo.isCommingSoon)

  return (
    <S.container>
      <DetailInfoTemplate
        title={bookingDetailInfo.bookingInfo.isCommingSoon ? "예약 상세" : "지난 예약 상세"}
        reservationDetailInfoGroup={
          <ReservationDetailInfoGroup
            bookingInfo={bookingDetailInfo.bookingInfo}
            breakdown={bookingDetailInfo.breakdown}
            list={list}
          />
        }
        boardingPassInfo={
          <BoardingPassInfoGroup
            boardingPassInfo={
              bookingDetailInfo.boardingPassInfo
            }
            recordLocator={
              bookingDetailInfo.bookingInfo.recordLocator
            }
            isCommingSoon={bookingDetailInfo.bookingInfo.isCommingSoon}
            params={getParams}
          />
        }
        boardingPassengerInfo={
          <BoardingPassengerInfoGroup
            passengers={bookingDetailInfo.passengers}
            isCanceled={bookingDetailInfo.bookingInfo.isCanceled}
          />
        }
      />
    </S.container>
  );
};

const S = {
  container: styled.div``,
};

export default TripDetailInformation;
