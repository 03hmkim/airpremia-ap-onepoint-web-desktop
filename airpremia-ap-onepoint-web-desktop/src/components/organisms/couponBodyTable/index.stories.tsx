import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import CouponBodyTable from './';

export default {
  title: 'desktop / Organisms / CouponBodyTable',
  component: CouponBodyTable,
  decorators: [withKnobs],
};

export const 쿠폰리스트테이블_쿠폰있음: FC = () => {
  const couponList = [
    {
      couponCode: '1234',
      couponName: '에어프레미아 사전 등록 이벤트 보상',
      couponType: '100,000원 할인',
      expiringAt: '2020-10-05T08:03:17.893Z',
      registeredAt: '2020-10-27T08:03:17.893Z',
      startingAt: '2020-10-27T08:03:17.893Z',
      used: true,
    },
    {
      couponCode: '12345',
      couponName: '프리미엄 이코노미 무료',
      couponType: '100,000원 할인',
      expiringAt: '2020-08-27T08:03:17.893Z',
      registeredAt: '2020-07-27T08:03:17.893Z',
      startingAt: '2020-07-27T08:03:17.893Z',
      used: true,
    },
    {
      couponCode: '123422',
      couponName: '이코노미 무료',
      couponType: '100,000원 할인 + 100,000 할인',
      expiringAt: '2020-07-30T08:03:17.893Z',
      registeredAt: '2020-07-30T08:03:17.893Z',
      startingAt: '2020-07-30T08:03:17.893Z',
      used: true,
    },
    {
      couponCode: '1234223',
      couponName: '퀴즈 이벤트',
      couponType: '100,000원 할인',
      expiringAt: '2020-07-26T08:03:17.893Z',
      registeredAt: '2020-07-26T08:03:17.893Z',
      startingAt: '2020-07-26T08:03:17.893Z',
      used: true,
    },
  ];
  return <CouponBodyTable couponList={couponList} />;
};

export const 쿠폰리스트테이블: FC = () => {
  const couponList: any[] = [];
  return <CouponBodyTable couponList={couponList} />;
};
