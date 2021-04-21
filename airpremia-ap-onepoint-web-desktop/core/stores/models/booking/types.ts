import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import { IInputData } from '../auth';
import { IBookingDetailBooking } from '../../../api/checkin/types';
import { ISsrTrip } from '@airpremia/core/stores/models/ssr';
import { IIdLabel } from '../../../lib/types';

export interface ICountryCodeDataCollection {
  countryCode: ICountryCodeRespCounty;
  countryCodeList: ICountryCodeRespCounty[];
  sortedCountryCodeData: ISortedCountryCodeData;
}

export interface IDiscountCodeDataCollection {
  discountCode: IDiscountCodeResp;
  discountCodeList: IDiscountCodeResp[];
}
export enum ECheckinDataChangeKeys {
  ISSUED_BY_CODE = 'issuedByCode',
  NATIONALITY = 'nationality',
  NUMBER = 'number',
  DATE_OF_BIRTH = 'dateOfBirth',
  EXPIRATION_DATE = 'expirationDate',
  PHONE_NUMBER = 'phoneNumber',
  GENDER = 'gender',
}

export interface ICheckinDataChangeParams {
  idx: number;
  key: ECheckinDataChangeKeys;
  value: string;
}

export interface SeatPassengerLabel extends IIdLabel {
  unitKey: String;
  tripId: String;
}

export interface SeatPassengerState {
  passengers: IIdLabel[];
  seatPassengers: SeatPassengerLabel[];
}

export interface IBookingState {
  isTripRequest: boolean;
  isTripSuccess: boolean;
  isChangeSellProcess: boolean;
  isBookingChangeDivideRequest: boolean; //smartport.jsh 일정변경 - 예약 분리 추가
  isBookingChangeDivideSuccess: boolean; //smartport.jsh 일정변경 - 예약 분리 추가
  isCountryCodeRequest: boolean;
  isDiscountCodeRequest: boolean;
  isPassportRequest: boolean;
  isPassportSuccess: boolean;
  isMyReservationRequest: boolean;
  isMyAvailableCheckinRequest: boolean;
  isMyAvailableCheckinSuccess: boolean;
  isCheckinStatusRequest: boolean;
  isTravelDocumentApplyRequest: boolean;
  isTravelDocumentApplySuccess: boolean;
  isPostCheckinSuccess: boolean;
  firstName: IInputData;
  lastName: IInputData;
  recordLocator: IInputData;
  booking: IBookingDetailBooking | null;
  bookingDetailInfo: IBookingDetailBooking | null;
  boardingPasses: IBoardingPassesData[] | null;
  countryCode: ICountryCodeRespCounty;
  countryCodeList: ICountryCodeRespCounty[];
  discountCode: IDiscountCodeResp;
  discountCodeList: IDiscountCodeResp[];
  sortedCountryCodeData: ISortedCountryCodeData;
  bookings: IFindReservationRespBooking[];
  checkinList: IFindMyAvailableCheckinRespJourney[];
  currentCheckinData?: {
    journeyKey: string;
    passengers: ICheckinStatusPassenger[];
    recordLocator: string;
    journey: ICheckinStatusJourney;
  };
  journeys?: ISsrTrip[];
  passengers: IIdLabel[];
  noSeatPassengers: IIdLabel[];
  seatPassengers: SeatPassengerLabel[];
  [index: string]: any;
  isPostCommitWithApgPaymentRequest: boolean;
}

export interface ICheckinStatusRespTravelDocument {
  documentTypeCode?: string;
  passengerTravelDocumentKey?: string;
  birthCountry?: string;
  issuedByCode?: string;
  name?: ICheckinStatusRespName;
  nationality?: string;
  expirationDate?: string;
  number?: string;
  issuedDate?: string;
  gender?: string;
  dateOfBirth?: string;
  documentTypeText?: string;
}

export interface ICheckinStatusPassenger {
  addressKey: string;
  passengerKey: string;
  phoneNumber: string | null;
  travelDocument: ICheckinStatusRespTravelDocument;
  gender?: string;
  name?: ICheckinStatusRespName;
  passengerTypeCode?: string;
  onlineCheckInStatus?: string;
  failReason?: any;
  failReasonText?: string;
  onlineCheckInStatusText?: string;
}

export interface ICheckinStatusJourney {
  journeyKey: string;
  designator: ICheckinStatusDesignator;
  segments: ICheckinStatusSegment[];
}

export interface ICheckinStatusDesignator {
  origin: string;
  destination: string;
  departure: string;
  arrival: string;
}

export interface ICheckinStatusSegment {
  cabinOfService: string;
  passengerSegment: ICheckinStatusPassengerSegment[];
  segmentKey: string;
  identifier? : ICheckinStatusIdentifier;
}

export interface ICheckinStatusPassengerSegment {
  key: string;
  value: ICheckinStatusPassengerValue;
}

export interface ICheckinStatusIdentifier {
  carrierCode: string;
  identifier: string;
}

export interface ICheckinStatusPassengerValue {
  seats: ICheckinStatusSegmentSeat[];
}

export interface ICheckinStatusSegmentSeat {
  arrivalStation: string;
  compartmentDesignator: string;
  departureStation: string;
  passengerKey: string;
  unitDesignator: string;
  unitKey: string;
}

export interface ICheckinStatusRespName {
  first: string;
  middle?: any;
  last: string;
  title?: any;
  suffix?: any;
}

export interface IFindMyAvailableCheckinRespJourney {
  recordLocator: string;
  journeyKey: string;
  origin: string;
  destination: string;
  departure: string;
  arrival: string;
  dateChange: number;
  firstPassengerName: string;
  passengerCount: number;
  identifier: string;
  originText: string;
  destinationText: string;
}

export interface IFindReservationRespBooking {
  recordLocator: string;
  tripType: string;
  status: string;
  isCanceled: boolean;
  origin: string;
  destination: string;
  bookedDate: string;
  beginDate: string;
  endDate?: string;
  passengerCount: number;
  totalAmount: number;
  totalPoint: number;
  refundedAmount: number;
  refundedPoint: number;
  isCommingSoon: boolean;
  isGroup: boolean;
  baseCurrency: string;
  originText: string;
  destinationText: string;
  statusText: string;
  tripTypeText: string;
}

export interface ICountryCodeRespCounty {
  countryCode: string;
  countryCode3C: string;
  defaultCurrencyCode: string;
  countryText: string;
}

export interface ISortedCountryCodeData {
  [propName: string]: ICountryCodeRespCounty[];
}

export interface IDiscountCodeResp {
  pssCode: string,
  code: string,
  pssType: string,
  description: string
}

export interface IBoardingPassesData {
  origin: string;
  destination: string;
  arrival: string;
  departure: string;
  dateChange: number;
  name: {
    first: string;
    middle?: any;
    last: string;
    title?: any;
    suffix?: any;
  };
  flightDateTime: string;
  boardingTerminal?: any;
  boardingGate?: any;
  identifier: string;
  seat: string;
  barCode: string;
  originText: string;
  destinationText: string;
}

export type IBookingAction = ActionType<typeof actions>;
