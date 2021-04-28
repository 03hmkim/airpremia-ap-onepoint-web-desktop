import { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface IProps {
  header: ReactElement;
  body: ReactElement;
  button: ReactElement;
}

const CheckinSummaryTemplate: FC<IProps> = ({
  header,
  body,
  button,
}) => {
  return (
    <S.container>
      <S.header>{header}</S.header>

      <S.body>{body}</S.body>

      <S.button>{button}</S.button>
    </S.container>
  );
};

const S = {
  container: styled.div``,

  header: styled.div``,

  body: styled.div`
    margin-top: 80px;

    .linkTextWrapper {
      display: none;
    }

    .pricesWrapper {
      display: none;
    }
    @media only screen and (max-width: 1059px) { 
      margin-top: 60px;
    }
    @media only screen and (max-width: 767px) { 
      margin-top: 40px;
    }
  `,

  button: styled.div`
    text-align: center;
    margin-top: 60px;
    button {
      width: 240px;
      &:first-of-type {
        margin-right: 10px;
      }
    }
    @media only screen and (max-width: 1059px) { 
      margin-top: 40px;
      button {
        width: 200px;
      }
    }
    @media only screen and (max-width: 767px) { 
      margin-top: 20px;
      button {
        width: 130px;
      }
    }
  `,
};

export default CheckinSummaryTemplate;
