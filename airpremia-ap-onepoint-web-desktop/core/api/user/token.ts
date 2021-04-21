import http from '../http';
import { IPostUserTokenMember } from './types';
import { CommonResp } from '@airpremia/core/api/config';

// TODO payload 에서 type 제거 후 하드코딩(MEMBER)
/** 회원 토큰 생성 (로그인) */
export const postUserTokenMember = (
  payload: IPostUserTokenMember,
) =>
  http.post<IPostUserTokenMember, CommonResp>(
    '/user/v1/tokens',
    payload,
  );

/** 비회원 토큰 생성 */
export const postUserTokenAnonymous = () =>
  http.post<void, CommonResp>('/user/v1/tokens', {
    type: 'ANONYMOUS',
  });

/** 토큰 삭제 (로그아웃) */
export const deleteUserToken = () =>
  http.delete('/user/v1/tokens/me');

/** 토큰 시간 연장 */
export const PutUserTokenTTL = () =>
  http.put('/user/v1/tokens/me/ttl');
