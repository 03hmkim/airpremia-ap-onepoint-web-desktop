import React, { FC } from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import TableHead from '.';

export default {
  title: 'desktop / Molecules / TableHead',
  component: TableHead,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Table head',
  },
};

export const 테이블헤드: FC = () => {
  return <TableHead>{text('제목', '공지사항')}</TableHead>;
};
