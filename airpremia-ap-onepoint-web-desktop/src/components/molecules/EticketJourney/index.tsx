import styled from 'styled-components';
import { FC } from 'react';
import IcoFlight from 'public/images/eticket/ico_flight.png';
import { IBookingDetailJourney } from '@airpremia/core/api/checkin/types';
import moment from 'moment';

interface IProps {
  tripText: string,
  journey: IBookingDetailJourney;
}

const EticketJourney: FC<IProps> = ({
  tripText,
  journey,
}) => {
  
  const {
    origin,
    destination,
    originText,
    destinationText,
    depStationFullName,
    depCountryFullName,
    arrStationFullName,
    arrCountryFullName,
    depTerminal,
    arrTerminal,
    departure,
    arrival,
    minutesTerm,
    cabinClassText,
    productClassText,
    bookingClass,
    identifier,
  } = journey;

  const getDateInfo = () => {

    const departureDate = moment(departure)
      .locale('ko')
      .format('YYYY. M. D (dd)');
    const departureTime = moment(departure)
      .locale('ko')
      .format('HH:mm');
    const arrivalTime = moment(arrival)
      .locale('ko')
      .format('HH:mm');
    
    return `${departureDate} ${departureTime} - ${arrivalTime}`;
  }

  const getFlightTime = () => {

    if (minutesTerm) {
      const hour = minutesTerm / 60;
      const minute = minutesTerm % 60;
      return `${Math.floor(hour)}h${Math.floor(minute)}m`;
    } else {
      return '';
    }
  }

  const getClass = () => {
    return `${cabinClassText} ${productClassText} (${bookingClass})`;
  }

  return (
    <S.container>
      <div style={{padding: '20px 25px 0px'}}>
        <div>
          <div style={{width: 43, height: 20, color: '#fff', fontSize: 11, lineHeight: '24px', textAlign: 'center', background: '#222222', borderRadius: 4}}>{tripText}</div>
        </div>
        <div style={{marginTop: 15}}>
          <div style={{width: '35%', float: 'left'}}>
            <h1 style={{margin: 0, paddingBottom: 2, fontSize: 46, fontWeight: 'bold', display:'inline-block'}}>{origin}</h1>
            <p style={{margin: 0, paddingBottom: 5, fontSize: 14, fontWeight: 'bold'}}>{originText}</p>
            <p style={{margin: 0, paddingBottom: 10, color: '#b2b2b2', fontSize: 13, fontWeight: 400}}>{depStationFullName},<br />{depCountryFullName}</p>
            <p style={{margin: 0, paddingBottom: 20, fontSize: 16}} >{depTerminal && `Terminal ${depTerminal}` && ''}</p>
          </div>
          <div style={{width: '30%', marginTop: 10, float: 'left', display: 'flex', justifyContent: 'center', alignItems: 'baseline'}}>
            <img src={IcoFlight} alt="비행기아이콘" style={{width: 257}} />
          </div>
          <div style={{width: '35%', float: 'left', textAlign: 'right'}}>
            <h1 style={{margin: 0, paddingBottom: 2, fontSize: 46, fontWeight: 'bold', display:'inline-block'}}>{destination}</h1>
            <p style={{margin: 0, paddingBottom: 5, fontSize: 14, fontWeight: 'bold'}}>{destinationText}</p>
            <p style={{margin: 0, paddingBottom: 10, color: '#b2b2b2', fontSize: 13, fontWeight: 400}}>{arrStationFullName},<br />{arrCountryFullName}</p>
            <p style={{margin: 0, paddingBottom: 20, fontSize: 16}} >{arrTerminal && `Terminal ${arrTerminal}` && ''}</p>
          </div>
          <div style={{clear: 'both'}} />
        </div>
      </div>
      <div style={{padding: '20px 25px', display: 'flex', borderTop: '4px dotted #e5e5e5'}}>
        <div style={{width: '40%'}}>
          <p style={{margin: 0, paddingBottom: 5, fontSize: 16}}>날짜/시간</p>
          <p style={{margin: 0, paddingBottom: 10, color: '#b2b2b2', fontSize: 13, fontWeight: 400}}>Date/Local Time</p>
        </div>
        <div style={{width: '60%', margin: 0, textAlign: 'right'}}>
          <p style={{margin: 0, paddingBottom: 5, fontSize: 16, fontWeight: 'bold'}}>{getDateInfo()}</p>
          <p style={{margin: 0, color: '#222', fontSize: 13}}><span style={{paddingBottom: 15, color: '#b2b2b2', fontSize: 13, fontWeight: 400}}>Flight Time </span>{getFlightTime()}</p>
        </div>
      </div>
      <div style={{padding: '20px 25px', display: 'flex', borderTop: '1px solid #e5e5e5'}}>
        <div style={{width: '20%'}}>
          <p style={{margin: 0, paddingBottom: 5, fontSize: 13}}>예약등급</p>
          <p style={{margin: 0, paddingBottom: 10, color: '#b2b2b2', fontSize: 13, fontWeight: 400}}>Class</p>
        </div>
        <div style={{width: '30%'}}>
          <p style={{margin: 0, paddingBottom: 5, fontSize: 13}}>{getClass()}</p>
        </div>
        <div style={{width: '20%', textAlign: 'left'}}>
          <p style={{margin: 0, paddingBottom: 5, fontSize: 13, fontWeight: 'bold'}}>기종 / 편명</p>
          <p style={{margin: 0, paddingBottom: 15, color: '#b2b2b2', fontSize: 13, fontWeight: 'bold'}}>Aircraft Type/Flight</p>
        </div>
        <div style={{width: '30%', margin: 0, textAlign: 'right'}}>
          <p style={{margin: 0, paddingBottom: 5, fontSize: 13, fontWeight: 'bold'}}>{`B787-9 / ${identifier}`}</p>
        </div>
      </div>
{/* 
      <div style={{padding: '5px 25px', display: 'flex'}}>
        <div style={{width: '20%'}}>
          <p style={{margin: 0, paddingBottom: 5, fontSize: 13}}>수하물</p>
          <p style={{margin: 0, paddingBottom: 10, color: '#b2b2b2', fontSize: 13, fontWeight: 400}}>Baggage</p>
        </div>
        <div style={{width: '30%'}}>
          <p style={{margin: 0, paddingBottom: 5, fontSize: 13}}></p>
        </div>
        <div style={{width: '20%', textAlign: 'left'}}>
          <p style={{margin: 0, paddingBottom: 5, fontSize: 13, fontWeight: 'bold'}}>프레미아멤버스</p>
          <p style={{margin: 0, paddingBottom: 15, color: '#b2b2b2', fontSize: 13, fontWeight: 'bold'}}>Point</p>
        </div>
        <div style={{width: '30%', margin: 0, textAlign: 'right'}}>
          <p style={{margin: 0, paddingBottom: 5, fontSize: 13, fontWeight: 'bold'}}>0 PP</p>
        </div>
      </div> 
*/}
    </S.container>
  );
};

const S = {
  container: styled.div`
    margin-bottom: 10px;
    border: solid 1px #e5e5e5;
    border-radius: 12px;
    box-sizing: border-box;
  `,
};

export default EticketJourney;
