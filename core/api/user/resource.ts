import http from '../http';
import { CommonResp } from '../../api/config';

const prefix = '/user/v1/resources';

/** 국가별 번호 리스트 조회 */
export const getUserCountryNumbers = () =>
  http.get<void, CommonResp>(`${prefix}/country-number`);
