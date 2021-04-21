import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Table from '.';

export default {
  title: 'desktop / Organisms / Table',
  component: Table,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Cabin Class 구간 하나',
  },
};

export const 테이블: FC = () => {
  return <Table />;
};
