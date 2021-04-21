import React from 'react';
import styled from 'styled-components';
import {
  BLUE1,
  WHITE1,
} from '@airpremia/cdk/styles/colors';
import BadgeArrowAngle from 'public/images/badgeArrowAngle.svg';

interface IProps {
  children: string | React.ReactElement;
}

function BadgeArrow({ children }: IProps) {
  return (
    <S.container>
      <p>{children}</p>
      <span className="angle"><BadgeArrowAngle /></span>
    </S.container>
  );
}

BadgeArrow.defaultProps = {};

const S = {
  container: styled.div`
    padding: 9px 13px 6px 13px;
    position: relative;
    display: inline-block;
    background-color: ${BLUE1};
    border-radius: 30px 30px 30px 0;
    box-sizing: border-box;

    .angle {
      position: absolute;
      left: -1px;
      bottom: -9px;
      display: block;
      
      svg {
        width: 11px;
        height: 9px;
      }
    }

    /*
    &::before {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      left: 0;
      bottom: -4px;
      display: block;
      border-bottom: none;
      border-top: 4px solid ${BLUE1};
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
    }
    &::after {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      left: 0;
      bottom: -8px;
      display: block;
      border-right: none;
      border-left: 4px solid ${BLUE1};
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
    }*/

    p {
      color: ${WHITE1};
      font-family: 'Premia';
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: -0.32px;
    }
  `,
};

export default BadgeArrow;
