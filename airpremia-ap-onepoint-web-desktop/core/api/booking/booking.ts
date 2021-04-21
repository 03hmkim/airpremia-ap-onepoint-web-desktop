import { flow, pick, pickBy } from 'lodash/fp';
import http from '../http';
import { CommonResp } from '@airpremia/core/api/config';
import {
  IGetBooking,
  IGetBookingBoardingPass,
  IChangeBookingPassengerBody, //smartport.jsh 일정변경-예약분리
} from './types';

/** 내 예약목록 조회 */
export const getBookings = () =>
  http.get<void, CommonResp>('/booking/v1/bookings/me');

/** 예약 상세조회 (예약번호, 이름) */
export const getBooking = (payload: IGetBooking) => {
  const params = flow(
    pick(['firstName', 'lastName']),
    pickBy((property: any) => {
      return property != '';
    }),
  )(payload);

  return http.get<IGetBooking, CommonResp>(
    `/booking/v1/bookings/${payload.recordLocator}`,
    { params },
  );
};

/** 탑승권 조회 */
export const getBookingBoardingPass = ({
  recordLocator,
  journeyKey,
}: IGetBookingBoardingPass) => {
  return http.get<IGetBookingBoardingPass, CommonResp>(
    `/booking/v1/bookings/${recordLocator}/journeys/${journeyKey}/boardingPasses`,
  );
};

//smartport.jsh 일정변경-예약분리 승객 정보 전달 Divide Booking
export const postBookingChangeDivide = (
  payload: IChangeBookingPassengerBody,
) =>
  http.post<IChangeBookingPassengerBody, CommonResp>(
    `/booking/v1/booking-areas/me/changelation/devide`,
    payload,
  );