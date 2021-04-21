import React, { FC } from 'react';
import LinkBarWithImage from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / LinkBarWithImage',
  component: LinkBarWithImage,
  parameters: {
    componentSubtitle: 'LinkBarWithImage 컴포넌트 Docs',
  },
};

export const 로그인_링크: FC = () => {
  return (
    <S.container>
      <LinkBarWithImage />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 1200px;
    padding: 100px;
  `,
};
