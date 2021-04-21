import React, { FC } from 'react';
import SsrModalSeat from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Organisms / SsrModalSeat',
  component: SsrModalSeat,
  parameters: {
    componentSubtitle: 'SsrModalSeat 컴포넌트 Docs',
  },
};

export const 부가서비스_모달_좌석: FC = () => {
  return (
    <S.container>
      <SsrModalSeat trips={[]} />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 800px;
  `,
};
