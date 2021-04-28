import { FC } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { LIGHT_GRAY6 } from '@airpremia/cdk/styles/colors';

interface IProps {
  bookingInfo: any;
  canceledPaxCountLabel: string;
}

const BookingCancelSummaryCard: FC<IProps> = ({
  bookingInfo,
  canceledPaxCountLabel,
}) => {
  const {
    recordLocator,
    tripType,
    tripTypeText,
    origin,
    destination,
    journeys,
    destinationText,
    originText,
  } = bookingInfo;
  const { departure, arrival } = journeys[0]; // lodash head로 바꾸기
  const format = 'YYYY.M.D. (dd) HH:mm:ss';

  return (
    <S.container>
      <S.header>
        <h3 className="font-bold">
          {originText}({origin})&nbsp;
          {tripType === 'OneWay' ? '→' : '-'}
          &nbsp;
          {destinationText}({destination}) {tripTypeText}{' '}
          여정 취소
        </h3>
      </S.header>

      <S.wrapper>
        <S.content>
          <S.rowTitle>가는날</S.rowTitle>
          <S.rowBody>
            {moment(departure).locale('ko').format(format)}
          </S.rowBody>
        </S.content>
        <S.content>
          <S.rowTitle>오는날</S.rowTitle>
          <S.rowBody>
            {' '}
            {moment(arrival).locale('ko').format(format)}
          </S.rowBody>
        </S.content>
        <S.content>
          <S.rowTitle>예약번호</S.rowTitle>
          <S.rowBody>{recordLocator}</S.rowBody>
        </S.content>
        <S.content>
          <S.rowTitle>취소인원</S.rowTitle>
          <S.rowBody>{canceledPaxCountLabel}</S.rowBody>
        </S.content>
      </S.wrapper>
    </S.container>
  );
};

const S = {
  container: styled.div`
    border-radius: 12px;
    border: solid 1px ${LIGHT_GRAY6};
    padding: 30px;
    height:auto;
    overflow:hidden;
    box-sizing: border-box;

    h3 {
      font-size: 20px;
      line-height:1.5em;
    }
    @media only screen and (max-width: 1059px) {
      padding: 20px;
      h3 {
        font-size: 18px;
      }
    }
    @media only screen and (max-width: 767px) { 
      padding: 20px 20px 0 20px;
      h3 {
        font-size: 16px;
      }
    }
  `,

  header: styled.div`
    margin-bottom: 50px;
    @media only screen and (max-width: 1059px) {
      margin-bottom: 40px;
    }
    @media only screen and (max-width: 767px) { 
      margin-bottom: 20px;
    }
  `,

  wrapper: styled.div`
    width:100%;
    display: flex;
    & > div:not(:last-of-type) {
      margin-right: 100px;
    }
    @media only screen and (max-width: 1059px) {
      justify-content:space-between;
      & > div:not(:last-of-type) {
        margin-right: 40px;
      }
    }
    @media only screen and (max-width: 767px) { 
      display:block;
      & > div {
        width:50%;
        float:left;
        margin-bottom:20px;
        &:nth-child(even){
          float:right;
          text-align:right;
        }
      }
      & > div:not(:last-of-type) {
        margin-right: 0px;
      }
    }
  `,

  content: styled.div``,

  rowTitle: styled.div`
    font-size: 18px;
    line-height: 19px;
    letter-spacing: -0.26px;
    margin-bottom: 12px;
    @media only screen and (max-width: 767px) { 
      font-size: 13px;
      margin-bottom:5px;
    }
  `,

  rowBody: styled.div`
    font-size: 22px;
    line-height: 27px;
    letter-spacing: -0.36px;
    font-weight: 600;
    @media only screen and (max-width: 767px) { 
      font-size: 16px;
    }
  `,
};

export default BookingCancelSummaryCard;
