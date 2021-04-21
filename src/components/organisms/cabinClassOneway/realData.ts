// @TODO: 항공권 예매 테스트 후 삭제
export const data = {
  availability: [
    {
      market: { origin: 'ICN', destination: 'SGN' },
      journeys: [
        {
          journeyKey:
            'WVB_IDUxMX4gfn5JQ05_MDYvMDEvMjAyMCAwOTowMH5TR05_MDYvMDEvMjAyMCAxMjo0MH5_',
          departureStation: 'ICN',
          arrivalStation: 'SGN',
          departureTime: '2020-06-01T09:00:00',
          arrivalTime: '2020-06-01T12:40:00',
          flightTimeInMinute: 220,
          equipmentType: '789',
          identifier: 'AP1234',
          legs: [
            {
              departureStation: 'ICN',
              arrivalStation: 'SGN',
              departureTime: '2020-06-01T09:00:00',
              arrivalTime: '2020-06-01T12:40:00',
              flightTimeInMinute: 220,
              equipmentType: '789',
              identifier: 'AP1234',
            },
          ],
          cabinClasses: [
            {
              code: 'EY',
              text: '이코노미',
              startPrice: 390000.0,
              productClasses: [
                {
                  fareAvailabilityKey:
                    'MH5WfiB_WVB_VkxYUlR_WVAwU35_MX4xfk5JQ05TR04wMDEwMDEwflghMA--',
                  text: '이벤트',
                  code: 'YP',
                  classOfService: 'V',
                  available: 51,
                  changeFee: 70000,
                  refundFee: 100000,
                  mileagePercentage: 120,
                  price: 390000.0,
                },
                {
                  fareAvailabilityKey:
                    'MH5OfiB_WVB_TkxYUlR_WVMwU35_MX4xfk5JQ05TR04wMDEwMDEwflghMQ--',
                  text: '스탠다드',
                  code: 'YS',
                  classOfService: 'N',
                  available: 152,
                  changeFee: 70000,
                  refundFee: 100000,
                  mileagePercentage: 120,
                  price: 660000.0,
                },
                {
                  fareAvailabilityKey:
                    'MH5NfiB_WVB_TUxYUlR_WUMwU35_MX4xfk5JQ05TR04wMDEwMDEwflghMg--',
                  text: '컴포트',
                  code: 'YC',
                  classOfService: 'M',
                  available: 253,
                  changeFee: 70000,
                  refundFee: 100000,
                  mileagePercentage: 120,
                  price: 1110000.0,
                },
              ],
            },
            {
              code: 'PE',
              text: '프리미엄 이코노미',
              startPrice: 1740000.0,
              productClasses: [
                {
                  fareAvailabilityKey:
                    'MH5JfiB_WVB_SUxYUlR_UFMwU35_MX4xfk5JQ05TR04wMDEwMDEwflghMw--',
                  text: '스탠다드',
                  code: 'PS',
                  classOfService: 'I',
                  available: 33,
                  changeFee: 70000,
                  refundFee: 100000,
                  mileagePercentage: 120,
                  price: 1740000.0,
                },
                {
                  fareAvailabilityKey:
                    'MH5DfiB_WVB_Q0xYUlR_UEMwU35_MX4xfk5JQ05TR04wMDEwMDEwflghNA--',
                  text: '컴포트',
                  code: 'PC',
                  classOfService: 'C',
                  available: 55,
                  changeFee: 70000,
                  refundFee: 100000,
                  mileagePercentage: 120,
                  price: 1920000.0,
                },
              ],
            },
          ],
        },
        {
          journeyKey:
            'WVB_IDUxMX4gfn5JQ05_MDYvMDEvMjAyMCAwOTowMH5TR05_MDYvMDEvMjAyMCAxMjo0MH5_',
          departureStation: 'ICN',
          arrivalStation: 'SGN',
          departureTime: '2020-06-01T09:00:00',
          arrivalTime: '2020-06-01T12:40:00',
          flightTimeInMinute: 220,
          equipmentType: '789',
          identifier: 'AP1234',
          legs: [
            {
              departureStation: 'ICN',
              arrivalStation: 'SGN',
              departureTime: '2020-06-01T09:00:00',
              arrivalTime: '2020-06-01T12:40:00',
              flightTimeInMinute: 220,
              equipmentType: '789',
              identifier: 'AP1234',
            },
          ],
          cabinClasses: [
            {
              code: 'EY',
              text: '이코노미',
              startPrice: 390000.0,
              productClasses: [
                {
                  fareAvailabilityKey:
                    'MH5WfiB_WVB_VkxYUlR_WVAwU35_MX4xfk5JQ05TR04wMDEwMDEwflghMA--',
                  text: '이벤트',
                  code: 'YP',
                  classOfService: 'V',
                  available: 51,
                  changeFee: 70000,
                  refundFee: 100000,
                  mileagePercentage: 120,
                  price: 390000.0,
                },
                {
                  fareAvailabilityKey:
                    'MH5OfiB_WVB_TkxYUlR_WVMwU35_MX4xfk5JQ05TR04wMDEwMDEwflghMQ--',
                  text: '스탠다드',
                  code: 'YS',
                  classOfService: 'N',
                  available: 152,
                  changeFee: 70000,
                  refundFee: 100000,
                  mileagePercentage: 120,
                  price: 660000.0,
                },
                {
                  fareAvailabilityKey:
                    'MH5NfiB_WVB_TUxYUlR_WUMwU35_MX4xfk5JQ05TR04wMDEwMDEwflghMg--',
                  text: '컴포트',
                  code: 'YC',
                  classOfService: 'M',
                  available: 253,
                  changeFee: 70000,
                  refundFee: 100000,
                  mileagePercentage: 120,
                  price: 1110000.0,
                },
              ],
            },
            {
              code: 'PE',
              text: '프리미엄 이코노미',
              startPrice: 1740000.0,
              productClasses: [
                {
                  fareAvailabilityKey:
                    'MH5JfiB_WVB_SUxYUlR_UFMwU35_MX4xfk5JQ05TR04wMDEwMDEwflghMw--',
                  text: '스탠다드',
                  code: 'PS',
                  classOfService: 'I',
                  available: 33,
                  changeFee: 70000,
                  refundFee: 100000,
                  mileagePercentage: 120,
                  price: 1740000.0,
                },
                {
                  fareAvailabilityKey:
                    'MH5DfiB_WVB_Q0xYUlR_UEMwU35_MX4xfk5JQ05TR04wMDEwMDEwflghNA--',
                  text: '컴포트',
                  code: 'PC',
                  classOfService: 'C',
                  available: 55,
                  changeFee: 70000,
                  refundFee: 100000,
                  mileagePercentage: 120,
                  price: 1920000.0,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      market: { origin: 'SGN', destination: 'ICN' },
      journeys: [
        {
          journeyKey:
            'WVB_IDUxMn4gfn5TR05_MDYvMDYvMjAyMCAxMzo1MH5JQ05_MDYvMDYvMjAyMCAyMToxMH5_',
          departureStation: 'SGN',
          arrivalStation: 'ICN',
          departureTime: '2020-06-06T13:50:00',
          arrivalTime: '2020-06-06T21:10:00',
          flightTimeInMinute: 440,
          equipmentType: '789',
          identifier: 'AP1234',
          legs: [
            {
              departureStation: 'SGN',
              arrivalStation: 'ICN',
              departureTime: '2020-06-06T13:50:00',
              arrivalTime: '2020-06-06T21:10:00',
              flightTimeInMinute: 440,
              equipmentType: '789',
              identifier: 'AP1234',
            },
          ],
          cabinClasses: [
            {
              code: 'EY',
              text: '이코노미',
              startPrice: 450000.0,
              productClasses: [
                {
                  fareAvailabilityKey:
                    'MH5WfiB_WVB_VkxXUlR_WVAwU35_MX4xfk5JQ05TR04wMDEwMDEwflghNQ--',
                  text: '이벤트',
                  code: 'YP',
                  classOfService: 'V',
                  available: 51,
                  changeFee: 70000,
                  refundFee: 100000,
                  mileagePercentage: 120,
                  price: 450000.0,
                },
                {
                  fareAvailabilityKey:
                    'MH5OfiB_WVB_TkxXUlR_WVMwU35_MX4xfk5JQ05TR04wMDEwMDEwflghNg--',
                  text: '스탠다드',
                  code: 'YS',
                  classOfService: 'N',
                  available: 152,
                  changeFee: 70000,
                  refundFee: 100000,
                  mileagePercentage: 120,
                  price: 720000.0,
                },
                {
                  fareAvailabilityKey:
                    'MH5NfiB_WVB_TUxXUlR_WUMwU35_MX4xfk5JQ05TR04wMDEwMDEwflghNw--',
                  text: '컴포트',
                  code: 'YC',
                  classOfService: 'M',
                  available: 253,
                  changeFee: 70000,
                  refundFee: 100000,
                  mileagePercentage: 120,
                  price: 1170000.0,
                },
              ],
            },
            {
              code: 'PE',
              text: '프리미엄 이코노미',
              startPrice: 1800000.0,
              productClasses: [
                {
                  fareAvailabilityKey:
                    'MH5JfiB_WVB_SUxXUlR_UFMwU35_MX4xfk5JQ05TR04wMDEwMDEwflghOA--',
                  text: '스탠다드',
                  code: 'PS',
                  classOfService: 'I',
                  available: 34,
                  changeFee: 70000,
                  refundFee: 100000,
                  mileagePercentage: 120,
                  price: 1800000.0,
                },
                {
                  fareAvailabilityKey:
                    'MH5DfiB_WVB_Q0xXUlR_UEMwU35_MX4xfk5JQ05TR04wMDEwMDEwflghOQ--',
                  text: '컴포트',
                  code: 'PC',
                  classOfService: 'C',
                  available: 56,
                  changeFee: 70000,
                  refundFee: 100000,
                  mileagePercentage: 120,
                  price: 1980000.0,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  baseCurrency: 'KRW',
};
