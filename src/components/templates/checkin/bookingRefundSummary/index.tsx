import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { Horizon } from 'src/components';

import {
  LIGHT_GRAY6,
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';

interface IProps {
  title: ReactElement;
  bookingCancelSummaryCard: ReactElement;
  paymentByPassenger: ReactElement;
  refundAmount: ReactElement;
  caution: ReactElement;
  button: ReactElement;
}

const BookingRefundSummary: FC<IProps> = ({
  title,
  bookingCancelSummaryCard,
  paymentByPassenger,
  refundAmount,
  caution,
  button,
}) => {
  return (
    <S.container>
      <S.title>{title}</S.title>
      <S.bookingCancelSummaryCard>
        {bookingCancelSummaryCard}
      </S.bookingCancelSummaryCard>
      <S.paymentByPassenger>
        {paymentByPassenger}
      </S.paymentByPassenger>
      <S.refundAmount>{refundAmount}</S.refundAmount>
      <Horizon
        top={40}
        bottom={40}
        color={LIGHT_GRAY6}
        width={1}
      />
      <S.caution>{caution}</S.caution>
      <S.button>{button}</S.button>
    </S.container>
  );
};

const S = {
  container: styled.div``,

  title: styled.div`
    margin-bottom: 100px;
    @media only screen and (max-width: 1059px) {
        margin-bottom: 60px;
    }
    @media only screen and (max-width: 767px) { 
        margin-bottom: 40px;
    }
  `,

  bookingCancelSummaryCard: styled.div`
    margin-bottom: 100px;
    @media only screen and (max-width: 1059px) {
        margin-bottom: 60px;
    }
    @media only screen and (max-width: 767px) { 
        margin-bottom: 40px;
    }
  `,

  paymentByPassenger: styled.div``,

  refundAmount: styled.div``,

  caution: styled.div`
    margin-bottom: 100px;
    h3 {
      font-weight: bold;
      color: ${DARK_GRAY1};
    }
    @media only screen and (max-width: 1059px) {
        margin-bottom: 60px;
    }
    @media only screen and (max-width: 767px) { 
        margin-bottom: 40px;
    }
  `,

  button: styled.div`
    text-align: center;
    button {
      width: 300px;
    }
  `,
};

export default BookingRefundSummary;
