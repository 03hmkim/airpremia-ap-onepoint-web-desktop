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
    @media only screen and (max-width: 1059px) { 
      margin-bottom: 80px;
    }
    @media only screen and (max-width: 767px) { 
      margin-bottom: 60px;
    }
  `,

  title: styled.div`
    margin-bottom: 10px;
  `,

  description: styled.div``,

  body: styled.div``,

  email: styled.div`
    margin-bottom: 65px;
    @media only screen and (max-width: 1059px) { 
      margin-bottom: 45px;
    }
    @media only screen and (max-width: 767px) { 
      margin-bottom: 35px;
    }
  `,

  phoneAuthForm: styled.div`
    label {
      font-size: 18px;
    }
    @media only screen and (max-width: 1059px) { 
      label {
        font-size: 14px;
      }
    }
    @media only screen and (max-width: 767px) { 
      
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
      font-size: 18px;
      line-height: 1.5em;
      letter-spacing: -0.26px;
      font-weight: 600;
    }
    @media only screen and (max-width: 1059px) { 
      u {
        font-size: 14px;
      }
    }
    @media only screen and (max-width: 767px) { 
      
    }
  `,
};

export default ForgotPasswordStep1;
