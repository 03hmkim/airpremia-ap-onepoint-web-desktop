import { FC } from 'react';
import styled from 'styled-components';
import { getMoney } from '@airpremia/core/lib/service';
import { ECurrencyType } from '@airpremia/core/lib/constant';

export interface IProps {
  title?: string;
  count?: string | number;
  currencyCode?: string;
  airFare?: number;
  fuelSurcharge?: number;
  airportFacilityFee?: number;
}

const TicketReceiptDetailContent: FC<IProps> = ({
  title,
  count,
  airFare = 0,
  fuelSurcharge = 0,
  airportFacilityFee = 0,
  currencyCode = ECurrencyType.KRW,
}) => (
  <S.container>
    <S.title className="font-bold">
      {title} x {count}
    </S.title>
    <S.body>
      <div className="margin">
        <p>항공운임</p>
        <b>{getMoney(airFare, currencyCode)}</b>
      </div>
      <div className="margin">
        <p>유류 할증료</p>
        <b>{getMoney(fuelSurcharge, currencyCode)}</b>
      </div>
      <div>
        <p>공항시설 사용료</p>
        <b>{getMoney(airportFacilityFee, currencyCode)}</b>
      </div>
    </S.body>
  </S.container>
);

const S = {
  container: styled.div``,

  title: styled.h4`
    font-size: 15px;
    line-height: 24px;
    letter-spacing: -0.3px;
    margin-bottom: 18px;
  `,

  body: styled.div`
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    p {
      font-size: 13px;
      line-height: 24px;
      letter-spacing: -0.26px;
    }

    b {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.32px;
      font-weight: 600;
    }
    .margin {
      margin-bottom: 8px;
    }
  `,
};

export default TicketReceiptDetailContent;
