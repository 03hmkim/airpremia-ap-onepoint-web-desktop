import styled from 'styled-components';
import { FC, ReactElement } from 'react';

interface IProps {
  title: string;
  inquiryForm: ReactElement;
  onlineCheckinInfo?: ReactElement;
  onlineCheckinApplyInfo?: ReactElement[];
}

const CheckinSearchTemplate: FC<IProps> = ({
  title,
  inquiryForm,
  onlineCheckinInfo,
  onlineCheckinApplyInfo,
}) => {
  return (
    <S.container>
      <S.title>
        <h1>{title}</h1>
      </S.title>
      <S.form>{inquiryForm}</S.form>
      <S.onlineCheckinInfo>
        {onlineCheckinInfo}
      </S.onlineCheckinInfo>
      <S.onlineCheckinApplyInfo>
        {onlineCheckinApplyInfo}
      </S.onlineCheckinApplyInfo>
    </S.container>
  );
};

const S = {
  container: styled.div``,
  title: styled.div`
    h1 {
      font-size: 40px;
      font-weight: 700;
      line-height: 48px;
      letter-spacing: -0.72px;
    }

    @media only screen and (max-width: 767px) {
      h1 {
        font-size: 26px;
        line-height: 36px;
        letter-spacing: -0.52px;
      }
    }
  `,

  form: styled.div`
    margin: 100px 0 120px;

    @media only screen and (max-width: 767px) { 
      margin: 80px 0 60px;
    }
  `,

  onlineCheckinInfo: styled.div`
    margin-bottom: 140px;

    @media only screen and (max-width: 767px) { 
      margin-bottom: 60px;
    }
  `,

  onlineCheckinApplyInfo: styled.div`
    & > div:first-of-type {
      margin-bottom: 60px;
    }
  `,
};

export default CheckinSearchTemplate;
