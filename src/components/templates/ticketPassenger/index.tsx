import { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface IProps {
  bookingPersonInfo?: ReactElement;
  boardingPersonInfo?: ReactElement;
  euCitizenRadio?: ReactElement;
  taskButton?: ReactElement;
  caution?: ReactElement;
}

const TicketPassenger: FC<IProps> = ({
  bookingPersonInfo,
  boardingPersonInfo,
  euCitizenRadio,
  taskButton,
  caution,
}: IProps) => {
  return (
    <S.container>
      <S.bookingPersonInfo>
        {bookingPersonInfo}
      </S.bookingPersonInfo>
      <S.boardingPersonInfo>
        {boardingPersonInfo}
      </S.boardingPersonInfo>
      <S.euCitizenRadio>{euCitizenRadio}</S.euCitizenRadio>
      <S.taskButton>{taskButton}</S.taskButton>
      <S.caution>{caution}</S.caution>
    </S.container>
  );
};

const S = {
  container: styled.div``,

  bookingPersonInfo: styled.div``,

  boardingPersonInfo: styled.div`
    margin-top: 100px;
  `,

  euCitizenRadio: styled.div`
    padding-left: 320px;
    margin-bottom: 80px;
  `,

  taskButton: styled.div`
    text-align: center;
    margin-bottom: 80px;
    button {
      width: 300px;
      height: 50px;
    }
  `,

  caution: styled.div`
    h3 {
      font-family: 'NotoSans';
      font-weight: 700;
    }
  `,
};

export default TicketPassenger;
