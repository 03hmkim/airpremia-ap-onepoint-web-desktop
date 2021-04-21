import http from '../http';
import { CommonResp } from '../config';
import {
  IDeleteBookingSessionSsrs,
  IGetBookingSessionAvailableSsrs,
  IPatchBookingSessionContacts,
  IPostBookingSession,
  IPostBookingSessionApgPayment,
  IPostBookingSessionSeats,
  IPostBookingSessionCommitWithApgPayment,
  IPostBookingSessionContacts,
  IPostBookingSessionContactsAndPassengers,
  IPostBookingSessionPassengers,
  IPostBookingSessionPayments,
  IPostBookingSessionSsrs,
  ICancelBookingPassengerBody,
  IChangeBookingRemoveJourneyBody, //smartport.jsh 일정변경-여정취소 추가
  ISearchChangeFlight,
  IPostEmail,
  IPostPromotionCode,
  IVoucherPaymentRquestParams,
  IVoucherSearchParams,
} from './types';

const prefix = '/booking/v1/booking-areas';

/** 예약 정보 조회 */
export const getBookingSession = () =>
  http.get<void, CommonResp>(`${prefix}/me`);

/** 예약 정보 추가 */
export const postBookingSession = (
  payload: IPostBookingSession,
) =>
  http.post<IPostBookingSession, CommonResp>(
    `${prefix}/me`,
    payload,
  );

/** APG 결제와 함꼐 예약 확정 요청 */
export const postBookingSessionCommitWithApgPayment = (
  payload: IPostBookingSessionCommitWithApgPayment,
) =>
  http.post<
    IPostBookingSessionCommitWithApgPayment,
    CommonResp
  >(`${prefix}/me/commit-with-apg-payment`, payload);

/** APG 결제와 함꼐 예약 확정 요청 */
export const postBookingChangeSessionCommitWithApgPayment = (
  payload: IPostBookingSessionCommitWithApgPayment,
) =>
  http.post<
    IPostBookingSessionCommitWithApgPayment,
    CommonResp
  >(`${prefix}/me/commit-with-apg-payment-change-booking`, payload);

/** 승객 및 연락처 정보 추가 */
export const postBookingSessionContactsAndPassengers = (
  payload: IPostBookingSessionContactsAndPassengers,
) =>
  http.post<
    IPostBookingSessionContactsAndPassengers,
    CommonResp
  >(`${prefix}/me/contacts-and-passengers`, payload);

/** 결제 정보 추가 */
export const postBookingSessionPayments = (
  payload: IPostBookingSessionPayments,
) =>
  http.post<IPostBookingSessionPayments, CommonResp>(
    `${prefix}/me/payments`,
    payload,
  );

/** APG 결제 정보 추가 */
export const postBookingSessionApgPayment = (
  payload: IPostBookingSessionApgPayment,
) =>
  http.post<IPostBookingSessionApgPayment, CommonResp>(
    `${prefix}/me/apg-payments`,
    payload,
  );

/** 현재 예약 초기화 */
export const postBookingSessionReset = () =>
  http.post<void, CommonResp>(`${prefix}/me/reset`);

/** 현재 예약 세션을 15분 연장 */
export const postBookingSessionExtend = () =>
  http.post<void, CommonResp>(`${prefix}/me/extend`);

/** 예약자 연락처 정보 조회 */
export const getBookingSessionContacts = () =>
  http.get<void, CommonResp>(`${prefix}/me/contacts`);

/** 예약자 연락처 정보 추가 */
export const postBookingSessionContacts = (
  payload: IPostBookingSessionContacts,
) =>
  http.post<IPostBookingSessionContacts, CommonResp>(
    `${prefix}/me/contacts`,
    payload,
  );

/** 예약자 연락처 정보 수정 */
export const patchBookingSessionContacts = (
  payload: IPatchBookingSessionContacts,
) =>
  http.patch<IPatchBookingSessionContacts, CommonResp>(
    `${prefix}/me/contacts`,
    payload,
  );

/** 승객 정보 조회 */
export const getBookingSessionPassengers = () =>
  http.get<void, CommonResp>(`${prefix}/me/passengers`);

/** 승객 정보 추가 */
export const postBookingSessionPassengers = (
  payload: IPostBookingSessionPassengers,
) =>
  http.post<IPostBookingSessionPassengers, CommonResp>(
    `${prefix}/me/passengers`,
    payload,
  );

/** 지정 가능한 좌석 조회 */
export const getBookingSessionAvailableSeats = () =>
  http.get<void, CommonResp>(
    `${prefix}/me/available-seats`,
  );

/** 좌석 지정 내역 조회 */
export const getBookingSessionSeats = () =>
  http.get<void, CommonResp>(`${prefix}/me/seats`);

/** 좌석 지정 추가 */
export const postBookingSessionSeats = (
  payload: IPostBookingSessionSeats,
) =>
  http.post<IPostBookingSessionSeats, CommonResp>(
    `${prefix}/me/seats`,
    payload,
  );

/** 좌석 지정 제거 */
export const deleteBookingSessionSeats = (
  data: IPostBookingSessionSeats,
) =>
  http.delete<IPostBookingSessionSeats, CommonResp>(
    `${prefix}/me/seats`,
    {
      data,
    },
  );

/** 신청 가능한 특별서비스요청(SSR) 조회 */
export const getBookingSessionAvailableSsrs = (
  params: IGetBookingSessionAvailableSsrs,
) =>
  http.get<IGetBookingSessionAvailableSsrs, CommonResp>(
    `${prefix}/me/available-ssrs`,
    {
      params,
    },
  );

/** 특별서비스요청(SSR) 내역 조회 */
export const getBookingSessionSsrs = () =>
  http.get<void, CommonResp>(`${prefix}/me/ssrs`);

/** 특별서비스요청(SSR) 추가 */
export const postBookingSessionSsrs = (
  payload: IPostBookingSessionSsrs,
) =>
  http.post<IPostBookingSessionSsrs, CommonResp>(
    `${prefix}/me/ssrs`,
    payload,
  );

/** 특별서비스요청(SSR) 제거 */
export const deleteBookingSessionSsrs = (
  data: IDeleteBookingSessionSsrs,
) =>
  http.delete<IDeleteBookingSessionSsrs, CommonResp>(
    `${prefix}/me/ssrs`,
    { data },
  );

/** 현재 예약 취소 가능한 승객 조회 */
export const getCancelablePassenger = () =>
  http.get<null, CommonResp>(
    `${prefix}/me/cancellation-availability`,
  );

/** 예약 취소할 리스트 전달 */
export const postBookingCancelPrepare = (
  payload: ICancelBookingPassengerBody,
) =>
  http.post<ICancelBookingPassengerBody, CommonResp>(
    `${prefix}/me/cancellation/prepare`,
    payload,
  );

/** 예약 취소 commit (환불 확인) */
export const postBookingCancelCommit = () =>
  http.post<void, CommonResp>(
    `${prefix}/me/cancellation/commit`,
  );


/** 프로모션 코드 확인 */
export const postPromotionCodeValidate = ({
  promotionCode
}: IPostPromotionCode) =>
  http.get<void, CommonResp>( 
    `${prefix}/me/promotions/${promotionCode}/validate`,
  );


/** 바우처 정보 조회 */
export const getVoucherInfo = (params: string) => 
  http.get<void, CommonResp>(
    `${prefix}/me/voucher/search/${params}`,
  );

/** 바우처 결제 정보 추가 */
export const postAddVoucherPayment = (
  payload: IVoucherPaymentRquestParams,
) =>
  http.post<IVoucherPaymentRquestParams, CommonResp>(
    `${prefix}/me/voucher-payments`,
    payload,
  );

/** 바우처 결제 정보 삭제 */
export const deleteVoucherPayment = ({
  referenceCode,
}: IVoucherSearchParams) =>
  http.delete<void, CommonResp>(
    `${prefix}/me/voucher-payments/${referenceCode}`,
  );

/** smartport.jsh 여정 취소 */
export const postBookingRemoveJourney = (
  payload: IChangeBookingRemoveJourneyBody,
) =>
  http.post<IChangeBookingRemoveJourneyBody, CommonResp>(
    `${prefix}/me/remove/journey`,
    payload,
  );

export const getBookingSearchChangeFlight = (
  payload: ISearchChangeFlight,
) =>
  http.post<ISearchChangeFlight, CommonResp>(
    `${prefix}/me/search/changeFlight`,
    payload,
  );

/** 이메일 발송 */
export const postSendEmail = (
    payload: IPostEmail
  ) =>
    http.post<IPostEmail, CommonResp>(
      `/message/v1/send-email`,
      payload,
    );