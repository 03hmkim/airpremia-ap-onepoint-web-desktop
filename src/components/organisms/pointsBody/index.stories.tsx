import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import PointsBody from './';
import { pointsHistory } from 'src/components/templates/points/dummy';

export default {
  title: 'desktop / Organisms / PointsBody',
  component: PointsBody,
  decorators: [withKnobs],
};

export const 포인트화면_바디_리스트없음: FC = () => {
  return <PointsBody list={[]} />;
};

export const 포인트화면_바디_리스트있음: FC = () => {
  return <PointsBody list={pointsHistory} />;
};
