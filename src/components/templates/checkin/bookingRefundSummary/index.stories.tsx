import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import BookingRefundSummary from '.';
import { caution, dummyResp } from './dummy';
import { Title, TaskButton } from 'src/components';
import {
  BookingCancelSummaryCard,
  PaymentByPassenger,
  RefundAmount,
  Caution,
} from 'src/components';

export default {
  title: 'desktop / Templates / BookingRefundSummary',
  component: BookingRefundSummary,
  decorators: [withKnobs],
};

export const 예약취소: FC = () => {
  const { refundBreakdown } = dummyResp;
  return (
    <BookingRefundSummary
      title={<Title>환불 내역을 확인해주세요.</Title>}
      bookingCancelSummaryCard={
        <BookingCancelSummaryCard
          bookingInfo={refundBreakdown.bookingInfo}
          canceledPaxCountLabel="성인1, 유아1"
        />
      }
      paymentByPassenger={
        <PaymentByPassenger
          passengerBreakdown={
            refundBreakdown.passengerBreakdown
          }
          getPriceLabel={(a: number, b: number) =>
            (a + b).toString()
          }
        />
      }
      refundAmount={
        <RefundAmount
          refundDetail={refundBreakdown.refundDetail}
          refundTotalPriceLabel={'30,000 pp + 300,000 원'}
        />
      }
      caution={
        <Caution
          title={caution.title}
          body={caution.body}
        />
      }
      button={
        <TaskButton onClick={() => {}}>
          예약 취소
        </TaskButton>
      }
    />
  );
};
