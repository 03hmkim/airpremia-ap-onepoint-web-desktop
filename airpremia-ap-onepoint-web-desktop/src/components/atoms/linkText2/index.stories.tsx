import React, { FC } from 'react';
import LinkText2 from './';
import styled from 'styled-components';

export default {
  title: 'desktop / Atoms / LinkText2',
  component: LinkText2,
  parameters: {
    componentSubtitle: 'LinkText2 컴포넌트 Docs',
  },
};

export const 링크텍스트2: FC = () => {
  return (
    <S.container>
      <LinkText2>포인트 예매</LinkText2>
    </S.container>
  );
};
const S = {
  container: styled.div`
    font-size: 16px;
  `,
};
