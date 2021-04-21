import React, { FC } from 'react';
import PassengerListComplete from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / PassengerListComplete',
  component: PassengerListComplete,
  parameters: {
    componentSubtitle:
      'PassengerListComplete 컴포넌트 Docs',
  },
};

export const 탑승객_리스트_완료: FC = () => {
  return (
    <S.container>
      <PassengerListComplete />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 1200px;
  `,
};
