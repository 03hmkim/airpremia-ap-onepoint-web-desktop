import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import BookingCancelComplete from './';
import { Title, TaskButton } from 'src/components';
import { dummyResp } from '../bookingRefundSummary/dummy';
import { TicketCancelCompleted } from 'src/components';
import { Container } from 'src/styles/layout';

export default {
  title: 'desktop / Templates / BookingCancelComplete',
  component: BookingCancelComplete,
  decorators: [withKnobs],
};

export const 부킹취소완료템플릿: FC = () => {
  return (
    <Container>
      <BookingCancelComplete
        title={<Title>예약이 취소 되었습니다.</Title>}
        ticketCancelCompleted={
          <TicketCancelCompleted
            refundBreakdown={dummyResp.refundBreakdown}
          />
        }
        taskButton={<TaskButton>홈</TaskButton>}
      />
    </Container>
  );
};
