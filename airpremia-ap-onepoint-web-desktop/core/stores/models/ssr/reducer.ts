import { flow, map, get, find, filter } from 'lodash/fp';
import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import {
  AVAILABLE_SSRS_SEARCH_REQUEST,
  AVAILABLE_SSRS_SEARCH_SUCCESS,
  SSRS_HISTORY_REQUEST,
  AVAILABLE_SSRS_SEARCH_FAILURE,
  SSRS_HISTORY_SUCCESS,
  SSRS_HISTORY_FAILURE,
  SSR_PAGE_REQUEST,
  SSR_PAGE_SUCCESS,
  SSR_PAGE_FAILURE,
  SSR_SEAT_MAP_REQUEST,
  SSR_SEAT_MAP_SUCCESS,
  SSR_SEAT_MAP_FAILURE,
  SSR_SEAT_UPDATE,
  SSR_SEAT_HISTORY_SUCCESS,
  SSR_SEAT_HISTORY_REQUEST,
  SSR_SEAT_HISTORY_FAILURE,
  SSR_SEAT_PRICE_FAILURE,
  SSR_SEAT_PRICE_SUCCESS,
  SSR_CHECKIN_SEAT_REQUEST,
  SSR_CHECKIN_SEAT_SUCCESS,
  SSR_CHECKIN_SEAT_FAILURE,
  SSR_CHECKIN_SEAT_UPDATE,
  SSR_CHECKIN_UPDATE_REQUEST,
  SSR_CHECKIN_UPDATE_SUCCESS,
  SSR_CHECKIN_UPDATE_FAILURE,
} from './actions';
import {
  ISsrState,
  ISsrAction,
  IOccupiedSeat,
} from './types';
import { getOccupiedSeatsFromHistory } from '@airpremia/core/lib/ssr';

const initialState: ISsrState = {
  journeys: [],
  segments: [],
  legs: [],
  availableSsrs: {
    journey: [],
    segment: [],
    leg: [],
  },
  histories: [],
  histories2: [],
  passengers: [],
  prices: [],
  productLabels: [],
  totalFarePrice: 0,
  totalFarePriceDiscount: 0,
  totalTaxAndFee: 0,
  totalSsrPrice: 0,
  totalPromotionDiscount: 0,
  balanceDue: 0,
  seatMap: [],
  occupiedSeatsSession: [],
  occupiedSeats: [],
  cabinClasses: [],
  seat: {
    prices: [],
  },
  isSsrCheckinRequest: false,
  isSsrCheckinUpdate: false,
};

/** @deprecated */
const appendTabDataset = (dataset: any) => {
  return flow(
    map((data: any) => {
      return {
        ...data,
        id: data.key,
        label: `${data.detail.origin} → ${data.detail.destination}`,
        isClosed: false, // TODO 백엔드 매핑 문의
      };
    }),
  )(dataset);
};

const ssr = createReducer<ISsrState, ISsrAction>(
  initialState,
  {
    [SSRS_HISTORY_REQUEST]: (state) =>
      produce(state, () => {
        console.log('SSRS_HISTORY_REQUEST');
      }),
    [SSRS_HISTORY_SUCCESS]: (state, { payload }) =>
      produce(state, (draft: ISsrState) => {
        console.log('SSRS_HISTORY_SUCCESS');
        draft.histories = payload.data.ssrs;
        draft.histories2 = payload.histories;
        draft.passengers = payload.passengers;
        draft.cabinClasses = payload.cabinClasses;

        draft.totalFarePrice = flow(
          get('data.booking.breakdown.totalFarePrice'),
        )(payload);
        draft.totalFarePriceDiscount = flow(
          get('data.booking.breakdown.totalFarePriceDiscount')
        )(payload);
        draft.totalTaxAndFee = flow(
          get('data.booking.breakdown.totalTaxAndFee'),
        )(payload);
        draft.totalSsrPrice = flow(
          get('data.booking.breakdown.totalSsrPrice'),
        )(payload);
        draft.totalPromotionDiscount = flow(
          get('data.booking.breakdown.totalPromotionDiscount'),
        )(payload); //smartport.mhh 프로모션 추가
        draft.balanceDue = flow(
          get('data.booking.breakdown.balanceDue'),
        )(payload);
      }),
    [SSRS_HISTORY_FAILURE]: (state, { payload }) =>
      produce(state, () => {
        console.error('SSRS_HISTORY_FAILURE', payload);
      }),
    [AVAILABLE_SSRS_SEARCH_REQUEST]: (state) =>
      produce(state, () => {
        console.log('AVAILABLE_SSRS_SEARCH_REQUEST');
      }),
    [AVAILABLE_SSRS_SEARCH_SUCCESS]: (state, { payload }) =>
      produce(state, (draft: ISsrState) => {
        draft.prices = payload.prices;
        draft.productLabels = payload.productLabels;
        draft.journeys = payload.journeys;
        draft.segments = payload.segments;
        draft.legs = payload.legs;

        draft.availableSsrs.journey = appendTabDataset(
          payload.data.journeySsrs,
        );
        draft.availableSsrs.segment = appendTabDataset(
          payload.data.segmentSsrs,
        );
        draft.availableSsrs.leg = appendTabDataset(
          payload.data.legSsrs,
        );
      }),
    [AVAILABLE_SSRS_SEARCH_FAILURE]: (state, { payload }) =>
      produce(state, () => {
        console.error(
          'AVAILABLE_SSRS_SEARCH_FAILURE',
          payload,
        );
      }),
    [SSR_PAGE_REQUEST]: (state) =>
      produce(state, () => {
        console.log('SSR_PAGE_REQUEST');
      }),
    [SSR_PAGE_SUCCESS]: (state) =>
      produce(state, () => {
        console.log('SSR_PAGE_SUCCESS');
      }),
    [SSR_PAGE_FAILURE]: (state, { payload }) =>
      produce(state, () => {
        console.error('SSR_PAGE_FAILURE', payload);
      }),
    [SSR_SEAT_MAP_REQUEST]: (state) =>
      produce(state, () => {
        console.log('SSR_SEAT_MAP_REQUEST');
      }),
    [SSR_SEAT_MAP_SUCCESS]: (state, { payload }) =>
      produce(state, (draft: ISsrState) => {
        console.log('SSR_SEAT_MAP_SUCCESS');
        draft.seatMap = payload.seatMap;
      }),
    [SSR_SEAT_MAP_FAILURE]: (state, { payload }) =>
      produce(state, () => {
        console.error('SSR_SEAT_MAP_FAILURE', payload);
      }),
    [SSR_SEAT_UPDATE]: (state, { payload }) =>
      produce(state, (draft: ISsrState) => {
        const seatId = flow(
          get('seatMap'),
          find(['tripId', payload.tripId]),
          get('seatMap'),
          filter(['row', payload.row]),
          find(['column', payload.column]),
          get('seatId'),
        )(state);

        if (!seatId) return;

        const occupiedSeatIndex = state.occupiedSeats.findIndex(
          (item: IOccupiedSeat) => item.seatId == seatId,
        );
        const isOccupiedSeat = occupiedSeatIndex != -1;
        const seatInSameTripIndex = state.occupiedSeats.findIndex(
          (item: IOccupiedSeat) =>
            item.tripId == payload.tripId &&
            item.passengerId == payload.passengerId,
        );
        const hasSeatInSameTrip = seatInSameTripIndex != -1;

        // 좌석 미차지
        if (!isOccupiedSeat) {
          // 같은 여정에서 다른 좌석을 차지하고 있다
          // 차지하고 있던 좌석 삭제 후 푸시
          if (hasSeatInSameTrip) {
            draft.occupiedSeats.splice(
              seatInSameTripIndex,
              1,
            );
          }
          draft.occupiedSeats.push({
            tripId: payload.tripId,
            passengerId: payload.passengerId,
            seatId,
          });
        } else {
          // 좌석 차지
          const occupiedSeat =
            draft.occupiedSeats[occupiedSeatIndex];
          const isSameSeat =
            occupiedSeat.tripId == payload.tripId &&
            occupiedSeat.passengerId == payload.passengerId;

          if (isSameSeat) {
            // a가 A좌석을 선택한 상태에서 재선택하는 경우
            // 선택 해제 상태로 전환
            draft.occupiedSeats.splice(
              occupiedSeatIndex,
              1,
            );
          } else {
            if (hasSeatInSameTrip) {
              // a가 A좌석을 선택한 상태에서 b가 A좌석을 선택하는 경우 (이 때 b는 B 좌석 선택 상태)
              // a는 B좌석으로 변경, b는 A좌석으로 변경됨 (좌석 교체됨)
              draft.occupiedSeats[
                occupiedSeatIndex
              ].passengerId =
                state.occupiedSeats[
                  seatInSameTripIndex
                ].passengerId;

              draft.occupiedSeats[
                seatInSameTripIndex
              ].passengerId =
                state.occupiedSeats[
                  occupiedSeatIndex
                ].passengerId;
            } else {
              // a가 A좌석을 선택한 상태에서 b가 A좌석을 선택하는 경우 (이 때 b는 좌석 선택 전)
              // a는 좌석 선택 해제 상태로 전환되며, b는 A좌석 선택 상태로 전환
              occupiedSeat.passengerId =
                payload.passengerId;
            }
          }
        }
      }),
    [SSR_SEAT_HISTORY_REQUEST]: (state) =>
      produce(state, () => {
        console.log('SSR_SEAT_HISTORY_REQUEST');
      }),
    [SSR_SEAT_HISTORY_SUCCESS]: (state, { payload }) =>
      produce(state, (draft: ISsrState) => {
        console.log('SSR_SEAT_HISTORY_SUCCESS');
        draft.histories2.splice(
          draft.histories2.findIndex(
            (history) => history.type == 'seat',
          ),
          1,
        );
        if (payload.count >= 0) {
          draft.histories2.push(payload);
          const occupiedSeats = getOccupiedSeatsFromHistory(
            payload,
          );
          draft.occupiedSeatsSession = occupiedSeats;
          draft.occupiedSeats = occupiedSeats;
        }
      }),
    [SSR_SEAT_HISTORY_FAILURE]: (state, { payload }) =>
      produce(state, () => {
        console.error('SSR_SEAT_HISTORY_FAILURE', payload);
      }),
    [SSR_SEAT_PRICE_SUCCESS]: (state, { payload }) =>
      produce(state, (draft: ISsrState) => {
        console.log('SSR_SEAT_PRICE_SUCCESS');
        draft.seat.prices = payload;
      }),
    [SSR_SEAT_PRICE_FAILURE]: (state, { payload }) =>
      produce(state, () => {
        console.error('SSR_SEAT_PRICE_FAILURE', payload);
      }),
      [SSR_CHECKIN_SEAT_REQUEST]: (state) =>
      produce(state, () => {
        console.log('SSR_CHECKIN_SEAT_REQUEST');
      }),
    [SSR_CHECKIN_SEAT_SUCCESS]: (state) =>
      produce(state, () => {
        console.log('SSR_CHECKIN_SEAT_SUCCESS');
      }),
    [SSR_CHECKIN_SEAT_FAILURE]: (state, { payload }) =>
      produce(state, () => {
        console.error('SSR_CHECKIN_SEAT_FAILURE', payload);
      }),
    [SSR_CHECKIN_SEAT_UPDATE]: (state, { payload }) =>
      produce(state, (draft: ISsrState) => {
        console.log("SSR_CHECKIN_SEAT_UPDATE", payload);
        draft.passengers = payload.passengers;
        draft.occupiedSeats = [];
        flow(
          map((data: any) => {
            draft.occupiedSeats.push({
              tripId: data.tripId,
              passengerId: data.id,
              seatId: data.unitKey,
            });
          }),
        )(payload.seatPassengers);
      }),
    [SSR_CHECKIN_UPDATE_REQUEST]: (state) =>
      produce(state, (draft: ISsrState) => {
        console.log("SSR_CHECKIN_UPDATE_REQUEST");
        draft.isSsrCheckinRequest = true;
        draft.isSsrCheckinUpdate = false;
      }),
    [SSR_CHECKIN_UPDATE_SUCCESS]: (state) =>
      produce(state, (draft: ISsrState) => {
        console.log('SSR_CHECKIN_UPDATE_SUCCESS');
        draft.isSsrCheckinRequest = false;
        draft.isSsrCheckinUpdate = true;
      }),
    [SSR_CHECKIN_UPDATE_FAILURE]: (state, { payload }) =>
      produce(state, (draft: ISsrState) => {
        console.error('SSR_CHECKIN_UPDATE_FAILURE', payload);
        draft.isSsrCheckinRequest = false;
        draft.isSsrCheckinUpdate = false;
      }),
  },
);

export default ssr;
