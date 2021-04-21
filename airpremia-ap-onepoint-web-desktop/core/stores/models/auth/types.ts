import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import {
  ICountryCodeDetailResp,
  ISortedCountryCodeData,
} from '../../../api/auth/types';
import { IDiscountCodeResp } from '../booking';

export enum EAuthPopup {
  // 대문자로 변경
  LOGIN = 'login',
  SIGNUP = 'signup',
  DORMANT = 'dormant',
  FORGOT_EMAIL = 'forgotEmail',
  FORGOT_PASSWORD = 'forgotPassword',
  REGISTERED_USER = 'registeredUser',
}

export interface ITextInput {
  target: string;
  value: string;
  forceUpperCase?: boolean;
}

export interface IBlurData {
  target: string;
  data: IInputData;
}

export interface IInputData {
  value: string;
  error: boolean;
  msg: string | boolean[] | null;
}

export interface ICountryCodeDataCollection {
  countryCode: ICountryCodeDetailResp;
  countryCodeList: ICountryCodeDetailResp[];
  sortedCountryCodeData: ISortedCountryCodeData;
}

export interface IDiscountCodeDataCollection {
  discountCode: IDiscountCodeResp;
  discountCodeList: IDiscountCodeResp[];
}
export interface ITermsParams {
  status: boolean;
  target: string;
}

export interface IBirthDropdownParams {
  text: string;
  unique: string;
}

export interface IAuthState {
  isLogIn: boolean;
  hasToken: boolean;
  isLoginRequest: boolean;
  isCountryCodeRequest: boolean;
  isDiscountCodeRequest: boolean;
  isSignupSuccess: boolean;
  email: IInputData;
  frequentlyUsedEmail: IInputData;
  password: IInputData;
  firstName: IInputData;
  lastName: IInputData;
  phoneAuthToken: string;
  countryCodeList: ICountryCodeDetailResp[];
  countryCode: ICountryCodeDetailResp;
  sortedCountryCodeData: ISortedCountryCodeData;
  discountCode: IDiscountCodeResp;
  discountCodeList: IDiscountCodeResp[];
  authCode: string;
  phoneNumber: string;
  gender: string;
  birthDate: IInputData;
  termsCheckList: boolean[];

  [index: string]: any; // dynamic 변수 선언을 위해 추가함 ex> store[dynamic_variable]
}

export type IAuthAction = ActionType<typeof actions>;
