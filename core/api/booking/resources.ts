import http from '../http';
import { CommonResp } from '@airpremia/core/api/config';
import { IGetBookingResourcesSeatMap } from '@airpremia/core/api/booking/types';

/** 마켓, 도시, 국가, 주, 공항, 승객, SSR 목록 조회 */
export const getBookingResourcesPrimary = () =>
  http.get<void, CommonResp>(
    `booking/v1/resources/primary`,
  );

/** 성별, 요금, 문서, Suffix, Title, Role 목록 조회 */
export const getBookingResourcesSecondary = () =>
  http.get<void, CommonResp>(
    `/booking/v1/resources/secondary`,
  );

/** 특별 서비스 요청(SSR) 목록 조회 */
export const getBookingResourcesSsr = () =>
  http.get<void, CommonResp>(`/booking/v1/resources/ssr`);

/** 결제 수단 목록 조회 */
export const getBookingResourcesPaymentMethod = () =>
  http.get<void, CommonResp>(
    `/booking/v1/resources/payment-method`,
  );

/** 국가 코드 목록 조회 */
export const getBookingResourcesCountry = () =>
  http.get<void, CommonResp>(
    `/booking/v1/resources/country`,
  );

/** 할인 코드 목록 조회 */
export const getBookingResourcesDiscount = () =>
  http.get<void, CommonResp>(
    `/booking/v1/resources/discount-code`,
  );
export const getBookingResourcesSeatMap = ({
  journeyKey,
}: IGetBookingResourcesSeatMap) =>
  http.get<IGetBookingResourcesSeatMap, CommonResp>(
    `/booking/v1/resources/seat-map?journeyKey=${journeyKey}`,
  );
