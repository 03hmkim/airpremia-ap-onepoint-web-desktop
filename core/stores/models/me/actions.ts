import {
  createAction,
  createAsyncAction,
} from 'typesafe-actions';
import { CommonResp } from '@airpremia/core/api/config';
import { AxiosError } from 'axios';
import {
  IPutUserInformation,
  IPostPointsBuyParams,
  IPostPointsEarnParams,
  IPutUserPassword,
} from '@airpremia/core/api/user/types';

/** 사용자 정보 요청 */
export const USER_INFO_REQUEST = 'me/USER_INFO_REQUEST';
export const USER_INFO_SUCCESS = 'me/USER_INFO_SUCCESS';
export const USER_INFO_FAILURE = 'me/USER_INFO_FAILURE';

export const userInfoActions = createAsyncAction(
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_INFO_FAILURE,
)<void, CommonResp, AxiosError>();

/** 사용자 정보 변경을 위해 비밀번호 입력 성공 상태 Action */
export const MODIFING_INFOMATION_STATUS =
  'me/MODIFING_INFOMATION_STATUS';
export const handleModifingInfoStatusChange = createAction(
  MODIFING_INFOMATION_STATUS,
)<boolean>();

/** 사용자 정보 업데이트 */
export const USER_INFO_UPDATE_REQUEST =
  'me/USER_INFO_UPDATE_REQUEST';
export const USER_INFO_UPDATE_SUCCESS =
  'me/USER_INFO_UPDATE_SUCCESS';
export const USER_INFO_UPDATE_FAILURE =
  'me/USER_INFO_UPDATE_FAILURE';

export const userInfoUpdateActions = createAsyncAction(
  USER_INFO_UPDATE_REQUEST,
  USER_INFO_UPDATE_SUCCESS,
  USER_INFO_UPDATE_FAILURE,
)<IPutUserInformation, CommonResp, AxiosError>();

/** 사용자 쿠폰 조회 */
export const COUPON_LIST_REQUEST = 'me/COUPON_LIST_REQUEST';
export const COUPON_LIST_SUCCESS = 'me/COUPON_LIST_SUCCESS';
export const COUPON_LIST_FAILURE = 'me/COUPON_LIST_FAILURE';

export const handleCouponListActions = createAsyncAction(
  COUPON_LIST_REQUEST,
  COUPON_LIST_SUCCESS,
  COUPON_LIST_FAILURE,
)<void, CommonResp, AxiosError>();


/** 회원 탈퇴 */
export const USER_LEAVE_REQUEST = 'me/USER_LEAVE_REQUEST';
export const USER_LEAVE_SUCCESS = 'me/USER_LEAVE_SUCCESS';
export const USER_LEAVE_FAILURE = 'me/USER_LEAVE_FAILURE';

export const byeUserLeaveActions = createAsyncAction(
  USER_LEAVE_REQUEST,
  USER_LEAVE_SUCCESS,
  USER_LEAVE_FAILURE,
)<void, CommonResp, AxiosError>();


/** 포인트 상태 정보와 거래내역 함께 조회 */
export const POINTS_INIT_DATA_REQUEST =
  'me/POINTS_INIT_DATA_REQUEST';
export const POINTS_INIT_DATA_SUCCESS =
  'me/POINTS_INIT_DATA_SUCCESS';
export const POINTS_INIT_DATA_FAILURE =
  'me/POINTS_INIT_DATA_FAILURE';

export const handlePointsInitDataAction = createAsyncAction(
  POINTS_INIT_DATA_REQUEST,
  POINTS_INIT_DATA_SUCCESS,
  POINTS_INIT_DATA_FAILURE,
)<void, CommonResp, AxiosError>();

/** 포인트 상태 정보 조회 */
export const POINTS_STATUS_REQUEST =
  'me/POINTS_STATUS_REQUEST';
export const POINTS_STATUS_SUCCESS =
  'me/POINTS_STATUS_SUCCESS';
export const POINTS_STATUS_FAILURE =
  'me/POINTS_STATUS_FAILURE';

export const handlePointsStatusAction = createAsyncAction(
  POINTS_STATUS_REQUEST,
  POINTS_STATUS_SUCCESS,
  POINTS_STATUS_FAILURE,
)<void, CommonResp, AxiosError>();

/** 포인트 거래 내역 조회 */
export const POINTS_TRANSACTIONS_REQUEST =
  'me/POINTS_TRANSACTIONS_REQUEST';
export const POINTS_TRANSACTIONS_SUCCESS =
  'me/POINTS_TRANSACTIONS_SUCCESS';
export const POINTS_TRANSACTIONS_FAILURE =
  'me/POINTS_TRANSACTIONS_FAILURE';

export const handlePointsTransactionsAction = createAsyncAction(
  POINTS_TRANSACTIONS_REQUEST,
  POINTS_TRANSACTIONS_SUCCESS,
  POINTS_TRANSACTIONS_FAILURE,
)<void, CommonResp, AxiosError>();

/** 포인트 구매 */
export const POINTS_BUY_REQUEST = 'me/POINTS_BUY_REQUEST';
export const POINTS_BUY_SUCCESS = 'me/POINTS_BUY_SUCCESS';
export const POINTS_BUY_FAILURE = 'me/POINTS_BUY_FAILURE';

export const handlePointsBuyAction = createAsyncAction(
  POINTS_BUY_REQUEST,
  POINTS_BUY_SUCCESS,
  POINTS_BUY_FAILURE,
)<IPostPointsBuyParams, CommonResp, AxiosError>();

/** 탑승 후 적립 */
export const POINTS_SAVE_AFTER_BOARDING_REQUEST =
  'me/POINTS_SAVE_AFTER_BOARDING_REQUEST';
export const POINTS_SAVE_AFTER_BOARDING_SUCCESS =
  'me/POINTS_SAVE_AFTER_BOARDING_SUCCESS';
export const POINTS_SAVE_AFTER_BOARDING_FAILURE =
  'me/POINTS_SAVE_AFTER_BOARDING_FAILURE';

export const handlePointsSaveAfterBoardingAction = createAsyncAction(
  POINTS_SAVE_AFTER_BOARDING_REQUEST,
  POINTS_SAVE_AFTER_BOARDING_SUCCESS,
  POINTS_SAVE_AFTER_BOARDING_FAILURE,
)<IPostPointsEarnParams, CommonResp, AxiosError>();

/** 탑승 후 적립 state 초기화 */
export const POINTS_SAVE_AFTER_BOARDING_INIT =
  'me/POINTS_SAVE_AFTER_BOARDING_INIT';
export const handlePointsSaveAfterBoardingInitAction = createAction(
  POINTS_SAVE_AFTER_BOARDING_INIT,
)();

/** 사용자 패스워드 변경 */
export const PASSWORD_UPDATE_REQUEST =
  'me/PASSWORD_UPDATE_REQUEST';
export const PASSWORD_UPDATE_SUCCESS =
  'me/PASSWORD_UPDATE_SUCCESS';
export const PASSWORD_UPDATE_FAILURE =
  'me/PASSWORD_UPDATE_FAILURE';

export const passwordUpdateActions = createAsyncAction(
  PASSWORD_UPDATE_REQUEST,
  PASSWORD_UPDATE_SUCCESS,
  PASSWORD_UPDATE_FAILURE,
)<IPutUserPassword, CommonResp, AxiosError>();

/** 사용자 패스워드 변경 후 초기화 */
export const PASSWORD_UPDATE_STATUS_INIT =
  'me/PASSWORD_UPDATE_STATUS_INIT';
export const handlePasswordUpdateStatusInitAction = createAction(
  PASSWORD_UPDATE_STATUS_INIT,
)();

/** 모바일에서 사용자 변경 데이터를 가지고 있기 위한 함수 */
export const NEW_USER_INFO_CHANGE =
  'me/NEW_USER_INFO_CHANGE';
export const handleNewUserInfoChangeAction = createAction(
  NEW_USER_INFO_CHANGE,
)<{ [x: string]: any }>();
