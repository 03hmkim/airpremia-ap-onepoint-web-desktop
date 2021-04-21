import React from 'react';

import PriceByDate, { IProps } from '.';
import { Story } from '@storybook/react/types-6-0';
import {
  ECurrencyType,
  ELanguageType,
} from '../../../../core/lib/constant';

export default {
  title: 'cdk / Molecules / PriceByDate',
  component: PriceByDate,
};

const Template: Story<IProps> = (args) => {
  return <PriceByDate {...args} />;
};

export const 날짜별_가격_표기_이코노미일반 = Template.bind(
  {},
);
날짜별_가격_표기_이코노미일반.args = {
  day: '27',
  type: 'ey',
  price: 100000,
  isHighlighting: true,
  isOneDayTrip: false,
  language: ELanguageType.KR,
  currency: ECurrencyType.KRW,
  isDeparture: false,
  // isTravaling: false,
  isArrival: false,
  disabled: true,
  isFilled: true,
};

export const 날짜별_가격_표기_프리미엄이코노미일반 = Template.bind(
  {},
);
날짜별_가격_표기_프리미엄이코노미일반.args = {
  day: '27',
  type: 'pe',
  isHighlighting: true,
  isOneDayTrip: false,
  language: ELanguageType.KR,
  currency: ECurrencyType.KRW,
};
