import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { AuthContainer } from 'src/styles/layout';
import { LIGHT_GRAY7 } from '@airpremia/cdk/styles/colors';

interface IProps {
  title: ReactElement;
  description: ReactElement;
  button: ReactElement;
  labelName: ReactElement;
  labelDescription: string;
  firstName: ReactElement;
  lastName: ReactElement;
  phoneAuthForm: ReactElement;
  goBack: ReactElement;
}

const ForgotEmailStep1Templates: FC<IProps> = ({
  title,
  description,
  labelName,
  labelDescription,
  firstName,
  lastName,
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
          <S.nameWrapper>
            <S.label>
              {labelName}
              <p>{labelDescription}</p>
            </S.label>
            <S.lastName>{lastName}</S.lastName>
            <S.firstName>{firstName}</S.firstName>
          </S.nameWrapper>
          <S.phoneAuthWrapper>
            {phoneAuthForm}
          </S.phoneAuthWrapper>
          <S.button>{button}</S.button>
          <S.goBack>{goBack}</S.goBack>
        </S.body>
      </S.wrapper>
    </AuthContainer>
  );
};

const S = {
  wrapper: styled.div`
    max-width: 540px;
    margin: 0 auto;
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

  nameWrapper: styled.div`
    margin-bottom: 65px;
    @media only screen and (max-width: 1059px) { 
      margin-bottom: 45px;
    }
    @media only screen and (max-width: 767px) { 
      margin-bottom: 35px;
    }
  `,

  phoneAuthWrapper: styled.div`
    margin-bottom: 60px;
    label {
      font-size: 18px;
    }
    @media only screen and (max-width: 1059px) { 
      margin-bottom: 40px;
    }
    @media only screen and (max-width: 767px) { 
      margin-bottom: 20px;
      label {
        font-size: 14px;
      }
    }
  `,

  label: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > label {
      width: auto;
    }

    p {
      font-size: 18px;
      line-height: 1.5em;
      text-align: right;
      color: ${LIGHT_GRAY7};
    }
    @media only screen and (max-width: 1059px) { 
      label {
        flex: 1;
      }
      p {
        flex: 5;
      }
    }
    @media only screen and (max-width: 767px) { 
      p {
        font-size: 14px;
        line-height: 1.5em;
      }
    }
  `,

  lastName: styled.div`
    margin-bottom: 25px;
  `,

  firstName: styled.div``,

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
      line-height: 24px;
      letter-spacing: -0.26px;
      font-weight: 600;
    }

    @media only screen and (max-width: 1059px) { 

    }

    @media only screen and (max-width: 767px) { 
      u {
        font-size: 14px;
        line-height: 1.5em;
      }
    }
  `,
};

export default ForgotEmailStep1Templates;
