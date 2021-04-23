import { map, reduce } from 'lodash';
import moment from 'moment';
import styled from 'styled-components';
import { Arrow } from 'src/components';
import { PriceByDateField } from 'src/components';
import { EPosition } from 'src/components/atoms/arrow';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';
import { EPriceByDateFieldStatus } from 'src/components/molecules/priceByDateField';

interface IProps {
  /** 날짜별 가격 정보 데이터 */
  list?: any[];
  /** 현재 선택된 날짜 */
  selectedDate?: moment.Moment;
  startDate?: moment.Moment | null;
  endDate?: moment.Moment | null;
  /** 이전 데이터 불러오기 */
  onClickPrev?: () => void;
  /** 다음 데이터 불러오기 */
  onClickNext?: () => void;
  /** Low fare 불러오기 */
  onLoad?: (e: any) => void;
}

function RowTableForPriceByDate({
  list = RowTableForPriceByDate.defaultProps.list,
  selectedDate = RowTableForPriceByDate.defaultProps
    .selectedDate,
  startDate = moment(),
  endDate = moment(),
  onClickPrev = RowTableForPriceByDate.defaultProps
    .onClickPrev,
  onClickNext = RowTableForPriceByDate.defaultProps
    .onClickNext,
  onLoad = RowTableForPriceByDate.defaultProps.onLoad,
}: IProps) {
  const isDisabled = false;

  const getPriceByDateStatus = (
    selectedDate: moment.Moment,
    { date, lowfareCabins }: any,
  ) => {
    const f = 'YYYYMMDD';
    const disable = reduce(
      lowfareCabins,
      (acc, it) => acc && it.available < 1 && it.noFlight,
      true,
    );

    if (disable) {
      return EPriceByDateFieldStatus.DISABLE;
    } else if (
      selectedDate.format(f) === moment(date).format(f)
    ) {
      return EPriceByDateFieldStatus.ACTIVE;
    } else if (startDate != null && !moment(date).isAfter(startDate, 'day')) {
      return EPriceByDateFieldStatus.DISABLE;
    } else if (endDate != null && !moment(date).isBefore(endDate, 'day')) {
      return EPriceByDateFieldStatus.DISABLE;
    }
    return EPriceByDateFieldStatus.INACTIVE;
  };

  if (list.length > 0) {
    return (
      <S.container>
        <Arrow
          position={EPosition.LEFT}
          color={DARK_GRAY1}
          onClick={onClickPrev}
          disabled={isDisabled}
        />

        {map(list, (item, i) => {
          const [eyPrice, pePrice] = map(
            item.lowfareCabins,
            (cabin) => cabin.amount,
          );
          return (
            <PriceByDateField
              key={`priceByDateField${i.toString()}`}
              eyPrice={eyPrice}
              pePrice={pePrice}
              date={moment(item.date)}
              status={getPriceByDateStatus(
                selectedDate,
                item,
              )}
              onLoad={onLoad}
            />
          );
        })}

        <Arrow
          position={EPosition.RIGHT}
          color={DARK_GRAY1}
          onClick={onClickNext}
        />
      </S.container>
    );
  }
  return null;
}

RowTableForPriceByDate.defaultProps = {
  list: [],
  selectedDate: moment(),
  onClickPrev: () => {},
  onClickNext: () => {},
  onLoad: () => {},
};

const S = {
  container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;

    @media only screen and (max-width: 767px) { 
      height: auto;
      display: block;
      overflow: hidden;
      position: relative;
    }
  `,
};

export default RowTableForPriceByDate;
