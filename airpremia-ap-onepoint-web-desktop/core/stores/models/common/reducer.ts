import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import {
  LANGUAGE_CHANGE,
  CURRENCY_CHANGE,
} from './actions';
import {
  ICurrencyData,
  ILanguageData,
  ICommonAction,
  ICommonState,
} from './types';
import {
  KR,
  US,
  JP,
  CN,
  TW,
  VN,
  ELanguageType,
  ECurrencyType,
} from '../../../lib/constant';
import { getCurrencyLabel } from '../../../lib/service';

const initialLanguageData: ILanguageData = {
  text: '한국어',
  code: ELanguageType.KR,
};

const initialCurrencyData: ICurrencyData = {
  label: '원',
  unit: ECurrencyType.KRW,
};

const languageList: ILanguageData[] = [
  { text: '한국어', code: KR },
  { text: 'English', code: US },
  { text: '日本語', code: JP },
  { text: '简体中文', code: CN }, // 간체
  { text: '繁體中文', code: TW }, // 번체
  { text: 'Tiếng việt nam', code: VN },
];

const currencyList = [
  ECurrencyType.KRW,
  ECurrencyType.USD,
  ECurrencyType.JPY,
  ECurrencyType.CNY,
  ECurrencyType.VND,
];

const initialState: ICommonState = {
  isCountryCodeRequest: false,
  currency: initialCurrencyData, // 결제 통화
  language: initialLanguageData,
  languageList: languageList,
  currencyList: currencyList,

  // text: ILanguageTextProps // 언어 데이터들
};

const common = createReducer<ICommonState, ICommonAction>(
  initialState,
  {
    [LANGUAGE_CHANGE]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.language = payload;

        // @TODO: SSR에 문제 없는지 체크 해야함.
        localStorage.setItem('language', payload.code);
        window.location.reload();
      }),

    [CURRENCY_CHANGE]: (state, { payload }) =>
      produce(state, (draft) => {
        const { unit } = payload;
        const label = getCurrencyLabel(unit);
        draft.currency = {
          unit,
          label,
        };
      }),
  },
);

export default common;
