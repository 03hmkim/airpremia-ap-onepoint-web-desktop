import http from '../http';
import { CommonResp } from '../config';
import {
  IPostBookingFlightsFaresSearch,
  IPostBookingFlightsLowfareCalendar,
  IPostBookingFlightsLowfareRibbon,
  IPostBookingFlightsSearch,
  IGetFlightSearch,
  IPostFlightSearch,
} from './types';

/** 출도착 조회 */
export const getFlightSearch = (
  payload: IGetFlightSearch) =>
   http.get<IGetFlightSearch, CommonResp>(
     `/booking/v1/lcs/depArr`, { params: payload }
 );

/**출도착 조회 */
//  export const getFlightSearch = (
//   {beginDate}: IGetFlightSearch
//   ) =>{
//     // console.log('api입장2');

//    http.get<IGetFlightSearch, CommonResp>(
//      `/booking/v1/lcs/depArr?beginDate=${beginDate}`
//   );
// };

// export const getFlightSearch = (
//   params : IGetFlightSearch
//   ) =>{
//     console.log('api입장2');
//     console.log("넘어온 파라미터", params);
//     http.get<IGetFlightSearch, CommonResp>(
//       `/booking/v1/lcs/depArr?${params}`
//   );
// };


//  //  `/booking/v1/lcs/depArr`, { params: payload }
//  /** 출도착 조회 */
//  export const getFlightSearch = (
//    beginDate : string
//    // payload: IGetFlightSearch,
//    ) =>{
//      console.log('api입장2');
 
//      console.log("params", beginDate);
//      return http.get<IGetFlightSearch, CommonResp>(
//        `booking/v1/lcs/depArr/${beginDate}`
//    );
//  };

 
 //post 방식 조회
 export const postFlightSearch = (
   payload: IPostFlightSearch,
 ) => {
   return http.post<
     IPostFlightSearch,
     CommonResp
   >('/booking/v1/lcs/depArrSearch', payload);
 }


/** 항공권 조회 */
export const postBookingFlightsSearch = (
  payload: IPostBookingFlightsSearch,
) => {
  return http.post<IPostBookingFlightsSearch, CommonResp>(
    `booking/v1/flights/search`,
    payload,
  );
};

/** 최저가 조회 (리본) */
export const postBookingFlightsLowfareRibbon = (
  payload: IPostBookingFlightsLowfareRibbon,
) => {
  return http.post<
    IPostBookingFlightsLowfareRibbon,
    CommonResp
  >(`booking/v1/flights/lowfare-ribbon`, payload);
};

/** 최저가 조회 (달력) */
export const postBookingFlightsLowfareCalendar = (
  payload: IPostBookingFlightsLowfareCalendar,
) => {
  return http.post<
    IPostBookingFlightsLowfareCalendar,
    CommonResp
  >(`booking/v1/flights/lowfare-calendar`, payload);
};

/** 항공권 상세요금 조회 */
export const postBookingFlightsFaresSearch = (
  payload: IPostBookingFlightsFaresSearch,
) => {
  return http.post<
    IPostBookingFlightsFaresSearch,
    CommonResp
  >(`booking/v1/flights/fares/search`, payload);
};
