import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { AuthContainer } from 'src/styles/layout';

interface IProps {
  title: ReactElement;
  description: ReactElement;
  password: ReactElement;
  confirmPassword: ReactElement;
  button: ReactElement;
}

const ForgotPasswordStep2: FC<IProps> = ({
  title,
  description,
  password,
  confirmPassword,
  button,
}) => {
  return (
    <AuthContainer pb={120}>
      <S.header>
        <S.title>{title}</S.title>
        <S.description>{description}</S.description>
      </S.header>
      <S.body>
        <S.password>{password}</S.password>
        <S.confirmPassword>
          {confirmPassword}
        </S.confirmPassword>
        <S.button>{button}</S.button>
      </S.body>
    </AuthContainer>
  );
};

const S = {
  header: styled.div`
    margin-bottom: 120px;
  `,
  body: styled.div``,
  title: styled.div`
    margin-bottom: 10px;
  `,
  description: styled.div``,
  password: styled.div`
    margin-bottom: 68px;

    sub:not(:first-of-type) {
      margin-left: 5px;
    }
  `,
  confirmPassword: styled.div``,
  button: styled.div`
    margin-top: 80px;
    text-align: center;
    button {
      width: 300px;
      height: 50px;
    }
  `,
};

export default ForgotPasswordStep2;
