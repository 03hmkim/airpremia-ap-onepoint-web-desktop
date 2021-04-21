import React, { FC } from 'react';
import BankThumbnail from './';
import styled from 'styled-components';

export default {
  title: 'desktop / Atoms / BankThumbnail',
  component: BankThumbnail,
  parameters: {
    componentSubtitle: 'BankThumbnail 컴포넌트 Docs',
  },
};

export const 은행_썸네일: FC = () => {
  return (
    <S.container>
      <BankThumbnail code="C006" />
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
