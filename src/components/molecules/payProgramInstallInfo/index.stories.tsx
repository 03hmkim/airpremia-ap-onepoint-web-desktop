import React, { FC } from 'react';
import PayProgramInstallInfo from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / PayProgramInstallInfo',
  component: PayProgramInstallInfo,
  parameters: {
    componentSubtitle:
      'PayProgramInstallInfo 컴포넌트 Docs',
  },
};

export const 결제프로그램수동설치안내: FC = () => {
  return (
    <S.container>
      <PayProgramInstallInfo />
    </S.container>
  );
};

const S = {
  container: styled.div``,
};
