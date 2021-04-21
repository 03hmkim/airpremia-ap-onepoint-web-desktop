import { EFlightType } from '@airpremia/core/stores/models/bookingSession';

export interface IPostBookingFlightsSearch {
  origin: string;
  destination: string;
  beginDate: string;
  endDate?: string;
  passengers: {
    adult: number;
    child: number;
    infant: number;
  };
  currencyCode: string;
  includeTaxesAndFees?: boolean;
  promotionCode?: string; //smartport.mhh 프로모션 코드 추가
  journeyKey?: string; //smartport.jsh 일정 변경시 여정 삭제후 리스트 뽑기위해 추가
}



export interface IGetFlightSearch {
  beginDate : string;
  endDate? : string;
  origin?: string;
  destination? : string;
}
export interface IPostFlightSearch {
  beginDate : string;
  endDate? : string;
  origin?: string;
  destination? : string;
}


export interface IPostBookingFlightsLowfareRibbon {
  beginDate: string;
  destination: string;
  endDate?: string;
  origin: string;
  currencyCode: string;
}

export interface IPostBookingFlightsLowfareCalendar {
  origin: string;
  destination: string;
  date: string;
  currencyCode: string;
  cabinClass: string;
  tripType: EFlightType;
}

export interface IPostBookingFlightsFaresSearch {
  keys: {
    journeyKey: string;
    fareAvailabilityKey: string;
  }[];
  passengers: {
    adult: number;
    child: number;
    infant: number;
    seatInfant: number;
  };
  currencyCode: string;
}

export interface IGetBooking {
  recordLocator: string;
  firstName: string;
  lastName: string;
}

export interface IGetBookingBoardingPass {
  recordLocator: string;
  journeyKey: string;
}

export interface IPostCheckin {
  recordLocator?: string;
  journeyKey?: string;
  passengers?: {
    passengerKey?: string;
    travelDocumentKeys?: string[];
  }[];
  seatAuto: string;
}

export interface IDeleteCheckin {
  recordLocator: string;
  journeyKey: string;
  passengerKeys: string[];
}

export interface IGetCheckinStatus
  extends IGetBookingBoardingPass {}

export interface IPostCheckinTravelDocuments {
  passengers: {
    addressKey: string;
    passengerKey: string;
    phoneNumber?: string;
    travelDocument: {
      documentTypeCode?: string;
      passengerTravelDocumentKey?: string;
      birthCountry?: string;
      issuedByCode?: string;
      name?: {
        first: string;
        middle?: any;
        last: string;
        title?: any;
        suffix?: any;
      };
      nationality?: string;
      expirationDate?: string;
      number?: string;
      issuedDate?: string;
      gender?: string;
      dateOfBirth?: string;
      documentTypeText?: string;
    };
  }[];
}

export interface IPostBookingSession {
  currencyCode: string;
  keys: {
    journeyKey: string;
    fareAvailabilityKey: string;
  }[];
  passengers: {
    adult: number;
    child: number;
    infant: number;
    seatInfant: number;
  };
  promotionCode?: string; //smartport.mhh 프로모션 코드 추가
}

export interface IPostBookingSessionApgPayment {
  infos: {
    id: string;
    card_issuer: string;
    card_number: string;
    amount: string;
    currency: string;
    card_expire_date: string;
    card_cvc: string;
  };
}

export interface IPostBookingSessionCommitWithApgPayment
  extends IPostBookingSessionApgPayment {}

export interface IPostBookingSessionContactsAndPassengers {
  contact: IPostBookingSessionContacts;
  passengers: {
    passengerKey: string;
    firstName: string;
    gender: string;
    lastName: string;
    phoneNumber?: string;
    birth?: string;
    nationality?:string;
    nok?: string;
    title?: string //smartport.mhh 
    discountcode?:string
  }[];
  hasEUCitizen: boolean;
}

export interface IPostBookingSessionPayments {
  currencyCode: string;
  amount: string;
  paymentMethodCode: string;
  additionalInfos: {
    ACCTNO: string;
    AMT: string;
    EXPDAT: string;
    'CC::VerificationCode': string;
    'APG::PaymentID': string;
    'CC::AccountHolderName': string;
  };
}

export interface IPostBookingSessionContacts {
  countryNumber: number;
  phoneNumber: string;
  emailAddress: string;
  lastName: string;
  firstName: string;
}

export interface IPatchBookingSessionContacts {
  emailAddress: string;
}

export interface IPostBookingSessionPassengers {
  passengerKey: string;
  gender: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

export interface IPostBookingSessionSeats {
  seats: {
    journeyKey: string;
    passengerKey: string;
    unitKey: string;
  }[];
}

export interface IGetBookingSessionAvailableSsrs {
  currencyCode: string;
}

interface ISsrKey {
  ssrKey: string;
  count: number;
}

export interface IPostBookingSessionSsrs {
  currencyCode: string;
  keys: ISsrKey[];
}

export interface IDeleteBookingSessionSsrs {
  keys: ISsrKey[];
}

export interface ICancelablePassenger {
  passengerKey: string;
  firstName: string;
  lastName: string;
  isCancelable: boolean;
  liftStatus: string | null;
  liftStatusText: string | null;
}

export interface ICancelBookingPassengerBody {
  passengerKeys: string[];
}

export interface IGetBookingResourcesSeatMap {
  journeyKey: string;
}

//smartport.mhh 프로모션 코드 추가
export interface IPostPromotionCode {
  promotionCode: string;
}

//smartport.mhh 바우처 추가
export interface IVoucherSearchParams {
  referenceCode: string;
}

export interface IVoucherPaymentRquestParams {
  referenceCode: string;
  paymentMethodCode: string;
  currencyCode: string;
  amount: number;
}

//smartport.jsh 일정변경-예약분리 추가
export interface IChangeBookingPassengerBody {
  passengerKeys: string[];
}

//smartport.jsh 일정변경-여정취소 추가
export interface IChangeBookingRemoveJourneyBody {
  journeyAvailabilities: {
    journeyKey: string;
    designator: {
      destination: string;
      origin: string;
      arrival: string;
      departure: string;
    };
  }[];
}

export interface ISearchChangeFlight {
  destination: string;
  origin: string;
  departure: string;
  arrival?: string;
}

export interface IPostSms {
  to: Phone[];
  text: string;
}


export interface Phone {
  countryNumber?: string;
  phoneNumber: string;
}

export interface IPostEmail {
  to: Email[];//받는 사람 이메일 주소 리스트
  cc: Email[];//참조 이메일 주소 리스트
  bcc: Email[];//숨은참조 이메일 주소 리스트
  title: string;//제목
  content: string;//내용 ex) "<p>이효민님, 에어프레미아 가입을 진심으로 환영합니다.</p><p>앞으로 많은 관심 부탁드립니다.</p><p>감사합니다.</p>"
  attachmentIds: string[]; //"첨부파일 ID 리스트"
}

export interface Email {
  name?: string;
  address: string;
}