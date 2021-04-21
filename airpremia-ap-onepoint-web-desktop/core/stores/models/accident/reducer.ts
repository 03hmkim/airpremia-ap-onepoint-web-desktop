import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import {
  ACCIDENT_LIST_REQUEST,
  ACCIDENT_LIST_SUCCESS,
  ACCIDENT_LIST_FAILURE,
  ACCIDENT_DETAIL_SUCCESS,
  ACCIDENT_CONTENTS_LIST_SUCCESS,
  ACCIDENT_POST_DETAIL_SUCCESS,
  ACCIDENT_OPEN_STATUS_SUCCESS,
} from './actions';
import { IAccidentState, IAccidentAction } from './types';

const initialState: IAccidentState = {
  status: false,
  isAccidentListRequest: false,
  isAccidentNoticeRequest: false,
  isAccidentNewsRequest: false,
  isCurrentAccidentRequest: false,
  isAccidentPostDetailRequest: false,

  accidentList: [],
  postDetailData: null,
  currentAccidentData: null,
  accidentNoticeData: null,
  accidentNewsData: null,
};

const accident = createReducer<
  IAccidentState,
  IAccidentAction
>(initialState, {
  [ACCIDENT_OPEN_STATUS_SUCCESS]: (state, { payload }) =>
    produce(state, (draft) => {
      draft.status = payload.data.status;
    }),

  [ACCIDENT_LIST_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isAccidentListRequest = true;
    }),

  [ACCIDENT_LIST_SUCCESS]: (state, { payload }) =>
    produce(state, (draft) => {
      draft.isAccidentListRequest = false;
      draft.accidentList = payload.data;
    }),

  [ACCIDENT_DETAIL_SUCCESS]: (state, { payload }) =>
    produce(state, (draft) => {
      draft.currentAccidentData = payload.data;
    }),

  [ACCIDENT_LIST_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isAccidentListRequest = false;
    }),

  [ACCIDENT_CONTENTS_LIST_SUCCESS]: (state, { payload }) =>
    produce(state, (draft) => {
      const { news, notice } = payload;
      draft.accidentNewsData = news.data;
      draft.accidentNoticeData = notice.data;
    }),

  [ACCIDENT_POST_DETAIL_SUCCESS]: (state, { payload }) =>
    produce(state, (draft) => {
      draft.postDetailData = payload.data;
    }),
});

export default accident;
