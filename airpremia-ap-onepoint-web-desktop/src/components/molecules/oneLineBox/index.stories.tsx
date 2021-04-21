import React, { FC } from 'react';
import OneLineBox from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / OneLineBox',
  component: OneLineBox,
  parameters: {
    componentSubtitle: 'OneLineBox 컴포넌트 Docs',
  },
};

export const 한줄박스: FC = () => {
  return (
    <S.container>
      <OneLineBox>
        웰컴 에어프레미아 5,000원 할인
      </OneLineBox>
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 765px;
  `,
};
