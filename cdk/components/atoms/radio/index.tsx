import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import {
  LIGHT_GRAY2,
  LIGHT_GRAY5,
  ORANGE1,
  WHITE1,
} from '@airpremia/cdk/styles/colors';

export interface IProps {
  checked: boolean;
  name: string;
  value: string;
  disabled?: boolean;
  children?: string | React.ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Radio: FC<IProps> = ({
  checked,
  name,
  value,
  disabled,
  children,
  onChange,
}) => {
  return (
    <S.container>
      <input
        type="radio"
        value={value}
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <span className="icon" />
      {children && (
        <span className="children">{children}</span>
      )}
    </S.container>
  );
};

Radio.defaultProps = {};

const S = {
  container: styled.label`
    position: relative;
    display: inline-flex;
    align-items: center;
    input {
      top: 0;
      left: 0;
      width: 100%;
      cursor: inherit;
      height: 100%;
      margin: 0;
      opacity: 0;
      padding: 0;
      z-index: 1;
      position: absolute;
      & + .icon {
        width: 18px;
        height: 24px;
        box-sizing: border-box;
        border-style: solid;
        border-radius: 10px;
        border-width: 1.5px;
        border-color: ${LIGHT_GRAY5};
        background-color: ${WHITE1};
      }
      &:checked + .icon {
        border-width: 7px;
        border-color: ${ORANGE1};
      }
      &:disabled + .icon {
        background-color: ${LIGHT_GRAY2};
      }
    }

    .children {
      margin-left: 10px;
    }
  `,
};

export default Radio;
