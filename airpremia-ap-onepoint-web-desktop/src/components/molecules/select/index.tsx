// @TODO: 2021.02.24 smartport 디자인 수정

import { useMemo } from 'react';
import styled from 'styled-components';
import { Triangle } from 'src/components';
import { EPosition } from 'src/components/atoms/arrow';
import { ifProp, prop } from 'styled-tools';
import {
  DARK_GRAY1,
  LIGHT_GRAY7,
  WHITE1,
} from '@airpremia/cdk/styles/colors';

export enum ESelectPosition {
  RIGHT,
  DOWN,
}

export interface IProps {
  /** 열리는 방향 */
  position?: ESelectPosition;
  /** 글씨 및 포지션 색상 */
  color?: string;
  /** selected 된 value의 label */
  label?: React.ReactElement | string;
  placeholder?: string;
  children?: React.ReactElement | string;
  isShowMenu?: boolean;
  menuClass?: string;
  onClick?: (e?: any) => void;
}

function Select({
  position,
  color,
  label,
  placeholder,
  children,
  isShowMenu,
  menuClass,
  onClick,
}: IProps) {
  const isLabel = !!label;
  const text = isLabel ? label : placeholder;
  const getTrianglePosition = useMemo(() => {
    switch (position) {
      case ESelectPosition.RIGHT:
        return isShowMenu
          ? EPosition.RIGHT
          : EPosition.DOWN;
      case ESelectPosition.DOWN:
        return isShowMenu ? EPosition.UP : EPosition.DOWN;
      default:
        break;
    }
  }, [isShowMenu]);
  return (
    <S.container tabIndex={0}>
      {isShowMenu && (
        <div className="dim" onClick={onClick} />
      )}
      <S.label onClick={onClick}>
        <S.text
          isLabel={isLabel}
          color={color ? color : DARK_GRAY1}
        >
          {text}
        </S.text>
        <Triangle
          position={getTrianglePosition}
          color={color}
        />
      </S.label>
      {isShowMenu && (
        <S.menu isShow={isShowMenu} className={menuClass}>{children}</S.menu>
      )}
    </S.container>
  );
}

Select.defaultProps = {
  position: ESelectPosition.RIGHT,
};

const S = {
  container: styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    background-color: transparent;
    user-select: none;

    &:focus {
      outline: none;
    }
    .dim {
      position: fixed;
      right: 0;
      bottom: 0;
      top: 0;
      left: 0;
      background-color: transparent;
      -webkit-tap-highlight-color: transparent;
      z-index: 1;
    }
    .label {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      height: 22px;
      cursor: pointer;
      > div {
        pointer-events: none;
      }
    }
    .newPosition{
      width: 100%;
      position: absolute;
      left: 0;
      top: 40px;
      &>div{
        max-height: 100px;
        overflow-y: auto;
      }
    }
  `,
  label: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 22px;
    cursor: pointer;
    > div {
      pointer-events: none;
    }
  `,
  text: styled.div<{ isLabel: boolean; color: string }>`
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.3px;
    margin-right: 5px;
    color: ${ifProp(
      'isLabel',
      prop('color', DARK_GRAY1),
      LIGHT_GRAY7,
    )};

    @media only screen and (max-width: 767px) {
      font-size: 14px;
      font-weight: 300;
    }
  `,
  menu: styled.div<{ isShow: boolean | undefined }>`
    display: ${ifProp('isShow', 'block', 'none')};
    position: relative;
    > div {
      position: absolute;
      border-radius: 16px;
      box-shadow: 30px 30px 30px 0 rgba(0, 0, 0, 0.03);
      border: solid 1px ${DARK_GRAY1};
      background-color: ${WHITE1};
      z-index: 2;
    }
  `,
};

export default Select;
