import React, { FC } from 'react';
import PayPasswordInput from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Organisms / 결제 / PayPasswordInput',
  component: PayPasswordInput,
  parameters: {
    componentSubtitle: 'PayPassword 컴포넌트 Docs',
  },
};

export const 결제비밀번호: FC = () => {
  return (
    <S.container>
      <PayPasswordInput
        popupTitleLabel="결제 비밀번호 등록"
        description="결제에 사용할 6자리 비밀번호를 입력해주세요."
        isConfirm={true}
      />
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
