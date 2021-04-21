import React, { FC } from 'react';
import LinkButton2 from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / LinkButton2',
  component: LinkButton2,
  parameters: {
    componentSubtitle: '예약 완료시 나오는 링크 버튼',
  },
};

export const 링크버튼: FC = () => {

  const onClick = () => {}

  return (
    <S.container>
      <LinkButton2 onClick={onClick}>자동체크인 신청하기</LinkButton2>
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 595px;
  `,
};
