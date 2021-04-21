import {
  filter,
  find,
  flow,
  get,
  map,
  sum,
} from 'lodash/fp';
import React, { useCallback, useMemo } from 'react';
import { SeatButton } from '@airpremia/cdk/components';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '@airpremia/core/stores';
import {
  handleSsrSeatUpdate,
  IOccupiedSeat,
} from '@airpremia/core/stores/models/ssr';
import { getSsrSeatPrice } from '@airpremia/core/lib/ssr';

export enum ESeatType {
  /** 5000 KRW 같은 비용 있는 좌석 */
  COST_0,
  COST_1,
  COST_2,
  COST_3,
  COST_4,
  COST_5,
  COST_6,
  COST_7,
  COST_8,
  COST_9,
  COST_99,
  /** 무료 좌석 */
  FREE,
  /** 선택불가 좌석 */
  DISABLED,
  /** 선택된 좌석 */
  SELECTED,
  BLANK,
}

export interface ISeatItem {
  seatType: ESeatType;
  initialName: string;
  passengerKey?: string;
  row: number;
  column?: string;
}

export default () => {
  const { ssr: ssrStore, booking: bookingStore } = useSelector(
    (state: RootStore) => state,
  );
  const dispatch = useDispatch();

  const getSeatMap = useMemo(() => {
    return flow(get('seatMap'))(ssrStore);
  }, [ssrStore.seatMap]);

  const getSeatMapElement = useCallback(
    (
      seatMap: ISeatItem[][][],
      onClick: (item: ISeatItem) => void,
    ) => {
      return seatMap.map(
        (row: ISeatItem[][], rowIndex: number) => {
          return (
            <div key={`${rowIndex}`} className="row">
              {row.map(
                (
                  group: ISeatItem[],
                  groupIndex: number,
                ) => {
                  return (
                    <div
                      key={`${groupIndex}`}
                      className="group"
                    >
                      {group.map(
                        (
                          item: ISeatItem,
                          itemIndex: number,
                        ) => {
                          return (
                            <div
                              key={`${itemIndex}`}
                              className="seatButtonWrapper"
                            >
                              <SeatButton
                                seatType={item.seatType}
                                initialName={
                                  item.initialName
                                }
                                onClick={() =>
                                  onClick(item)
                                }
                              />
                            </div>
                          );
                        },
                      )}
                    </div>
                  );
                },
              )}
            </div>
          );
        },
      );
    },
    [],
  );

  const getOccupiedSeats = useMemo(() => {
    return flow(get('occupiedSeats'))(ssrStore);
  }, [ssrStore.occupiedSeats]);

  const getSelectedSeatLabel = useCallback(
    ({
      tripId,
      passengerId,
    }: {
      tripId: string;
      passengerId: string;
    }) => {
      const selectedOccupiedSeat = flow(
        filter(['tripId', tripId]),
        find(['passengerId', passengerId]),
      )(getOccupiedSeats);
      const selectedOccupiedSeatId = flow(get('seatId'))(
        selectedOccupiedSeat,
      );

      if (!selectedOccupiedSeat) {
        if(flow(get('noSeatPassengers'))(bookingStore).length > 0) return '';
        else return '자동지정';
      }

      const { column, row } = flow(
        find(['tripId', tripId]),
        get('seatMap'),
        find(['seatId', selectedOccupiedSeatId]),
      )(getSeatMap);

      return `${row}${column}`;
    },
    [getSeatMap, getOccupiedSeats],
  );

  const getOccupiedSeatsPrice = useMemo(() => {
    return flow(
      get('occupiedSeats'),
      map((occupiedSeat: IOccupiedSeat) => {
        const group = flow(
          get('seatMap'),
          find(['tripId', occupiedSeat.tripId]),
          get('seatMap'),
          find(['seatId', occupiedSeat.seatId]),
          get('group'),
        )(ssrStore);

        if(flow(get('seatPassengers'))(bookingStore).length > 0 && 
            flow(get('seatPassengers'))(bookingStore).findIndex((item: any) => item.id === occupiedSeat.passengerId) != -1) return 0;
        else {
          return getSsrSeatPrice({
            tripId: occupiedSeat.tripId,
            passengerId: occupiedSeat.passengerId,
            group,
            dataset: flow(get('seat.prices'))(ssrStore),
          });
        } 
      }),
      sum,
    )(ssrStore);
  }, [
    ssrStore.occupiedSeats,
    ssrStore.seat.prices,
    ssrStore.seatMap,
  ]);

  const onUpdateSsrSeat = useCallback((dataset: any) => {
    dispatch(handleSsrSeatUpdate(dataset));
  }, []);

  return {
    getSeatMap,
    getSeatMapElement,
    getOccupiedSeats,
    getSelectedSeatLabel,
    getOccupiedSeatsPrice,
    onUpdateSsrSeat,
  };
};
