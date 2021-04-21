import React, { FC } from 'react';
import SsrModalPregnant from '.';
import styled from 'styled-components';
import { dummySsrModalPassengers } from './dummy';

export default {
  title: 'desktop / Organisms / SsrModalPregnant',
  component: SsrModalPregnant,
  parameters: {
    componentSubtitle: 'SsrModalPregnant 컴포넌트 Docs',
  },
};

export const 부가서비스_모달_임산부: FC = () => {
  return (
    <S.container>
      <SsrModalPregnant
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
