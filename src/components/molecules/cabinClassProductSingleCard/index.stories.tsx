import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import CabinClassProductSingleCard from '.';

export default {
  title:
    'desktop / Molecules / CabinClassProductSingleCard',
  component: CabinClassProductSingleCard,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'CabinClassProductSingleCard',
  },
};

const data = {
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
  ],
};

export const 항공권선택_하나인경우_카드하나: FC = () => {
  const onChangeProductType = () => {};

  return (
    <CabinClassProductSingleCard
      isSelected={false}
      classText={data.text}
      classCode={data.code}
      productClassList={data.productClasses}
      onChangeProductType={onChangeProductType}
    />
  );
};
