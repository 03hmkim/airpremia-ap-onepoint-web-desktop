import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import TableHeaderWithList from '.';

export default {
  title: 'desktop / Molecules / TableHeaderWithList',
  component: TableHeaderWithList,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Table Header With List',
  },
};

export const 리스트를포함한테이블헤더: FC = () => {
  const headerList = [
    '예약번호',
    '여정',
    '노선',
    '일정',
    '상태',
  ];
  const widthList = [163, 180, 380, 411, 66, 1134];

  return (
    <TableHeaderWithList
      headerList={headerList}
      widthList={widthList}
    />
  );
};
