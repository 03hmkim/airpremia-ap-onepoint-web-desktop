import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FIND_TRIP_REQUEST,
  handleTripFind,
  BOARDING_PASS_REQUEST,
  handleBoardingPassLoad,
  COUNTRY_CODE_REQUEST,
  handleCountryCodeLoad,
  DISCOUNT_CODE_REQUEST,
  handleDiscountCodeLoad,
  MY_RESERVATION_REQUEST,
  handleMyReservationLoad,
  FIND_MY_AVAILABLE_CHECKIN_REQUEST,
  handleMyAvailableCheckinLoad,
  CHECKIN_STATUS_REQUEST,
  handleCheckinStatusLoad,
  TRAVEL_DOCUMENT_APPLY_REQUEST,
  handleTravelDocumentApply,
  ICountryCodeRespCounty,
  POST_CHECKIN_REQUEST,
  handlePostCheckinLoad,
  CHECKIN_PASSENGER_INFO_REQUEST,
  handleCheckinPassengerInfoLookup,
  handleBookingSessionCommitWithApgPaymentActions,
  POST_COMMIT_WITH_PAYMENT_REQUEST,
  handleBookingChangeDivideActions, //일정변경 예약분리 jsh 추가
  BOOING_CHANGE_DIVIDE_REQUEST, //일정변경 예약분리 jsh 추가
  POST_SMS_REQUEST,
  handlePostPassSms
} from '../models/booking';
import createAsyncSaga from '../../lib/createAsyncSaga';
import { getSortedCountryCode } from '../../lib/service';
import { countryCodeActions } from '../models/auth';
import { CommonResp } from '../../api/config';
import {
  getCheckins,
  getCheckinNonMembers,
  getCheckinStatus,
  postCheckinTravelDocuments,
  postCheckin,
  postSms,
} from '../../api/booking/checkin';
import {
  getBooking,
  getBookingBoardingPass,
  postBookingChangeDivide,//smartport.jsh 일정변경 - 예약분리 추가
  getBookings,
} from '@airpremia/core/api/booking/booking';
import { getBookingResourcesCountry, getBookingResourcesDiscount } from '@airpremia/core/api/booking/resources';
import { initialDiscountCode } from '../models/booking/reducer';
import { postBookingSessionCommitWithApgPayment } from '@airpremia/core/api/booking/session';
const findTripAsync = () =>
  createAsyncSaga(handleTripFind, getBooking);

const getBoardingPassAsync = () =>
  createAsyncSaga(
    handleBoardingPassLoad,
    getBookingBoardingPass,
  );

const findMyReservationAsync = () =>
  createAsyncSaga(handleMyReservationLoad, getBookings);

const findMyAvailableCheckinAsync = () =>
  createAsyncSaga(
    handleMyAvailableCheckinLoad,
    getCheckins,
  );

const fetchCheckinStatusAsync = () =>
  createAsyncSaga(
    handleCheckinStatusLoad,
    getCheckinStatus,
  );

const applyTravelDocumentAsync = () =>
  createAsyncSaga(
    handleTravelDocumentApply,
    postCheckinTravelDocuments,
  );

const postCheckinAsync = () =>
  createAsyncSaga(
    handlePostCheckinLoad,
    postCheckin,
  );

const findNonMembersCheckinAsync = () =>
  createAsyncSaga(
    handleCheckinPassengerInfoLookup,
    getCheckinNonMembers,
  );

const onSubmitBookingChangeDivideAsync = () =>
  createAsyncSaga(
    handleBookingChangeDivideActions,
    postBookingChangeDivide,
  );

const postSmsAsync = () =>
  createAsyncSaga(
    handlePostPassSms,
    postSms,
  );

function* getCountryCodeAsync() {
  try {
    const {
      data: { counties, suggestions },
    }: CommonResp = yield call(getBookingResourcesCountry);
    // @TODO:  // 서버에서 한글로 내려주면 수정해야함서버에서 한글로 내려주면 수정해야함
    // const commonStore = yield select(
    //   (state) => state.common,
    // );
    // const { code } = commonStore.language;
    const countryCodeData = getSortedCountryCode<
      ICountryCodeRespCounty,
      'countryText'
    >(counties, 'en', 'countryText');

    const sortedCountryCodeData = {
      suggestions,
      ...countryCodeData,
    };
    const ko = counties.find(
      (item: any) => item.countryCode === 'KR',
    );
    const countryCode = ko ? ko : counties[0];

    yield put(
      handleCountryCodeLoad.success({
        countryCode,
        countryCodeList: counties,
        sortedCountryCodeData,
      }),
    );
  } catch (e) {
    yield put(countryCodeActions.failure(e));
  }
}

function* getDiscountCodeAsync() {
  try{
    const res = yield call(getBookingResourcesDiscount)
    const discountCodeList = res.data.discountCodes;
    yield put(handleDiscountCodeLoad.success({
      discountCode: initialDiscountCode,
      discountCodeList: discountCodeList
    })
    );
  } catch (e) {
    yield put(handleDiscountCodeLoad.failure(e));
  }
}


//smartport.mhh CommitWithApgPayment async
function* postCommitWithApgPayment({ payload }: any) {
  try {
    const res = yield call(postBookingSessionCommitWithApgPayment,payload);
    yield put(handleBookingSessionCommitWithApgPaymentActions.success(res));
  } catch (e) {
    yield put(handleBookingSessionCommitWithApgPaymentActions.failure(e));
    throw e;
  }
}

export default function* authSaga() {
  yield takeLatest(FIND_TRIP_REQUEST, findTripAsync());
  yield takeLatest(
    BOARDING_PASS_REQUEST,
    getBoardingPassAsync(),
  );
  yield takeLatest(
    COUNTRY_CODE_REQUEST,
    getCountryCodeAsync,
  );
  yield takeLatest(
    DISCOUNT_CODE_REQUEST,
    getDiscountCodeAsync,
  )
  yield takeLatest(
    MY_RESERVATION_REQUEST,
    findMyReservationAsync(),
  );
  yield takeLatest(
    FIND_MY_AVAILABLE_CHECKIN_REQUEST,
    findMyAvailableCheckinAsync(),
  );
  yield takeLatest(
    CHECKIN_STATUS_REQUEST,
    fetchCheckinStatusAsync(),
  );
  yield takeLatest(
    TRAVEL_DOCUMENT_APPLY_REQUEST,
    applyTravelDocumentAsync(),
  );
  yield takeLatest(
    POST_CHECKIN_REQUEST,
    postCheckinAsync(),
  );
  yield takeLatest(
    CHECKIN_PASSENGER_INFO_REQUEST,
    findNonMembersCheckinAsync(),
  );
  yield takeLatest(
    POST_SMS_REQUEST,
    postSmsAsync(),
  );
  //smartport.mhh CommitWithApgPayment async
  yield takeLatest(
    POST_COMMIT_WITH_PAYMENT_REQUEST,
    postCommitWithApgPayment,
  );
  //smartport.jsh 일정변경 -예약분리 추가
  yield takeLatest(
    BOOING_CHANGE_DIVIDE_REQUEST,
    onSubmitBookingChangeDivideAsync(),
  );
}
