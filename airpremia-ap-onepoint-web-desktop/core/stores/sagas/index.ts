import { all, fork } from 'redux-saga/effects'; // fork

import accidentSaga from './accidentSaga';
import authSaga from './authSaga';
import bookingSessionSaga from './bookingSessionSaga';
import ssrSaga from './ssrSaga';
import bookingSaga from './bookingSaga';
import meSaga from './meSaga';
import supportSaga from './supportSaga';
import noticeSaga from './noticeSaga';

export default function* rootSaga() {
  yield all([
    fork(accidentSaga),
    fork(authSaga),
    fork(bookingSessionSaga),
    fork(ssrSaga),
    fork(bookingSaga),
    fork(meSaga),
    fork(supportSaga),
    fork(noticeSaga),
  ]);
}
