import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import NothingOnlineCheckinCard from './';

export default {
  title: 'desktop / Molecules / NothingOnlineCheckinCard',
  component: NothingOnlineCheckinCard,
  decorators: [withKnobs],
};

export const 온라인체크인가능여부없음: FC = () => {
  return <NothingOnlineCheckinCard />;
};
