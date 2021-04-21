import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import UserGradeGuideTable from './';

export default {
  title: 'desktop / Organisms / UserGradeGuideTable',
  component: UserGradeGuideTable,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'UserGradeGuideTable',
  },
};

export const 회원등급안내표_블루: FC = () => {
  return <UserGradeGuideTable grade="blue" />;
};

export const 회원등급안내표_실버: FC = () => {
  return <UserGradeGuideTable grade="silver" />;
};

export const 회원등급안내표_골드: FC = () => {
  return <UserGradeGuideTable grade="gold" />;
};
