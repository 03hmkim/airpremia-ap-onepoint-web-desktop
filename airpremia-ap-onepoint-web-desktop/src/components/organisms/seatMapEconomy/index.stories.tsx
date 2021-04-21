import React, { FC } from 'react';
import styled from 'styled-components';
import SeatMapEconomy from './';

export default {
  title: 'desktop / Organisms / SeatMapEconomy',
  component: SeatMapEconomy,
  parameters: {
    componentSubtitle: 'SeatMapEconomy 컴포넌트 Docs',
  },
};

export const 좌석_맵_이코노미: FC = () => {
  return (
    <S.container>
      <SeatMapEconomy onClick={() => {}} />
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 450px;
  `,
};
