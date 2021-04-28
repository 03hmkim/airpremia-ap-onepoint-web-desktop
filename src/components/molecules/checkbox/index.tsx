import { ReactElement } from 'react';
import styled from 'styled-components';
import CheckboxInActive from 'public/images/btn-check-03-inactive.svg';
import CheckboxActive from 'public/images/btn-check-03-active.svg';

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
    width:100%;
  `,

  checkbox: styled.div`
    height: 24px;
    margin-right: 6px;
  `,

  label: styled.div`
    font-size: 18px;
    line-height: 23px;
    letter-spacing: -0.28px;
    width:100%;
    flex:1;
    text-align:left;

    @media only screen and (max-width: 767px) {
      font-size: 14px;
    }
  `,
};

export default Checkbox;
