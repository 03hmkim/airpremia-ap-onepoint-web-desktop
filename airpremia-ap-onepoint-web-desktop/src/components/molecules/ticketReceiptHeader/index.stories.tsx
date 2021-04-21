import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import TicketReceiptHeader from '.';

export default {
  title: 'desktop / Molecules / TicketReceiptHeader',
  component: TicketReceiptHeader,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Ticket Receipt Header',
  },
};

export const 티켓영수증통합헤더: FC = () => {
  const headerProps = {
    titleLabel: '서울/인천(ICN) → 하노이(HAN)',
    classLabel: '이코노미',
    passengersLabel: '성인 1, 소아 1, 유아 1',
  };

  return <TicketReceiptHeader {...headerProps} />;
};
