/* eslint-disable */
import { ECabinClass } from '@airpremia/core/lib/types';

export const dummyTestSsrTripResult = [
  {
    id:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    isClosed: false,
    label: 'ICN → SGN',
  },
  {
    id:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    isClosed: false,
    label: 'SGN → ICN',
  },
];

export const dummyTestSsrAvailableSeatsRaw = {
  data: {
    availability: {
      journeys: [
        {
          journeyKey:
            'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
          segments: [
            {
              segmentKey:
                'WVB_IDUxMX4gfn5JQ05_MDgvMTcvMjAyMCAxNzowMH5TR05_MDgvMTcvMjAyMCAyMTozMH5_',
              legs: [
                {
                  legKey:
                    'NjM3MzMyODA0MDAwMDAwMDAwIVlQITUxMSEgIUlDTiFTR04hMzI4',
                  destination: 'SGN',
                  origin: 'ICN',
                  arrival: '2020-08-17T21:30:00',
                  departure: '2020-08-17T17:00:00',
                  unitMap: '생략',
                  classOfCabin: 'W',
                  fees: {
                    'MCFBRFQ-': {
                      '0': 40000.0,
                      '1': 40000.0,
                      '2': 0.0,
                      '3': 0.0,
                      '4': 0.0,
                      '9': 0.0,
                      '99': 0.0,
                    },
                    'MiFJTlM-': {
                      '0': 40000.0,
                      '1': 40000.0,
                      '2': 0.0,
                      '3': 0.0,
                      '4': 0.0,
                      '9': 0.0,
                      '99': 0.0,
                    },
                    'MSFBRFQ-': {
                      '0': 40000.0,
                      '1': 40000.0,
                      '2': 0.0,
                      '3': 0.0,
                      '4': 0.0,
                      '9': 0.0,
                      '99': 0.0,
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          journeyKey:
            'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
          segments: [
            {
              segmentKey:
                'WVB_IDUxMn4gfn5TR05_MDgvMjEvMjAyMCAxMzo1MH5JQ05_MDgvMjEvMjAyMCAyMToxMH5_',
              legs: [
                {
                  legKey:
                    'NjM3MzM2MTQ2MDAwMDAwMDAwIVlQITUxMiEgIVNHTiFJQ04hMzM3',
                  destination: 'ICN',
                  origin: 'SGN',
                  arrival: '2020-08-21T21:10:00',
                  departure: '2020-08-21T13:50:00',
                  classOfCabin: 'W',
                  fees: {
                    'MCFBRFQ-': {
                      '0': 40000.0,
                      '1': 40000.0,
                      '2': 0.0,
                      '3': 0.0,
                      '4': 0.0,
                      '9': 0.0,
                      '99': 0.0,
                    },
                    'MiFJTlM-': {
                      '0': 40000.0,
                      '1': 40000.0,
                      '2': 0.0,
                      '3': 0.0,
                      '4': 0.0,
                      '9': 0.0,
                      '99': 0.0,
                    },
                    'MSFBRFQ-': {
                      '0': 40000.0,
                      '1': 40000.0,
                      '2': 0.0,
                      '3': 0.0,
                      '4': 0.0,
                      '9': 0.0,
                      '99': 0.0,
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    current: {
      journeys: [
        {
          segments: [
            {
              segmentKey:
                'WVB_IDUxMX4gfn5JQ05_MDgvMTcvMjAyMCAxNzowMH5TR05_MDgvMTcvMjAyMCAyMTozMH5_',
              passengerSegment: [
                {
                  key: 'MCFBRFQ-',
                  value: {
                    seats: [],
                  },
                },
                {
                  key: 'MSFBRFQ-',
                  value: {
                    seats: [],
                  },
                },
                {
                  key: 'MiFJTlM-',
                  value: {
                    seats: [],
                  },
                },
              ],
            },
          ],
          journeyKey:
            'WVB_IDUxMX4gfn5JQ05_MDgvMTcvMjAyMCAxNzowMH5TR05_MDgvMTcvMjAyMCAyMTozMH5_',
        },
        {
          segments: [
            {
              segmentKey:
                'WVB_IDUxMn4gfn5TR05_MDgvMjEvMjAyMCAxMzo1MH5JQ05_MDgvMjEvMjAyMCAyMToxMH5_',
              passengerSegment: [
                {
                  key: 'MCFBRFQ-',
                  value: {
                    seats: [],
                  },
                },
                {
                  key: 'MSFBRFQ-',
                  value: {
                    seats: [],
                  },
                },
                {
                  key: 'MiFJTlM-',
                  value: {
                    seats: [],
                  },
                },
              ],
            },
          ],
          journeyKey:
            'WVB_IDUxMn4gfn5TR05_MDgvMjEvMjAyMCAxMzo1MH5JQ05_MDgvMjEvMjAyMCAyMToxMH5_',
        },
      ],
    },
  },
};

export const dummyTestSsrSeatPricesResult = [
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    passengerId: 'MCFBRFQ-',
    group: 0,
    price: 40000,
  },
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    passengerId: 'MCFBRFQ-',
    group: 1,
    price: 40000,
  },
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    passengerId: 'MCFBRFQ-',
    group: 2,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    passengerId: 'MCFBRFQ-',
    group: 3,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    passengerId: 'MCFBRFQ-',
    group: 4,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    passengerId: 'MCFBRFQ-',
    group: 9,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    passengerId: 'MCFBRFQ-',
    group: 99,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    passengerId: 'MiFJTlM-',
    group: 0,
    price: 40000,
  },
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    passengerId: 'MiFJTlM-',
    group: 1,
    price: 40000,
  },
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    passengerId: 'MiFJTlM-',
    group: 2,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    passengerId: 'MiFJTlM-',
    group: 3,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    passengerId: 'MiFJTlM-',
    group: 4,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    passengerId: 'MiFJTlM-',
    group: 9,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    passengerId: 'MiFJTlM-',
    group: 99,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    passengerId: 'MSFBRFQ-',
    group: 0,
    price: 40000,
  },
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    passengerId: 'MSFBRFQ-',
    group: 1,
    price: 40000,
  },
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    passengerId: 'MSFBRFQ-',
    group: 2,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    passengerId: 'MSFBRFQ-',
    group: 3,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    passengerId: 'MSFBRFQ-',
    group: 4,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    passengerId: 'MSFBRFQ-',
    group: 9,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    passengerId: 'MSFBRFQ-',
    group: 99,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    passengerId: 'MCFBRFQ-',
    group: 0,
    price: 40000,
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    passengerId: 'MCFBRFQ-',
    group: 1,
    price: 40000,
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    passengerId: 'MCFBRFQ-',
    group: 2,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    passengerId: 'MCFBRFQ-',
    group: 3,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    passengerId: 'MCFBRFQ-',
    group: 4,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    passengerId: 'MCFBRFQ-',
    group: 9,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    passengerId: 'MCFBRFQ-',
    group: 99,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    passengerId: 'MiFJTlM-',
    group: 0,
    price: 40000,
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    passengerId: 'MiFJTlM-',
    group: 1,
    price: 40000,
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    passengerId: 'MiFJTlM-',
    group: 2,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    passengerId: 'MiFJTlM-',
    group: 3,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    passengerId: 'MiFJTlM-',
    group: 4,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    passengerId: 'MiFJTlM-',
    group: 9,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    passengerId: 'MiFJTlM-',
    group: 99,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    passengerId: 'MSFBRFQ-',
    group: 0,
    price: 40000,
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    passengerId: 'MSFBRFQ-',
    group: 1,
    price: 40000,
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    passengerId: 'MSFBRFQ-',
    group: 2,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    passengerId: 'MSFBRFQ-',
    group: 3,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    passengerId: 'MSFBRFQ-',
    group: 4,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    passengerId: 'MSFBRFQ-',
    group: 9,
    price: 0,
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    passengerId: 'MSFBRFQ-',
    group: 99,
    price: 0,
  },
];

export const dummyTestSsrHistories = {
  data: {
    ssrs: [],
    booking: {
      bookingInfo: {
        recordLocator: null,
        tripType: 'Round',
        status: 'Default',
        isCanceled: false,
        origin: 'ICN',
        destination: 'SGN',
        bookedDate: '2020-07-29T08:27:46.2134956',
        beginDate: '2020-08-16T17:00:00',
        endDate: null,
        passengerCount: 1,
        totalAmount: 1528680.0,
        totalPoint: 0,
        refundedAmount: 0.0,
        refundedPoint: 0,
        isCommingSoon: true,
        isGroup: false,
        baseCurrency: 'KRW',
        statusText: 'Default',
        tripTypeText: '왕복',
        originText: '서울/인천',
        destinationText: '호치민',
      },
      boardingPassInfo: {
        tripType: 'Round',
        journeys: [
          {
            journeyKey:
              'WVB_IDUxMX4gfn5JQ05_MDgvMTYvMjAyMCAxNzowMH5TR05_MDgvMTYvMjAyMCAyMTozMH5_',
            origin: 'ICN',
            destination: 'SGN',
            departure: '2020-08-16T17:00:00',
            arrival: '2020-08-16T21:30:00',
            dateChange: 0,
            cabinClass: 'W',
            identifier: 'YP511',
            boardingPassCount: 1,
            isRefundable: false,
            isDelayed: false,
            isCanceled: false,
            originText: '서울/인천',
            destinationText: '호치민',
            cabinClassText: '서울/인천',
          },
          {
            journeyKey:
              'WVB_IDUxMn4gfn5TR05_MDgvMTcvMjAyMCAxMzo1MH5JQ05_MDgvMTcvMjAyMCAyMToxMH5_',
            origin: 'SGN',
            destination: 'ICN',
            departure: '2020-08-17T13:50:00',
            arrival: '2020-08-17T21:10:00',
            dateChange: 0,
            cabinClass: 'W',
            identifier: 'YP512',
            boardingPassCount: 1,
            isRefundable: false,
            isDelayed: false,
            isCanceled: false,
            originText: '호치민',
            destinationText: '서울/인천',
            cabinClassText: '호치민',
          },
        ],
      },
      passengers: [
        {
          passengerKey: 'MCFBRFQ-',
          firstName: 'HYUNJONG',
          lastName: 'NOH',
          userId: null,
          type: 'ADT',
          gender: 'Male',
          journeys: [
            {
              journeyKey:
                'WVB_IDUxMX4gfn5JQ05_MDgvMTYvMjAyMCAxNzowMH5TR05_MDgvMTYvMjAyMCAyMTozMH5_',
              designator: {
                origin: 'ICN',
                destination: 'SGN',
              },
              passengerSegments: [
                {
                  segmentKey:
                    'WVB_IDUxMX4gfn5JQ05_MDgvMTYvMjAyMCAxNzowMH5TR05_MDgvMTYvMjAyMCAyMTozMH5_',
                  seats: [],
                  ssrs: [],
                },
              ],
              firstPassengerSegmentSeat: [],
              firstPassengerSegmentSsrs: [],
            },
            {
              journeyKey:
                'WVB_IDUxMn4gfn5TR05_MDgvMTcvMjAyMCAxMzo1MH5JQ05_MDgvMTcvMjAyMCAyMToxMH5_',
              designator: {
                origin: 'SGN',
                destination: 'ICN',
              },
              passengerSegments: [
                {
                  segmentKey:
                    'WVB_IDUxMn4gfn5TR05_MDgvMTcvMjAyMCAxMzo1MH5JQ05_MDgvMTcvMjAyMCAyMToxMH5_',
                  seats: [],
                  ssrs: [],
                },
              ],
              firstPassengerSegmentSeat: [],
              firstPassengerSegmentSsrs: [],
            },
          ],
          infant: null,
          totalAmount: 1528680.0,
          totalPoint: 0.0,
          mileage: null,
          isCanceled: false,
          fees: [],
        },
      ],
      payments: [],
      currencyCode: 'KRW',
      pssBreakdown: {
        totalTaxAndFeePrice: 58680.0,
        passengers: {
          'MCFBRFQ-': {
            passengerKey: 'MCFBRFQ-',
            services: null,
            specialServices: null,
            seats: null,
            upgrades: null,
            spoilage: null,
            nameChanges: null,
            convenience: null,
            infant: null,
          },
        },
        balanceDue: 1528680.0,
        journeys: {
          WVB_IDUxMX4gfn5JQ05_MDgvMTYvMjAyMCAxNzowMH5TR05_MDgvMTYvMjAyMCAyMTozMH5_: {
            journeyKey:
              'WVB_IDUxMX4gfn5JQ05_MDgvMTYvMjAyMCAxNzowMH5TR05_MDgvMTYvMjAyMCAyMTozMH5_',
            totalAmount: 735000.0,
            totalPoints: 0.0,
            totalTax: 28000.0,
            totalDiscount: 0.0,
          },
          WVB_IDUxMn4gfn5TR05_MDgvMTcvMjAyMCAxMzo1MH5JQ05_MDgvMTcvMjAyMCAyMToxMH5_: {
            journeyKey:
              'WVB_IDUxMn4gfn5TR05_MDgvMTcvMjAyMCAxMzo1MH5JQ05_MDgvMTcvMjAyMCAyMToxMH5_',
            totalAmount: 735000.0,
            totalPoints: 0.0,
            totalTax: 30680.0,
            totalDiscount: 0.0,
          },
        },
        totalAmount: 1528680.0,
        totalPoints: 0.0,
        pointsBalanceDue: 0.0,
        authorizedBalanceDue: 1528680.0,
        totalToCollect: 1528680.0,
        totalPointsToCollect: 0.0,
        passengerTotals: {
          services: null,
          specialServices: null,
          seats: null,
          upgrades: null,
          spoilage: null,
          nameChanges: null,
          convenience: null,
          infant: null,
        },
        totalFarePrice: 1470000.0,
        addOnTotals: {
          car: null,
          hotel: null,
          activities: null,
        },
        totalSsrPrice: 0.0,
        totalCharged: 1528680.0,
        journeyTotals: {
          totalAmount: 1470000.0,
          totalPoints: 0.0,
          totalTax: 58680.0,
          totalDiscount: 0.0,
        },
      },
      hold: null,
      journeys: [
        {
          origin: 'ICN',
          destination: 'SGN',
          breakdown: {
            WVB_IDUxMX4gfn5JQ05_MDgvMTYvMjAyMCAxNzowMH5TR05_MDgvMTYvMjAyMCAyMTozMH5_: {
              journeyKey:
                'WVB_IDUxMX4gfn5JQ05_MDgvMTYvMjAyMCAxNzowMH5TR05_MDgvMTYvMjAyMCAyMTozMH5_',
              totalAmount: 735000.0,
              totalPoints: 0.0,
              totalTax: 28000.0,
              totalDiscount: 0.0,
            },
            WVB_IDUxMn4gfn5TR05_MDgvMTcvMjAyMCAxMzo1MH5JQ05_MDgvMTcvMjAyMCAyMToxMH5_: {
              journeyKey:
                'WVB_IDUxMn4gfn5TR05_MDgvMTcvMjAyMCAxMzo1MH5JQ05_MDgvMTcvMjAyMCAyMToxMH5_',
              totalAmount: 735000.0,
              totalPoints: 0.0,
              totalTax: 30680.0,
              totalDiscount: 0.0,
            },
          },
          departure: '2020-08-16T17:00:00',
          journeyKey:
            'WVB_IDUxMX4gfn5JQ05_MDgvMTYvMjAyMCAxNzowMH5TR05_MDgvMTYvMjAyMCAyMTozMH5_',
          flightType: 'NonStop',
          stops: 0,
          segments: [
            {
              flag: {
                standby: false,
                international: true,
                changeOfGauge: false,
                blocked: false,
                hosted: true,
                confirming: true,
                confirmingExternal: false,
                seatmapViewable: true,
              },
              identifier: {
                identifier: '511',
                carrierCode: 'YP',
                opSuffix: null,
              },
              origin: 'ICN',
              destination: 'SGN',
              departure: '2020-08-16T17:00:00',
              externalIdentifier: null,
              changeReasonCode: 'NoChange',
              segmentType: 'Normal',
              salesDate: null,
              cabinOfService: 'W',
              arrival: '2020-08-16T21:30:00',
              segmentKey:
                'WVB_IDUxMX4gfn5JQ05_MDgvMTYvMjAyMCAxNzowMH5TR05_MDgvMTYvMjAyMCAyMTozMH5_',
              priorityCode: null,
            },
          ],
          arrival: '2020-08-16T21:30:00',
        },
        {
          origin: 'SGN',
          destination: 'ICN',
          breakdown: {
            WVB_IDUxMX4gfn5JQ05_MDgvMTYvMjAyMCAxNzowMH5TR05_MDgvMTYvMjAyMCAyMTozMH5_: {
              journeyKey:
                'WVB_IDUxMX4gfn5JQ05_MDgvMTYvMjAyMCAxNzowMH5TR05_MDgvMTYvMjAyMCAyMTozMH5_',
              totalAmount: 735000.0,
              totalPoints: 0.0,
              totalTax: 28000.0,
              totalDiscount: 0.0,
            },
            WVB_IDUxMn4gfn5TR05_MDgvMTcvMjAyMCAxMzo1MH5JQ05_MDgvMTcvMjAyMCAyMToxMH5_: {
              journeyKey:
                'WVB_IDUxMn4gfn5TR05_MDgvMTcvMjAyMCAxMzo1MH5JQ05_MDgvMTcvMjAyMCAyMToxMH5_',
              totalAmount: 735000.0,
              totalPoints: 0.0,
              totalTax: 30680.0,
              totalDiscount: 0.0,
            },
          },
          departure: '2020-08-17T13:50:00',
          journeyKey:
            'WVB_IDUxMn4gfn5TR05_MDgvMTcvMjAyMCAxMzo1MH5JQ05_MDgvMTcvMjAyMCAyMToxMH5_',
          flightType: 'NonStop',
          stops: 0,
          segments: [
            {
              flag: {
                standby: false,
                international: true,
                changeOfGauge: false,
                blocked: false,
                hosted: true,
                confirming: true,
                confirmingExternal: false,
                seatmapViewable: true,
              },
              identifier: {
                identifier: '512',
                carrierCode: 'YP',
                opSuffix: null,
              },
              origin: 'SGN',
              destination: 'ICN',
              departure: '2020-08-17T13:50:00',
              externalIdentifier: null,
              changeReasonCode: 'NoChange',
              segmentType: 'Normal',
              salesDate: null,
              cabinOfService: 'W',
              arrival: '2020-08-17T21:10:00',
              segmentKey:
                'WVB_IDUxMn4gfn5TR05_MDgvMTcvMjAyMCAxMzo1MH5JQ05_MDgvMTcvMjAyMCAyMToxMH5_',
              priorityCode: null,
            },
          ],
          arrival: '2020-08-17T21:10:00',
        },
      ],
      breakdown: {
        balanceDue: 1528680.0,
        authorizedBalanceDue: 1528680.0,
        totalFarePrice: 1470000.0,
        totalSsrPrice: 0.0,
        totalFarePriceDiscount: 0.0,
        totalFarePoint: 0,
        totalTaxAndFee: 58680.0,
      },
      groupName: null,
      journeyBreakdowns: [
        {
          totalFarePrice: 735000.0,
          totalFarePriceDiscount: 0.0,
          totalFarePoint: 0,
          totalTaxAndFee: 28000.0,
          totalSsrPrice: 0.0,
          origin: 'ICN',
          destination: 'SGN',
          departure: '2020-08-16T17:00:00',
          journeyKey:
            'WVB_IDUxMX4gfn5JQ05_MDgvMTYvMjAyMCAxNzowMH5TR05_MDgvMTYvMjAyMCAyMTozMH5_',
          flightType: 'NonStop',
          stops: 0,
          arrival: '2020-08-16T21:30:00',
          totalPrice: 763000.0,
          totalPoint: 0,
        },
        {
          totalFarePrice: 735000.0,
          totalFarePriceDiscount: 0.0,
          totalFarePoint: 0,
          totalTaxAndFee: 30680.0,
          totalSsrPrice: 0.0,
          origin: 'SGN',
          destination: 'ICN',
          departure: '2020-08-17T13:50:00',
          journeyKey:
            'WVB_IDUxMn4gfn5TR05_MDgvMTcvMjAyMCAxMzo1MH5JQ05_MDgvMTcvMjAyMCAyMToxMH5_',
          flightType: 'NonStop',
          stops: 0,
          arrival: '2020-08-17T21:10:00',
          totalPrice: 765680.0,
          totalPoint: 0,
        },
      ],
      passengerInfos: [
        {
          info: {
            nationality: null,
            residentCountry: null,
            gender: 'Male',
            dateOfBirth: null,
            familyNumber: null,
          },
          passengerKey: 'MCFBRFQ-',
          journeys: [
            {
              origin: 'ICN',
              destination: 'SGN',
              breakdown: {
                fares: [
                  {
                    code: 'FarePrice',
                    amount: 735000.0,
                    points: 0,
                    text: '항공 운임',
                  },
                ],
                specialServices: [],
                totalFarePrice: 735000.0,
                totalSsrPrice: 0.0,
                totalFarePriceDiscount: 0.0,
                totalFarePoint: 0,
                totalTaxAndFee: 28000.0,
                totalPrice: 763000.0,
                totalPoint: 0,
                fareDiscounts: [],
                taxesAndFees: [
                  {
                    code: 'BP',
                    amount: 28000.0,
                    points: 0,
                    text: '한국 국제 공항 수수료',
                  },
                ],
              },
              departure: '2020-08-16T17:00:00',
              journeyKey:
                'WVB_IDUxMX4gfn5JQ05_MDgvMTYvMjAyMCAxNzowMH5TR05_MDgvMTYvMjAyMCAyMTozMH5_',
              flightType: 'NonStop',
              stops: 0,
              segments: [
                {
                  breakdown: {
                    fares: [
                      {
                        code: 'FarePrice',
                        amount: 735000.0,
                        points: 0,
                        text: '항공 운임',
                      },
                    ],
                    specialServices: [],
                    totalFarePrice: 735000.0,
                    totalSsrPrice: 0.0,
                    totalFarePriceDiscount: 0.0,
                    totalFarePoint: 0,
                    totalTaxAndFee: 28000.0,
                    totalPrice: 763000.0,
                    totalPoint: 0,
                    fareDiscounts: [],
                    taxesAndFees: [
                      {
                        code: 'BP',
                        amount: 28000.0,
                        points: 0,
                        text: '한국 국제 공항 수수료',
                      },
                    ],
                  },
                  origin: 'ICN',
                  destination: 'SGN',
                  departure: '2020-08-16T17:00:00',
                  arrival: '2020-08-16T21:30:00',
                  infantFees: null,
                  fees: [],
                },
              ],
              arrival: '2020-08-16T21:30:00',
            },
            {
              origin: 'SGN',
              destination: 'ICN',
              breakdown: {
                fares: [
                  {
                    code: 'FarePrice',
                    amount: 735000.0,
                    points: 0,
                    text: '항공 운임',
                  },
                ],
                specialServices: [],
                totalFarePrice: 735000.0,
                totalSsrPrice: 0.0,
                totalFarePriceDiscount: 0.0,
                totalFarePoint: 0,
                totalTaxAndFee: 30680.0,
                totalPrice: 765680.0,
                totalPoint: 0,
                fareDiscounts: [],
                taxesAndFees: [
                  {
                    code: 'C4',
                    amount: 2560.0,
                    points: 0,
                    text: '보안 책임',
                  },
                  {
                    code: 'JC',
                    amount: 28120.0,
                    points: 0,
                    text: '베트남 국제 여객 서비스 요금',
                  },
                ],
              },
              departure: '2020-08-17T13:50:00',
              journeyKey:
                'WVB_IDUxMn4gfn5TR05_MDgvMTcvMjAyMCAxMzo1MH5JQ05_MDgvMTcvMjAyMCAyMToxMH5_',
              flightType: 'NonStop',
              stops: 0,
              segments: [
                {
                  breakdown: {
                    fares: [
                      {
                        code: 'FarePrice',
                        amount: 735000.0,
                        points: 0,
                        text: '항공 운임',
                      },
                    ],
                    specialServices: [],
                    totalFarePrice: 735000.0,
                    totalSsrPrice: 0.0,
                    totalFarePriceDiscount: 0.0,
                    totalFarePoint: 0,
                    totalTaxAndFee: 30680.0,
                    totalPrice: 765680.0,
                    totalPoint: 0,
                    fareDiscounts: [],
                    taxesAndFees: [
                      {
                        code: 'C4',
                        amount: 2560.0,
                        points: 0,
                        text: '보안 책임',
                      },
                      {
                        code: 'JC',
                        amount: 28120.0,
                        points: 0,
                        text:
                          '베트남 국제 여객 서비스 요금',
                      },
                    ],
                  },
                  origin: 'SGN',
                  destination: 'ICN',
                  departure: '2020-08-17T13:50:00',
                  arrival: '2020-08-17T21:10:00',
                  infantFees: null,
                  fees: [],
                },
              ],
              arrival: '2020-08-17T21:10:00',
            },
          ],
          addresses: [],
          discountCode: null,
          program: null,
          travelDocuments: [],
          weightCategory: 'Male',
          passengerTypeCode: 'ADT',
          passengerAlternateKey: null,
          bags: [],
          customerNumber: null,
          name: {
            first: 'HYUNJONG',
            middle: null,
            last: 'NOH',
            title: null,
            suffix: null,
          },
        },
      ],
      selfServiceMoveAvailable: false,
      bookingKey: null,
    },
  },
  resultCode: 0,
  message: null,
  errors: null,
};

export const dummyTestSsrCabinClasses = [
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MDgvMTYvMjAyMCAxNzowMH5TR05_MDgvMTYvMjAyMCAyMTozMH5_',
    cabinClass: ECabinClass.PREMIUM,
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MDgvMTcvMjAyMCAxMzo1MH5JQ05_MDgvMTcvMjAyMCAyMToxMH5_',
    cabinClass: ECabinClass.PREMIUM,
  },
];

export const dummyTestSsrSeatMapResourcesRaw = [
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    seatMap: {
      W: {
        1: [
          {
            allowedSsrs: [],
            assignable: true,
            availability: 'Open',
            classOfCabin: 'W',
            column: 'A',
            group: 3,
            properties: [],
            row: '1',
            unitKey:
              'WVAhNTEyISAhNjM3MzcyNDM0MDAwMDAwMDAwIVNHTiFJQ04hMUEhVw--',
          },
        ],
        2: [
          {
            allowedSsrs: [],
            assignable: true,
            availability: 'Open',
            classOfCabin: 'W',
            column: 'B',
            group: 4,
            properties: [],
            row: '1',
            unitKey:
              'WVAhNTEyISAhNjM3MzcyNDM0MDAwMDAwMDAwIVNHTiFJQ04hMUEhVw--',
          },
        ],
      },
      Y: {
        10: [
          {
            allowedSsrs: [],
            assignable: true,
            availability: 'Open',
            classOfCabin: 'Y',
            column: 'A',
            group: 9,
            properties: [],
            row: '10',
            unitKey:
              'WVAhNTEyISAhNjM3MzcyNDM0MDAwMDAwMDAwIVNHTiFJQ04hMUEhVw--',
          },
        ],
        11: [
          {
            allowedSsrs: [],
            assignable: true,
            availability: 'Open',
            classOfCabin: 'Y',
            column: 'A',
            group: 9,
            properties: [],
            row: '11',
            unitKey:
              'WVAhNTEyISAhNjM3MzcyNDM0MDAwMDAwMDAwIVNHTiFJQ04hMUEhVw--',
          },
        ],
      },
    },
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    seatMap: {
      W: {
        1: [
          {
            allowedSsrs: [],
            assignable: true,
            availability: 'Open',
            classOfCabin: 'W',
            column: 'A',
            group: 3,
            properties: [],
            row: '1',
            unitKey:
              'PVAhNTEyISAhNjM3MzcyNDM0MDAwMDAwMDAwIVNHTiFJQ04hMUEhVw--',
          },
        ],
        2: [
          {
            allowedSsrs: [],
            assignable: true,
            availability: 'Open',
            classOfCabin: 'W',
            column: 'B',
            group: 4,
            properties: [],
            row: '1',
            unitKey:
              'PVAhNTEyISAhNjM3MzcyNDM0MDAwMDAwMDAwIVNHTiFJQ04hMUEhVw--',
          },
        ],
      },
      Y: {
        10: [
          {
            allowedSsrs: [],
            assignable: true,
            availability: 'Open',
            classOfCabin: 'Y',
            column: 'A',
            group: 9,
            properties: [],
            row: '10',
            unitKey:
              'PVAhNTEyISAhNjM3MzcyNDM0MDAwMDAwMDAwIVNHTiFJQ04hMUEhVw--',
          },
        ],
        11: [
          {
            allowedSsrs: [],
            assignable: true,
            availability: 'Open',
            classOfCabin: 'Y',
            column: 'A',
            group: 9,
            properties: [],
            row: '11',
            unitKey:
              'PVAhNTEyISAhNjM3MzcyNDM0MDAwMDAwMDAwIVNHTiFJQ04hMUEhVw--',
          },
        ],
      },
    },
  },
];

export const dummyTestSsrSeatMapResourcesResult = [
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    seatMap: [
      {
        assignable: true,
        cabinClass: ECabinClass.PREMIUM,
        column: 'A',
        group: 3,
        row: 1,
        seatId:
          'WVAhNTEyISAhNjM3MzcyNDM0MDAwMDAwMDAwIVNHTiFJQ04hMUEhVw--',
        isOccupied: false,
        initialName: '',
      },
      {
        assignable: true,
        cabinClass: ECabinClass.PREMIUM,
        column: 'B',
        group: 4,
        row: 1,
        seatId:
          'WVAhNTEyISAhNjM3MzcyNDM0MDAwMDAwMDAwIVNHTiFJQ04hMUEhVw--',
        isOccupied: false,
        initialName: '',
      },
      {
        assignable: true,
        cabinClass: ECabinClass.ECONOMY,
        column: 'A',
        group: 9,
        row: 10,
        seatId:
          'WVAhNTEyISAhNjM3MzcyNDM0MDAwMDAwMDAwIVNHTiFJQ04hMUEhVw--',
        isOccupied: false,
        initialName: '',
      },
      {
        assignable: true,
        cabinClass: ECabinClass.ECONOMY,
        column: 'A',
        group: 9,
        row: 11,
        seatId:
          'WVAhNTEyISAhNjM3MzcyNDM0MDAwMDAwMDAwIVNHTiFJQ04hMUEhVw--',
        isOccupied: false,
        initialName: '',
      },
    ],
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    seatMap: [
      {
        assignable: true,
        cabinClass: ECabinClass.PREMIUM,
        column: 'A',
        group: 3,
        row: 1,
        seatId:
          'PVAhNTEyISAhNjM3MzcyNDM0MDAwMDAwMDAwIVNHTiFJQ04hMUEhVw--',
        isOccupied: false,
        initialName: '',
      },
      {
        assignable: true,
        cabinClass: ECabinClass.PREMIUM,
        column: 'B',
        group: 4,
        row: 1,
        seatId:
          'PVAhNTEyISAhNjM3MzcyNDM0MDAwMDAwMDAwIVNHTiFJQ04hMUEhVw--',
        isOccupied: false,
        initialName: '',
      },
      {
        assignable: true,
        cabinClass: ECabinClass.ECONOMY,
        column: 'A',
        group: 9,
        row: 10,
        seatId:
          'PVAhNTEyISAhNjM3MzcyNDM0MDAwMDAwMDAwIVNHTiFJQ04hMUEhVw--',
        isOccupied: false,
        initialName: '',
      },
      {
        assignable: true,
        cabinClass: ECabinClass.ECONOMY,
        column: 'A',
        group: 9,
        row: 11,
        seatId:
          'PVAhNTEyISAhNjM3MzcyNDM0MDAwMDAwMDAwIVNHTiFJQ04hMUEhVw--',
        isOccupied: false,
        initialName: '',
      },
    ],
  },
];

export const dummyTestSsrSeatHistoryRaw = {
  data: {
    booking: {
      journeys: [
        {
          segments: [
            {
              segmentKey:
                'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
              passengerSegment: [
                {
                  key: 'MCFBRFQ-',
                  value: {
                    seats: [
                      {
                        penalty: 0,
                        seatInformation: {
                          propertyList: [
                            {
                              key: 'WINDOW',
                              value: 'TRUE',
                            },
                            {
                              key: 'BULKHEAD',
                              value: 'TRUE',
                            },
                            {
                              key: 'BASSINET',
                              value: 'TRUE',
                            },
                            {
                              key: 'LAVATORY',
                              value: 'TRUE',
                            },
                            {
                              key: 'BRDZONE',
                              value: '1',
                            },
                            {
                              key: 'TCC',
                              value: 'W',
                            },
                          ],
                        },
                        arrivalStation: 'SGN',
                        departureStation: 'ICN',
                        passengerKey: 'MCFBRFQ-',
                        unitKey:
                          'WVAhNTExISAhNjM3MzcxNjg0MDAwMDAwMDAwIUlDTiFTR04hMUEhVw--',
                        classOfCabin: 'W',
                        row: '1',
                        column: 'A',
                      },
                    ],
                  },
                },
                {
                  key: 'MSFBRFQ-',
                  value: {
                    seats: [],
                  },
                },
                {
                  key: 'MiFJTlM-',
                  value: {
                    seats: [],
                  },
                },
              ],
            },
          ],
          journeyKey:
            'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
        },
        {
          segments: [
            {
              segmentKey:
                'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
              passengerSegment: [
                {
                  key: 'MCFBRFQ-',
                  value: {
                    seats: [
                      {
                        penalty: 0,
                        seatInformation: {
                          propertyList: [
                            {
                              key: 'WINDOW',
                              value: 'TRUE',
                            },
                            {
                              key: 'BULKHEAD',
                              value: 'TRUE',
                            },
                            {
                              key: 'BASSINET',
                              value: 'TRUE',
                            },
                            {
                              key: 'LAVATORY',
                              value: 'TRUE',
                            },
                            {
                              key: 'BRDZONE',
                              value: '1',
                            },
                            {
                              key: 'TCC',
                              value: 'W',
                            },
                          ],
                        },
                        arrivalStation: 'ICN',
                        departureStation: 'SGN',
                        passengerKey: 'MCFBRFQ-',
                        unitKey:
                          'WVAhNTEyISAhNjM3MzcyNDM0MDAwMDAwMDAwIVNHTiFJQ04hMUEhVw--',
                        classOfCabin: 'W',
                        row: '1',
                        column: 'A',
                      },
                    ],
                  },
                },
                {
                  key: 'MSFBRFQ-',
                  value: {
                    seats: [
                      {
                        penalty: 0,
                        seatInformation: {
                          propertyList: [
                            {
                              key: 'BULKHEAD',
                              value: 'TRUE',
                            },
                            {
                              key: 'AISLE',
                              value: 'TRUE',
                            },
                            {
                              key: 'LAVATORY',
                              value: 'TRUE',
                            },
                            {
                              key: 'DISABIL',
                              value: 'TRUE',
                            },
                            {
                              key: 'BRDZONE',
                              value: '1',
                            },
                            {
                              key: 'TCC',
                              value: 'W',
                            },
                          ],
                        },
                        arrivalStation: 'ICN',
                        departureStation: 'SGN',
                        passengerKey: 'MSFBRFQ-',
                        unitKey:
                          'WVAhNTEyISAhNjM3MzcyNDM0MDAwMDAwMDAwIVNHTiFJQ04hMUIhVw--',
                        classOfCabin: 'W',
                        row: '1',
                        column: 'B',
                      },
                    ],
                  },
                },
                {
                  key: 'MiFJTlM-',
                  value: {
                    seats: [],
                  },
                },
              ],
            },
          ],
          journeyKey:
            'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
        },
      ],
      breakdown: {
        balanceDue: 4121610.0,
        authorizedBalanceDue: 4121610.0,
        totalCharged: 4121610.0,
        passengerTotals: {
          specialServices: null,
          seats: {
            total: null,
            taxes: null,
          },
          infant: {
            total: 140500.0,
            taxes: null,
          },
        },
        journeyTotals: {
          totalAmount: 3863750.0,
          totalTax: 117360.0,
          totalDiscount: 351250.0,
        },
      },
      passengers: [
        {
          key: 'MCFBRFQ-',
          value: {
            passengerKey: 'MCFBRFQ-',
            fees: [
              {
                code: 'ASA',
                type: 'SeatFee',
                ssrCode: null,
                ssrNumber: 0,
                detail: null,
                passengerFeeKey: 'MCEyITk-',
                flightReference: '20201001 YP 511 ICNSGN',
                serviceCharges: [
                  {
                    amount: 0.0,
                    code: 'ASA',
                    detail: 'ICN-SGN',
                    type: 'ServiceCharge',
                    collectType: null,
                    currencyCode: null,
                    foreignCurrencyCode: null,
                    foreignAmount: null,
                    ticketCode: null,
                  },
                ],
              },
              {
                code: 'ASA',
                type: 'SeatFee',
                ssrCode: null,
                ssrNumber: 0,
                detail: null,
                passengerFeeKey: 'MCEzITk-',
                flightReference: '20201002 YP 512 SGNICN',
                serviceCharges: [
                  {
                    amount: 0.0,
                    code: 'ASA',
                    detail: 'SGN-ICN',
                    type: 'ServiceCharge',
                    collectType: null,
                    currencyCode: null,
                    foreignCurrencyCode: null,
                    foreignAmount: null,
                    ticketCode: null,
                  },
                ],
              },
            ],
            name: {
              first: 'YONGHYUN',
              last: 'QWER',
            },
          },
        },
        {
          key: 'MSFBRFQ-',
          value: {
            passengerKey: 'MSFBRFQ-',
            fees: [
              {
                code: 'ASA',
                type: 'SeatFee',
                ssrCode: null,
                ssrNumber: 0,
                detail: null,
                passengerFeeKey: 'MSEwITk-',
                flightReference: '20201002 YP 512 SGNICN',
                serviceCharges: [
                  {
                    amount: 0.0,
                    code: 'ASA',
                    detail: 'SGN-ICN',
                    type: 'ServiceCharge',
                    collectType: null,
                    currencyCode: null,
                    foreignCurrencyCode: null,
                    foreignAmount: null,
                    ticketCode: null,
                  },
                ],
              },
            ],
            name: {
              first: 'WOMAN',
              last: 'KOH',
            },
          },
        },
        {
          key: 'MiFJTlM-',
          value: {
            passengerKey: 'MiFJTlM-',
            fees: [],
            name: {
              first: 'JAEND',
              last: 'LEE',
            },
          },
        },
      ],
    },
  },
  prices: dummyTestSsrSeatPricesResult,
  seatMap: dummyTestSsrSeatMapResourcesResult,
  passengers: [
    {
      id: 'MCFBRFQ-',
      label: 'LEE YONGHYUN',
    },
    {
      id: 'MSFBRFQ-',
      label: 'LEE WOMAN',
    },
    {
      id: 'MiFJTlM-',
      label: 'LEE YONGHYUNINFANTSEAT',
    },
  ],
  resultCode: 0,
  message: null,
  errors: null,
};

export const dummyTestSsrSeatHistoryResult = {
  type: 'seat',
  count: 3,
  contents: [
    {
      tripId:
        'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
      tripLabel: 'ICN → SGN',
      list: [
        {
          count: 1,
          productLabel: '1A',
          price: 0,
          ssrIds: [
            'WVAhNTExISAhNjM3MzcxNjg0MDAwMDAwMDAwIUlDTiFTR04hMUEhVw--',
          ],
          passengerId: 'MCFBRFQ-',
          passengerName: 'LEE YONGHYUN',
        },
      ],
    },
    {
      tripId:
        'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
      tripLabel: 'SGN → ICN',
      list: [
        {
          count: 1,
          productLabel: '1A',
          price: 0,
          ssrIds: [
            'WVAhNTEyISAhNjM3MzcyNDM0MDAwMDAwMDAwIVNHTiFJQ04hMUEhVw--',
          ],
          passengerId: 'MCFBRFQ-',
          passengerName: 'LEE YONGHYUN',
        },
        {
          count: 1,
          productLabel: '1B',
          price: 0,
          ssrIds: [
            'WVAhNTEyISAhNjM3MzcyNDM0MDAwMDAwMDAwIVNHTiFJQ04hMUIhVw--',
          ],
          passengerId: 'MSFBRFQ-',
          passengerName: 'LEE WOMAN',
        },
      ],
    },
  ],
};

export const dummyTestSsrSeatOccupiedSeatsFromHistoryResult = [
  {
    tripId:
      'WVB_IDUxMX4gfn5JQ05_MTAvMDEvMjAyMCAxNzowMH5TR05_MTAvMDEvMjAyMCAyMTozMH5_',
    passengerId: 'MCFBRFQ-',
    seatId:
      'WVAhNTExISAhNjM3MzcxNjg0MDAwMDAwMDAwIUlDTiFTR04hMUEhVw--',
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    passengerId: 'MCFBRFQ-',
    seatId:
      'WVAhNTEyISAhNjM3MzcyNDM0MDAwMDAwMDAwIVNHTiFJQ04hMUEhVw--',
  },
  {
    tripId:
      'WVB_IDUxMn4gfn5TR05_MTAvMDIvMjAyMCAxMzo1MH5JQ05_MTAvMDIvMjAyMCAyMToxMH5_',
    passengerId: 'MSFBRFQ-',
    seatId:
      'WVAhNTEyISAhNjM3MzcyNDM0MDAwMDAwMDAwIVNHTiFJQ04hMUIhVw--',
  },
];
