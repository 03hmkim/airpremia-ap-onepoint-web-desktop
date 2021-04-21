import React from 'react';
import styled from 'styled-components';
import Img from 'public/images/img_palm_tree.png';
import {
  WHITE1,
  DARK_GRAY1,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';

interface IProps {}

function PromotionalCardPalmTree({}: IProps) {
  return (
    <S.container>
      <S.topWrapper>
        <div className="title">
          야자수 그늘
          <br />
          아래 앉아
          <br />
          달달한 코코넛
          <br />
          커피 한잔
        </div>
        <div className="description">
          사무실에 앉아 마시는
          <br />
          아메리카노 말고 하노이 햇살
          <br />
          아래 마시는 코코넛 커피는
          <br />
          어때요?
        </div>
      </S.topWrapper>
      <img src={Img} alt="야자수" />
    </S.container>
  );
}

PromotionalCardPalmTree.defaultProps = {};

const S = {
  container: styled.div`
    width: 320px;
    height: 717px;
    padding: 40px 30px;
    border-radius: 16px;
    box-shadow: 30px 30px 30px 0 rgba(34, 34, 34, 0.03);
    border: solid 1px #f2f2f2;
    background-color: ${WHITE1};
    box-sizing: border-box;
    img {
      display: block;
      width: 200px;
      height: 275px;
      margin: 60px auto 20px;
      border-radius: 100px;
    }
  `,
  topWrapper: styled.div`
    .title {
      font-size: 30px;
      line-height: 1.5;
      letter-spacing: -0.6px;
      color: ${DARK_GRAY1};
    }
    .description {
      padding-top: 10px;
      font-size: 14px;
      line-height: 1.71;
      letter-spacing: -0.28px;
      color: ${LIGHT_GRAY7};
    }
  `,
};

export default PromotionalCardPalmTree;
