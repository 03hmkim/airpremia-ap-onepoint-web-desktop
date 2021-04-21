import React, { FC } from 'react';
import SsrModalDisabled from '.';
import styled from 'styled-components';
import { dummySsrModalPassengers } from './dummy';

export default {
  title: 'desktop / Organisms / SsrModalDisabled',
  component: SsrModalDisabled,
  parameters: {
    componentSubtitle: 'SsrModalDisabled 컴포넌트 Docs',
  },
};

export const 부가서비스_모달_장애인: FC = () => {
  return (
    <S.container>
      <SsrModalDisabled
        passengers={dummySsrModalPassengers}
        onClickButton={() => {}}
      />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 800px;
  `,
};
