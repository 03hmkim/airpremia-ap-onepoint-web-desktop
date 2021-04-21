import React, { FC } from 'react';
import styled from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import GuideBar from '.';
import {
  DARK_GRAY1,
  WHITE1,
  LIGHT_BLUE1,
} from '@airpremia/cdk/styles/colors';

export default {
  title: 'desktop / Molecules / GuideBar',
  component: GuideBar,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Guide bar in cabinclass',
  },
};

export const 가이드바정렬: FC = () => {
  return (
    <GuideBar backgroundColor={LIGHT_BLUE1}>
      <S.container>
        <S.left>
          <p>
            35,000원을 추가하면 환불 수수료가 없는 항공권이
            있다?
          </p>
        </S.left>
        <S.right>
          <button>변경하기</button>
        </S.right>
      </S.container>
    </GuideBar>
  );
};

const S = {
  container: styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
  `,
  left: styled.div`
    display: flex;
    align-items: center;
    p {
      font-size: 15px;
      line-height: 28px;
      letter-spacing: -0.3px;
      font-weight: 600;
      color: ${DARK_GRAY1};
    }
  `,
  right: styled.div`
    button {
      width: 110px;
      height: 38px;
      border-radius: 19px;
      background-color: ${WHITE1};
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${DARK_GRAY1};
      font-size: 14px;
      line-height: 28px;
      letter-spacing: -0.28px;
      font-weight: 600;
    }
  `,
};
