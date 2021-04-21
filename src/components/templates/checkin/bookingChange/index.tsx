import { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface IProps {
  infomations: ReactElement;
  passengers: ReactElement;
  button: ReactElement;
}

const BookingChangeTemplate: FC<IProps> = ({
  infomations,
  passengers,
  button,
}) => {
  return (
    <S.container>
      <S.infomations>{infomations}</S.infomations>
      <S.passengers>{passengers}</S.passengers>
      <S.button>{button}</S.button>
    </S.container>
  );
};

const S = {
  container: styled.div``,

  infomations: styled.div``,

  passengers: styled.div``,

  button: styled.div`
    text-align: center;
    button {
      width: 300px;
      height: 50px;
    }
  `,
};

export default BookingChangeTemplate;
