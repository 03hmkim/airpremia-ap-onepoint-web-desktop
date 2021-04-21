import {
  useBooking,
  useScroll
} from '@airpremia/core/hooks';
import { JourneyAvailability, Trip } from '@airpremia/core/stores/models/bookingSession';
import { FC, useEffect, useState } from 'react';
import { BookingChangeFlights } from 'src/components';
import styled from 'styled-components';

interface IStyleProps {}
interface IProps extends IStyleProps {}

const bookingChangeTicket: FC<IProps> = () => {

  const { 
      bookingSessionStore,
  } = useBooking();
  
  const {
    rebookAvailability,
  } = bookingSessionStore;
  

  const { upScroll } = useScroll();

  useEffect(() => {
    upScroll();
  }, []);

  const [checkJourneykey, selectJourneyKey] = useState<
    string
  >('');

  const [checkFarekey, selectFareyKey] = useState<
    string
  >('');

 
  const onClickJourney = (key: string) => () =>
    selectJourneyKey(key);
 
  const onClickFare = (key: string) => () =>
    selectFareyKey(key);


  useEffect(() => {
    console.log("바꿈", checkJourneykey)
  }, [checkJourneykey]);

  useEffect(() => {
    console.log("checkFarekey 바꿈", checkFarekey)
  }, [checkFarekey]);



  console.log("rebookAvailability",rebookAvailability)
  return (
    <div>
      {
      rebookAvailability.trips.map((trip: Trip, i: number) => {
        console.log("trip",trip)
        const journeysAvailable = trip.journeysAvailable
        return (
          <S.container
            key={`${i.toString()}`}>
              {trip.origin} - {trip.destination}
              {
              journeysAvailable.map((journey: JourneyAvailability) => {
                const isActive = (checkJourneykey == journey.journeyKey) || false;
                return (
                  <BookingChangeFlights
                    journeyKey={journey.journeyKey}
                    journeyDesignator={journey.designator}
                    journeyFares={journey.fares}
                    faresAvailable={rebookAvailability.faresAvailable}
                    isActive={isActive}
                    onClickJourney={onClickJourney}
                    onClickFare={onClickFare}
                  />
                )
              })}
          </S.container>
        )
      })}
    </div>
  );

};
const S = {
  container: styled.div`
    border-radius: 8px;
    padding: 0 80px;
    margin: 20px 80px;
    border: 1px solid black;
  `,
}
export default bookingChangeTicket;
