import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import CabinClassTicketSingle from '.';

export default {
  title: 'desktop / Molecules / CabinClassTicketSingle',
  component: CabinClassTicketSingle,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Cabin Class 구간 하나',
  },
};

const journey = {
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
};

export const 캐빈클래스티켓선택: FC = () => {
  // const [select, setSelect] = useState(null);
  // const onChangeStatus = (e: any) => {
  //   setSelect(e.target);
  // };
  // const eyRadioData = {
  //   isActive: select === 'EY',
  //   target: 'EY',
  //   onChange: onChangeStatus,
  // };
  // const peRadioData = {
  //   isActive: select === 'PE',
  //   target: 'PE',
  //   onChange: onChangeStatus,
  // };

  return (
    <CabinClassTicketSingle
      journey={journey}
      selectedProduct={''}
      onChangeClassType={() => {}}
      onChangeProductType={() => {}}
    />
  );
};
