import { AxiosError } from 'axios';
import {
  createAction,
  createAsyncAction,
} from 'typesafe-actions';
import { ITextInput, IBlurData } from '../auth';
import {
  ICountryCodeDataCollection,
  IDiscountCodeDataCollection,
  ICheckinDataChangeParams,
} from './types';
import {
  IGetBooking,
  IGetBookingBoardingPass,
  IGetCheckinStatus,
  IPostCheckinTravelDocuments,
  IPostCheckin,
  IPostBookingSessionCommitWithApgPayment,
  IChangeBookingPassengerBody, //smartport.jsh 일정변경-예약분리 승객 추가
  IPostSms
} from '../../../api/booking/types';
import { CommonResp } from '../../../api/config';

/** 출발지, 도착지 선택 */
export const JOURNEY_CHANGE = 'booking/JOURNEY_CHANGE';

export const handleBasicDataJourneyChange = createAction(
  JOURNEY_CHANGE,
)();

/** Checkin 에서 사용하는 Input change action */
export const INPUT_DATA_CHANGE =
  'booking/INPUT_DATA_CHANGE';
export const handleInputDataChange = createAction(
  INPUT_DATA_CHANGE,
)<ITextInput>();

/** Checkin 에서 사용하는 Input blur action */
export const INPUT_DATA_BLUR = 'booking/INPUT_DATA_BLUR';
export const handleInputBlur = createAction(
  INPUT_DATA_BLUR,
)<IBlurData>();

/** 체크인 할 예약 내역 리스트 조회 (로그인) */
export const FIND_MY_AVAILABLE_CHECKIN_REQUEST =
  'booking/FIND_MY_AVAILABLE_CHECKIN_REQUEST';
export const FIND_MY_AVAILABLE_CHECKIN_SUCCESS =
  'booking/FIND_MY_AVAILABLE_CHECKIN_SUCCESS';
export const FIND_MY_AVAILABLE_CHECKIN_FAILURE =
  'booking/FIND_MY_AVAILABLE_CHECKIN_FAILURE';

export const handleMyAvailableCheckinLoad = createAsyncAction(
  FIND_MY_AVAILABLE_CHECKIN_REQUEST,
  FIND_MY_AVAILABLE_CHECKIN_SUCCESS,
  FIND_MY_AVAILABLE_CHECKIN_FAILURE,
)<void, CommonResp, AxiosError>();

/** 체크인 할 예약 상세 조회  */
export const FIND_TRIP_REQUEST =
  'booking/FIND_TRIP_REQUEST';
export const FIND_TRIP_SUCCESS =
  'booking/FIND_TRIP_SUCCESS';
export const FIND_TRIP_FAILURE =
  'booking/FIND_TRIP_FAILURE';

export const handleTripFind = createAsyncAction(
  FIND_TRIP_REQUEST,
  FIND_TRIP_SUCCESS,
  FIND_TRIP_FAILURE,
)<IGetBooking, CommonResp, AxiosError>();

/** 탑승권 정보 조회 */
export const BOARDING_PASS_REQUEST =
  'booking/BOARDING_PASS_REQUEST';
export const BOARDING_PASS_SUCCESS =
  'booking/BOARDING_PASS_SUCCESS';
export const BOARDING_PASS_FAILURE =
  'booking/BOARDING_PASS_FAILURE';

export const handleBoardingPassLoad = createAsyncAction(
  BOARDING_PASS_REQUEST,
  BOARDING_PASS_SUCCESS,
  BOARDING_PASS_FAILURE,
)<IGetBookingBoardingPass, CommonResp, AxiosError>();

/** 체크인할 탑승객 정보 조회 */
export const CHECKIN_PASSENGER_INFO_REQUEST =
  'booking/CHECKIN_PASSENGER_INFO_REQUEST';
export const CHECKIN_PASSENGER_INFO_SUCCESS =
  'booking/CHECKIN_PASSENGER_INFO_SUCCESS';
export const CHECKIN_PASSENGER_INFO_FAILURE =
  'booking/CHECKIN_PASSENGER_INFO_FAILURE';

export const handleCheckinPassengerInfoLookup = createAsyncAction(
  CHECKIN_PASSENGER_INFO_REQUEST,
  CHECKIN_PASSENGER_INFO_SUCCESS,
  CHECKIN_PASSENGER_INFO_FAILURE,
)<any, CommonResp<any>, AxiosError>();

/** 국가코드 조회 */
export const COUNTRY_CODE_REQUEST =
  'booking/COUNTRY_CODE_REQUEST';
export const COUNTRY_CODE_SUCCESS =
  'booking/COUNTRY_CODE_SUCCESS';
export const COUNTRY_CODE_FAILURE =
  'booking/COUNTRY_CODE_FAILURE';

export const handleCountryCodeLoad = createAsyncAction(
  COUNTRY_CODE_REQUEST,
  COUNTRY_CODE_SUCCESS,
  COUNTRY_CODE_FAILURE,
)<void, ICountryCodeDataCollection, AxiosError>();

/** 할인코드 조회 */
export const DISCOUNT_CODE_REQUEST =
  'booking/DISCOUNT_CODE_REQUEST';
export const DISCOUNT_CODE_SUCCESS =
  'booking/DISCOUNT_CODE_SUCCESS';
export const DISCOUNT_CODE_FAILURE =
  'booking/DISCOUNT_CODE_FAILURE';

export const handleDiscountCodeLoad = createAsyncAction(
  DISCOUNT_CODE_REQUEST,
  DISCOUNT_CODE_SUCCESS,
  DISCOUNT_CODE_FAILURE,
)<void, IDiscountCodeDataCollection, AxiosError>();

/** 내 예약 내역 조회 */
export const MY_RESERVATION_REQUEST =
  'booking/MY_RESERVATION_REQUEST';
export const MY_RESERVATION_SUCCESS =
  'booking/MY_RESERVATION_SUCCESS';
export const MY_RESERVATION_FAILURE =
  'booking/MY_RESERVATION_FAILURE';

export const handleMyReservationLoad = createAsyncAction(
  MY_RESERVATION_REQUEST,
  MY_RESERVATION_SUCCESS,
  MY_RESERVATION_FAILURE,
)<void, CommonResp, AxiosError>();

/** 체크인 상태 조회 */
export const CHECKIN_STATUS_REQUEST =
  'booking/CHECKIN_STATUS_REQUEST';
export const CHECKIN_STATUS_SUCCESS =
  'booking/CHECKIN_STATUS_SUCCESS';
export const CHECKIN_STATUS_FAILURE =
  'booking/CHECKIN_STATUS_FAILURE';

export const handleCheckinStatusLoad = createAsyncAction(
  CHECKIN_STATUS_REQUEST,
  CHECKIN_STATUS_SUCCESS,
  CHECKIN_STATUS_FAILURE,
)<IGetCheckinStatus, CommonResp, AxiosError>();

/** Checkin 에서 사용하는 Input change action */
export const CHECKIN_DATA_CHANGE =
  'booking/CHECKIN_DATA_CHANGE';
export const handleCheckinDataChange = createAction(
  CHECKIN_DATA_CHANGE,
)<ICheckinDataChangeParams>();

/** 여권 등록 */
export const TRAVEL_DOCUMENT_APPLY_REQUEST =
  'booking/TRAVEL_DOCUMENT_APPLY_REQUEST';
export const TRAVEL_DOCUMENT_APPLY_SUCCESS =
  'booking/TRAVEL_DOCUMENT_APPLY_SUCCESS';
export const TRAVEL_DOCUMENT_APPLY_FAILURE =
  'booking/TRAVEL_DOCUMENT_APPLY_FAILURE';

export const handleTravelDocumentApply = createAsyncAction(
  TRAVEL_DOCUMENT_APPLY_REQUEST,
  TRAVEL_DOCUMENT_APPLY_SUCCESS,
  TRAVEL_DOCUMENT_APPLY_FAILURE,
)<IPostCheckinTravelDocuments, CommonResp, AxiosError>();

/** 체크인 */
export const POST_CHECKIN_REQUEST =
  'booking/POST_CHECKIN_REQUEST';
export const POST_CHECKIN_SUCCESS =
  'booking/POST_CHECKIN_SUCCESS';
export const POST_CHECKIN_FAILURE =
  'booking/POST_CHECKIN_FAILURE';

export const handlePostCheckinLoad = createAsyncAction(
  POST_CHECKIN_REQUEST,
  POST_CHECKIN_SUCCESS,
  POST_CHECKIN_FAILURE,
)<IPostCheckin, CommonResp, AxiosError>();

//smartport.mhh CommitWithApgPayment async
export const POST_COMMIT_WITH_PAYMENT_REQUEST =
  'booking/POST_COMMIT_WITH_PAYMENT_REQUEST';
export const POST_COMMIT_WITH_PAYMENT_SUCCESS =
  'booking/POST_COMMIT_WITH_PAYMENT_SUCCESS';
export const POST_COMMIT_WITH_PAYMENT_FAILURE =
  'booking/POST_COMMIT_WITH_PAYMENT_FAILURE';
export const handleBookingSessionCommitWithApgPaymentActions = createAsyncAction(
  POST_COMMIT_WITH_PAYMENT_REQUEST,
  POST_COMMIT_WITH_PAYMENT_SUCCESS,
  POST_COMMIT_WITH_PAYMENT_FAILURE,
)<IPostBookingSessionCommitWithApgPayment, CommonResp, AxiosError>();

//smartport.jsh 일정 분리 승객 정보 전달 Divide Booking
export const BOOING_CHANGE_DIVIDE_REQUEST =
  'bookingSession/BOOING_CHANGE_DIVIDE_REQUEST';
export const BOOING_CHANGE_DIVIDE_SUCCESS =
  'bookingSession/BOOING_CHANGE_DIVIDE_SUCCESS';
export const BOOING_CHANGE_DIVIDE_FAILURE =
  'bookingSession/BOOING_CHANGE_DIVIDE_FAILURE';
export const handleBookingChangeDivideActions = createAsyncAction(
  BOOING_CHANGE_DIVIDE_REQUEST,
  BOOING_CHANGE_DIVIDE_SUCCESS,
  BOOING_CHANGE_DIVIDE_FAILURE,
)<IChangeBookingPassengerBody, CommonResp, AxiosError>();

export const POST_SMS_REQUEST =
  'booking/POST_SMS_REQUEST';
export const POST_SMS_SUCCESS =
  'booking/POST_SMS_SUCCESS';
export const POST_SMS_FAILURE =
  'booking/POST_SMS_FAILURE';
export const handlePostPassSms = createAsyncAction(
  POST_SMS_REQUEST,
  POST_SMS_SUCCESS,
  POST_SMS_FAILURE,
)<IPostSms, CommonResp, AxiosError>();