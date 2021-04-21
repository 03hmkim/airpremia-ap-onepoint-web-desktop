import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import GradeDashboard from './';

export default {
  title: 'desktop / Organisms / GradeDashboard',
  component: GradeDashboard,
  decorators: [withKnobs],
};

export const 등급대시보드_블루: FC = () => {
  return <GradeDashboard grade={'blue'} />;
};

export const 등급대시보드_실버: FC = () => {
  return <GradeDashboard grade={'silver'} />;
};

export const 등급대시보드_골드: FC = () => {
  return <GradeDashboard grade={'gold'} />;
};
