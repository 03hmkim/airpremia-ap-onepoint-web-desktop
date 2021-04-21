import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import TripListTable from '.';
import DummyList from './dummy';

export default {
  title: 'desktop / Organisms / TripListTable',
  component: TripListTable,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Trip List Table',
  },
};

const headerList = [
  '예약번호',
  '여정',
  '노선',
  '일정',
  '상태',
];
const widthList = [163, 180, 380, 411, 66, 1134];

export const 예약조회리스트테이블_리스트있음: FC = () => {
  return (
    <TripListTable
      headerList={headerList}
      widthList={widthList}
      list={DummyList}
      emptyMessage={'리스트가 없을 때 노출됩니다.'}
    />
  );
};

export const 예약조회리스트테이블_리스트없음: FC = () => {
  return (
    <TripListTable
      headerList={headerList}
      widthList={widthList}
      list={[]}
      emptyMessage={'리스트가 없을 때 노출됩니다.'}
    />
  );
};
