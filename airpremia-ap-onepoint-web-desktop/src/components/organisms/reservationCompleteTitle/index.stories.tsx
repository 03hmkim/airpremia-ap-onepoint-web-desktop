import React, { FC } from 'react';
import ReservationCompleteTitle from '.';
import styled from 'styled-components';

export default {
  title:
    'desktop / Organisms / 결제 / ReservationCompleteTitle',
  component: ReservationCompleteTitle,
  parameters: {
    componentSubtitle:
      '예약 완료페이지에서 사용되는 타이틀',
  },
};

export const 완료페이지타이틀: FC = () => {
  return (
    <S.container>
      <ReservationCompleteTitle />
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
