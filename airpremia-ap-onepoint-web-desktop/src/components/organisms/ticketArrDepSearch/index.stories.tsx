import React, { FC } from 'react';
import TicketArrDepSearch from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Organisms / ticketArrDepSearch',
  component: TicketArrDepSearch,
  parameters: {
    componentSubtitle:
      'TicketArrivalInquiry 컴포넌트 Docs',
  },
};

export const 항공권_검색_가로: FC = () => {
  return (
    <S.container>
      <TicketArrDepSearch hasItineraryType />
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
