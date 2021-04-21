import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Header } from 'src/components';

export default {
  title: 'desktop / Organisms / Header',
  component: Header,
  decorators: [withKnobs],
};

export const header: FC = () => {
  return <Header />;
};
