import {
  useBooking,
  useScroll
} from '@airpremia/core/hooks';
import { Trip, ILowFaresDataParams } from '@airpremia/core/stores/models/bookingSession';
import { FC, useEffect, useState } from 'react';
import { ChangeFlightCard, TaskButton } from 'src/components';
import { Container } from 'src/styles/layout';
import styled from 'styled-components';

interface IStyleProps { }
interface IProps extends IStyleProps { }

const bookingChangeTicket: FC<IProps> = () => {

  const {
    bookingSessionStore,
    onLoadRibbonData,
  } = useBooking();

  const {
    rebookAvailability,
    date,
    ribbonData,
  } = bookingSessionStore;

  const { upScroll } = useScroll();

  useEffect(() => {
    upScroll();
  }, []);

  const [isButtonActive, setButtonActive] = useState<boolean>(false);

  var fares:any[] = [];
  const onClickFare = (parmas: any) => {
    fares[parmas.i] = parmas.key;
    
    setButtonActive(fares.find(element => element == "") == undefined);
  };
  
  useEffect(() => {
    onLoadRibbonData();
  }, [date]);

  const onLoadLowFaresArrow = async (
    params: ILowFaresDataParams,
  ) => onLoadRibbonData(params);

  const clickNextBtn = () => {};

  return (
    <Container>
      {rebookAvailability.trips.map((trip: Trip, i: number) => {
        const ribbonList =
          i === 0
            ? ribbonData?.begin
            : ribbonData?.end;
        fares[i] = '';

        return (
          <ChangeFlightCard
            key={i}
            idx={i}
            list={ribbonList || []}
            origin={trip.origin}
            destination={trip.destination}
            journeys={trip.journeysAvailable}
            faresAvailable={rebookAvailability.faresAvailable}
            onLoadLowFare={onLoadLowFaresArrow}
            onClickFare={onClickFare}
          />
        )
      })}

      <S.button>
        <TaskButton
          disabled={!isButtonActive}
          onClick={clickNextBtn}
        >
        다음
        </TaskButton>
      </S.button>
    </Container>
  );
};
const S = {
  container: styled.div`
    border-radius: 8px;
    padding: 0 80px;
    margin: 20px 80px;
    border: 1px solid black;
  `,

  button: styled.div`
    text-align: center;
    button {
      width: 300px;
    }
  `,
}
export default bookingChangeTicket;
