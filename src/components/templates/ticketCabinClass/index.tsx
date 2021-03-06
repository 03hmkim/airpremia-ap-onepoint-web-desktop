import { FC, ReactElement } from 'react';
import styled, { css } from 'styled-components';

interface IProps {
  floatingFoldableItinerary: ReactElement;
  cabinClassOneWay: ReactElement;
  guideBar?: ReactElement;
  nextButton?: ReactElement;
  caution?: ReactElement;
}

const TicketCabinClassTemplate: FC<IProps> = ({
  floatingFoldableItinerary,
  cabinClassOneWay,
  guideBar,
  nextButton,
  caution,
}: IProps) => {
  return (
    <S.container>
      <S.floatingFoldableItinerary>
        {floatingFoldableItinerary}
      </S.floatingFoldableItinerary>
      <S.cabinClassOneway>
        {cabinClassOneWay}
      </S.cabinClassOneway>
      <S.guideBar>{guideBar}</S.guideBar>
      <S.nextButton>{nextButton}</S.nextButton>
      <S.caution>{caution}</S.caution>
    </S.container>
  );
};

const defaultBox = css`
  box-sizing: border-box;
  margin: 80px auto 0;
`;

const S = {
  container: styled.div`
  `,

  floatingFoldableItinerary: styled.div`
  
  `,

  cabinClassOneway: styled.div``,

  guideBar: styled.div`
    ${defaultBox};
  `,

  nextButton: styled.div`
    margin-top: 80px;
    text-align: center;
    font-size: 15px;
    button {
      width: 300px;
    }
  `,

  caution: styled.div`
    ${defaultBox};

    h3 {
      font-family: 'NotoSans';
      font-weight: 700;
    }
  `,
};

export default TicketCabinClassTemplate;
