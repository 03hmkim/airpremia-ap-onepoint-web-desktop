import { ReactElement } from 'react';
import styled from 'styled-components';
import SvgRadioActive from 'public/images/btn_radio.svg';
import SvgRadioInActive from 'public/images/btn_radio-01-inactive.svg';
import {
  LIGHT_GRAY5,
  LIGHT_GRAY2,
} from '@airpremia/cdk/styles/colors';
import { ifProp } from 'styled-tools';

export interface IRadioStatusChangeProps {
  status?: boolean;
  target?: string;
}

interface IStyleProps {
  isActive?: boolean;
  disabled?: boolean;
}

export interface IProps extends IStyleProps {
  className?: string;
  target?: string;
  onChange?: ({
    status,
    target,
  }: IRadioStatusChangeProps) => void;
  children?: ReactElement | string;
}

function Radio({
  className,
  isActive = Radio.defaultProps.isActive,
  target,
  onChange = Radio.defaultProps.onChange,
  children,
  disabled = false,
}: IProps) {
  const _onChange = () =>
    onChange({
      status: !isActive,
      target: target || '',
    });

  return (
    <S.container
      className={className}
      onClick={_onChange}
      isActive={isActive}
      disabled={disabled}
    >
      <div>
        {disabled ? (
          <span className="disabled" />
        ) : isActive ? (
          <SvgRadioActive />
        ) : (
          <SvgRadioInActive />
        )}
      </div>
      {children && <S.label>{children}</S.label>}
    </S.container>
  );
}

Radio.defaultProps = {
  target: '',
  isActive: false,
  onChange: () => {},
};

const S = {
  container: styled.div<IStyleProps>`
    display: flex;
    align-items: center;

    pointer-events: ${ifProp('disabled', 'none')};
    cursor: ${ifProp('disabled', 'default', 'pointer')};

    .disabled {
      display: block;
      width: 15px;
      height: 21px;
      border-radius: 60px;
      border: solid 1.5px ${LIGHT_GRAY5};
      background-color: ${LIGHT_GRAY2};
    }
  `,
  label: styled.div`
    margin-left: 10px;
    font-size: 14px;
    line-height: 23px;
    letter-spacing: -0.28px;
  `,
};

export default Radio;
