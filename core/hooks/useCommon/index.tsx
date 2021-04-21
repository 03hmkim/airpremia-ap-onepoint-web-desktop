import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../../stores';
import { handleCurrencyChange } from '../../stores/models/common';
import { ECurrencyType } from '../../lib/constant';

function useCommon() {
  const commonStore = useSelector(
    (state: RootStore) => state.common,
  );

  const dispatch = useDispatch();

  const onChangeCurrency = (unit: ECurrencyType) => {
    dispatch(handleCurrencyChange({ unit }));
  };

  return {
    commonStore,
    onChangeCurrency,
  };
}

export default useCommon;
