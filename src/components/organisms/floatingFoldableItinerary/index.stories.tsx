import React, { FC } from 'react';
import moment from 'moment';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import FloatingFoldableItinerary from '.';
import { EFlightType } from '@airpremia/core/stores/models/bookingSession';

export default {
  title: 'desktop / Organisms / FloatingFoldableItinerary',
  component: FloatingFoldableItinerary,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'FloatingFoldableItinerary',
  },
};

export const 왕복_항공권예매일정접힌컴포넌트: FC = () => {
  return (
    <FloatingFoldableItinerary
      origin="ICN"
      destination="SAN"
      beginDate={moment('2020-11-05')}
      endDate={moment('2020-12-05')}
      totalPrice={360000}
      isFolded={boolean('folding여부', true)}
      onClick={() => {}}
      itineraryType={EFlightType.RT}
    />
  );
};

export const 편도_항공권예매일정접힌컴포넌트: FC = () => {
  return (
    <FloatingFoldableItinerary
      origin="ICN"
      destination="SAN"
      beginDate={moment('2020-11-05')}
      endDate={undefined}
      totalPrice={360000}
      isFolded={boolean('folding여부', true)}
      onClick={() => {}}
      itineraryType={EFlightType.OW}
    />
  );
};
