import React, { FC } from 'react';
import styled from 'styled-components';
import SsrExpansionPanel from '.';
import { dummySsrExpansionPanel } from './dummy';

export default {
  title: 'desktop / Molecules / SsrExpansionPanel',
  component: SsrExpansionPanel,
  parameters: {
    componentSubtitle:
      '부가서비스 페이지에서 사용하는 확장패널 컴포넌트',
  },
};

export const 부가서비스_확장패널: FC = () => {
  return (
    <S.container>
      <SsrExpansionPanel
        {...dummySsrExpansionPanel}
        onClick={() => {}}
      />
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 767px;
  `,
};
