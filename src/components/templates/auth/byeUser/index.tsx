import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import {
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';
// import { BLACK, WHITE, GRAY } from '@airpremia/cdk/styles/colors';

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
          <h1 className="font-bold">{title}</h1>
        </S.title>
        <S.description>{description}</S.description>
        <S.subtitle>
        <h3 className="font-bold">{subtitle}</h3>
        </S.subtitle>
        <S.content>{content}</S.content>
        <S.checkpoint>{checkpoint}</S.checkpoint>
        <S.button>{button}</S.button>
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
  subtitle: styled.div`
  margin-top: 60px;
  font-size: 22px;
  `,
  description: styled.div`
    margin-top: 10px;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.28px;
    color: ${LIGHT_GRAY7};
  `,

  content: styled.div`
    margin-top: 20px; 
    margin-bottom: 25px;
    line-height: 16px;
    font-size: 14px;
  `,
  // border-top: solid 2px ${DARK_GRAY1};
//  border-bottom: solid 2px ${DARK_GRAY1};
  checkpoint: styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  `,
  button: styled.div`
  margin-top: 10px;
    display: flex;
    justify-content: center;
    button {
      width: 240px;
      &:first-of-type {
        margin-right: 10px;
      }
    }
  `,
};

export default ByeUserTemplate;
