import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import {
  LIGHT_GRAY7,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
//d import { BLACK, WHITE, GRAY } from '@airpremia/cdk/styles/colors';

interface IProps {
  title: string;
  description: string;
  subtitle: ReactElement;
  content: ReactElement;
  checkpoint: ReactElement;
  button: ReactElement;
}

const ByeUserTemplate: FC<IProps> = ({
  title,
  description,
  subtitle,
  content,
  checkpoint,
  button,
}) => {
  return (
    <S.container>
      <S.titleWrapper>
        <S.title>
          <h1>{title}</h1>
        </S.title>
        <S.description>{description}</S.description>
        <S.line></S.line>
        <S.subtitle>
          <h3>{subtitle}</h3>
        </S.subtitle>
        <S.content>{content}</S.content>
        <S.line></S.line>
        <S.checkpoint>{checkpoint}</S.checkpoint>
        <S.button>{button}</S.button>
      </S.titleWrapper>
    </S.container>
  );
};

const S = {
  container: styled.div`
  `,

  titleWrapper: styled.div``,

  title: styled.div`
    h1 {
      font-size: 36px;
      font-family: 'NotoSans';
      font-weight: 700;
      line-height: 48px;
      letter-spacing: -0.30px;

      @media only screen and (max-width: 767px) {
        font-size: 26px;
        line-height: 36px;
        letter-spacing: -0.52px;
      }
    }
  `,
  subtitle: styled.div`
    margin-top: 60px;

    h3 {
      font-size: 24px;
      font-family: 'NotoSans';
      font-weight: 700;
    }

    @media only screen and (max-width: 767px) {
      margin-top: 20px;
    }
  `,
  description: styled.div`
    margin-top: 10px;
    margin-bottom: 100px;
    font-size: 18px;
    font-family: 'NotoSans';
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.28px;
    color: ${LIGHT_GRAY7};

    @media only screen and (max-width: 767px) {
      margin-bottom: 80px;
      font-size: 14px;
    }
  `,

  line: styled.hr`
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  `,

  content: styled.div`
    margin-top: 20px; 
    margin-bottom: 60px;
    font-size: 18px;
    line-height: 36px;
    a {
      color: ${BLUE1};
    }

    @media only screen and (max-width: 767px) {
      margin-bottom: 20px;
      font-size: 14px;
      line-height: 26px;
    }
  `,
  // border-top: solid 2px ${DARK_GRAY1};
//  border-bottom: solid 2px ${DARK_GRAY1};

  persLink: styled.a`
    color: ${BLUE1};
  `,

  checkpoint: styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  `,
  button: styled.div`
  margin-top: 80px;
    display: flex;
    justify-content: center;
    button {
      width: 240px;
      &:first-of-type {
        margin-right: 10px;
      }
    }

    @media only screen and (max-width: 767px) {
      margin-top: 60px;
    }
  `,
};

export default ByeUserTemplate;
