import React, { FC } from 'react';
import PopupSwipeRight from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Organisms / Popup / RightSwipePopup',
  component: PopupSwipeRight,
  parameters: {
    componentSubtitle: 'RightSwipePopup 컴포넌트 Docs',
  },
};

export const 오른쪽스와이프팝업: FC = () => {
  return (
    <S.container>
      <PopupSwipeRight>
        <div>inner Hello</div>
      </PopupSwipeRight>
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
