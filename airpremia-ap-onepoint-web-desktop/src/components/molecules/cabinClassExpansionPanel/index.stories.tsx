import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import CabinClassExpansionPanel from '.';

export default {
  title: 'desktop / Molecules / CabinClassExpansionPanel',
  component: CabinClassExpansionPanel,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Cabin Class 구간 하나',
  },
};

const productClasses = [
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
];

export const 케빈클래스클래스선택확장패널: FC = () => {
  return (
    <CabinClassExpansionPanel
      isShow
      classType={'EY'}
      classText={'이코노미'}
      productClassList={productClasses}
      selectedProduct={
        'MH5DfiB_WVB_Q0xYUlR_UEMwU35_Mn4xfk5JQ05MQVgwMDIwMDEwflghNA--'
      }
      onChangeProductType={() => {}}
      onClickFlightRule={() => {}}
    />
  );
};
