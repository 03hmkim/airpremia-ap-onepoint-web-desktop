// TODO 기획 문의. 셀렉트박스가 가격을 가리는데 어떻게 보여줄 것인지
import React from 'react';
import styled from 'styled-components';
import {
  LIGHT_GRAY6,
  WHITE1,
  LIGHT_GRAY8,
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {}

interface IProps extends IStyleProps {
  title: string;
  description: string;
}

function ClosedInfoBox({ title, description }: IProps) {
  return (
    <S.container>
      <h3>{title}</h3>
      <div className="description">{description}</div>
    </S.container>
  );
}

ClosedInfoBox.defaultProps = {};

const S = {
  container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 450px;
    height: 131px;
    border-radius: 8px;
    border: solid 1px ${LIGHT_GRAY6};
    background-color: ${WHITE1};
    padding: 25px;
    box-sizing: border-box;
    h3 {
      font-size: 15px;
      font-weight: 600;
      letter-spacing: -0.3px;
      color: ${DARK_GRAY1};
    }
    .description {
      font-size: 14px;
      line-height: 1.71;
      letter-spacing: -0.4px;
      color: ${LIGHT_GRAY8};
      padding-top: 15px;
    }
  `,
};

export default ClosedInfoBox;
