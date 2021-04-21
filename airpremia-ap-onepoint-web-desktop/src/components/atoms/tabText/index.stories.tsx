import React, { FC } from 'react';
import TabText from './';
import styled from 'styled-components';

export default {
  title: 'desktop / Atoms / TabText',
  component: TabText,
  parameters: {
    componentSubtitle:
      '활성화/비활성화 상태가 있는 탭의 텍스트버튼',
  },
};

export const 탭텍스트: FC = () => {
  return (
    <S.container>
      <TabText value="0" isActive={true}>
        항공권별
      </TabText>
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
