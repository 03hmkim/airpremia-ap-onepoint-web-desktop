import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import { ECurrencyType } from '../../../lib/constant';

export interface ICurrencyData {
  label: string;
  unit: ECurrencyType;
}

export interface ILanguageData {
  text: string;
  code: string;
}

export interface ILanguageTextProps {
  [propName: string]: any;
}

export interface ICommonState {
  isCountryCodeRequest: boolean;
  currency: ICurrencyData;
  language: ILanguageData;
  languageList: ILanguageData[];
  currencyList: ECurrencyType[];
}

export type ICommonAction = ActionType<typeof actions>;
