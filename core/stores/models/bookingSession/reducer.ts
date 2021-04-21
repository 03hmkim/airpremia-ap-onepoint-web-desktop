import { createReducer } from 'typesafe-actions';
import moment from 'moment';
import produce from 'immer';
import { mapKeys } from 'lodash';
import {
  ITINERARY_TYPE_CHANGE,
  ITINERARY_PLACE_CHANGE,
  DATE_CHANGE,
  PASSENGERS_CHANGE,
  PRIMARY_DATA_REQUEST,
  PRIMARY_DATA_SUCCESS,
  PRIMARY_DATA_FAILURE,
  FLIGHT_TICKET_SEARCH_REQUEST,
  FLIGHT_TICKET_SEARCH_SUCCESS,
  FLIGHT_TICKET_SEARCH_FAILURE,
  STATION_LIST_FILTER,
  PASSENGER_INFO_UPDATE,
  PASSENGER_ME_INFO_UPDATE,
  COUNTRY_CODE_CHANGE,
  NATIONALITY_CHANGE,
  DISCOUNTCODE_CHANGE,
  GENDER_TYPE_CHANGE,
  BOOKING_AGENT_INFO_CHANGE,
  NOK_CHANGE,
  SEAT_INFANT_NOK_CHANGE,
  KEY_INIT,
  KEY_CHANGE,
  ADD_BOOKING_SESSION_REQUEST,
  ADD_BOOKING_SESSION_SUCCESS,
  ADD_BOOKING_SESSION_FAILURE,
  BOOKING_SESSION_SEARCH_REQUEST,
  BOOKING_SESSION_SEARCH_SUCCESS,
  BOOKING_SESSION_SEARCH_FAILURE,
  CABIN_CLASS_RIBBON_DATA_REQUEST,
  CABIN_CLASS_RIBBON_DATA_SUCCESS,
  CABIN_CLASS_RIBBON_DATA_FAILURE,
  FLIGHT_CALENDAR_LIST_REQUEST,
  FLIGHT_CALENDAR_LIST_SUCCESS,
  FLIGHT_CALENDAR_LIST_FAILURE,
  BOOKING_CANCELABLE_PASSENGER_REQUEST,
  BOOKING_CANCELABLE_PASSENGER_SUCCESS,
  BOOKING_CANCELABLE_PASSENGER_FAILURE,
  BOOING_CANCEL_PASSENGERS_REQUEST,
  BOOING_CANCEL_PASSENGERS_SUCCESS,
  BOOING_CANCEL_PASSENGERS_FAILURE,
  BOOING_CANCEL_COMMIT_PASSENGERS_REQUEST,
  BOOING_CANCEL_COMMIT_PASSENGERS_SUCCESS,
  BOOING_CANCEL_COMMIT_PASSENGERS_FAILURE,
  BOOING_CHANGE_REMOVE_JOURNEYS_REQUEST, //smartport.jsh 여정 삭제 추가
  BOOING_CHANGE_REMOVE_JOURNEYS_SUCCESS, //smartport.jsh 여정 삭제 추가
  BOOING_CHANGE_REMOVE_JOURNEYS_FAILURE, //smartport.jsh 여정 삭제 추가
  SEARCH_CHANGE_FLIGHT_REQUEST,
  SEARCH_CHANGE_FLIGHT_SUCCESS,
  SEARCH_CHANGE_FLIGHT_FAILURE,
  DATE_CHANGE_MOBILE,
  ROUTE_TYPE_CHANGE, //smartport.mhh 국내/국제 구분 추가
  PROMOTION_CHANGE, //smartport.mhh 프로모션 코드 추가
  CHECK_PROMOTION_VAILDATION_REQUEST,
  CHECK_PROMOTION_VAILDATION_SUCCESS,
  CHECK_PROMOTION_VAILDATION_FAILURE,
  ADD_VOUCHER_PAYMENT_REQUEST, //smartport.mhh 바우처 추가
  ADD_VOUCHER_PAYMENT_SUCCESS,
  ADD_VOUCHER_PAYMENT_FAILURE,
  VOUCHER_INFO_CHANGE,
  DELETE_VOUCHER_PAYMENT_REQUEST,
  DELETE_VOUCHER_PAYMENT_SUCCESS,
  DELETE_VOUCHER_PAYMENT_FAILURE,
  BOOKING_CHANGE_ITINERARY_CHANGE,
  RESET_BOOKING_SESSION_SUCCESS,
  RESET_BOOKING_SESSION,
  FLIGHT_DEP_ARR_SEARCH_REQUEST,
  FLIGHT_DEP_ARR_SEARCH_SUCCESS,
  FLIGHT_DEP_ARR_SEARCH_FAILURE,
} from './actions';
import {
  IKeyData,
  IBookingSessionState,
  IBookingSessionAction,
  EFlightType,
  EStationType,
  EPassengerType,
  IInputData,
  ICountryCodeData,
  IBookingAgentInfomation,
  IKeyChangeType,
  IPassengersInfomation,
} from './types';
import {
  filterStationList,
  isIncludedStationInList,
  getInitalMarketList,
  getBookingSessionPassengerData,
} from '../../../lib/booking';
import { ECurrencyType } from '../../../lib/constant';

const initialData: IInputData = {
  value: '',
  error: false,
  msg: '',
};

export const initialCountryCode: ICountryCodeData = {
  countryNumber: 82,
  description: '대한민국 (+82)',
};

const passengersData = {
  [EPassengerType.ADULT]: 1,
  [EPassengerType.CHILD]: 0,
  [EPassengerType.INFANT]: 0,
  [EPassengerType.SEAT_INFANT]: 0,
};

const passengersInfomationData: IPassengersInfomation = {
  [EPassengerType.ADULT]: [],
  [EPassengerType.CHILD]: [],
  [EPassengerType.INFANT]: [],
  [EPassengerType.SEAT_INFANT]: [],
};

const bookingAgentInfomationData: IBookingAgentInfomation = {
  firstName: initialData,
  lastName: initialData,
  email: initialData,
  phoneNumber: initialData,
  countryCodeData: initialCountryCode,
  isEUCitizen: null,
};
//icn 삭제
const itineraryData = {
  origin: '',
  destination: '',
};

const keyData = {
  fareAvailabilityKey: '',
  journeyKey: '',
};

const keyDataList: IKeyData[] = [keyData];

const initialState: IBookingSessionState = {
  keys: keyDataList,
  isPrimaryDataRequest: false,
  isPrimaryDataSuccess: false,
  isLowFaresDataRequest: false,
  isFlightTicketRequest: false,
  isAddBookingSessionRequest: false,
  isAddBookingSessionSuccess: false,
  isRibbonDataRequest: false,
  isFlightCalendarDataRequest: false,
  isFlightCalendarDataSuccess: false,
  isCancelablePassengerRequest: false,
  isBookingCancelRequest: false,
  isBookingCancelPrepareSuccess: false,
  isBookingCancelPrepareFailed: false,
  isBookingCancelCommitRequest: false,
  isBookingCancelCommitSuccess: false,
  isBookingCancelCommitFailed: false,
  isBookingChangeRemoveJourneySuccess: false,//smartport.jsh 일정변경 - 여정 취소 추가
  isBookingChangeRemoveJourneyFailed: false,//smartport.jsh 일정변경 - 여정 취소 추가
  currencyCode: ECurrencyType.KRW,
  itineraryType: EFlightType.RT,
  totalPrice: 0,
  rebookAvailability: {
    trips: [],
    faresAvailable: {},
    currencyCode: '',
    includeTaxesAndFees: false},//smartport.jsh 일정변경 - 여정 리스트
  itinerary: itineraryData,
  date: [],
  dateMobile: [],
  passengers: passengersData,
  passengersInfomation: passengersInfomationData,
  bookingAgentInfomation: bookingAgentInfomationData,
  ribbonData: null,
  flightCalendarList: null,
  availability: [],
  markets: [],
  cities: [],
  countries: [],
  states: [],
  stations: [],
  passengerTypes: [],
  ssrs: [],
  fromList: [],
  toList: [],
  interval: 0,
  cancelablePassengerList: [],
  bookingSession: {},
  refundCompletedResp: {},
  routeType: undefined, //smartport.mhh 국내/국제 구분 추가
  originCountryCode: '',
  destinationCountryCode: '',
  promotionCode: undefined, //smartport.mhh 프로모션 코드 추가
  isPromotionCodeVaildationRequest: false,
  isPromotionCodeVaildationSuccess: false,
  promotionCodeNotVaildType: undefined,
  voucherInfo: {}, //smartport.mhh 바우처 추가
  isAddVoucherPaymentReqeust: false,
  isAddVoucherPaymentSuccess: false,
  isDeleteVoucherPaymentReqeust: false,
  isDeleteVoucherPaymentSuccess: false,
  isSearchChangeFlightRequest: false,
  isSearchChangeFlightSuccess: false,
  bookingChangeStartDate: null,
  bookingChangeEndDate: null,
  isBookingSessionSearchSuccess: false,
  isBookingSessionSearchFailure: false,
  isFlightArrDepRequest: false,
  isFlightArrDepSuccess: false,
  flightArrDep: [],
};



const ticket = createReducer<
  IBookingSessionState,
  IBookingSessionAction
>(initialState, {
  [ITINERARY_TYPE_CHANGE]: (state, { payload }) =>
    produce(state, (draft) => {
      const { itineraryType } = payload;
      draft.itineraryType = itineraryType;
    }),

  [ITINERARY_PLACE_CHANGE]: (state, { payload }) =>
    produce(state, (draft) => {
      const { stations } = state;
      const { itineraryPlaceType, airportCode } = payload;

      if (itineraryPlaceType === 'origin') {
        draft.itinerary.origin = airportCode;
        draft.currencyCode =
          stations.find(
            (item) => item.stationCode === airportCode,
          )?.currencyCode || ECurrencyType.KRW;
		
        //smartport.mhh countryCode 추가
        draft.originCountryCode = stations.find(
          (item) => item.stationCode === airportCode,
        )?.locationDetails.countryCode;

      } else if (itineraryPlaceType === 'destination') {
        draft.itinerary.destination = airportCode;

        //smartport.mhh countryCode 추가
        draft.destinationCountryCode = stations.find(
          (item) => item.stationCode === airportCode,
        )?.locationDetails.countryCode;
      }
    }),

  [DATE_CHANGE]: (state, { payload }) =>
    produce(state, (draft) => {
      const { date } = state;
      const { isOneDayTrip, date: newDate } = payload;
      // @TODO: REFACTORING: isOneDayTrip -> itineraryType으로 대체 할수 있지않을까?
      if (Array.isArray(newDate)) {
        draft.date = newDate;
      } else {
        let _date = [...date];

        if (isOneDayTrip) {
          draft.date = [newDate];
        } else {
          if (!_date.length) _date.push(newDate);
          else if (_date.length === 1) {
            if (newDate < _date[0]) {
              _date = [];
            }
            _date.push(newDate);
          } else if (_date.length === 2) {
            _date = [];
            _date.push(newDate);
          }

          draft.date = _date;
        }
      }
    }),

  [DATE_CHANGE_MOBILE]: (state, { payload }) =>
    produce(state, (draft) => {
      const { dateMobile } = state;
      const { isOneDayTrip, date: newDate } = payload;
      // @TODO: REFACTORING: isOneDayTrip -> itineraryType으로 대체 할수 있지않을까?
      if (Array.isArray(newDate)) {
        draft.dateMobile = newDate;
      } else {
        let _date = [...dateMobile];

        if (isOneDayTrip) {
          draft.dateMobile = [newDate];
        } else {
          if (!_date.length) _date.push(newDate);
          else if (_date.length === 1) {
            if (newDate < _date[0]) {
              _date = [];
            }
            _date.push(newDate);
          } else if (_date.length === 2) {
            _date = [];
            _date.push(newDate);
          }

          draft.dateMobile = _date;
        }
      }
    }),

  [PASSENGERS_CHANGE]: (state, { payload }) =>
    produce(state, (draft) => {
      const { passengerType, count } = payload;
      draft.passengers[passengerType] = count;
    }),

  [PRIMARY_DATA_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isPrimaryDataRequest = true;
      draft.isPrimaryDataSuccess = false;
    }),

  [PRIMARY_DATA_SUCCESS]: (state, { payload }) =>
    produce(state, (draft) => {
      mapKeys(payload.data, (data, key) => {
        draft[key] = data;
      });
      draft.isPrimaryDataRequest = false;
      draft.isPrimaryDataSuccess = true;
    }),

  [PRIMARY_DATA_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isPrimaryDataRequest = false;
      draft.isPrimaryDataSuccess = false;
    }),

  
    [FLIGHT_DEP_ARR_SEARCH_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isFlightArrDepRequest = true;
      draft.isFlightArrDepSuccess = false;
    }),
    [FLIGHT_DEP_ARR_SEARCH_SUCCESS]: (state, { payload }) =>
      produce(state, (draft) => {
        const { data } = payload
        draft.isFlightArrDepRequest = false;
        draft.isFlightArrDepSuccess = true;
        draft.flightArrDep = data;
      }),
    [FLIGHT_DEP_ARR_SEARCH_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.isPassportRequest = false;
        draft.isPassportSuccess = false;
      }),
  

  [FLIGHT_TICKET_SEARCH_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isFlightTicketRequest = true;
    }),
  [FLIGHT_TICKET_SEARCH_SUCCESS]: (state, { payload }) =>
    produce(state, (draft) => {
      const { availability } = payload.data;
      const { date, interval } = state;
      draft.isFlightTicketRequest = false;
      draft.availability = availability;

      if (!interval && date[1]) {
        draft.interval = moment
          .duration(date[1].diff(date[0]))
          .asDays();
      }
    }),
  [FLIGHT_TICKET_SEARCH_FAILURE]: (state) =>
    produce(state, (draft) => {
      console.error('FLIGHT_TICKET_SEARCH_FAILURE');
      draft.isFlightTicketRequest = false;
    }),

  [STATION_LIST_FILTER]: (state, { payload }) =>
    produce(state, (draft) => {
      const {
        markets,
        itinerary: { origin, destination },
      } = state;
      const { target } = payload;
      const { ORIGIN } = EStationType;
      const isOriginClicked = target === ORIGIN;

      if (!origin && !destination) {
        if (isOriginClicked) {
          draft.fromList = getInitalMarketList(
            'from',
            markets,
          );
          // draft.fromList = [];
        } else {
          draft.toList = getInitalMarketList('to', markets);
        }
      } else if (isOriginClicked) {
        draft.fromList = getInitalMarketList(
          'from',
          markets,
        );
        // const fromList = filterStationList(
        //   markets,
        //   'to',
        //   destination,
        // );
        // // @TODO: isIncluded는 테스트 해보고 빼기.
        // const isIncluded = isIncludedStationInList(
        //   fromList,
        //   'to',
        //   destination,
        // );
        // console.log(isIncluded);
        // draft.fromList = fromList;
        // draft.itinerary.destination = isIncluded
        //   ? state.itinerary.destination
        //   : '';
      } else if (!isOriginClicked) {
        const toList = filterStationList(
          markets,
          'from',
          origin,
        );
        const isIncluded = isIncludedStationInList(
          toList,
          'from',
          origin,
        );
        draft.toList = toList;
        draft.itinerary.origin = isIncluded
          ? state.itinerary.origin
          : '';
      }
    }),

  [PASSENGER_INFO_UPDATE]: (state, { payload }) =>
    produce(state, (draft) => {
      const { type, index, target, inputData } = payload;

      const passengerData =
        state.passengersInfomation[type][index];

      if (
        !passengerData ||
        !passengerData?.hasOwnProperty('countryCodeData')
      ) {
        draft.passengersInfomation[type][index] = {
          countryCodeData: initialCountryCode,
          [target]: inputData,
        };
      } else {
        draft.passengersInfomation[type][index] = {
          ...passengerData,
          [target]: inputData,
        };
      }
    }),

  [PASSENGER_ME_INFO_UPDATE]: (state, { payload }) =>
    produce(state, (draft) => {
      draft.passengersInfomation.adult[0] = {
        ...payload,
        passengerKey:
          state.passengersInfomation.adult[0].passengerKey,
        countryCodeData: initialCountryCode,
      };
    }),

  [COUNTRY_CODE_CHANGE]: (state, { payload }) =>
    produce(state, (draft) => {
      const { countryCodeData, type, index } = payload;
      const passengerData =
        state.passengersInfomation[type][index];

      draft.passengersInfomation[type][index] = {
        ...passengerData,
        countryCodeData,
      };
    }),

  [NATIONALITY_CHANGE]: (state, { payload }) =>
    produce(state, (draft) => {
      const { nationality, type, index } = payload;
      const passengerData =
        state.passengersInfomation[type][index];

      draft.passengersInfomation[type][index] = {
        ...passengerData,
        nationality,
      };
    }),

  [DISCOUNTCODE_CHANGE]: (state, { payload }) =>
    produce(state, (draft) => {
      const { discountCode, type, index } = payload;
      const passengerData =
        state.passengersInfomation[type][index];

      draft.passengersInfomation[type][index] = {
        ...passengerData,
        discountCode,
      };
    }),
  [GENDER_TYPE_CHANGE]: (state, { payload }) =>
    produce(state, (draft) => {
      const { type, index, gender } = payload;
      const passengerData =
        state.passengersInfomation[type][index];

      draft.passengersInfomation[type][index] = {
        ...passengerData,
        gender,
      };
    }),

  [BOOKING_AGENT_INFO_CHANGE]: (state, { payload }) =>
    produce(state, (draft) => {
      const { target, value } = payload;
      draft.bookingAgentInfomation[target] = value;
    }),

  [NOK_CHANGE]: (state, { payload }) =>
    produce(state, (draft) => {
      const { type, index, nok } = payload;
      const passengerData =
        state.passengersInfomation[type][index];

      draft.passengersInfomation[type][index] = {
        ...passengerData,
        nok,
      };
    }),

  [SEAT_INFANT_NOK_CHANGE]: (state, { payload }) =>
    produce(state, (draft) => {
      const { type, index, seatInfantNok } = payload;
      const passengerData =
        state.passengersInfomation[type][index];
      draft.passengersInfomation[type][index] = {
        ...passengerData,
        seatInfantNok,
      };
    }),

  [KEY_INIT]: (state, { payload }) =>
    produce(state, (draft) => {
      if (
        payload.keyIdx !== undefined &&
        typeof payload.keyIdx === 'number'
      ) {
        draft.keys[payload.keyIdx] = keyData;
      } else {
        draft.keys = keyDataList;
      }
    }),

  [KEY_CHANGE]: (state, { payload }) =>
    produce(state, (draft) => {
      const { key, idx, type } = payload;
      let journeyKey = '';
      let fareAvailabilityKey = '';

      if (type === IKeyChangeType.JOURNEYKEY) {
        journeyKey = key;
        fareAvailabilityKey = '';
      } else {
        journeyKey = draft.keys[idx].journeyKey;
        fareAvailabilityKey = key;
      }
      draft.keys[idx] = {
        journeyKey,
        fareAvailabilityKey,
      };
    }),

  [ADD_BOOKING_SESSION_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isAddBookingSessionRequest = true;
    }),

  [ADD_BOOKING_SESSION_SUCCESS]: (state, { payload }) =>
    produce(state, (draft) => {
      const { passengers } = payload.data;
      const { passengers: passengersCount } = state;
      const newPassengerInfo = getBookingSessionPassengerData(
        passengers,
        initialCountryCode,
        passengersCount,
      );

      draft.passengersInfomation = {
        ...state.passengersInfomation,
        ...newPassengerInfo,
      };
      draft.isAddBookingSessionRequest = false;
      draft.isAddBookingSessionSuccess = true;
    }),

  [ADD_BOOKING_SESSION_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isAddBookingSessionRequest = false;
    }),

  [BOOKING_SESSION_SEARCH_REQUEST]: (state) =>
    produce(state, (draft) => {
      console.log('BOOKING_SESSION_SEARCH_REQUEST');
      draft.isBookingSessionSearchSuccess = false;
      draft.isBookingSessionSearchFailure = false;
    }),
  [BOOKING_SESSION_SEARCH_SUCCESS]: (state, { payload }) =>
    produce(state, (draft) => {
      draft.bookingSession = payload.data;
      draft.isBookingSessionSearchSuccess = true;
    }),
  [BOOKING_SESSION_SEARCH_FAILURE]: (state) =>
    produce(state, (draft) => {
      console.error('BOOKING_SESSION_SEARCH_FAILURE');
      draft.isBookingSessionSearchFailure = true;
    }),

  [CABIN_CLASS_RIBBON_DATA_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isRibbonDataRequest = true;
    }),
  [CABIN_CLASS_RIBBON_DATA_SUCCESS]: (state, { payload }) =>
    produce(state, (draft) => {
      draft.isRibbonDataRequest = false;
      draft.ribbonData = payload;
    }),
  [CABIN_CLASS_RIBBON_DATA_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isRibbonDataRequest = false;
    }),

  [FLIGHT_CALENDAR_LIST_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isFlightCalendarDataRequest = true;
      draft.isFlightCalendarDataSuccess = false;
    }),

  [FLIGHT_CALENDAR_LIST_SUCCESS]: (state, { payload }) =>
    produce(state, (draft) => {
      draft.isFlightCalendarDataRequest = false;
      draft.isFlightCalendarDataSuccess = true;
      draft.flightCalendarList = payload;
    }),

  [FLIGHT_CALENDAR_LIST_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isFlightCalendarDataRequest = false;
      draft.isFlightCalendarDataSuccess = false;
    }),

  [BOOKING_CANCELABLE_PASSENGER_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isCancelablePassengerRequest = true;
    }),

  [BOOKING_CANCELABLE_PASSENGER_SUCCESS]: (
    state,
    { payload },
  ) =>
    produce(state, (draft) => {
      draft.isCancelablePassengerRequest = false;
      draft.cancelablePassengerList =
        payload.data.passengers;
    }),

  [BOOKING_CANCELABLE_PASSENGER_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isCancelablePassengerRequest = false;
    }),

  [BOOING_CANCEL_PASSENGERS_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isBookingCancelRequest = true;
      draft.isBookingCancelPrepareSuccess = false;
      draft.isBookingCancelPrepareFailed = false;
    }),

  [BOOING_CANCEL_PASSENGERS_SUCCESS]: (
    state,
    { payload },
  ) =>
    produce(state, (draft) => {
      draft.isBookingCancelRequest = false;
      draft.isBookingCancelPrepareSuccess = true;
      draft.isBookingCancelPrepareFailed = false;
      draft.refundBreakdown = payload.data.refundBreakdown;
    }),

  [BOOING_CANCEL_PASSENGERS_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isBookingCancelRequest = false;
      draft.isBookingCancelPrepareSuccess = false;
      draft.isBookingCancelPrepareFailed = true;
    }),

  //smartport.jsh 여정 취소 추가
  [BOOING_CHANGE_REMOVE_JOURNEYS_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isBookingChangeRemoveJourneyRequest = true;
      draft.isBookingChangeRemoveJourneySuccess = false;
      draft.isBookingChangeRemoveJourneyFailed = false;
    }),
  //smartport.jsh 여정 취소 추가
  [BOOING_CHANGE_REMOVE_JOURNEYS_SUCCESS]: (
    state,
    { payload },
  ) =>
  produce(state, (draft) => {
    /* console.log("1", payload.data)
    const { 
      trips, 
      faresAvailable, 
      currencyCode, 
      includeTaxesAndFees } = payload.data;
    console.log("2", trips)
    console.log("2", faresAvailable)
    console.log("2", currencyCode)
    console.log("2", includeTaxesAndFees)
    const { date, interval } = state;
    draft.isBookingChangeRemoveJourneyRequest = false;
    draft.isBookingChangeRemoveJourneySuccess = true;
    
    draft.rebookAvailability.trips = trips;
    draft.rebookAvailability.faresAvailable = faresAvailable;
    draft.rebookAvailability.currencyCode = currencyCode;
    draft.rebookAvailability.includeTaxesAndFees = includeTaxesAndFees;
    */

    const { availability } = payload.data;
    const { date, interval } = state;
    draft.isBookingChangeRemoveJourneyRequest = false;
    draft.isBookingChangeRemoveJourneySuccess = true;
    draft.isBookingChangeRemoveJourneyFailed = false;
    draft.availability = availability;
    if (!interval && date[1]) {
      draft.interval = moment
        .duration(date[1].diff(date[0]))
        .asDays();
    }
  }),

  //smartport.jsh 여정 취소 추가
  [BOOING_CHANGE_REMOVE_JOURNEYS_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isBookingChangeRemoveJourneyRequest = false;
      draft.isBookingChangeRemoveJourneySuccess = false;
      draft.isBookingChangeRemoveJourneyFailed = true;
    }),
  [SEARCH_CHANGE_FLIGHT_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isSearchChangeFlightRequest = true;
      draft.isSearchChangeFlightSuccess = false;
    }),
  [SEARCH_CHANGE_FLIGHT_SUCCESS]: (state, { payload }) =>
    produce(state, (draft) => {
      
    const { availability } = payload.data;
    const { date, interval } = state;
    draft.isSearchChangeFlightRequest = false;
    draft.isSearchChangeFlightSuccess = true;
    draft.availability = availability;
    if (!interval && date[1]) {
      draft.interval = moment
        .duration(date[1].diff(date[0]))
        .asDays();
    }
    }),
  [SEARCH_CHANGE_FLIGHT_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isSearchChangeFlightRequest = false;
      draft.isSearchChangeFlightSuccess = false;
    }),
  [BOOING_CANCEL_COMMIT_PASSENGERS_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isBookingCancelCommitRequest = true;
      draft.isBookingCancelCommitSuccess = false;
      draft.isBookingCancelCommitFailed = false;
    }),

  [BOOING_CANCEL_COMMIT_PASSENGERS_SUCCESS]: (
    state,
    { payload },
  ) =>
    produce(state, (draft) => {
      draft.isBookingCancelCommitRequest = false;
      draft.isBookingCancelCommitSuccess = true;
      draft.isBookingCancelCommitFailed = false;
      draft.refundCompletedResp =
        payload.data.bookingCancelResponse;
    }),

  [BOOING_CANCEL_COMMIT_PASSENGERS_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isBookingCancelCommitRequest = false;
      draft.isBookingCancelCommitSuccess = false;
      draft.isBookingCancelCommitFailed = true;
    }),

  //smartport.mhh 국내/국제 구분 추가
  [ROUTE_TYPE_CHANGE]: (state, { payload }) => 
    produce(state, (draft) => {
      const { routeType } = payload;
      draft.routeType = routeType;
    }),

  //smartport.mhh 프로모션 코드 추가
  [PROMOTION_CHANGE]: (state, { payload }) => 
    produce(state, (draft) => {
      const { promotionCode } = payload;
      draft.promotionCode = promotionCode;
    }),

  [CHECK_PROMOTION_VAILDATION_REQUEST]: (state, { payload }) => 
    produce(state, (draft) => {

      draft.promotionCode = payload.promotionCode;
      draft.isPromotionCodeVaildationRequest = true;
      draft.isPromotionCodeVaildationSuccess = false;
      draft.promotionCodeNotVaildType = undefined;
    }),
  [CHECK_PROMOTION_VAILDATION_SUCCESS]: (state, { payload }) =>
    produce(state, (draft) => {
      const { data, messages } = payload.data;
      const isValid = data.isValid;

      draft.isPromotionCodeVaildationRequest = false;
      if (isValid) {
        draft.isPromotionCodeVaildationSuccess = true;
      } else {
        draft.promotionCode = undefined;
        draft.isPromotionCodeVaildationSuccess = false;
        draft.promotionCodeNotVaildType = messages[0]?.type;
      }
    }),
  [CHECK_PROMOTION_VAILDATION_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.promotionCode = undefined;
      draft.isPromotionCodeVaildationRequest = false;
      draft.isPromotionCodeVaildationSuccess = false;
      draft.promotionCodeNotVaildType = undefined;
    }),
    
  //smartport.mhh 바우처 추가
  [VOUCHER_INFO_CHANGE]: (state, { payload }) => 
    produce(state, (draft) => {
      draft.voucherInfo = payload
    }),

  [ADD_VOUCHER_PAYMENT_REQUEST]: (state) => 
    produce(state, (draft) => {
      draft.isAddVoucherPaymentReqeust = true;
      draft.isAddVoucherPaymentSuccess = false;
    }), 
  [ADD_VOUCHER_PAYMENT_SUCCESS]: (state) => 
    produce(state, (draft) => {
      draft.isAddVoucherPaymentReqeust = false;
      draft.isAddVoucherPaymentSuccess = true;

    }),
  [ADD_VOUCHER_PAYMENT_FAILURE]: (state) => 
    produce(state, (draft) => {
      draft.voucherInfo = {};
      draft.isAddVoucherPaymentReqeust = false;
      draft.isAddVoucherPaymentSuccess = false;
    }),

  [DELETE_VOUCHER_PAYMENT_REQUEST]: (state) => 
    produce(state, (draft) => {
      draft.isDeleteVoucherPaymentReqeust = true;
      draft.isDeleteVoucherPaymentSuccess = false;
    }), 
  [DELETE_VOUCHER_PAYMENT_SUCCESS]: (state) => 
    produce(state, (draft) => {
      draft.voucherInfo = {};
      draft.isDeleteVoucherPaymentReqeust = false;
      draft.isDeleteVoucherPaymentSuccess = true;

    }),
  [DELETE_VOUCHER_PAYMENT_FAILURE]: (state) => 
    produce(state, (draft) => {
      draft.isDeleteVoucherPaymentReqeust = false;
      draft.isDeleteVoucherPaymentSuccess = false;
    }),
  [BOOKING_CHANGE_ITINERARY_CHANGE]: (state, { payload }) =>
    produce(state, (draft) => {
      draft.itineraryType = payload.itineraryType;
      draft.itinerary.origin = payload.origin;
      draft.itinerary.destination = payload.destination;
      draft.bookingChangeStartDate = payload.startDate;
      draft.bookingChangeEndDate = payload.endDate;
    }),

  [RESET_BOOKING_SESSION]: (state) => {
    const origin = {
      markets: state.markets,
      cities: state.cities,
      stations: state.stations,
      passengerTypes: state.passengerTypes,
    }
    const newState = { ...initialState, ...origin };
    return newState;
  },
  [RESET_BOOKING_SESSION_SUCCESS]: (state) => {
    const origin = {
      markets: state.markets,
      cities: state.cities,
      stations: state.stations,
      passengerTypes: state.passengerTypes,
    }
    const newState = { ...initialState, ...origin };
    return newState;
  },
    
});

export default ticket;
