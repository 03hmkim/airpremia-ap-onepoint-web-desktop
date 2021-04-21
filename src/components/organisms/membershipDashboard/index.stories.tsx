import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import MembershipDashboard from './';

export default {
  title: 'desktop / Organisms / MembershipDashboard',
  component: MembershipDashboard,
  decorators: [withKnobs],
};

export const 멤버십대시보드_블루: FC = () => {
  return (
    <MembershipDashboard mileage={1000} grade="blue" />
  );
};

export const 멤버십대시보드_실버: FC = () => {
  return (
    <MembershipDashboard mileage={90000} grade="silver" />
  );
};

export const 멤버십대시보드_골드: FC = () => {
  return (
    <MembershipDashboard mileage={304000} grade="gold" />
  );
};
