import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import PointsHeader from '.';

export default {
  title: 'desktop / Organisms / PointsHeader',
  component: PointsHeader,
  decorators: [withKnobs],
};

export const 포인트화면_헤더_소멸예정있음: FC = () => {
  return (
    <PointsHeader
      name="LEE JINWON"
      points={5000000}
      expirationDate={'2020-09-02'}
      toBeExpiratedPoints={100000}
    />
  );
};

export const 포인트화면_헤더_소멸예정없음: FC = () => {
  return (
    <PointsHeader name="LEE JINWON" points={5000000} />
  );
};
