import React from 'react';
import styled from 'styled-components';
import {
  WHITE1,
  ORANGE1,
  DARK_GRAY1,
  LIGHT_GRAY2,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';
import { 
  BtnBlue,
  BadgeArrow,
 } from 'src/components';

interface IProps {}

function PromotionalCardHanoi({}: IProps) {
  return (
    <S.container>
      <S.badge>
        <BadgeArrow>EVENT</BadgeArrow>
      </S.badge>
      <S.bottomWrapper>
        <div className="subTitle">
          명장면의 연속,
          <br />
          꿈의 오사카로 떠나요~!
        </div>
        <div className="description">
          에어프레미아 항공권으로
          <br />
          첫 구매 시 최대 <strong>15% 할인!</strong>
        </div>
        <div className="click">
          <BtnBlue className="arrow">CLICK</BtnBlue>
        </div>
      </S.bottomWrapper>
      <S.imageWrapper>
        <div className="img"></div>
      </S.imageWrapper>
    </S.container>
  );
}

PromotionalCardHanoi.defaultProps = {};

const S = {
  container: styled.div`
    width: 375px;
    height: 595px;
    padding: 30px 40px 40px;
    border-radius: 20px;
    box-shadow: 20px -20px 20px 0 rgba(0, 0, 0, 0.07);
    background-color: ${WHITE1};
    box-sizing: border-box;
  `,
  badge: styled.div`
    margin-bottom: 20px;
  `,
  bottomWrapper: styled.div`
    .subTitle {
      margin-bottom: 17px;
      font-size: 21px;
      font-weight: 700;
      line-height: 36px;
      color: ${DARK_GRAY1};
    }
    .description {
      font-size: 18px;
      line-height: 30px;
      color: ${LIGHT_GRAY7};

      strong{
        color: ${ORANGE1};
        font-weight: 700;
      }
    }

    .click {
      margin-top: 35px;

      &::after{
        content: "";
        display: block;
        clear: both;
      }

      button {
        float: right;
        font-size: 21px;
        font-family: 'Premia';
        font-weight: 700;
      }
    }
  `,
  imageWrapper: styled.div`
    width: auto;
    margin-top: 5px;

    .img {
      width: 290px;
      height: 252px;
      display: block;
      background: ${LIGHT_GRAY2};
      border-radius: 20px;
    }
  `,
};

export default PromotionalCardHanoi;
