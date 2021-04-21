import { AxiosError } from 'axios';
import {
  createAction,
  createAsyncAction,
} from 'typesafe-actions';

import {
  IItineraryTypeParams,
  IItineraryPlaceParams,
  IDateParams,
  IPassengerParams,
  IStationFilterParams,
  IPassengerUpdateParams,
  IPassengersUpdateData,
  ICountryCodeChangeParams,
  IGenderTypeChangeParams,
  IBookingAgentInfoParams,
  INokChangeParams,
  ISeatInfantNokChangeParams,
  IDiscountCodeChangeParams,
  INationalityParams,
  IKeyChangeParams,
  IRibbonData,
  ILowFaresDataParams,
  IFlightCalendarData,
  IDateParamsForDayjs,
  IRouteTypeParams,
  IBookingChangeItinerary,
} from './types';
import { CommonResp } from '../../../api/config';
import {
  IPostBookingFlightsSearch,
  IPostBookingSession,
  IPostBookingFlightsLowfareCalendar,
  ICancelBookingPassengerBody,
  IChangeBookingRemoveJourneyBody, //smartport.jsh 일정변경-여정 취소 추가
  ISearchChangeFlight,
  IPostPromotionCode,
  IVoucherPaymentRquestParams,
  IVoucherSearchParams,
  IPostEmail,
  IGetFlightSearch,
} from '../../../api/booking/types';

/** 비행 타입 구분 (왕복, 편도) */
export const ITINERARY_TYPE_CHANGE =
  'bookingSession/ITINERARY_TYPE_CHANGE';
export const handleChangeItineraryType = createAction(
  ITINERARY_TYPE_CHANGE,
)<IItineraryTypeParams>();

/** 출발지, 도착지 선택 */
export const ITINERARY_PLACE_CHANGE =
  'bookingSession/ITINERARY_PLACE_CHANGE';
export const handleChangeItineraryPlace = createAction(
  ITINERARY_PLACE_CHANGE,
)<IItineraryPlaceParams>();

/** 여행일 선택 (출발일, 도착일) */
export const DATE_CHANGE = 'bookingSession/DATE_CHANGE';
export const handleChangeDate = createAction(DATE_CHANGE)<
  IDateParams
>();

/** 여행일 선택 (출발일, 도착일) */
export const DATE_CHANGE_MOBILE =
  'bookingSession/DATE_CHANGE_MOBILE';
export const handleChangeMobileDate = createAction(
  DATE_CHANGE_MOBILE,
)<IDateParamsForDayjs>();

/** 여행객 업데이트 */
export const PASSENGERS_CHANGE =
  'bookingSession/PASSENGERS_CHANGE';
export const handleChangePassenger = createAction(
  PASSENGERS_CHANGE,
)<IPassengerParams>();

/** Primary Data Async */
export const PRIMARY_DATA_REQUEST =
  'bookingSession/PRIMARY_DATA_REQUEST';
export const PRIMARY_DATA_SUCCESS =
  'bookingSession/PRIMARY_DATA_SUCCESS';
export const PRIMARY_DATA_FAILURE =
  'bookingSession/PRIMARY_DATA_FAILURE';

export const handlePrimaryDataActions = createAsyncAction(
  PRIMARY_DATA_REQUEST,
  PRIMARY_DATA_SUCCESS,
  PRIMARY_DATA_FAILURE,
)<void, any, AxiosError>();

/** 출발지 or 도착지 수정시 목록 필터 */
export const STATION_LIST_FILTER =
  'bookingSession/STATION_LIST_FILTER';
export const handleStationListFilter = createAction(
  STATION_LIST_FILTER,
)<IStationFilterParams>();

/** 승객 정보 업데이트 */
export const PASSENGER_INFO_UPDATE =
  'bookingSession/PASSENGER_INFO_UPDATE';
export const handlePassengerInfoUpdate = createAction(
  PASSENGER_INFO_UPDATE,
)<IPassengerUpdateParams>();

/** 자신 정보 통합 업데이트 */
export const PASSENGER_ME_INFO_UPDATE =
  'bookingSession/PASSENGER_ME_INFO_UPDATE';
export const handlePassengerMeInfoUpdate = createAction(
  PASSENGER_ME_INFO_UPDATE,
)<IPassengersUpdateData>();

/** CountryCode change */
export const COUNTRY_CODE_CHANGE =
  'bookingSession/COUNTRY_CODE_CHANGE';
export const handleCountryCodeChange = createAction(
  COUNTRY_CODE_CHANGE,
)<ICountryCodeChangeParams>();

/** gender change */
export const GENDER_TYPE_CHANGE =
  'bookingSession/GENDER_TYPE_CHANGE';
export const handleGenderTypeChange = createAction(
  GENDER_TYPE_CHANGE,
)<IGenderTypeChangeParams>();

/** 보호자 change */
export const NOK_CHANGE = 'bookingSession/NOK_CHANGE';
export const handleNokChange = createAction(NOK_CHANGE)<
  INokChangeParams
>();

export const SEAT_INFANT_NOK_CHANGE = 'bookingSession/SEAT_INFANT_NOK_CHANGE';
export const handleSeatInfantNokChange= createAction(SEAT_INFANT_NOK_CHANGE)<
  ISeatInfantNokChangeParams
>();

/** 할인대상 change */
export const DISCOUNTCODE_CHANGE = 'bookingSession/DISCOUNTCODE_CHANGE';
export const handleDiscountCodeChange = createAction(DISCOUNTCODE_CHANGE)<
  IDiscountCodeChangeParams
>();

/** 국적 change */
export const NATIONALITY_CHANGE =
  'bookingSession/NATIONALITY_CHANGE';
export const handleNationalityChange = createAction(
  NATIONALITY_CHANGE,
)<INationalityParams>();

/** 예매자 정보 변경 */
export const BOOKING_AGENT_INFO_CHANGE =
  'bookingSession/BOOKING_AGENT_INFO_CHANGE';
export const handleBookingAgentInfoChange = createAction(
  BOOKING_AGENT_INFO_CHANGE,
)<IBookingAgentInfoParams>();


/** 항공권 출&도착 조회 */
export const FLIGHT_DEP_ARR_SEARCH_REQUEST = 
  'bookingSession/FLIGHT_ARR_DEP_SEARCH_REQUEST';
export const FLIGHT_DEP_ARR_SEARCH_SUCCESS = 
  'bookingSession/FLIGHT_ARR_DEP_SEARCH_SUCCESS';
export const FLIGHT_DEP_ARR_SEARCH_FAILURE = 
  'bookingSession/FLIGHT_ARR_DEP_SEARCH_FAILURE';

export const flightDepArrSearchLoad = createAsyncAction(
  FLIGHT_DEP_ARR_SEARCH_REQUEST,
  FLIGHT_DEP_ARR_SEARCH_SUCCESS,
  FLIGHT_DEP_ARR_SEARCH_FAILURE,
)<IGetFlightSearch, CommonResp, AxiosError>();
 

/** 항공권 조회 */
export const FLIGHT_TICKET_SEARCH_REQUEST =
  'bookingSession/FLIGHT_TICKET_SEARCH_REQUEST';
export const FLIGHT_TICKET_SEARCH_SUCCESS =
  'bookingSession/FLIGHT_TICKET_SEARCH_SUCCESS';
export const FLIGHT_TICKET_SEARCH_FAILURE =
  'bookingSession/FLIGHT_TICKET_SEARCH_FAILURE';

export const flightTicketSearchActions = createAsyncAction(
  FLIGHT_TICKET_SEARCH_REQUEST,
  FLIGHT_TICKET_SEARCH_SUCCESS,
  FLIGHT_TICKET_SEARCH_FAILURE,
)<IPostBookingFlightsSearch, CommonResp, AxiosError>();

/** journeyKey, fareAvailability Key 초기화 */
export const KEY_INIT = 'bookingSession/KEY_INIT';
export const handleTicketKeyInit = createAction(KEY_INIT)<{
  keyIdx?: number;
}>();

/** journeyKey, fareAvailability Key 저장 */
export const KEY_CHANGE = 'bookingSession/KEY_CHANGE';
export const handleTicketKeyChange = createAction(
  KEY_CHANGE,
)<IKeyChangeParams>();

/** ADD Booking Session */
export const ADD_BOOKING_SESSION_REQUEST =
  'bookingSession/ADD_BOOKING_SESSION_REQUEST';
export const ADD_BOOKING_SESSION_SUCCESS =
  'bookingSession/ADD_BOOKING_SESSION_SUCCESS';
export const ADD_BOOKING_SESSION_FAILURE =
  'bookingSession/ADD_BOOKING_SESSION_FAILURE';

export const addBookingSessionActions = createAsyncAction(
  ADD_BOOKING_SESSION_REQUEST,
  ADD_BOOKING_SESSION_SUCCESS,
  ADD_BOOKING_SESSION_FAILURE,
)<IPostBookingSession, CommonResp, AxiosError>();

/** Calendar Data Call */
export const FLIGHT_CALENDAR_LIST_REQUEST =
  'bookingSession/FLIGHT_CALENDAR_LIST_REQUEST';
export const FLIGHT_CALENDAR_LIST_SUCCESS =
  'bookingSession/FLIGHT_CALENDAR_LIST_SUCCESS';
export const FLIGHT_CALENDAR_LIST_FAILURE =
  'bookingSession/FLIGHT_CALENDAR_LIST_FAILURE';
export const handleFlightCalendarListLoadActions = createAsyncAction(
  FLIGHT_CALENDAR_LIST_REQUEST,
  FLIGHT_CALENDAR_LIST_SUCCESS,
  FLIGHT_CALENDAR_LIST_FAILURE,
)<
  IPostBookingFlightsLowfareCalendar,
  IFlightCalendarData[],
  AxiosError
>();

/** 리본데이터 Call */
export const CABIN_CLASS_RIBBON_DATA_REQUEST =
  'bookingSession/CABIN_CLASS_RIBBON_DATA_REQUEST';
export const CABIN_CLASS_RIBBON_DATA_SUCCESS =
  'bookingSession/CABIN_CLASS_RIBBON_DATA_SUCCESS';
export const CABIN_CLASS_RIBBON_DATA_FAILURE =
  'bookingSession/CABIN_CLASS_RIBBON_DATA_FAILURE';
export const handleCabinClassRibbonLoadActions = createAsyncAction(
  CABIN_CLASS_RIBBON_DATA_REQUEST,
  CABIN_CLASS_RIBBON_DATA_SUCCESS,
  CABIN_CLASS_RIBBON_DATA_FAILURE,
)<ILowFaresDataParams, IRibbonData, AxiosError>();

/** 예약 정보 조회(세션) */
export const BOOKING_SESSION_SEARCH_REQUEST =
  'bookingSession/BOOKING_SESSION_SEARCH_REQUEST';
export const BOOKING_SESSION_SEARCH_SUCCESS =
  'bookingSession/BOOKING_SESSION_SEARCH_SUCCESS';
export const BOOKING_SESSION_SEARCH_FAILURE =
  'bookingSession/BOOKING_SESSION_SEARCH_FAILURE';
export const handleBookingSessionSearchActions = createAsyncAction(
  BOOKING_SESSION_SEARCH_REQUEST,
  BOOKING_SESSION_SEARCH_SUCCESS,
  BOOKING_SESSION_SEARCH_FAILURE,
)<void, CommonResp<any>, AxiosError>();

/** 현재 예약 취소 가능한 승객 조회 */
export const BOOKING_CANCELABLE_PASSENGER_REQUEST =
  'bookingSession/BOOKING_CANCELABLE_PASSENGER_REQUEST';
export const BOOKING_CANCELABLE_PASSENGER_SUCCESS =
  'bookingSession/BOOKING_CANCELABLE_PASSENGER_SUCCESS';
export const BOOKING_CANCELABLE_PASSENGER_FAILURE =
  'bookingSession/BOOKING_CANCELABLE_PASSENGER_FAILURE';
export const handleBookingCancelablePassengerActions = createAsyncAction(
  BOOKING_CANCELABLE_PASSENGER_REQUEST,
  BOOKING_CANCELABLE_PASSENGER_SUCCESS,
  BOOKING_CANCELABLE_PASSENGER_FAILURE,
)<void, CommonResp, AxiosError>();

/** 예약 취소할 리스트 전달 (prepare) */
export const BOOING_CANCEL_PASSENGERS_REQUEST =
  'bookingSession/BOOING_CANCEL_PASSENGERS_REQUEST';
export const BOOING_CANCEL_PASSENGERS_SUCCESS =
  'bookingSession/BOOING_CANCEL_PASSENGERS_SUCCESS';
export const BOOING_CANCEL_PASSENGERS_FAILURE =
  'bookingSession/BOOING_CANCEL_PASSENGERS_FAILURE';
export const handleBookingCancelPassengersActions = createAsyncAction(
  BOOING_CANCEL_PASSENGERS_REQUEST,
  BOOING_CANCEL_PASSENGERS_SUCCESS,
  BOOING_CANCEL_PASSENGERS_FAILURE,
)<ICancelBookingPassengerBody, CommonResp, AxiosError>();

/** 예약 취소할 리스트 전달 (commit) */
export const BOOING_CANCEL_COMMIT_PASSENGERS_REQUEST =
  'bookingSession/BOOING_CANCEL_COMMIT_PASSENGERS_REQUEST';
export const BOOING_CANCEL_COMMIT_PASSENGERS_SUCCESS =
  'bookingSession/BOOING_CANCEL_COMMIT_PASSENGERS_SUCCESS';
export const BOOING_CANCEL_COMMIT_PASSENGERS_FAILURE =
  'bookingSession/BOOING_CANCEL_COMMIT_PASSENGERS_FAILURE';
export const handleBookingCancelCommitPassengersActions = createAsyncAction(
  BOOING_CANCEL_COMMIT_PASSENGERS_REQUEST,
  BOOING_CANCEL_COMMIT_PASSENGERS_SUCCESS,
  BOOING_CANCEL_COMMIT_PASSENGERS_FAILURE,
)<void, CommonResp, AxiosError>();

/** smartport.jsh 일정변경-여정취소 추가 */
export const BOOING_CHANGE_REMOVE_JOURNEYS_REQUEST =
  'bookingSession/BOOING_CHANGE_REMOVE_JOURNEYS_REQUEST';
export const BOOING_CHANGE_REMOVE_JOURNEYS_SUCCESS =
  'bookingSession/BOOING_CHANGE_REMOVE_JOURNEYS_SUCCESS';
export const BOOING_CHANGE_REMOVE_JOURNEYS_FAILURE =
  'bookingSession/BOOING_CHANGE_REMOVE_JOURNEYS_FAILURE';
export const handleBookingChangeRemoveJourneyActions = createAsyncAction(
  BOOING_CHANGE_REMOVE_JOURNEYS_REQUEST,
  BOOING_CHANGE_REMOVE_JOURNEYS_SUCCESS,
  BOOING_CHANGE_REMOVE_JOURNEYS_FAILURE,
  )<IChangeBookingRemoveJourneyBody, CommonResp, AxiosError>();

export const SEARCH_CHANGE_FLIGHT_REQUEST =
'bookingSession/SEARCH_CHANGE_FLIGHT_REQUEST';
export const SEARCH_CHANGE_FLIGHT_SUCCESS =
'bookingSession/SEARCH_CHANGE_FLIGHT_SUCCESS';
export const SEARCH_CHANGE_FLIGHT_FAILURE =
'bookingSession/SEARCH_CHANGE_FLIGHT_FAILURE';
export const handleBookingSearchChangeFlight = createAsyncAction(
  SEARCH_CHANGE_FLIGHT_REQUEST,
  SEARCH_CHANGE_FLIGHT_SUCCESS,
  SEARCH_CHANGE_FLIGHT_FAILURE,
)<ISearchChangeFlight, CommonResp, AxiosError>();

//smartport.mhh 
/** 국내/국제 구분 */
export const ROUTE_TYPE_CHANGE =
  'bookingSession/ROUTE_TYPE_CHANGE';
export const handleChangeRouteType = createAction(
  ROUTE_TYPE_CHANGE,
)<IRouteTypeParams>();

/** 프로모션 코드  */
export const PROMOTION_CHANGE =
  'bookingSession/PROMOTION_CHANGE';
export const handleChangePromotionCode = createAction(
  PROMOTION_CHANGE,
)<any>();

/** 프로모션 코드 유효성 검사 */
export const CHECK_PROMOTION_VAILDATION_REQUEST =
  'bookingSession/CHECK_PROMOTION_VAILDATION_REQUEST'; 
export const CHECK_PROMOTION_VAILDATION_SUCCESS =
  'bookingSession/CHECK_PROMOTION_VAILDATION_SUCCESS';
export const CHECK_PROMOTION_VAILDATION_FAILURE =
  'bookingSession/CHECK_PROMOTION_VAILDATION_FAILURE';
export const checkPromotionCodeValidationActions = createAsyncAction(
  CHECK_PROMOTION_VAILDATION_REQUEST,
  CHECK_PROMOTION_VAILDATION_SUCCESS,
  CHECK_PROMOTION_VAILDATION_FAILURE,
)<IPostPromotionCode, CommonResp, AxiosError>();


//smartport.mhh 바우처 추가
/** 바우처 정보  */
export const VOUCHER_INFO_CHANGE =
  'bookingSession/VOUCHER_INFO_CHANGE';
export const handleChangeVoucherInfo = createAction(
  VOUCHER_INFO_CHANGE,
)<any>();

/** 바우처 결제 정보 추가 */
export const ADD_VOUCHER_PAYMENT_REQUEST =
  'bookingSession/ADD_VOUCHER_PAYMENT_REQUEST'; 
export const ADD_VOUCHER_PAYMENT_SUCCESS =
  'bookingSession/ADD_VOUCHER_PAYMENT_SUCCESS';
export const ADD_VOUCHER_PAYMENT_FAILURE =
  'bookingSession/ADD_VOUCHER_PAYMENT_FAILURE';
export const addVoucherPaymentActions = createAsyncAction(
  ADD_VOUCHER_PAYMENT_REQUEST,
  ADD_VOUCHER_PAYMENT_SUCCESS,
  ADD_VOUCHER_PAYMENT_FAILURE,
)<IVoucherPaymentRquestParams, CommonResp, AxiosError>();

/** 바우처 결제 정보 삭제 */
export const DELETE_VOUCHER_PAYMENT_REQUEST =
  'bookingSession/DELETE_VOUCHER_PAYMENT_REQUEST'; 
export const DELETE_VOUCHER_PAYMENT_SUCCESS =
  'bookingSession/DELETE_VOUCHER_PAYMENT_SUCCESS';
export const DELETE_VOUCHER_PAYMENT_FAILURE =
  'bookingSession/DELETE_VOUCHER_PAYMENT_FAILURE';
export const deleteVoucherPaymentActions = createAsyncAction(
  DELETE_VOUCHER_PAYMENT_REQUEST,
  DELETE_VOUCHER_PAYMENT_SUCCESS,
  DELETE_VOUCHER_PAYMENT_FAILURE,
)<IVoucherSearchParams, CommonResp, AxiosError>();

/** 이메일 전송 */
export const SEND_EMAIL_REQUEST =
  'bookingSession/SEND_EMAIL_REQUEST'; 
export const SEND_EMAIL_SUCCESS =
  'bookingSession/SEND_EMAIL_SUCCESS';
export const SEND_EMAIL_FAILURE =
  'bookingSession/SEND_EMAIL_FAILURE';
export const sendEmailActions = createAsyncAction(
  SEND_EMAIL_REQUEST,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAILURE,
)<IPostEmail, CommonResp, AxiosError>();

/** 예약변경 비행 정보 저장 */
export const BOOKING_CHANGE_ITINERARY_CHANGE = 'bookingSession/BOOKING_CHANGE_ITINERARY_CHANGE';
export const handleBookingChangeItinerary = createAction(
  BOOKING_CHANGE_ITINERARY_CHANGE,
)<IBookingChangeItinerary>();

export const RESET_BOOKING_SESSION =
  'bookingSession/RESET_BOOKING_SESSION';
export const handleResetBookingSession = createAction(
  RESET_BOOKING_SESSION,
)<void>();

//smartport.mhh 
/** bookingSession reset */
export const RESET_BOOKING_SESSION_REQUEST =
  'bookingSession/RESET_BOOKING_SESSION_REQUEST';
export const RESET_BOOKING_SESSION_SUCCESS =
  'bookingSession/RESET_BOOKING_SESSION_SUCCESS';
export const RESET_BOOKING_SESSION_FAILURE =
  'bookingSession/RESET_BOOKING_SESSION_FAILURE';
export const resetBookingSessionActions = createAsyncAction(
  RESET_BOOKING_SESSION_REQUEST,
  RESET_BOOKING_SESSION_SUCCESS,
  RESET_BOOKING_SESSION_FAILURE,
)<void, CommonResp, AxiosError>();