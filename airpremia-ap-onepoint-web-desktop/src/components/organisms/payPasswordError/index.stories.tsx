import React, { FC } from 'react';
import PayPasswordError from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Organisms / 결제 / PayPasswordError',
  component: PayPasswordError,
  parameters: {
    componentSubtitle: 'PayPasswordError 컴포넌트 Docs',
  },
};

export const 결제비밀번호오류: FC = () => {
  return (
    <S.container>
      <PayPasswordError />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 480px;
    padding: 50px;
    box-sizing: border-box;
  `,
};
