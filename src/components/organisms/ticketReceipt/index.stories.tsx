import React, { FC } from 'react';
import TicketReceipt, { ETicketReceiptItemType } from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Organisms / 결제 / TicketReceipt',
  component: TicketReceipt,
  parameters: {
    componentSubtitle:
      '항공권 결제 - 상세금액 팝업 컴포넌트',
  },
};

export const 항공권별영수증: FC = () => {
  const receiptItems = [
    {
      type: ETicketReceiptItemType.AIR_FARE,
      value: 548000,
    },
    {
      type: ETicketReceiptItemType.FUEL_SURCHARGE,
      value: 24000,
    },
    {
      type: ETicketReceiptItemType.AIRPORT_FACILITY_FEE,
      value: 43000,
    },
    // {
    //   type: ETicketReceiptItemType.BAGGAGE,
    //   value: 15000,
    // },
    {
      type: ETicketReceiptItemType.SEAT,
      value: 15000,
    },
    // {
    //   type: ETicketReceiptItemType.WIFI,
    //   value: 35000,
    // },
    // {
    //   type: ETicketReceiptItemType.MEAL,
    //   value: 10000,
    // },
    // {
    //   type: ETicketReceiptItemType.AMENITY,
    //   value: 15000,
    // },
  ];
  const headerProps = {
    titleLabel: '서울/인천(ICN) → 하노이(HAN)',
    classLabel: '이코노미',
    passengersLabel: '성인 1, 소아 1, 유아 1',
  };

  return (
    <S.container>
      <TicketReceipt
        items={receiptItems}
        headerProps={headerProps}
        totalFare={0}
      />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 540px;
  `,
};
