import React, { FC } from 'react';
import Tooltip from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / Tooltip',
  component: Tooltip,
  parameters: {
    componentSubtitle: 'Tooltip 컴포넌트 Docs',
  },
};

export const 툴팁: FC = () => {
  return (
    <S.container>
      <Tooltip>
        4DBC 번호는 신용카드 번호 오른쪽 위 또는 왼쪽 위에
        인쇄된 4자리 숫자를 의미합니다.
      </Tooltip>
    </S.container>
  );
};
const S = {
  container: styled.div`
    display: flex;
    justify-content: center;
    width: 600px;
  `,
};
