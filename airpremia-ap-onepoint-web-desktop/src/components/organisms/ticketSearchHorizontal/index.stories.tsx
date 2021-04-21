import React, { FC } from 'react';
import TicketSearchHorizontal from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Organisms / TicketSearchHorizontal',
  component: TicketSearchHorizontal,
  parameters: {
    componentSubtitle:
      'TicketSearchHorizontal 컴포넌트 Docs',
  },
};

export const 항공권_검색_가로: FC = () => {
  return (
    <S.container>
      <TicketSearchHorizontal hasItineraryType />
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
