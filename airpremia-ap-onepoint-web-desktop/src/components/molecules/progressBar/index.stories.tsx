import React, { FC } from 'react';
import styled from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import ProgressBar from './';
import { addComma } from '@airpremia/core/lib/service';

export default {
  title: 'desktop / Molecules / ProgressBar ',
  component: ProgressBar,
  decorators: [withKnobs],
};

export const 프로그래스바_BLUE: FC = () => {
  const start = 0;
  const end = 80000;
  const unit = 'M';
  return (
    <ProgressBar originFilled={20} value={'16000'}>
      <S.bottomInfo>
        <p>{start}</p>
        <p>
          {addComma(end)} {unit}
        </p>
      </S.bottomInfo>
    </ProgressBar>
  );
};

export const 프로그래스바_BLUE등급초과: FC = () => {
  const start = 0;
  const middle = 80000;
  const end = 300000;
  const unit = 'M';
  return (
    <ProgressBar
      // originColor={RED}
      originFilled={(80000 / 300000) * 100}
      addedFilled={(10000 / 300000) * 100}
      value={'90000'}
    >
      <S.bottomInfo>
        <p>{start}</p>
        <p className="dynamic">{middle}</p>
        <p>
          {addComma(end)} {unit}
        </p>
      </S.bottomInfo>
    </ProgressBar>
  );
};

export const 프로그래스바_GOLD완료: FC = () => {
  const start = 0;
  const middle = 80000;
  const end = 300000;
  const unit = 'M';
  return (
    <ProgressBar
      originFilled={(300000 / 300000) * 100}
      value="finish"
    >
      <S.bottomInfo>
        <p>{start}</p>
        <p className="dynamic">{middle}</p>
        <p>
          {addComma(end)} {unit}
        </p>
      </S.bottomInfo>
    </ProgressBar>
  );
};

const S = {
  bottomInfo: styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.26px;

    .dynamic {
      left: calc(80000 / 300000 * 100%);
      position: absolute;
    }
  `,
};
