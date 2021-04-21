import React, { FC } from 'react';
import SsrModalMeal from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Organisms / SsrModalMeal',
  component: SsrModalMeal,
  parameters: {
    componentSubtitle: 'SsrModalMeal 컴포넌트 Docs',
  },
};

export const 부가서비스_모달_기내식: FC = () => {
  return (
    <S.container>
      <SsrModalMeal />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 800px;
  `,
};
