import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import BookingPersonInfo from '.';

export default {
  title: 'desktop / Organisms / BookingPersonInfo',
  component: BookingPersonInfo,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Booking Person Info',
  },
};

export const 예매자정보입력: FC = () => {
  return (
    <BookingPersonInfo
      userPhone={'+82 1012345678'}
      userEmail={'test@airpremia.com'}
    />
  );
};
