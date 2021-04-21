import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { AuthContainer } from 'src/styles/layout';

interface IProps {
  title: ReactElement;
  description: ReactElement;
  email: ReactElement;
  phoneAuthForm: ReactElement;
  button: ReactElement;
  goBack: ReactElement;
}

const ForgotPasswordStep1: FC<IProps> = ({
  title,
  description,
  email,
  phoneAuthForm,
  button,
  goBack,
}) => {
  return (
    <AuthContainer pb={120}>
      <S.wrapper>
        <S.header>
          <S.title>{title}</S.title>
          <S.description>{description}</S.description>
        </S.header>
        <S.body>
          <S.email>{email}</S.email>
          <S.phoneAuthForm>{phoneAuthForm}</S.phoneAuthForm>
          <S.button>{button}</S.button>
          <S.goBack>{goBack}</S.goBack>
        </S.body>
      </S.wrapper>
    </AuthContainer>
  );
};

const S = {
  wrapper: styled.div`
    input {
      font-weight: 600;
      &::placeholder {
        font-weight: normal;
      }
    }
  `,
  header: styled.div`
    margin-bottom: 100px;
  `,

  title: styled.div`
    margin-bottom: 10px;
  `,

  description: styled.div``,

  body: styled.div``,

  email: styled.div`
    margin-bottom: 65px;
  `,

  phoneAuthForm: styled.div`
    label {
      font-size: 14px;
    }
  `,

  button: styled.div`
    text-align: center;
    margin-bottom: 20px;
    button {
      width: 300px;
      height: 50px;
    }
  `,

  goBack: styled.div`
    text-align: center;
    u {
      font-size: 13px;
      line-height: 24px;
      letter-spacing: -0.26px;
      font-weight: 600;
    }
  `,
};

export default ForgotPasswordStep1;
