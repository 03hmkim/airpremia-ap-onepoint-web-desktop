import styled from 'styled-components';
import { FC } from 'react';
import { IBookingDetailBreakdown, IBookingDetailInfo } from '@airpremia/core/api/checkin/types';
import {
  DARK_GRAY1,
  LIGHT_GRAY8,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';
import moment from 'moment';
import { addComma, addSumComma } from '@airpremia/core/lib/service';

interface IProps {
  bookingInfo: IBookingDetailInfo;
  breakdown: IBookingDetailBreakdown;
}

const ReservationDetailInfo: FC<IProps> = ({
  bookingInfo,
  breakdown,
}) => {
  const {
    recordLocator,
    tripType,
    bookedDate,
    passengerCount,
    totalAmount,
    totalPoint,
    destinationText,
    originText,
    refundedAmount,
    refundedPoint,
  } = bookingInfo;
  const tripText = tripType === 'Round' ? '왕복' : '편도';
  const symbol = tripType === 'Round' ? 'ㅡ' : '→';
  
  return (
    <S.container>
      <S.title>
        <h4 className="font-bold">
          [{tripText}]&nbsp;{originText}&nbsp;
          {symbol}&nbsp;{destinationText}
        </h4>
      </S.title>
      {bookingInfo.status == 'HoldCanceled' ? 
        "미결제로 인하여 자동 취소된 예약편입니다"
        :
        (
          <S.info>
            <S.column>
              <h5>예약번호</h5>
              <p>{recordLocator}</p>
            </S.column>
            <S.column>
              <h5>예약날짜</h5>
              <p>{moment(bookedDate).format('YYYY. M. D')}</p>
            </S.column>
            <S.column>
              <h5>예약인원</h5>
              <p>{passengerCount}</p>
            </S.column>
            <S.column>
              <h5>총 결제 (금액/포인트)</h5>
              {/* <p>{addComma(totalAmount)} 원 / {addComma(totalPoint)} pp</p> */}
              <p>{addSumComma(totalAmount, refundedAmount+breakdown.balanceDue)} 원 / {addSumComma(totalPoint, refundedPoint)} pp</p>
            </S.column>
            <S.column>
              <h5>환불 (금액/포인트)</h5>
              <p>{addComma((-1) * refundedAmount)} 원 / {addComma((-1) * refundedPoint)} pp</p>
            </S.column>
            <S.columnOrange>
              <h5>승인 결제 (금액/포인트)</h5>
              <p>{addSumComma(totalAmount, refundedAmount)} 원 / {addSumComma(totalPoint, refundedPoint)} pp</p>
            </S.columnOrange>
            {breakdown && breakdown.balanceDue>0 ?
              (
                <S.columnOrange>
                  <h5>미결제 금액</h5>
                  <p>{addComma(breakdown.balanceDue)} 원</p>
                </S.columnOrange>
              )
             : null
            }
          </S.info>
        )
      }
      
    </S.container>
  );
};

const S = {
  container: styled.div``,

  title: styled.div`
    h4 {
      font-size: 22px;
      line-height: 33px;
      letter-spacing: -0.44px;
      color: ${DARK_GRAY1};
    }
    margin-bottom: 40px;

    @media only screen and (max-width: 767px) {
      margin-bottom:20px;

      h4 {
        font-size: 18px;
      }
    }
  `,

  info: styled.div`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 1059px) { 
        display: block;
    }
  `,

  column: styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 80px;
    font-weight: 600;
    h5 {
      font-size: 18px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: -0.28px;
      color: ${LIGHT_GRAY8};
    }
    p {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.32px;
      margin-top: 8px;
    }

    @media only screen and (max-width: 1059px) {
      width: 50%;
      float: left;
      margin-bottom: 20px;
      margin-right: 0;

      &:nth-child(even){
        float: right;
        text-align: right;
      }
    }

    @media only screen and (max-width: 767px) { 
      h5 {
        font-size: 14px;
      }

      p {
        margin:0;
        font-size: 16px;
      }
    }
    
  `,
  columnOrange: styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 80px;
    font-weight: 600;
    h5 {
      font-size: 18px;
      line-height: 20px;
      letter-spacing: -0.28px;
      color: ${LIGHT_GRAY8};
    }
    p {
      color: ${ORANGE2};
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.32px;
      margin-top: 8px;
    }

    @media only screen and (max-width: 1059px) { 
      width: 50%;
      margin-right: 0;
      float: right;
      text-align: right;
    }

    @media only screen and (max-width: 767px) {
      h5 {
        font-size: 14px;
      }

      p {
        margin:0;
        font-size: 16px;
      }
    }
  `,
};

export default ReservationDetailInfo;
