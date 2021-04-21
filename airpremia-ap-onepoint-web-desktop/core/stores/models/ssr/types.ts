import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ECabinClass, IIdLabel } from '../../../lib/types';

interface ISsrInfo {
  title: string;
  description: string;
  imageUrl: string;
}

export interface IAvailableSsr {
  key: string;
  ssrInfo: ISsrInfo;
  ssrType: string;
  ssrSubType?: any;
  ssrCode: string;
  limitPerPassenger: number;
  available?: any;
  inventoryControlled: boolean;
  passengers: {
    ssrKey: string;
    passengerKey: string;
    price: number;
  }[];
  category: string;
}

interface Identifier {
  identifier: string;
  carrierCode: string;
  opSuffix?: any;
}

interface Market {
  identifier: Identifier;
  destination: string;
  origin: string;
  departureDate: Date;
}

interface ISsrHistory {
  isConfirmed: boolean;
  isConfirmingUnheld: boolean;
  note?: any;
  ssrDuration: string;
  ssrKey: string;
  count: number;
  ssrCode: string;
  feeCode: string;
  inBundle: boolean;
  passengerKey: string;
  ssrDetail?: any;
  ssrNumber: number;
  market: Market;
  category: string;
}

// TODO UI 에서 필요하지 않는 데이터는 어떻게 관리할 것인지
export interface ISsrHistoryContentListItem {
  /** 상품 개수 */
  count: number;
  /** 상품명 */
  productLabel: string;
  /** 승객 id */
  passengerId: string;
  /** 승객명 */
  passengerName?: string;
  /** 상품 가격 */
  price: number;
  /** 상품 코드 */
  ssrCode?: string;
  /** 개수별 ssrKey(삭제시 사용) */
  ssrIds?: string[];
}

export interface ISsrHistoryContent {
  tripId?: string;
  tripLabel: string;
  list: ISsrHistoryContentListItem[];
}

export interface ISsrHistory2 {
  /** baggage, meal, seat */
  type: string;
  /** standard, ...etc */
  subType?: string;
  /** type 별 count */
  count: number;
  contents: ISsrHistoryContent[];
}

interface ISsrPrice {
  passengerId: string;
  code: string;
  value: number;
}

export interface ISsrTrip extends IIdLabel {
  isClosed: boolean;
}

interface ISsrCabinClass {
  tripId: string;
  cabinClass: ECabinClass;
}

interface ISsrSeatMap {
  tripId: string;
  seatMap: {
    assignable: boolean;
    cabinClass: ECabinClass;
    column: string;
    group: number;
    row: number;
    seatId: string;
    isOccupied: boolean;
    initialName: string;
  }[];
}

export interface ISsrSeatMapResponse {
  seatMap: ISsrSeatMap[];
}

export interface ISsrSeatUpdateRequest {
  tripId: string;
  passengerId: string;
  row: number;
  column: string;
}

export interface IOccupiedSeat {
  tripId: string;
  passengerId: string;
  seatId: string;
}

export interface ISsrSeatPrice {
  passengerId: string;
  group: number;
  price: number;
}

export interface ISsrState {
  journeys?: ISsrTrip[];
  segments?: ISsrTrip[];
  legs?: ISsrTrip[];
  /** @deprecated */
  availableSsrs: {
    journey?: IAvailableSsr[];
    segment?: IAvailableSsr[];
    leg?: IAvailableSsr[];
  };
  /** SSR 내역 */
  histories?: ISsrHistory[];
  histories2: ISsrHistory2[];
  /** 승객정보 */
  passengers?: IIdLabel[];
  /** 요금 */
  prices?: ISsrPrice[];
  /** 상품명 */
  productLabels: IIdLabel[];
  /** 항공운임 */
  totalFarePrice: number;
  /** 항공 운임 할인 금액 */
  totalFarePriceDiscount: number;
  /** 세금 및 제반 요금 */
  totalTaxAndFee: number;
  /** 부가서비스 금액 */
  totalSsrPrice: number;
  /** 프로모션 할인 금액 */
  totalPromotionDiscount: number; //smartport.mhh 프로모션 추가
  /** 총 결제할 금액 */
  balanceDue: number;
  /** 전체 좌석 */
  seatMap: ISsrSeatMap[];
  /** 현재 세션의 점유된 좌석 */
  occupiedSeatsSession: IOccupiedSeat[];
  /** 현재 스토어의 점유된 좌석 */
  occupiedSeats: IOccupiedSeat[];
  /** 클래스 */
  cabinClasses: ISsrCabinClass[];
  seat: {
    prices: ISsrSeatPrice[];
  };
  isSsrCheckinRequest: boolean;
  isSsrCheckinUpdate: boolean;
}

export type ISsrAction = ActionType<typeof actions>;
