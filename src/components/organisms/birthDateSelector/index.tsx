import * as React from 'react';
import { useEffect, useRef } from 'react';
import map from 'lodash/map';
import styled, { css } from 'styled-components';

import {
  WHITE1,
  LIGHT_GRAY1,
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';
import { getScrollTopPosition } from '@airpremia/core/lib/service';

export enum EFocusTypeList {
  DAY = 'day',
  MONTH = 'month',
  YEAR = 'year',
}

export interface IList {
  text: string;
  num: string;
  unique: string;
}

interface IHandleChangeProps {
  (target: IList): void;
}

interface IProps {
  selectedBold?: boolean;
  isShow: boolean;
  list: IList[];
  value: string;
  focus?: EFocusTypeList;
  onChange: IHandleChangeProps;
  target?: string;
}

const DropdownBirthDate: React.FC<IProps> = (props) => {
  const initialValue = document.getElementById(
    'item-group',
  );
  const containerRef = useRef(initialValue);
  const {
    selectedBold = false,
    value,
    focus,
    list = [],
    onChange,
  } = props;

  const onItemChange = (e: any): void => {
    e.preventDefault();
    onChange(e.target.dataset);
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = getScrollTopPosition(
        value,
        focus,
      );
    }
  }, []);

  return (
    <S.container
      id="item-group"
      ref={containerRef}
      data-position="80"
    >
      {map(list, ({ text, num, unique }, i) => {
        const isSelected = selectedBold && text === value;

        return (
          <S.item
            isSelected={isSelected}
            key={`${i.toString()}${unique}`}
            data-text={text}
            data-num={num}
            data-unique={unique}
            onClick={onItemChange}
          >
            <p>{text}</p>
          </S.item>
        );
      })}
    </S.container>
  );
};

const S = {
  container: styled.div<{ ref: any }>`
    position: absolute;
    top: 10px;
    left: -10px;
    min-width: 126px;
    background-color: ${WHITE1};
    border-radius: 8px;
    border: solid 1px ${DARK_GRAY1};
    box-sizing: border-box;
    z-index: 81;
    width: 154px;
    height: 480px;
    overflow: auto;
    padding: 15px 0;

    div {
      height: 50px;
      display: flex;
      align-items: center;
      &:hover {
        p {
          background-color: ${LIGHT_GRAY1};
        }
      }
    }

    p {
      width: 100%;
      color: ${DARK_GRAY1};
      pointer-events: none;
      padding: 15px 25px;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.28px;
    }
  `,

  wrapper: styled.div`
    select {
      width: 46px;
      background: none;
      border: 0;
      border-radius: 0;
      appearance: none;
      &::-ms-expand {
        display: none;
      }
      &::after {
        content: '';
      }
    }
  `,

  arrow: styled.div`
    width: 20px;
    height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    display: inline-block;

    span {
      transition: all 0.4s;
      position: absolute;
      top: calc(50% - 1px);
      left: 3px;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid ${DARK_GRAY1};
      &.arrow-down {
        transform: rotate(180deg);
      }
      &.arrow-up {
        transform: rotate(0);
      }
    }
  `,

  item: styled.div<{ isSelected: boolean }>`
    ${({ isSelected }) =>
      isSelected &&
      css`
        p {
          font-weight: bold;
          color: ${DARK_GRAY1};
        }
      `}
  `,
};

export default DropdownBirthDate;
