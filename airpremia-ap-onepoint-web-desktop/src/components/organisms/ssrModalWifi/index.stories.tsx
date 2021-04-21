import React, { FC } from 'react';
import SsrModalWifi from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Organisms / SsrModalWifi',
  component: SsrModalWifi,
  parameters: {
    componentSubtitle: 'SsrModalWifi 컴포넌트 Docs',
  },
};

export const 부가서비스_모달_와이파이: FC = () => {
  return (
    <S.container>
      <SsrModalWifi />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 800px;
  `,
};
