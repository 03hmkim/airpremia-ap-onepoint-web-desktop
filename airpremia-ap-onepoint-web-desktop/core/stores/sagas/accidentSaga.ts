import {
  takeLatest,
  all,
  call,
  put,
} from 'redux-saga/effects';
import {
  accidentListActions,
  ACCIDENT_LIST_REQUEST,
  accidentContentListActions,
  ACCIDENT_CONTENTS_LIST_REQUEST,
  accidentDetailDataActions,
  ACCIDENT_DETAIL_REQUEST,
  accidentPostDetailActions,
  ACCIDENT_POST_DETAIL_REQUEST,
  accidentOpenStatusActions,
  ACCIDENT_OPEN_STATUS_REQUEST,
} from '../models/accident';
import createAsyncSaga from '../../lib/createAsyncSaga';
import { EPostType } from '@airpremia/core/api/info/types';
import {
  getInfoAccidentDetail,
  getInfoAccidentList,
  getInfoAccidentsList,
  getInfoAccidentsPostDetail,
  getInfoAccidentsStatus,
} from '../../api/info/accidents';

/** 다크사이트 오픈 상태 여부 조회 */
const handleAccidentOpenStatusAsync = () =>
  createAsyncSaga(
    accidentOpenStatusActions,
    getInfoAccidentsStatus,
  );

/** 사고 리스트 조회 */
const handleAccidentListLoadAsync = () =>
  createAsyncSaga(
    accidentListActions,
    getInfoAccidentsList,
  );

/** 사고 상세 조회 */
const handleInfoAccidentDetailAsync = () =>
  createAsyncSaga(
    accidentDetailDataActions,
    getInfoAccidentDetail,
  );

/** 사고 Post 상세 조회 */
const handleInfoAccidentPostDetailAsync = () =>
  createAsyncSaga(
    accidentPostDetailActions,
    getInfoAccidentsPostDetail,
  );

function* handleAccidentContentListLoad({ payload }: any) {
  try {
    const { news, notice } = yield all({
      news: call(getInfoAccidentList, {
        ...payload,
        postType: EPostType.NEWS,
      }),
      notice: call(getInfoAccidentList, {
        ...payload,
        postType: EPostType.NOTICE,
      }),
    });

    yield put(
      accidentContentListActions.success({
        news,
        notice,
      }),
    );
  } catch (e) {
    yield put(accidentContentListActions.failure(e));
  }
}

export default function* accidentSaga() {
  yield takeLatest(
    ACCIDENT_OPEN_STATUS_REQUEST,
    handleAccidentOpenStatusAsync(),
  );
  yield takeLatest(
    ACCIDENT_LIST_REQUEST,
    handleAccidentListLoadAsync(),
  );
  yield takeLatest(
    ACCIDENT_CONTENTS_LIST_REQUEST,
    handleAccidentContentListLoad,
  );
  yield takeLatest(
    ACCIDENT_DETAIL_REQUEST,
    handleInfoAccidentDetailAsync(),
  );
  yield takeLatest(
    ACCIDENT_POST_DETAIL_REQUEST,
    handleInfoAccidentPostDetailAsync(),
  );
}
