import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { Horizon } from 'src/components';

import {
  LIGHT_GRAY6,
} from '@airpremia/cdk/styles/colors';

interface IProps {
  title: ReactElement;
  subTitle: ReactElement;
  bookingChangeSummaryCard: ReactElement;
  button: ReactElement;
}

const BookingSelectChangeFlight: FC<IProps> = ({
  title,
  subTitle,
  bookingChangeSummaryCard,
  button,
}) => {
  return (
    <S.container>
      <S.title>{title}</S.title>
      <S.subTitle>{subTitle}</S.subTitle>
      <S.bookingChangeSummaryCard>
        {bookingChangeSummaryCard}
      </S.bookingChangeSummaryCard>
      <Horizon
        top={40}
        bottom={40}
        color={LIGHT_GRAY6}
        width={1}
      />
      <S.button>{button}</S.button>
    </S.container>
  );
};

const S = {
  container: styled.div``,

  title: styled.div`
    margin-bottom: 20px;
  `,

  subTitle: styled.div`
    font-size: 15px;
    color: gray;
    margin-bottom: 100px;
  `,

  bookingChangeSummaryCard: styled.div`
    margin-bottom: 100px;
  `,

  button: styled.div`
    text-align: center;
    button {
      width: 300px;
    }
  `,
};

export default BookingSelectChangeFlight;
