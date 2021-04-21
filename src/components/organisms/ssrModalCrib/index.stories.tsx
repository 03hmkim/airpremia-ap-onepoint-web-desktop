import React, { FC } from 'react';
import SsrModalCrib from '.';
import styled from 'styled-components';
import { dummySsrModalCribInputs } from './dummy';

export default {
  title: 'desktop / Organisms / SsrModalCrib',
  component: SsrModalCrib,
  parameters: {
    componentSubtitle: 'SsrModalCrib 컴포넌트 Docs',
  },
};

export const 부가서비스_모달_유아용침대: FC = () => {
  return (
    <S.container>
      <SsrModalCrib
        onClickButton={() => {}}
        inputs={dummySsrModalCribInputs}
      />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 800px;
  `,
};
