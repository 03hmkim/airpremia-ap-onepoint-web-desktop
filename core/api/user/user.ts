import http from '../http';
import { CommonResp } from '../config';
import {
  IPostUserCheckEmail,
  IPostUserFindEmail,
  IPostUserJoin,
  IPostUserConfirmEmailPhone,
  IPostUserResetPassword,
  IPostUserPhoneAuthCode,
  IPostUserConfirmPhoneAuthCode,
} from './types';

const prefix = '/user/v1/users';

/** 회원가입 */
export const postUserJoin = (payload: IPostUserJoin) =>
  http.post<IPostUserJoin, CommonResp>(
    `${prefix}`,
    payload,
  );

/** 휴대폰 번호 중복 체크 */
export const getUserCheckPhone = () =>
  http.get<void, CommonResp>(`${prefix}/check-phone`);

/** 이메일 중복 체크 */
export const postUserCheckEmail = (
  payload: IPostUserCheckEmail,
) =>
  http.post<IPostUserCheckEmail, CommonResp>(
    `${prefix}/validate-email`,
    payload,
  );

/** 이메일 찾기 */
export const postUserFindEmail = (
  payload: IPostUserFindEmail,
) =>
  http.post<IPostUserFindEmail, CommonResp>(
    `${prefix}/find-email`,
    payload,
  );

/** 이메일 및 휴대폰 번호 확인 (비밀번호 재설정 이전 단계) */
export const postUserConfirmEmailPhone = (
  payload: IPostUserConfirmEmailPhone,
) =>
  http.post<IPostUserConfirmEmailPhone, CommonResp>(
    `${prefix}/find-id`,
    payload,
  );

/** 비밀번호 재설정 */
export const postUserResetPassword = (
  payload: IPostUserResetPassword,
) =>
  http.post<IPostUserResetPassword, CommonResp>(
    `${prefix}/reset-password`,
    payload,
  );

/** 휴대폰 인증코드 요청 */
/** @deprecated user/auths로 이동 */
export const postUserPhoneAuthCode = (
  payload: IPostUserPhoneAuthCode,
) =>
  http.post<IPostUserPhoneAuthCode, CommonResp>(
    `${prefix}/request-phone-auth-code`,
    payload,
  );

/** 휴대폰 인증코드 확인 */
/** @deprecated user/auths로 이동 */
export const postUserConfirmPhoneAuthCode = (
  payload: IPostUserConfirmPhoneAuthCode,
) =>
  http.post<IPostUserConfirmPhoneAuthCode, CommonResp>(
    `${prefix}/verify-phone-auth-code`,
    payload,
  );
