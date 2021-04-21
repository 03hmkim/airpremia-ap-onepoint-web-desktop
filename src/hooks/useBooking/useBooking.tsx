import { flow, get, map, find, head, sum, compact, mergeWith, isArray, first } from 'lodash/fp';
import queryString from 'query-string';
import { useCallback, useMemo } from 'react';
import { ICountryCodeRespCounty } from '@airpremia/core/stores/models/booking';
import { useBooking } from '@airpremia/core/hooks';
import { checkValid } from '@airpremia/core/lib/auth';
import { IInputData } from '@airpremia/core/stores/models/auth';
import {
  DARK_GRAY1,
  RED2,
} from '@airpremia/cdk/styles/colors';
import {
  getClassTypeLabel,
  getPassengers,
  getPassengersLabel,
} from '@airpremia/core/lib/booking';
import moment from 'moment';
import {
  getCurrencyLabel,
  addComma,
} from '@airpremia/core/lib/service';
import { EPayReceiptType } from 'src/components/organisms/payReceipt';
import { ETicketReceiptItemType } from 'src/components/organisms/ticketReceipt';
import { EPassengerReceiptItemType } from 'src/components/organisms/passengerReceipt';

export default () => {
  const {
    bookingSessionStore,
    bookingStore,
    // onChangeReferenceCode,
  } = useBooking();

  const { countryCodeList } = bookingStore;
  const { isBookingSessionSearchSuccess, isBookingSessionSearchFailure } = bookingSessionStore;

  const bookingSession = useMemo(() => {
    return flow(get('bookingSession'))(bookingSessionStore);
  }, [bookingSessionStore.bookingSession]);

  const { journeyBreakdowns, passengerInfos } = bookingSession;
  const getTags = useCallback((journey: any) => {
    const result = [
      {
        label: `${journey.origin} → ${journey.destination}`,
        backgroundColor: DARK_GRAY1,
      },
    ];

    // TODO 환불 불가 flag 필요. 백엔드 문의
    const canRefund = true;
    if (!canRefund) {
      return [
        ...result,
        {
          label: '환불불가',
          backgroundColor: RED2,
        },
      ];
    } else {
      return result;
    }
  }, []);

  const getTotalPrice = useCallback(
    (id: string) => {
      return flow(
        get('journeyBreakdowns'),
        find(['journeyKey', id]),
        get('totalPrice'),
      )(bookingSession);
    },
    [bookingSession],
  );
  
  const getPassengersLabelFromId = useCallback(
    (id: string) => {
      const count = getPassengers(
        flow(get('passengers'))(bookingSession),
        id, // id = tripId(journeyKey)
      );
      return getPassengersLabel(count);
    },
    [bookingSession],
  );

  const getTicket = useMemo(() => {
    return flow(
      get('boardingPassInfo.journeys'),
      map((journey: any) => {
        return {
          id: journey.journeyKey,
          tags: getTags(journey),
          origin: journey.originText,
          destination: journey.destinationText,
          originTime: moment(journey.departure).format(
            'HH : mm',
          ),
          destinationTime: moment(journey.arrival).format(
            'HH : mm',
          ),
          startDate: moment(journey.departure)
            .locale('ko')
            .format('YYYY. M. D (dd)'),
          classType: getClassTypeLabel(journey.cabinClass),
          price: flow(
            get('journeyKey'),
            getTotalPrice,
            addComma,
          )(journey),
          passengers: getPassengersLabelFromId(
            journey.journeyKey,
          ),
          currency: getCurrencyLabel(
            bookingSession.currencyCode,
          ),
        };
      }),
    )(bookingSession);
  }, [bookingSession]);
  
  /** 항공권별 영수증 헤더 */
  const getTicketHeaderDetail = useMemo (() => {
    return flow(
      get('boardingPassInfo.journeys'),
      map((journey: any) => {
        return {
          titleLabel: `${journey.originText} → ${journey.destinationText}`,
          classLabel: getClassTypeLabel(journey.cabinClass),
          passengersLabel: getPassengersLabelFromId(journey.journeyKey),
        }
      }),
    )(bookingSession);
  }, [bookingSession]);

  const tripTypeText = useMemo(() => {
    return flow(get('bookingInfo.tripTypeText'))(
      bookingSession,
    );
  }, [bookingSession]);

  const titleJourneyLabel = useMemo(() => {
    return `${flow(get('bookingInfo.originText'))(
      bookingSession,
    )} - ${flow(get('bookingInfo.destinationText'))(
      bookingSession,
    )}`;
  }, [bookingSession]);

  const titlePassengersLabel = useMemo(() => {
    return flow(head, get('passengers'))(getTicket);
  }, [getTicket]);

  const totalFarePrice = useMemo(() => {
    return flow(get('breakdown.totalFarePrice'))(
      bookingSession,
    );
  }, [bookingSession]);
  const totalTaxAndFee = useMemo(() => {
    return flow(get('breakdown.totalTaxAndFee'))(
      bookingSession,
    );
  }, [bookingSession]);
  const totalSsrPrice = useMemo(() => {
    return flow(get('breakdown.totalSsrPrice'))(
      bookingSession,
    );
  }, [bookingSession]);
  const balanceDue = useMemo(() => {
    return flow(get('breakdown.balanceDue'))(
      bookingSession,
    );
  }, [bookingSession]);
  
  //smartport.mhh 프로모션 추가
  const totalPromotionDiscount = useMemo(() => {
    return flow(get('breakdown.totalPromotionDiscount'))(
      bookingSession,
    );
  }, [bookingSession.breakdown]);

  //smartport.mhh 바우처 추가
  const totalVoucherDiscount = useMemo(() => {
    return flow(
      get('payments'),
      map((payment: any) => {
        if (payment.code === 'VO') return payment.amount;
      }),
      sum,
    )(bookingSession);
  }, [bookingSession.payments]);

  const voucherPayment = useMemo(() => {
    const vp = flow(
      get('payments'),
      map((payment: any) => {
        if (payment.code === 'VO') return payment.details;
      }),
      map((detail) => {
        return {
          reference: detail?.accountNumber,
          voucherCodeText: detail?.codeText,
        };
      }),
      compact,
    )(bookingSession);
    return flow(map((item: any) => item), first)(vp);
  }, [bookingSession.payments]);

  const passengers = flow(
    get('passengers'),
  )(bookingSession);

  const passengersCount = passengers?.length;

  const getBeginTicketAirFare = flow(
    get(0),
    get('totalFarePrice')
  )(journeyBreakdowns);

  const getEndTicketAirFare = flow(
    get(1),
    get('totalFarePrice')
  )(journeyBreakdowns);

  const getBeginTicketAirFareDiscount = flow(
    get(0),
    get('totalFarePriceDiscount')
  )(journeyBreakdowns)

  const getEndTicketAirFareDiscount = flow(
    get(1),
    get('totalFarePriceDiscount')
  )(journeyBreakdowns)

  const getBeginTicketPromotionDiscount = flow(
    get(0),
    get('totalPromotionDiscount'),
  )(journeyBreakdowns)

  const getEndTicketPromotionDiscount = flow(
    get(1),
    get('totalPromotionDiscount'),
  )(journeyBreakdowns)

  const passengerBeginBreakdowns = flow(
    map ((passenger: any) =>{
      return {
        breakdowns: passenger.journeys[0]?.breakdown,
      }
    }),
  )(passengerInfos);

  const passengerEndBreakdowns = flow(
    map ((passenger: any) =>{
      return {
        breakdowns: passenger.journeys[1]?.breakdown,
      }
    }),
  )(passengerInfos);

  var beginfuelfee = 0;
  var beginairportfee = 0;
  var endfuelfee = 0;
  var endairportfee = 0;
  var beginSeatFee = 0;
  var endSeatFee = 0;

  const beginPassengerTicketMap = flow(
    map ((passenger: any) => {
      return {
        totalFare: passenger.breakdowns?.totalFarePrice,
        fuelFee: flow(
          find(['code', 'YQ']),
          get('amount'),
        )(passenger.breakdowns?.taxesAndFees),
        airportFee: flow(
          find(['code', 'BP']),
          get('amount'),
        )(passenger.breakdowns?.taxesAndFees),
        seatFee: flow(
          find(['code', 'ASD']),
          get('amount'),
        )(passenger.breakdowns?.specialServices),
        totalPrice: passenger.breakdowns?.totalPrice,
        totalFareDiscount: passenger.breakdowns?.totalFarePriceDiscount,
        totalPromotionDiscount: passenger.breakdowns?.totalPromotionDiscount,
      }
    })
  )(passengerBeginBreakdowns)

  const endPassengerTicketMap = flow(
    map ((passenger: any) => {
      return {
        totalFare: passenger.breakdowns?.totalFarePrice,
        fuelFee: flow(
          find(['code', 'YQ']),
          get('amount'),
        )(passenger.breakdowns?.taxesAndFees),
        airportFee: flow(
          find(['code', 'BP']),
          get('amount'),
        )(passenger.breakdowns?.taxesAndFees),
        seatFee: flow(
          find(['code', 'ASD']),
          get('amount'),
        )(passenger.breakdowns?.specialServices),
        totalPrice: passenger.breakdowns?.totalPrice,
        totalFareDiscount: passenger.breakdowns?.totalFarePriceDiscount,
        totalPromotionDiscount: passenger.breakdowns?.totalPromotionDiscount,
      }
    })
  )(passengerEndBreakdowns)

  if(bookingSession?.journeys?.length===1){
    for(var i=0;i<passengersCount;i++){
      beginairportfee += (beginPassengerTicketMap[i]?.airportFee === undefined ? 0 : beginPassengerTicketMap[i]?.airportFee);
      beginfuelfee += (beginPassengerTicketMap[i]?.fuelFee === undefined ? 0 : beginPassengerTicketMap[i]?.fuelFee);
      beginSeatFee += (beginPassengerTicketMap[i]?.seatFee === undefined ? 0 : beginPassengerTicketMap[i]?.seatFee);
    }
  } else {
    for(var i=0;i<passengersCount;i++){
      beginairportfee += (beginPassengerTicketMap[i]?.airportFee === undefined ? 0 : beginPassengerTicketMap[i]?.airportFee);
      beginfuelfee += (beginPassengerTicketMap[i]?.fuelFee === undefined ? 0 : beginPassengerTicketMap[i]?.fuelFee);
      endairportfee += (endPassengerTicketMap[i]?.airportFee === undefined ? 0 : endPassengerTicketMap[i]?.airportFee);
      endfuelfee += (endPassengerTicketMap[i]?.fuelFee === undefined ? 0 : endPassengerTicketMap[i]?.fuelFee);
      beginSeatFee += (beginPassengerTicketMap[i]?.seatFee === undefined ? 0 : beginPassengerTicketMap[i]?.seatFee);
      endSeatFee += (endPassengerTicketMap[i]?.seatFee === undefined ? 0 : endPassengerTicketMap[i]?.seatFee);
    }
  }

  const beginTicketPriceDataset = [
    {
      type: ETicketReceiptItemType.AIR_FARE,
      value: getBeginTicketAirFare,
    },
    {
      type: ETicketReceiptItemType.AIR_FARE_DISCOUNT,
      value: getBeginTicketAirFareDiscount != 0 ? `- ${getBeginTicketAirFareDiscount}` : 0,
    },
    {
      type: ETicketReceiptItemType.PROMOTION_DISCOUNT,
      value: getBeginTicketPromotionDiscount != 0 ? `- ${getBeginTicketPromotionDiscount}` : 0,
    },
    {
      type: ETicketReceiptItemType.FUEL_SURCHARGE,
      value: beginfuelfee,
    },
    {
      type: ETicketReceiptItemType.AIRPORT_FACILITY_FEE,
      value: beginairportfee,
    },
    {
      type: ETicketReceiptItemType.SEAT,
      value: beginSeatFee,
    },
  ];
  
  const endTicketPriceDataset = [
      {
        type: ETicketReceiptItemType.AIR_FARE,
        value: getEndTicketAirFare,
      },
      {
        type: ETicketReceiptItemType.AIR_FARE_DISCOUNT,
        value: getEndTicketAirFareDiscount != 0 ? `- ${getEndTicketAirFareDiscount}` : 0,
      },
      {
        type: ETicketReceiptItemType.PROMOTION_DISCOUNT,
        value: getEndTicketPromotionDiscount != 0 ? `- ${getEndTicketPromotionDiscount}` : 0,
      },
      {
        type: ETicketReceiptItemType.FUEL_SURCHARGE,
        value: endfuelfee,
      },
      {
        type: ETicketReceiptItemType.AIRPORT_FACILITY_FEE,
        value: endairportfee,
      },
      {
        type: ETicketReceiptItemType.SEAT,
        value: endSeatFee,
      },
  ];

  const beginPassengersPriceDataset = flow(
    map((passenger: any) => {
      return {beginDateItems: [
        {
          type: EPassengerReceiptItemType.AIR_FARE,
          value: passenger.totalFare,
        },
        {
          type: EPassengerReceiptItemType.AIR_FARE_DISCOUNT,
          value: passenger.totalFareDiscount != 0 ? `- ${passenger.totalFareDiscount}` : 0,
        },
        {
          type: EPassengerReceiptItemType.PROMOTION_DISCOUNT,
          value: passenger.totalPromotionDiscount != 0 ? `- ${passenger.totalPromotionDiscount}` : 0,
        },
        {
          type: EPassengerReceiptItemType.FUEL_SURCHARGE,
          value: passenger.fuelFee,
        },
        {
          type: EPassengerReceiptItemType.AIRPORT_FACILITY_FEE,
          value: passenger.airportFee,
        },
        {
          type: EPassengerReceiptItemType.SEAT,
          value: passenger.seatFee ,
        },
        {
          type: EPassengerReceiptItemType.SUBTOTAL_AMOUNT,
          value: passenger.totalPrice,
        },
      ]}
    })
  )(beginPassengerTicketMap)

  const endPassengersPriceDataset = flow(
    map((passenger: any) => {
      return {endDateItems: [
        {
          type: EPassengerReceiptItemType.AIR_FARE,
          value: passenger.totalFare,
        },
        {
          type: EPassengerReceiptItemType.AIR_FARE_DISCOUNT,
          value: passenger.totalFareDiscount != 0 ? `- ${passenger.totalFareDiscount}` : 0,
        },
        {
          type: EPassengerReceiptItemType.PROMOTION_DISCOUNT,
          value: passenger.totalPromotionDiscount != 0 ? `- ${passenger.totalPromotionDiscount}` : 0,
        },
        {
          type: EPassengerReceiptItemType.FUEL_SURCHARGE,
          value: passenger.fuelFee,
        },
        {
          type: EPassengerReceiptItemType.AIRPORT_FACILITY_FEE,
          value: passenger.airportFee,
        },
        {
          type: EPassengerReceiptItemType.SEAT,
          value: passenger.seatFee,
        },
        {
          type: EPassengerReceiptItemType.SUBTOTAL_AMOUNT,
          value: passenger.totalPrice,
        },
      ]}
    })
  )(endPassengerTicketMap)

  const priceDataset = useMemo(() => {
    return [
      {
        type: EPayReceiptType.ITEM,
        label: '항공 운임',
        price: totalFarePrice,
        currencyLabel: '원',
      },
      {
        type: EPayReceiptType.ITEM,
        label: '세금 및 제반 요금',
        price: totalTaxAndFee,
        currencyLabel: '원',
      },
      {
        type: EPayReceiptType.ITEM,
        label: '부가서비스 추가 금액',
        price: totalSsrPrice,
        currencyLabel: '원',
      },
      {
        type: EPayReceiptType.ITEM,
        label: '프로모션 할인 금액',
        minus: '(-)',
        price: totalPromotionDiscount,
        currencyLabel: '원',
      },
      {
        type: EPayReceiptType.ITEM,
        label: '쿠폰 할인 금액',
        minus: '(-)',
        price: totalVoucherDiscount,
        currencyLabel: '원',
      },
      {
        type: EPayReceiptType.SUM,
        label: '총 결제 금액',
        price: balanceDue,
        currencyLabel: '원',
      },
    ];
  }, [
    totalFarePrice,
    totalTaxAndFee,
    totalSsrPrice,
    balanceDue,
    totalPromotionDiscount,
    totalVoucherDiscount,
  ]);

  /** 기존 checkin에 있던 내용 */
  const tripTypeLabel = useMemo(() => {
    return flow(
      get('bookingDetailInfo.bookingInfo.tripTypeText'),
    )(bookingStore);
  }, [bookingStore.bookingDetailInfo]);

  const firstJourneyOriginLabel = useMemo(() => {
    return flow(
      get('bookingDetailInfo.bookingInfo.originText'),
    )(bookingStore);
  }, [bookingStore.bookingDetailInfo]);

  const firstJourneyDestinationLabel = useMemo(() => {
    return flow(
      get('bookingDetailInfo.bookingInfo.destinationText'),
    )(bookingStore);
  }, [bookingStore.bookingDetailInfo]);

  const getReservation = useCallback(() => {
    const parsed = queryString.parse(location.search);
    return flow(get('recordLocator'))(parsed);
  }, []);
  const getJourney = useCallback(() => {
    const parsed = queryString.parse(location.search);
    return flow(get('journeyKey'))(parsed);
  }, []);

  const passengersLabel = useMemo(() => {
    const firstJourneyId = flow(
      get('bookingDetailInfo.boardingPassInfo.journeys'),
      head,
      get('journeyKey'),
    )(bookingStore);

    const count = getPassengers(
      flow(get('bookingDetailInfo.passengers'))(
        bookingStore,
      ),
      firstJourneyId,
    );
    return getPassengersLabel(count);
  }, [bookingStore.bookingDetailInfo]);

  const totalPrice = useMemo(() => {
    return flow(
      get('bookingDetailInfo.payments'),
      //head, //smartport.mhh 결제 금액 수정(payments.amount 총 합 - 쿠폰할인)
      map((payment: any) => {
        if (payment.code != 'VO') return payment.amount;
      }),
      sum,
    )(bookingStore);
  }, [bookingStore.bookingDetailInfo]);

  const currency = useMemo(() => {
    return flow(
      get('bookingDetailInfo.currencyCode'),
      getCurrencyLabel,
    )(bookingStore);
  }, [bookingStore.bookingDetailInfo]);

  const getTickets = useMemo(() => {
    return flow(
      get('bookingDetailInfo.boardingPassInfo.journeys'),
      map((journey: any) => {
        return {
          id: journey.journeyKey,
          origin: journey.origin,
          destination: journey.destination,
          canRefund: true, // TODO 백엔드 작업 후 환불불가 매핑
          startDate: moment(journey.departure)
            .locale('ko')
            .format('YYYY. M. D (dd)'),
          classType: getClassTypeLabel(journey.cabinClass),
          originTime: moment(journey.departure).format(
            'HH:mm',
          ),
          destinationTime: moment(journey.arrival).format(
            'HH:mm',
          ),
          identifier: journey.identifier,
        };
      }),
    )(bookingStore);
  }, [bookingStore.bookingDetailInfo]);

  const getCheckinComplete = useMemo(() => {
    let journey = bookingStore.currentCheckinData?.journey;
    return [{
      id: journey?.journeyKey,
      origin: journey?.designator.origin,
      destination: journey?.designator.destination,
      canRefund: true, // TODO 백엔드 작업 후 환불불가 매핑
      startDate: moment(journey?.designator.departure)
        .locale('ko')
        .format('YYYY. M. D (dd)'),
      classType: getClassTypeLabel(journey?.segments[0]?.cabinOfService + ''),
      originTime: moment(journey?.designator.departure).format(
        'HH:mm',
      ),
      destinationTime: moment(journey?.designator.arrival).format(
        'HH:mm',
      ),
      identifier: "" + journey?.segments[0]?.identifier?.carrierCode + journey?.segments[0]?.identifier?.identifier,
    }];
  }, [bookingStore.currentCheckinData?.journey]);

  /** 체크인 정보 Blur Validation 검사 */
  const onBlurLocalInputData = ({
    target,
    data,
  }: {
    target: string;
    data: IInputData;
  }): IInputData => checkValid(target, data);

  /** country code list에서 text 찾기 */
  const getNationalText = (code: string | undefined) => {
    if (!code) {
      return '';
    }
    return (
      flow(
        find(
          (item: ICountryCodeRespCounty) =>
            item.countryCode === code,
        ),
        get('countryText'),
      )(countryCodeList) ||
      flow(
        find(
          (item: ICountryCodeRespCounty) =>
            item.countryCode === 'KR',
        ),
        get('countryText'),
      )(countryCodeList) ||
      'Korea, Republic of'
    );
  };

  function customizer(objValue: any, srcValue: any) {
    if (isArray(objValue)) {
      return objValue.concat(srcValue);
    }
  }

  const getPassengerReceiptDetail = useMemo (() => {
    if(bookingSession?.journeys?.length===1) {
      return flow(
        get('passengers'),
        map((passenger: any) => {
          return {
            name: `${passenger.firstName} ${passenger.lastName}`,
            passengerTypeLabel: (passenger.type === 'ADT' || 'DCA' || 'DCB' ? '성인' : passenger.type === 'CHD' ? '소아' : '유아'),
            total: passenger.totalAmount,
          }
        }),
        mergeWith(beginPassengersPriceDataset, customizer),
      )(bookingSession);
    } else {
      return flow(
        get('passengers'),
        map((passenger: any) => {
          return {
            name: `${passenger.firstName} ${passenger.lastName}`,
            passengerTypeLabel: (passenger.type === 'ADT' || 'DCA' || 'DCB' ? '성인' : passenger.type === 'CHD' ? '소아' : '유아'),
            total: passenger.totalAmount,
          }
        }),
        mergeWith(beginPassengersPriceDataset, customizer),
        mergeWith(endPassengersPriceDataset, customizer),
      )(bookingSession);
    }
  }, [bookingSession]);
  
  let passengerReceiptDetail = [];

  for(let k in getPassengerReceiptDetail) {
    passengerReceiptDetail.push(getPassengerReceiptDetail[k]);
  }
  
  const getTotalFare = flow(
    map((trips: any) => {
      return {
        totalFare: trips.totalPrice
      }
    })
  )(journeyBreakdowns);

  const isBookingSessionFail= useMemo(() => {
    if (isBookingSessionSearchFailure) return true;
    else if (isBookingSessionSearchSuccess && balanceDue == 0) return true;
    else return false;
  }, [isBookingSessionSearchFailure, isBookingSessionSearchSuccess, balanceDue]);

  const getContactInfo = useMemo(() => {
    return {
      email: bookingSession?.contact?.emailAddress || '',
      buyer: `${bookingSession?.contact?.name?.first || ''} ${bookingSession?.contact?.name?.last || ''}`
    }
  }, [bookingSession.contact]);
  

  return {
    getTicket,
    bookingSession,
    tripTypeText,
    titleJourneyLabel,
    titlePassengersLabel,
    totalTaxAndFee,
    balanceDue,
    priceDataset,
    totalPromotionDiscount, //smartport.mhh 프로모션 추가
    totalVoucherDiscount, //smartport.mhh 바우처 추가
    voucherPayment,
    totalFarePrice,
    getTicketHeaderDetail,
    getTotalFare,
    beginTicketPriceDataset,
    endTicketPriceDataset,
    getTags,
    tripTypeLabel,
    firstJourneyOriginLabel,
    firstJourneyDestinationLabel,
    totalPrice,
    currency,
    getTickets,
    getCheckinComplete,
    passengerReceiptDetail,
    getNationalText,
    onBlurLocalInputData,
    passengersLabel,
    getReservation,
    getJourney,
    isBookingSessionFail,
    getContactInfo, //smartport.mhh eximbay request query
  };
};
