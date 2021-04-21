import * as Constant from './constant';
import {
  includes,
  pickBy,
  identity,
  compact,
} from 'lodash';
import { flow, pick } from 'lodash/fp';
import {
  KR,
  ECurrencyType,
  ELanguageType,
} from './constant';
import { IInputData } from '../stores/models/auth';
import dayjs from 'dayjs';

export const START_YEAR = 1889;
const BASE_AGE = 31;

export const getConstantVowel = (kor: string) => {
  const f = [
    'ㄱ',
    'ㄲ',
    'ㄴ',
    'ㄷ',
    'ㄸ',
    'ㄹ',
    'ㅁ',
    'ㅂ',
    'ㅃ',
    'ㅅ',
    'ㅆ',
    'ㅇ',
    'ㅈ',
    'ㅉ',
    'ㅊ',
    'ㅋ',
    'ㅌ',
    'ㅍ',
    'ㅎ',
  ];
  const s = [
    'ㅏ',
    'ㅐ',
    'ㅑ',
    'ㅒ',
    'ㅓ',
    'ㅔ',
    'ㅕ',
    'ㅖ',
    'ㅗ',
    'ㅘ',
    'ㅙ',
    'ㅚ',
    'ㅛ',
    'ㅜ',
    'ㅝ',
    'ㅞ',
    'ㅟ',
    'ㅠ',
    'ㅡ',
    'ㅢ',
    'ㅣ',
  ];
  const t = [
    '',
    'ㄱ',
    'ㄲ',
    'ㄳ',
    'ㄴ',
    'ㄵ',
    'ㄶ',
    'ㄷ',
    'ㄹ',
    'ㄺ',
    'ㄻ',
    'ㄼ',
    'ㄽ',
    'ㄾ',
    'ㄿ',
    'ㅀ',
    'ㅁ',
    'ㅂ',
    'ㅄ',
    'ㅅ',
    'ㅆ',
    'ㅇ',
    'ㅈ',
    'ㅊ',
    'ㅋ',
    'ㅌ',
    'ㅍ',
    'ㅎ',
  ];

  const ga = 44032;
  let uni = kor.charCodeAt(0);

  uni = uni - ga;

  const fn = parseInt((uni / 588).toString());
  const sn = parseInt(((uni - fn * 588) / 28).toString());
  const tn = parseInt((uni % 28).toString());

  return {
    f: f[fn],
    s: s[sn],
    t: t[tn],
  };
};

export const getTimeHumanize = (time: number) => {
  const hour = Math.floor(time / 3600);
  const minute = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  return [hour, minute, seconds];
};

export const addComma = (num?: number | string): string => {
  if (num === '0' || num === 0) return '0';
  if (!num) return '';
  return num
    .toString()
    .replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
};

export const addSumComma = (num1?: number | string, num2?: number | string): string => {
  var result = Number(num1)+Number(num2);
  if(result === 0) return '0';
  
  return result
    .toString()
    .replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
};

export const convertMoney = (money: number): string => {
  if (money === 0) return '0';
  return addComma(money);
};

export const getMoney = (
  money: number,
  currenyCode: ECurrencyType | string,
  abbr?: boolean,
): string => {
  const division = abbr ? 10000 : 1;
  if (!includes(ECurrencyType, currenyCode)) return '';

  const currencySign: {
    [propName: string]: string;
  } = {
    [ECurrencyType.KRW]: abbr ? '만원' : '원',
    [ECurrencyType.USD]: '$',
    [ECurrencyType.JPY]: '¥',
    [ECurrencyType.CNY]: '¥',
    [ECurrencyType.VND]: '₫',
  };
  if (currenyCode === Constant.ECurrencyType.KRW) {
    return `${convertMoney(Math.floor(money / division))} ${
      currencySign[currenyCode]
    }`;
  }
  return `${currencySign[currenyCode]} ${convertMoney(
    money,
  )}`;
};

export const getSortedCountryCode = <
  T extends { [prop: string]: any },
  L extends keyof T
>(
  list: T[],
  lang: string,
  label: L,
) => {
  const obj: any = {};

  for (let i = 0; i < list.length; i++) {
    let firstChar;
    if (lang === KR) {
      firstChar = getConstantVowel(list[i][label][0]).f[0];
    } else {
      firstChar = list[i][label][0];
    }
    if (!obj.hasOwnProperty(firstChar)) {
      obj[firstChar] = [];
    }
    obj[firstChar].push({ ...list[i] });
  }

  return obj;
};

export const createCustomEvent = ({
  target = '',
  value = '',
}: {
  target: string;
  value: string;
}) => ({
  target: {
    dataset: { target },
    value,
  },
});
//language = 'ko', _end: number
export const getYear = ({
  language = 'ko',
  _end,
}: {
  language?: string;
  _end?: number;
}) => {
  const currYear = Number(dayjs().format('YYYY'));
  const end = _end || currYear - START_YEAR + 1;
  const yearList = [];

  for (let i = 0; i < end; i++) {
    const shortName = (i + START_YEAR).toString();
    yearList.push({
      text: `${shortName}${language === 'ko' ? '년' : ''}`,
      num: shortName,
      unique: 'year',
    });
  }

  return yearList;
};

export const getMonth = (language = 'ko') => {
  const yearList = [];

  // 1월 (JAN)
  for (let i = 1; i <= 12; i++) {
    let shortName: string = dayjs()
      .month(i - 1)
      .locale('en')
      .format('MMM');
    if (language === 'ko') {
      shortName = `${dayjs()
        .month(i - 1)
        .locale(language)
        .format('MMM')} (${shortName})`;
    }

    yearList.push({
      text: shortName,
      num: i.toString(),
      unique: 'month',
    });
  }

  return yearList;
};

export const getDays = (
  year: string,
  month: string,
  language = 'ko',
) => {
  const currentYear = Number(dayjs().format('YYYY'));
  const defaultYear = currentYear - BASE_AGE;
  const newYear = isNaN(Number(year)) ? defaultYear : year;
  const _month = isNaN(Number(month)) ? '01' : month;
  const newMonth =
    _month.length === 1 ? '0' + _month : _month;
  const date = `${newYear}${newMonth}01`;
  const end = Number(
    dayjs(date).endOf('month').format('DD'),
  );
  const dayList = [];

  for (let i = 1; i <= end; i++) {
    dayList.push({
      text: `${i.toString()}${
        language === 'ko' ? '일' : ''
      }`,
      num: i.toString(),
      unique: 'day',
    });
  }

  return dayList;
};

export const getScrollTopPosition = (
  value: string,
  focus?: string,
): number => {
  const paddingTop = 15;
  const itemHeight = 50;
  const currentYear = Number(dayjs().format('YYYY'));
  let itemTotalHeight: number;

  if (focus === 'year') {
    if (isNaN(Number(value)) || value === '') {
      itemTotalHeight =
        itemHeight * (currentYear - BASE_AGE - START_YEAR);
    } else {
      itemTotalHeight =
        itemHeight * (Number(value) - START_YEAR);
    }
  } else {
    if (isNaN(Number(value)) || value === '') {
      return 0;
    } else {
      itemTotalHeight = itemHeight * (Number(value) - 1);
    }
  }

  return paddingTop + itemTotalHeight;
};

export const isAllCheck = (list: boolean[]) => {
  const _list = list.slice(1);
  if (!_list.includes(false)) {
    return [true, true, true, true, true];
  }
  return [false, ..._list];
};

export const getBirthDate = (
  y: string,
  m: string,
  d: string,
) =>
  y.toString() +
  '/' +
  (m.length < 2 ? '0' + m : m) +
  '/' +
  (d.length < 2 ? '0' + d : d);

export const getCurrencyLabel = (currency: string) => {
  const { KRW, JPY, USD, VND, CNY } = ECurrencyType;
  const labelData: { [index: string]: string } = {
    [KRW]: '원',
    [JPY]: '¥',
    [USD]: '$',
    [CNY]: '¥',
    [VND]: '₫',
  };
  return labelData[currency];
};

export const convertPassengerType = (type: string) => {
  switch (type) {
    case 'ADT':
      return '성인';
    case 'CHD':
      return '소아';
    case 'INF':
      return '유아';
    case 'INS':
      return '유아';

    default:
      return '';
  }
};

export const convertGenderType = (
  type: string,
  abbr?: boolean,
) => {
  const _type = type.toUpperCase();

  switch (_type) {
    case 'MALE':
      return abbr ? '남' : '남자';
    case 'FEMALE':
      return abbr ? '여' : '여자';

    default:
      return '';
  }
};

/**
 * ex> { a: 1, b: undefined }  // { a: 1 }
 */
export const getValuableObject = <
  T extends { [key: string]: any }
>(
  obj: T,
) => pickBy(obj, identity);

/**
 * ex> [1, 2, undefined]  // { 1, 2 }
 */
export const getValuableArray = (arr: any[]) =>
  compact(arr);

const tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
export const getLocalISOTime = (date: string) => {
  // ex> date: '1989/02/01'
  return new Date(new Date(date).getTime() - tzoffset)
    .toISOString()
    .slice(0, -1);
};

/**
 * ex> reduceObjProperty({ a: 1, b: 2, c: 3 }, [a, c])  // { a: 1, c: 3 }
 */
export const reduceObjProperty = <
  T extends { [key: string]: any }
>(
  obj: T,
  model: string | string[],
): T => flow(pick(model), compact)(obj);

/** input data default 값 생성기 */
export const makeDefaultInputData = (
  value: string,
): IInputData => ({
  value,
  error: false,
  msg: '',
});

// 영어 이외의 다국어 추가될 때 수정해야함
export const getCurrencyType = (lang: ELanguageType) => {
  switch (lang) {
    case ELanguageType.KR:
      return ECurrencyType.KRW;
    default:
      return ECurrencyType.USD;
  }
};
