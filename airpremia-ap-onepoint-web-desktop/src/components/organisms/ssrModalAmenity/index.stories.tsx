import React, { FC } from 'react';
import SsrModalAmenity from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Organisms / SsrModalAmenity',
  component: SsrModalAmenity,
  parameters: {
    componentSubtitle: 'SsrModalAmenity 컴포넌트 Docs',
  },
};

export const 부가서비스_모달_편의용품: FC = () => {
  return (
    <S.container>
      <SsrModalAmenity />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 800px;
  `,
};
