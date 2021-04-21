import {
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  COUNTRY_CODE_REQUEST,
  PHONE_AUTH_REQUEST,
  ANONYMOUS_TOKEN_REQUEST,
  loginActions,
  signupActions,
  countryCodeActions,
  handleDiscountCodeActions,
  phoneAuthActions,
  anonymousTokenActions,
} from '../models/auth';
import { userInfoActions } from '../models/me';
import {
  handleLoadingShow,
  handleLoadingHide,
} from '../models/ui';
import { ICountryCodeDetailResp } from '../../api/auth/types';
import { getSortedCountryCode } from '../../lib/service';
import { getNeedChangePasswordStatus } from '../../lib/auth';
import { setToken } from '../../lib/storage';
import createAsyncSaga from '../../lib/createAsyncSaga';
import {
  postUserConfirmPhoneAuthCode,
  postUserJoin,
} from '@airpremia/core/api/user/user';
import { getUserCountryNumbers } from '@airpremia/core/api/user/resource';
import { getBookingResourcesDiscount } from '@airpremia/core/api/booking/resources';

import {
  postUserTokenAnonymous,
  postUserTokenMember,
} from '@airpremia/core/api/user/token';
import { DISCOUNT_CODE_REQUEST } from '../models/booking';

const phoneAuthAsync = () =>
  createAsyncSaga(
    phoneAuthActions,
    postUserConfirmPhoneAuthCode,
  );

function* signupSubmitAsync({ payload }: any) {
  try {
    yield call(postUserJoin, payload);
    yield put(signupActions.success());
  } catch (e) {
    alert(e?.response?.data?.message);
    yield put(userInfoActions.failure(e));
  }
}

function* handleAnonymousTokenAsync() {
  try {
    const { data: loginData } = yield call(
      postUserTokenAnonymous,
    );

    yield setToken(loginData.accessToken);

    yield put(anonymousTokenActions.success());
  } catch (e) {
    alert(e?.response.data.message);
    // yield put(anonymouseTokenActions.failure(e));
  }
}

function* handleLoginAsync({ payload }: any) {
  try {
    yield put(handleLoadingShow());

    const { data, isLoginStay, router } = payload;
    const { data: loginData } = yield call(
      postUserTokenMember,
      data,
    );

    const { status, pwUpdatedAt } = loginData?.user;
    const isDormant = status !== 'ALIVE'; // 휴면계정인 경우의 상태값을 확인필요
    const needChangePassword = getNeedChangePasswordStatus(
      pwUpdatedAt,
    );

    yield setToken(
      loginData.accessToken,
      data.email,
      isLoginStay,
    );

    if (isDormant) {
      return router.push('/auth/dormant');
    } else if (needChangePassword) {
      /* @TODO: authSaga의 changePassword -> change-password로 변경 필요 */
      return router.push('/auth/changePassword');
    } else {
      yield put(userInfoActions.request());
      yield put(loginActions.success());
      if (router) {
        setTimeout(() => router.push('/'), 0);
      }
    }
  } catch (e) {
    alert(e.response.data.message);
    yield put(handleLoadingHide());
    yield put(loginActions.failure(e));
  }
}

function* handleAutoLoginAsync() {
  try {
    const authStore = yield select((store) => store.auth);
    const { email, password } = authStore;
    const payload = {
      data: {
        email: email.value,
        password: password.value,
        type: 'MEMBER',
      },
      isLoginStay: false,
    };

    yield put(loginActions.request(payload));
  } catch (e) {
    yield put(loginActions.failure(e));
  }
}

function* handleCountryCodeAsync() {
  try {
    const {
      data: { countryNumbers, suggestions },
    } = yield call(getUserCountryNumbers);

    const commonStore = yield select(
      (state) => state.common,
    );
    const { code } = commonStore.language;

    const countryCodeData = getSortedCountryCode<
      ICountryCodeDetailResp,
      'description'
    >(countryNumbers, code, 'description');

    const sortedCountryCodeData = {
      suggestions,
      ...countryCodeData,
    };

    const ko = countryNumbers.find(
      (item: any) => item.countryNumber === 82,
    );
    const countryCode = ko ? ko : countryNumbers[0];

    yield put(
      countryCodeActions.success({
        countryCode,
        countryCodeList: countryNumbers,
        sortedCountryCodeData,
      }),
    );
  } catch (e) {
    yield put(countryCodeActions.failure(e));
  }
}

function* hadnleDiscountCodeAsync() {
  try{
    const res = yield call(getBookingResourcesDiscount)
    const discountCodeList = res.data.discountCodes;
    yield put(handleDiscountCodeActions.success(discountCodeList));
  } catch (e) {
    yield put(handleDiscountCodeActions.failure(e));
  }
}
export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, handleLoginAsync);
  yield takeLatest(
    ANONYMOUS_TOKEN_REQUEST,
    handleAnonymousTokenAsync,
  );
  yield takeLatest(SIGNUP_REQUEST, signupSubmitAsync);
  yield takeLatest(SIGNUP_SUCCESS, handleAutoLoginAsync);
  yield takeLatest(PHONE_AUTH_REQUEST, phoneAuthAsync());

  yield takeLatest(
    COUNTRY_CODE_REQUEST,
    handleCountryCodeAsync,
  );
  yield takeLatest(
    DISCOUNT_CODE_REQUEST,
    hadnleDiscountCodeAsync
  )
}
