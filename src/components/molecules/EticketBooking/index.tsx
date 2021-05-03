import styled from 'styled-components';
import { FC } from 'react';
import {
  IBookingDetailInfo,
  IBookingDetailPassenger,
} from '@airpremia/core/api/checkin/types';
import { flow, map } from 'lodash/fp';

interface IProps {
  bookingInfo: IBookingDetailInfo;
  passengers: IBookingDetailPassenger[];
}

const EticketBooking: FC<IProps> = ({
  bookingInfo,
  passengers,
}) => {
  const { recordLocator, status } = bookingInfo;

  const getPassengerNames = () => {
    let passengerNames = '';
    flow(
      map((p: any) => {
        passengerNames += `${p.lastName} ${p.firstName}, `;
        if (p.infant != null) {
          passengerNames += `${p.infant.lastName} ${p.infant.firstName}, `;
        }
      }),
    )(passengers);

    return (passengerNames.length > 2) ? passengerNames.substr(0, passengerNames.length-2) : passengerNames;
  };


  return (
    <S.container>
      <table style={{width: '100%', marginTop: 40, borderCollapse: 'collapse', tableLayout: 'fixed', textAlign: 'left'}}>
        <colgroup>
          <col width="22%" />
          <col width="23%" />
          <col width="10%" />
          <col width="22%" />
          <col width="23%" />
        </colgroup>
        <tbody>
          <tr style={{borderTop: '3px solid #222222', borderBottom: '1px solid #e5e5e5'}}>
            <th style={{padding: '20px 0'}}>
              <div>
                <p style={{margin: 0, fontSize: 13}}>예약번호</p>
                <p style={{margin: 0, color: '#b2b2b2', fontSize: 13, fontWeight: 400}}>Booking Reference</p>
              </div>
            </th>
            <td style={{verticalAlign: 'middle'}}>
              <p style={{margin: 0, fontSize: 16, fontWeight: 'bold'}}>{recordLocator}</p>
            </td>
            <td />
            <td>
              <div>
                <p style={{margin: 0, fontSize: 13, fontWeight: 'bold'}}>예약상태</p>
                <p style={{margin: 0, color: '#b2b2b2', fontSize: 13, fontWeight: 400}}>Status</p>
              </div>
            </td>
            <td style={{verticalAlign: 'middle'}}>
              <p style={{margin: 0, fontSize: 16, fontWeight: 'bold', textAlign: 'left'}}>{status}</p>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr style={{borderBottom: '1px solid #222222'}}>
            <th style={{padding: '20px 0'}}>
              <div>
                <p style={{margin: 0, fontSize: 13}}>탑승객</p>
                <p style={{margin: 0, color: '#b2b2b2', fontSize: 13, fontWeight: 400}}>Passenger</p>
              </div>
            </th>
            <td colSpan={5} style={{verticalAlign: 'middle'}}>
              <p style={{margin: 0, fontSize: 16, fontWeight: 'bold'}}>{getPassengerNames()}</p>
            </td>
          </tr>
        </tfoot>
      </table>
    </S.container>
  );
};

const S = {
  container: styled.div`
    @media only screen and (max-width: 767px) { 
      table{
        td{
          line-height:1.5em;
          p{
            font-size:13px !important;
          }
        }
      }
    } 
  `,
};

export default EticketBooking;
