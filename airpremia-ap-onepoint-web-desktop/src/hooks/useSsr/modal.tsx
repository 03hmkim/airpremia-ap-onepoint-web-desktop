import { ISsrRequestItem } from './useSsr';
import {
  SsrCheckbox,
  SsrModalAmenity,
  SsrModalBaggage,
  SsrModalMeal,
  SsrModalSeat,
  SsrModalWifi,
} from '../../components';
import { useCallback } from 'react';
import { ISsrModalLeftItem } from './useSsrUI';
import styled from 'styled-components';
import { IIdLabel } from '@airpremia/core/lib/types';
import { ISsrTrip } from '@airpremia/core/stores/models/ssr';

export default () => {
  const getModalElement = ({
    modalName,
    trips,
    passengers,
    onSubmit,
  }: {
    modalName: string;
    trips?: ISsrTrip[];
    passengers?: IIdLabel[];
    onSubmit: (ssrIds?: ISsrRequestItem[]) => void;
  }) => {
    switch (modalName) {
      case 'baggage':
        return <SsrModalBaggage onSubmit={onSubmit} />;
      case 'seat':
        return (
          <SsrModalSeat
            trips={trips}
            passengers={passengers}
            onSubmit={onSubmit}
          />
        );
      case 'wifi':
        return <SsrModalWifi />;
      case 'meal':
        return <SsrModalMeal onSubmit={onSubmit} />;
      case 'amenity':
        return <SsrModalAmenity />;
      default:
        return <div />;
    }
  };

  const onAdoptToAllPassengers = useCallback(() => {}, []);

  const getPassengersCheckboxElement = (
    passengers?: ISsrModalLeftItem[],
  ) =>
    passengers?.map((passenger: ISsrModalLeftItem) => (
      <div className="inputWrapper" key={passenger.id}>
        <SsrCheckbox onClick={() => {}} isActive={false}>
          <S.label className="font-premia-bold">
            {passenger.label}
          </S.label>
        </SsrCheckbox>
      </div>
    ));

  return {
    getModalElement,
    onAdoptToAllPassengers,
    getPassengersCheckboxElement,
  };
};

const S = {
  label: styled.span`
    font-size: 20px;
    letter-spacing: -0.4px;
  `,
};
