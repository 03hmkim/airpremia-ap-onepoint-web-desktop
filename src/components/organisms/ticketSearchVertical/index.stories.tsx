import React, { FC } from 'react';
import TicketSearchVertical from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Organisms / TicketSearchVertical',
  component: TicketSearchVertical,
  parameters: {
    componentSubtitle: 'TicketSearchVertical 컴포넌트 Docs',
  },
};

export const 항공권_검색_세로: FC = () => {
  return (
    <S.container>
      <TicketSearchVertical />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 360px;
  `,
};
