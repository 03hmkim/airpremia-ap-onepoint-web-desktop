import React, { FC } from 'react';
import styled from 'styled-components';
import SvgDoing from '../../../public/images/dot_doing.svg';
import SvgDone from '../../../public/images/dot_done.svg';
import SvgUnDone from '../../../public/images/dot_undone.svg';
import { ifProp } from 'styled-tools';
import {
  DARK_GRAY1,
  LIGHT_GRAY6,
} from '../../../styles/colors';

export interface IProps {
  curr?: number;
}

const ProgressIndicator: FC<IProps> = ({
  curr = 4,
}: IProps) => {
  const renderIcon = (target: number) => {
    if (curr === target) {
      return <SvgDoing />;
    } else if (curr < target) {
      return <SvgUnDone />;
    } else {
      return <SvgDone />;
    }
  };
  return (
    <S.container>
      {renderIcon(0)}
      <S.line isFilled={curr >= 1} />
      {renderIcon(1)}
      <S.line isFilled={curr >= 2} />
      {renderIcon(2)}
    </S.container>
  );
};

const S = {
  container: styled.div`
    display: flex;
    align-items: center;
    width: 107px;
    height: 16px;
  `,

  line: styled.span<{ isFilled: boolean }>`
    border-top: solid ${ifProp('isFilled', 2, 1)}px
      ${ifProp('isFilled', DARK_GRAY1, LIGHT_GRAY6)};
    width: 17.5px;
    display: block;
    margin: 0 8px;
  `,
};

export default ProgressIndicator;
