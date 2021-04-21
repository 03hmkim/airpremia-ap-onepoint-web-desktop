import React from 'react';
import styled from 'styled-components';
import {
  LIGHT_GRAY6,
  WHITE1,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

function Textarea({
  value,
  placeholder,
  onChange,
}: IProps) {
  const onChangeLocal = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <S.container>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={onChangeLocal}
      />
    </S.container>
  );
}

Textarea.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    min-height: 300px;
    height: 100%;
    padding: 20px;
    border-radius: 12px;
    border: solid 1px ${LIGHT_GRAY6};
    background-color: ${WHITE1};
    box-sizing: border-box;
    textarea {
      width: 100%;
      height: 100%;
      border: none;
      &:focus {
        border: none;
        outline: none;
      }
      &::placeholder {
        color: #dddddd;
      }
      resize: none;
      font-size: 15px;
      line-height: 1.67;
      letter-spacing: -0.3px;
      caret-color: ${ORANGE2};
      font-weight: 600;
    }
  `,
};

export default Textarea;
