import {
  find,
  flow,
  get,
  join,
  last,
  map,
} from 'lodash/fp';
import { pick } from 'lodash';
import {
  ECabinClass,
  IIdLabel,
} from '@airpremia/core/lib/types';
import dayjs from 'dayjs';

export const commaNumber = (v?: number) =>
  `${(v || 0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    .replace('-', '- ')}`;

export const guid = () => {
  const s4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0)
      .toString(16)
      .substring(1);
  };
  return (
    s4() +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    s4() +
    s4()
  );
};

export const toggleBoolean = (
  fn: (value: boolean) => void,
  value: boolean,
) => () => {
  fn(!value);
};

export const getLabelInList = (targetId?: string) => (
  list: any,
) => {
  if (!targetId) return '';

  return flow(find(['id', targetId]), get('label'))(list);
};

export const getApgQueries = (arr: string[]) => {
  return flow(
    map((item: string) => {
      return `${item}={${item}}`;
    }),
    join('&'),
  )(arr);
};

/** Object Array 에서 특정 property 만 가진 Object Array 생성(fp용)
 * ex)
 * [{a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3}]
 * => mapToPick(['a','c'])
 * => [{a: 1, c: 3}, {a: 1, c: 3}]
 * */
export const mapToPick = (picks: string[]) => (list: any) =>
  list.map((item: any) => pick(item, picks));

export const getLastId = (list?: IIdLabel[]) => {
  if (!list) return '';

  return flow(last, get('id'))(list);
};

export const isLastId = (id: string, list?: IIdLabel[]) => {
  if (!list) return false;

  return id == getLastId(list);
};

export const getECabinClass = (raw: string) => {
  switch (raw) {
    case 'W':
      return ECabinClass.PREMIUM;
    case 'Y':
      return ECabinClass.ECONOMY;
  }
};

/** mapSplit 함수에서 string값에 대해 split 할 수 있게 도와주는 함수 */
const mapStrSplit = (
  value: string,
  cb?: (s: string, i: number) => void,
  filter = '\n',
) => {
  if (!cb) {
    return value.split(filter);
  }

  return value
    .split(filter)
    .map((item: string, i: number) => cb(item, i));
};

/** interface type이 string 또는 ReactElement일 경우 사용할 수 있도록 만든 함수
 * string 일 경우 filter값을 통해 split이 되어진다.
 * ReactElement일 경우 들어온 값을 그대로 리턴함으로서 인입된 값이 그대로 화면에 노출된다.
 */
export const mapSplit = (
  value: any,
  cb?: (s: string, i: number) => void,
  filter?: string,
) =>
  typeof value === 'string'
    ? mapStrSplit(value, cb, filter)
    : value;

/** 이메일 마스킹 */
export const maskingEmail = (email: string, until = 2) => {
  if (email.indexOf('@') < 0) return email;

  const [id, address] = email.split('@');

  return `${id.slice(0, until)}${Array(id.length - until)
    .fill('*')
    .join('')}@${address}`;
};

/** 여권만료일 날짜 라벨
 * @param value '2020-01-01'
 * @return 01 / JAN / 2020
 */
export const getPassportExpiringAtLabel = (
  value: string,
): string => {
  const mom = dayjs(value);
  const day = mom.format('DD');
  const month = mom.format('MMM').toUpperCase();
  const year = mom.format('YYYY');
  return `${day} / ${month} / ${year}`;
};

export const isMobile = () => {
  if (!window.navigator) return false;

  return /Mobi/i.test(window.navigator.userAgent);
};

export const getDateStr = (date: string) => {
  return dayjs(date).format('YYYY. M. D.');
};
