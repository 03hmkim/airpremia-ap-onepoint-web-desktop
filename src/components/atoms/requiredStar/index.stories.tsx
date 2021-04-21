import React, { FC } from 'react';
import styled from 'styled-components';
import RequiredStar from './';

export default {
  title: 'desktop / Atoms / RequiredStar',
  component: RequiredStar,
  parameters: {
    componentSubtitle: 'RequiredStar 컴포넌트 Docs',
  },
};

export const 필수표시: FC = () => {
  return (
    <S.container>
      <RequiredStar />
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
