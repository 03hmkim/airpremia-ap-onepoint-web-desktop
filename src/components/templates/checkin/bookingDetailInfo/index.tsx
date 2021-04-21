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
      font-size: 36px;
      line-height: 48px;
      letter-spacing: -0.72px;
    }
  `,
  reservationDetailInfoGroup: styled.div``,
  boardingPassInfo: styled.div`
    margin-top: 140px;
  `,
  passenger: styled.div`
    margin-top: 140px;
  `,
  payment: styled.div`
    margin-top: 140px;
  `,
};

export default BookingDetailInfoTemplate;
