import { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface IProps {
  title: ReactElement;
  ticketCancelCompleted: ReactElement;
  taskButton: ReactElement;
}

const BookingCancelComplete: FC<IProps> = ({
  title,
  ticketCancelCompleted,
  taskButton,
}) => {
  return (
    <S.container>
      <S.title>{title}</S.title>
      <S.table>{ticketCancelCompleted}</S.table>
      <S.button>{taskButton}</S.button>
    </S.container>
  );
};

const S = {
  container: styled.div``,
  title: styled.div``,
  table: styled.div`
    margin-top: 100px;
  `,
  button: styled.div`
    margin-top: 60px;
    text-align: center;
    button {
      width: 300px;
    }
  `,
};

export default BookingCancelComplete;
