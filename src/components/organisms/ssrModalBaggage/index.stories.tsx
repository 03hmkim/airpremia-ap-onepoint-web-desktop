import React, { FC } from 'react';
import SsrModalBaggage from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Organisms / SsrModalBaggage',
  component: SsrModalBaggage,
  parameters: {
    componentSubtitle: 'SsrModalBaggage 컴포넌트 Docs',
  },
};

export const 부가서비스_모달_위탁수하물: FC = () => {
  return (
    <S.container>
      <SsrModalBaggage />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 800px;
  `,
};
