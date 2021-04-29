import { FC } from 'react';
import { prop } from 'styled-tools';
import moment from 'moment';
import styled from 'styled-components';
import { Horizon, Tag } from 'src/components';
import { IBookingDetailBoardingPassInfo } from '@airpremia/core/api/checkin/types';
import { getStationLabel } from '@airpremia/core/lib/booking';
import {
  DARK_GRAY1,
  LIGHT_GRAY6,
  LIGHT_GRAY8,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';
import FlightIcon from 'public/images/ticket/ico-flight.svg';
import { EBorderShape } from 'src/components/atoms/horizon';
import Link from 'next/link';

interface IProps {
  recordLocator: string;
  boardingPassInfo: IBookingDetailBoardingPassInfo;
  isCommingSoon: boolean;
}

const BoardingPassInfo: FC<IProps> = ({
  recordLocator,
  boardingPassInfo, 
  isCommingSoon,
}) => {
  const { tripType, journeys } = boardingPassInfo;
  const textList =
    tripType === 'OneWay'
      ? ['가는날']
      : ['가는날', '오는날'];

  return (
    <S.container>
      {journeys.map((item, i) => (
        <S.wrapper
          key={`${item.journeyKey}${i.toString()}`}
          isCanceled={item.isCanceled}
        >
          <S.top>
            <div className="tag-group">
              <Tag backgroundColor={DARK_GRAY1}>
                {textList[i]}
              </Tag>
              {item.isRefundable ? null : <Tag>환불불가</Tag>}
              {item.isDelayed && (
                <Tag backgroundColor={ORANGE2}>지연</Tag>
              )}
            </div>
            <div className="description-group">
              {isCommingSoon ? (
                <div className="boarding-pass">
                    <Link
                      href={`/checkin/boarding-pass?journeyKey=${item.journeyKey}&recordLocator=${recordLocator}`}
                    >
                      <a target="_blank">
                        탑승권 ({item.boardingPassCount})
                      </a>
                    </Link>
                </div>
                ) : null }
            </div>
          </S.top>
          <S.bottom>
            <S.column width={150}>
              <h6>{getStationLabel(origin)}</h6>
              <p>
                {moment(item.departure).format('HH : mm')}
              </p>
            </S.column>
            <S.column className="flightIcon" width={200}>
              <span>
                <FlightIcon />
              </span>
              </S.column>
            <S.column width={150}>
              <h6>{getStationLabel(item.destination)}</h6>
              <p>
                {moment(item.arrival).format('HH : mm')}
                &nbsp;
                {item.dateChange
                  ? `+${item.dateChange}`
                  : ''}
              </p>
            </S.column>
            <S.column width={300}>
              <h6>출발일</h6>
              <p>
                {moment(item.departure)
                  .locale('ko')
                  .format('YYYY. M. D (dd)')}
              </p>
            </S.column>
            <S.column width={280}>
              <h6>클래스</h6>
              <p>{item.cabinClassText}</p>
            </S.column>
            <S.column width={200}>
              <h6>항공편명</h6>
              <p>{item.identifier}</p>
            </S.column>
          </S.bottom>
          {i !== journeys.length - 1 && (
            <Horizon
              shape={EBorderShape.DASHED}
              width={1}
              color={LIGHT_GRAY6}
            />
          )}
        </S.wrapper>
      ))}
    </S.container>
  );
};

const S = {
  container: styled.div`
    border-radius: 8px;
    border: solid 1px ${LIGHT_GRAY6};
    padding: 0 30px;

    @media only screen and (max-width: 767px) { 
      padding: 0 20px;
      height:auto;
      overflow:hidden;
    }
  `,
  wrapper: styled.div<{ isCanceled: boolean }>`
    padding-top: 30px;
    height:auto;
    overflow:hidden;
  `,
  top: styled.div`
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .tag-group {
      display: flex;

      & > div {
        margin-right: 3px;
      }
    }

    .description-group {
      display: flex;
    }

    .boarding-pass {
      text-align: center;
      font-weight: 600;
      height: 30px;
      width: 100px;
      border-radius: 300px;
      border: solid 1px ${LIGHT_GRAY6};
      font-size: 18px;
      line-height: 28px;
      letter-spacing: -0.28px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }

    @media only screen and (max-width: 767px) { 
      margin-bottom: 20px;

      .boarding-pass {
        width: 80px;
        height: 24px;
        font-size: 13px;
        line-height: 24px;
      }
    }
  `,
  bottom: styled.div`
    display: flex;
    padding-bottom: 34px;



    @media only screen and (max-width: 1059px) {
      justify-content: space-between;
    }

    @media only screen and (max-width: 767px) { 
      display: block;
      height: auto;
      overflow: hidden;
      padding-bottom: 0;    
    }
  `,

  column: styled.div<{ width?: number }>`
    display: flex;
    flex-direction: column;
    flex-basis: ${prop('width')}px;

    &.flightIcon {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    h6 {
      color: ${LIGHT_GRAY8};
      font-size: 18px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: -0.26px;
    }
    p {
      margin-top: 8px;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.36px;
      font-weight: 600;
    }

    @media only screen and (max-width: 767px) {

      
      width: 50%;
      float: left;
      margin: 0;
      margin-bottom: 20px;

      &:nth-child(3),
      &:nth-child(5){
        float: right;
        text-align: right;
      }

      &.flightIcon {
        width: 20%;
        height: 44px;
        margin: 0;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
      } 

      h6 {
        font-size: 14px;
      }
      p {
        margin-top: 0;
        font-size: 16px;
      }
    }
  `,
};

export default BoardingPassInfo;
