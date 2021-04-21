import React, { FC, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { ifProp, prop } from 'styled-tools';
import {
  BLUE1,
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY7,
  ORANGE2,
  WHITE1,
} from '../../../styles/colors';
import Typography from '../../atoms/typography';
import {
  ECurrencyType,
  ELanguageType,
} from '../../../../core/lib/constant';
import {
  getCurrencyType,
  getMoney,
} from '../../../../core/lib/service';

export interface IProps {
  /** className */
  className?: string;
  /** 날짜 */
  day: string;
  /** 가격 */
  price: number;
  /** ey: 이코노미, pe: 프리미엄 이코노미 */
  type: 'ey' | 'pe';
  /** 가격에 색상 표현 - 최저가 일때 사용 */
  isHighlighting?: boolean;
  /** 색상을 칠해야하는지? */
  isFilled?: boolean;
  /** Date Picker에서 사용될 Range 출발 표기 */
  isDeparture?: boolean;
  /** Date Picker에서 사용될 Range 기간 안에 포함될 때 표기 */
  isTraveling?: boolean;
  /** Date Picker에서 사용될 Range 도착 표기 */
  isArrival?: boolean;
  /** 언어 */
  language?: ELanguageType;
  /** 금액을 표기할 화폐 */
  currency?: ECurrencyType;
  /** 당일여행 여부 */
  isOneDayTrip?: boolean;
  /** disable (sold out) */
  disabled?: boolean;
  /** 오늘 날짜인지 체크 */
  isToday: boolean;
}

const PriceByDay: FC<IProps> = ({
  className,
  day,
  type,
  price = 0,
  isToday = false,
  isHighlighting = false,
  isDeparture = false,
  isTraveling = false,
  isArrival = false,
  isOneDayTrip = false,
  disabled = false,
  isFilled = false,
  language = ELanguageType.KR,
  currency = ECurrencyType.KRW,
}) => {
  const currencyType =
    currency || getCurrencyType(language);
  const isKorean = useMemo(
    () => language === ELanguageType.KR,
    [language],
  );
  const isSelected =
    isDeparture || isArrival || isTraveling;

  const KoreanWrapping: FC = ({ children }) => (
    <S.price
      type={type}
      className="medium"
      color={DARK_GRAY1}
      isHighlighting={isHighlighting}
    >
      {children}
    </S.price>
  );

  const PriceRender: FC = () => {
    if (isKorean) {
      if (isOneDayTrip) {
        return <KoreanWrapping>당일여행</KoreanWrapping>;
      } else if (isDeparture || isArrival) {
        return (
          <KoreanWrapping>
            {isDeparture ? '가는날' : '오는날'}
          </KoreanWrapping>
        );
      }

      return (
        <S.price
          type={type}
          isHighlighting={isHighlighting}
        >
          {getMoney(price, currencyType, true)
            .split(' ')
            .join('')}
        </S.price>
      );
    }

    return (
      <S.price type={type} isHighlighting={isHighlighting}>
        {getMoney(price, currencyType).split(' ').join('')}
      </S.price>
    );
  };

  const color =
    isDeparture || isArrival ? WHITE1 : DARK_GRAY1;

  return (
    <S.container
      className={className}
      disabled={disabled}
      isSelected={isSelected}
    >
      <S.day
        isGray={!(isDeparture || isArrival) && isFilled}
      >
        <Typography
          fontType="type18"
          lineHeight={27}
          letterSpacing={-0.36}
          color={color}
        >
          {day}
        </Typography>
      </S.day>
      <PriceRender />
      <S.period
        isToday={isToday}
        isFilled={isFilled}
        isDeparture={isDeparture}
        isArrival={isArrival}
        isOneDayTrip={isOneDayTrip}
      />
    </S.container>
  );
};

const S = {
  container: styled.div<{
    disabled?: boolean;
    isSelected: boolean;
  }>`
    padding: 5px 3.5px;
    text-align: center;
    position: relative;

    ${({ disabled }) =>
      disabled &&
      css`
        pointer-events: none;
        & > div {
          &:first-of-type {
            p {
              color: ${LIGHT_GRAY5};
            }
          }
          &:nth-child(2) {
            visibility: hidden;
          }
        }
      `}
    .font10 {
      font-size: 10px;
    }
  `,
  day: styled.div<{ isGray: boolean }>`
    height: 27px;
    margin-bottom: 2px;
    & > p {
      color: ${ifProp('isGray', WHITE1)};
      opacity: ${ifProp('isGray', 0.4, 1)};
    }
  `,
  price: styled.div<{
    type: 'ey' | 'pe';
    isHighlighting: boolean;
    color?: string;
  }>`
    line-height: 15px;
    font-size: 11px;
    color: ${ifProp(
      'isHighlighting',
      ifProp({ type: 'ey' }, BLUE1, ORANGE2),
      LIGHT_GRAY7,
    )};
    color: ${prop('color')};
  `,
  period: styled.span<{
    isOneDayTrip: boolean;
    isFilled: boolean;
    isDeparture: boolean;
    isArrival: boolean;
    isToday?: boolean;
  }>`
    background-color: ${ifProp('isFilled', ORANGE2)};
    width: 100%;
    height: 30px;
    position: absolute;
    top: 2px;
    left: 0;
    z-index: -1;

    border-radius: ${({ isOneDayTrip }) =>
      isOneDayTrip
        ? '15px'
        : css`
            ${ifProp('isDeparture', 15, 0)}px
              ${ifProp('isArrival', 15, 0)}px
              ${ifProp('isArrival', 15, 0)}px
              ${ifProp('isDeparture', 15, 0)}px;
          `};
    ${({ isToday, isFilled }) =>
      isToday &&
      !isFilled &&
      css`
        border-radius: 15px;
        border: solid 1px;
      `}
  `,
};

export default PriceByDay;
