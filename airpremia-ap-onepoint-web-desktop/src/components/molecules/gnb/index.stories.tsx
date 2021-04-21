import React, { FC } from 'react';
import Gnb from './';
import { gnbMenus } from './dataset';

export default {
  title: 'desktop / Molecules / gnb',
  component: Gnb,
  parameters: {
    componentSubtitle: 'Gnb 컴포넌트 Docs',
  },
};

export const GNB: FC = () => {
  return <Gnb menus={gnbMenus} />;
};
