import React from 'react';
import styled from 'styled-components';
import SvgSpeaker from 'public/images/icon_speaker.svg';
import { ORANGE2 } from '@airpremia/cdk/styles/colors';

interface IProps {
  /** 아웃 링크 주소 */
  to: string;
}

function FeedbackButton({ to }: IProps) {
  return (
    <S.container
      className="font-premia-bold"
      href={to}
      target="_blank"
      rel="noreferrer"
    >
      <div className="svgWrapper">
        <SvgSpeaker />
      </div>
      <span>Feedback</span>
    </S.container>
  );
}

FeedbackButton.defaultProps = {};

const S = {
  container: styled.a`
    position: fixed;
    top: 9px;
    left: 50%;
    margin-left: -65px;
    z-index: 99;
    display: inline-flex;
    align-items: center;
    .svgWrapper {
      width: 30px;
      height: 30px;
    }
    span {
      color: ${ORANGE2};
      font-size: 26px;
      padding-left: 10px;
    }
  `,
};

export default FeedbackButton;
