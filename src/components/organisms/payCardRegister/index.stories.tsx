import React, { FC } from 'react';
import PayCardRegister from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Organisms / 결제 / PayCardRegister',
  component: PayCardRegister,
  parameters: {
    componentSubtitle: 'PayCardRegister 컴포넌트 Docs',
  },
};

export const 결제카드등록: FC = () => {
  return (
    <S.container>
      <PayCardRegister />
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
