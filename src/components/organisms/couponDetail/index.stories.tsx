import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import CouponDetail from './';

export default {
  title: 'desktop / Organisms / CouponDetail',
  component: CouponDetail,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'CouponDetail',
  },
};

export const 나의쿠폰상세: FC = () => {
  const expiringAt = '2020-10-27T08:03:17.893Z';
  const discount = 15;
  const availableStart = '2020-08-27T08:03:17.893Z';
  const availableEnd = '2020-12-27T08:03:17.893Z';
  const boardingStart = '2020-08-27T08:03:17.893Z';
  const boardingEnd = '2020-12-27T08:03:17.893Z';
  const availablePosition = '모바일 앱/웹';
  const availableFlight = '모든 운임';
  const availableJounery = '서울/인천(ICN) － 산호세(SJC)';
  const availableCondition = '왕복 운임';
  const availableCount = '1회';

  return (
    <CouponDetail
      expiringAt={expiringAt}
      couponName="산호세 신규 취항 기념 15% 할인 쿠폰"
      discount={discount}
      availableStart={availableStart}
      availableEnd={availableEnd}
      boardingStart={boardingStart}
      boardingEnd={boardingEnd}
      availablePosition={availablePosition}
      availableFlight={availableFlight}
      availableJounery={availableJounery}
      availableCondition={availableCondition}
      availableCount={availableCount}
    />
  );
};
