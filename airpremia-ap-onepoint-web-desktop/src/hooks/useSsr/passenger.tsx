import { flow, get, find } from 'lodash/fp';
import { useSelector } from 'react-redux';
import { RootStore } from '@airpremia/core/stores';
import { useCallback, useMemo } from 'react';

export default () => {
  const { ssr: ssrStore } = useSelector(
    (state: RootStore) => state,
  );

  const passengers = useMemo(() => {
    return flow(get('passengers'))(ssrStore);
  }, [ssrStore.passengers]);

  const getPassengerName = useCallback(
    (passengerId: string) => {
      return flow(
        find(['id', passengerId]),
        get('label'),
      )(passengers);
    },
    [ssrStore.passengers],
  );

  return {
    passengers,
    getPassengerName,
  };
};
