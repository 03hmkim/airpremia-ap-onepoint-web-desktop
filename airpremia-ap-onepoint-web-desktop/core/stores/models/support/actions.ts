import { createAsyncAction } from 'typesafe-actions';
import {
  IGetUserEvent,
  IGetUserEvents,
} from '@airpremia/core/api/user/types';
import { AxiosError } from 'axios';
import { ISupportEventListItem } from '@airpremia/core/stores/models/support/types';

interface ISupportEventListSuccess extends IGetUserEvents {
  list: ISupportEventListItem[];
}

/** 이벤트 리스트 조회 */
export const SUPPORT_EVENT_LIST_REQUEST =
  'me/SUPPORT_EVENT_LIST_REQUEST';
export const SUPPORT_EVENT_LIST_SUCCESS =
  'me/SUPPORT_EVENT_LIST_SUCCESS';
export const SUPPORT_EVENT_LIST_FAILURE =
  'me/SUPPORT_EVENT_LIST_FAILURE';

export const handleSupportEventListActions = createAsyncAction(
  SUPPORT_EVENT_LIST_REQUEST,
  SUPPORT_EVENT_LIST_SUCCESS,
  SUPPORT_EVENT_LIST_FAILURE,
)<IGetUserEvents, ISupportEventListSuccess, AxiosError>();

/** 이벤트 상세 조회 */
export const SUPPORT_EVENT_DETAIL_REQUEST =
  'me/SUPPORT_EVENT_DETAIL_REQUEST';
export const SUPPORT_EVENT_DETAIL_SUCCESS =
  'me/SUPPORT_EVENT_DETAIL_SUCCESS';
export const SUPPORT_EVENT_DETAIL_FAILURE =
  'me/SUPPORT_EVENT_DETAIL_FAILURE';

export const handleSupportEventDetailActions = createAsyncAction(
  SUPPORT_EVENT_DETAIL_REQUEST,
  SUPPORT_EVENT_DETAIL_SUCCESS,
  SUPPORT_EVENT_DETAIL_FAILURE,
)<IGetUserEvent, ISupportEventListItem, AxiosError>();
