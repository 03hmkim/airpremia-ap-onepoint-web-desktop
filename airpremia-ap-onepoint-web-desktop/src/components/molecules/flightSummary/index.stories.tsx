import React, { FC } from 'react';
import styled from 'styled-components';
import FlightSummary from '.';

export default {
  title: 'desktop / Molecules / FlightSummary',
  component: FlightSummary,
  parameters: {
    componentSubtitle:
      '예약완료요약 컴포넌트에서 사용하는 컴포넌트',
  },
};

export const 항공편요약: FC = () => {
  return (
    <S.container>
      <FlightSummary
        title="ICN → HAN"
        canRefund={true}
        time="2019.12. 21. (토) 09:00 - 13:30"
        classType="프리미엄 이코노미"
        flightNumber="AP1234"
      />
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
