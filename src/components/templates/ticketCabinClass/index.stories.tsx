import React, { FC, Fragment } from 'react';
import moment from 'moment';
import { map } from 'lodash';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Dummy from './dummy';

import TicketCabinClass from '.';
import {
  CabinClassOneway,
  Caution,
  FloatingFoldableItinerary,
} from 'src/components';
import { TaskButton } from 'src/components';
import {
  WHITE1,
  DARK_BLUE1,
} from '@airpremia/cdk/styles/colors';
import { EFlightType } from '@airpremia/core/stores/models/bookingSession';

export default {
  title: 'desktop / Templates / TicketCabinClass',
  component: TicketCabinClass,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'TicketCabinClass',
  },
};

const list = [
  {
    date: '2020-06-01T00:00:00',
    lowfareCabins: [
      {
        cabinClass: 'EY',
        amount: 920000.0,
        available: 252,
        noFlight: false,
      },
      {
        cabinClass: 'PE',
        amount: 1470000.0,
        available: 56,
        noFlight: false,
      },
    ],
  },
  {
    date: '2020-06-02T00:00:00',
    lowfareCabins: [
      {
        cabinClass: 'EY',
        amount: 920000.0,
        available: 253,
        noFlight: false,
      },
      {
        cabinClass: 'PE',
        amount: 1470000.0,
        available: 56,
        noFlight: false,
      },
    ],
  },
  {
    date: '2020-06-03T00:00:00',
    lowfareCabins: [
      {
        cabinClass: 'EY',
        amount: 920000.0,
        available: 251,
        noFlight: false,
      },
      {
        cabinClass: 'PE',
        amount: 1470000.0,
        available: 56,
        noFlight: false,
      },
    ],
  },
  {
    date: '2020-06-04T00:00:00',
    lowfareCabins: [
      {
        cabinClass: 'EY',
        amount: 920000.0,
        available: 252,
        noFlight: false,
      },
      {
        cabinClass: 'PE',
        amount: 1470000.0,
        available: 56,
        noFlight: false,
      },
    ],
  },
  {
    date: '2020-06-05T00:00:00',
    lowfareCabins: [
      {
        cabinClass: 'EY',
        amount: 980000.0,
        available: 253,
        noFlight: false,
      },
      {
        cabinClass: 'PE',
        amount: 1530000.0,
        available: 56,
        noFlight: false,
      },
    ],
  },
  {
    date: '2020-06-06T00:00:00',
    lowfareCabins: [
      {
        cabinClass: 'EY',
        amount: 980000.0,
        available: 253,
        noFlight: false,
      },
      {
        cabinClass: 'PE',
        amount: 1530000.0,
        available: 56,
        noFlight: false,
      },
    ],
  },
  {
    date: '2020-06-07T00:00:00',
    lowfareCabins: [
      {
        cabinClass: 'EY',
        amount: 980000.0,
        available: 253,
        noFlight: false,
      },
      {
        cabinClass: 'PE',
        amount: 1530000.0,
        available: 56,
        noFlight: false,
      },
    ],
  },
  {
    date: '2020-06-08T00:00:00',
    lowfareCabins: [
      {
        cabinClass: 'EY',
        amount: 920000.0,
        available: 253,
        noFlight: false,
      },
      {
        cabinClass: 'PE',
        amount: 1470000.0,
        available: 56,
        noFlight: false,
      },
    ],
  },
  {
    date: '2020-06-09T00:00:00',
    lowfareCabins: [
      {
        cabinClass: 'EY',
        amount: 920000.0,
        available: 253,
        noFlight: false,
      },
      {
        cabinClass: 'PE',
        amount: 1470000.0,
        available: 56,
        noFlight: false,
      },
    ],
  },
  {
    date: '2020-06-10T00:00:00',
    lowfareCabins: [
      {
        cabinClass: 'EY',
        amount: 920000.0,
        available: 253,
        noFlight: false,
      },
      {
        cabinClass: 'PE',
        amount: 1470000.0,
        available: 56,
        noFlight: false,
      },
    ],
  },
];

export const 티켓클래스선택편도: FC = () => {
  return (
    <TicketCabinClass
      floatingFoldableItinerary={
        <FloatingFoldableItinerary
          origin="ICN"
          destination="SAN"
          beginDate={moment('2020-11-05')}
          endDate={moment('2020-12-05')}
          totalPrice={360000}
          isFolded={boolean('isFolded', true)}
          itineraryType={EFlightType.OW}
          onClick={() => {}}
        />
      }
      cabinClassOneWay={
        <CabinClassOneway
          list={list}
          idx={0}
          market={Dummy.market}
          journeys={Dummy.journeys}
          onLoadLowFare={() => {}}
        />
      }
      nextButton={
        <TaskButton
          color={WHITE1}
          backgroundColor={DARK_BLUE1}
        >
          다음
        </TaskButton>
      }
      caution={
        <Caution title={Dummy.title} body={Dummy.body} />
      }
    />
  );
};

export const 티켓클래스선택왕복: FC = () => {
  return (
    <TicketCabinClass
      floatingFoldableItinerary={
        <FloatingFoldableItinerary
          origin="ICN"
          destination="SAN"
          beginDate={moment('2020-11-05')}
          endDate={moment('2020-12-05')}
          totalPrice={360000}
          isFolded={boolean('isFolded', true)}
          itineraryType={EFlightType.RT}
          onClick={() => {}}
        />
      }
      cabinClassOneWay={
        <Fragment>
          {map(Dummy.availability, (item, i) => (
            <CabinClassOneway
              list={list}
              idx={i}
              key={`cabinClassOneway${i.toString()}`}
              market={item.market}
              journeys={item.journeys}
              onLoadLowFare={() => {}}
            />
          ))}
        </Fragment>
      }
      nextButton={
        <TaskButton
          color={WHITE1}
          backgroundColor={DARK_BLUE1}
        >
          다음
        </TaskButton>
      }
      caution={
        <Caution title={Dummy.title} body={Dummy.body} />
      }
    />
  );
};
