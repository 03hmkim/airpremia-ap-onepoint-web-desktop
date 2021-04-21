import React, { FC } from 'react';
import WarningList from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / WarningList',
  component: WarningList,
  parameters: {
    componentSubtitle: 'SSR에 나오는 유의사항',
  },
};

export const 유의사항: FC = () => {
  const descriptions: string[] = [
    '위탁 수하물 1개당 최대 무게는 23KG이며, 가로, 세로, 높이의 합이 158cm를 초과할 수 없습니다.',
    '사전 위탁 수하물 구매 후 최초 출발 시간 기준 24시간 전부터는 환불이 불가합니다.',
    '현장에서 위탁 수하물을 구매하는 경우 온라인 사전 구매의 할인율이 적용되지 않습니다.',
  ];
  return (
    <S.container>
      <WarningList
        title="유의사항"
        descriptions={descriptions}
      ></WarningList>
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
