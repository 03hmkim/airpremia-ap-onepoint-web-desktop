import React, { FC } from 'react';
import Footer from '.';

export default {
  title: 'desktop / Organisms / footer',
  component: Footer,
  parameters: {
    componentSubtitle: 'Footer 컴포넌트 Docs',
  },
};

export const footer: FC = () => {
  return <Footer></Footer>;
};
