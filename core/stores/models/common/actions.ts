import { createAction } from 'typesafe-actions';
import { ILanguageData } from './types';
import { ECurrencyType } from '../../../lib/constant';

/** 언어변경 */
export const LANGUAGE_CHANGE = 'common/LANGUAGE_CHANGE';
export const handleLanguageChange = createAction(
  LANGUAGE_CHANGE,
)<ILanguageData>();

/** 화폐 변경 */
export const CURRENCY_CHANGE = 'common/CURRENCY_CHANGE';
export const handleCurrencyChange = createAction(
  CURRENCY_CHANGE,
)<{ unit: ECurrencyType }>();
