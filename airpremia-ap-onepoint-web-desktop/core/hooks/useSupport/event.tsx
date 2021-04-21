import { flow, get, isEmpty } from 'lodash/fp';
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleSupportEventListActions,
  handleSupportEventDetailActions,
} from '../../stores/models/support';
import { RootStore } from '@airpremia/core/stores';

export default () => {
  const { support: supportStore } = useSelector(
    (state: RootStore) => state,
  );
  const dispatch = useDispatch();

  const eventList = useMemo(() => {
    return flow(get('event.list'))(supportStore);
  }, [supportStore.event.list]);

  const eventDetail = useMemo(() => {
    return flow(get('event.detail'))(supportStore);
  }, [supportStore.event.detail]);

  const onGetEventList = useCallback(
    (category) => {
      if (!category) return;

      const isEmptyList = flow(
        get(`event.list.${category}`),
        isEmpty,
      )(supportStore);

      if (!isEmptyList) return;

      dispatch(
        handleSupportEventListActions.request({
          category,
        }),
      );
    },
    [supportStore.event.list],
  );

  const onGetEventDetail = useCallback((id: string) => {
    dispatch(
      handleSupportEventDetailActions.request({
        id,
      }),
    );
  }, []);

  return {
    eventList,
    eventDetail,
    onGetEventList,
    onGetEventDetail,
  };
};
