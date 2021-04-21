import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '@airpremia/core/stores';
import { useMemo, useCallback } from 'react';
import {
  handleLoadingShow,
  handleLoadingHide,
} from '@airpremia/core/stores/models/ui';

export default () => {
  const dispatch = useDispatch();
  const UIStore = useSelector(
    (state: RootStore) => state.ui,
  );

  const isLoading = useMemo(() => {
    return UIStore.isLoading;
  }, [UIStore]);

  const showLoading = useCallback(async () => {
    return dispatch(handleLoadingShow());
  }, []);
  const hideLoading = useCallback(async () => {
    return dispatch(handleLoadingHide());
  }, []);

  return {
    isLoading,
    showLoading,
    hideLoading,
  };
};
