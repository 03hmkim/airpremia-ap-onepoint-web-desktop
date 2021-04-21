import React from 'react';
import styled from 'styled-components';
import Triangle from '../triangle';
import { RED1 } from '@airpremia/cdk/styles/colors';
import { EPosition } from '../arrow';
import { switchProp } from 'styled-tools';

interface IStyleProps {
  direction: EPosition;
}
interface IProps extends IStyleProps {}

function ExitLabel({ direction }: IProps) {
  return (
    <S.container direction={direction}>
      <div className="triangleWrapper">
        <Triangle
          color={RED1}
          scale={1.6}
          position={direction}
        />
      </div>
      <div className="label font-premia-bold">EXIT</div>
    </S.container>
  );
}

ExitLabel.defaultProps = {
  direction: EPosition.LEFT,
};

const S = {
  container: styled.div<IStyleProps>`
    display: inline-flex;
    align-items: baseline;
    flex-direction: ${switchProp('direction', {
      [EPosition.LEFT]: 'row',
      [EPosition.RIGHT]: 'row-reverse',
    })};
    .triangleWrapper {
      position: relative;
      margin-top: 0.5px;
    }
    .label {
      font-size: 20px;
      line-height: 1;
      color: ${RED1};
    }
  `,
};

export default ExitLabel;
