import React, { FC } from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import CabinClassTicketCard from '.';
import { ECabinClassType } from '@airpremia/core/stores/models/bookingSession';

export default {
  title: 'desktop / Molecules / CabinClassTicketCard',
  component: CabinClassTicketCard,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle:
      'Cabin Class 확장 패널 내에 티켓 카드 한개',
  },
};

const productClass = {
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
};

export const 케빈클라스이코노미티켓카드: FC = () => {
  return (
    <CabinClassTicketCard
      isSelected={boolean('선택여부', false)}
      productClass={productClass}
      classType={ECabinClassType.EY}
      onClick={() => {}}
    />
  );
};

export const 케빈클라스프리미엄티켓카드: FC = () => {
  return (
    <CabinClassTicketCard
      isSelected={boolean('선택여부', false)}
      productClass={productClass}
      classType={ECabinClassType.PE}
      onClick={() => {}}
    />
  );
};
