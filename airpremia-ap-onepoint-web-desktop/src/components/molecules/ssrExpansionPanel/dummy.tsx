import React from 'react';
import SvgBag from 'public/images/ico_bag.svg';

export const dummySsrExpansionPanel = {
  type: 'baggage',
  subType: '',
  left: <SvgBag />,
  title: '위탁수하물',
  defaultDescription: '인당 23KG',
  count: 3,
  contents: [
    {
      tripId: 'key',
      tripLabel: 'ICN → SGN',
      list: [
        {
          productLabel: '추가 수하물 28kg',
          passengerId: 'passengerId1',
          passengerName: 'KOH KYUHOON',
          price: 120000,
          ssrIds: [
            'MCFNQ0ZCUkZRLSFCRzMyITEhU0dOIVlQITYzNzMxMDM0MDAwMDAwMDAwMCFJQ04hNTExISA-',
          ],
          count: 1,
        },
        {
          productLabel: '추가 수하물 32kg',
          passengerId: 'passengerId1',
          passengerName: 'KOH KYUHOON',
          price: 120000,
          ssrIds: [
            'MCFNQ0ZCUkZRLSFCRzMyITEhU0dOIVlQITYzNzMxMDM0MDAwMDAwMDAwMCFJQ04hNTExISA-',
          ],
          count: 2,
        },
      ],
    },
    {
      tripLabel: 'SGN → ICN',
      list: [
        {
          productLabel: '추가 수하물 32kg',
          passengerId: 'passengerId1',
          passengerName: 'KOH KYUHOON',
          price: 150000,
          ssrIds: [
            'MCFNQ0ZCUkZRLSFCRzMyITEhU0dOIVlQITYzNzMxMDM0MDAwMDAwMDAwMCFJQ04hNTExISA-',
          ],
          count: 2,
        },
      ],
    },
  ],
};
