import React, { FC } from 'react';
import OnlineCheckinCard from '.';
import styled from 'styled-components';
import { dummyOnlineCheckinCard } from './dummy';

export default {
  title: 'desktop / Organisms / OnlineCheckinCard',
  component: OnlineCheckinCard,
  parameters: {
    componentSubtitle: 'OnlineCheckinCard 컴포넌트 Docs',
  },
};

export const 온라인_체크인_카드: FC = () => {
  return (
    <S.container>
      <OnlineCheckinCard {...dummyOnlineCheckinCard[0]} />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 1200px;
  `,
};
