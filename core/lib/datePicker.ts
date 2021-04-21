import moment from 'moment';
import { flow, map, sum } from 'lodash/fp';
import { IFlightCalendarData } from '../stores/models/bookingSession';
import { Dayjs } from 'dayjs';

export const getCurrentDay = (
  date: moment.Moment,
  i: number,
  week: number,
): moment.Moment => {
  return date
    .clone()
    .week(week)
    .startOf('week')
    .add(i, 'day');
};

export const getDisableStatus = (
  curr: moment.Moment,
  today: moment.Moment,
): string => {
  if (curr.format('YYYYMMDD') < today.format('YYYYMMDD')) {
    return 'is-disabled';
  }

  if (today.clone().add(12, 'month') < curr) {
    return 'is-disabled';
  }

  return '';
};

export const getHiddenStatus = (
  curr: moment.Moment | Dayjs,
  base: moment.Moment | Dayjs,
) =>
  curr.format('MM') === base.format('MM') ? '' : 'hidden';

/**
 * 새로작성된 함수
 */

export const getItinerary = (
  _itinerary: moment.Moment[],
  date: moment.Moment,
): moment.Moment[] => {
  let itinerary = [..._itinerary];

  if (!itinerary.length) itinerary.push(date);
  else if (itinerary.length === 1) {
    if (date < itinerary[0]) {
      itinerary = [];
    }
    itinerary.push(date);
  } else if (itinerary.length === 2) {
    itinerary = [];
    itinerary.push(date);
  }

  return itinerary;
};

export const getTravalPeriodData = (
  itinerary: moment.Moment[],
  current: moment.Moment,
) => {
  let obj = {
    isStart: false,
    isEnd: false,
    isFilled: false,
    isDayTrip: false,
  };

  if (!itinerary.length) return obj;

  if (itinerary.length > 0) {
    if (itinerary[0].isSame(current)) {
      obj = { ...obj, isStart: true, isFilled: true };
    }
  }

  if (itinerary.length > 1) {
    if (itinerary[1].isSame(current)) {
      obj = { ...obj, isEnd: true, isFilled: true };
    } else if (
      itinerary[0] < current &&
      current < itinerary[1]
    ) {
      obj = { ...obj, isFilled: true };
    }
  }

  if (
    itinerary[0].isSame(itinerary[1]) &&
    itinerary[0].isSame(current)
  ) {
    obj = { ...obj, isDayTrip: true };
  }

  return obj;
};

export const getTravalPeriodDataForMobile = (
  itinerary: Dayjs[],
  current: Dayjs,
) => {
  let obj = {
    isStart: false,
    isEnd: false,
    isFilled: false,
    isDayTrip: false,
  };

  if (!itinerary.length) return obj;

  if (itinerary.length > 0) {
    if (itinerary[0].isSame(current, 'day')) {
      obj = { ...obj, isStart: true, isFilled: true };
    }
  }
  if (itinerary.length > 1) {
    if (itinerary[1].isSame(current, 'day')) {
      obj = { ...obj, isEnd: true, isFilled: true };
    } else if (
      itinerary[0] < current &&
      current < itinerary[1]
    ) {
      obj = { ...obj, isFilled: true };
    }
  }

  if (
    itinerary[0].isSame(itinerary[1], 'day') &&
    itinerary[0].isSame(current, 'day')
  ) {
    obj = { ...obj, isDayTrip: true };
  }

  return obj;
};

export const getFormattingDate = (
  d: moment.Moment,
  language: string,
) => moment(d).locale(language).format('M.DD.(dd)');

export const getTotalPrice = (
  date: moment.Moment[],
  priceData: IFlightCalendarData[] | null,
) => {
  if (!priceData) return 0;
  return flow(
    map((day: moment.Moment) => {
      const idx = date[0] === day ? 0 : 1;
      return priceData[idx].lowfares[day.format('YYMMDD')]
        ? priceData[idx].lowfares[day.format('YYMMDD')]
            .amount
        : 0;
    }),
    sum,
  )(date);
};
