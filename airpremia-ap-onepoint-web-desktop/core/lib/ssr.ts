import {
  filter,
  find,
  flatten,
  flow,
  get,
  groupBy,
  head,
  keys,
  last,
  lowerFirst,
  map,
  reject,
  split,
  uniqBy,
  values,
  join,
  flattenDeep,
} from 'lodash/fp';
import { xorWith } from 'lodash';
import { CommonResp } from '@airpremia/core/api/config';
import {
  getECabinClass,
  getLabelInList,
  mapToPick,
} from '@airpremia/core/lib/util';
import { ESeatType } from '@airpremia/core/hooks/useSsr/seat';
import {
  ISsrHistory2,
  ISsrHistoryContent,
  ISsrHistoryContentListItem,
  IOccupiedSeat,
} from '@airpremia/core/stores/models/ssr';
import { useSelector } from 'react-redux';
import { RootStore } from '@airpremia/core/stores';

const _rejectJourneyAndFlatten = (res: CommonResp) => {
  return flow(
    get('data'),
    values,
    flatten,
    reject(['duration', 'Journey']),
    map('items'),
    flatten,
  )(res);
};

export const getSsrPrices = (res: CommonResp) => {
  return flow(
    _rejectJourneyAndFlatten,
    map((item: any) => {
      return {
        ssrCode: item.ssrCode,
        passengerList: flow(
          get('passengers'),
          map((passenger: any) => {
            return {
              passengerId: passenger.passengerKey,
              value: passenger.price,
            };
          }),
        )(item),
      };
    }),
    uniqBy('ssrCode'),
    map((item: any) => {
      return flow(
        get('passengerList'),
        map((passenger: any) => {
          return {
            ssrCode: item.ssrCode,
            ...passenger,
          };
        }),
      )(item);
    }),
    flatten,
  )(res);
};

export const getSsrProductLabels = (res: CommonResp) => {
  return flow(
    _rejectJourneyAndFlatten,
    map((item: any) => {
      return {
        id: item.ssrCode,
        label: flow(get('ssrInfo.title'))(item),
      };
    }),
  )(res);
};

export const getSsrTrip = (dataset: any) => {
  return flow(
    map((data: any) => {
      return {
        id: data.key,
        label: `${data.detail.origin} → ${data.detail.destination}`,
        isClosed: false, // TODO backend 객체 요청
      };
    }),
  )(dataset);
};

export const getSsrPassengers = (res: CommonResp) => {
  return flow(
    get('data.booking.passengers'),
    map((passenger: any) => {
      return {
        id: passenger.passengerKey,
        label: `${passenger.lastName} ${passenger.firstName}`,
      };
    }),
  )(res);
};

const _getSsrType = (raw: string) => {
  return flow(split(':'), head, lowerFirst)(raw);
};

const _hasSsrSubType = (raw: string) => {
  return raw.includes(':');
};

const _getSsrSubType = (raw: string) => {
  if (!_hasSsrSubType(raw)) return '';

  return flow(split(':'), last, lowerFirst)(raw);
};

const _getTripLabel = (market: any) => {
  return `${market.origin} → ${market.destination}`;
};

export const getSsrHistories = ({
  res,
  productLabels,
  passengers,
  prices,
}: any) => {
  return flow(
    get('data.ssrs'),
    map((item: any) => {
      return {
        type: _getSsrType(item.category),
        subType: _getSsrSubType(item.category),
        tripLabel: _getTripLabel(item.market),
        identifier: flow(
          get('market.identifier.identifier'),
        )(item),
        count: item.count,
        productLabel: flow(getLabelInList(item.ssrCode))(
          productLabels,
        ),
        passengerName: flow(
          getLabelInList(item.passengerKey),
        )(passengers),
        price: flow(
          filter(['passengerId', item.passengerKey]),
          find(['ssrCode', item.ssrCode]),
          get('value'),
        )(prices),
        ssrIds: item.ssrKeys,
        ssrCode: item.ssrCode,
        passengerId: item.passengerKey,
      };
    }),
    groupBy('type'),
    map((item: any) => {
      const { type, subType = '' } = flow(head)(item);
      return {
        type,
        subType,
        count: item.length,
        contents: flow(
          groupBy('identifier'),
          map((list: any) => {
            return {
              tripLabel: flow(head, get('tripLabel'))(list),
              list: flow(
                mapToPick([
                  'productLabel',
                  'passengerName',
                  'price',
                  'ssrIds',
                  'count',
                  'ssrCode',
                  'passengerId',
                ]),
              )(list),
            };
          }),
        )(item),
      };
    }),
  )(res);
};

const _getESeatTypeByGroup = (group: number) => {
  switch (group) {
    case 0:
      return ESeatType.COST_0;
    case 1:
      return ESeatType.COST_1;
    case 2:
      return ESeatType.COST_2;
    case 3:
      return ESeatType.COST_3;
    case 4:
      return ESeatType.COST_4;
    case 5:
      return ESeatType.COST_5;
    case 6:
      return ESeatType.COST_6;
    case 7:
      return ESeatType.COST_7;
    case 8:
      return ESeatType.COST_8;
    case 9:
      return ESeatType.COST_9;
    case 99:
      return ESeatType.COST_99;
    default:
      return ESeatType.FREE;
  }
};

export const getSsrSeatMap = ({
  columns,
  rows,
  dataset,
  excludeSeats,
}: {
  columns: (undefined | string)[][];
  rows: number[];
  dataset: any; // TODO
  excludeSeats?: { row: number; column: string }[];
}) => {
  const { booking: bookingStore, ssr: ssrStore } = useSelector(
    (state: RootStore) => state,
  );

  return rows.map((row: number) => {
    return columns.map((group: (string | undefined)[]) => {
      return group.map((column: string | undefined) => {
        const result = {
          seatType: ESeatType.BLANK,
          initialName: '',
          row,
          column,
        };
        const isExcludeSeat = !!excludeSeats?.find(
          (seat) => {
            return seat.row == row && seat.column == column;
          },
        );
        const targetSeat = flow(
          filter(['row', row]),
          find(['column', column]),
        )(dataset);
        const isOccupied = flow(get('isOccupied'))(
          targetSeat,
        );
        const assignable = flow(get('assignable'))(
          targetSeat,
        );

        const seatGroup = flow(get('group'))(
          targetSeat,
        ); // 2021.02.16 smartport JYN

        if (isExcludeSeat || column === undefined) {
          // 맵 상 없는 좌석
          result.seatType = ESeatType.BLANK;
        } else if (isOccupied) {
          // 점유하고 있는 좌석
          if(flow(get('seatPassengers'))(bookingStore).length > 0 && 
              flow(get('seatPassengers'))(bookingStore).findIndex((item: any) => item.id === flow(get('passengerId'))(targetSeat)) != -1) result.seatType = ESeatType.DISABLED;
          else result.seatType = ESeatType.SELECTED;
          result.initialName = flow(get('initialName'))(
            targetSeat,
          );
        } else if (!assignable) {
          // 타고객 예약 좌석
          result.seatType = ESeatType.DISABLED;
        } else if (seatGroup === ESeatType.COST_0 || seatGroup === ESeatType.COST_1) {
          // 비상구 좌석
          result.seatType = ESeatType.DISABLED; // 2021.02.16 smartport JYN
        } else if (seatGroup === 99) {
          // 탑승객 직접 선택 불가 좌석
          result.seatType = ESeatType.DISABLED; // 2026.02.26 smartport JYN 
        } else {
          // 나머지 group 맵핑
          result.seatType = flow(
            get('group'),
            _getESeatTypeByGroup,
          )(targetSeat);
        }
        if(flow(get('seatPassengers'))(bookingStore).length > 0) { // 체크인 좌석 결제 개발 후 삭제
          const price = getSsrSeatPrice({
            tripId:  flow(get('tripId'))(targetSeat),
            passengerId: flow(get('passengerId'))(targetSeat),
            group: seatGroup,
            dataset: flow(get('seat.prices'))(ssrStore),
          });
          if(price > 0) result.seatType = ESeatType.DISABLED;
        }
        return result;
      });
    });
  });
};

export const mapSsrSeatPrices = (dataset: any) => {
  return flow(
    get('data.availability.journeys'),
    map((journey: any) => {
      const tripId = journey.journeyKey;
      const fees = flow(
        get('segments'),
        map('legs'),
        flattenDeep,
        head,
        get('fees'),
      )(journey);

      return flow(
        keys,
        map((passengerId: string) => {
          const values = fees[passengerId];
          const groupList = flow(
            keys,
            map((group: string) => {
              return {
                group: Number(group),
                price: values[group],
              };
            }),
          )(values);
          return groupList.map((group) => {
            return {
              tripId,
              passengerId,
              ...group,
            };
          });
        }),
        flatten,
      )(fees);
    }),
    flatten,
  )(dataset);
};

export const getSsrCabinClass = (dataset: any) => {
  return flow(
    get('data.booking.boardingPassInfo.journeys'),
    map((journey: any) => {
      return {
        tripId: journey.journeyKey,
        cabinClass: getECabinClass(journey.cabinClass),
      };
    }),
  )(dataset);
};

export const getSsrSeatMapResources = (dataset: any) => {
  return flow(
    map((item: any) => {
      return {
        tripId: item.tripId,
        seatMap: flow(
          get('seatMap'),
          map((item: any) => Object.values(item)),
          flatten,
          map((item: any) => Object.values(item)),
          flatten,
          flatten,
          map((item: any) => {
            const {
              availability,
              assignable,
              column,
              group,
              unitKey,
            } = item;
            return {
              availability,
              assignable: availability != "Open" ? false : assignable,
              cabinClass: getECabinClass(item.classOfCabin),
              column,
              row: Number(item.row),
              group,
              seatId: unitKey,
              isOccupied: false,
              initialName: '',
            };
          }),
        )(item),
      };
    }),
  )(dataset);
};

export const getInitialName = (name?: string) => {
  if (!name) return '';

  return flow(split(' '), map(head), join(''))(name);
};

export interface IGetDestructedSeats {
  add: IOccupiedSeat[];
  delete: IOccupiedSeat[];
}

const _isEqualSeat = (
  a: IOccupiedSeat,
  b: IOccupiedSeat,
) => {
  return (
    a.tripId == b.tripId &&
    a.passengerId == b.passengerId &&
    a.seatId == b.seatId
  );
};

export const getDestructedSeats = ({
  session,
  store,
}: {
  session: IOccupiedSeat[];
  store: IOccupiedSeat[];
}): IGetDestructedSeats => {
  const sessionLocal = session.map(
    (seat: IOccupiedSeat) => ({
      ...seat,
      type: 'session',
    }),
  );
  const storeLocal = store.map((seat: IOccupiedSeat) => ({
    ...seat,
    type: 'store',
  }));
  const result: IGetDestructedSeats = {
    add: [],
    delete: [],
  };
  if (session.length == 0) {
    // 1. session 에 아무것도 없으면 store 에 있는 모든 객체들을 add 에 넣는다.
    result.add = store;
  } else {
    // 2. session 에 무엇인가 있다면
    const objectProperties = [
      'tripId',
      'passengerId',
      'seatId',
    ];
    const res = xorWith(
      sessionLocal,
      storeLocal,
      _isEqualSeat,
    );
    result.add = flow(
      filter(['type', 'store']),
      mapToPick(objectProperties),
    )(res);
    result.delete = flow(
      filter(['type', 'session']),
      mapToPick(objectProperties),
    )(res);
  }

  return result;
};

export const mapUpdateSeatRequest = (
  seats: IOccupiedSeat[],
) => {
  return {
    seats: seats.map((seat: IOccupiedSeat) => {
      return {
        journeyKey: seat.tripId,
        passengerKey: seat.passengerId,
        unitKey: seat.seatId,
      };
    }),
  };
};

const _getGroup = ({
  tripId,
  row,
  column,
  dataset,
}: {
  tripId: string;
  row: number;
  column: string;
  dataset: any; // seatMap 의 interface
}) => {
  return flow(
    find(['tripId', tripId]),
    get('seatMap'),
    filter(['column', column]),
    find(['row', row]),
    get('group'),
  )(dataset);
};

export const getSsrSeatPrice = ({
  tripId,
  passengerId,
  group,
  dataset,
}: {
  tripId: string;
  passengerId: string;
  group: number;
  dataset: any;
}) => {
  return flow(
    filter(['tripId', tripId]),
    filter(['passengerId', passengerId]),
    find(['group', group]),
    get('price'),
  )(dataset);
};

export const getSsrSeatHistory = ({
  data,
  prices,
  seatMap,
  passengers,
}: any) => {
  const dataset = flow(
    get('booking.journeys'),
    map((journey: any) => {
      const tripId = journey.journeyKey;
      return flow(
        get('segments'),
        map('passengerSegment'),
        flatten,
        map('value'),
        map('seats'),
        flatten,
        map((seat: any) => {
          return {
            ...seat,
            tripId,
          };
        }),
      )(journey);
    }),
    flattenDeep,
    map((history: any) => {
      const {
        tripId,
        row,
        column,
        departureStation,
        arrivalStation,
        unitKey,
        passengerKey,
      } = history;
      const group = _getGroup({
        tripId,
        row: Number(row),
        column,
        dataset: seatMap,
      });
      const price = getSsrSeatPrice({
        tripId,
        passengerId: passengerKey,
        group,
        dataset: prices,
      });

      return {
        tripId,
        tripLabel: `${departureStation} → ${arrivalStation}`,
        productLabel: `${row}${column}`,
        price,
        ssrIds: [unitKey],
        passengerId: passengerKey,
      };
    }),
  )(data);

  const result = {
    type: 'seat',
    contents: flow(
      groupBy('tripLabel'),
      map((list: any) => {
        return {
          tripId: flow(head, get('tripId'))(list),
          tripLabel: flow(head, get('tripLabel'))(list),
          list: flow(
            map((seat: any) => {
              return {
                count: 1,
                productLabel: seat.productLabel,
                price: seat.price,
                ssrIds: seat.ssrIds,
                passengerId: seat.passengerId,
                passengerName: flow(
                  getLabelInList(seat.passengerId),
                )(passengers),
              };
            }),
          )(list),
        };
      }),
    )(dataset),
  };

  const count = flow(
    get('contents'),
    map('list'),
    flatten,
    get('length'),
  )(result);

  return { ...result, count };
};

export const getOccupiedSeatsFromHistory = (
  history: ISsrHistory2,
) => {
  return flow(
    get('contents'),
    map((content: ISsrHistoryContent) => {
      const tripId = content.tripId;
      return flow(
        get('list'),
        map((item: ISsrHistoryContentListItem) => {
          return {
            tripId,
            passengerId: item.passengerId,
            seatId: item.ssrIds?.pop(),
          };
        }),
      )(content);
    }),
    flatten,
  )(history);
};
