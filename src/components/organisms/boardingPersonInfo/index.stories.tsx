import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import BoardingPersonInfo from '.';

export default {
  title: 'desktop / Organisms / BoardingPersonInfo',
  component: BoardingPersonInfo,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'BoardingPersonInfo',
  },
};

export const 탑승객정보입력: FC = () => {
  return <BoardingPersonInfo />;
};
