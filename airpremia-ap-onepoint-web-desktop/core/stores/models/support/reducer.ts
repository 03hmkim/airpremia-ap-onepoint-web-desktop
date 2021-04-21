import { ISupportAction, ISupportState } from './types';
import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import {
  SUPPORT_EVENT_DETAIL_FAILURE,
  SUPPORT_EVENT_DETAIL_REQUEST,
  SUPPORT_EVENT_DETAIL_SUCCESS,
  SUPPORT_EVENT_LIST_FAILURE,
  SUPPORT_EVENT_LIST_REQUEST,
  SUPPORT_EVENT_LIST_SUCCESS,
} from '@airpremia/core/stores/models/support/actions';

const initialState: ISupportState = {
  event: {
    list: {
      ing: [],
      ended: [],
      applied: [],
    },
    detail: {
      id: 0,
      title: '',
      startDate: '',
      endDate: '',
      thumbnailUrl: '',
      dDay: -1,
      labels: [],
    },
  },
};

const support = createReducer<
  ISupportState,
  ISupportAction
>(initialState, {
  [SUPPORT_EVENT_LIST_REQUEST]: (state) =>
    produce(state, () => {
      console.log('SUPPORT_EVENT_LIST_REQUEST');
    }),
  [SUPPORT_EVENT_LIST_SUCCESS]: (state, { payload }) =>
    produce(state, (draft: ISupportState) => {
      draft.event.list[payload.category] = payload.list;
    }),
  [SUPPORT_EVENT_LIST_FAILURE]: (state, { payload }) =>
    produce(state, () => {
      console.error('SUPPORT_EVENT_LIST_FAILURE', payload);
    }),
  [SUPPORT_EVENT_DETAIL_REQUEST]: (state) =>
    produce(state, () => {
      console.log('SUPPORT_EVENT_DETAIL_REQUEST');
    }),
  [SUPPORT_EVENT_DETAIL_SUCCESS]: (state, { payload }) =>
    produce(state, (draft: ISupportState) => {
      draft.event.detail = payload;
    }),
  [SUPPORT_EVENT_DETAIL_FAILURE]: (state, { payload }) =>
    produce(state, () => {
      console.error(
        'SUPPORT_EVENT_DETAIL_FAILURE',
        payload,
      );
    }),
});

export default support;
