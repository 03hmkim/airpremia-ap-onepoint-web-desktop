import React, { FC, useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';

import BirthDateSelector, { EFocusTypeList } from '.';
import { Select } from 'src/components';
import {
  getYear,
  getMonth,
  getDays,
} from '@airpremia/core/lib/service';
import { ESelectPosition } from 'src/components/molecules/select';
import {
  LIGHT_GRAY6,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';

export default {
  title: 'desktop / Organisms / BirthDateSelector',
  component: BirthDateSelector,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'BirthDateSelector',
  },
};

export const 생년월일드롭다운셀렉터: FC = () => {
  const [birth, setBirth] = useState({
    year: '',
    month: '',
    day: '',
  });
  const yearList = getYear({});
  const monthList = getMonth();
  const dayList = getDays(birth.year, birth.month);
  const [isBirthDropdownShow, setBirthDropdown] = useState<{
    [target: string]: boolean;
  }>({
    year: false,
    month: false,
    day: false,
  });

  const onDateClick = useCallback(
    (status: boolean, target: string) => {
      setBirthDropdown((prevState) => ({
        ...prevState,
        [target]: status,
      }));
    },
    [],
  );

  const onClickSelect = (target: string) => () => {
    setBirthDropdown((prevState) => ({
      ...prevState,
      [target]: !prevState[target],
    }));
  };

  const onBirthChange = (params: {
    text: string;
    unique: string;
  }) => {
    setBirth((prev) => ({
      ...prev,
      [params.unique]: params.text,
    }));
    onClickSelect(params.unique)();

    if (params.unique === 'day') {
      onDateClick(true, 'month');
    } else if (params.unique === 'month') {
      onDateClick(true, 'year');
    } else {
      onDateClick(false, 'year');
    }
  };

  return (
    <S.container>
      <S.selectWrapper
        isSelected={isBirthDropdownShow.day || !!birth.day}
      >
        <Select
          position={ESelectPosition.DOWN}
          label={birth.day || '일'}
          onClick={onClickSelect('day')}
          isShowMenu={isBirthDropdownShow.day}
        >
          <BirthDateSelector
            selectedBold
            list={dayList}
            value={birth.day}
            isShow={isBirthDropdownShow.day}
            onChange={onBirthChange}
          />
        </Select>
      </S.selectWrapper>
      <span />
      <S.selectWrapper
        isSelected={
          isBirthDropdownShow.month || !!birth.month
        }
      >
        <Select
          position={ESelectPosition.DOWN}
          label={birth.month || '월'}
          onClick={onClickSelect('month')}
          isShowMenu={isBirthDropdownShow.month}
        >
          <BirthDateSelector
            selectedBold
            list={monthList}
            value={birth.month}
            isShow={isBirthDropdownShow.month}
            onChange={onBirthChange}
          />
        </Select>
      </S.selectWrapper>
      <span />
      <S.selectWrapper
        isSelected={
          isBirthDropdownShow.year || !!birth.year
        }
      >
        <Select
          position={ESelectPosition.DOWN}
          label={birth.year || '년'}
          onClick={onClickSelect('year')}
          isShowMenu={isBirthDropdownShow.year}
        >
          <BirthDateSelector
            selectedBold
            focus={EFocusTypeList.YEAR}
            list={yearList}
            value={birth.year}
            isShow={isBirthDropdownShow.year}
            onChange={onBirthChange}
          />
        </Select>
      </S.selectWrapper>
    </S.container>
  );
};

const S = {
  container: styled.div`
    display: flex;
    align-items: center;

    span {
      height: 15px;
      border-right: solid 1px ${LIGHT_GRAY6};
      margin: 0 10px;
      width: 1px;
    }

    .label {
      justify-content: flex-start;
    }
  `,

  selectWrapper: styled.div<{ isSelected: boolean }>`
    width: 130px;
    height: 42px;
    display: flex;
    align-items: center;
    cursor: pointer;

    ${({ isSelected }) =>
      !isSelected &&
      css`
        .label > div {
          color: ${LIGHT_GRAY7};
        }
        .triangle {
          path:nth-child(2) {
            fill: ${LIGHT_GRAY7};
          }
        }
      `}
  `,
};
