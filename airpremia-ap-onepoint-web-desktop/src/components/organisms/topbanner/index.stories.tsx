import React, { FC } from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { Topbanner } from 'src/components';

export default {
  title: 'desktop / Organisms / Topbanner',
  component: Topbanner,
  decorators: [withKnobs],
};

export const topbanner: FC = () => {
  return <Topbanner />;
};
