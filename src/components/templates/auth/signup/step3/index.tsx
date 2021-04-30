import { FC, ReactElement } from 'react';
import styled from 'styled-components';

import { AuthContainer } from 'src/styles/layout';
import {
  ORANGE1,
  LIGHT_GRAY5,
  LIGHT_GRAY6,
} from '@airpremia/cdk/styles/colors';

interface IProps {
  title: ReactElement;
  description: ReactElement;
  stepper: ReactElement;
  gender: ReactElement;
  name: ReactElement;
  birth: ReactElement;
  privacyCheck: ReactElement;
  confirmButton: ReactElement;
  goBack: ReactElement;
}

const SignupStep3Template: FC<IProps> = ({
  title,
  description,
  stepper,
  gender,
  name,
  birth,
  privacyCheck,
  confirmButton,
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
        <S.gender>{gender}</S.gender>
        <S.name>{name}</S.name>
        <S.birth>{birth}</S.birth>
        <S.privacyCheckGroup>
          {privacyCheck}
        </S.privacyCheckGroup>
        <S.confirmButton>{confirmButton}</S.confirmButton>
        <S.goBack>{goBack}</S.goBack>
      </S.body>
    </AuthContainer>
  );
};

const S = {
  header: styled.div`
    margin-bottom: 80px;
    position: relative;
    @media only screen and (max-width: 1059px) { 
      margin-bottom: 60px;
    }
    @media only screen and (max-width: 767px) { 
      margin-bottom: 40px;
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

  body: styled.div``,

  gender: styled.div`
    margin-bottom: 45px;
    font-size: 18px;

    .selected {
      border-color: ${ORANGE1};
      z-index: 1;
      p {
        color: ${ORANGE1};
      }
    }

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      div {
        flex: 1;
        border: solid 1px ${LIGHT_GRAY5};
        height: 54px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        p {
          color: ${LIGHT_GRAY6};
          line-height: unset;
          font-weight: 600;
          pointer-events: none;
        }
        &:first-of-type {
          border-radius: 10px 0 0 10px;
        }
        &:last-of-type {
          border-radius: 0 10px 10px 0;
          margin-left: -1px;
        }
      }
    }
    @media only screen and (max-width: 1059px) { 
      & > div {
        div {
          height: 44px;
        }
      }
    }
    @media only screen and (max-width: 767px) { 
      font-size: 14px;

       & > div {
        div {
          height: 34px;
        }
      }
    }
  `,

  name: styled.div`
    margin-bottom: 45px;
    @media only screen and (max-width: 1059px) { 
      margin-bottom: 35px;
    }
    @media only screen and (max-width: 767px) { 
      margin-bottom: 25px;
    }
  `,

  birth: styled.div`
    margin-bottom: 60px;
    @media only screen and (max-width: 1059px) { 
      margin-bottom: 40px;
    }
    @media only screen and (max-width: 767px) { 
      margin-bottom: 20px;
    }
  `,

  privacyCheckGroup: styled.div``,

  confirmButton: styled.div`
    margin-top: 60px;
    margin-bottom: 15px;
    text-align: center;
    button {
      width: 300px;
      height: 50px;
    }
    @media only screen and (max-width: 1059px) { 
      margin-bottom: 40px;
    }
    @media only screen and (max-width: 767px) { 
      margin-bottom: 20px;
    }
  `,

  goBack: styled.div`
    font-size: 18px;
    line-height: 1.5em;
    letter-spacing: -0.26px;
    font-weight: 600;
    text-align: center;

    @media only screen and (max-width: 767px) { 
      font-size: 14px;
    }
  `,
};

export default SignupStep3Template;
