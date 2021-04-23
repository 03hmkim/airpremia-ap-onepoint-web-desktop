import { FC } from 'react';
import styled from 'styled-components';
import {
  LIGHT_GRAY8,
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';

interface IProps {}

const CabinClassSeperator: FC<IProps> = () => {
  return (
    <S.container>
      <div>
        <p>성인 1인 기준</p>
      </div>
    </S.container>
  );
};

const S = {
  container: styled.div`
    div {
      height: 44px;
      border-bottom: solid 2px ${DARK_GRAY1};
    }
    p {
      font-size: 18px;
      letter-spacing: -0.28px;
      color: ${LIGHT_GRAY8};
      line-height: 20px;
    }

    @media only screen and (max-width: 767px) {
      p {
        font-size: 14px;
      }
    }
  `,
};

export default CabinClassSeperator;
