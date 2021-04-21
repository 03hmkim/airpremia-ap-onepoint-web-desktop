import React, { FC } from 'react';
import TimeLimitPromotionCard from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / TimeLimitPromotionCard',
  component: TimeLimitPromotionCard,
  parameters: {
    componentSubtitle:
      '예약 완료 페이지에 나오는 타임제한프로모션카드 컴포넌트',
  },
};

export const 타임제한프로모션카드: FC = () => {
  return (
    <S.container>
      <TimeLimitPromotionCard
        imgUrl="http://placeimg.com/350/500/tech"
        title="엑티비티 예약은 마이리얼트립"
        from="2019. 7. 1."
        to="2019. 8. 1."
      />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 350px;
  `,
};
