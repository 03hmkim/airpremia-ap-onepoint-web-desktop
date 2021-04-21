import { flow, map, head, last, get } from 'lodash/fp';
import { zip } from 'lodash';
import {
  takeLatest,
  select,
  call,
  put,
  all,
} from 'redux-saga/effects';
import createAsyncSaga from '../../lib/createAsyncSaga';
import {
  handleAvailableSsrsSearchActions,
  AVAILABLE_SSRS_SEARCH_REQUEST,
  SSRS_HISTORY_REQUEST,
  handleSsrsHistoryActions,
  SSR_PAGE_REQUEST,
  ISsrTrip,
  handleSsrSeatMapActions,
  SSR_UPDATE_REQUEST,
  handleSsrsSeatPriceActions,
  handleSsrsSeatHistoryActions,
  SSR_CHECKIN_SEAT_REQUEST,
  handleSsrCheckinUpdateActions,
  SSR_CHECKIN_UPDATE_REQUEST,
} from '../models/ssr';
import {
  handleLoadingShow,
  handleLoadingHide,
} from '../models/ui';
import {
  deleteBookingSessionSeats,
  getBookingSessionAvailableSeats,
  getBookingSessionAvailableSsrs,
  getBookingSessionSeats,
  getBookingSessionSsrs,
  postBookingSessionSeats,
} from '@airpremia/core/api/booking/session';
import {
  getSsrPrices,
  getSsrPassengers,
  getSsrProductLabels,
  getSsrHistories,
  getSsrTrip,
  getSsrCabinClass,
  getSsrSeatMapResources,
  getDestructedSeats,
  mapUpdateSeatRequest,
  mapSsrSeatPrices,
  getSsrSeatHistory,
} from '@airpremia/core/lib/ssr';
import { getBookingResourcesSeatMap } from '@airpremia/core/api/booking/resources';

function* ssrHistoryAsync() {
  yield put(handleLoadingShow());
  const ssrStore = yield select((state) => state.ssr);
  try {
    const res = yield call(getBookingSessionSsrs);
    const passengers = getSsrPassengers(res);
    const productLabels = ssrStore.productLabels;
    const prices = ssrStore.prices;
    const cabinClasses = getSsrCabinClass(res);
    // 좌석 선택 후 좌석 재선택 시 좌석배치도 표시 안되는 문제 수정
    // 2021.02.11 smartport JYN
    const histories = getSsrHistories({
      res,
      productLabels,
      passengers,
      prices,
      cabinClasses, // 2021.02.11 smartport JYN
    });
    yield put(
      handleSsrsHistoryActions.success({
        ...res,
        passengers,
        cabinClasses, // 2021.02.11 smartport JYN
        histories,
      }),
    );
  } catch (e) {
    yield put(handleSsrsHistoryActions.failure(e));
  } finally {
    yield put(handleLoadingHide());
  }
}

const availableSsrAsync = () =>
  createAsyncSaga(
    handleAvailableSsrsSearchActions,
    getBookingSessionAvailableSsrs,
  );

function* ssrSeatHistoryAsync() {
  const ssrStore = yield select((state) => state.ssr);
  const {
    seat: { prices },
    seatMap,
    passengers,
  } = ssrStore;
  try {
    const res = yield call(getBookingSessionSeats);
    const ssrHistory = getSsrSeatHistory({
      ...res,
      prices,
      seatMap,
      passengers,
    });
    yield put(
      handleSsrsSeatHistoryActions.success(ssrHistory),
    );
  } catch (e) {
    console.error('e', e);
  }
}

function* ssrSeatMapAsync() {
  const ssrStore = yield select((state) => state.ssr);
  const { journeys } = ssrStore;
  try {
    const res = yield all(
      journeys.map((trip: ISsrTrip) =>
        call(getBookingResourcesSeatMap, {
          journeyKey: trip.id,
        }),
      ),
    );

    const seatMapRaw = flow(
      map((item: any) => {
        return {
          tripId: flow(head, get('id'))(item),
          seatMap: flow(last, get('seatMap'))(item),
        };
      }),
    )(zip(journeys, res));
    const seatMap = getSsrSeatMapResources(seatMapRaw);

    yield put(
      handleSsrSeatMapActions.success({
        seatMap,
      }),
    );
  } catch (e) {
    yield put(handleSsrSeatMapActions.failure(e));
  } finally {
    yield ssrSeatHistoryAsync();
  }
}

const ssrChenckinSeatUpdateAsync = () =>
  createAsyncSaga(
    handleSsrCheckinUpdateActions,
    postBookingSessionSeats,
  );

function* ssrCheckinSeatMapAsync() {
  const bookingStore = yield select((state) => state.booking);
  const {
    journeys
  } = bookingStore;
  
  try {

    const res = yield all(
      journeys.map((trip: any) =>
        call(getBookingResourcesSeatMap, {
          journeyKey: trip.id,
        }),
      ),
    );

    const seatMapRaw = flow(
      map((item: any) => {
        return {
          tripId: flow(head, get('id'))(item),
          seatMap: flow(last, get('seatMap'))(item),
        };
      }),
    )(zip(journeys, res));
    const seatMap = getSsrSeatMapResources(seatMapRaw);

    yield put(
      handleSsrSeatMapActions.success({
        seatMap,
      }),
    );
  } catch (e) {
    yield put(handleSsrSeatMapActions.failure(e));
  }
}

function* ssrSeatPricesAsync() {
  try {
    const res = yield call(getBookingSessionAvailableSeats);
    const mapped = mapSsrSeatPrices(res);
    yield put(handleSsrsSeatPriceActions.success(mapped));
  } catch (e) {
    yield put(handleSsrsSeatPriceActions.failure(e));
  }
}

function* ssrPageAsync() {
  let res,
    prices,
    productLabels,
    passengers,
    histories,
    journeys,
    cabinClasses;
  const bookingSessionStore = yield select(
    (state) => state.bookingSession,
  );
  const { currencyCode } = bookingSessionStore;

  yield put(handleLoadingShow());

  // 신청 가능한 SSR 조회
  try {
    res = yield call(getBookingSessionAvailableSsrs, {
      currencyCode,
    });
    prices = getSsrPrices(res);
    productLabels = getSsrProductLabels(res);
    journeys = getSsrTrip(res.data.journeySsrs);
    const segments = getSsrTrip(res.data.segmentSsrs);
    const legs = getSsrTrip(res.data.legSsrs);

    yield put(
      handleAvailableSsrsSearchActions.success({
        ...res,
        prices,
        productLabels,
        journeys,
        segments,
        legs,
      }),
    );
  } catch (e) {
    yield put(handleAvailableSsrsSearchActions.failure(e));
  }

  // SSR 내역 조회
  try {
    res = yield call(getBookingSessionSsrs);
    passengers = getSsrPassengers(res);
    histories = getSsrHistories({
      res,
      productLabels,
      passengers,
      prices,
    });
    cabinClasses = getSsrCabinClass(res);

    yield put(
      handleSsrsHistoryActions.success({
        ...res,
        passengers,
        histories,
        cabinClasses,
      }),
    );
  } catch (e) {
    yield put(handleSsrsHistoryActions.failure(e));
  }
  
  // 전체 좌석 조회
  yield ssrSeatMapAsync();

  // 금액 조회
  yield ssrSeatPricesAsync();

  // 좌석 내역 조회
  yield ssrSeatHistoryAsync();

  yield put(handleLoadingHide());
}

function* ssrBaggageUpdateAsync() {}

/** 좌석 업데이트 */
function* ssrSeatUpdateAsync() {
  const ssrStore = yield select((state) => state.ssr);
  try {
    const {
      add: addSeats = [],
      delete: deleteSeats = [],
    } = getDestructedSeats({
      session: ssrStore.occupiedSeatsSession,
      store: ssrStore.occupiedSeats,
    });

    if (deleteSeats.length) {
      yield call(
        deleteBookingSessionSeats,
        mapUpdateSeatRequest(deleteSeats),
      );
    }

    if (addSeats.length) {
      yield call(
        postBookingSessionSeats,
        mapUpdateSeatRequest(addSeats),
      );
    }
  } catch (e) {
    console.error('ssrSeatUpdateAsync', e);
  }
}

function* ssrCheckinSeatAsync() {
  yield put(handleLoadingShow());

  // 전체 좌석 조회
  yield ssrCheckinSeatMapAsync();

  // 금액 조회
  yield ssrSeatPricesAsync();

  yield put(handleLoadingHide());
}

function* ssrUpdateAsync() {
  yield put(handleLoadingShow());
  yield ssrBaggageUpdateAsync();
  yield ssrSeatUpdateAsync();
  yield ssrHistoryAsync();
  yield ssrSeatHistoryAsync();
  yield put(handleLoadingHide());
}

export default function* ssrSaga() {
  yield takeLatest(SSRS_HISTORY_REQUEST, ssrHistoryAsync);

  yield takeLatest(
    AVAILABLE_SSRS_SEARCH_REQUEST,
    availableSsrAsync(),
  );

  yield takeLatest(SSR_PAGE_REQUEST, ssrPageAsync);

  yield takeLatest(SSR_UPDATE_REQUEST, ssrUpdateAsync);

  yield takeLatest(SSR_CHECKIN_UPDATE_REQUEST, ssrChenckinSeatUpdateAsync());

  yield takeLatest(SSR_CHECKIN_SEAT_REQUEST, ssrCheckinSeatAsync);
}
