import React from 'react';
import {
  FocusEvent,
  ChangeEvent,
  useEffect,
  useRef,
} from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import {
  DARK_GRAY1,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';

export enum EInputType {
  TEXT = 'text',
  NUMBER = 'number',
  PASSWORD = 'password',
}

const defaultMaxLength = {
  email: 20,
  password: 35,
};

export interface IStyleProps {
  /** focus */
  isFocus?: boolean;
  /** readonly */
  isReadOnly?: boolean;
  /** hide? */
  isHidden?: boolean;
  /** input type */
  type?: EInputType;
  /** input value */
  value?: string;
  /** placeholder */
  placeholder?: string;
  /** dataset할 target */
  target?: string;
  /** 최대 길이 */
  maxLength?: number;
  /** blur 이벤트 */
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  /** change 이벤트 */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IProps extends IStyleProps {}

function Input({
  isFocus,
  value,
  type,
  target,
  maxLength,
  onBlur,
  onChange,
  ...props
}: IProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const max =
    maxLength ||
    (type === 'password'
      ? defaultMaxLength.email
      : defaultMaxLength.password);

  useEffect(() => {
    if (isFocus) {
      inputRef.current?.focus();
    }
  }, []);

  return (
    <S.container
      ref={inputRef}
      type={type}
      maxLength={max}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
      data-target={target || Input.defaultProps.target}
      {...props}
    />
  );
}

Input.defaultProps = {
  isReadOnly: false,
  isHidden: false,
  type: EInputType.TEXT,
  value: '',
  target: '',
  placeholder: 'text를 입력해주세요.',
  onBlur: () => {},
  onChange: () => {},
};

const S = {
  container: styled.input.attrs<
    IStyleProps & { ref: React.ReactElement }
  >(({ ref, isReadOnly, type, placeholder, value }) => {
    return {
      readonly: isReadOnly,
      type,
      placeholder,
      value,
      ref,
    };
  })`
    width: 100%;
    height: 100%;
    padding: 0;
    border: 0;
    outline: 0;
    // opacity: ${ifProp('isHidden', 0, 1)};
    color: ${DARK_GRAY1};
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.28px;
    font-style: normal;

    &::placeholder {
      color: ${LIGHT_GRAY7};
      @media only screen and (max-width: 767px) {
        font-size: 14px;
      }
    }
  `,
};

export default Input;
