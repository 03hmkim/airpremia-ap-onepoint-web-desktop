import React, { FC } from 'react';
import ItineraryTypeButtons from '.';
import styled from 'styled-components';
import { useBooking } from '@airpremia/core/hooks';
import { EFlightType } from '@airpremia/core/stores/models/bookingSession';

export default {
  title: 'desktop / Organisms / ItineraryTypeButtons',
  component: ItineraryTypeButtons,
  parameters: {
    componentSubtitle: 'ItineraryTypeButtons 컴포넌트 Docs',
  },
};

export const 여정타입버튼: FC = () => {
  const {
    bookingSessionStore,
    onChangeItineraryType,
  } = useBooking();

  const itineraryType = bookingSessionStore.itineraryType;
  const onChangeItineraryTypeLocal = (
    itineraryType: EFlightType,
  ) => () => {
    onChangeItineraryType({
      itineraryType,
    });
  };

  return (
    <S.container>
      <ItineraryTypeButtons
        type={itineraryType}
        onChangeType={onChangeItineraryTypeLocal}
      />
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
