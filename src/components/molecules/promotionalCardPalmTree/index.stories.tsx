import React, { FC } from 'react';
import PromotionalCardPalmTree from '.';

export default {
  title: 'desktop / Molecules / PromotionalCard / PalmTree',
  component: PromotionalCardPalmTree,
  parameters: {
    componentSubtitle:
      'PromotionalCardPalmTree 컴포넌트 Docs',
  },
};

export const palmTree: FC = () => {
  return <PromotionalCardPalmTree />;
};
