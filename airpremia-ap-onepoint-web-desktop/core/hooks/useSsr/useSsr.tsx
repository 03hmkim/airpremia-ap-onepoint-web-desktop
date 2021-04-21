import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { handleSsrUpdateActions } from '../../stores/models/ssr';

export default () => {
  const dispatch = useDispatch();

  const onHandleUpdateSsr = useCallback(() => {
    dispatch(handleSsrUpdateActions.request());
  }, []);

  return {
    onHandleUpdateSsr,
  };
};
