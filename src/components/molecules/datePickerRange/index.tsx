import { useState, useEffect } from 'react';
import cx from 'classnames';
import moment from 'moment';
import styled, { css } from 'styled-components';
import {
  ToggleSwitchButton,
  Loading,
} from 'src/components';
import * as Constant from '@airpremia/core/lib/constant';
import {
  getMoney,
  addComma,
} from '@airpremia/core/lib/service';
import {
  getCurrentDay,
  getDisableStatus,
  getHiddenStatus,
  getTravalPeriodData,
} from '@airpremia/core/lib/datePicker';
import {
  IDateParams,
  IStationType,
} from '@airpremia/core/stores/models/bookingSession';
import {
  ECurrencyType,
  ELanguageType,
} from '@airpremia/core/lib/constant';
import {
  useCommon,
  useBooking,
} from '@airpremia/core/hooks';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';
import {
  BLUE1,
  LIGHT_GRAY6,
  LIGHT_GRAY7,
  DARK_BLUE1,
  ORANGE2,
  LIGHT_BLUE3,
  WHITE1,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {}

interface IProps extends IStyleProps {
  isOneDayTrip: boolean;
  isPremiumEconomy: boolean;
  currencyCode: ECurrencyType | string;
  itinerary: IStationType;
  date: moment.Moment[];

  onLoad: (params: {
    date: moment.Moment[];
    cabinClass: string;
  }) => void;
  onTogglePremiumEconomy: () => void;
  onClickCompleteButton: () => void;
  onChangeDay: (params: IDateParams) => void;
}

interface IDayData {
  [locale: string]: string[];
}

interface IArrowStyleProps {
  left?: boolean;
}

interface IPeroidStyleProps {
  isStart: boolean;
  isEnd: boolean;
  isFilled: boolean;
  isDayTrip: boolean;
  isOneDayClick?: boolean;
}

export const dayData: IDayData = {
  [Constant.KR]: ['일', '월', '화', '수', '목', '금', '토'],
  [Constant.US]: [
    'SUN',
    'MON',
    'THU',
    'WES',
    'THU',
    'FRI',
    'SAT',
  ],
};

function DatePickerRange({
  isOneDayTrip,
  isPremiumEconomy,
  date,
  currencyCode,
  itinerary,
  onLoad,
  onTogglePremiumEconomy,
  onClickCompleteButton,
  onChangeDay,
}: IProps) {
  const { commonStore } = useCommon();
  const { priceData, calendarTotalPrice } = useBooking();

  const { language } = commonStore;
  const code = Constant.KR;
  const [baseDate, setBaseDate] = useState(moment());
  const currentDate = moment();

  const isDateOne = date.filter(Boolean).length === 1;
  const isDateTwo = date.filter(Boolean).length === 2;

  const onWeekGet = (today: any, type: string) => {
    return type === 'start'
      ? today.clone().startOf('month').week()
      : today.clone().endOf('month').week();
  };
  const onCalendarPropertyChange = (e: any) => {
    const { date } = e.target.dataset;

    onChangeDay({
      date: moment(Number(date)),
    });
  };

  const onCheckCompleteButton = () => {
    if (
      (isOneDayTrip && date.length === 1) ||
      (!isOneDayTrip && date.length === 2)
    ) {
      onClickCompleteButton();
    }
  };

  const fetchLowFares = async (baseDate: moment.Moment) => {
    const f = 'YYYY-MM-DD';
    const beginDate =
      baseDate.format(f) === currentDate.format(f)
        ? baseDate
        : baseDate.startOf('month');

    const endDate = moment(
      baseDate.clone().add(1, 'month'),
    ).endOf('month');

    onLoad({
      date: [beginDate, endDate],
      cabinClass: isPremiumEconomy ? 'PE' : 'EY',
    });
  };

  useEffect(() => {
    if (itinerary.origin && itinerary.destination) {
      fetchLowFares(baseDate);
    }
  }, [itinerary.origin, itinerary.destination]);

  useEffect(() => {
    fetchLowFares(baseDate);
  }, [isPremiumEconomy]);

  if (!priceData) return <Loading />;

  const makeLabel = (
    date: moment.Moment[],
    current: moment.Moment,
  ) => {
    const f = 'YYYYMMDD';

    const currentData =
      priceData.lowfares[current.format('YYMMDD')];
    const currPrice = currentData ? currentData.amount : 0;
    if (language.code === ELanguageType.KR) {
      if (isOneDayTrip) {
        if (
          moment(date[0]).format(f) ===
          moment(current).format(f)
        ) {
          return '당일 여행';
        }
        return getMoney(
          currPrice,
          currencyCode,
          currencyCode === ECurrencyType.KRW,
        );
      } else {
        if (
          date[0] &&
          date[1] &&
          date[0].format(f) === date[1].format(f) &&
          date[0].format(f) === moment(current).format(f)
        ) {
          return <S.text>당일 여행</S.text>;
        } else if (
          date[0] &&
          moment(date[0]).format(f) ===
            moment(current).format(f)
        ) {
          return <S.text>가는날</S.text>;
        } else if (
          date[1] &&
          moment(date[1]).format(f) ===
            moment(current).format(f)
        ) {
          return <S.text>오는날</S.text>;
        }
        return getMoney(
          currPrice,
          currencyCode,
          currencyCode === ECurrencyType.KRW,
        );
      }
    }
    return getMoney(
      currPrice,
      currencyCode,
      currencyCode === ECurrencyType.KRW,
    );
  };

  const renderDateOfCalendar = (acc: number) => {
    const calendar: React.ReactElement[] = [];
    const newBaseDate = baseDate
      .clone()
      .add(acc - 1, 'month');
    const startWeek = onWeekGet(newBaseDate, 'start');
    const endWeek =
      onWeekGet(newBaseDate, 'end') === 1
        ? 53
        : onWeekGet(newBaseDate, 'end');

    // console.log(newBaseDate, calendar);

    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <div
          className="row"
          key={week}
          onClick={(e: any) => onCalendarPropertyChange(e)}
        >
          {Array(7)
            .fill(0)
            .map((_, index) => {
              const current = getCurrentDay(
                newBaseDate,
                index,
                week,
              );
              console.log(current.format('YYYYMMDD'));
              const isSearchRangeExceed = getDisableStatus(
                current,
                currentDate,
              );
              const isHidden = getHiddenStatus(
                current,
                newBaseDate,
              );
              const isEdgeElement =
                index === 0 || index === 6;
              const {
                isStart,
                isEnd,
                isFilled,
                isDayTrip,
              }: IPeroidStyleProps = getTravalPeriodData(
                date,
                current,
              );
              const day = current.format('D');
              const currentData =
                priceData.lowfares[
                  current.format('YYMMDD')
                ];

              const isSoldOut = currentData
                ? currentData.soldOut
                : false;

              const isNoFlight = currentData
                ? currentData.noFlights
                : false;

              return (
                <div
                  className={cx('box', {
                    'is-disabled':
                      isSearchRangeExceed ||
                      isSoldOut ||
                      isNoFlight,
                    'is-hidden': isHidden,
                    'is-edge': isEdgeElement,
                  })}
                  key={index}
                  data-date={current}
                >
                  <S.dateFont
                    className="text"
                    isBold={isStart || isEnd}
                    isFilled={isFilled}
                  >
                    {day}
                  </S.dateFont>
                  <span
                    className={cx('price', {
                      'is-disabled':
                        isSearchRangeExceed ||
                        isSoldOut ||
                        isNoFlight,
                      'ey-lowest-price':
                        currentData?.isLowestPrice,
                      'pe-lowest-price':
                        isPremiumEconomy &&
                        currentData?.isLowestPrice,
                    })}
                  >
                    {makeLabel(date, current)}
                  </span>
                  <S.period
                    isStart={isStart}
                    isEnd={isEnd}
                    isDayTrip={isDayTrip}
                    isFilled={isFilled}
                    isOneDayClick={isOneDayTrip}
                  />
                </div>
              );
            })}
        </div>,
      );
    }
    return calendar;
  };

  const renderCalendarGenerate = (acc: number) => {
    const onPrevCalendar = () => {
      setBaseDate(baseDate.clone().subtract(1, 'month'));
      fetchLowFares(baseDate.clone().subtract(1, 'month'));
    };

    const onNextCalendar = () => {
      setBaseDate(baseDate.clone().add(1, 'month'));
      fetchLowFares(baseDate.clone().add(1, 'month'));
    };

    // TODO 'Each child in a list should have a unique "key" prop.'  error 찾기
    return (
      <S.calendarWrapper
        key={`calendarRow${acc}`}
        right={acc === 2}
      >
        <div className="head">
          <S.arrowWrapper
            className="left-arrow"
            hidden={acc === 2}
            disabled={currentDate >= baseDate}
            onClick={onPrevCalendar}
          >
            <S.arrow left />
          </S.arrowWrapper>
          <span className="title">
            {baseDate
              .clone()
              .add(acc - 1, 'month')
              .format('YYYY. M.')}
          </span>
          <S.arrowWrapper
            className="right-arrow"
            hidden={acc === 1}
            disabled={
              currentDate.clone().add(10, 'month') <
              baseDate
            }
            onClick={onNextCalendar}
          >
            <S.arrow />
          </S.arrowWrapper>
        </div>
        <div className="body">
          <div className="row">
            {dayData[code].map((item, i) => {
              const isEdgeElement = i === 0 || i === 6;
              return (
                <div
                  className="box"
                  key={`${item}${i.toString()}`}
                >
                  <div
                    className={cx('box', {
                      'is-edge': isEdgeElement,
                    })}
                  >
                    <span className="text">{item}</span>
                  </div>
                </div>
              );
            })}
          </div>
          {renderDateOfCalendar(acc)}
        </div>
      </S.calendarWrapper>
    );
  };

  return (
    <S.container>
      <div className="calendar-inner">
        {Array(2)
          .fill(0)
          .map((_, index) =>
            renderCalendarGenerate(index + 1),
          )}
      </div>
      <div className="calendar-info">
        <div className="toggle-wrapper">
          <ToggleSwitchButton
            isActive={isPremiumEconomy}
            onClickToggle={onTogglePremiumEconomy}
          >
            프리미엄 이코노미 가격보기
          </ToggleSwitchButton>
        </div>
        <div className="price-info">
          <sub>예상 최저가 (성인 1인 기준)</sub>
          <em>
            {addComma(calendarTotalPrice)} {currencyCode}
          </em>
          {/* TODO 날짜 선택에 따른 완료 미완료 기능 */}
          <button
            className={cx({
              active: isOneDayTrip ? isDateOne : isDateTwo,
            })}
            onClick={onCheckCompleteButton}
          >
            완료
          </button>
        </div>
      </div>
    </S.container>
  );
}

DatePickerRange.defaultProps = {};

const S = {
  container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 772px;
    height: 600px;
    box-sizing: border-box;
    border-radius: 16px;
    padding: 30px 30px 25px;
    .calendar-inner {
      display: flex;
      & > div {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
    .calendar-info {
      display: flex;
      justify-content: space-between;
      .toggle-wrapper {
        display: flex;
        align-items: center;
      }

      .price-info {
        display: flex;
        align-items: center;

        sub {
          bottom: 0;
          color: ${LIGHT_GRAY7};
          font-size: 12px;
          margin-right: 10px;
          line-height: unset;
        }

        em {
          font-style: unset;
          color: ${ORANGE2};
          font-size: 18px;
          margin-right: 20px;
        }

        button {
          width: 86px;
          height: 40px;
          border-radius: 8px;
          background-color: ${LIGHT_GRAY6};
          color: ${WHITE1};
          font-size: 14px;
          cursor: not-allowed;
          &.active {
            background-color: ${DARK_BLUE1};
            color: ${WHITE1};
            cursor: pointer;
          }
        }
      }
    }
    @media only screen and (max-width: 767px) {
      .calendar-inner {
        & > div {
          &:first-of-type {
            margin-right: 0px;
          }
        }
      }
      .calendar-info {
        flex-direction: column;
        .price-info {
          sub {
            font-size: 16px;
          }
          em {
            font-size: 16px;
            margin-left: auto;
            margin-right: 10px;
          }
          button {
            font-size: 16px;
          }
        }
      }
    }
    @media only screen and (max-width: 599px) { 
      .calendar-info {
        .price-info {
          sub {
            font-size: 14px;
          }
          em {
            font-size: 14px;
          }
          button {
            font-size: 14px;
          }
        }
      }
    }
    @media only screen and (max-height: 740px) {
      .calendar-info {
        .price-info {
          sub {
            font-size: 14px;
          }
        }
      }
    }
  `,
  calendarWrapper: styled.div<{ right: boolean }>`
    flex: 1;
    .head {
      display: flex;
      align-items: center;
      height: 24px;
      position: relative;
      ${(props) =>
        props.right &&
        css`
          justify-content: flex-end;
        `}

      & > span {
        width: 100%;
        text-align: center;
      }

      .title {
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
        letter-spacing: -0.32px;
      }
    }

    .body {
      margin-top: 20px;
      .row {
        display: flex;
        &:first-of-type {
          cursor: initial;
          color: ${LIGHT_GRAY7};
          margin: 20px 0 14px;
          .box {
            font-size: 11px;
            font-weight: bold;
            height: 20px;
          }
          .box:hover > .text {
            background-color: white;
          }
        }

        .box {
          position: relative;
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 50px;
          font-size: 13pt;
          padding: 0 5px;
          color: ${DARK_GRAY1};
          cursor: pointer;
          &.is-edge {
            padding: 0;
          }

          span {
            display: grid;
            pointer-events: none;
          }

          &.is-disabled {
            color: ${LIGHT_GRAY6};
            pointer-events: none;
          }
          &.is-hidden {
            pointer-events: none;
            cursor: initial;
            span {
              display: none;
            }
          }
          &:hover {
            font-weight: 600;
            span.text {
              background-color: rgba(${LIGHT_BLUE3}, 0.1);
              font-weight: 600;
            }
          }
          &.selected {
            span.text {
              background-color: ${ORANGE2};
              color: white;
            }
          }
          .text {
            &:hover {
              font-weight: bold;
            }
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 22px;
            border-radius: 12px;
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
          }
          .price {
            position: absolute;
            font-size: 11px;
            bottom: 7px;
            color: ${LIGHT_GRAY7};
            letter-spacing: -0.4px;
            &.is-disabled {
              display: none;
            }
            &.ey-lowest-price {
              color: ${BLUE1};
            }
            &.pe-lowest-price {
              color: ${ORANGE2};
            }
          }
        }
      }
      @media only screen and (max-width: 767px) {
        margin-top: 0px;
      }
    }
  `,
  arrowWrapper: styled.button.attrs<{ left?: boolean }>({
    type: 'button',
  })`
    background-color: transparent;
    border: 0;
    outline: 0;
    z-index: 10;
    cursor: default;
    span {
      top: 9px;
      ${(left) =>
        !left &&
        css`
          right: 0;
        `}
    }
    &:hover,
    &:active {
      cursor: pointer;
      span {
        cursor: pointer;
        border: solid ${DARK_GRAY1};
        border-width: 0 2px 2px 0;
      }
    }

    ${(props) =>
      props.disabled &&
      css`
        &:hover,
        &:active {
          pointer-events: none;
          cursor: default;

          span {
            border: solid ${LIGHT_GRAY6};
            border-width: 0 2px 2px 0;
          }
        }
        span {
          &:hover,
          &:active {
          }
        }
      `}
  `,
  arrow: styled.span<IArrowStyleProps>`
    border: solid ${LIGHT_GRAY6};
    border-width: 0 2px 2px 0;
    padding: 3px;
    display: inline-block;
    transform: rotate(
      ${({ left }) => (left ? 135 : -45)}deg
    );
  `,
  dateFont: styled.span<{
    isBold: boolean;
    isFilled: boolean;
  }>`
    ${({ isBold, isFilled }) => {
      if (isBold && isFilled) {
        return css`
          color: ${WHITE1};
        `;
      } else if (!isBold && isFilled) {
        return css`
          color: ${WHITE1};
          opacity: 0.4;
        `;
      }
    }};
  `,
  period: styled.span<IPeroidStyleProps>`
    position: absolute;
    display: none;
    ${({ isFilled }) =>
      isFilled &&
      css`
        display: block;
        width: 100%;
        height: 23px;
        background-color: ${ORANGE2};
        top: 9%;
        color: ${WHITE1};
      `}
      @media only screen and (max-width: 767px) {
        height: 19px;
      }
      @media only screen and (max-height: 740px) {
        height: 17px;
      }
    border-radius:
      ${({ isStart }) => (isStart ? 12 : 0)}px
      ${({ isEnd }) => (isEnd ? 12 : 0)}px
      ${({ isEnd }) => (isEnd ? 12 : 0)}px
      ${({ isStart }) => (isStart ? 12 : 0)}px;
    ${({ isOneDayClick }) =>
      isOneDayClick &&
      css`
        border-radius: 12px;
      `};
    
    ${({ isDayTrip }) =>
      isDayTrip &&
      css`
        border-radius: 12px;
        box-sizing: border-box;
        border: double;
        height: 26px;
        top: 6%;
      `};
  `,
  text: styled.p`
    color: ${DARK_GRAY1};
  `,
};

export default DatePickerRange;
