import { FC } from 'react';
import styled from 'styled-components';
import {
  DARK_GRAY1,
  LIGHT_GRAY6,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';
import { addComma } from '@airpremia/core/lib/service';

interface IProps {
  passengerBreakdown: any;
  getPriceLabel: (points: number, amount: number) => string;
}

const PaymentByPassenger: FC<IProps> = ({
  passengerBreakdown,
  // refundTotalPriceLabel,
  getPriceLabel,
}) => {
  const {
    passengers,
    totalCollectedAmount,
    totalCollectedPoints,
  } = passengerBreakdown;

  return (
    <S.container>
      <S.aside>
        <h2 className="font-bold">
          탑승객별
          <br />
          기존 결제 금액
        </h2>
      </S.aside>
      <S.content>
        <S.passengerWrapper>
          {passengers.map((item: any, i: number) => (
            <div
              className="wrapper"
              key={`flightCancelPassenger${i.toString()}`}
            >
              <div className="name">
                {item.lastName} {item.firstName}
              </div>
              <div className="price">
                <p>
                  {getPriceLabel(
                    item.totalPoints,
                    item.totalAmount,
                  )}
                </p>
              </div>
            </div>
          ))}
        </S.passengerWrapper>
        <S.resultPrice>
          <div className="wrapper">
            <div className="label">총 결제 금액</div>
            <div className="result">
              {addComma(totalCollectedAmount)} 원
            </div>
          </div>
          <div className="wrapper">
            <div className="label">총 결제 포인트</div>
            <div className="result">
              {addComma(totalCollectedPoints)} pp
            </div>
          </div>
        </S.resultPrice>
      </S.content>
    </S.container>
  );
};

const flex = `
  display: flex;
  justify-content: space-between;
  align-items: center;`;

const S = {
  container: styled.div`
    padding: 40px 0 125px;
    border-top: solid 2px ${DARK_GRAY1};
    display: flex;
    .wrapper {
      ${flex};
    }
  `,

  aside: styled.div`
    flex-basis: 323px;
    h2 {
      font-size: 22px;
      line-height: 34px;
      letter-spacing: -0.44px;
    }
  `,

  content: styled.div`
    flex: 1;
  `,

  passengerWrapper: styled.div`
    padding-bottom: 12px;
    margin-bottom: 28px;
    border-bottom: solid 1px ${LIGHT_GRAY6};
    .wrapper {
      margin-bottom: 20px;
    }

    .name {
      font-size: 15px;
      line-height: 22px;
      letter-spacing: -0.3px;
      width: 280px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .price {
      font-size: 18px;
      line-height: 27px;
      letter-spacing: -0.36px;
      font-weight: 600;
      border-bottom: solid 1px ${DARK_GRAY1};
    }
  `,

  resultPrice: styled.div`
    font-weight: 600;
    & > div:last-of-type {
      margin-bottom: 0;
    }
    .wrapper {
      margin-bottom: 23px;
    }
    .label {
      font-size: 18px;
      line-height: 28px;
      letter-spacing: -0.36px;
    }
    .result {
      font-size: 24px;
      line-height: 35px;
      letter-spacing: -0.48px;

      color: ${ORANGE2};
    }
  `,
};

export default PaymentByPassenger;
