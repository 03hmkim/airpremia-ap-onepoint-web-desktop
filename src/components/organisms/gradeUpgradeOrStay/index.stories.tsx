import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import GradeUpgradeOrStay from './';

export default {
  title: 'desktop / Organisms / GradeUpgradeOrStay',
  component: GradeUpgradeOrStay,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'GradeUpgradeOrStay',
  },
};

export const 등급업그레이드또는유지팝업_블루: FC = () => {
  return (
    <GradeUpgradeOrStay grade="blue" savedMileage={1000} />
  );
};

export const 등급업그레이드또는유지팝업_실버: FC = () => {
  return (
    <GradeUpgradeOrStay
      grade="silver"
      savedMileage={1000}
      holdingStartDate="2019-12-25T23:30:00"
      holdingEndDate="2021-11-25T23:30:00"
    />
  );
};

export const 등급업그레이드또는유지팝업_골드: FC = () => {
  return (
    <GradeUpgradeOrStay
      grade="gold"
      savedMileage={240000}
      holdingStartDate="2019-10-25T23:30:00"
      holdingEndDate="2021-09-25T23:30:00"
    />
  );
};
