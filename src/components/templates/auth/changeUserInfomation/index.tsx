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
}

const ChangeUserInfomationTemplate: FC<IProps> = ({
  title,
  description,
  content,
  button,
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
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.28px;
    color: ${LIGHT_GRAY7};
  `,

  content: styled.div`
    margin: 100px 0 80px;
    border-top: solid 2px ${DARK_GRAY1};
    border-bottom: solid 2px ${DARK_GRAY1};
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
};

export default ChangeUserInfomationTemplate;
