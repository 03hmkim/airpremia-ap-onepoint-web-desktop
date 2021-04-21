import { FC, ReactElement } from 'react';
import styled, { css } from 'styled-components';

interface IProps {
  floatingFoldableItinerary: ReactElement;
  cabinClassOneWay: ReactElement;
  guideBar?: ReactElement;
  nextButton?: ReactElement;
  caution?: ReactElement;
}

const DepArrCabinClass: FC<IProps> = ({
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
  width: 1400px;
  box-sizing: border-box;
  margin: 80px auto 0;
  padding: 0 100px;
`;

const S = {
  container: styled.div`
    margin-bottom: 160px;
  `,

  floatingFoldableItinerary: styled.div`
    margin-bottom: 60px;
    border-top: solid 1px transparent;
    margin-top: -1px;
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
      font-family: 'NotoSansBold';
    }
  `,
};

export default DepArrCabinClass;
