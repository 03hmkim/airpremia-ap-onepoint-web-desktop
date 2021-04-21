import http from '../http';
import { CommonResp } from '../config';
import {
  IPostUserPhoneAuthCode,
  IPostUserConfirmPhoneAuthCode,
  IPostUserEmailAuthCode,
  IPostUserConfirmEmailAuthCode,
} from './types';

const prefix = '/user/v1/auths';

/** 이메일 인증코드 요청 */
export const postUserEmailAuthCode = (
  payload: IPostUserEmailAuthCode,
) =>
  http.post<IPostUserEmailAuthCode, CommonResp>(
    `${prefix}/request-email-auth-code`,
    payload,
  );

/** 이메일 인증코드 확인 */
export const postUserConfirmEmailAuthCode = (
  payload: IPostUserConfirmEmailAuthCode,
) =>
  http.post<IPostUserConfirmEmailAuthCode, CommonResp>(
    `${prefix}/verify-email-auth-code`,
    payload,
  );

/** 휴대폰 인증코드 요청 */
export const postUserPhoneAuthCode = (
  payload: IPostUserPhoneAuthCode,
) =>
  http.post<IPostUserPhoneAuthCode, CommonResp>(
    `${prefix}/request-phone-auth-code`,
    payload,
  );

/** 휴대폰 인증코드 확인 */
export const postUserConfirmPhoneAuthCode = (
  payload: IPostUserConfirmPhoneAuthCode,
) =>
  http.post<IPostUserConfirmPhoneAuthCode, CommonResp>(
    `${prefix}/verify-phone-auth-code`,
    payload,
  );
