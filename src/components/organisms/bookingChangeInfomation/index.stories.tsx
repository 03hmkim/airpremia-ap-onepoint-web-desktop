import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import BookingCancelInfomation from '.';

export default {
  title: 'desktop / Organisms / BookingCancelInfomation',
  component: BookingCancelInfomation,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '',
  },
};

export const 예약취소유의사항그룹: FC = () => {
  return <BookingCancelInfomation />;
};
