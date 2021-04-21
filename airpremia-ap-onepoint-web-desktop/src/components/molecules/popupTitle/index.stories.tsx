import React, { FC } from 'react';
import PopupTitle from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / PopupTitle',
  component: PopupTitle,
  parameters: {
    componentSubtitle: 'PopupTitle 컴포넌트 Docs',
  },
};

export const 팝업타이틀: FC = () => {
  return (
    <S.container>
      <PopupTitle>결제 카드 등록</PopupTitle>
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
