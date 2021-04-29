import styled from 'styled-components';
import { FC, ReactElement } from 'react';
import { Container } from 'src/styles/layout';

interface IProps {
  title: string;
  reservationDetailInfoGroup: ReactElement;
  boardingPassInfo: ReactElement;
  boardingPassengerInfo: ReactElement;
}

const BookingDetailInfoTemplate: FC<IProps> = ({
  title,
  reservationDetailInfoGroup,
  boardingPassInfo,
  boardingPassengerInfo,
}) => {
  return (
    <Container>
      <S.title>
        <h1 className="font-bold">{title}</h1>
      </S.title>
      <S.reservationDetailInfoGroup>
        {reservationDetailInfoGroup}
      </S.reservationDetailInfoGroup>
      <S.boardingPassInfo>
        {boardingPassInfo}
      </S.boardingPassInfo>
      <S.passenger>{boardingPassengerInfo}</S.passenger>
      <S.payment></S.payment>
    </Container>
  );
};

const S = {
  title: styled.div`
    h1 {
      font-size: 40px;
      line-height: 48px;
      letter-spacing: -0.72px;
    }
    @media only screen and (max-width: 767px) { 
        h1 {
            font-size:26px;
        }
    }
  `,
  reservationDetailInfoGroup: styled.div``,
  boardingPassInfo: styled.div`
    margin-top: 140px;
    @media only screen and (max-width: 1059px) {
        margin-top: 100px;
    }
    @media only screen and (max-width: 767px) { 
        margin-top: 60px;
    }
  `,
  passenger: styled.div`
    margin-top: 140px;
    @media only screen and (max-width: 1059px) {
        margin-top: 100px;
    }
    @media only screen and (max-width: 767px) { 
        margin-top: 60px;
    }
  `,
  payment: styled.div`
    margin-top: 140px;
    @media only screen and (max-width: 1059px) {
        margin-top: 100px;
    }
    @media only screen and (max-width: 767px) { 
        margin-top: 60px;
    }
  `,
};

export default BookingDetailInfoTemplate;
