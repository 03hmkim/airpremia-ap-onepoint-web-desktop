import {
  flow,
  get,
  map,
  values,
  flatten,
  find,
  filter,
  last,
  split,
  head,
  includes,
  compact,
} from 'lodash/fp';
import {
  handleSsrsHistoryActions,
  handleAvailableSsrsSearchActions,
  handleSsrPageActions,
  handleSsrCheckinSeatActions,
  handleSsrCheckinSeatUpdate,
  handleSsrCheckinUpdateActions,
} from '@airpremia/core/stores/models/ssr';
import {
  getDestructedSeats,
  mapUpdateSeatRequest,
} from '@airpremia/core/lib/ssr';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '@airpremia/core/stores';
import { useBooking } from '@airpremia/core/hooks';
import React, {
  useMemo,
  useCallback,
  Fragment,
} from 'react';
import { ISsrExpansionPanel } from '../../components/molecules/ssrExpansionPanel';
import {
  SsrExpansionPanel,
  SsrPanel,
} from '../../components';
import { ISsrPanel } from '../../components/molecules/ssrPanel';
import {
  deleteBookingSessionSsrs,
  postBookingSessionSsrs,
} from '@airpremia/core/api/booking/session';

export interface ISsrHistory {
  ssrType: string;
  ssrCode: string;
  tripLabel: string;
  passengerId: string;
  ssrIds: string[];
  price: number;
  count: number;
  categoryText: string;
}

export interface ISsrRequestItem {
  /** add(추가), delete(제거) */
  type?: string;
  ssrId: string;
  count: number;
}

function useSsr() {
  const { ssr: ssrStore } = useSelector(
    (state: RootStore) => state,
  );
  const { bookingSessionStore, bookingStore } = useBooking();
  const { currencyCode } = bookingSessionStore;

  const findPassenger = (
    items: any,
    passengerKey: string,
    targetKey: string,
  ) => {
    return flow(
      get('passengers'),
      find(['passengerKey', passengerKey]),
      get(targetKey),
    )(items);
  };

  const getPrice = useCallback(
    ({
      ssrCode,
      passengerId,
      count,
    }: {
      ssrCode: string;
      passengerId: string;
      count: number;
    }) => {
      return flow(
        get('availableSsrs'),
        values,
        flatten,
        map('items'),
        flatten,
        find(['ssrCode', ssrCode]),
        get('passengers'),
        flatten,
        find(['passengerKey', passengerId]),
        get('price'),
        (price: number) => price * count,
      )(ssrStore);
    },
    [ssrStore.availableSsrs],
  );

  const getSsrType = useCallback((history: any) => {
    if (history.category == 'Baggage') return 'baggage';

    const categoryHead = flow(
      get('category'),
      split(':'),
      head,
    )(history);

    if (categoryHead == 'Meal') return 'meal';
  }, []);
  const getSsrSubType = useCallback((history: any) => {
    const hasSubType = flow(
      get('category'),
      includes(':'),
    )(history);

    if (!hasSubType) return '';

    return flow(get('category'), split(':'), last)(history);
  }, []);

  const histories: ISsrHistory[] = useMemo(() => {
    return flow(
      get('histories'),
      map((history: any) => {
        return {
          ssrType: getSsrType(history),
          ssrSubType: getSsrSubType(history),
          ssrSubTypeText: history.categoryText,
          ssrCode: history.ssrCode,
          tripLabel: `${history.market.origin} → ${history.market.destination}`,
          passengerId: history.passengerKey,
          ssrIds: history.ssrKeys,
          price: getPrice({
            ssrCode: history.ssrCode,
            passengerId: history.passengerKey,
            count: history.count,
          }),
          count: history.count,
        };
      }),
    )(ssrStore);
  }, [ssrStore.histories]);

  // TODO histories2 용으로 데이터 구조 변경 사이드 이펙트
  // const histories = useMemo(() => {
  //   return flow(get('histories2'))(ssrStore);
  // }, [ssrStore.histories2]);

  const getTripLabel = useCallback(
    (tripId: string) => {
      if (!tripId) return '';

      return flow(
        get('availableSsrs'),
        values,
        flatten,
        find(['key', tripId]),
        (i: any) => {
          return `${i.detail.origin} → ${i.detail.destination}`;
        },
      )(ssrStore);
    },
    [ssrStore.availableSsrs],
  );

  const getSsrLabel = useCallback(
    (ssrCode?: string) => {
      return flow(
        get('availableSsrs'),
        values,
        flatten,
        map('items'),
        flatten,
        find(['ssrCode', ssrCode]),
        get('ssrInfo.title'),
      )(ssrStore);
    },
    [ssrStore.availableSsrs],
  );

  const getSsrLastLabel = useCallback(
    (ssrCode?: string) => {
      return flow(split(' '), last)(getSsrLabel(ssrCode));
    },
    [],
  );

  const findAvailableSsr = useCallback(
    (ssrCode: string) => {
      return flow(
        get(['availableSsrs']),
        values,
        flatten,
        map('items'),
        flatten,
        find(['ssrCode', ssrCode]),
        get('ssrInfo.title'),
      )(ssrStore);
    },
    [ssrStore.availableSsrs],
  );

  const dispatch = useDispatch();
  const onLoadSsrsHistory = () => {
    dispatch(handleSsrsHistoryActions.request());
  };

  const onLoadAvailableSsrs = () => {
    return dispatch(
      handleAvailableSsrsSearchActions.request({
        currencyCode,
      }),
    );
  };

  const onLoadSsr = useCallback(() => {
    dispatch(handleSsrPageActions.request());
  }, []);

  const ssrUpdate = async (keys: ISsrRequestItem[]) => {
    const addPayload = {
      currencyCode,
      keys: flow(
        filter(['type', 'add']),
        map((key: ISsrRequestItem) => {
          return {
            ssrKey: key.ssrId,
            count: key.count,
          };
        }),
      )(keys),
    };

    const deletePayload = {
      keys: flow(
        filter(['type', 'delete']),
        map((key: ISsrRequestItem) => {
          return {
            ssrKey: key.ssrId,
            count: key.count,
          };
        }),
      )(keys),
    };

    if (addPayload.keys.length) {
      await postBookingSessionSsrs(addPayload);
    }
    if (deletePayload.keys.length) {
      await deleteBookingSessionSsrs(deletePayload);
    }

    onLoadSsrsHistory();
  };

  const getSsrPanelsElement = useCallback(
    ({
      list,
      onClick,
    }: {
      list: ISsrPanel[];
      onClick: (id: string) => void;
    }) => {
      return flow(
        map((panel: ISsrPanel) => {
          return (
            <Fragment key={panel.id}>
              <SsrPanel {...panel} onClick={onClick} />
            </Fragment>
          );
        }),
      )(list);
    },
    [],
  );

  const getSsrExpansionPanelsElement = useCallback(
    ({
      list,
      onClick,
    }: {
      list: ISsrExpansionPanel[];
      onClick: any;
    }) => {
      return flow(
        map((panel: ISsrExpansionPanel) => {
          return (
            <Fragment key={panel.type}>
              <SsrExpansionPanel
                {...panel}
                onClick={onClick}
              />
            </Fragment>
          );
        }),
      )(list);
    },
    [],
  );

  // TODO refactoring
  const getSsrExpansionPanels = useCallback(
    (resource: ISsrExpansionPanel[]) => {
      return flow(
        map((resource: ISsrExpansionPanel) => {
          const history = flow(
            get('histories2'),
            find(['type', resource.type]),
          )(ssrStore);

          return {
            ...resource,
            ...history,
          };
        }),
      )(resource);
    },
    [ssrStore.histories2],
  );
  
  const onLoadCheckinSeatSsr = () => {
    dispatch(handleSsrCheckinSeatActions.request());
  };

  const onUpdateSsrCheckinSeat = () => {
    dispatch(handleSsrCheckinSeatUpdate({
      passengers: bookingStore.passengers,
      seatPassengers: bookingStore.seatPassengers
    }));
  };

  const onHandleUpdateCheckinSsr = () => {
    try {
      const {
        add: addSeats = [],
      } = getDestructedSeats({
        session: ssrStore.occupiedSeatsSession,
        store: ssrStore.occupiedSeats,
      });
      
      const addSeatsData = flow(
        map((data: any) => {
          if (!bookingStore.seatPassengers.find((key) => key.id == data.passengerId))
            return data;
        }),
        compact,
      )(addSeats);

      dispatch(handleSsrCheckinUpdateActions.request(mapUpdateSeatRequest(addSeatsData)));
    } catch (e) {
      console.error('onHandleUpdateCheckinSsr', e);
    }
  };

  return {
    ssrStore,
    findPassenger,
    getSsrType,
    getSsrSubType,
    findAvailableSsr,
    onLoadSsr,
    onLoadSsrsHistory,
    onLoadAvailableSsrs,
    ssrUpdate,
    getSsrLabel,
    getSsrLastLabel,
    getTripLabel,
    getPrice,
    getSsrPanelsElement,
    getSsrExpansionPanelsElement,
    getSsrExpansionPanels,
    histories,
    onLoadCheckinSeatSsr,
    onUpdateSsrCheckinSeat,
    onHandleUpdateCheckinSsr,
  };
}

export default useSsr;
