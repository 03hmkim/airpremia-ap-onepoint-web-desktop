import React, { FC } from 'react';
import OnlineCheckinInfo from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / OnlineCheckinInfo',
  component: OnlineCheckinInfo,
  parameters: {
    componentSubtitle: 'OnlineCheckinInfo 컴포넌트 Docs',
  },
};

export const 온라인_체크인_안내: FC = () => {
  return (
    <S.container>
      <OnlineCheckinInfo />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 1200px;
  `,
};
