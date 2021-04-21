import React, { FC } from 'react';
import HpCertification from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Organisms / 결제 / HpCertification',
  component: HpCertification,
  parameters: {
    componentSubtitle: 'HpCertification 컴포넌트 Docs',
  },
};

export const 휴대폰번호인증: FC = () => {
  return (
    <S.container>
      <HpCertification></HpCertification>
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
