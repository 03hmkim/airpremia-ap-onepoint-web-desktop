import React, { FC } from 'react';
import TaskButton from './';
import styled from 'styled-components';
import {
  DARK_BLUE1,
  WHITE1,
} from '@airpremia/cdk/styles/colors';

export default {
  title: 'desktop / Atoms / TaskButton',
  component: TaskButton,
  parameters: {
    componentSubtitle: 'TaskButton 컴포넌트 Docs',
  },
};

export const 테스크버튼: FC = () => {
  return (
    <S.container>
      <TaskButton
        backgroundColor={DARK_BLUE1}
        color={WHITE1}
      >
        버튼
      </TaskButton>
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 300px;
  `,
};
