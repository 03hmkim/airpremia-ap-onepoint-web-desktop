import React, { FC } from 'react';
import ButtonLink2Type4 from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / ButtonLink2Type4',
  component: ButtonLink2Type4,
  parameters: {
    componentSubtitle: 'ButtonLink2Type4 컴포넌트 Docs',
  },
};

export const 버튼링크2타입4: FC = () => {
  return (
    <S.container>
      <ButtonLink2Type4
        lengthType="short"
        onClick={() => {}}
      >
        항공권 규정
      </ButtonLink2Type4>
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 285px;
  `,
};
