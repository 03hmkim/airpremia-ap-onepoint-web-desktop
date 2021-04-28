import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { AuthContainer } from 'src/styles/layout';

interface IProps {
  title: ReactElement;
  description: ReactElement;
  stepper: ReactElement;
  email: ReactElement;
  password: ReactElement;
  passwordConfirm: ReactElement;
  nextButton: ReactElement;
  goBack: ReactElement;
}

const SignupStep1: FC<IProps> = ({
  title,
  description,
  stepper,
  email,
  password,
  passwordConfirm,
  nextButton,
  goBack,
}) => {
  return (
    <AuthContainer>
      <S.header>
        <S.title>{title}</S.title>
        <S.description>{description}</S.description>
        <S.stepper>{stepper}</S.stepper>
      </S.header>
      <S.body>
        <S.email>{email}</S.email>
        <S.password>{password}</S.password>
        <S.passwordConfirm>
          {passwordConfirm}
        </S.passwordConfirm>
      </S.body>
      <S.bottom>
        <S.nextButton>{nextButton}</S.nextButton>
        <S.goBack>{goBack}</S.goBack>
      </S.bottom>
    </AuthContainer>
  );
};

const S = {
  header: styled.div`
    position: relative;
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

  stepper: styled.div`
    position: absolute;
    top: 8px;
    right: 0;
  `,

  body: styled.div`
    margin-bottom: 80px;

    .text-input-message {
    }
    @media only screen and (max-width: 1059px) { 
      margin-bottom: 60px;
    }
    @media only screen and (max-width: 767px) { 
      margin-bottom: 40px;
    }
  `,

  email: styled.div`
    margin-bottom: 45px;
    @media only screen and (max-width: 1059px) { 
      margin-bottom: 35px;
    }
    @media only screen and (max-width: 767px) { 
      margin-bottom: 25px;
    }
  `,

  password: styled.div`
    margin-bottom: 68px;

    sub:not(:first-of-type) {
      margin-left: 10px;
    }
    @media only screen and (max-width: 1059px) { 
      margin-bottom: 48px;
    }
    @media only screen and (max-width: 767px) { 
      margin-bottom: 38px;
    }
  `,

  passwordConfirm: styled.div``,

  bottom: styled.div``,

  nextButton: styled.div`
    text-align: center;
    button {
      width: 300px;
      height: 50px;
      margin-bottom: 20px;
    }
  `,

  goBack: styled.div``,
};

export default SignupStep1;
