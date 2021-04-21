import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import {
  INIT_STORE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  VALUE_CHANGE,
  INPUT_DATA_CHANGE,
  INPUT_DATA_BLUR,
  COUNTRY_CODE_REQUEST,
  COUNTRY_CODE_SUCCESS,
  COUNTRY_CODE_FAILURE,
  COUNTRY_CODE_CHANGE,
  SORTED_COUNTRY_CODE_CHANGE,
  DISCOUNT_CODE_REQUEST,
  DISCOUNT_CODE_SUCCESS,
  DISCOUNT_CODE_FAILURE,
  GENDER_CHANGE,
  TERMS_CHANGE,
  ERASE_INPUT_FIELD,
  ANONYMOUS_TOKEN_REQUEST,
  ANONYMOUS_TOKEN_FAILURE,
  ANONYMOUS_TOKEN_SUCCESS,
} from './actions';
import { IAuthState, IAuthAction } from './types';
import { ICountryCodeDetailResp } from '../../../api/auth/types';
import { IInputData } from './types';
import { checkValid } from '../../../lib/auth';
import { isAllCheck } from '../../../lib/service';
import { initialDiscountCode } from '../booking/reducer';

const initialData: IInputData = {
  value: '',
  error: false,
  msg: '',
};

export const initialCountryCode: ICountryCodeDetailResp = {
  countryNumber: 82,
  description: '대한민국 (+82)',
};

const initialCheckList = [
  false,
  false,
  false,
  false,
  false,
];

export const initalState: IAuthState = {
  isLogIn: false,
  hasToken: false,
  isLoginRequest: false, // @TODO: isUserTokenRequest? 로 변경
  isCountryCodeRequest: false,
  isDiscountCodeRequest: false,
  isSignupSuccess: false,
  email: initialData,
  frequentlyUsedEmail: initialData,
  password: initialData,

  firstName: initialData,
  lastName: initialData,
  phoneAuthToken: '',
  discountCode: initialDiscountCode,
  discountCodeList: [],

  countryCodeList: [],
  countryCode: initialCountryCode,
  sortedCountryCodeData: {},
  authCode: '',
  phoneNumber: '',

  gender: '',
  birthDate: initialData,
  termsCheckList: initialCheckList,
};

const auth = createReducer<IAuthState, IAuthAction>(
  initalState,
  {
    [INIT_STORE]: () => initalState,

    [ANONYMOUS_TOKEN_REQUEST]: (state) =>
      produce(state, (draft) => {
        draft.hasToken = false;
      }),
    [ANONYMOUS_TOKEN_SUCCESS]: (state) =>
      produce(state, (draft) => {
        draft.hasToken = true;
      }),
    [ANONYMOUS_TOKEN_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.hasToken = false;
      }),

    [LOGIN_REQUEST]: (state) =>
      produce(state, (draft) => {
        draft.hasToken = false;
        draft.isLoginRequest = true;
      }),
    [LOGIN_SUCCESS]: (state) =>
      produce(state, (draft) => {
        draft.isLogIn = true;
        draft.hasToken = true;
        draft.isLoginRequest = false;
      }),
    [LOGIN_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.hasToken = false;
        draft.isLoginRequest = false;
      }),

    [VALUE_CHANGE]: (state, { payload }) =>
      produce(state, (draft) => {
        const { target, value } = payload;
        draft[target] = value;
      }),

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

    [SORTED_COUNTRY_CODE_CHANGE]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.sortedCountryCode = payload;
      }),

    [COUNTRY_CODE_CHANGE]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.countryCode = payload;
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
        draft.isCountryCodeRequest = false;
        draft.discountCode = discountCode;
        draft.discountCodeList = discountCodeList;
      }),
    [DISCOUNT_CODE_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.isDiscountCodeRequest = false;
      }),

    [GENDER_CHANGE]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.gender = payload;
      }),

    [TERMS_CHANGE]: (state, { payload }) =>
      produce(state, (draft) => {
        let checkList = [...state.termsCheckList];
        const { status, target } = payload;

        if (target === 'all') {
          checkList.fill(status ? true : false);
        } else {
          checkList.splice(Number(target), 1, status);
          checkList = [...isAllCheck(checkList)];
        }
        draft.termsCheckList = checkList;
      }),

    [ERASE_INPUT_FIELD]: (state, { payload }) =>
      produce(state, (draft) => {
        draft[payload.key] = initialData;
      }),

    [SIGNUP_SUCCESS]: (state) =>
      produce(state, (draft) => {
        draft.isSignupSuccess = true;
      }),
  },
);
export default auth;
