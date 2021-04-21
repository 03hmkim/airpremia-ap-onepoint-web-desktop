import React, { FC } from 'react';
import RoundedButton5 from './';
import styled from 'styled-components';

export default {
  title: 'desktop / Atoms / RoundedButton5',
  component: RoundedButton5,
  parameters: {
    componentSubtitle:
      'HomeTicketSearch 시 사용하는 RoundedButton5 컴포넌트',
  },
};

export const 둥근버튼5: FC = () => {
  return (
    <S.container>
      <RoundedButton5 isActive={true}>왕복</RoundedButton5>
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
