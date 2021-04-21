import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import CabinClassOneWay from '.';

export default {
  title:
    'desktop / Organisms / 클래스선택 / CabinClassOneway',
  component: CabinClassOneWay,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Cabin Class 구간 하나',
  },
};

const market = {
  origin: 'ICN',
  destination: 'LAX',
};

const journeys = [
  {
    journeyKey:
      'WVB_IDIwMX4gfn5JQ05_MDUvMjUvMjAyMCAyMzozMH5MQVh_MDUvMjUvMjAyMCAxNzo0MH5_',
    departureStation: 'ICN',
    arrivalStation: 'LAX',
    departureTime: '2020-05-25T23:30:00',
    arrivalTime: '2020-05-25T17:40:00',
    flightTimeInMinute: 650,
    equipmentType: '789',
    identifier: 'AP1234',
    dateChange: 0,
    legs: [
      {
        departureStation: 'ICN',
        arrivalStation: 'LAX',
        departureTime: '2020-05-25T23:30:00',
        arrivalTime: '2020-05-25T17:40:00',
        flightTimeInMinute: 650,
        equipmentType: '789',
        identifier: 'AP1234',
        carrierCodeText: '에어프레미아',
        isTransferAtNext: true,
        termToNextLegInMinute: 360,
      },
    ],
    cabinClasses: [
      {
        code: 'Y',
        text: '이코노미',
        startPrice: 380000.0,
        productClasses: [
          {
            fareAvailabilityKey:
              'MH5WfiB_WVB_VkxYUlR_WVAwU35_MX4xfk5JQ05MQVgwMDEwMDEwflghMA--',
            text: '이벤트',
            code: 'YP',
            classOfService: 'V',
            available: 51,
            changeFee: 70000,
            refundFee: 100000,
            mileagePercentage: 120,
            price: 380000.0,
          },
          {
            fareAvailabilityKey:
              'MH5OfiB_WVB_TkxYUlR_WVMwU35_MX4xfk5JQ05MQVgwMDEwMDEwflghMQ--',
            text: '스탠다드',
            code: 'YS',
            classOfService: 'N',
            available: 152,
            changeFee: 70000,
            refundFee: 100000,
            mileagePercentage: 120,
            price: 560000.0,
          },
          {
            fareAvailabilityKey:
              'MH5NfiB_WVB_TUxYUlR_WUMwU35_MX4xfk5JQ05MQVgwMDEwMDEwflghMg--',
            text: '컴포트',
            code: 'YC',
            classOfService: 'M',
            available: 253,
            changeFee: 70000,
            refundFee: 100000,
            mileagePercentage: 120,
            price: 860000.0,
          },
        ],
      },
      {
        code: 'PE',
        text: '프리미엄 이코노미',
        startPrice: 1350000.0,
        productClasses: [
          {
            fareAvailabilityKey:
              'MH5JfiB_WVB_SUxYUlR_UFMwU35_MX4xfk5JQ05MQVgwMDEwMDEwflghMw--',
            text: '스탠다드',
            code: 'PS',
            classOfService: 'I',
            available: 34,
            changeFee: 70000,
            refundFee: 100000,
            mileagePercentage: 120,
            price: 1350000.0,
          },
          {
            fareAvailabilityKey:
              'MH5DfiB_WVB_Q0xYUlR_UEMwU35_Mn4xfk5JQ05MQVgwMDIwMDEwflghNA--',
            text: '컴포트',
            code: 'PC',
            classOfService: 'C',
            available: 56,
            changeFee: 70000,
            refundFee: 100000,
            mileagePercentage: 120,
            price: 1470000.0,
          },
        ],
      },
    ],
  },
];

const list = [
  {
    date: '2020-06-01T00:00:00',
    lowfareCabins: [
      {
        cabinClass: 'EY',
        amount: 920000.0,
        available: 252,
        noFlight: false,
      },
      {
        cabinClass: 'PE',
        amount: 1470000.0,
        available: 56,
        noFlight: false,
      },
    ],
  },
  {
    date: '2020-06-02T00:00:00',
    lowfareCabins: [
      {
        cabinClass: 'EY',
        amount: 920000.0,
        available: 253,
        noFlight: false,
      },
      {
        cabinClass: 'PE',
        amount: 1470000.0,
        available: 56,
        noFlight: false,
      },
    ],
  },
  {
    date: '2020-06-03T00:00:00',
    lowfareCabins: [
      {
        cabinClass: 'EY',
        amount: 920000.0,
        available: 251,
        noFlight: false,
      },
      {
        cabinClass: 'PE',
        amount: 1470000.0,
        available: 56,
        noFlight: false,
      },
    ],
  },
  {
    date: '2020-06-04T00:00:00',
    lowfareCabins: [
      {
        cabinClass: 'EY',
        amount: 920000.0,
        available: 252,
        noFlight: false,
      },
      {
        cabinClass: 'PE',
        amount: 1470000.0,
        available: 56,
        noFlight: false,
      },
    ],
  },
  {
    date: '2020-06-05T00:00:00',
    lowfareCabins: [
      {
        cabinClass: 'EY',
        amount: 980000.0,
        available: 253,
        noFlight: false,
      },
      {
        cabinClass: 'PE',
        amount: 1530000.0,
        available: 56,
        noFlight: false,
      },
    ],
  },
  {
    date: '2020-06-06T00:00:00',
    lowfareCabins: [
      {
        cabinClass: 'EY',
        amount: 980000.0,
        available: 253,
        noFlight: false,
      },
      {
        cabinClass: 'PE',
        amount: 1530000.0,
        available: 56,
        noFlight: false,
      },
    ],
  },
  {
    date: '2020-06-07T00:00:00',
    lowfareCabins: [
      {
        cabinClass: 'EY',
        amount: 980000.0,
        available: 253,
        noFlight: false,
      },
      {
        cabinClass: 'PE',
        amount: 1530000.0,
        available: 56,
        noFlight: false,
      },
    ],
  },
  {
    date: '2020-06-08T00:00:00',
    lowfareCabins: [
      {
        cabinClass: 'EY',
        amount: 920000.0,
        available: 253,
        noFlight: false,
      },
      {
        cabinClass: 'PE',
        amount: 1470000.0,
        available: 56,
        noFlight: false,
      },
    ],
  },
  {
    date: '2020-06-09T00:00:00',
    lowfareCabins: [
      {
        cabinClass: 'EY',
        amount: 920000.0,
        available: 253,
        noFlight: false,
      },
      {
        cabinClass: 'PE',
        amount: 1470000.0,
        available: 56,
        noFlight: false,
      },
    ],
  },
  {
    date: '2020-06-10T00:00:00',
    lowfareCabins: [
      {
        cabinClass: 'EY',
        amount: 920000.0,
        available: 253,
        noFlight: false,
      },
      {
        cabinClass: 'PE',
        amount: 1470000.0,
        available: 56,
        noFlight: false,
      },
    ],
  },
];

export const 클래스선택구간한개: FC = () => {
  return (
    <CabinClassOneWay
      list={list}
      idx={0}
      market={market}
      journeys={journeys}
      onLoadLowFare={() => {}}
    />
  );
};
