import React, { FC } from 'react';
import Subtitle from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / Subtitle',
  component: Subtitle,
  parameters: {
    componentSubtitle: 'Subtitle 컴포넌트 Docs',
  },
};

export const 부제목: FC = () => {
  return (
    <S.container>
      <Subtitle>결제 방법</Subtitle>
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 765px;
  `,
};
