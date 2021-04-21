import React, { FC } from 'react';
import SeatMapPremium from './index';
import styled from 'styled-components';

export default {
  title: 'desktop / Organisms / SeatMapPremium',
  component: SeatMapPremium,
  parameters: {
    componentSubtitle: 'SeatMapPremium 컴포넌트 Docs',
  },
};

export const 좌석_맵_프리미엄_이코노미: FC = () => {
  return (
    <S.container>
      <SeatMapPremium onClick={() => {}} />
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 450px;
  `,
};
