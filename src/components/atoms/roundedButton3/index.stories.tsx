import React, { FC } from 'react';
import RoundedButton3 from './';
import styled from 'styled-components';

export default {
  title: 'desktop / Atoms / RoundedButton3',
  component: RoundedButton3,
  parameters: {
    componentSubtitle: 'RoundedButton3 컴포넌트 Docs',
  },
};

export const 둥근버튼3: FC = () => {
  return (
    <S.container>
      <RoundedButton3>인증받기</RoundedButton3>
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
