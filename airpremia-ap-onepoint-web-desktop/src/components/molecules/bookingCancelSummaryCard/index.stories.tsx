import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import BookingCancelSummaryCard from './';
import { dummyResp } from 'src/components/templates/checkin/bookingRefundSummary/dummy';

export default {
  title: 'desktop / Molecules / BookingCancelSummaryCard',
  component: BookingCancelSummaryCard,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'BookingCancelSummaryCard',
  },
};

export const 예약취소_내용정보: FC = () => {
  const { refundBreakdown } = dummyResp;
  return (
    <BookingCancelSummaryCard
      bookingInfo={refundBreakdown.bookingInfo}
      canceledPaxCountLabel="성인2, 유아2"
    />
  );
};
