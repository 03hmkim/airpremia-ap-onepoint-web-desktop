import React, { ReactElement } from 'react';
import styled from 'styled-components';
import CheckboxActive from '../../../public/images/btn_check_02_active.svg';
import CheckboxInActive from '../../../public/images/btn_check_02_inactive.svg';

interface IStyleProps {}

export interface IProps extends IStyleProps {
  className?: string;
  isActive: boolean;
  target?: string;
  onChange: (status: boolean, target?: string) => void;
  children?: ReactElement | string;
}

function Checkbox({
  className,
  isActive,
  target,
  onChange,
  children,
}: IProps) {
  const _onChange = () => onChange(!isActive, target || '');

  return (
    <S.container className={className} onClick={_onChange}>
      <S.checkbox>
        {isActive ? (
          <CheckboxActive />
        ) : (
          <CheckboxInActive />
        )}
      </S.checkbox>
      <S.label>{children}</S.label>
    </S.container>
  );
}

Checkbox.defaultProps = {
  target: '',
  onChange: () => {},
};

const S = {
  container: styled.div<IStyleProps>`
    display: flex;
    align-items: center;
    cursor: pointer;
  `,

  checkbox: styled.div`
    margin-right: 6px;
  `,

  label: styled.div`
    font-size: 14px;
    line-height: 23px;
    letter-spacing: -0.28px;
  `,
};

export default Checkbox;
