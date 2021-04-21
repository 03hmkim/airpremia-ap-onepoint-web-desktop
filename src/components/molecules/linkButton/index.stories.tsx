import React, { FC } from 'react';
import LinkButton from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / LinkButton',
  component: LinkButton,
  parameters: {
    componentSubtitle: '예약 완료시 나오는 링크 버튼',
  },
};

export const 링크버튼: FC = () => {
  return (
    <S.container>
      <LinkButton to="/">자동체크인 신청하기</LinkButton>
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 595px;
  `,
};
