import React, { FC } from 'react';
import InputWithLabel from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / InputWithLabel',
  component: InputWithLabel,
  parameters: {
    componentSubtitle: 'InputWithLabel 컴포넌트 Docs',
  },
};

export const 라벨이있는입력: FC = () => {
  return (
    <S.container>
      <InputWithLabel></InputWithLabel>
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 380px;
  `,
};
