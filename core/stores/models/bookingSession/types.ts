import moment from 'moment';
import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import {
  ICitiesData,
  ICountriesData,
  IStatesData,
  IMarketsData,
  IPassengerData,
  ISsrsData,
  IFlightTicketSearchAvailability,
} from '../../../api/ticket/types';
import { ECurrencyType } from '../../../lib/constant';
import { ICancelablePassenger } from '@airpremia/core/api/booking/types';
import { Dayjs } from 'dayjs';

export enum ECabinClassType {
  EY = 'EY',
  PE = 'PE',
}

export enum ECabinClassFareType {
  BASIC = 'BASIC',
  EVENT = 'EVENT',
  POINT = 'POINT',
  NOREFUND = 'NOREFUND', // 아직 개발안됨 (서버)
}

export enum EPassengerType {
  ADULT = 'adult',
  CHILD = 'child',
  INFANT = 'infant',
  SEAT_INFANT = 'seatInfant',
}

export enum EGenderType {
  MALE = 'Male',
  FEMALE = 'Female',
}


export enum EStationType {
  ORIGIN = 'origin',
  DESTINATION = 'destination',
}

export enum EFlightType {
  OW = 'OneWay',
  RT = 'Round',
}

//smartport.mhh 국내/국제 구분 추가
export enum ERouteType {
  DOM = 'domestic',
  INT = 'international',
}

export interface IItineraryTypeParams {
  itineraryType: EFlightType;
}

export interface IItineraryPlaceParams {
  itineraryPlaceType: EStationType;
  airportCode: string;
}

export interface IDateParamsForDayjs {
  isOneDayTrip?: boolean;
  date: Dayjs | Dayjs[];
}

export interface IDateParams {
  isOneDayTrip?: boolean;
  date: moment.Moment | moment.Moment[];
}

export interface IPassengerParams {
  passengerType: EPassengerType;
  count: number;
}

export interface IPassengers {
  [EPassengerType.ADULT]: number;
  [EPassengerType.CHILD]: number;
  [EPassengerType.INFANT]: number;
  [EPassengerType.SEAT_INFANT]: number;
  [type: string]: any;
}

export interface IStationType {
  origin: string;
  destination: string;
}

export interface IStationFilterParams {
  target: EStationType;
}

export interface IPassengerUpdateParams {
  type: string;
  index: number;
  target: string;
  inputData: IInputData;
  // value: string;
}

export interface IInputData {
  value: string;
  error: boolean;
  msg: string | boolean[] | null;
}

export interface ICountryCodeData {
  countryNumber: number;
  description: string;
}

export interface ICountryCodeChangeParams {
  countryCodeData: ICountryCodeData;
  type: string;
  index: number;
}

export interface INokChangeParams {
  nok: string;
  type: string;
  index: number;
}

export interface ISeatInfantNokChangeParams {
  seatInfantNok: string;
  type: string;
  index: number;
}

export interface IDiscountCodeChangeParams {
  discountCode: string;
  type: string;
  index: number;
}

export interface INationalityParams {
  nationality: string;
  type: string;
  index: number;
}

export interface IPassengersUpdateData {
  firstName: IInputData;
  lastName: IInputData;
  gender: EGenderType | string;
  phoneNumber?: IInputData;
  birthDate?: IInputData;
  customerNumber?: IInputData;
}

export interface IPassengersDetail {
  passengerKey: string;
  firstName: IInputData;
  lastName: IInputData;
  gender: EGenderType | string;
  title?: string; //smartport.mhh
  discountcode?:string
  birth?: IInputData;
  nationality?: string;
  phoneNumber?: IInputData;
  countryCodeData: ICountryCodeData;
  nok?: string; // next of kin 보호자
  seatInfantNok?: string;
}

export interface IGenderTypeChangeParams {
  type: string;
  index: number;
  gender: EGenderType;
}

export interface IPassengersInfomation {
  [EPassengerType.ADULT]: IPassengersDetail[];
  [EPassengerType.CHILD]: IPassengersDetail[];
  [EPassengerType.INFANT]: IPassengersDetail[];
  [type: string]: any;
}

export interface IBookingAgentInfoParams {
  target: string;
  value: IInputData | ICountryCodeData | boolean | string;
}

export interface IBookingAgentInfomation {
  firstName: IInputData;
  lastName: IInputData;
  email: IInputData;
  phoneNumber: IInputData;
  countryCodeData: ICountryCodeData;
  isEUCitizen: null | boolean;
  [type: string]: any;
}

export enum IKeyChangeType {
  JOURNEYKEY,
  FAREAVAILABILITYKEY,
}

export interface IKeyChangeParams {
  key: string;
  type: IKeyChangeType;
  idx: number;
}

export interface IKeyData {
  fareAvailabilityKey: string;
  journeyKey: string;
  [z: string]: any;
}

export interface IRibbonData {
  begin: any[];
  end: any[];
  [prop: string]: any[];
}

export interface IFlightCalendarData {
  origin: string;
  destination: string;
  lowfares: any;
}

export interface ILowFaresDataParams {
  pivotDate?: moment.Moment;
  updatedIdx?: number;
}

/** refund breakdown */
export interface IRefundJourney {
  arrival: Date;
  dateChange: number;
  departure: Date;
  destination: string;
  origin: string;
}

export interface IRefundPassengerCount {
  adult: number;
  child: number;
  infant: number;
  seatInfant: number;
}

export interface IRefundITripTypeText { }

export interface IBookingInfo {
  destination: string;
  destinationText: string;
  journeys: IRefundJourney[];
  origin: string;
  originText: string;
  passengerCount: IRefundPassengerCount;
  recordLocator: string;
  tripType: string;
  tripTypeText: IRefundITripTypeText;
}

export interface IPassenger {
  firstName: string;
  lastName: string;
  passengerKey: string;
  totalAmount: number;
  totalPoints: number;
  type: string;
}

export interface IPassengerBreakdown {
  passengers: IPassenger[];
  totalCollectedAmount: number;
  totalCollectedPoints: number;
}

export interface IRefundBreakdownText { }

export interface IRefundBreakdownFee {
  amount: number;
  code: string;
  points: number;
  text: IRefundBreakdownText;
}

export interface RefundDetail {
  fees: IRefundBreakdownFee[];
  totalRefundAmount: number;
  totalRefundPoints: number;
}

export interface IRefundBreakdown {
  bookingInfo: IBookingInfo;
  currencyCode: string;
  passengerBreakdown: IPassengerBreakdown;
  refundDetail: RefundDetail;
}

export interface IBookingCancelResponseJourney {
  origin: string;
  destination: string;
  departure: string;
  arrival: string;
  departureUtc: string;
  arrivalUtc: string;
  dateChange: number;
  cabinClass: string;
  cabinClassText: string;
  carrierCode: string;
  identifier: number;
}

export interface IBookingCancelResponse {
  recordLocator: string;
  origin: string;
  originText: string;
  destination: string;
  destinationText: string;
  tripType: string;
  tripTypeText: string;
  adultCount: number;
  childCount: number;
  infantCount: number;
  journeys: IBookingCancelResponseJourney[];
  totalRefundedAmount: number;
  totalRefundedPoint: number;
  baseCurrency: string;
}

export interface IBookingSessionState {
  keys: IKeyData[];
  isPrimaryDataRequest: boolean;
  isPrimaryDataSuccess: boolean;
  isLowFaresDataRequest: boolean;
  isFlightTicketRequest: boolean;
  isAddBookingSessionRequest: boolean;
  isAddBookingSessionSuccess: boolean;
  isFlightCalendarDataRequest: boolean;
  isFlightCalendarDataSuccess: boolean;
  isCancelablePassengerRequest: boolean;
  isBookingCancelRequest: boolean;
  isBookingCancelPrepareSuccess: boolean;
  isBookingCancelPrepareFailed: boolean;
  isBookingCancelCommitRequest: boolean;
  isBookingCancelCommitSuccess: boolean;
  isBookingCancelCommitFailed: boolean;
  isBookingChangeRemoveJourneySuccess: boolean;//smartport.jsh 일정변경 - 여정 취소
  isBookingChangeRemoveJourneyFailed: boolean;//smartport.jsh 일정변경 - 여정 취소
  totalPrice: number;
  currencyCode: ECurrencyType | string;
  ribbonData: null | IRibbonData;
  flightCalendarList: null | IFlightCalendarData[];
  itineraryType: EFlightType;
  itinerary: IStationType;
  date: moment.Moment[];
  // @TODO: date와 합칠 필요 있음 (현재 데탑 버전엔 dayjs가 없어 병렬 개발함)
  dateMobile: Dayjs[];
  passengers: IPassengers;
  availability: [] | IFlightTicketSearchAvailability[];
  //smartport.jsh 일정변경 - 여정 리스트
  rebookAvailability: IFlightTicketSearchRebookAvailability;
  markets: [] | IMarketsData[];
  cities: [] | ICitiesData[];
  countries: [] | ICountriesData[];
  states: [] | IStatesData[];
  stations: [] | IStationData[];
  passengerTypes: [] | IPassengerData[];
  ssrs: [] | ISsrsData[];
  fromList: [] | IMarketsData[];
  toList: [] | IMarketsData[];
  passengersInfomation: IPassengersInfomation;
  bookingAgentInfomation: IBookingAgentInfomation;
  interval: number;
  cancelablePassengerList: [] | ICancelablePassenger[];
  refundBreakdown?: IRefundBreakdown;
  refundCompletedResp?: {} | IBookingCancelResponse;

  /** 예약 조회(세션) dataset */
  bookingSession: any; // TODO any delete
  [index: string]: any; // dynamic 변수 선언을 위해 추가함 ex> store[dynamic_variable]

  originCountryCode?: string;
  destinationCountryCode?: string;
  routeType?: ERouteType; //smartport.mhh 국내/국제 구분 추가
  promotionCode?: string; //smartport.mhh 프로모션 코드 추가
  isPromotionCodeVaildationRequest: boolean;
  isPromotionCodeVaildationSuccess: boolean;
  promotionCodeNotVaildType?: string;
  voucherInfo: any; //smartport.mhh 바우처 추가
  isAddVoucherPaymentReqeust: boolean,
  isAddVoucherPaymentSuccess: boolean,
  isDeleteVoucherPaymentReqeust: boolean,
  isDeleteVoucherPaymentSuccess: boolean,
  isSearchChangeFlightRequest: boolean,
  isSearchChangeFlightSuccess: boolean,
  bookingChangeStartDate: moment.Moment | null,
  bookingChangeEndDate: moment.Moment | null,
  isBookingSessionSearchSuccess: boolean,
  isBookingSessionSearchFailure: boolean,
  flightArrDep: IFlightDepArr[];
}


export interface IFlightDepArr {
  leg: string,
  designator: Designator,
}

export interface Designator {
  destination: string,
  origin: string,
  arrival: string,
  departure: string,
}


/** @rebook availability
 * smartport.jsh 일정변경-여정삭제 */
 export interface IFlightTicketSearchRebookAvailability {
  trips: Trip[];
  faresAvailable: any;
  currencyCode: string;
  includeTaxesAndFees: boolean;
}
export interface Trip {
  origin: string;
  destination: string;
  journeysAvailable: JourneyAvailability[];
}
export interface JourneyAvailability {
  flightType: string;
  stops: number;
  designator: TransportationDesignator;
  fares: KeyValuePair_StringGraphType_JourneyFareAvailability;
  journeyKey: string;
  segments: AvailabilitySegment[];
  notForGeneralUser: boolean;
}
export interface KeyValuePair_StringGraphType_JourneyFareAvailability {
  key: string;
  value: JourneyFareAvailability;
}
export interface JourneyFareAvailability {
  availableCount: number
  classOfService: string
  fareAvailabilityKey: string
  fareCode: string
  isSumOfSector: boolean
}
export interface TransportationDesignator {
  destination: string;
  origin: string;
  arrival: string;
  departure: string;
}
export interface AvailabilitySegment {
  isBlocked: boolean;
  isHosted: boolean;
  isChangeOfGauge: boolean;
  designator: TransportationDesignator;
  isSeatmapViewable: boolean;
  segmentKey: string;
  identifier: TransportationIdentifier;
  cabinOfService: string;
  externalIdentifier: TransportationIdentifier;
  changeReasonCode: string;
  segmentType: string;
  international: boolean;
  legs: Leg[];
}
export interface TransportationIdentifier {
  identifier: string;
  carrierCode: string;
  opSuffix: string;
}
export interface Leg {
  legKey: string;
  seatmapReference: string;
  // operationsInfo: OperationsInformation;
  designator: TransportationDesignator;
  legInfo: LegInformation;
  // nests: LegNest[];
  // ssrs: LegSsr[];
}
export interface LegInformation {
  departureTimeUtc: string;
  arrivalTimeUtc: string;
  adjustedCapacity: number;
  arrivalTerminal: string;
  arrivalTimeVariant: number;
  backMoveDays: number;
  capacity: number;
  changeOfDirection: boolean;
  codeShareIndicator: string;
  departureTerminal: string;
  epartureTimeVariant: number;
  equipmentType: string;
  equipmentTypeSuffix: string;
  eTicket: boolean;
  irop: boolean;
  lid: number;
  marketingCode: string;
  marketingOverride: boolean;
  operatedByText: string;
  operatingCarrier: string;
  operatingFlightNumber: string;
  operatingOpSuffix: string;
  outMoveDays: number;
  arrivalTime: string;
  departureTime: string;
  prbcCode: string;
  scheduleServiceType: string;
  sold: number;
  status: string;
  subjectToGovtApproval: boolean;
}
/** smartport.jsh 일정변경-여정삭제 끝 */









export interface IAddBookingSessionValue {
  passengerTypeCode: string;
}

export interface IAddBookingSessionPassengerData {
  key: string;
  value: IAddBookingSessionValue;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface LocationDetails {
  cityCode: string;
  coordinates: Coordinates;
  countryCode: string;
  provinceStateCode: string;
  timeZoneCode: string;
}

export interface IStationData {
  allowed: boolean;
  currencyCode: string;
  inActive: boolean;
  locationDetails: LocationDetails;
  name: string;
  stationCode: string;
}

export type IBookingSessionAction = ActionType<
  typeof actions
>;

//smartport.mhh 국내/국제 구분 추가
export interface IRouteTypeParams {
  routeType: ERouteType;
}

export interface IBookingChangeItinerary {
  itineraryType: EFlightType;
  origin: string;
  destination: string;
  startDate: moment.Moment | null;
  endDate: moment.Moment | null;
}