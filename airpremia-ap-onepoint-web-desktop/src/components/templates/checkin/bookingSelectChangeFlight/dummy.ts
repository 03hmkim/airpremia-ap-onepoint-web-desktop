export const journey = {
  departureText: '서울/인천(ICN)',
  originText: '하노이(HAN)',
  itineraryTypeText: '왕복',
  departureTime: '2020-05-23T23:30:00',
  arrivalTime: '2020-05-25T17:40:00',
  recordLocator: '123456789',
  passengers: '성인2, 소아1, 유아1', // 이건 변경 해야함 (server 구조대로)
};

export const caution = {
  title: '환불 안내',
  body: [
    '최초 결제 시 사용한 결제 수단으로 환불이 진행되며, 최초 결제자에게 환불됩니다.',
    '신용카드 결제의 경우 카드사 영업일 기준 3~5일 이후 해당 카드사에서 확인 가능하며, 최초 발권내역과 다르게 변경된 발권 내역이 있는 경우에는 시간이 보다 더 소요될 수 있습니다.',
    '계좌이체 서비스로 구입하신 항공권은 실시간 결제 계좌로 자동 입금됩니다.',
    '환불 내역 및 영수증은 마이페이지>구매 내역 에서 확인하시기 바랍니다.',
  ],
};

export const dummyResp = {
  refundBreakdown: {
    bookingInfo: {
      recordLocator: 'O494MS',
      tripType: 'Round',
      tripTypeText: '왕복',
      origin: 'ICN',
      originText: '서울/인천',
      destination: 'SGN',
      destinationText: '호치민',
      journeys: [
        {
          origin: 'ICN',
          destination: 'SGN',
          departure: '2020-07-23T20:00:00',
          arrival: '2020-07-23T23:55:00',
          dateChange: 0,
        },
        {
          arrival: '2020-10-02T21:10:00',
          dateChange: 0,
          departure: '2020-10-02T13:50:00',
          destination: 'ICN',
          origin: 'SGN',
        },
      ],
      passengerCount: {
        adult: 1,
        child: 0,
        infant: 0,
        seatInfant: 0,
      },
    },
    passengerBreakdown: {
      passengers: [
        {
          passengerKey: 'MCFBRFQ-',
          type: 'ADT',
          lastName: 'Jeong',
          firstName: 'Daehee',
          totalAmount: 695500.0,
          totalPoints: 1000.0,
        },
        {
          passengerKey: 'MCFBRFA-',
          type: 'ADT',
          lastName: 'Jeonga',
          firstName: 'DaeheeEE',
          totalAmount: 75500.0,
          totalPoints: 3000.0,
        },
      ],
      totalCollectedAmount: 695500.0,
      totalCollectedPoints: 2000.0,
    },
    refundDetail: {
      fees: [
        {
          code: 'ASA',
          amount: 0.0,
          points: 0.0,
          text: '고급 좌석 배정 수수료',
        },
        {
          code: 'BG28',
          amount: 115000.0,
          points: 0.0,
          text: 'BG28',
        },
      ],
      totalRefundAmount: 115000.0,
      totalRefundPoints: 0.0,
    },
    currencyCode: 'KRW',
  },
};

export const refundCompletedBreakdown = {
  recordLocator: 'ABCDEF',
  origin: 'ICN',
  originText: '인천',
  destination: 'SGN',
  destinationText: '하노이',
  tripType: 'Round',
  tripTypeText: '왕복',
  adultCount: 1,
  childCount: 1,
  infantCount: 1,
  journeys: [
    {
      origin: 'ICN',
      destination: 'SGN',
      departure: '2020-07-23T20:00:00',
      arrival: '2020-07-23T23:55:00',
      departureUtc: '', // Offset 시간
      arrivalUtc: '', // Offset 시간
      dateChange: 1,
      cabinClass: 'Y',
      cabinClassText: '이코노미',
      carrierCode: 'YP',
      identifier: 1234,
    },
  ],
  totalRefundedAmount: 10000000.0,
  totalRefundedPoint: 0.0,
  baseCurrency: 'KRW',
};
