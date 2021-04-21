import {
  createAction,
  createAsyncAction,
} from 'typesafe-actions';
import { AxiosError } from 'axios';
import { CommonResp } from '@airpremia/core/api/config';
import { 
  IGetBookingSessionAvailableSsrs,
  IPostBookingSessionSeats
} from '../../../api/booking/types';
import {
  ISsrHistory2,
  ISsrSeatMapResponse,
  ISsrSeatPrice,
  ISsrSeatUpdateRequest,
} from './types';
import {
  SeatPassengerState,
} from '../booking/types';

/** 특별서비스요청(SSR) 내역 조회 */
export const SSRS_HISTORY_REQUEST =
  'ssr/SSRS_HISTORY_REQUEST';
export const SSRS_HISTORY_SUCCESS =
  'ssr/SSRS_HISTORY_SUCCESS';
export const SSRS_HISTORY_FAILURE =
  'ssr/SSRS_HISTORY_FAILURE';
export const handleSsrsHistoryActions = createAsyncAction(
  SSRS_HISTORY_REQUEST,
  SSRS_HISTORY_SUCCESS,
  SSRS_HISTORY_FAILURE,
)<void, CommonResp, AxiosError>();

/** 신청 가능한 특별서비스요청(SSR) 조회 */
export const AVAILABLE_SSRS_SEARCH_REQUEST =
  'ssr/AVAILABLE_SSRS_SEARCH_REQUEST';
export const AVAILABLE_SSRS_SEARCH_SUCCESS =
  'ssr/AVAILABLE_SSRS_SEARCH_SUCCESS';
export const AVAILABLE_SSRS_SEARCH_FAILURE =
  'ssr/AVAILABLE_SSRS_SEARCH_FAILURE';

export const handleAvailableSsrsSearchActions = createAsyncAction(
  AVAILABLE_SSRS_SEARCH_REQUEST,
  AVAILABLE_SSRS_SEARCH_SUCCESS,
  AVAILABLE_SSRS_SEARCH_FAILURE,
)<
  IGetBookingSessionAvailableSsrs,
  CommonResp,
  AxiosError
>();

/** SSR 페이지 조회
 * 1. 예약 조회(ticket)
 * 2. 현재 ssr 내역 조회
 * 3. 가능한 ssr 조회
 */
export const SSR_PAGE_REQUEST = 'ssr/SSR_PAGE_REQUEST';
export const SSR_PAGE_SUCCESS = 'ssr/SSR_PAGE_SUCCESS';
export const SSR_PAGE_FAILURE = 'ssr/SSR_PAGE_FAILURE';

export const handleSsrPageActions = createAsyncAction(
  SSR_PAGE_REQUEST,
  SSR_PAGE_SUCCESS,
  SSR_PAGE_FAILURE,
)<void, void, AxiosError>();

/** 전체 좌석 API 요청 */
export const SSR_SEAT_MAP_REQUEST =
  'ssr/SSR_SEAT_MAP_REQUEST';
export const SSR_SEAT_MAP_SUCCESS =
  'ssr/SSR_SEAT_MAP_SUCCESS';
export const SSR_SEAT_MAP_FAILURE =
  'ssr/SSR_SEAT_MAP_FAILURE';
export const handleSsrSeatMapActions = createAsyncAction(
  SSR_SEAT_MAP_REQUEST,
  SSR_SEAT_MAP_SUCCESS,
  SSR_SEAT_MAP_FAILURE,
)<void, ISsrSeatMapResponse, AxiosError>();

/** 점유 좌석 업데이트 */
export const SSR_SEAT_UPDATE = 'ssr/SSR_SEAT_UPDATE';
export const handleSsrSeatUpdate = createAction(
  SSR_SEAT_UPDATE,
)<ISsrSeatUpdateRequest>();

/** SSR 지정 추가 및 삭제 API 요청 */
export const SSR_UPDATE_REQUEST = 'ssr/SSR_UPDATE_REQUEST';
export const SSR_UPDATE_SUCCESS = 'ssr/SSR_UPDATE_SUCCESS';
export const SSR_UPDATE_FAILURE = 'ssr/SSR_UPDATE_FAILURE';
export const handleSsrUpdateActions = createAsyncAction(
  SSR_UPDATE_REQUEST,
  SSR_UPDATE_SUCCESS,
  SSR_UPDATE_FAILURE,
)<void, ISsrSeatMapResponse, AxiosError>();

/** 좌석 내역 조회 */
export const SSR_SEAT_HISTORY_REQUEST =
  'ssr/SSR_SEAT_HISTORY_REQUEST';
export const SSR_SEAT_HISTORY_SUCCESS =
  'ssr/SSR_SEAT_HISTORY_SUCCESS';
export const SSR_SEAT_HISTORY_FAILURE =
  'ssr/SSR_SEAT_HISTORY_FAILURE';
export const handleSsrsSeatHistoryActions = createAsyncAction(
  SSR_SEAT_HISTORY_REQUEST,
  SSR_SEAT_HISTORY_SUCCESS,
  SSR_SEAT_HISTORY_FAILURE,
)<void, ISsrHistory2, AxiosError>();

/** 좌석 금액 조회 */
export const SSR_SEAT_PRICE_REQUEST =
  'ssr/SSR_SEAT_PRICE_REQUEST';
export const SSR_SEAT_PRICE_SUCCESS =
  'ssr/SSR_SEAT_PRICE_SUCCESS';
export const SSR_SEAT_PRICE_FAILURE =
  'ssr/SSR_SEAT_PRICE_FAILURE';
export const handleSsrsSeatPriceActions = createAsyncAction(
  SSR_SEAT_PRICE_REQUEST,
  SSR_SEAT_PRICE_SUCCESS,
  SSR_SEAT_PRICE_FAILURE,
)<void, ISsrSeatPrice[], AxiosError>();

/** 체크인 점유 좌석 업데이트 */
export const SSR_CHECKIN_SEAT_UPDATE = 'ssr/SSR_CHECKIN_SEAT_UPDATE';
export const handleSsrCheckinSeatUpdate = createAction(
  SSR_CHECKIN_SEAT_UPDATE,
  )<SeatPassengerState>();

/** 체크인 SSR 좌석 지정 */
export const SSR_CHECKIN_UPDATE_REQUEST = 'ssr/SSR_CHECKIN_UPDATE_REQUEST';
export const SSR_CHECKIN_UPDATE_SUCCESS = 'ssr/SSR_CHECKIN_UPDATE_SUCCESS';
export const SSR_CHECKIN_UPDATE_FAILURE = 'ssr/SSR_CHECKIN_UPDATE_FAILURE';
export const handleSsrCheckinUpdateActions = createAsyncAction(
  SSR_CHECKIN_UPDATE_REQUEST,
  SSR_CHECKIN_UPDATE_SUCCESS,
  SSR_CHECKIN_UPDATE_FAILURE,
)<IPostBookingSessionSeats, CommonResp, AxiosError>();

/** 체크인 좌석 정보 조회 */
export const SSR_CHECKIN_SEAT_REQUEST = 'ssr/SSR_CHECKIN_SEAT_REQUEST';
export const SSR_CHECKIN_SEAT_SUCCESS = 'ssr/SSR_CHECKIN_SEAT_SUCCESS';
export const SSR_CHECKIN_SEAT_FAILURE = 'ssr/SSR_CHECKIN_SEAT_FAILURE';

export const handleSsrCheckinSeatActions = createAsyncAction(
  SSR_CHECKIN_SEAT_REQUEST,
  SSR_CHECKIN_SEAT_SUCCESS,
  SSR_CHECKIN_SEAT_FAILURE,
)<void/* ISsrCheckinSeat */, void, AxiosError>();