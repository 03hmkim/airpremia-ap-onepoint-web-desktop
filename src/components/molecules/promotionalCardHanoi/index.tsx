import React from 'react';
import styled from 'styled-components';
import {
  WHITE1,
  ORANGE1,
  DARK_GRAY1,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';

interface IProps {}

function PromotionalCardHanoi({}: IProps) {
  return (
    <S.container>
      <div className="title">HANOI</div>
      <S.bottomWrapper>
        <div className="subTitle">
          하노이에서
          <br />
          사막을 만나다
        </div>
        <div className="description">
          아시아의 작은 그랜드 캐니언
          <br />
          요정의 샘물까지 경험하세요.
        </div>
      </S.bottomWrapper>
    </S.container>
  );
}

PromotionalCardHanoi.defaultProps = {};

const S = {
  container: styled.div`
    width: 280px;
    height: 395px;
    padding: 40px 30px;
    border-radius: 16px;
    box-shadow: 30px 30px 30px 0 rgba(34, 34, 34, 0.03);
    border: solid 1px #f2f2f2;
    background-color: ${WHITE1};
    box-sizing: border-box;
    .title {
      font-family: 'Premia', sans-serif;
      font-weight: 700;
      font-size: 50px;
      line-height: 1.1;
      color: ${ORANGE1};
    }
  `,
  bottomWrapper: styled.div`
    padding-top: 158px;
    .subTitle {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.5;
      color: ${DARK_GRAY1};
    }
    .description {
      padding-top: 9px;
      font-size: 14px;
      line-height: 1.71;
      letter-spacing: -0.28px;
      color: ${LIGHT_GRAY7};
    }
  `,
};

export default PromotionalCardHanoi;
