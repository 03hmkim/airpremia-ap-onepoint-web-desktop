import styled from 'styled-components';
import { FC, ReactElement } from 'react';

interface IProps {
  title: string;
  tripList: ReactElement;
  tab: ReactElement;
  // linkBarWithImage: ReactElement;
  warningList: ReactElement;
  paging: ReactElement; 
}

const TripReservationListTemplate: FC<IProps> = ({
  title,
  tripList,
  tab,
  // linkBarWithImage,
  warningList,
  paging,
}) => {
  return (
    <S.container>
      <S.title>
        <h1 className="font-bold">{title}</h1>
      </S.title>
      <S.tab>{tab}</S.tab>
      <S.table>{tripList}</S.table>
      {/* <S.linkBarWithImage>
        {linkBarWithImage}
      </S.linkBarWithImage> */}
      <S.paging>{paging}</S.paging>
      <S.cautionGuide>{warningList}</S.cautionGuide>
    </S.container>
  );
};

const S = {
  container: styled.div``,

  title: styled.div`
    h1 {
      font-size: 36px;
      line-height: 50px;
      letter-spacing: -0.72px;
    }

    @media only screen and (max-width: 767px) { 
        h1 {
            font-size:26px;
        }
    }
  `,

  tab: styled.div`
    margin-top: 100px;
    @media only screen and (max-width: 1059px) {
        margin-top: 60px;
    }
    @media only screen and (max-width: 767px) { 
        margin-top: 40px;
    }
  `,

  table: styled.div`
    margin: 60px 0 80px;
    @media only screen and (max-width: 1059px) {
        margin: 40px 0 60px;
    }
    @media only screen and (max-width: 767px) { 
        margin: 20px 0 40px;
    }
  `,

  // Pagination: styled.div``,

  linkBarWithImage: styled.div``,

  cautionGuide: styled.div`
    margin-top: 80px;
  `,
  paging: styled.div`
    // padding: 200px 0;
    p {
      margin-bottom: 100px;
      font-size: 30px;
      text-align: center;
    }
  `
};

export default TripReservationListTemplate;
