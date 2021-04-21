import React, { FC } from 'react';
import SsrModalPet from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Organisms / SsrModalPet',
  component: SsrModalPet,
  parameters: {
    componentSubtitle: 'SsrModalPet 컴포넌트 Docs',
  },
};

export const 부가서비스_모달_반려동물동반: FC = () => {
  return (
    <S.container>
      <SsrModalPet />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 800px;
  `,
};
