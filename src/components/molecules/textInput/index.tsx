import { useState } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import { ifProp, prop } from 'styled-tools';

import {
  WHITE1,
  LIGHT_GRAY5,
  ORANGE1,
} from '@airpremia/cdk/styles/colors';
import { Input, XButtonRound } from 'src/components';
import { Label } from 'src/components';
import { IProps as ILabelProps } from 'src/components/atoms/label';
import {
  IProps as IInputProps,
  EInputType,
} from 'src/components/atoms/input';

import VisibleIcon from 'public/images/auth/pw_visible.png';
import InvisibleIcon from 'public/images/auth/pw_invisible.png';

export interface IStyleProps {
  /** 클릭이 되었는가? */
  isActive?: boolean;
  /** 항목을 선택한 상태 */
  isSelected?: boolean;
  /** border color */
  borderColor?: string;
  /** Label props */
  labelProps?: ILabelProps;
  /** Input props */
  inputProps: IInputProps;
}

export interface IProps extends IStyleProps {
  hasClearBtn?: boolean;
  onErase?: () => void;
  className?: string;
  children: React.ReactElement | string;
}

function TextInput({
  className,
  onErase,
  borderColor,
  hasClearBtn,
  labelProps,
  inputProps,
  children,
}: IProps) {
  const [isVisiblePassword, setVisiblePassword] = useState<
    boolean
  >(false);

  const isXButtonRoundShow =
    (hasClearBtn &&
      inputProps.value &&
      inputProps.value.length > 0) ||
    false;

  const onVisiblePwStatusChange = () =>
    setVisiblePassword(!isVisiblePassword);

  return (
    <S.container
      className={cx('textinput', {
        [className as string]: className,
      })}
      borderColor={borderColor}
    >
      <S.labelWrapper
        hasLabel={!!(labelProps && labelProps.children)}
      >
        <Label {...labelProps}>
          {labelProps && labelProps.children}
        </Label>
      </S.labelWrapper>

      <S.inputWrapper>
        <S.InputBox
          {...inputProps}
          type={
            isVisiblePassword
              ? EInputType.TEXT
              : inputProps.type
          }
        />

        {hasClearBtn && (
          <S.xButtonRoundWrapper
            className="delete-button-wrapper"
            isButtonShow={isXButtonRoundShow}
          >
            <XButtonRound onClick={onErase} />
          </S.xButtonRoundWrapper>
        )}

        <S.passwordToggleButton
          hasPasswordVisibleBtn={
            inputProps.type === EInputType.PASSWORD
          }
          onClick={onVisiblePwStatusChange}
        >
          {isVisiblePassword ? (
            <img src={VisibleIcon} alt="visibleIcon" />
          ) : (
            <img src={InvisibleIcon} alt="invisibleIcon" />
          )}
        </S.passwordToggleButton>
      </S.inputWrapper>

      <S.message className="text-input-message">
        {children} {/* warning message */}
      </S.message>
    </S.container>
  );
}

TextInput.defaultProps = {
  hasClearBtn: false,
  className: '',
  children: '',
  labelProps: Label.defaultProps,
  inputProps: Input.defaultProps,
};

const S = {
  container: styled.div<{
    borderColor: string | undefined;
  }>`
    position: relative;
    border-bottom: solid 1px
      ${prop('borderColor', LIGHT_GRAY5)};
  `,

  labelWrapper: styled.div<{ hasLabel: boolean }>`
    display: ${ifProp('hasLabel', 'block', 'none')};
  `,

  inputWrapper: styled.div`
    position: relative;
    height: 40px;
    width: 100%;
    background-color: ${WHITE1};
    outline: 0;
  `,

  InputBox: styled(Input)<IInputProps>`
    width: 85%;
    height: 100%;
  `,

  xButtonRoundWrapper: styled.div<{
    isButtonShow: boolean;
  }>`
    display: ${ifProp('isButtonShow', 'block', 'none')};
    position: absolute;
    height: 100%;
    right: 40px;
    top: 13px;

    img {
      width: 100%;
    }
  `,

  message: styled.div`
    position: absolute;
    bottom: -16px;
    font-size: 12px;
    color: ${ORANGE1};
    line-height: 11px;
  `,

  passwordToggleButton: styled.span<{
    hasPasswordVisibleBtn: boolean;
  }>`
    display: ${({ hasPasswordVisibleBtn }) =>
      hasPasswordVisibleBtn ? 'block' : 'none'};
    position: absolute;
    cursor: pointer;
    width: 26px;
    top: 8px;
    right: 0;
    img {
      width: 100%;
    }
  `,
};

export default TextInput;
