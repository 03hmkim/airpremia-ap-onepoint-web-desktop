import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import TicketReceiptDetail from '.';
import { ECurrencyType } from '@airpremia/core/lib/constant';

export default {
  title: 'desktop / Organisms / TicketReceiptDetail',
  component: TicketReceiptDetail,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Ticket Receipt Detail',
  },
};

export const 항공권티켓승객별상세: FC = () => {
  const headerProps = {
    titleLabel: '서울/인천(ICN) → 하노이(HAN)',
    classLabel: '이코노미',
    passengersLabel: '성인 1, 소아 1, 유아 1',
  };
  const detailPropsList = [
    {
      title: '성인',
      count: '1',
      currencyCode: ECurrencyType.KRW,
      airFare: 200000,
      fuelSurcharge: 400000,
      airportFacilityFee: 50000,
    },
    {
      title: '유아',
      count: '2',
      currencyCode: ECurrencyType.KRW,
      airFare: 100000,
      fuelSurcharge: 200000,
      airportFacilityFee: 20000,
    },
    {
      title: '소아',
      count: '1',
      currencyCode: ECurrencyType.KRW,
      airFare: 50000,
      fuelSurcharge: 10000,
      airportFacilityFee: 5000,
    },
  ];

  return (
    <TicketReceiptDetail
      headerProps={headerProps}
      detailPropsList={detailPropsList}
    />
  );
};
