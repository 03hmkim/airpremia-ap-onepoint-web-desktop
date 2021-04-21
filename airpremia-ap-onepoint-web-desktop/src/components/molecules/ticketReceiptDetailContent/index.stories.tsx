import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import TicketReceiptDetailContent from '.';
import { ECurrencyType } from '@airpremia/core/lib/constant';

export default {
  title: 'desktop / Molecules / TicketReceiptDetailContent',
  component: TicketReceiptDetailContent,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Ticket Receipt Detail Content',
  },
};

export const 티켓상세영수증승객별컨텐츠한국: FC = () => {
  const data = {
    airFare: 300000,
    fuelSurchange: 200000,
    airportFacilityFee: 10000,
  };
  return (
    <TicketReceiptDetailContent
      title="성인"
      count="2"
      airFare={data.airFare}
      fuelSurcharge={data.fuelSurchange}
      airportFacilityFee={data.airportFacilityFee}
      currencyCode={ECurrencyType.KRW}
    />
  );
};

export const 티켓상세영수증승객별컨텐츠미국: FC = () => {
  const data = {
    airFare: 300000,
    fuelSurchange: 200000,
    airportFacilityFee: 10000,
  };
  return (
    <TicketReceiptDetailContent
      title="성인"
      count="2"
      airFare={data.airFare}
      fuelSurcharge={data.fuelSurchange}
      airportFacilityFee={data.airportFacilityFee}
      currencyCode={ECurrencyType.USD}
    />
  );
};
