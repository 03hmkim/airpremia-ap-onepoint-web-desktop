import { flow, get, find } from 'lodash/fp';
import { useSelector } from 'react-redux';
import { RootStore } from '@airpremia/core/stores';
import { useCallback, useMemo } from 'react';
import { getECabinClass } from '@airpremia/core/lib/util';

export default () => {
  const { ssr: ssrStore } = useSelector(
    (state: RootStore) => state,
  );

  const { booking: bookingStore } = useSelector(
    (state: RootStore) => state,
  );

  const journeys = useMemo(() => {
    return ssrStore.journeys;
  }, [ssrStore.journeys]);

  const segments = useMemo(() => {
    return ssrStore.segments;
  }, [ssrStore.segments]);

  const legs = useMemo(() => {
    return ssrStore.legs;
  }, [ssrStore.legs]);

  const getCabinClass = useCallback(
    (tripId: string) => {
      return flow(
        get('cabinClasses'),
        find(['tripId', tripId]),
        get('cabinClass'),
      )(ssrStore);
    },
    [ssrStore.cabinClasses],
  );

  const getCheckinCabinClass = useCallback(
    (tripId: string) => {
      return getECabinClass(flow(
        get('currentCheckinData'),
        get('journey'),
        get('segments'),
        find(['segmentKey', tripId]),
        get('cabinOfService'),
      )(bookingStore));
    },
    [bookingStore.currentCheckinData],
  );

  return {
    journeys,
    segments,
    legs,
    getCabinClass,
    getCheckinCabinClass,
  };
};
