import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ReservationDetailInfo from '.';
import { bookingDetailInfo } from 'src/components/templates/checkin/bookingDetailInfo/dummy';

export default {
  title: 'desktop / Molecules / ReservationDetailInfo',
  component: ReservationDetailInfo,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Reservation Detail Infomation',
  },
};

export const 예약상세정보정보: FC = () => {
  return (
    <ReservationDetailInfo
      bookingInfo={bookingDetailInfo.bookingInfo}
      breakdown={bookingDetailInfo.breakdown}
    />
  );
};
