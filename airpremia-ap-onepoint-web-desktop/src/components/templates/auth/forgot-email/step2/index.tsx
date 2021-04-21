import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { AuthContainer } from 'src/styles/layout';
import { BLUE1 } from '@airpremia/cdk/styles/colors';

interface IProps {
  title: ReactElement;
  label: ReactElement;
  email: string;
  password: ReactElement;
  subMenu: ReactElement;
  button: ReactElement;
}

const ForgotEmailStep2Template: FC<IProps> = ({
  title,
  label,
  email,
  password,
  subMenu,
  button,
}) => {
  return (
    <AuthContainer>
      <S.header>
        <S.title>{title}</S.title>
        <S.label>{label}</S.label>
        <S.email>
          <em>{email}</em>
        </S.email>
      </S.header>
      <S.body>
        <S.password>{password}</S.password>
        <S.subMenu>{subMenu}</S.subMenu>
        <S.button>{button}</S.button>
      </S.body>
    </AuthContainer>
  );
};

const S = {
  header: styled.div`
    margin-bottom: 120px;
  `,

  title: styled.div`
    margin-bottom: 10px;
  `,

  label: styled.div`
    margin-bottom: 5px;
    height: 20px;
    font-weight: 600;
  `,

  email: styled.div`
    em {
      font-size: 14px;
      line-height: 24px;
      letter-spacing: -0.28px;
      color: ${BLUE1};
    }
  `,

  body: styled.div``,

  password: styled.div``,

  subMenu: styled.div`
    margin: 25px 0 60px;
  `,

  button: styled.div``,
};

export default ForgotEmailStep2Template;
