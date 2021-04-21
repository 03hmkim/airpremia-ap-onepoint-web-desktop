import { flow, map } from 'lodash/fp';
import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import {
  INPUT_DATA_CHANGE,
  INPUT_DATA_BLUR,
  FIND_MY_AVAILABLE_CHECKIN_REQUEST,
  FIND_MY_AVAILABLE_CHECKIN_SUCCESS,
  FIND_MY_AVAILABLE_CHECKIN_FAILURE,
  FIND_TRIP_REQUEST,
  FIND_TRIP_SUCCESS,
  FIND_TRIP_FAILURE,
  BOOING_CHANGE_DIVIDE_REQUEST,
  BOOING_CHANGE_DIVIDE_SUCCESS,
  BOOING_CHANGE_DIVIDE_FAILURE,
  BOARDING_PASS_REQUEST,
  BOARDING_PASS_SUCCESS,
  BOARDING_PASS_FAILURE,
  COUNTRY_CODE_REQUEST,
  COUNTRY_CODE_SUCCESS,
  COUNTRY_CODE_FAILURE,
  DISCOUNT_CODE_REQUEST,
  DISCOUNT_CODE_SUCCESS,
  DISCOUNT_CODE_FAILURE,
  MY_RESERVATION_REQUEST,
  MY_RESERVATION_SUCCESS,
  MY_RESERVATION_FAILURE,
  CHECKIN_STATUS_REQUEST,
  CHECKIN_STATUS_SUCCESS,
  CHECKIN_STATUS_FAILURE,
  CHECKIN_DATA_CHANGE,
  TRAVEL_DOCUMENT_APPLY_REQUEST,
  TRAVEL_DOCUMENT_APPLY_SUCCESS,
  TRAVEL_DOCUMENT_APPLY_FAILURE,
  POST_CHECKIN_REQUEST,
  POST_CHECKIN_SUCCESS,
  POST_CHECKIN_FAILURE,
  CHECKIN_PASSENGER_INFO_REQUEST,
  CHECKIN_PASSENGER_INFO_SUCCESS,
  CHECKIN_PASSENGER_INFO_FAILURE,
  POST_COMMIT_WITH_PAYMENT_REQUEST,
  POST_COMMIT_WITH_PAYMENT_SUCCESS,
  POST_COMMIT_WITH_PAYMENT_FAILURE,
  POST_SMS_REQUEST,
  POST_SMS_SUCCESS,
  POST_SMS_FAILURE,
} from './actions';
import {
  IBookingState,
  IBookingAction,
  ECheckinDataChangeKeys,
  ICountryCodeRespCounty,
  IDiscountCodeResp,
} from './types';
import { checkValid } from '../../../lib/auth';

export const initialCountryCode: ICountryCodeRespCounty = {
  countryCode: 'KR',
  countryCode3C: 'KOR',
  defaultCurrencyCode: 'KRW',
  countryText: '대한민국',
};

export const initialDiscountCode: IDiscountCodeResp = {
  pssCode: '',
  pssType: '',
  code: '',
  description: '',
}
const initialState: IBookingState = {
  isTripRequest: false,
  isTripSuccess: false,
  isChangeSellProcess: true,
  isBookingChangeDivideRequest: false,
  isBookingChangeDivideSuccess: false,
  isCountryCodeRequest: false,
  isDiscountCodeRequest: false,
  isPassportRequest: false,
  isPassportSuccess: false,
  isMyReservationRequest: false,
  isMyAvailableCheckinRequest: false,
  isMyAvailableCheckinSuccess: false,
  isCheckinStatusRequest: false,
  isTravelDocumentApplyRequest: false,
  isTravelDocumentApplySuccess: false,
  isPostCheckinSuccess: false,
  firstName: {
    value: '',
    error: false,
    msg: '',
  },
  lastName: {
    value: '',
    error: false,
    msg: '',
  },
  recordLocator: {
    value: '',
    error: false,
    msg: '',
  },
  booking: null,
  bookingDetailInfo: null,
  boardingPasses: null,
  countryCodeList: [],
  countryCode: initialCountryCode,
  discountCodeList: [],
  discountCode: initialDiscountCode,
  sortedCountryCodeData: {},
  bookings: [],
  checkinList: [],
  currentCheckinData: {
    journeyKey: '',
    passengers: [],
    recordLocator: '',
    journey: {
      journeyKey: '',
      designator: {
        origin: '',
        destination: '',
        departure: '',
        arrival: '',
      },
      segments: [],
    },
  },
  journeys: [],
  passengers: [],
  noSeatPassengers: [],
  seatPassengers: [],
  isPostCommitWithApgPaymentRequest: false,
};

const booking = createReducer<
  IBookingState,
  IBookingAction
>(initialState, {
  [INPUT_DATA_CHANGE]: (state, { payload }) =>
    produce(state, (draft) => {
      const { target, value, forceUpperCase } = payload;
      const newValue = forceUpperCase
        ? value.replace(/ /gi, '')
        : value;
      draft[target] = {
        ...draft[target],
        value: newValue,
      };
    }),

  [INPUT_DATA_BLUR]: (state, { payload }) =>
    produce(state, (draft) => {
      const { target, data } = payload;
      draft[target] = checkValid(target, data);
    }),

  [FIND_TRIP_REQUEST]: (state, { payload }) =>
    produce(state, (draft) => {
      draft.isTripRequest = true;
      draft.isTripSuccess = false;
      draft.firstName.value = payload.firstName;
      draft.lastName.value = payload.lastName;
      draft.recordLocator.value = payload.recordLocator;
      draft.isChangeSellProcess = false;
      console.log("isChangeSellProcess",draft.isChangeSellProcess);
    }),

  [FIND_TRIP_SUCCESS]: (state, { payload }) =>
    produce(state, (draft) => {
      draft.bookingDetailInfo = payload.data.booking;
      draft.isTripRequest = false;
      draft.isTripSuccess = true;
    }),

  [FIND_TRIP_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isTripRequest = false;
      draft.isTripSuccess = false;
    }),

  /* smartport.jsh 일정 변경 예약분리 추가 */
  [BOOING_CHANGE_DIVIDE_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isBookingChangeDivideRequest = true;
      draft.isBookingChangeDivideSuccess = false;
      draft.isChangeSellProcess = true;
      console.log("isChangeSellProcess",draft.isChangeSellProcess);
    }),

  [BOOING_CHANGE_DIVIDE_SUCCESS]: (state, { payload }) =>
    produce(state, (draft) => {
      draft.bookingDetailInfo = payload.data.booking;
      draft.isBookingChangeDivideRequest = false;
      draft.isBookingChangeDivideSuccess = true;
    }),

  [BOOING_CHANGE_DIVIDE_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isBookingChangeDivideRequest = false;
      draft.isBookingChangeDivideSuccess = false;
    }),


  [BOARDING_PASS_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isPassportRequest = true;
      draft.isPassportSuccess = false;
    }),

  [BOARDING_PASS_SUCCESS]: (state, { payload }) =>
    produce(state, (draft) => {
      draft.isPassportRequest = false;
      draft.isPassportSuccess = true;
      draft.boardingPasses = payload.data.boardingPasses;
    }),

  [BOARDING_PASS_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isPassportRequest = false;
      draft.isPassportSuccess = false;
    }),

  [COUNTRY_CODE_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isCountryCodeRequest = true;
    }),
  [COUNTRY_CODE_SUCCESS]: (state, { payload }) =>
    produce(state, (draft) => {
      const {
        countryCode,
        countryCodeList,
        sortedCountryCodeData,
      } = payload;

      draft.isCountryCodeRequest = false;
      draft.countryCode = countryCode;
      draft.countryCodeList = countryCodeList;
      draft.sortedCountryCodeData = sortedCountryCodeData;
    }),
  [COUNTRY_CODE_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isCountryCodeRequest = false;
    }),

  [DISCOUNT_CODE_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isDiscountCodeRequest = true;
    }),
  [DISCOUNT_CODE_SUCCESS]: (state, { payload }) =>
    produce(state, (draft) => {
      const {
        discountCode,
        discountCodeList,
      } = payload;
      draft.isDiscountCodeRequest = false;
      draft.discountCode = discountCode;
      draft.discountCodeList = discountCodeList;
    }),
  [DISCOUNT_CODE_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isDiscountCodeRequest = false;
    }),

  [MY_RESERVATION_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isMyReservationRequest = true;
    }),
  [MY_RESERVATION_SUCCESS]: (state, { payload }) =>
    produce(state, (draft) => {
      const { data } = payload;

      draft.bookings = data.bookings;
      draft.isMyReservationRequest = false;
    }),
  [MY_RESERVATION_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isMyReservationRequest = false;
    }),

  [FIND_MY_AVAILABLE_CHECKIN_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isMyAvailableCheckinRequest = true;
    }),
  [FIND_MY_AVAILABLE_CHECKIN_SUCCESS]: (
    state,
    { payload },
  ) =>
    produce(state, (draft) => {
      const { journeys } = payload.data;
      draft.isMyAvailableCheckinRequest = false;
      draft.checkinList = journeys;
    }),
  [FIND_MY_AVAILABLE_CHECKIN_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isMyAvailableCheckinRequest = false;
    }),

  [CHECKIN_STATUS_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isCheckinStatusRequest = true;
    }),
  [CHECKIN_STATUS_SUCCESS]: (state, { payload }) =>
    produce(state, (draft) => {
      draft.currentCheckinData = payload.data;
      draft.isCheckinStatusRequest = false;

      draft.journeys = [{
        id: payload.data.journey.journeyKey,
        label: payload.data.journey.designator.origin + " → " + payload.data.journey.designator.destination,
        isClosed: false, // TODO backend 객체 요청 
      }];

      draft.journeys = [{
        id: payload.data.journey.journeyKey,
        label: payload.data.journey.designator.origin + " → " + payload.data.journey.designator.destination,
        isClosed: false, // TODO backend 객체 요청 
      }];

      draft.passengers = [];
      draft.noSeatPassengers = [];
      draft.seatPassengers = [];
      flow(
        map((v: any) => {
          flow(
            map((p: any) => {
              flow(
                map((passenger: any) => {
                  if(p.key == passenger.passengerKey) {
                    draft.passengers.push({
                      id: p.key,
                      label: passenger.name.last + ' ' + passenger.name.first
                    });
    
                    if (p.value.seats.length <= 0) {
                      draft.noSeatPassengers.push({
                        id: p.key,
                        label: passenger.name.last + ' ' + passenger.name.first
                      });
                    } else {
                      flow(
                        map((s: any) => {
                          draft.seatPassengers.push({
                            id: p.key,
                            label: passenger.name.last + ' ' + passenger.name.first,
                            unitKey: s.unitKey,
                            tripId: v.segmentKey
                          });
                        }),
                      )(p.value.seats);
                    }
                  }
                }),
              )(payload.data.passengers);
            }),
          )(v.passengerSegment);
        }),
      )(payload.data.journey.segments);
    }),
  [CHECKIN_STATUS_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isCheckinStatusRequest = false;
    }),

  [CHECKIN_DATA_CHANGE]: (state, { payload }) =>
    produce(state, (draft) => {
      const { idx, key, value } = payload;

      if (draft.currentCheckinData) {
        if (key === ECheckinDataChangeKeys.PHONE_NUMBER) {
          draft.currentCheckinData.passengers[idx][
            key
          ] = value;
        } else if (
          !draft.currentCheckinData.passengers[idx]
            .travelDocument
        ) {
          draft.currentCheckinData.passengers[idx] = {
            ...draft.currentCheckinData.passengers[idx],
            travelDocument: {
              [key]: value,
            },
          };
        } else {
          draft.currentCheckinData.passengers[
            idx
          ].travelDocument[key] = value;
        }
      }
    }),

  [TRAVEL_DOCUMENT_APPLY_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isTravelDocumentApplyRequest = true;
      draft.isTravelDocumentApplySuccess = false;
    }),

  [TRAVEL_DOCUMENT_APPLY_SUCCESS]: (state) =>
    produce(state, (draft) => {
      draft.isTravelDocumentApplyRequest = false;
      draft.isTravelDocumentApplySuccess = true;
    }),

  [TRAVEL_DOCUMENT_APPLY_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isTravelDocumentApplyRequest = false;
      draft.isTravelDocumentApplySuccess = false;
    }),
  
  [POST_CHECKIN_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isPostCheckinSuccess = false;
    }),
  
  [POST_CHECKIN_SUCCESS]: (state) =>
    produce(state, (draft) => {
      draft.isPostCheckinSuccess = true;
    }),
  
  [POST_CHECKIN_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isPostCheckinSuccess = false;
    }),
  [CHECKIN_PASSENGER_INFO_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isMyAvailableCheckinRequest = true;
      draft.isMyAvailableCheckinSuccess = false;
    }),
  [CHECKIN_PASSENGER_INFO_SUCCESS]: (state, { payload }) =>
    produce(state, (draft) => {
      const { journeys } = payload.data;
      draft.checkinList = journeys;
      draft.isMyAvailableCheckinRequest = false;
      draft.isMyAvailableCheckinSuccess = true;
    }),
  [CHECKIN_PASSENGER_INFO_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isMyAvailableCheckinRequest = false;
      draft.isMyAvailableCheckinSuccess = false;
    }),
  
  //smartport.mhh CommitWithApgPayment async
  [POST_COMMIT_WITH_PAYMENT_REQUEST]: (state) => 
    produce(state, (draft) => {
      draft.isPostCommitWithApgPaymentRequest = true;
    }),
  [POST_COMMIT_WITH_PAYMENT_SUCCESS]: (
    state,
    { payload },
  ) =>
    produce(state, (draft) => {
      const { recordLocator, firstName, lastName } = payload.data;
      draft.firstName = {
        ...draft.firstName,
        value: firstName,
      };
      draft.lastName = {
        ...draft.firstName,
        value: lastName,
      };
      draft.recordLocator = {
        ...draft.recordLocator,
        value: recordLocator,
      };
      //draft.booking = payload.data;
      draft.isPostCommitWithApgPaymentRequest = false;
    }),
  [POST_COMMIT_WITH_PAYMENT_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isPostCommitWithApgPaymentRequest = false;
      console.log('POST_COMMIT_WITH_PAYMENT_FAILURE');
    }),
  [POST_SMS_REQUEST]: (state) =>
    produce(state, () => {
      console.log("POST_SMS_REQUEST");
    }),
  [POST_SMS_SUCCESS]: (state) =>
    produce(state, () => {
      console.log("POST_SMS_SUCCESS");
    }),
  [POST_SMS_FAILURE]: (state) =>
    produce(state, () => {
      console.log("POST_SMS_FAILURE");
    }),
});

export default booking;
