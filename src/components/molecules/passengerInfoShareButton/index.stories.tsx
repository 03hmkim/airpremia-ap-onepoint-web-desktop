import React, { FC } from 'react';
import PassengerInfoShareButton from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / PassengerInfoShareButton',
  component: PassengerInfoShareButton,
  parameters: {
    componentSubtitle:
      'PassengerInfoShareButton 컴포넌트 Docs',
  },
};

export const 탑승객_여권_정보_유도_공유_버튼: FC = () => {
  return (
    <S.container>
      <PassengerInfoShareButton />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 1200px;
  `,
};
