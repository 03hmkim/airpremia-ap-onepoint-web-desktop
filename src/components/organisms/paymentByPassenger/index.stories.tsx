import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import PaymentByPassenger from './';
import { dummyResp } from 'src/components/templates/checkin/bookingRefundSummary/dummy';

export default {
  title: 'desktop / Organisms / PaymentByPassenger',
  component: PaymentByPassenger,
  decorators: [withKnobs],
};

export const 탑승객별_기존결제금액: FC = () => {
  const { passengerBreakdown } = dummyResp.refundBreakdown;
  return (
    <PaymentByPassenger
      passengerBreakdown={passengerBreakdown}
      getPriceLabel={() => '30,000 원'}
    />
  );
};
