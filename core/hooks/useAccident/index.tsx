import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../../stores';
import {
  accidentOpenStatusActions,
  accidentListActions,
  accidentContentListActions,
  accidentDetailDataActions,
  accidentPostDetailActions,
} from '../../stores/models/accident';

const useAccident = (): any => {
  const accidentStore = useSelector(
    (state: RootStore) => state.accident,
  );
  const dispatch = useDispatch();

  /** 다크사이트 open 상태 체크 */
  const onLoadAccidentOpenStatus = useCallback(() => {
    dispatch(accidentOpenStatusActions.request());
  }, [dispatch]);

  /** 사고 전체 리스트 받아오기 */
  const onAccidentLoad = useCallback(
    () => dispatch(accidentListActions.request()),
    [dispatch],
  );

  /** news, notice, 사고 상세 받아오기 */
  const onAccidentContentLoad = useCallback(
    (accidentId: string) => {
      const params = {
        accidentId,
        page: 0,
        size: 8,
      };
      dispatch(accidentContentListActions.request(params));
    },
    [dispatch],
  );

  /** 사고 상세 조회 */
  const onLoadAccidentDetail = useCallback(
    (accidentId: string) => {
      dispatch(
        accidentDetailDataActions.request({ accidentId }),
      );
    },
    [dispatch],
  );

  /** 사고 포스트 상세 조회 */
  const onLoadAccidentPostDetail = useCallback(
    (postId: string) => {
      dispatch(
        accidentPostDetailActions.request({
          postId,
          hasPrevNext: true,
        }),
      );
    },
    [dispatch],
  );

  const onChangeRoutePostPage = useCallback(
    (e: any, router = { push: () => {} }) => {
      const {
        postId: id,
        postType: _type,
      } = e.target.dataset;
      const originUrl = '/';
      // @TODO: useUrl 변경해서 하기
      // const originUrl = url
      //   .split('/')
      //   .slice(0, -1)
      //   .join('/');
      const type = _type.toLowerCase();

      router.push(`${originUrl}/${type}?postId=${id}`);
    },
    [],
  );

  return {
    accidentStore,
    onLoadAccidentOpenStatus,
    onAccidentLoad,
    onAccidentContentLoad,
    onChangeRoutePostPage,
    onLoadAccidentDetail,
    onLoadAccidentPostDetail,
  };
};

export default useAccident;
