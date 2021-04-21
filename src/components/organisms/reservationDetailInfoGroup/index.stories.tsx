import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import SvgOnlineCheckin from 'public/images/ico_online_checkin.svg';
import SvgReservationChange from 'public/images/ico_reservation_change.svg';
import SvgEvent from 'public/images/ico-event.svg';
import SvgReservationCancel from 'public/images/ico_reservation_cancel.svg';
import ReservationDetailInfoGroup from '.';
import { bookingDetailInfo } from 'src/components/templates/checkin/bookingDetailInfo/dummy';

export default {
  title: 'desktop / Organisms / ReservationDetailInfoGroup',
  component: ReservationDetailInfoGroup,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'ReservationDetailInfoGroup',
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
    <ReservationDetailInfoGroup
      bookingInfo={bookingDetailInfo.bookingInfo}
      breakdown={bookingDetailInfo.breakdown}
      list={list}
    />
  );
};
