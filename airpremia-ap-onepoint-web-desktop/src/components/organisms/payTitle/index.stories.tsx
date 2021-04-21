import React, { FC } from 'react';
import PayTitle from '.';
import { Tag } from 'src/components';

export default {
  title: 'desktop / Organisms / 결제 / PayTitle',
  component: PayTitle,
  parameters: {
    componentSubtitle: 'PayTitle 컴포넌트 Docs',
  },
};

export const 결제타이틀: FC = () => {
  return (
    <PayTitle
      tag={<Tag>환불불가</Tag>}
      title="서울/인천 - 하노이"
      description="왕복 항공권 (성인 1, 유아 1, 소아 1 )"
    />
  );
};
