import React, { FC } from 'react';
import ExitLabel from './';
import styled from 'styled-components';
import { EPosition } from '../arrow';

export default {
  title: 'desktop / Atoms / ExitLabel',
  component: ExitLabel,
  parameters: {
    componentSubtitle: 'ExitLabel 컴포넌트 Docs',
  },
};

export const 출구: FC = () => {
  return (
    <S.container>
      <ExitLabel direction={EPosition.RIGHT} />
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
