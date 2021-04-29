import React from 'react';
import styled from 'styled-components';
import {
  WHITE1,
  ORANGE1,
  DARK_GRAY1,
  LIGHT_GRAY2,
  LIGHT_GRAY8,
} from '@airpremia/cdk/styles/colors';
import { 
  BtnBlue,
  BadgeArrow,
} from 'src/components';
import { toInteger } from 'lodash';
import eventImg01 from 'public/images/ticket/promotion/list/promotion_bg_01.png';
import eventImg02 from 'public/images/ticket/promotion/list/promotion_bg_02.png';
import eventImg03 from 'public/images/ticket/promotion/list/promotion_bg_03.png';
import eventImg04 from 'public/images/ticket/promotion/list/promotion_bg_04.png';
import Link from 'next/link';


interface IProps {}

function PromotionalCardEvent({}: IProps) {
  const min = 1;
  const max = 4;
  const rand = toInteger(min + Math.random() * (max - min));

  if (rand == 1) {
    return (
      <Link href="/ticket/promotion">
        <a>
          <S.container>
            <S.badge>
              <BadgeArrow>EVENT</BadgeArrow>
            </S.badge>
            <S.bottomWrapper>
              <div className="subTitle">
                산호세 신규 취항 기념,
                <br />
                산호세행 15% 할인 이벤트
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
              <div className="img num01"></div>
            </S.imageWrapper>
          </S.container>
        </a>
      </Link>
    );
  } else if (rand == 2) {
    return (
      <Link href="/ticket/promotion">
        <a>
          <S.container>
            <S.badge>
              <BadgeArrow>EVENT</BadgeArrow>
            </S.badge>
            <S.bottomWrapper>
              <div className="subTitle">
                기내면세품 예약하고 
                <br />
                무료 호치민 여행 떠나자!
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
              <div className="img num02"></div>
            </S.imageWrapper>
          </S.container>
        </a>
      </Link>
    );
  } else if (rand == 3) {
    return (
      <Link href="/ticket/promotion">
        <a>
          <S.container>
            <S.badge>
              <BadgeArrow>EVENT</BadgeArrow>
            </S.badge>
            <S.bottomWrapper>
              <div className="subTitle">
                퀴즈 맞추고,
                <br />
                마일리지 받아가세요!
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
              <div className="img num03"></div>
            </S.imageWrapper>
          </S.container>
        </a>
      </Link>
    );
  } else if (rand == 4) {
    return (
      <Link href="/ticket/promotion">
        <a>
          <S.container>
            <S.badge>
              <BadgeArrow>EVENT</BadgeArrow>
            </S.badge>
            <S.bottomWrapper>
              <div className="subTitle">
                퀴즈 맞추고 함께 
                <br />
                샌프란시스코로 떠나요 :-)
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
              <div className="img num04"></div>
            </S.imageWrapper>
          </S.container>
        </a>
      </Link>
    );
  }
}

PromotionalCardEvent.defaultProps = {};

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
      color: ${LIGHT_GRAY8};

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
      overflow: hidden;
      background: ${LIGHT_GRAY2};
      background-size: cover;
      background-position: center;
      border-radius: 20px;

      &.num01 {
        background-image: url(${eventImg01});
      }
      &.num02 {
        background-image: url(${eventImg02});
      }
      &.num03 {
        background-image: url(${eventImg03});
      }
      &.num04 {
        background-image: url(${eventImg04});
      }
    }
  `,
};

export default PromotionalCardEvent;
