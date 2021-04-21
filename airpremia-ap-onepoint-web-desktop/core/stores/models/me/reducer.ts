import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import {
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_INFO_FAILURE,
  COUPON_LIST_REQUEST,
  COUPON_LIST_SUCCESS,
  COUPON_LIST_FAILURE,
  USER_LEAVE_REQUEST,
  USER_LEAVE_SUCCESS,
  USER_LEAVE_FAILURE,
  POINTS_STATUS_REQUEST,
  POINTS_STATUS_SUCCESS,
  POINTS_STATUS_FAILURE,
  POINTS_TRANSACTIONS_REQUEST,
  POINTS_TRANSACTIONS_SUCCESS,
  POINTS_TRANSACTIONS_FAILURE,
  MODIFING_INFOMATION_STATUS,
  POINTS_BUY_REQUEST,
  POINTS_BUY_SUCCESS,
  POINTS_BUY_FAILURE,
  POINTS_SAVE_AFTER_BOARDING_REQUEST,
  POINTS_SAVE_AFTER_BOARDING_SUCCESS,
  POINTS_SAVE_AFTER_BOARDING_FAILURE,
  POINTS_SAVE_AFTER_BOARDING_INIT,
  PASSWORD_UPDATE_REQUEST,
  PASSWORD_UPDATE_SUCCESS,
  PASSWORD_UPDATE_FAILURE,
  PASSWORD_UPDATE_STATUS_INIT,
  USER_INFO_UPDATE_SUCCESS,
  NEW_USER_INFO_CHANGE,
} from './actions';
import { IMeState, IMeAction } from './types';

const initialState: IMeState = {
  isUserInfoRequest: false,
  isPointsStatusRequest: false,
  isPointsTransactionsRequest: false,
  couponListRequest: false,
  isPasswordConfirmForModifingInfomation: false,
  isPointsBuyRequest: false,
  isPointsSaveAfterBoardingRequest: false,
  isPointsSaveAfterBoardingSuccess: false,
  isPasswordUpdateRequest: false,
  isPasswordUpdateSuccess: false,
  userLeaveRequest: false,
  userLeaveSuccess: false,

  pointsStatus: undefined,
  earnPoint: undefined,
  userInfo: undefined,
  newUserInfo: undefined,
  couponList: [],
  pointsTransactionsList: [],
};

const me = createReducer<IMeState, IMeAction>(
  initialState,
  {
    [USER_INFO_REQUEST]: (state) =>
      produce(state, (draft) => {
        draft.isUserInfoRequest = true;
      }),
    [USER_INFO_SUCCESS]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.isUserInfoRequest = false;
        draft.userInfo = payload.data;
      }),
    [USER_INFO_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.isUserInfoRequest = false;
      }),

    [COUPON_LIST_REQUEST]: (state) =>
      produce(state, (draft) => {
        draft.couponListRequest = true;
      }),

    [COUPON_LIST_SUCCESS]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.couponListRequest = false;
        draft.couponList = payload.data.coupons;
      }),

    [COUPON_LIST_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.couponListRequest = false;
      }),

    [USER_LEAVE_REQUEST]: (state) =>
      produce(state, (draft) => {
        console.log(1)
        draft.userLeaveRequest = true;
        draft.userLeaveSuccess = false;
      }),

    [USER_LEAVE_SUCCESS]: (state, { payload }) =>
      produce(state, (draft) => {
        console.log(2,payload)
        draft.userLeaveRequest = false;
        draft.userLeaveSuccess = true;
      }),

    [USER_LEAVE_FAILURE]: (state) =>
      produce(state, (draft) => {
        console.log(3)
        draft.userLeaveRequest = false;
        draft.userLeaveSuccess = false;
      }),

    [POINTS_STATUS_REQUEST]: (state) =>
      produce(state, (draft) => {
        draft.isPointsStatusRequest = true;
      }),

    [POINTS_STATUS_SUCCESS]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.isPointsStatusRequest = false;
        draft.pointsStatus = payload.data;
      }),

    [POINTS_STATUS_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.isPointsStatusRequest = false;
      }),

    [POINTS_TRANSACTIONS_REQUEST]: (state) =>
      produce(state, (draft) => {
        draft.isPointsTransactionsRequest = true;
      }),

    [POINTS_TRANSACTIONS_SUCCESS]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.isPointsTransactionsRequest = false;
        draft.pointsTransactionsList = payload.data;
      }),

    [POINTS_TRANSACTIONS_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.isPointsTransactionsRequest = false;
      }),

    [MODIFING_INFOMATION_STATUS]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.isPasswordConfirmForModifingInfomation = payload;
      }),

    [POINTS_BUY_REQUEST]: (state) =>
      produce(state, (draft) => {
        draft.isPointsBuyRequest = true;
      }),

    [POINTS_BUY_SUCCESS]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.pointsStatus = payload.data.pointSummary;
        draft.isPointsBuyRequest = false;
      }),

    [POINTS_BUY_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.isPointsBuyRequest = false;
      }),

    [POINTS_SAVE_AFTER_BOARDING_REQUEST]: (state) =>
      produce(state, (draft) => {
        draft.earnPoint = undefined;
        draft.isPointsSaveAfterBoardingRequest = true;
        draft.isPointsSaveAfterBoardingSuccess = false;
      }),

    [POINTS_SAVE_AFTER_BOARDING_SUCCESS]: (
      state,
      { payload },
    ) =>
      produce(state, (draft) => {
        draft.pointsStatus = payload.data.pointSummary;
        draft.earnPoint = payload.data.transaction;
        draft.isPointsSaveAfterBoardingRequest = false;
        draft.isPointsSaveAfterBoardingSuccess = true;
      }),

    [POINTS_SAVE_AFTER_BOARDING_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.isPointsSaveAfterBoardingRequest = false;
        draft.isPointsSaveAfterBoardingSuccess = false;
      }),

    [POINTS_SAVE_AFTER_BOARDING_INIT]: (state) =>
      produce(state, (draft) => {
        draft.isPointsSaveAfterBoardingRequest = false;
        draft.isPointsSaveAfterBoardingSuccess = false;
      }),

    [PASSWORD_UPDATE_REQUEST]: (state) =>
      produce(state, (draft) => {
        draft.isPasswordUpdateRequest = true;
        draft.isPasswordUpdateSuccess = false;
      }),

    [PASSWORD_UPDATE_SUCCESS]: (state) =>
      produce(state, (draft) => {
        draft.isPasswordUpdateRequest = false;
        draft.isPasswordUpdateSuccess = true;
      }),

    [PASSWORD_UPDATE_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.isPasswordUpdateRequest = false;
        draft.isPasswordUpdateSuccess = false;
      }),

    [PASSWORD_UPDATE_STATUS_INIT]: (state) =>
      produce(state, (draft) => {
        draft.isPasswordUpdateRequest = false;
        draft.isPasswordUpdateSuccess = false;
      }),

    [USER_INFO_UPDATE_SUCCESS]: (state) =>
      produce(state, (draft) => {
        draft.newUserInfo = undefined;
      }),

    [NEW_USER_INFO_CHANGE]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.newUserInfo = {
          ...state.newUserInfo,
          ...payload,
        };
      }),
  },
);
export default me;
