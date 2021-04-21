import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import DepArrListTable from '.';
import DummyList from './dummy';

export default {
  title: 'desktop / Organisms / depArrListTable',
  component: DepArrListTable,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Trip List Table',
  },
};

const headerList = [
  '항공편',
  '출발',
  '도착',
  '운항상태',
];
const widthList = [163, 180, 380, 411, 66, 1134];

export const 출도착조회리스트테이블_리스트있음: FC = () => {
  return (
    <DepArrListTable
      headerList={headerList}
      widthList={widthList}
      list={DummyList}
      emptyMessage={'리스트가 없을 때 노출됩니다.'}
      currIdx={0}
    />
  );
};

export const 출도착조회리스트테이블_리스트없음: FC = () => {
  return (
    <DepArrListTable
      headerList={headerList}
      widthList={widthList}
      list={[]}
      currIdx={0}
      emptyMessage={'리스트가 없을 때 노출됩니다.'}
    />
  );
};
