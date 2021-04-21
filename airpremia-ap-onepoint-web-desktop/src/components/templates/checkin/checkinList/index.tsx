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
        <h2 className="font-bold">{title}</h2>
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
      font-size: 36px;
      line-height: 48px;
      letter-spacing: -0.72px;
      margin-bottom: 10px;
    }

    h5 {
      font-size: 14px;
      line-height: 25px;
      letter-spacing: -0.28px;
      padding-bottom: 20px;
    }
  `,

  body: styled.div``,
};

export default CheckinListTemplate;
