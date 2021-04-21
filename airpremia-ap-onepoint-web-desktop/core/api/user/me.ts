import http from '../http';
import {
  IPostPointsBuyParams,
  IPostPointsEarnParams,
  IPostPointsTransferParams,
  IPutUserInformation,
  IPutUserPassword,
  IPostUserReactivate,
} from './types';
import { CommonResp } from '@airpremia/core/api/config';

const prefix = '/user/v1/users/me';

/** 회원 정보 조회 */
export const getUserInformation = () =>
  http.get<void, CommonResp>(`${prefix}`);

/** 포인트 내역 조회 */
export const getUserPointsHistory = () =>
  http.get<void, CommonResp>(`${prefix}/points-history`);

/** 쿠폰 조회 */
export const getUserCoupons = () =>
  http.get<void, CommonResp>(`${prefix}/coupons`);

/** 쿠폰 등록 */
export const postUserCoupon = (couponCode: string) =>
  http.post<string, CommonResp>(`${prefix}/coupons`, {
    couponCode,
  });

/** 사용자 정보 변경 전 사용자 비밀번호 확인 */
export const postUserPasswordCheck = (password: string) =>
  http.post<string, CommonResp>(
    `${prefix}/check-password`,
    { password },
  );

/** 회원 정보 변경 */
export const putUserInformation = (
  payload: IPutUserInformation,
) =>
  http.put<IPutUserInformation, CommonResp>(
    `${prefix}`,
    payload,
  );

/** 비밀번호 변경 */
export const putUserPassword = (
  payload: IPutUserPassword,
) =>
  http.put<IPutUserPassword, CommonResp>(
    `${prefix}/password`,
    payload,
  );

/** 휴면 계정 해제 */
export const postUserReactivate = (
  payload: IPostUserReactivate,
) =>
  http.post<IPostUserReactivate, CommonResp>(
    `${prefix}/reactivate`,
    payload,
  );

/** 회원탈퇴 */
export const postUserLeave = () =>
  http.post<void, CommonResp>(`${prefix}/leave`);

/** 포인트 상태 정보 조회 */
export const getPointsStatus = () =>
  http.get<void, CommonResp>(`${prefix}/points/summary`);

/** 포인트 거래 내역 조회 */
export const getPointsTransactions = () =>
  http.get<void, CommonResp>(
    `${prefix}/points/transactions`,
  );

/** 포인트 구매 요청 */
export const postPointsBuy = (
  payload: IPostPointsBuyParams,
) =>
  http.post<IPostPointsBuyParams, CommonResp>(
    `${prefix}/points/buy`,
    payload,
  );

/** 포인트 사후 적립 요청 */
export const postPointsEarn = (
  payload: IPostPointsEarnParams,
) =>
  http.post<IPostPointsEarnParams, CommonResp>(
    `${prefix}/points/earn`,
    payload,
  );

/** 포인트 전송 */
export const postPointsTransfer = (
  payload: IPostPointsTransferParams,
) =>
  http.post<IPostPointsTransferParams, CommonResp>(
    `${prefix}/points/transfer`,
    payload,
  );
