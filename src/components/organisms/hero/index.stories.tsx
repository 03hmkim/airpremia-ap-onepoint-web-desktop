import React, { FC } from 'react';
import Hero from '.';

export default {
  title: 'desktop / Organisms / Hero',
  component: Hero,
  parameters: {
    componentSubtitle: 'Hero 컴포넌트 Docs',
  },
};

export const hero: FC = () => {
  return <Hero />;
};
