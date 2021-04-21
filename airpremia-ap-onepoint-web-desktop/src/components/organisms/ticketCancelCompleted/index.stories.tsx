import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import TicketCancelCompleted from './';
import { refundCompletedBreakdown } from 'src/components/templates/checkin/bookingRefundSummary/dummy';

export default {
  title: 'desktop / Organisms / TicketCancelCompleted',
  component: TicketCancelCompleted,
  decorators: [withKnobs],
};

export const 항공권취소성공페이지: FC = () => {
  return (
    <TicketCancelCompleted
      refundBreakdown={refundCompletedBreakdown}
    />
  );
};
