import React, { FC } from 'react';
import InputCardNumber from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / InputCardNumber',
  component: InputCardNumber,
  parameters: {
    componentSubtitle: 'InputCardNumber 컴포넌트 Docs',
  },
};

export const 카드번호입력: FC = () => {
  return (
    <S.container>
      <InputCardNumber />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 380px;
  `,
};
