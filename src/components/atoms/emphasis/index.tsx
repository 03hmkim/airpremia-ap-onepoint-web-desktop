import React from 'react';
import styled from 'styled-components';
import * as Colors from '@airpremia/cdk/styles/colors';

interface IEmphasisProps {}

function Emphasis({}: IEmphasisProps) {
  return (
    <S.container>
      <div />
    </S.container>
  );
}

const S = {
  container: styled.div`
    position: relative;
    div {
      display: block;
      position: absolute;
      top: -1px;
      left: 1px;
      width: 3px;
      height: 3px;
      border-radius: 3px;
      background-color: ${Colors.ORANGE1};
    }
  `,
};

export default Emphasis;
