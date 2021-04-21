import styled from 'styled-components';
import {
  LIGHT_GRAY5,
} from '@airpremia/cdk/styles/colors';
import {
  TicketReceipt,
  PassengerReceipt,
} from 'src/components';
import { useBookingLocal } from 'src/hooks';

export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}

function TabContent({currIdxCont}: IProps) {
  const { 
    getTicketHeaderDetail, 
    beginTicketPriceDataset,
    endTicketPriceDataset,
    getTotalFare,
    passengerReceiptDetail,
  } = useBookingLocal();

  if ( currIdxCont === 0 ) {
    if (getTicketHeaderDetail.length === 2) {
      return (
        <S.container>
          <TicketReceipt 
            headerProps={getTicketHeaderDetail[0]}
            items={beginTicketPriceDataset}
            totalFare={getTotalFare[0].totalFare}
          />
          <br />
          <br />
          <br />
          <br />
          <br />
          <TicketReceipt
            headerProps={getTicketHeaderDetail[1]}
            items={endTicketPriceDataset}
            totalFare={getTotalFare[1].totalFare}
          />
        </S.container>
      )
    }
    else {
      return (
        <S.container>
          <TicketReceipt 
            headerProps={getTicketHeaderDetail[0]}
            items={beginTicketPriceDataset}
            totalFare={getTotalFare[0].totalFare}
          />
        </S.container>
      )
    }
  } else {
    return (
      <S.container>
        {passengerReceiptDetail.map((item: any) => (
          <PassengerReceipt {...item} />
        )
        )}
      </S.container>
    )
  }
}

const S = {
  container: styled.div`
    height: calc(100% - 60px);
    margin-top: 30px;
    padding: 40px 50px 50px;
    overflow-y: auto;
    border-top: 1px solid ${LIGHT_GRAY5};
    box-sizing: border-box;
  `,

};

export default TabContent;
