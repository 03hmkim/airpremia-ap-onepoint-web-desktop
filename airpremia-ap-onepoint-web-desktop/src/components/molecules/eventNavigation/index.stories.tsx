import React, { FC } from 'react';
import EventNavigation from '.';

export default {
  title: 'desktop / Molecules / EventNavigation',
  component: EventNavigation,
  parameters: {
    componentSubtitle:
      'Home에서 사용하는 이벤트 네비게이션',
  },
};

export const 이벤트_네비게이션: FC = () => {
  return <EventNavigation />;
};
