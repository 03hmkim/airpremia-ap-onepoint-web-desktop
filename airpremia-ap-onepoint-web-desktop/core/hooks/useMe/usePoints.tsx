import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '@airpremia/core/stores';
import { handlePointsInitDataAction } from '@airpremia/core/stores/models/me';

const usePoints = () => {
  const dispatch = useDispatch();
  const { me: meStore } = useSelector(
    (state: RootStore) => state,
  );

  const onLoadPointsStatus = () =>
    dispatch(handlePointsInitDataAction.request());

  return { meStore, onLoadPointsStatus };
};

export default usePoints;
