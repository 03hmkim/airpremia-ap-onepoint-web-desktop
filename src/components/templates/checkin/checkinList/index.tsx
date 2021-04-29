import styled from 'styled-components';
import { FC, ReactElement } from 'react';

interface IProps {
  title?: string;
  description?: string;
  onlineCheckinCard: ReactElement | ReactElement[];
}

const CheckinListTemplate: FC<IProps> = ({
  title = '온라인 체크인 신청',
  description = '',
  onlineCheckinCard,
}) => {
  return (
    <S.container>
      <S.header>
        <h2>{title}</h2>
        <h5>{description}</h5>
      </S.header>
      <S.body>{onlineCheckinCard}</S.body>
    </S.container>
  );
};

const S = {
  container: styled.div``,
  header: styled.div`
    margin-bottom: 80px;
    h2 {
      font-size: 40px;
      font-weight: 700;
      line-height: 48px;
      letter-spacing: -0.30px;
      margin-bottom: 10px;
    }

    h5 {
      font-size: 18px;
      font-weight: 300;
      line-height: 26px;
      letter-spacing: -0.28px;
      padding-bottom: 20px;
    }

    @media only screen and (max-width: 767px) { 
      h2 {
        font-size: 26px;
        line-height: 36px;
        letter-spacing: -0.52px;
      }
      h5 {
        font-size: 14px;
        padding-bottom: 0px;
      }
    }
  `,

  body: styled.div``,
};

export default CheckinListTemplate;
