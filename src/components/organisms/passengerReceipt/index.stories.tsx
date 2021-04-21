import React, { FC } from 'react';
import PassengerReceipt, {
  EPassengerReceiptItemType,
} from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Organisms / 결제 / PassengerReceipt',
  component: PassengerReceipt,
  parameters: {
    componentSubtitle:
      '항공권 결제 - 상세금액 팝업 컴포넌트',
  },
};

export const 탑승객별영수증: FC = () => {
  const beginDateItems = [
    {
      type: EPassengerReceiptItemType.AIR_FARE,
      value: 548000,
    },
    {
      type: EPassengerReceiptItemType.AIR_FARE_DISCOUNT,
      value: 548000,
    },
    {
      type: EPassengerReceiptItemType.FUEL_SURCHARGE,
      value: 24000,
    },
    {
      type: EPassengerReceiptItemType.AIRPORT_FACILITY_FEE,
      value: 43000,
    },
    // {
    //   type: EPassengerReceiptItemType.BAGGAGE,
    //   value: 15000,
    // },
    {
      type: EPassengerReceiptItemType.SEAT,
      value: 15000,
    },
    // {
    //   type: EPassengerReceiptItemType.WIFI,
    //   value: 35000,
    // },
    // {
    //   type: EPassengerReceiptItemType.MEAL,
    //   value: 10000,
    // },
    // {
    //   type: EPassengerReceiptItemType.AMENITY,
    //   value: 15000,
    // },
    // {
    //   type: EPassengerReceiptItemType.SUBTOTAL_MILEAGE,
    //   value: 348000,
    // },
    // {
    //   type: EPassengerReceiptItemType.SUBTOTAL_AMOUNT,
    //   value: 661000,
    // },
  ];

  return (
    <S.container>
      <PassengerReceipt
        name="DONGHWAN LEE"
        total={1448000}
        // totalMileage={696000}
        passengerTypeLabel="성인"
        beginDateItems={beginDateItems}
        endDateItems={beginDateItems}
      />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 540px;
  `,
};
