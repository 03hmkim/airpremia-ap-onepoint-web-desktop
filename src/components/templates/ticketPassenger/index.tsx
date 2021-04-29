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
  container: styled.div`
  @media only screen and (max-width: 1059px) {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 160px;
    padding-left: 25px;
    padding-right: 25px;
  }
  `,

  bookingPersonInfo: styled.div``,

  boardingPersonInfo: styled.div`
    margin-top: 100px;
    @media only screen and (max-width: 1059px) {
    margin-top: 60px;
    margin-bottom: 80px;
    }
  `,

  euCitizenRadio: styled.div`
    padding-left: 320px;

    @media only screen and (max-width: 1059px) {
      padding-left: 0;
      margin-bottom: 100px;
    }
  `,

  taskButton: styled.div`
    text-align: center;    
    margin-top: 80px;
    margin-bottom: 80px;
    button {
      width: 300px;
      height: 50px;
    }
  `,

  caution: styled.div`
    h3 {
      font-family: 'NotoSans';
      font-size: 21px;
      font-weight: 600;
      @media only screen and (max-width: 767px) {
        font-size: 16px;
        line-height: 26px;
        letter-spacing: -0.032em;
      }
    }
    p {
      font-size: 18px;
      @media only screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 26px;
        letter-spacing: -0.028em;
      }
    }
    svg {
      width: 18px;
      height: 20px;
      @media only screen and (max-width: 767px) {
        width: 14px;
        height: 16px;
      }
    }
  `,
};

export default TicketPassenger;
