import React, { FC } from 'react';
import PassengersDropdown from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Organisms / PassengersDropdown',
  component: PassengersDropdown,
  parameters: {
    componentSubtitle:
      '승객 select 활성화시 나오는 드롭다운 컴포넌트',
  },
};

export const 승객드롭다운: FC = () => {
  return (
    <S.container>
      <PassengersDropdown />
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
