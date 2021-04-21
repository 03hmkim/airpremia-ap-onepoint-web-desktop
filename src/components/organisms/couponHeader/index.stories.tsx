import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import CouponHeader from './';

export default {
  title: 'desktop / Organisms / CouponHeader',
  component: CouponHeader,
  decorators: [withKnobs],
};

export const 나의쿠폰_헤더: FC = () => {
  return (
    <CouponHeader
      name={'LEE YONGHYUN'}
      numberOfCoupons={3}
    />
  );
};
