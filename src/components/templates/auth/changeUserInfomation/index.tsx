import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import {
  LIGHT_GRAY7,
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';
// import { BLACK, WHITE, GRAY } from '@airpremia/cdk/styles/colors';

interface IProps {
  title: ReactElement;
  description: string;
  content: ReactElement;
  button: ReactElement;
  button2: ReactElement;
}

const ChangeUserInfomationTemplate: FC<IProps> = ({
  title,
  description,
  content,
  button,
  button2
}) => {
  return (
    <S.container>
      <S.titleWrapper>
        <S.title>
          <h1 className="font-bold">{title}</h1>
        </S.title>
        <S.description>{description}</S.description>
        <S.content>{content}</S.content>
        <S.button>{button}</S.button>
        <S.button2>{button2}</S.button2>
      </S.titleWrapper>
    </S.container>
  );
};

const S = {
  container: styled.div``,

  titleWrapper: styled.div``,

  title: styled.div`
    h1 {
      font-size: 36px;
      line-height: 50px;
      letter-spacing: -0.72px;
    }
  `,

  description: styled.div`
    margin-top: 10px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.28px;
    color: ${LIGHT_GRAY7};

    @media only screen and (max-width: 767px) {
      font-size: 14px;
    }
  `,

  content: styled.div`
    margin: 100px 0 80px;
    border-top: solid 2px ${DARK_GRAY1};
    border-bottom: solid 2px ${DARK_GRAY1};

    @media only screen and (max-width: 1059px) { 
      margin: 80px 0 60px;
    }

    @media only screen and (max-width: 767px) { 
      margin: 60px 0 40px;
    }
  `,

  button: styled.div`
    display: flex;
    justify-content: center;
    button {
      width: 240px;
      &:first-of-type {
        margin-right: 10px;
      }
    }
  `,
  button2: styled.div`
    width: fit-content;  
    margin: 0 auto;
    margin-top: 80px;
    @media only screen and (max-width:767px){
      margin-top: 40px;
    }
  `,
};

export default ChangeUserInfomationTemplate;
