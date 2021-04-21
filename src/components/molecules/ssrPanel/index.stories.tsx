import { FC } from 'react';
import styled from 'styled-components';
import SsrPanel from './';
import { dummySsrPanel } from './dummy';

export default {
  title: 'desktop / Molecules / SsrPanel',
  component: SsrPanel,
  parameters: {
    componentSubtitle: 'SsrPanel 컴포넌트 Docs',
  },
};

export const 부가서비스_패널: FC = () => {
  return (
    <S.container>
      <SsrPanel {...dummySsrPanel} />
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 767px;
  `,
};
