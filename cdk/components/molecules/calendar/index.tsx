import dayjs, { Dayjs } from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import React, { FC } from 'react';
import styled from 'styled-components';
import PriceByDay from '../priceByDay';
import {
  getHiddenStatus,
  getTravalPeriodDataForMobile,
} from '../../../../core/lib/datePicker';
import { prop } from 'styled-tools';
import Typography from '../../atoms/typography';
import { DateGroup } from '../..';
import { ELanguageType } from '@airpremia/core/lib/constant';

dayjs.extend(weekOfYear);
interface ILowfare {
  [x: string]: {
    amount: number;
    isInLowestGroup: boolean;
    noFlights: boolean;
    soldOut: boolean;
    isLowestPrice: boolean;
  };
}

export interface IProps {
  /** 좌석 타입 */
  type: 'ey' | 'pe';
  /** 해당 달 가격 리스트 */
  lowfares: ILowfare;
  /** 노출 시킬 Month */
  thisMonth?: Dayjs;
  /** 날짜 클릭시 이벤트 */
  onClickDate?: (time: Dayjs) => void;
  /** 출발, 도착일 날짜 배열 */
  date: Dayjs[];
}

/** service function */
const onWeekGet = (today: any, type: string) => {
  return type === 'start'
    ? today.startOf('month').week()
    : today.endOf('month').week();
};

const Calendar: FC<IProps> = ({
  type,
  date,
  lowfares,
  thisMonth = dayjs(),
  onClickDate = () => {},
}) => {
  const makeList = () => {
    const startWeek = onWeekGet(thisMonth, 'start');
    const endWeek =
      onWeekGet(thisMonth, 'end') === 1
        ? 53
        : onWeekGet(thisMonth, 'end');
    let tmp = []; // 한 주를 그리기 위한 tmp 배열
    const list = []; // 한 달을 그리기 위한 list 배열
    const length = (endWeek - startWeek + 1) * 7;
    for (let i = 0; i < length; i++) {
      const currentDay = dayjs(thisMonth)
        .week(startWeek)
        .startOf('week')
        .add(i, 'day');
      const isToday = dayjs().isSame(currentDay, 'day');
      const {
        isStart,
        isEnd,
        isFilled,
        isDayTrip,
      } = getTravalPeriodDataForMobile(date, currentDay);
      const isHidden = getHiddenStatus(
        currentDay,
        thisMonth,
      );
      const lowfareData =
        lowfares[currentDay.format('YYMMDD')];
      const price = lowfareData?.amount || 0;
      const isHighlighting =
        lowfareData?.isLowestPrice || false;
      const lastElement = (i + 1) % 7 === 0;

      tmp.push(
        <S.priceByday
          isHidden={isHidden}
          data-date={currentDay}
        >
          <PriceByDay
            type={type}
            isToday={isToday}
            day={dayjs(currentDay).format('DD')}
            price={price}
            isHighlighting={isHighlighting}
            isDeparture={isStart}
            isFilled={isFilled}
            isTraveling={isFilled}
            isArrival={isEnd}
            isOneDayTrip={isDayTrip}
          />
        </S.priceByday>,
      );

      /** row (7개) 데이터가 쌓이면 list에 push */
      if (lastElement) {
        list.push(tmp);
        tmp = [];
      }
    }

    return list;
  };

  const _onClickDate = (e: any) => {
    if (e.target.dataset.date) {
      const date = Number(e.target.dataset.date);
      onClickDate(dayjs(date));
    }
  };

  return (
    <S.container onClick={_onClickDate}>
      <S.month>
        <Typography
          fontType="type18"
          lineHeight={27}
          fontWeight="medium"
        >
          {thisMonth.format('YYYY. MM')}
        </Typography>
      </S.month>
      <S.days>
        <DateGroup language={ELanguageType.KR} />
      </S.days>
      {makeList().map((weekdays, i) => (
        <S.weekdays className="row" key={i.toString()}>
          {weekdays.map((day, idx) => {
            return <div key={idx.toString()}>{day}</div>;
          })}
        </S.weekdays>
      ))}
    </S.container>
  );
};

const S = {
  container: styled.div``,

  month: styled.div`
    margin-left: 18px;
  `,

  days: styled.div`
    margin: 30px 0 25px;
  `,

  priceByday: styled.div<{ isHidden: string }>`
    min-width: 44px;

    visibility: ${prop('isHidden', 'visible')};
    cursor: pointer;

    & > div {
      pointer-events: none;
    }
  `,

  weekdays: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    & > div {
      width: 100%;
    }
  `,
};

export default Calendar;
