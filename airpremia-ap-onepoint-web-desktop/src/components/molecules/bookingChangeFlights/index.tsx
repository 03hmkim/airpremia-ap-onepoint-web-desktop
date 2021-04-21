import {
  KeyValuePair_StringGraphType_JourneyFareAvailability, TransportationDesignator
} from '@airpremia/core/stores/models/bookingSession';
import moment from 'moment';
import { FC } from 'react';
import styled from 'styled-components';



interface IProps {
  journeyKey: string;
  journeyDesignator: TransportationDesignator;
  journeyFares: KeyValuePair_StringGraphType_JourneyFareAvailability;
  faresAvailable: any;
  isActive: boolean;
  onClickJourney: (journeyKey: string) => () => void;
  onClickFare: (fareKey: string) => () => void;
}

const BookingChangeFlights: FC<IProps> = ({
  journeyKey,
  journeyDesignator,
  journeyFares,
  faresAvailable,
  isActive,
  onClickJourney,
  onClickFare,
}) => {

  const formatDateTime = 'YYYY.M.D. (dd) HH : mm';
  
  console.log("onClickFare",onClickFare);

//   <div
//   onClick={onClickJourney(journey.journeyKey)}>

//   {journey.flightType == 'NonStop' ? '[직항]' : '[경유]'}
//   { - dayjs(designator.arrival).format('YYYY-MM-DD HH:mm')}
//   {designator.arrival} - {designator.departure}
// </div>

//   <SsrCheckbox
//     key={`passengersCheckbox${i.toString()}`}
//     isActive={isActive}
//     onClick={onClickJourney(journey.journeyKey)}
//   >
//     <S.card
//       key={`${journey.journeyKey}${j.toString()}`}>
//     </S.card>
//   </SsrCheckbox>
  const faresKeys = Object.keys(journeyFares);
  console.log('faresKeys',faresKeys)

  return (
    <S.container
      onClick={onClickJourney(journeyKey)}>
        {isActive ? 
          (
          <S.isAlive>
            {moment(journeyDesignator.departure).format(formatDateTime)} - {moment(journeyDesignator.arrival).format(formatDateTime)}
          </S.isAlive>
          ) : (
            <S.isAlive2>
            {moment(journeyDesignator.departure).format(formatDateTime)} - {moment(journeyDesignator.arrival).format(formatDateTime)}
            </S.isAlive2>
          )
        }
        {isActive ? 
          (
            faresKeys.map((key: string) => {
              return(
                faresAvailable[key].classOfService
                +" : "+ faresAvailable[key].fareCode
              )
            })
          ) : null
        }

        <div>
          ----------------------
          <div>
              하
          </div>
        </div>
    </S.container>
  );
};

const S = {
  container: styled.div`
    border-radius: 8px;
    padding: 0 30px;
    margin: 20px 0;
  `,
  isAlive: styled.div`
    color: red;
  `,
  isAlive2: styled.div`
    color: black;
  `,
  // wrapper: styled.div<{ isCanceled: boolean }>`
  //   padding-top: 30px;
  //   color: ${LIGHT_GRAY6};
  // `,
  // bottom: styled.div`
  //   .tag-group {
  //     display: flex;
  //     height: 35px;
  //     & > div {
  //       margin-right: 3px;
  //     }
  //   }
  //   display: flex;
  //   padding-bottom: 34px;
  //   span {
  //     display: flex;
  //     flex-direction: column;
  //     justify-content: flex-end;
  //     margin: 0 20px 6px;
  //   }
  //   & > div {
  //     margin-right: 70px;
  //     &:nth-child(1),
  //     &:nth-child(2) {
  //       margin-right: 0;
  //     }
  //   }
  // `,

  // column: styled.div<{ width?: number }>`
  //   display: flex;
  //   flex-direction: column;
  //   min-width: ${prop('width')}px;

  //   h6 {
  //     font-size: 13px;
  //     line-height: 35px;
  //     letter-spacing: -0.26px;
  //   }
  //   p {
  //     margin-top: 12px;
  //     font-size: 18px;
  //     line-height: 35px;
  //     letter-spacing: -0.36px;
  //     font-weight: 600;
  //   }
  // `,
};

export default BookingChangeFlights;
