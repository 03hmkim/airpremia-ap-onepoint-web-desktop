import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import BookingChangeSummaryCard from './';
import { dummyResp } from 'src/components/templates/checkin/bookingRefundSummary/dummy';

export default {
  title: 'desktop / Molecules / BookingCancelSummaryCard',
  component: BookingChangeSummaryCard,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'BookingCancelSummaryCard',
  },
};
const onClickCheckbox = (key: string) => () => {
  console.log(key)
};

export const 예약취소_내용정보: FC = () => {
  const { refundBreakdown } = dummyResp;
  console.log(refundBreakdown)
  return (
    <BookingChangeSummaryCard
      bookingDetailInfo="성인2, 유아2"
      toBeRemovedJourneyKey={[]}
      onClickCheckbox={onClickCheckbox}
    />
  );
};
