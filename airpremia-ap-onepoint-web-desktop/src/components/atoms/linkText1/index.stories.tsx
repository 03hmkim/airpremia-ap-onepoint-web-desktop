import React, { FC } from 'react';
import LinkText1 from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Atoms / LinkText1',
  component: LinkText1,
  parameters: {
    componentSubtitle: '밑줄 있는 텍스트',
  },
};

export const 링크텍스트1: FC = () => {
  return (
    <S.container>
      <LinkText1>앱카드로 결제하기</LinkText1>
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
