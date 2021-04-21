import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import {
  DARK_GRAY1,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';

interface IProps {
  title?: string | ReactElement;
  description?: string | ReactElement;
  desColor?: string;
  body?: ReactElement | ReactElement[];
}

const ComTitle: FC<IProps> = ({
  title = '타이틀',
  description = '',
  desColor,
  body,
}) => {
  return (
    <S.container>
      <S.header>
        <h2>{title}</h2>
        <h5 className={desColor}>{description}</h5>
      </S.header>
      <S.body>{body}</S.body>
    </S.container>
  );
};

const S = {
  container: styled.div`
    margin-bottom: 100px !important;
    
    @media only screen and (max-width: 767px) {
      margin-bottom: 80px !important;
    }
  `,
  header: styled.div`
    h2 {
      margin-bottom: 10px;
      color: ${DARK_GRAY1};
      font-size: 40px;
      font-weight: 700;
      line-height: 48px;
      letter-spacing: -0.30px;
    }
    h5 {
      font-size: 18px;
      line-height: 26px;
      letter-spacing: 0;
      &.gray{
        color: ${LIGHT_GRAY7};
      }
    }
    @media only screen and (max-width: 767px) {
      
      h2 {
        margin-bottom: 8px;
        font-size: 26px;
        line-height: 36px;
        letter-spacing: -0.52px;
      }
      h5 {
        font-size: 13px;
        line-height: 23px;
        letter-spacing: -0.28px;
    }
  `,

  body: styled.div``,
};

export default ComTitle;
