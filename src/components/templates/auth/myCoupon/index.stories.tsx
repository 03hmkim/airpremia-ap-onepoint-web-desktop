import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  CouponHeader,
  CouponBodyTable,
} from 'src/components';
import MyCoupon from './';

export default {
  title: 'desktop / Templates / MyCoupon',
  component: MyCoupon,
  decorators: [withKnobs],
};

export const 내쿠폰내역보기: FC = () => {
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
      couponType: '1,000,000원 할인',
      expiringAt: '2020-07-26T08:03:17.893Z',
      registeredAt: '2020-07-26T08:03:17.893Z',
      startingAt: '2020-07-26T08:03:17.893Z',
      used: true,
    },
  ];
  return (
    <MyCoupon
      title="나의 쿠폰"
      couponHeader={
        <CouponHeader
          name={'LEE YONGHYUN'}
          numberOfCoupons={5}
        />
      }
      couponBody={
        <CouponBodyTable couponList={couponList} />
      }
    />
  );
};
