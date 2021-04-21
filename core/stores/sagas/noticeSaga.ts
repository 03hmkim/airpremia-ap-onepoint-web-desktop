import {
    getInfoNotices,
    getInfoNotice,
} from '@airpremia/core/api/info/notices'
import {
    handleNoticesLoad,
    NOTICE_LIST_REQUEST,
    handleNoticeContentLoad,
    NOTICE_CONTENT_REQUEST,
} from '../models/notice'
import createAsyncSaga from '@airpremia/core/lib/createAsyncSaga'
import { takeLatest } from '@redux-saga/core/effects';

const getNoticesAsync = () => 
    createAsyncSaga(handleNoticesLoad, getInfoNotices);

const getNoticeAsync = () =>
    createAsyncSaga(handleNoticeContentLoad, getInfoNotice);

export default function * noticeSaga() {
    yield takeLatest(
        NOTICE_LIST_REQUEST,
        getNoticesAsync(),
    )

    yield takeLatest(
        NOTICE_CONTENT_REQUEST,
        getNoticeAsync(),
    )
}