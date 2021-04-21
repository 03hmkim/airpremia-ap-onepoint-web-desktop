/** @deprecated */
export interface IBookingDetailInfo {
  recordLocator: string;
  tripType: string;
  status: string;
  origin: string;
  destination: string;
  bookedDate: string;
  beginDate: string;
  endDate?: any;
  passengerCount: number;
  totalAmount: number;
  totalPoint: number;
  refundedAmount: number;
  refundedPoint: number;
  isCommingSoon: boolean;
  isGroup: boolean;
  baseCurrency: string;
  statusText: string;
  destinationText: string;
  originText: string;
  tripTypeText: string;
  modifiedDate: string;
  isCanceled: boolean;
}

export interface IBookingDetailJourney {
  journeyKey: string;
  origin: string;
  destination: string;
  departure: string;
  arrival: string;
  dateChange: number;
  cabinClassText: string;
  identifier: string;
  boardingPassCount: number;
  isRefundable?: any;
  isDelayed?: any;
  isCanceled: boolean;
  originText: string; //smartport.mhh eticket data
  destinationText: string;
  arrStationText?: any;
  arrStationFullName?: any;
  arrCountryFullName?: any;
  depStationText?: any;
  depStationFullName?: any;
  depCountryFullName?: any;
  minutesTerm?: number;
  bookingClass?: any;
  productClassText?: any;
  depTerminal?: any;
  arrTerminal?: any;
}

export interface IBookingDetailBoardingPassInfo {
  tripType: string;
  journeys: IBookingDetailJourney[];
}

export interface IBookingDetailDesignator {
  origin: string;
  destination: string;
}

export interface Seat {
  unitKey: string;
  unitDesignator: string;
  cabinClass: string;
  cabinClassText: string;
}

export interface Ssr {
  ssrCode: string;
  count: number;
  category: string;
  ssrText: string;
  categoryText: string;
}

export interface IBookingDetailPassengerSegment {
  segmentKey: string;
  seats: Seat[];
  ssrs: Ssr[];
}

export interface IFirstPassengerSegmentSsr {
  ssrCode: string;
  count: number;
  category: string;
  ssrText: string;
  categoryText: string;
}

export interface IFirstPassengerSegmentSeat {
  unitKey: string;
  unitDesignator: string;
  cabinClass: string;
  cabinClassText: string;
}

export interface IBookingDetailJourney2 {
  journeyKey: string;
  designator: IBookingDetailDesignator;
  passengerSegments: IBookingDetailPassengerSegment[];
  firstPassengerSegmentSsrs: IFirstPassengerSegmentSsr[];
  firstPassengerSegmentSeat: IFirstPassengerSegmentSeat[];
}

export interface IBookingDetailInfant {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
}

export interface IBookingDetailPassenger {
  passengerKey: string;
  firstName: string;
  lastName: string;
  userId?: any;
  type: string;
  gender: string;
  isCanceled: boolean;
  journeys: IBookingDetailJourney2[];
  infant: IBookingDetailInfant | null;
  totalAmount: number;
  totalPoint: number;
  mileage?: any;
}

/** @deprecated */
export interface IBookingDetailPayment {
  paymentId: string;
  paymentKey: string;
  paymentCreatedDate?: any;
  status: string;
  description: string;
  amount: number;
  paymentPerson?: any;
  details: IBookingDetailPaymentDetail; //smartport.mhh eticket data
}

export interface IBookingDetailPaymentDetail {
  code: string;
  codeText: string;
  accountNumber: string;
}

export interface IBookingDetailBreakdown {
  authorizedBalanceDue: number;
  balanceDue: number;
  totalFarePoint: number;
  totalFarePrice: number;
  totalFarePriceDiscount: number;
  totalPromotionDiscount: number;
  totalSsrPrice: number;
  totalTaxAndFee: number;
  totalFuelSurcharge: number;
  totalPrice: number;
}

/** @deprecated */
export interface IBookingDetailBooking {
  bookingInfo: IBookingDetailInfo;
  boardingPassInfo: IBookingDetailBoardingPassInfo;
  passengers: IBookingDetailPassenger[];
  payments: IBookingDetailPayment[];
  breakdown: IBookingDetailBreakdown; //smartport.mhh eticket data
}
