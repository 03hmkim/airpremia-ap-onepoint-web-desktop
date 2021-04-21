import React, { FC } from 'react';
import ColorLabel from './';
import styled from 'styled-components';
import { LIGHT_BLUE2 } from '@airpremia/cdk/styles/colors';

export default {
  title: 'desktop / Atoms / ColorLabel',
  component: ColorLabel,
  parameters: {
    componentSubtitle: 'ColorLabel 컴포넌트 Docs',
  },
};

export const 컬러라벨: FC = () => {
  return (
    <S.container>
      <ColorLabel color={LIGHT_BLUE2}>무료</ColorLabel>
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
