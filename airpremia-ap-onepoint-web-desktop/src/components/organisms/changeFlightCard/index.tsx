import { useBooking } from '@airpremia/core/hooks';
import {
  getStationLabel
} from '@airpremia/core/lib/booking';
import {
  EFlightType,
} from '@airpremia/core/stores/models/bookingSession';
import moment from 'moment';
import { 
  Fragment, 
  useState, 
} from 'react';
import { prop, ifProp } from 'styled-tools';
import {
  CabinClassSeperator,
  RowTableForPriceByDate, 
  Title,
} from 'src/components';
import {
  WHITE1,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';
import styled from 'styled-components';

interface IStyleProps {
  isSelected?: boolean;
}

interface IParams {
  pivotDate: moment.Moment;
  updatedIdx: number;
}

interface IProps {
  idx: number;
  list: any[];
  origin: string
  destination: string
  journeys: any[];
  faresAvailable: any;
  onLoadLowFare: (parmas: IParams) => void;
  onClickFare: (parmas: {i: number, key: string}) => void;
}

function ChangeFlightCard({
  idx,
  list,
  origin,
  destination,
  journeys,
  faresAvailable,
  onLoadLowFare,
  onClickFare,
}: IProps) {
  const {
    bookingSessionStore,
    onChangeDate,
    onSearchFlightTicket,
    onSearchChangeFlight,
  } = useBooking();
  const {
    date,
    itineraryType,
    bookingChangeStartDate,
    bookingChangeEndDate
  } = bookingSessionStore;
  const [checkJourneykey, selectJourneyKey] = useState<string>('');
  const [checkFare, selectFare] = useState<string>('');

  const onClickJourney = (key: string) => () => {
    if (checkJourneykey == key) selectJourneyKey('');
    else selectJourneyKey(key);

    selectFare('');
    onClickFare({i: idx, key: ''});
  }

  const onClickFareCheck = (key: string) => () => {
    var data = '';
    if (checkFare != key) data = key;

    selectFare(data);
    onClickFare({i: idx, key: data});
  }

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
    onSearchChangeFlight({ 
      destination: destination,
      origin: origin,
      departure: moment(_date[0]).locale('ko').format("YYYY-MM-DD")+"T00:00:00",
      arrival: moment(_date[1]).locale('ko').format("YYYY-MM-DD")+"T00:00:00"
    });
  };

  const formatTime = 'HH : mm';
  const formatDate = 'YYYY.M.D. (dd)';

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
        <RowTableForPriceByDate
          list={list}
          selectedDate={date[idx]}
          startDate={bookingChangeStartDate}
          endDate={bookingChangeEndDate}
          onClickPrev={onClickPrev}
          onClickNext={onClickNext}
          onLoad={onLoadNewDate}
        />
      </S.RowTablePriceByDate>

      <S.priceBaseSeperator>
        <CabinClassSeperator />
      </S.priceBaseSeperator>

      <div>
        {journeys.map((journey, i) => {
          const faresKeys = Object.keys(journey.fares);
          return (
            JSON.stringify(journey.fares) != '{}' ? (
              <S.container2
                key={`${journey.journeyKey}${i.toString()}`}>
                <S.container3 isSelected={journey.journeyKey == checkJourneykey} onClick={onClickJourney(journey.journeyKey)}>
                  <S.wrapper
                    key={`${journey.journeyKey}${i.toString()}`}
                  >
                    <S.bottom>
                      <S.column width={430}>
                        <p>
                          {getStationLabel(journey.designator.origin)}({journey.designator.origin}) -&gt; {getStationLabel(journey.designator.destination)}({journey.designator.destination})
                        </p>
                      </S.column>
                      <S.column width={150}>
                        <h6>출발일</h6>
                        <p>
                          {moment(journey.designator.departure).locale('ko').format(formatDate)}
                        </p>
                      </S.column>
                      <S.column width={150}>
                        <h6>비행시간</h6>
                        <p>
                          {moment(journey.designator.departure).format(formatTime)}
                          ~
                          {moment(journey.designator.arrival).format(formatTime)}
                        </p>
                      </S.column>
                    </S.bottom>
                  </S.wrapper>
                </S.container3>
                <div>
                {
                  checkJourneykey == journey.journeyKey ? (
                    faresKeys.map((key: string) => {
                      return(
                        <S.fareButton key={`fare${key}`} isSelected={checkFare == key} onClick={onClickFareCheck(key)}>
                          {faresAvailable[key].classOfService +" : "+ faresAvailable[key].fareCode}
                        </S.fareButton>
                      )
                    })
                  ) : null
                }
                </div>
              </S.container2>
            ) : null
          )
        })}
      </div>
    </S.container>
  );
}

const S = {
  container: styled.div`
    max-width: 1400px;
    margin: 0 auto 60px;
    box-sizing: border-box;

    & > div {
      width: 1200px;
    }
  `,

  Title: styled.div`
    padding: 60px 0 100px;
  `,

  RowTablePriceByDate: styled.div``,

  Tickets: styled.div``,

  Ticket: styled.div`
    /* margin-bottom: 20px; */
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
  `,

  priceBaseSeperator: styled.div`
    margin: 45px 0 40px;
  `,

  container2: styled.div`
    border-radius: 8px;
    padding: 0 30px;
    margin: 20px 0;
  `,

  container3: styled.button<IStyleProps>`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 18px 20px;
    border-radius: 12px;
    border: 1px solid ${ifProp('isSelected', ORANGE2, 'black')};
    background-color: ${WHITE1};
    transition: ease-in-out 0.2s;
  `,

  wrapper: styled.div`
    padding-top: 30px;
    color: black;
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
  `,

  column: styled.div<{ width?: number }>`
    display: flex;
    flex-direction: column;
    min-width: ${prop('width')}px;

    h6 {
      font-size: 13px;
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
  `,

  fareButton: styled.button<IStyleProps>`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    border-radius: 12px;
    border: 1px solid ${ifProp('isSelected', ORANGE2, 'black')};
    background-color: ${WHITE1};
    transition: ease-in-out 0.2s;
  `,
};

export default ChangeFlightCard;
