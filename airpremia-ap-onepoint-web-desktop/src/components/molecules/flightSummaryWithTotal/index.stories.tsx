import React, { FC } from 'react';
import FlightSummaryWithTotal from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / FlightSummaryWithTotal',
  component: FlightSummaryWithTotal,
  parameters: {
    componentSubtitle:
      'FlightSummaryWithTotal 컴포넌트 Docs',
  },
};

export const 항공권_요약_금액포함: FC = () => {
  return (
    <S.container>
      <FlightSummaryWithTotal />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 1200px;
  `,
};
