import { flow, pick, pickBy } from 'lodash/fp';
import http from '../http';
import {
  IDeleteCheckin,
  IGetCheckinStatus,
  IPostCheckin,
  IPostCheckinTravelDocuments,
  IGetBooking,
  IPostSms,
} from './types';
import { CommonResp } from '../config';

/** 체크인 가능한 여정 조회 */
export const getCheckins = () =>
  http.get<void, CommonResp>('/booking/v1/checkin');

/** 비회원 체크인 여정 조회 */
export const getCheckinNonMembers = (payload: IGetBooking) => {
  const params = flow(
    pick(['firstName', 'lastName']),
    pickBy((property: any) => {
      return property != '';
    }),
  )(payload);
  
  return http.get<IPostCheckin, CommonResp>(
    `/booking/v1/checkin/${payload.recordLocator}`,
    { params },
  );
};

/** 체크인 */
export const postCheckin = ({
  recordLocator,
  journeyKey,
  passengers,
  seatAuto,
}: IPostCheckin) =>
  http.post<IPostCheckin, CommonResp>(
    `/booking/v1/checkin/${recordLocator}/journeys/${journeyKey}`,
    { passengers: passengers, seatAuto: seatAuto },
  );

/** 체크인 삭제 */
export const deleteCheckin = ({
  recordLocator,
  journeyKey,
  passengerKeys,
}: IDeleteCheckin) =>
  http.delete<IDeleteCheckin, CommonResp>(
    `/booking/v1/checkin/${recordLocator}/journeys/${journeyKey}`,
    { data: { passengerKeys } },
  );

/** 체크인 상태 조회 */
export const getCheckinStatus = ({
  recordLocator,
  journeyKey,
}: IGetCheckinStatus) =>
  http.get<IGetCheckinStatus, CommonResp>(
    `/booking/v1/checkin/${recordLocator}/journeys/${journeyKey}/status`,
  );

/** 체크인 정보 저장 */
export const postCheckinTravelDocuments = (
  payload: IPostCheckinTravelDocuments,
) =>
  http.post<IPostCheckinTravelDocuments, CommonResp>(
    `/booking/v1/checkin/travel-documents`,
    payload,
  );

  /** 문자 발송 */
  export const postSms = (
    payload: IPostSms
  ) =>
    http.post<IPostSms, CommonResp>(
      `/message/v1/send-sms`,
      payload,
    );