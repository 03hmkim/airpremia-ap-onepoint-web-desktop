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
    box-sizing: border-box;

    h3 {
      font-size: 20px;
    }
  `,

  header: styled.div`
    margin-bottom: 50px;
  `,

  wrapper: styled.div`
    display: flex;
    & > div:not(:last-of-type) {
      margin-right: 100px;
    }
  `,

  content: styled.div``,

  rowTitle: styled.div`
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.26px;
    margin-bottom: 12px;
  `,

  rowBody: styled.div`
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.36px;
    font-weight: 600;
  `,
};

export default BookingCancelSummaryCard;
