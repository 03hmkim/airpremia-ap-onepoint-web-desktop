/** @deprecated */
export interface IFlightTicketSearchMarket {
  origin: string;
  destination: string;
}

/** @deprecated */
export interface IFlightTicketSearchLeg {
  departureStation: string;
  arrivalStation: string;
  departureTime: string;
  arrivalTime: string;
  flightTimeInMinute: number;
  equipmentType: string;
  identifier: string;
  carrierCodeText: string;
  isTransferAtNext: boolean;
  termToNextLegInMinute: number;
}

/** @deprecated */
export interface IFlightTicketSearchProductClass {
  fareAvailabilityKey: string;
  text: string;
  code: string;
  classOfService: string;
  available: number;
  changeFee: number;
  refundFee: number;
  mileagePercentage: number;
  price: number;
}

/** @deprecated */
export interface IFlightTicketSearchCabinClass {
  code: string;
  text: string;
  startPrice: number;
  productClasses: IFlightTicketSearchProductClass[];
}

/** @deprecated */
export interface IFlightTicketSearchJourney {
  journeyKey: string;
  departureStation: string;
  arrivalStation: string;
  departureTime: string;
  arrivalTime: string;
  flightTimeInMinute: number;
  equipmentType: string;
  identifier: string;
  dateChange: number;
  legs: IFlightTicketSearchLeg[];
  cabinClasses: IFlightTicketSearchCabinClass[];
}

/** @deprecated */
export interface IFlightTicketSearchAvailability {
  market: IFlightTicketSearchMarket;
  journeys: IFlightTicketSearchJourney[];
}

/** @deprecated */
export interface ICitiesData {
  cityCode: string;
  // countryCode: string;
  // inActive: string;
  // provinceStateCode: string;
  shortName: string;
}

/** @deprecated */
export interface ICountriesData {
  countryCode: string;
  inActive: string;
  name: string;
}

/** @deprecated */
export interface ICommingSoonInfoData {
  openAt: string;
}

/** @deprecated */
export interface IMarketsData {
  from: string;
  inActive?: boolean;
  commingSoonInfo: ICommingSoonInfoData;
  to: string;
  [index: string]: any;
}

/** @deprecated */
export interface IPassengerData {
  maximumAge: number;
  minimumAge: number;
  name: string;
  passengerTypeCode: string;
}

export interface ISsrsData {
  feeCode: string;
  inActive: boolean;
  limitPerPassenger: number;
  name: string;
  ssrCode: string;
  ssrType: string;
  unitValue: number;
}

export interface IStatesData {
  countryCode: string;
  name: string;
  provinceStateCode: string;
}
