import styled from 'styled-components';
import { FC, ReactElement } from 'react';

interface IProps {
  title: string;
  inquiryForm: ReactElement;
  linkBarWithImage: ReactElement;
}

const FindTrip: FC<IProps> = ({
  title,
  inquiryForm,
  linkBarWithImage,
}) => {
  return (
    <S.container>
      <S.title>
        <h1 className="font-bold">{title}</h1>
      </S.title>
      <S.form>{inquiryForm}</S.form>
      <S.linkBarWithImage>
        {linkBarWithImage}
      </S.linkBarWithImage>
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
  `,

  form: styled.div`
    margin: 100px 0 70px;
    input {
      font-weight: 600;
      &::placeholder {
        font-weight: normal;
      }
    }
  `,

  linkBarWithImage: styled.div``,
};

export default FindTrip;
