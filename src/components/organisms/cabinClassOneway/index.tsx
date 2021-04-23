import { Fragment, useState, useEffect } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { flow, get, reduce, map } from 'lodash/fp';
import {
  RowTableForPriceByDate,
  CabinClassTicket,
  CabinClassTicketSingle,
  CabinClassTime,
  CabinClassSeperator,
} from 'src/components';
import { Title } from 'src/components';
import {
  getStationLabel,
  getCabinClassRadioData,
} from '@airpremia/core/lib/booking';
import {
  IKeyChangeType,
  EFlightType,
} from '@airpremia/core/stores/models/bookingSession';
import {
  IFlightTicketSearchMarket,
  IFlightTicketSearchJourney,
  IFlightTicketSearchCabinClass,
} from '@airpremia/core/api/ticket/types';
import { useModal } from 'src/hooks';
import { useBooking } from '@airpremia/core/hooks';

interface IParams {
  pivotDate: moment.Moment;
  updatedIdx: number;
}

interface IProps {
  idx: number;
  list: any[];
  market: IFlightTicketSearchMarket;
  journeys: IFlightTicketSearchJourney[];
  onLoadLowFare: (parmas: IParams) => void;
  isRebook?: boolean;
}

function CabinClassOneWay({
  idx,
  list,
  market,
  journeys,
  onLoadLowFare,
  isRebook,
}: IProps) {
  const {
    bookingSessionStore,
    onChangeKeys,
    onChangeDate,
    onSearchFlightTicket,
  } = useBooking();
  const {
    UIStore: { newModal },
    onShowNewModal,
  } = useModal();
  const {
    keys,
    date,
    interval,
    itineraryType,
  } = bookingSessionStore;
  const [classType, setclassType] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState<
    string
  >('');
  const { origin, destination } = market;
  const onChangeClassType = (e: any) => {
    const journeyKey = e.target;
    const [, key] = journeyKey.split('/');

    onChangeKeys({
      idx,
      type: IKeyChangeType.JOURNEYKEY,
      key,
    });
    setclassType(journeyKey);
  };

  const onChangeProductType = (key: string) => {
    onChangeKeys({
      idx,
      type: IKeyChangeType.FAREAVAILABILITYKEY,
      key,
    });

    const intervalChanged =
      date.length > 1 &&
      moment.duration(date[1].diff(date[0])).asDays() !==
        interval;

    const begin = idx === 0;
    const updatedIdx = begin ? 1 : 0;
    const pivotDate = begin
      ? moment(date[idx]).clone().add(interval, 'days')
      : moment(date[idx])
          .clone()
          .subtract(interval, 'days');

    const _date = begin
      ? [date[0], pivotDate]
      : [pivotDate, date[1]];

    // isRebook 조건 추가. 일정변경시 변경되는것 필요없음 기존 예약에 왜있는지 모르겠음
    if (intervalChanged && !isRebook) { 
      onChangeDate({ date: _date, keyIdx: begin ? 1 : 0 });
      onSearchFlightTicket({ date: _date });
      onLoadLowFare({ pivotDate, updatedIdx });
    }
    setSelectedProduct(key);
  };

  const onClickPrev = () => {
    const today = moment();
    const pivotDate = moment(list[0].date)
      .clone()
      .subtract(7, 'day');

    if (today > pivotDate) {
      return;
    }
    onLoadLowFare({ pivotDate, updatedIdx: idx });
  };

  const onClickNext = () => {
    const pivotDate = moment(list[0].date)
      .clone()
      .add(7, 'day');

    onLoadLowFare({ pivotDate, updatedIdx: idx });
  };

  const onLoadNewDate = (e: any) => {
    let _date;
    const time = moment(Number(e.target.dataset.target));

    if (itineraryType === EFlightType.OW) {
      _date = [time];
    } else {
      if (idx === 0) {
        if (time > date[1]) {
          _date = [time, time];
        } else {
          _date = [time, date[1]];
        }
      } else {
        if (time < date[0]) {
          _date = [time, time];
        } else {
          _date = [date[0], time];
        }
      }
    }

    onChangeDate({ date: _date, keyIdx: idx });
    onSearchFlightTicket({ date: _date });
    setSelectedProduct('');
  };

  useEffect(() => {
    if (keys[idx] && !keys[idx].fareAvailabilityKey) {
      setSelectedProduct('');
    }
  }, [keys]);

  return (
    <S.container>
      <S.Title>
        <Title>
          <Fragment>
            {getStationLabel(origin)}({origin}) →{' '}
            {getStationLabel(destination)}({destination})
            <br />
            일정을 선택해주세요
          </Fragment>
        </Title>
      </S.Title>

      <S.RowTablePriceByDate>
        {isRebook? null
            :
            (<RowTableForPriceByDate
              list={list}
              selectedDate={date[idx]}
              onClickPrev={onClickPrev}
              onClickNext={onClickNext}
              onLoad={onLoadNewDate}
            />)
          }
      </S.RowTablePriceByDate>

      <S.priceBaseSeperator>
        <CabinClassSeperator />
      </S.priceBaseSeperator>

      <S.Tickets>
        <S.Ticket>
          {journeys.map((journey, i) => {
            const { journeyKey, cabinClasses } = journey;
            const radioDataList = getCabinClassRadioData(
              classType,
              journeyKey,
              cabinClasses.map((item) => item.code),
              onChangeClassType,
            );

            const isSingle = flow(
              get('cabinClasses'),
              map(
                (item: IFlightTicketSearchCabinClass) =>
                  item.productClasses.length,
              ),
              reduce((acc, it) => acc && it === 1, true),
            )(journey);

            if (isSingle) {
              return (
                <S.ticketWrapper
                  key={`journeyTicket${i.toString()}`}
                >
                  <CabinClassTime
                    key={`cabinClassTime${i.toString()}`}
                    journey={journey}
                    onShowModal={onShowNewModal}
                    modalTarget={newModal.target}
                  />
                  <CabinClassTicketSingle
                    journey={journey}
                    selectedProduct={selectedProduct}
                    onChangeClassType={onChangeClassType}
                    onChangeProductType={
                      onChangeProductType
                    }
                  />
                </S.ticketWrapper>
              );
            }

            return (
              <S.ticketWrapper
                key={`journeyTicket${i.toString()}`}
              >
                <CabinClassTime
                  key={`cabinClassTime${i.toString()}`}
                  journey={journey}
                  onShowModal={onShowNewModal}
                  modalTarget={newModal.target}
                />
                <CabinClassTicket
                  key={`cabinClassTicketjourney${i.toString()}`}
                  journey={journey}
                  radioData={radioDataList}
                  selectedProduct={selectedProduct}
                  onChangeProductType={onChangeProductType}
                />
              </S.ticketWrapper>
            );
          })}
        </S.Ticket>
      </S.Tickets>
    </S.container>
  );
}

const S = {
  container: styled.div`
    margin: 0 auto 60px;
    box-sizing: border-box;

    & > div {
      max-width: 1200px;
      width: 100%;
    }
  `,

  Title: styled.div`
    padding: 60px 0 100px;

    @media only screen and (max-width: 1059px) {
      font-size: 26px;
      padding: 6vw 0 12vw;
    }

    @media only screen and (max-width: 767px) { 
      font-size: 20px;
      padding: 3vw 0 6vw;
    }
  `,

  RowTablePriceByDate: styled.div``,

  Tickets: styled.div``,

  Ticket: styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    flex-direction: column;
  `,

  ticketWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    & > div:not(:first-of-type) {
      margin-top: 20px;
    }

    @media only screen and (max-width: 1440px) {
      display: block;
    }
  `,

  priceBaseSeperator: styled.div`
    margin: 45px 0 40px;
  `,
};

export default CabinClassOneWay;
