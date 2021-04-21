import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import RefundAmount from './';
import { dummyResp } from 'src/components/templates/checkin/bookingRefundSummary/dummy';

export default {
  title: 'desktop / Organisms / RefundAmount',
  component: RefundAmount,
  decorators: [withKnobs],
};

export const 환불금액: FC = () => {
  const { refundDetail } = dummyResp.refundBreakdown;
  return (
    <RefundAmount
      refundDetail={refundDetail}
      refundTotalPriceLabel="30,000 pp + 1,000,000 원"
    />
  );
};
