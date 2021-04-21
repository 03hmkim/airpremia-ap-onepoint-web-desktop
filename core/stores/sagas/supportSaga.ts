import { call, put, takeLatest } from 'redux-saga/effects';
import {
  handleSupportEventDetailActions,
  handleSupportEventListActions,
  SUPPORT_EVENT_DETAIL_REQUEST,
  SUPPORT_EVENT_LIST_REQUEST,
} from '@airpremia/core/stores/models/support';
import {
  getUserEvents,
  getUserEvent,
} from '@airpremia/core/api/user/events';
import {
  getEvent,
  getEvents,
} from '@airpremia/core/lib/support';

function* eventListAsync({ payload }: any) {
  try {
    const { data } = yield call(getUserEvents, payload);
    const list = getEvents(data);

    yield put(
      handleSupportEventListActions.success({
        list,
        category: payload.category,
      }),
    );
  } catch (e) {
    yield put(handleSupportEventListActions.failure(e));
  }
}

function* eventDetailAsync({ payload }: any) {
  try {
    const { data } = yield call(getUserEvent, payload);

    yield put(
      handleSupportEventDetailActions.success(
        getEvent(data),
      ),
    );
  } catch (e) {
    yield put(handleSupportEventDetailActions.failure(e));
  }
}

export default function* supportSaga() {
  yield takeLatest(
    SUPPORT_EVENT_LIST_REQUEST,
    eventListAsync,
  );

  yield takeLatest(
    SUPPORT_EVENT_DETAIL_REQUEST,
    eventDetailAsync,
  );
}
