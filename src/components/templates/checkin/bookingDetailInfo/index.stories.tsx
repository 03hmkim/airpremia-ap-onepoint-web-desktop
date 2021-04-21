import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import BookingDetailInfo from '.';
import SvgOnlineCheckin from 'public/images/ico_online_checkin.svg';
import SvgReservationChange from 'public/images/ico_reservation_change.svg';
import SvgEvent from 'public/images/ico-event.svg';
import SvgReservationCancel from 'public/images/ico_reservation_cancel.svg';
import {
  ReservationDetailInfoGroup,
  BoardingPassInfoGroup,
  BoardingPassengerInfoGroup,
} from 'src/components';
import { bookingDetailInfo } from './dummy';

export default {
  title: 'desktop / Templates / BookingDetailInfo',
  component: BookingDetailInfo,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Detail Info Template',
  },
};

export const 예약상세조회: FC = () => {
  const list = [
    {
      SvgIcon: SvgOnlineCheckin,
      text: '온라인 체크인',
      isShow: true,
      disabled: false,
      onClick: () => {},
    },
    {
      SvgIcon: SvgReservationChange,
      text: '일정 변경',
      isShow: true,
      disabled: false,
      onClick: () => {},
    },
    {
      SvgIcon: SvgEvent,
      text: '부가서비스 관리',
      isShow: true,
      disabled: false,
      onClick: () => {},
    },
    {
      SvgIcon: SvgReservationCancel,
      text: '예약 취소',
      isShow: true,
      disabled: false,
      onClick: () => {},
    },
  ];
  
  return (
    <BookingDetailInfo
      title="예약상세"
      reservationDetailInfoGroup={
        <ReservationDetailInfoGroup
          bookingInfo={bookingDetailInfo.bookingInfo}
          breakdown={bookingDetailInfo.breakdown}
          list={list}
        />
      }
      boardingPassInfo={
        <BoardingPassInfoGroup
          recordLocator="DDDDDD"
          boardingPassInfo={
            bookingDetailInfo.boardingPassInfo
          }
          isCommingSoon={bookingDetailInfo.bookingInfo.isCommingSoon}
          params={undefined}
        />
      }
      boardingPassengerInfo={
        <BoardingPassengerInfoGroup
          passengers={bookingDetailInfo.passengers}
          isCanceled={bookingDetailInfo.bookingInfo.isCanceled}
        />
      }
    />
  );
};
