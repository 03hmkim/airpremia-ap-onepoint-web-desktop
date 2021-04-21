import { createReducer } from 'typesafe-actions'
import {
    NOTICE_LIST_REQUEST,
    NOTICE_LIST_SUCCESS,
    NOTICE_LIST_FAILURE,
    NOTICE_CONTENT_REQUEST,
    NOTICE_CONTENT_SUCCESS,
    NOTICE_CONTENT_FAILURE,
} from './actions'
import produce from 'immer';
import { INoticesAction, INoticeState } from './types'
const initialState: INoticeState = {
    isNoticeRequest: false,
    isNoticeContentRequest: false,
    notices: [],
    noticeContent: [],
}
const notice = createReducer<
    INoticeState,
    INoticesAction
>(initialState, {
    [NOTICE_LIST_REQUEST]: (state) =>
    produce(state, (draft) => {
        draft.isNoticeRequest = true;
    }),
    [NOTICE_LIST_SUCCESS]: (state, { payload }) =>
    produce(state, (draft) => {
        const { data } = payload;
    draft.notices = data.notices;
    draft.isNoticeRequest = false;
    }),
    [NOTICE_LIST_FAILURE]: (state) =>
    produce(state, (draft) => {
        draft.isNoticeRequest = false;
    }),

    [NOTICE_CONTENT_REQUEST]: (state) =>
    produce(state, (draft) => {
        draft.isNoticeContentRequest = true;
    }),
    [NOTICE_CONTENT_SUCCESS]: (state, { payload }) =>
    produce(state, (draft) => {
        const { data } = payload;
    draft.noticeContent = data.contents;
    draft.isNoticeContentRequest = false;
    }),
    [NOTICE_CONTENT_FAILURE]: (state) =>
    produce(state, (draft) => {
        draft.isNoticeContentRequest = false;
    }),
})

export default notice;