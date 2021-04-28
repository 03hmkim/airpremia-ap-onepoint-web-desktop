import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import {
  DARK_GRAY1,
  LIGHT_GRAY6,
  ORANGE2,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';
import { addComma } from '@airpremia/core/lib/service';

interface IProps {
  refundDetail: any;
  refundTotalPriceLabel: string;
}

const RefundAmount: FC<IProps> = ({
  refundDetail,
  refundTotalPriceLabel,
}) => {
  const {
    fees,
    totalRefundAmount,
    totalRefundPoints,
  } = refundDetail;

  const router = useRouter();

  useEffect(() => {
    console.log("totalRefundAmount", totalRefundAmount)
    if(totalRefundAmount < 0){
      alert("환불내역이 결제내역을 초과하였습니다. 고객센터 혹은 카운터에 문의해주세요.")
      router.push('/me')
    }
  }, [totalRefundAmount]);

  return (
    <S.container>
      <S.aside>
        <h2 className="font-bold">환불 금액</h2>
      </S.aside>
      <S.content>
        <S.totalPaymentAmount>
          <div className="wrapper">
            <div className="label">총 결제 금액</div>
            <div className="price">
              {refundTotalPriceLabel} 원
            </div>
          </div>
        </S.totalPaymentAmount>

        <S.paymentAmountDetail> {/* 취소 수수료 */}
          {fees.map((item: any, i: number) => (
            <div
              className="wrapper"
              key={`feeList${i.toString()}`}
            >
              <div className="label">{item.text}</div>
              <div className="price">
                (-) {addComma(item.amount)} 원
              </div>
            </div>
          ))}
        </S.paymentAmountDetail>

        <S.resultPrice> 
          <div className="wrapper">
            <div className="title">총 환불 금액</div>
            <div className="result">
              {addComma(totalRefundAmount)} 원
            </div>
          </div>
          <div className="wrapper">
            <div className="title">총 환불 포인트</div>
            <div className="result">
              {addComma(totalRefundPoints)} pp
            </div>
          </div>
          {/* 현재 승객별 환불 금액이 화면엔 있으나 개발이 어려운 걸로 알고 있음 기획 수정되고 불필요하면 삭제 필요 */}
          {/* <div className="wrapper pax">
            <div className="passenger passenger-name">
              : YEONGJU NAM
            </div>
            <div className="passenger passenger-price">
              999,999,999 원
            </div>
          </div>
          <div className="wrapper">
            <div className="passenger passenger-name">
              : HYUNGU LEE
            </div>
            <div className="passenger passenger-price">
              999,999,999 원
            </div>
          </div> */}
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
    padding-top: 40px;
    border-top: solid 2px ${DARK_GRAY1};
    display: flex;
    .label {
      font-size: 18px;
      line-height: 20px;
      letter-spacing: -0.28px;
    }
    .price {
      font-size: 18px;
      line-height: 27px;
      letter-spacing: -0.36px;
      font-weight: 600;
    }
    .wrapper {
      ${flex};
    }
    @media only screen and (max-width: 1059px) {
      padding-top: 30px;
    }
    @media only screen and (max-width: 767px) { 
      padding-top:20px;
      .label {
        font-size: 14px;
      }
      .price {
        font-size: 14px;
      }
    }
  `,

  aside: styled.div`
    flex-basis: 323px;
    h2 {
      font-size: 22px;
      line-height: 34px;
      letter-spacing: -0.44px;
    }
    @media only screen and (max-width: 1059px) {
      h2 {
        font-size: 20px;
      }
    }
    @media only screen and (max-width: 767px) { 
      flex-basis: 100px;
      h2 {
        font-size: 16px;
      }
    }
  `,

  content: styled.div`
    flex: 1;
  `,

  totalPaymentAmount: styled.div`
    padding-bottom: 25px;
    margin-bottom: 25px;
    border-bottom: dashed 1px ${LIGHT_GRAY6};
    @media only screen and (max-width: 767px) { 
      padding-bottom: 10px;
      margin-bottom: 10px;
    }
  `,

  paymentAmountDetail: styled.div`
    padding-bottom: 25px;
    margin-bottom: 25px;
    border-bottom: solid 1px ${LIGHT_GRAY6};
    & > div:not(:last-of-type) {
      margin-bottom: 15px;
    }
    @media only screen and (max-width: 767px) { 
      padding-bottom: 10px;
      margin-bottom: 10px;
      & > div:not(:last-of-type) {
        margin-bottom: 0px;
      }
    }
  `,

  resultPrice: styled.div`
    font-weight: 600;
    & > div:last-of-type {
      margin-bottom: 0;
    }
    .wrapper {
      margin-bottom: 15px;
      &.pax {
        margin-bottom: 10px;
      }
    }
    .title {
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

    .passenger {
      font-weight: 600;
      color: ${LIGHT_GRAY7};
    }

    .passenger-name {
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -0.28px;
    }

    .passenger-price {
      font-size: 18px;
      line-height: 27px;
      letter-spacing: -0.36px;
    }
    @media only screen and (max-width: 1059px) { 
    
    }
    @media only screen and (max-width: 767px) { 
      .wrapper {
        margin-bottom:0px;
      }
      .title {
        font-size: 14px;
      }
      .result {
        font-size: 14px;
      }
    }
  `,
};

export default RefundAmount;
