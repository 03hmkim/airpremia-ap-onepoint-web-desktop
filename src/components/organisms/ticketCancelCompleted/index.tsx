import { FC } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import {
  DARK_GRAY1,
  LIGHT_GRAY6,
  LIGHT_GRAY7,
  ORANGE2,
  LIGHT_GRAY8,
} from '@airpremia/cdk/styles/colors';
import { addComma } from '@airpremia/core/lib/service';
import { getPassengersLabel } from '@airpremia/core/lib/booking';

interface IProps {
  refundBreakdown: any;
}

const TicketCancelCompleted: FC<IProps> = ({
  refundBreakdown,
}) => {
  const {
    recordLocator,
    originText,
    destinationText,
    tripTypeText,
    journeys,
    totalRefundedAmount,
    totalRefundedPoint,
    adultCount,
    childCount,
    infantCount,
  } = refundBreakdown;
  const passengerLabel = getPassengersLabel({
    adult: adultCount,
    child: childCount,
    infant: infantCount,
  });
  const textList = ['가는날', '오는날'];

  return (
    <S.container>
      <S.title>
        <h3 className="font-bold">
          {originText} － {destinationText} {tripTypeText}{' '}
          항공권
        </h3>
      </S.title>
      <S.passengers>{passengerLabel}</S.passengers>
      <S.description>
        <S.box>
          <p>예약번호</p>
          <h4>{recordLocator}</h4>
        </S.box>
        {journeys.map((item: any, i: number) => (
          <S.box
            key={`cancelCompletedJourneys${i.toString()}`}
          >
            <p>{textList[i]}</p>
            <h4>
              {moment(item.departure)
                .locale('ko')
                .format('YYYY. M. D (ddd)')}{' '}
              {moment(item.departure).format('HH:mm')}
              &nbsp;~&nbsp;
              {moment(item.arrival).format('HH:mm')}
              <span className="line" />
              <span>
                편명: [{item.carrierCode}
                {item.identifier}]
              </span>
            </h4>
          </S.box>
        ))}
      </S.description>

      <S.result>
        <S.row>
          <h2>환불 포인트</h2>
          <output>{addComma((-1)*totalRefundedPoint)} pp</output>
        </S.row>
        <S.row>
          <h2>환불 금액</h2>
          <output>
            {addComma((-1)*totalRefundedAmount)} 원
          </output>
        </S.row>
      </S.result>
    </S.container>
  );
};

const S = {
  container: styled.div`
    border-radius: 8px;
    border: solid 1px ${DARK_GRAY1};
    padding: 30px;
    @media only screen and (max-width: 1059px) { 
      padding: 25px;
    }
    @media only screen and (max-width: 767px) { 
      padding: 20px;
    }
  `,

  title: styled.div`
    display: flex;
    justify-content: space-between;
    h3 {
      font-size: 22px;
      line-height: 34px;
      letter-spacing: -0.44px;
    }

    u {
      font-size: 12px;
      line-height: 24px;
      letter-spacing: -0.24px;
      cursor: pointer;
      color: ${LIGHT_GRAY7};
    }
  `,

  passengers: styled.div`
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.28px;
    font-weight: 600;
    color: ${LIGHT_GRAY8};
  `,

  description: styled.div`
    padding: 50px 0 30px;
    border-bottom: dashed 2px ${LIGHT_GRAY6};
    display: flex;
    align-items: center;
    @media only screen and (max-width: 1059px) { 
      padding: 40px 0 20px;
    }
    @media only screen and (max-width: 767px) { 
      display:block;
      padding: 10px 0 20px;
    }
  `,

  box: styled.div`
    margin-right: 80px;
    p {
      font-size: 18px;
      line-height: 19px;
      letter-spacing: -0.26px;
    }
    h4 {
      font-size: 18px;
      line-height: 27px;
      letter-spacing: -0.36px;
      font-weight: 600;
      margin-top: 12px;

      span.line {
        margin: 0 10px;
        border-right: solid 1px #dddddd;
        line-height: 7px;
        height: 15px;
        position: relative;
        display: inline-block;
        top: 1px;
      }
    }
    @media only screen and (max-width: 1059px) { 
      margin-right: 40px;
      p {
        font-size: 14px;
      }
      h4 {
        font-size: 14px;
      }
    }
    @media only screen and (max-width: 767px) { 
      margin-right:0;
      width:100%;
      display:flex;justify-content:space-between;align-items:center;
      p{
        font-size:14px;
      }
      h4 {
        margin:0;
        text-align:right;
        font-size:14px;
      }
    }
    @media only screen and (max-width: 479px) {
      display:block;
      margin-top:20px;
      h4 {
        text-align:left;
        .line{
          display:none;
        }
        span{
          display:block;
        }
      }
      
      
    }
  `,

  result: styled.div`
    margin-top: 35px;
    & > div:first-of-type {
      margin-bottom: 21px;
    }
    @media only screen and (max-width: 767px) { 
      margin-top: 10px;
      & > div:first-of-type {
        margin-bottom: 0px;
      }
    }
  `,

  row: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      font-size: 18px;
      line-height: 28px;
      letter-spacing: -0.36px;
      font-weight: 600;
    }
    output {
      font-size: 26px;
      line-height: 38px;
      letter-spacing: -0.52px;
      font-weight: 600;
      color: ${ORANGE2};
    }
    @media only screen and (max-width: 767px) { 
      h2 {
        font-size: 14px;
      }
      output {
        font-size: 18px;
      }
    }
  `,
};

export default TicketCancelCompleted;
