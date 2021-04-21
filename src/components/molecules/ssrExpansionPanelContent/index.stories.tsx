import React, { FC } from 'react';
import styled from 'styled-components';
import SsrExpansionPanelContent from '.';
import { dummySsrSelectedList } from './dummy';

export default {
  title: 'desktop / Molecules / SsrExpansionPanelContent',
  component: SsrExpansionPanelContent,
  parameters: {
    componentSubtitle:
      '부가서비스 패널 컴포넌트에서 사용하는 상세내용 컴포넌트',
  },
};

export const 부가서비스_확장패널_상세내용: FC = () => {
  return (
    <S.container>
      <SsrExpansionPanelContent
        title="ICN → HAN"
        list={dummySsrSelectedList}
      />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 767px;
    padding: 42px 35px;
  `,
};
