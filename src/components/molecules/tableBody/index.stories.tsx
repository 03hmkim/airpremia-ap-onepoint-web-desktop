import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import TableBody from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'desktop / Molecules / TableBody',
  component: TableBody,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'table body wrapper',
  },
};

export const 테이블바디: FC = () => {
  return (
    <TableBody onClick={action('클릭')}>
      <div>테이블이 들어갑니다.</div>
    </TableBody>
  );
};
