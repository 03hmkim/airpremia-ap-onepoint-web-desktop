import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { BLUE1, WHITE1 } from '../../../styles/colors';
import { onPressButtonCss } from '../../../styles/util';
import { toggleBoolean } from '@airpremia/core/lib/util';

interface IStyleProps {
  backgroundColor?: string;
  disabled?: boolean;
}
interface IStyle extends IStyleProps {
  isActive: boolean;
}
export interface IProps extends IStyleProps {
  children: string | React.ReactElement;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const BtnType2: FC<IProps> = ({
  type = 'button',
  backgroundColor,
  disabled,
  children,
  onClick = () => {},
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <S.container
      type={type}
      backgroundColor={backgroundColor}
      isActive={isActive}
      disabled={disabled}
      onClick={onClick}
      onTouchStart={toggleBoolean(setIsActive, isActive)}
      onTouchEnd={toggleBoolean(setIsActive, isActive)}
    >
      <span>{children}</span>
    </S.container>
  );
};

BtnType2.defaultProps = {
  backgroundColor: BLUE1,
};

const S = {
  container: styled.button.attrs<IStyle & { type: string }>(
    ({ type }) => {
      return {
        type,
      };
    },
  )`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    color: ${WHITE1};
    font-size: 13px;
    ${onPressButtonCss}
  `,
};

export default BtnType2;
