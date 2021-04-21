export const bookingDetailInfo = {
  bookingInfo: {
    recordLocator: 'J7I3PW',
    tripType: 'Round',
    status: 'Confirmed',
    origin: 'ICN',
    destination: 'BKK',
    bookedDate: '2020-06-11T08:34:39.883',
    beginDate: '2020-08-11T20:00:00',
    endDate: null,
    passengerCount: 3,
    totalAmount: 2968400.0,
    totalPoint: 0,
    refundedAmount: 0.0,
    refundedPoint: 0,
    isCommingSoon: true,
    isGroup: false,
    baseCurrency: 'KRW',
    statusText: '확약',
    destinationText: '방콕',
    originText: '서울/인천',
    tripTypeText: '왕복',
    isCanceled: false,
    modifiedDate: '2020-08-11T20:00:00',
  },
  breakdown: {
    authorizedBalanceDue: 0.0,
    balanceDue: 0.0,
    totalFarePoint: 0.0,
    totalFarePrice: 76000.0,
    totalFarePriceDiscount: 0.0,
    totalPromotionDiscount: 0.0,
    totalSsrPrice: 0.0,
    totalTaxAndFee: 0.0,
    totalFuelSurcharge: 0.0,
    totalPrice: 0.0,
  },
  boardingPassInfo: {
    tripType: 'Round',
    journeys: [
      {
        journeyKey:
          'WVB_IDU1MX4gfn5JQ05_MDgvMTEvMjAyMCAyMDowMH5CS0t_MDgvMTEvMjAyMCAyMzo1NX5_',
        origin: 'ICN',
        destination: 'BKK',
        departure: '2020-08-11T20:00:00',
        arrival: '2020-08-11T23:55:00',
        dateChange: 0,
        cabinClassText: '프레미아42',
        identifier: 'YP551',
        boardingPassCount: 3,
        isRefundable: null,
        isDelayed: null,
        isCanceled: true,
        originText: 'ICN',
        destinationText: 'BKK',
      },
      {
        journeyKey:
          'WVB_IDU1Mn4gfn5CS0t_MDgvMjAvMjAyMCAwMTowMH5JQ05_MDgvMjAvMjAyMCAwODo0MH5_',
        origin: 'BKK',
        destination: 'ICN',
        departure: '2020-08-20T01:00:00',
        arrival: '2020-08-20T08:40:00',
        dateChange: 0,
        cabinClassText: '이코노미35',
        identifier: 'YP552',
        boardingPassCount: 3,
        isRefundable: null,
        isDelayed: null,
        isCanceled: false,
        originText: 'BKK',
        destinationText: 'ICN',
      },
    ],
  },
  passengers: [
    {
      passengerKey: 'MCFBRFQ-',
      firstName: 'Daehee',
      lastName: 'Jeong',
      userId: null,
      // userId: 'yh.lee@airpremia.com',
      type: 'ADT',
      gender: 'Male',
      isCanceled: true,
      journeys: [
        {
          journeyKey:
            'WVB_IDU1MX4gfn5JQ05_MDgvMTEvMjAyMCAyMDowMH5CS0t_MDgvMTEvMjAyMCAyMzo1NX5_',
          designator: {
            origin: 'ICN',
            destination: 'BKK',
          },
          passengerSegments: [
            {
              segmentKey:
                'WVB_IDU1MX4gfn5JQ05_MDgvMTEvMjAyMCAyMDowMH5CS0t_MDgvMTEvMjAyMCAyMzo1NX5_',
              seats: [
                {
                  unitKey:
                    'WVAhNTUxISAhNjM3MzI3NzI4MDAwMDAwMDAwIUlDTiFCS0shMUEhVw--',
                  unitDesignator: '1A',
                  cabinClass: 'W',
                  cabinClassText: '프레미아42',
                },
              ],
              ssrs: [
                {
                  ssrCode: 'BBML',
                  count: 1,
                  category: 'Meal',
                  ssrText: '유아식',
                  categoryText: '기내식',
                },
                {
                  ssrCode: 'BG32',
                  count: 1,
                  category: 'Baggage',
                  ssrText: '추가 수하물 32kg',
                  categoryText: '수하물',
                },
                {
                  ssrCode: 'VGML',
                  count: 1,
                  category: 'Meal',
                  ssrText: '채식',
                  categoryText: '기내식',
                },
              ],
            },
          ],
          firstPassengerSegmentSsrs: [
            {
              ssrCode: 'BBML',
              count: 1,
              category: 'Meal',
              ssrText: '유아식',
              categoryText: '기내식',
            },
            {
              ssrCode: 'BG32',
              count: 1,
              category: 'Baggage',
              ssrText: '추가 수하물 32kg',
              categoryText: '수하물',
            },
            {
              ssrCode: 'VGML',
              count: 1,
              category: 'Meal',
              ssrText: '채식',
              categoryText: '기내식',
            },
          ],
          firstPassengerSegmentSeat: [
            {
              unitKey:
                'WVAhNTUxISAhNjM3MzI3NzI4MDAwMDAwMDAwIUlDTiFCS0shMUEhVw--',
              unitDesignator: '1A',
              cabinClass: 'W',
              cabinClassText: '프레미아42',
            },
          ],
        },
        {
          journeyKey:
            'WVB_IDU1Mn4gfn5CS0t_MDgvMjAvMjAyMCAwMTowMH5JQ05_MDgvMjAvMjAyMCAwODo0MH5_',
          designator: {
            origin: 'BKK',
            destination: 'ICN',
          },
          passengerSegments: [
            {
              segmentKey:
                'WVB_IDU1Mn4gfn5CS0t_MDgvMjAvMjAyMCAwMTowMH5JQ05_MDgvMjAvMjAyMCAwODo0MH5_',
              seats: [
                {
                  unitKey:
                    'WVAhNTUyISAhNjM3MzM0ODIwMDAwMDAwMDAwIUJLSyFJQ04hMjdBIVk-',
                  unitDesignator: '27A',
                  cabinClass: 'Y',
                  cabinClassText: '이코노미35',
                },
              ],
              ssrs: [
                {
                  ssrCode: 'BG32',
                  count: 1,
                  category: 'Baggage',
                  ssrText: '추가 수하물 32kg',
                  categoryText: '수하물',
                },
                {
                  ssrCode: 'VGML',
                  count: 1,
                  category: 'Meal',
                  ssrText: '채식',
                  categoryText: '기내식',
                },
              ],
            },
          ],
          firstPassengerSegmentSsrs: [
            {
              ssrCode: 'BG32',
              count: 1,
              category: 'Baggage',
              ssrText: '추가 수하물 32kg',
              categoryText: '수하물',
            },
            {
              ssrCode: 'VGML',
              count: 1,
              category: 'Meal',
              ssrText: '채식',
              categoryText: '기내식',
            },
          ],
          firstPassengerSegmentSeat: [
            {
              unitKey:
                'WVAhNTUyISAhNjM3MzM0ODIwMDAwMDAwMDAwIUJLSyFJQ04hMjdBIVk-',
              unitDesignator: '27A',
              cabinClass: 'Y',
              cabinClassText: '이코노미35',
            },
          ],
        },
      ],
      infant: {
        firstName: 'DaeheeInfant',
        lastName: 'Jeong',
        gender: 'Male',
        dateOfBirth: '2019-04-14T00:00:00',
      },
      totalAmount: 1438200.0,
      totalPoint: 0.0,
      mileage: null,
    },
    {
      passengerKey: 'MSFDSEQ-',
      firstName: 'DaeheeChild',
      lastName: 'Jeong',
      userId: null,
      type: 'CHD',
      gender: 'Female',
      isCanceled: false,
      journeys: [
        {
          journeyKey:
            'WVB_IDU1MX4gfn5JQ05_MDgvMTEvMjAyMCAyMDowMH5CS0t_MDgvMTEvMjAyMCAyMzo1NX5_',
          designator: {
            origin: 'ICN',
            destination: 'BKK',
          },
          passengerSegments: [
            {
              segmentKey:
                'WVB_IDU1MX4gfn5JQ05_MDgvMTEvMjAyMCAyMDowMH5CS0t_MDgvMTEvMjAyMCAyMzo1NX5_',
              seats: [
                {
                  unitKey:
                    'WVAhNTUxISAhNjM3MzI3NzI4MDAwMDAwMDAwIUlDTiFCS0shMUIhVw--',
                  unitDesignator: '1B',
                  cabinClass: 'W',
                  cabinClassText: '프레미아42',
                },
              ],
              ssrs: [
                {
                  ssrCode: 'CHML',
                  count: 1,
                  category: 'Meal',
                  ssrText: '아동식',
                  categoryText: '기내식',
                },
              ],
            },
          ],
          firstPassengerSegmentSsrs: [
            {
              ssrCode: 'CHML',
              count: 1,
              category: 'Meal',
              ssrText: '아동식',
              categoryText: '기내식',
            },
          ],
          firstPassengerSegmentSeat: [
            {
              unitKey:
                'WVAhNTUxISAhNjM3MzI3NzI4MDAwMDAwMDAwIUlDTiFCS0shMUIhVw--',
              unitDesignator: '1B',
              cabinClass: 'W',
              cabinClassText: '프레미아42',
            },
          ],
        },
        {
          journeyKey:
            'WVB_IDU1Mn4gfn5CS0t_MDgvMjAvMjAyMCAwMTowMH5JQ05_MDgvMjAvMjAyMCAwODo0MH5_',
          designator: {
            origin: 'BKK',
            destination: 'ICN',
          },
          passengerSegments: [
            {
              segmentKey:
                'WVB_IDU1Mn4gfn5CS0t_MDgvMjAvMjAyMCAwMTowMH5JQ05_MDgvMjAvMjAyMCAwODo0MH5_',
              seats: [
                {
                  unitKey:
                    'WVAhNTUyISAhNjM3MzM0ODIwMDAwMDAwMDAwIUJLSyFJQ04hMjdCIVk-',
                  unitDesignator: '27B',
                  cabinClass: 'Y',
                  cabinClassText: '이코노미35',
                },
              ],
              ssrs: [
                {
                  ssrCode: 'CHML',
                  count: 1,
                  category: 'Meal',
                  ssrText: '아동식',
                  categoryText: '기내식',
                },
              ],
            },
          ],
          firstPassengerSegmentSsrs: [
            {
              ssrCode: 'CHML',
              count: 1,
              category: 'Meal',
              ssrText: '아동식',
              categoryText: '기내식',
            },
          ],
          firstPassengerSegmentSeat: [
            {
              unitKey:
                'WVAhNTUyISAhNjM3MzM0ODIwMDAwMDAwMDAwIUJLSyFJQ04hMjdCIVk-',
              unitDesignator: '27B',
              cabinClass: 'Y',
              cabinClassText: '이코노미35',
            },
          ],
        },
      ],
      infant: null,
      totalAmount: 795200.0,
      totalPoint: 0.0,
      mileage: null,
    },
    {
      passengerKey: 'MiFJTlM-',
      firstName: 'DaeheeSeatInfant',
      lastName: 'Jeong',
      userId: null,
      type: 'INS',
      gender: 'Male',
      isCanceled: false,
      journeys: [
        {
          journeyKey:
            'WVB_IDU1MX4gfn5JQ05_MDgvMTEvMjAyMCAyMDowMH5CS0t_MDgvMTEvMjAyMCAyMzo1NX5_',
          designator: {
            origin: 'ICN',
            destination: 'BKK',
          },
          passengerSegments: [
            {
              segmentKey:
                'WVB_IDU1MX4gfn5JQ05_MDgvMTEvMjAyMCAyMDowMH5CS0t_MDgvMTEvMjAyMCAyMzo1NX5_',
              seats: [
                {
                  unitKey:
                    'WVAhNTUxISAhNjM3MzI3NzI4MDAwMDAwMDAwIUlDTiFCS0shMUghVw--',
                  unitDesignator: '1H',
                  cabinClass: 'W',
                  cabinClassText: '프레미아42',
                },
              ],
              ssrs: [
                {
                  ssrCode: 'BBML',
                  count: 1,
                  category: 'Meal',
                  ssrText: '유아식',
                  categoryText: '기내식',
                },
              ],
            },
          ],
          firstPassengerSegmentSsrs: [
            {
              ssrCode: 'BBML',
              count: 1,
              category: 'Meal',
              ssrText: '유아식',
              categoryText: '기내식',
            },
          ],
          firstPassengerSegmentSeat: [
            {
              unitKey:
                'WVAhNTUxISAhNjM3MzI3NzI4MDAwMDAwMDAwIUlDTiFCS0shMUghVw--',
              unitDesignator: '1H',
              cabinClass: 'W',
              cabinClassText: '프레미아42',
            },
          ],
        },
        {
          journeyKey:
            'WVB_IDU1Mn4gfn5CS0t_MDgvMjAvMjAyMCAwMTowMH5JQ05_MDgvMjAvMjAyMCAwODo0MH5_',
          designator: {
            origin: 'BKK',
            destination: 'ICN',
          },
          passengerSegments: [
            {
              segmentKey:
                'WVB_IDU1Mn4gfn5CS0t_MDgvMjAvMjAyMCAwMTowMH5JQ05_MDgvMjAvMjAyMCAwODo0MH5_',
              seats: [
                {
                  unitKey:
                    'WVAhNTUyISAhNjM3MzM0ODIwMDAwMDAwMDAwIUJLSyFJQ04hMjdDIVk-',
                  unitDesignator: '27C',
                  cabinClass: 'Y',
                  cabinClassText: '이코노미35',
                },
              ],
              ssrs: [],
            },
          ],
          firstPassengerSegmentSsrs: [],
          firstPassengerSegmentSeat: [
            {
              unitKey:
                'WVAhNTUyISAhNjM3MzM0ODIwMDAwMDAwMDAwIUJLSyFJQ04hMjdDIVk-',
              unitDesignator: '27C',
              cabinClass: 'Y',
              cabinClassText: '이코노미35',
            },
          ],
        },
      ],
      infant: null,
      totalAmount: 735000.0,
      totalPoint: 0.0,
      mileage: null,
    },
    {
      passengerKey: 'MiFJTlM-',
      firstName: 'DaeheeSeatInfant',
      lastName: 'Jeong',
      userId: null,
      type: 'INS',
      gender: 'Male',
      isCanceled: false,
      journeys: [
        {
          journeyKey:
            'WVB_IDU1MX4gfn5JQ05_MDgvMTEvMjAyMCAyMDowMH5CS0t_MDgvMTEvMjAyMCAyMzo1NX5_',
          designator: {
            origin: 'ICN',
            destination: 'BKK',
          },
          passengerSegments: [
            {
              segmentKey:
                'WVB_IDU1MX4gfn5JQ05_MDgvMTEvMjAyMCAyMDowMH5CS0t_MDgvMTEvMjAyMCAyMzo1NX5_',
              seats: [
                {
                  unitKey:
                    'WVAhNTUxISAhNjM3MzI3NzI4MDAwMDAwMDAwIUlDTiFCS0shMUghVw--',
                  unitDesignator: '1H',
                  cabinClass: 'W',
                  cabinClassText: '프레미아42',
                },
              ],
              ssrs: [
                {
                  ssrCode: 'BBML',
                  count: 1,
                  category: 'Meal',
                  ssrText: '유아식',
                  categoryText: '기내식',
                },
              ],
            },
          ],
          firstPassengerSegmentSsrs: [
            {
              ssrCode: 'BBML',
              count: 1,
              category: 'Meal',
              ssrText: '유아식',
              categoryText: '기내식',
            },
          ],
          firstPassengerSegmentSeat: [
            {
              unitKey:
                'WVAhNTUxISAhNjM3MzI3NzI4MDAwMDAwMDAwIUlDTiFCS0shMUghVw--',
              unitDesignator: '1H',
              cabinClass: 'W',
              cabinClassText: '프레미아42',
            },
          ],
        },
        {
          journeyKey:
            'WVB_IDU1Mn4gfn5CS0t_MDgvMjAvMjAyMCAwMTowMH5JQ05_MDgvMjAvMjAyMCAwODo0MH5_',
          designator: {
            origin: 'BKK',
            destination: 'ICN',
          },
          passengerSegments: [
            {
              segmentKey:
                'WVB_IDU1Mn4gfn5CS0t_MDgvMjAvMjAyMCAwMTowMH5JQ05_MDgvMjAvMjAyMCAwODo0MH5_',
              seats: [
                {
                  unitKey:
                    'WVAhNTUyISAhNjM3MzM0ODIwMDAwMDAwMDAwIUJLSyFJQ04hMjdDIVk-',
                  unitDesignator: '27C',
                  cabinClass: 'Y',
                  cabinClassText: '이코노미35',
                },
              ],
              ssrs: [],
            },
          ],
          firstPassengerSegmentSsrs: [],
          firstPassengerSegmentSeat: [
            {
              unitKey:
                'WVAhNTUyISAhNjM3MzM0ODIwMDAwMDAwMDAwIUJLSyFJQ04hMjdDIVk-',
              unitDesignator: '27C',
              cabinClass: 'Y',
              cabinClassText: '이코노미35',
            },
          ],
        },
      ],
      infant: null,
      totalAmount: 735000.0,
      totalPoint: 0.0,
      mileage: null,
    },
    {
      passengerKey: 'MiFJTlM-',
      firstName: 'DaeheeSeatInfant',
      lastName: 'Jeong',
      userId: null,
      type: 'INS',
      gender: 'Male',
      isCanceled: false,
      journeys: [
        {
          journeyKey:
            'WVB_IDU1MX4gfn5JQ05_MDgvMTEvMjAyMCAyMDowMH5CS0t_MDgvMTEvMjAyMCAyMzo1NX5_',
          designator: {
            origin: 'ICN',
            destination: 'BKK',
          },
          passengerSegments: [
            {
              segmentKey:
                'WVB_IDU1MX4gfn5JQ05_MDgvMTEvMjAyMCAyMDowMH5CS0t_MDgvMTEvMjAyMCAyMzo1NX5_',
              seats: [
                {
                  unitKey:
                    'WVAhNTUxISAhNjM3MzI3NzI4MDAwMDAwMDAwIUlDTiFCS0shMUghVw--',
                  unitDesignator: '1H',
                  cabinClass: 'W',
                  cabinClassText: '프레미아42',
                },
              ],
              ssrs: [
                {
                  ssrCode: 'BBML',
                  count: 1,
                  category: 'Meal',
                  ssrText: '유아식',
                  categoryText: '기내식',
                },
              ],
            },
          ],
          firstPassengerSegmentSsrs: [
            {
              ssrCode: 'BBML',
              count: 1,
              category: 'Meal',
              ssrText: '유아식',
              categoryText: '기내식',
            },
          ],
          firstPassengerSegmentSeat: [
            {
              unitKey:
                'WVAhNTUxISAhNjM3MzI3NzI4MDAwMDAwMDAwIUlDTiFCS0shMUghVw--',
              unitDesignator: '1H',
              cabinClass: 'W',
              cabinClassText: '프레미아42',
            },
          ],
        },
        {
          journeyKey:
            'WVB_IDU1Mn4gfn5CS0t_MDgvMjAvMjAyMCAwMTowMH5JQ05_MDgvMjAvMjAyMCAwODo0MH5_',
          designator: {
            origin: 'BKK',
            destination: 'ICN',
          },
          passengerSegments: [
            {
              segmentKey:
                'WVB_IDU1Mn4gfn5CS0t_MDgvMjAvMjAyMCAwMTowMH5JQ05_MDgvMjAvMjAyMCAwODo0MH5_',
              seats: [
                {
                  unitKey:
                    'WVAhNTUyISAhNjM3MzM0ODIwMDAwMDAwMDAwIUJLSyFJQ04hMjdDIVk-',
                  unitDesignator: '27C',
                  cabinClass: 'Y',
                  cabinClassText: '이코노미35',
                },
              ],
              ssrs: [],
            },
          ],
          firstPassengerSegmentSsrs: [],
          firstPassengerSegmentSeat: [
            {
              unitKey:
                'WVAhNTUyISAhNjM3MzM0ODIwMDAwMDAwMDAwIUJLSyFJQ04hMjdDIVk-',
              unitDesignator: '27C',
              cabinClass: 'Y',
              cabinClassText: '이코노미35',
            },
          ],
        },
      ],
      infant: null,
      totalAmount: 735000.0,
      totalPoint: 0.0,
      mileage: null,
    },
  ],
  payments: [
    {
      paymentId: 'NTI4ITEhQ0E-',
      paymentKey: 'NTI4ITEhQ0E-',
      paymentCreatedDate: null,
      status: 'Approved',
      description: '상세내용',
      amount: 2968400.0,
      paymentPerson: null,
    },
  ],
};

// export const list = [
//   {
//     SvgIcon: SvgOnlineCheckin,
//     text: '온라인 체크인',
//     isShow: true,
//     disabled: false,
//     onClick: () => {},
//   },
//   {
//     SvgIcon: SvgReservationChange,
//     text: '일정 변경',
//     isShow: true,
//     disabled: false,
//     onClick: () => {},
//   },
//   {
//     SvgIcon: SvgEvent,
//     text: '부가서비스 관리',
//     isShow: true,
//     disabled: false,
//     onClick: () => {},
//   },
//   {
//     SvgIcon: SvgReservationCancel,
//     text: '예약 취소',
//     isShow: true,
//     disabled: false,
//     onClick: () => Router.push('/checkin/cancel'),
//   },
// ];
