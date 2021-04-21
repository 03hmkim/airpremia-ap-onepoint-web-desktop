import { takeLatest, put, call } from 'redux-saga/effects';
import { get } from 'lodash';
import {
  userInfoActions,
  USER_INFO_REQUEST,
  COUPON_LIST_REQUEST,
  handleCouponListActions,
  POINTS_STATUS_REQUEST,
  handlePointsStatusAction,
  POINTS_TRANSACTIONS_REQUEST,
  handlePointsTransactionsAction,
  POINTS_INIT_DATA_REQUEST,
  USER_INFO_UPDATE_REQUEST,
  userInfoUpdateActions,
  POINTS_BUY_REQUEST,
  handlePointsBuyAction,
  POINTS_SAVE_AFTER_BOARDING_REQUEST,
  handlePointsSaveAfterBoardingAction,
  PASSWORD_UPDATE_REQUEST,
  passwordUpdateActions,
  USER_INFO_UPDATE_SUCCESS,
  byeUserLeaveActions,
  USER_LEAVE_REQUEST,
} from '../models/me';
import { loginActions } from '../models/auth';

import createAsyncSaga from '../../lib/createAsyncSaga';

import {
  getUserInformation,
  getPointsStatus,
  getPointsTransactions,
  getUserCoupons,
  putUserInformation,
  postPointsBuy,
  postPointsEarn,
  putUserPassword,
  postUserLeave,
} from '../../api/user/me';
import { initToken } from '@airpremia/core/lib/storage';
import {
  handleToastPopupShow,
  EToastPopupType,
} from '../models/ui';

/** 회원 정보 요청 */
function* userInfoAsync() {
  try {
    const res = yield call(getUserInformation);

    yield put(userInfoActions.success(res));
    yield put(loginActions.success());
  } catch (e) {
    yield initToken();
    location.replace('/');
    yield put(userInfoActions.failure(e));
  }
}

/** 회원 정보 업데이트 */
function* userInfoUpdateAsync({ payload }: any) {
  try {
    const res = yield call(putUserInformation, payload);
    // toast 추가
    alert('회원 정보가 변경되었습니다.');
    yield put(userInfoUpdateActions.success(res));
  } catch (e) {
    alert(get(e, 'response.data.message'));
    yield put(userInfoUpdateActions.failure(e));
  }
}

/** 쿠폰 리스트 조회 */
const handleCouponListAsync = () =>
  createAsyncSaga(handleCouponListActions, getUserCoupons);

/** 회원탈퇴 */
const byeUserLeaveActionsAsync = () =>
  createAsyncSaga(byeUserLeaveActions, postUserLeave);

/** 포인트 상태 정보 조회 */
const handlePointsStatusAsync = () =>
  createAsyncSaga(
    handlePointsStatusAction,
    getPointsStatus,
  );

/** 포인트 거래 내역 조회 */
const handlePointsTransactionsAsync = () =>
  createAsyncSaga(
    handlePointsTransactionsAction,
    getPointsTransactions,
  );

/** 유저 비밀번호 업데이트 */
function* handlePasswordUpdateAsync({ payload }: any) {
  // const UIStore = yield select((store) => store.ui);
  try {
    const res = yield call(putUserPassword, payload);
    yield put(
      handleToastPopupShow({
        text: '성공적으로 변경되었습니다.',
      }),
    );
    yield put(passwordUpdateActions.success(res));
  } catch (e) {
    yield put(
      handleToastPopupShow({
        text: get(e, 'response.data.message'),
        type: EToastPopupType.ERROR,
      }),
    );
    yield put(passwordUpdateActions.failure(e));
  }
}

// const handlePasswordUpdateAsync = () =>
//   createAsyncSaga(passwordUpdateActions, putUserPassword);

/** 포인트 상태 정보와 거래 내역을 한번에 조회하기 */
function* handlePointsInitDataAsync() {
  yield put(handlePointsStatusAction.request());
  yield put(handlePointsTransactionsAction.request());
}

/** 포인트 구매 */
function* handlePointBuyAsync({ payload }: any) {
  try {
    const res = yield call(postPointsBuy, payload);
    yield put(handlePointsBuyAction.success(res));
    yield put(handlePointsTransactionsAction.request());
  } catch (e) {
    alert(get(e, 'response.data.message'));
    yield put(handlePointsBuyAction.failure(e));
  }
}

/** 포인트 탑승 후 적립 */
const handlePointSaveAfterBoardingyAsync = () =>
  createAsyncSaga(
    handlePointsSaveAfterBoardingAction,
    postPointsEarn,
  );

export default function* meSaga() {
  yield takeLatest(USER_INFO_REQUEST, userInfoAsync);
  yield takeLatest(
    USER_INFO_UPDATE_REQUEST,
    userInfoUpdateAsync,
  );
  yield takeLatest(
    COUPON_LIST_REQUEST,
    handleCouponListAsync(),
  );
  yield takeLatest(
    POINTS_STATUS_REQUEST,
    handlePointsStatusAsync(),
  );
  yield takeLatest(
    POINTS_TRANSACTIONS_REQUEST,
    handlePointsTransactionsAsync(),
  );
  yield takeLatest(
    POINTS_INIT_DATA_REQUEST,
    handlePointsInitDataAsync,
  );
  yield takeLatest(POINTS_BUY_REQUEST, handlePointBuyAsync);
  yield takeLatest(
    POINTS_SAVE_AFTER_BOARDING_REQUEST,
    handlePointSaveAfterBoardingyAsync(),
  );
  yield takeLatest(
    PASSWORD_UPDATE_REQUEST,
    handlePasswordUpdateAsync,
  );
  yield takeLatest(USER_INFO_UPDATE_SUCCESS, userInfoAsync);
  yield takeLatest(USER_LEAVE_REQUEST, byeUserLeaveActionsAsync());
}
