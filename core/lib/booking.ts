import moment from 'moment';
import {
  IKeyData,
  IFlightCalendarData,
  IPassengers,
} from '../stores/models/bookingSession';
import {
  map,
  mapKeys,
  filter,
  reduce,
  find,
  forEach,
} from 'lodash';
import {
  flow,
  compact,
  join,
  get,
  some,
  each,
  min,
} from 'lodash/fp';
import fpMap from 'lodash/fp/map';
import { IMarketsData } from '../api/ticket/types';
import {
  ECabinClassFareType,
  IPassengersInfomation,
  ICountryCodeData,
  IAddBookingSessionPassengerData,
} from '../stores/models/bookingSession';
// import { tmpdir } from 'os';

export const filterStationList = (
  list: IMarketsData[] | [],
  type: string,
  target: string,
) => filter(list, (item) => item[type] === target);

export const isIncludedStationInList = (
  list: IMarketsData[] | [],
  target: string,
  station: string,
) =>
  reduce(
    list,
    (prev, next) => {
      return prev || next[target] === station;
    },
    false,
  );

export const getDuration = (date: moment.Moment[]) =>
  date.length === 2
    ? moment.duration(date[1].diff(date[0])).asDays()
    : 0;

export const getInitalMarketList = (
  target: string,
  marketList: IMarketsData[],
): IMarketsData[] => {
  const res = marketList.map((item) => item[target]);
  const arr = Array.from(new Set(res));

  return marketList.filter((item) => {
    if (arr.includes(item[target])) {
      arr.splice(arr.indexOf(item[target]), 1);
      return item;
    }
  });
};

export const getStationLabel = (code: string) => {
  switch (code) {
    case 'ICN':
      return '서울/인천';
    case 'GMP':
      return '서울/김포';
    case 'CJU':
      return '제주';
    case 'HAN':
      return '하노이';
    case 'SGN':
      return '호치민';
    case 'KIX':
      return '오사카/간사이';
    case 'SAN':
      return '샌프란시스코';
    case 'NRT':
      return '도쿄/나리타';
    case 'HND':
      return '도쿄/하네다';
    case 'HNL':
      return '호놀룰루';
    case 'LAX':
      return '로스엔젤레스';
    case 'YVR':
      return '벤쿠버';
    case 'BKK':
      return '방콕';
    default:
      return '서울/인천';
  }
};

export const getClassFareTypeLanguage = (
  fareType: ECabinClassFareType,
) => {
  switch (fareType) {
    case ECabinClassFareType.BASIC:
      return '기본운임';
    case ECabinClassFareType.EVENT:
      return '이벤트운임';
    case ECabinClassFareType.POINT:
      return '포인트로 구매';
    default:
      return '기본운임';
  }
};

// 할인 대상 이부분일듯..?
export const getPassengerType = (code: string) => {
  switch (code) {
    case 'ADT':
      return 'adult';
    case 'CHD':
      return 'child';
    case 'INF':
      return 'infant';
    case 'INS':
      return 'infant';
    case 'DCA':
      return 'adult';
    case 'DCB':
      return 'adult';

    default:
      return 'adult';
  }
};

// export const getPaxType = (code: string) => {
//   switch (code) {
//     case 'ADT':
//       return 'ADT';
//     case 'INS':
//       return 'INS';
//     case 'DCA':       // Pax with Fare 50%, Airport fee 50% off(운임/세금 할인 대상자)
//       return 'DCA';
//     case 'DCB':       // Pax with Fare No DC, Airport fee 50% off(세금 할인 대상자)
//       return 'DCB';

//     default:
//       return 'ADT';
//   }
// };

/** 탑승객 정보 입력시 passengerForm을 그릴수 있도록 승객 수에 맞도록 배열 생성하는 함수 */
export const getBookingSessionPassengerData = (
  passengers: IAddBookingSessionPassengerData[],
  initialCountryCode: ICountryCodeData,
  passengersCount: IPassengers,
) => {
  const { infant, seatInfant } = passengersCount;
  const infantCount = infant - seatInfant;

  const getPassengerData = (
    acc: any,
    passenger: IAddBookingSessionPassengerData | null,
    passengerType: any,
  ) => {
    if (acc.hasOwnProperty(passengerType)) {
      const tmp = acc[passengerType];
      tmp.push({
        passengerKey: passenger?.key || null,
        countryCodeData: initialCountryCode,
      });
      return {
        ...acc,
        [passengerType]: [...tmp],
      };
    }

    return {
      ...acc,
      [passengerType]: [
        {
          passengerKey: passenger?.key || null,
          countryCodeData: initialCountryCode,
        },
      ],
    };
  };

  let data = reduce(
    passengers,
    (acc, it) => {
      const passengerType = getPassengerType(
        it.value.passengerTypeCode,
      );
      return getPassengerData(acc, it, passengerType);
    },
    {} as any,
  );

  if (infantCount > 0) {
    data = reduce(
      Array(infantCount).fill(''),
      (acc) => {
        return getPassengerData(acc, null, 'infant');
      },
      data,
    );
  }

  return data;
};

export const sortedFromMiddle = (list: Array<any>) => {
  const newList: Array<any> = [];
  const pivot = Math.floor(list.length / 2);
  let flag = 1;
  let newIdx = 0;
  forEach(list, (_, i) => {
    newIdx = i && i % 2 === 1 ? newIdx + 1 : newIdx;
    newList.push(list[pivot + newIdx * flag]);
    flag *= -1;
  });
  return newList;
};

export const getPivotDate = (list: Array<any>) =>
  find(sortedFromMiddle(list), (item) => item.available)
    .date;

export const getCabinClassRadioData = (
  base: null | string,
  key: string,
  code: string[],
  onChange: (e: any) => void,
) =>
  map(Array(code.length).fill(0), (_, i) => ({
    isActive: base === `${code[i]}/${key}`,
    target: `${code[i]}/${key}`,
    onChange,
  }));

export const getHumanizeTime = ({
  duration,
  language = 'ko',
}: {
  duration: number;
  language?: string;
}) => {
  const format = language === 'ko' ? 'H시간 mm분' : 'HH:mm';
  return moment
    .utc(moment.duration(duration, 'm').asMilliseconds())
    .format(format);
};

export const getAddPassengerData = (
  passengerData: IPassengersInfomation,
) => {
  const res: { [propName: string]: any } = {};

  Object.keys(passengerData).forEach((item) => {
    if (!passengerData[item].length) {
      return;
    }
    return forEach(passengerData[item], (info, i) => {
      let tmp = {};
      Object.keys(info).forEach((prop) => {
        if (!res.hasOwnProperty(item)) {
          res[item] = [];
        }

        //smartport.mhh title 추가
        if (prop === 'gender') {
          let tempTitle = '';
          switch (item) {
            case 'adult': tempTitle = (info[prop] == 'Male' ? 'MR' : 'MS'); break; //Mr(성인 남성), Ms(성인 여성)
            case 'child':
            case 'infant':
            default: tempTitle = (info[prop] == 'Male' ? 'MSTR' : 'MISS'); //Master(유소아 남아), Miss (유소아 여아)
          }
          tmp = { ...tmp, ['title']: tempTitle };
        }

        if (prop === 'passengerKey' || prop === 'gender') {
          tmp = { ...tmp, [prop]: info[prop] };
        } else if (prop === 'phoneNumber') {
          tmp = {
            ...tmp,
            [prop]: `+${info['countryCodeData'].countryNumber}${info[prop].value}`,
          };
        } else if (prop === 'countryCodeData') {
          return;
        } else if (prop === 'nationality') {
          tmp = { ...tmp, [prop]: info[prop] };
        } else if (prop === 'birthDate') {
          tmp = {
            ...tmp,
            dateOfBirth: moment(info[prop].value).format(
              'YYYY-MM-DD',
            ),
          };
        } else if (prop === 'nok') {
          tmp = { ...tmp, [prop]: info[prop] };
        } else if (prop === 'discountCode') {
          tmp = { ...tmp, [prop]: info[prop] };
        } else {
          tmp = { ...tmp, [prop]: info[prop].value };
        }
      });
      res[item][i] = { ...tmp };
    });
  });

  return res;
};

export const checkAddPassengerFieldFilled = (
  passengers: any,
): boolean => {
  let isActive = false;
  mapKeys(passengers, (value, key) => {
    
    if (!value.length) {
      isActive = false;
      return;
    }
    const common = ['title', 'gender', 'firstName', 'lastName', 'dateOfBirth', 'nationality'];
    const notInfantRequiredKeys = [
      ...common,
      'passengerKey',
    ];
    const infantRequiredKeys = [
      ...common,
      'nok',
    ];

    const targetArr =
      key === 'seatInfant'
        ? infantRequiredKeys
        : notInfantRequiredKeys;

    forEach(value, (item) => {
      isActive = reduce(
        targetArr,
        (acc, it) => {
          if(typeof item[it] === "undefined")
            delete item[it];
          // && typeof item[it] !== "undefined" >> 해당 값이 없으면 
          // Type 'number' is not assignable to type 'string'. 에러뜸          
          return acc && item.hasOwnProperty(it);
        },
        true,
      );
    });
  });

  return isActive;
};

export const getClassTypeLabel = (raw: string) => {
  switch (raw) {
    case 'Y':
    case 'y':
      return '이코노미';
    case 'W':
    case 'w':
      return '프리미엄 이코노미';
    default:
      return '';
  }
};

export const getPassengers = (list: any, id: string) => {
  const count = {
    adult: 0,
    child: 0,
    infant: 0,
  };

  flow(
    filter((passenger: any) => {
      return flow(
        get('journeys'),
        some(['journeyKey', id]),
      )(passenger);
    }),
    each((passenger: any) => {
      switch (passenger.type) {
        case 'ADT':
          count.adult += 1;
          break;
        case 'DCA':
          count.adult += 1;
          break;
        case 'DCB':
          count.adult += 1;
          break;
        case 'CHD':
          count.child += 1;
          break;
        case 'INF':
        case 'INS':
          count.infant += 1;
          break;
        default:
          break;
      }
    }),
  )(list);
  return count;
};

export const getPassengersLabel = ({
  adult,
  child,
  infant,
}: {
  adult?: number;
  child?: number;
  infant?: number;
}) => {
  const adultLabel = `성인 ${adult}`;
  const childLabel = child ? `소아 ${child}` : null;
  const infantLabel = infant ? `유아 ${infant}` : null;

  return flow(
    compact,
    join(', '),
  )([adultLabel, childLabel, infantLabel]);
};

export const hasValidKeys = (keys: IKeyData[]) =>
  keys.reduce(
    (acc, it) =>
      acc && !!it.journeyKey && !!it.fareAvailabilityKey,
    true,
  );

export const getFlightCalendarData = (
  journeys: IFlightCalendarData[],
) =>
  flow(
    fpMap((item: any) => {
      const minAmount = flow(
        fpMap((item: any) => item.lowfare.amount),
        min,
      )(item.lowfares);
      const lowfares = item.lowfares.reduce(
        (acc: any, it: any) => ({
          ...acc,
          [moment(it.date).format('YYMMDD')]: {
            ...it.lowfare,
            isLowestPrice: it.lowfare.amount === minAmount,
          },
        }),
        {},
      );

      return {
        ...item,
        lowfares,
      };
    }),
  )(journeys);
