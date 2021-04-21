import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export interface IPointsStatus {
  active: number;
  toBeExpired: number;
  toBeExpiredAt: string;
}

export interface IPointsTransaction {
  id: number;
  transactionDate: string;
  type: string;
  amount: number;
  status: string;
  statusText: string;
  summaryText: string;
  typeText: string;
}

export interface ICouponData {
  couponCode: string;
  couponName: string;
  couponType: string;
  expiringAt?: string;
  registeredAt?: string;
  startingAt?: string;
  used: boolean;
}

export interface IMeState {
  isUserInfoRequest: boolean;
  isPointsStatusRequest: boolean;
  isPointsTransactionsRequest: boolean;
  couponListRequest: boolean;
  isPasswordConfirmForModifingInfomation: boolean;
  isPointsBuyRequest: boolean;
  isPointsSaveAfterBoardingRequest: boolean;
  isPointsSaveAfterBoardingSuccess: boolean;
  isPasswordUpdateRequest: boolean;
  isPasswordUpdateSuccess: boolean;
  userLeaveRequest: boolean;
  userLeaveSuccess: boolean;

  userInfo?: any;
  newUserInfo?: any;
  couponList?: ICouponData[];
  pointsStatus?: IPointsStatus;
  earnPoint?: IPointsTransaction;
  pointsTransactionsList: IPointsTransaction[];
}

export type IMeAction = ActionType<typeof actions>;
