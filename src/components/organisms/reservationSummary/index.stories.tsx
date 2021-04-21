import React, { FC } from 'react';
import ReservationSummary from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Organisms / 결제 / ReservationSummary',
  component: ReservationSummary,
  parameters: {
    componentSubtitle:
      '예약완료페이지에 있는 요약 컴포넌트',
  },
};

export const 예약완료요약: FC = () => {
  return (
    <S.container>
      <ReservationSummary
        ticketTitle="ticketTitle"
        passengers="성인 1, 유아 1"
        reservationNumber="AP1234"
      />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 1200px;
  `,
};
