import {
  call,
  put,
  takeLatest,
  select,
} from 'redux-saga/effects';
import {
  PRIMARY_DATA_REQUEST,
  handlePrimaryDataActions,
  FLIGHT_TICKET_SEARCH_REQUEST,
  flightTicketSearchActions,
  ADD_BOOKING_SESSION_REQUEST,
  addBookingSessionActions,
  handleBookingSessionSearchActions,
  BOOKING_SESSION_SEARCH_REQUEST,
  handleCabinClassRibbonLoadActions,
  CABIN_CLASS_RIBBON_DATA_REQUEST,
  IRibbonData,
  FLIGHT_CALENDAR_LIST_REQUEST,
  handleFlightCalendarListLoadActions,
  BOOKING_CANCELABLE_PASSENGER_REQUEST,
  handleBookingCancelablePassengerActions,
  BOOING_CANCEL_PASSENGERS_REQUEST,
  handleBookingCancelPassengersActions,
  EFlightType,
  handleBookingCancelCommitPassengersActions,
  BOOING_CANCEL_COMMIT_PASSENGERS_REQUEST,
  handleBookingChangeRemoveJourneyActions,//smartport.jsh 일정변경 - 여정 취소 추가
  BOOING_CHANGE_REMOVE_JOURNEYS_REQUEST,//smartport.jsh 일정변경 - 여정 취소 추가
  handleBookingSearchChangeFlight,
  SEARCH_CHANGE_FLIGHT_REQUEST,
  CHECK_PROMOTION_VAILDATION_REQUEST,
  checkPromotionCodeValidationActions,
  addVoucherPaymentActions,
  ADD_VOUCHER_PAYMENT_REQUEST,
  DELETE_VOUCHER_PAYMENT_REQUEST,
  deleteVoucherPaymentActions,
  RESET_BOOKING_SESSION_REQUEST,
  resetBookingSessionActions,
  SEND_EMAIL_REQUEST,//이메일전송액션 추가
  sendEmailActions,  //이메일전송액션 추가
  FLIGHT_DEP_ARR_SEARCH_REQUEST,
  flightDepArrSearchLoad,
} from '../models/bookingSession';
import { anonymousTokenActions } from '../models/auth';
import createAsyncSaga from '../../lib/createAsyncSaga';
import { getBookingResourcesPrimary } from '@airpremia/core/api/booking/resources';
import {
  getBookingSession,
  postBookingSession,
  getCancelablePassenger,
  postBookingCancelPrepare,
  postBookingCancelCommit,
  postSendEmail,
  postBookingRemoveJourney,//smartport.jsh 일정변경 - 여정 취소 추가
  getBookingSearchChangeFlight,
  postPromotionCodeValidate,
  postAddVoucherPayment,
  deleteVoucherPayment,
  postBookingSessionReset,
} from '@airpremia/core/api/booking/session';
import {
  postBookingFlightsSearch,
  postBookingFlightsLowfareRibbon,
  postBookingFlightsLowfareCalendar,
} from '@airpremia/core/api/booking/flights';
import { getFlightCalendarData } from '@airpremia/core/lib/booking';
import moment from 'moment';
import { initToken } from '@airpremia/core/lib/storage';
import { handleLoadingHide } from '../models/ui';
import { getFlightSearch } from '@airpremia/core/api/booking/flights';

function* primaryDateAsync() {
  try {
    const res = yield call(getBookingResourcesPrimary);
    yield put(handlePrimaryDataActions.success(res));
  } catch (e) {
    alert(e.response.data.message);
    yield put(handlePrimaryDataActions.failure(e));
    yield initToken();
    yield put(anonymousTokenActions.request());
    window.location.replace('/');
  }
}

const getFlightArrDepAsync = () =>
console.log("사가들어옴2");
createAsyncSaga(
  flightDepArrSearchLoad,
  getFlightSearch,
);

const flightTicketSearchAsync = () =>
  createAsyncSaga(
    flightTicketSearchActions,
    postBookingFlightsSearch,
  );

const onLoadCancelablePassengerAsync = () =>
  createAsyncSaga(
    handleBookingCancelablePassengerActions,
    getCancelablePassenger,
  );

const onSubmitBookingCancelPassengersAsync = () =>
  createAsyncSaga(
    handleBookingCancelPassengersActions,
    postBookingCancelPrepare,
  );

const onCommitBookingCancelPassengerAsync = () =>
  createAsyncSaga(
    handleBookingCancelCommitPassengersActions,
    postBookingCancelCommit,
  );

const onSubmiEmail = () =>
  createAsyncSaga(
    sendEmailActions,
    postSendEmail,
  );

//smartport.jsh 일정변경 - 여정 취소 추가
const onSubmitBookingChangeJourneyAsync = () =>
  createAsyncSaga(
    handleBookingChangeRemoveJourneyActions,
    postBookingRemoveJourney,
  );

const onSearchChangeFlightAsync = () =>
  createAsyncSaga(
    handleBookingSearchChangeFlight,
    getBookingSearchChangeFlight,
  );

function* addBookingSessionAsync({ payload }: any) {
  try {
    const res = yield call(postBookingSession, payload);

    yield put(addBookingSessionActions.success(res));
  } catch (e) {
    alert(e.response.data.message);
    window.location.replace('/');
    yield put(addBookingSessionActions.failure(e));
  }
}

const bookingSessionSearchAsync = () =>
  createAsyncSaga(
    handleBookingSessionSearchActions,
    getBookingSession,
  );

function* onLoadFlightCalendarDataAsync({ payload }: any) {
  try {
    const res = yield call(
      postBookingFlightsLowfareCalendar,
      payload,
    );

    const {
      data: { journeys },
    } = res;

    const flightCalendarData = getFlightCalendarData(
      journeys,
    );
    console.log('??', journeys, flightCalendarData)


    yield put(
      handleFlightCalendarListLoadActions.success(
        flightCalendarData,
      ),
    );
  } catch (e) {
    yield put(
      handleFlightCalendarListLoadActions.failure(e),
    );
  }
}

function* onLoadRibbonDataAsync({ payload }: any) {
  try {
    const bookingSessionStore = yield select(
      (store) => store.bookingSession,
    );
    const { pivotDate, updatedIdx } = payload;
    const {
      date,
      itinerary,
      itineraryType,
      currencyCode,
    } = bookingSessionStore;

    let _ribbonData: IRibbonData = { begin: [], end: [] };
    const paramsPiece = {
      beginDate: pivotDate
        ? moment(pivotDate).format('YYYY-MM-DD')
        : moment(date[0]).format('YYYY-MM-DD'),
      origin: itinerary.origin,
      destination: itinerary.destination,
      currencyCode,
    };

    if (pivotDate) {
      const {
        data: { journeys },
      } = yield call(postBookingFlightsLowfareRibbon, {
        ...paramsPiece,
      });
      const target = updatedIdx === 0 ? 'begin' : 'end';
      _ribbonData = {
        ..._ribbonData,
        [target]: journeys[0].lowfares,
      };
    } else {
      const {
        data: { journeys },
      } = yield call(postBookingFlightsLowfareRibbon, {
        ...paramsPiece,
        endDate:
          date[1] && moment(date[1]).format('YYYY-MM-DD'),
      });
      if (itineraryType === EFlightType.OW) {
        _ribbonData.begin = journeys[0].lowfares;
      } else {
        _ribbonData.begin = journeys[0].lowfares;
        _ribbonData.end = journeys[1].lowfares;
      }
    }

    yield put(
      handleCabinClassRibbonLoadActions.success(
        _ribbonData,
      ),
    );
  } catch (e) {
    alert(e.response.data.message);
    yield put(handleCabinClassRibbonLoadActions.failure(e));
  }
}

//smartport.mhh 프로모션 코드 추가
const checkPromotionCodeValidtionAsync = () =>
  createAsyncSaga(
    checkPromotionCodeValidationActions,
    postPromotionCodeValidate,
  );

//smartport.mhh 바우처 추가
function* addVoucherPaymentAsync({ payload }: any) {
  try {
    const res = yield call(postAddVoucherPayment, payload);

    yield put(addVoucherPaymentActions.success(res));
    
    //bookingSessionSearchAsync(); //바우처 추가 후 bookingSession 재조회
    try {
      const res2 = yield call(getBookingSession);
      yield put(
        handleBookingSessionSearchActions.success(res2),
      );
    } catch (e) {
      yield put(
        handleBookingSessionSearchActions.failure(e),
      );
    }
    
  } catch (e) {
    yield put(addVoucherPaymentActions.failure(e));
    throw e;
  }
}

function* deleteVoucherPaymentAsync({ payload }: any) {
  try {
    const res = yield call(deleteVoucherPayment, payload);

    yield put(deleteVoucherPaymentActions.success(res));
    //bookingSessionSearchAsync(); //바우처 삭제 후 bookingSession 재조회
    try {
      const res2 = yield call(getBookingSession);
      yield put(
        handleBookingSessionSearchActions.success(res2),
      );
    } catch (e) {
      yield put(
        handleBookingSessionSearchActions.failure(e),
      );
      throw e;
    }
  } catch (e) {
    yield put(deleteVoucherPaymentActions.failure(e));
    throw e;
  } finally {
    yield put(handleLoadingHide());
  }
}

function* resetBookingSessionAsync() {
  try {
    const res = yield call(postBookingSessionReset);
    yield put(resetBookingSessionActions.success(res));
  } catch (e) {
    throw e;
  }
}

export default function* ticketSaga() {
  yield takeLatest(PRIMARY_DATA_REQUEST, primaryDateAsync);
  yield takeLatest(
    FLIGHT_TICKET_SEARCH_REQUEST,
    flightTicketSearchAsync(),
  );
  yield takeLatest(
    ADD_BOOKING_SESSION_REQUEST,
    addBookingSessionAsync,
  );
  yield takeLatest(
    SEND_EMAIL_REQUEST,
    onSubmiEmail(),
  );
  yield takeLatest(
    BOOKING_SESSION_SEARCH_REQUEST,
    bookingSessionSearchAsync(),
  );
  yield takeLatest(
    CABIN_CLASS_RIBBON_DATA_REQUEST,
    onLoadRibbonDataAsync,
  );
  yield takeLatest(
    FLIGHT_CALENDAR_LIST_REQUEST,
    onLoadFlightCalendarDataAsync,
  );
  yield takeLatest(
    BOOKING_CANCELABLE_PASSENGER_REQUEST,
    onLoadCancelablePassengerAsync(),
  );
  yield takeLatest(
    BOOING_CANCEL_PASSENGERS_REQUEST,
    onSubmitBookingCancelPassengersAsync(),
  );
  yield takeLatest(
    BOOING_CANCEL_COMMIT_PASSENGERS_REQUEST,
    onCommitBookingCancelPassengerAsync(),
  );
  //smartport.jsh 일정변경 - 여정 취소 추가
  yield takeLatest(
    BOOING_CHANGE_REMOVE_JOURNEYS_REQUEST,
    onSubmitBookingChangeJourneyAsync(),
  );
  yield takeLatest(
    SEARCH_CHANGE_FLIGHT_REQUEST,
    onSearchChangeFlightAsync(),
  );
  yield takeLatest(
    CHECK_PROMOTION_VAILDATION_REQUEST,
    checkPromotionCodeValidtionAsync(),
  );
  
  //smartport.mhh 바우처 추가
  yield takeLatest(
    ADD_VOUCHER_PAYMENT_REQUEST,
    addVoucherPaymentAsync,
  );
  yield takeLatest(
    DELETE_VOUCHER_PAYMENT_REQUEST,
    deleteVoucherPaymentAsync,
  );
  //bookingSession reset
  yield takeLatest(
    RESET_BOOKING_SESSION_REQUEST,
    resetBookingSessionAsync,
  );
  yield takeLatest(
    FLIGHT_DEP_ARR_SEARCH_REQUEST,
    getFlightArrDepAsync,
  );
}
