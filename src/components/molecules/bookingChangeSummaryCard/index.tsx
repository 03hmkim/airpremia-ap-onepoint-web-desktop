import { FC } from 'react';
import { prop } from 'styled-tools';
import moment from 'moment';
import styled from 'styled-components';
import { Tag, SsrCheckbox } from 'src/components';
import {
  LIGHT_GRAY6,
} from '@airpremia/cdk/styles/colors';
import { ifProp } from 'styled-tools';

interface IProps {
  bookingDetailInfo: any;
  toBeRemovedJourneyKey: null | string[];
  onClickCheckbox: (key: string, isRefundable: boolean) => () => void;
}

const BookingChangeSummaryCard: FC<IProps> = ({
  bookingDetailInfo,
  toBeRemovedJourneyKey,
  onClickCheckbox,
}) => {
  const {
    boardingPassInfo
  } = bookingDetailInfo;


  const formatTime = 'HH : mm';
  const formatDate = 'YYYY.M.D. (dd)';
  const journeys = boardingPassInfo.journeys;
  
  return (
    <div>
      {journeys.map((item: any, i: number) => {
        const isActive =
          toBeRemovedJourneyKey?.includes(
            item.journeyKey,
        ) || false;
        return (
          <S.container
            key={`${item.journeyKey}${i.toString()}`}>
            <SsrCheckbox
              key={`passengersCheckbox${i.toString()}`}
              isActive={isActive}
              onClick={onClickCheckbox(
                item.journeyKey, item.isRefundable
              )}
            >
              <S.wrapper
                key={`${item.journeyKey}${i.toString()}`}
                isRefundable={!item.isRefundable}
              >
                <S.bottom>
                  <S.column width={430}>
                    <h6 className="tag-group">
                      { boardingPassInfo.tripType ==='OneWay' ||
                       (boardingPassInfo.tripType === 'Round' && i === 0) ? <S.column width={40}><Tag color="white" backgroundColor="black">가는날</Tag></S.column> : null}
                      {boardingPassInfo.tripType === 'Round' && i === 1 ? <S.column width={40}><Tag color="white" backgroundColor="black">오는날</Tag></S.column> : null}
                      {item.isRefundable ? null : <S.column width={0}><Tag color="white" backgroundColor="red">변경불가</Tag></S.column>}
                    </h6>
                    <p>
                      {item.originText}({item.origin}) -&gt; {item.destinationText}({item.destination})
                    </p>
                  </S.column>
                  <S.column width={150}>
                    <h6>출발일</h6>
                    <p>
                      {moment(item.departure).locale('ko').format(formatDate)}
                    </p>
                  </S.column>
                  <S.column width={150}>
                    <h6>비행시간</h6>
                    <p>
                      {moment(item.departure).format(formatTime)}
                      ~
                      {moment(item.arrival).format(formatTime)}
                      &nbsp;
                      {item.dateChange ? `+${item.dateChange}` : ''}
                    </p>
                  </S.column>
                  <S.column width={150}>
                    <h6>클래스</h6>
                    <p>{item.cabinClassText}</p>
                  </S.column>
                </S.bottom>
              </S.wrapper>
            </SsrCheckbox>
          </S.container>
        )
      })}
    </div>
  );
};

const S = {
  container: styled.div`
    border-radius: 8px;
    padding: 0 30px;
    margin: 20px 0;
    @media only screen and (max-width: 767px) { 
      padding: 0;
    }
  `,
  wrapper: styled.div<{ isRefundable: boolean }>`
    padding-top: 30px;
    color: ${ifProp('isRefundable', LIGHT_GRAY6)};
    @media only screen and (max-width: 767px) { 
      padding-top: 20px;
    }
  `,
  bottom: styled.div`
    .tag-group {
      display: flex;
      height: 35px;
      & > div {
        margin-right: 3px;
      }
    }
    display: flex;
    padding-bottom: 34px;
    width:100%;
    justify-content:space-between;
    span {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin: 0 20px 6px;
    }
    & > div {
      margin-right: 70px;
      &:nth-child(1),
      &:nth-child(2) {
        margin-right: 0;
      }
    }
    @media only screen and (max-width: 1059px) {
      & > div {
        width:auto;
        min-width:0;
        margin-right: 0px;
      }
    }
    @media only screen and (max-width: 767px) { 
      display:block;
      & > div {
        width:100%;
        float:left;
        text-align:left;
        margin-bottom:10px;
      }
    }
  `,

  column: styled.div<{ width?: number }>`
    display: flex;
    flex-direction: column;
    min-width: ${prop('width')}px;

    h6 {
      font-size: 18px;
      line-height: 35px;
      letter-spacing: -0.26px;
    }
    p {
      margin-top: 12px;
      font-size: 18px;
      line-height: 35px;
      letter-spacing: -0.36px;
      font-weight: 600;
    }
    @media only screen and (max-width: 767px) { 
      h6 {
        font-size: 14px;
      }
      p {
        margin-top:-10px;
        font-size: 16px;
      }
    }
  `,
};

export default BookingChangeSummaryCard;
