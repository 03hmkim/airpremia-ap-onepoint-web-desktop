import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import CouponRegistration from '.';

export default {
  title: 'desktop / Organisms / CouponRegistration',
  component: CouponRegistration,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'CouponRegistration',
  },
};

export const 쿠폰등록하기_모달: FC = () => {
  return <CouponRegistration />;
};
