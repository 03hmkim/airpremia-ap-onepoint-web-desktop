export interface IPostUserTokenMember {
  email: string;
  password: string;
}

export interface IPutUserInformation {
  birthDate: string;
  countryCode: string;
  name: {
    first: string;
    last: string;
  };
  passportExpiringAt: string;
  passportNumber: string;
  phoneNumber?: string;
  countryNumber?: number;
  phoneAuthToken?: string;
  notiOfEmail?: boolean;
  notiOfSms?: boolean;
}

export interface IPutUserPassword {
  password: string;
  newPassword: string;
}

export interface IPostUserReactivate {
  phoneAuthToken: string;
}

export interface IPostUserJoin {
  agreeHomepageUse: boolean;
  agreePersonalCollection: boolean;
  agreePersonalCollectionOption: boolean;
  agreePersonalTransferToAbroad: boolean;
  birthDate: string;
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
  };
  password: string;
  //phone?: string; // @deprecated phoneNumber와 countryNumber로 변경될 예정 (서버반영되면 삭제)
  phoneNumber: string;
  countryNumber: number;
  phoneAuthToken: string;
}

export interface IPostUserCheckEmail {
  email: string;
}

export interface IPostUserFindEmail {
  authCode: string;
  name: {
    first: string;
    last: string;
  };
  phoneNumber: string;
  countryNumber: number;
}

export interface IPostUserConfirmEmailPhone {
  authCode: string;
  email: string;
  phoneNumber: string;
  countryNumber: number;
}

export interface IPostUserResetPassword {
  password: string;
  phoneAuthToken: string;
}

export interface IPostUserPhoneAuthCode {
  phoneNumber: string;
  countryNumber: number;
}

export interface IPostUserConfirmPhoneAuthCode {
  phoneNumber: string;
  authCode: string;
  countryNumber: number;
}

/** 포인트 구매 요청 Request */
export interface IPostPointsBuyParams {
  paymentAmount: number;
  paymentCurrency: string;
  paymentId: string;
  paymentMethod: string;
  pointAmount: number;
}

/** 포인트 사후 적립 요청 Request */
export interface IPostPointsEarnParams {
  departureDate: string;
  recordLocator: string;
  transportationCarrierCode: string;
  transportationIdentifier: string;
}

/** 포인트 전송 요청 Request */
export interface IPostPointsTransferParams {
  amount: number;
  receiverProgramNumber: string;
}

export interface IPostUserEmailAuthCode {
  email: string;
}

export interface IPostUserConfirmEmailAuthCode {
  email: string;
  authCode: string;
}

/** 이벤트 조회(진행중인, 종료된, 참여한 리스트 통합) */
export interface IGetUserEvents {
  category: 'ing' | 'ended' | 'applied';
}

export interface IGetUserEvent {
  id: string;
}
