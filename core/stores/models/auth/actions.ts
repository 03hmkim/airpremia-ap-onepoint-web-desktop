import { AxiosError } from 'axios';
import {
  createAction,
  createAsyncAction,
} from 'typesafe-actions';
import {
  ILoginRequiredData,
  ISimpleValueData,
  ISortedCountryCodeData,
  ICountryCodeDetailResp,
} from '../../../api/auth/types';
import {
  ITextInput,
  IBlurData,
  ICountryCodeDataCollection,
  IDiscountCodeDataCollection,
  ITermsParams,
} from './types';
import {
  IPostUserConfirmPhoneAuthCode,
  IPostUserJoin,
} from '@airpremia/core/api/user/types';
import { CommonResp } from '@airpremia/core/api/config';

/** 스토어 초기화 */
export const INIT_STORE = 'auth/INIT_STORE';
export const handleStoreInit = createAction(INIT_STORE)();

/** 로그인 (회원토큰 발급) */
export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

export const loginActions = createAsyncAction(
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
)<ILoginRequiredData, void, AxiosError>();

/** 비회원 토큰 발급 */
export const ANONYMOUS_TOKEN_REQUEST =
  'auth/ANONYMOUS_TOKEN_REQUEST';
export const ANONYMOUS_TOKEN_SUCCESS =
  'auth/ANONYMOUS_TOKEN_SUCCESS';
export const ANONYMOUS_TOKEN_FAILURE =
  'auth/ANONYMOUS_TOKEN_FAILURE';

export const anonymousTokenActions = createAsyncAction(
  ANONYMOUS_TOKEN_REQUEST,
  ANONYMOUS_TOKEN_SUCCESS,
  ANONYMOUS_TOKEN_FAILURE,
)<void, void, AxiosError>();

/** 회원가입 */
export const SIGNUP_REQUEST = 'auth/SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'auth/SIGNUP_FAILURE';

export const signupActions = createAsyncAction(
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
)<IPostUserJoin, void, AxiosError>();

/** Auth에서 사용하는 Input change action */
export const INPUT_DATA_CHANGE = 'auth/INPUT_DATA_CHANGE';
export const handleInputDataChange = createAction(
  INPUT_DATA_CHANGE,
)<ITextInput>();

/** Auth에서 사용하는 Input blur action */
export const INPUT_DATA_BLUR = 'auth/INPUT_DATA_BLUR';
export const handleInputBlur = createAction(
  INPUT_DATA_BLUR,
)<IBlurData>();

/** Auth input의 simple string 변경 */
export const VALUE_CHANGE = 'auth/VALUE_CHANGE';
export const handleValueChange = createAction(VALUE_CHANGE)<
  ISimpleValueData
>();

/** Call Country code list */
export const COUNTRY_CODE_REQUEST =
  'auth/COUNTRY_CODE_REQUEST';
export const COUNTRY_CODE_SUCCESS =
  'auth/COUNTRY_CODE_SUCCESS';
export const COUNTRY_CODE_FAILURE =
  'auth/COUNTRY_CODE_FAILURE';

export const countryCodeActions = createAsyncAction(
  COUNTRY_CODE_REQUEST,
  COUNTRY_CODE_SUCCESS,
  COUNTRY_CODE_FAILURE,
)<void, ICountryCodeDataCollection, AxiosError>();

/** Call Discount code list */
export const DISCOUNT_CODE_REQUEST =
  'booking/DISCOUNT_CODE_REQUEST';
export const DISCOUNT_CODE_SUCCESS =
  'booking/DISCOUNT_CODE_SUCCESS';
export const DISCOUNT_CODE_FAILURE =
  'booking/DISCOUNT_CODE_FAILURE';

export const handleDiscountCodeActions = createAsyncAction(
  DISCOUNT_CODE_REQUEST,
  DISCOUNT_CODE_SUCCESS,
  DISCOUNT_CODE_FAILURE,
)<void, IDiscountCodeDataCollection, AxiosError>();

/** CountryCode Change */
export const COUNTRY_CODE_CHANGE =
  'auth/COUNTRY_CODE_CHANGE';

export const handleCountryCodeChange = createAction(
  COUNTRY_CODE_CHANGE,
)<ICountryCodeDetailResp>();

/** Country code filtering */
export const SORTED_COUNTRY_CODE_CHANGE =
  'auth/SORTED_COUNTRY_CODE_CHANGE';

export const handleSortedCountryCodeChange = createAction(
  SORTED_COUNTRY_CODE_CHANGE,
)<ISortedCountryCodeData>();

/** 사용자 회원가입 시 휴대폰 인증 액션 */
export const PHONE_AUTH_REQUEST = 'auth/PHONE_AUTH_REQUEST';
export const PHONE_AUTH_SUCCESS = 'auth/PHONE_AUTH_SUCCESS';
export const PHONE_AUTH_FAILURE = 'auth/PHONE_AUTH_FAILURE';

export const phoneAuthActions = createAsyncAction(
  PHONE_AUTH_REQUEST,
  PHONE_AUTH_SUCCESS,
  PHONE_AUTH_FAILURE,
)<IPostUserConfirmPhoneAuthCode, CommonResp, AxiosError>();

/** 성별 변경 action */
export const GENDER_CHANGE = 'auth/GENDER_CHANGE';

export const handleGenderChange = createAction(
  GENDER_CHANGE,
)<string>();

/** 약관 동의 체크 action */
export const TERMS_CHANGE = 'auth/TERMS_CHANGE';

export const handleTermsChange = createAction(TERMS_CHANGE)<
  ITermsParams
>();

/** 특정 필드 내용 초기화 */
export const ERASE_INPUT_FIELD = 'auth/ERASE_INPUT_FIELD';

export const handleEraseInputField = createAction(
  ERASE_INPUT_FIELD,
)<{ key: string }>();
