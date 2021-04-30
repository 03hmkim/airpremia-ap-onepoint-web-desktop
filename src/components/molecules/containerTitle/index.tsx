import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import {
  LIGHT_GRAY7,
  DARK_GRAY2,
} from '@airpremia/cdk/styles/colors';

interface IProps {
  title: ReactElement | string;
  description: ReactElement | string;
}

const ContainerTitle: FC<IProps> = ({
  title,
  description,
}) => {
  return (
    <S.container>
      <S.header>
        <h2 className="font-bold">{title}</h2>
        <p>{description}</p>
      </S.header>
    </S.container>
  );
};

const S = {
  container: styled.div``,
  header: styled.div`
    h2 {
      font-size: 30px;
      line-height: 42px;
      letter-spacing: -0.6px;
      color: ${DARK_GRAY2};
    }

    p {
      font-size: 18px;
      line-height: 22px;
      letter-spacing: -0.28px;
      color: ${LIGHT_GRAY7};
      margin-top: 10px;
    }

    @media only screen and (max-width: 767px) { 
      h2 {
        font-size: 22px;
      }
      p {
        font-size: 14px;
      }
    }
  `,
};

export default ContainerTitle;
