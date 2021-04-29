import moment from 'moment';
import styled, { css } from 'styled-components';
import {
  FC,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import {
  getYear,
  getMonth,
  getDays,
  START_YEAR,
} from '@airpremia/core/lib/service';
import { Select, BirthDateSelector } from 'src/components';
import { useCommon } from '@airpremia/core/hooks';
import { ESelectPosition } from 'src/components/molecules/select';
import { EFocusTypeList } from '../birthDateSelector';
import {
  LIGHT_GRAY6,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';

interface IBirthInnerDataType {
  text: string;
  num: string;
}
export interface IBirthType {
  year: IBirthInnerDataType;
  month: IBirthInnerDataType;
  day: IBirthInnerDataType;
}

interface IProps {
  callbackBirth: (birth: IBirthType) => void;
  originalBirth?: string;
  addEndOfYear?: number;
}

const initData: IBirthInnerDataType = { text: '', num: '' };

const BirthDateSelectorGroup: FC<IProps> = ({
  callbackBirth,
  originalBirth,
  addEndOfYear,
}) => {
  const {
    commonStore: {
      language: { code },
    },
  } = useCommon();
  const [birth, setBirth] = useState<IBirthType>({
    year: initData,
    month: initData,
    day: initData,
  });
  const currYear = useMemo(() => {
    return Number(moment().format('YYYY'));
  }, []);
  const _end = addEndOfYear
    ? currYear + addEndOfYear - START_YEAR + 1
    : currYear - START_YEAR + 1;
  const yearList = getYear({ _end });
  const monthList = getMonth();
  const dayList = getDays(birth.year.num, birth.month.num);
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
    num: string;
    unique: string;
  }) => {
    setBirth((prev) => {
      return {
        ...prev,
        [params.unique]: {
          num: params.num,
          text: params.text,
        },
      };
    });
    onClickSelect(params.unique)();

    if (params.unique === 'day') {
      onDateClick(true, 'month');
    } else if (params.unique === 'month') {
      onDateClick(true, 'year');
    } else {
      onDateClick(false, 'year');
    }
  };

  useEffect(() => {
    callbackBirth(birth);
  }, [birth]);

  useEffect(() => {
    if (!!originalBirth) {
      const isKo = code === 'ko-KR';
      const [year, month, day] = moment(originalBirth)
        .format('YYYY/MM/DD')
        .split('/');
      let monthShortName: string = moment()
        .month(Number(month) - 1)
        .locale('en')
        .format('MMM');
      if (isKo) {
        monthShortName = `${moment()
          .month(Number(month) - 1)
          .locale(code)
          .format('MMM')} (${monthShortName})`;
      }

      setBirth({
        year: {
          num: year,
          text: isKo ? `${year}년` : year,
        },
        month: {
          num: month,
          text: monthShortName,
        },
        day: { num: day, text: isKo ? `${day}일` : day },
      });
    }
  }, []);

  return (
    <S.container>
      <S.selectWrapper
        isSelected={isBirthDropdownShow.day || !!birth.day}
      >
        <Select
          position={ESelectPosition.DOWN}
          label={birth.day.text || '일'}
          onClick={onClickSelect('day')}
          isShowMenu={isBirthDropdownShow.day}
        >
          <BirthDateSelector
            selectedBold
            list={dayList}
            value={birth.day.num}
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
          label={birth.month.text || '월'}
          onClick={onClickSelect('month')}
          isShowMenu={isBirthDropdownShow.month}
        >
          <BirthDateSelector
            selectedBold
            list={monthList}
            value={birth.month.num}
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
          label={birth.year.text || '년'}
          onClick={onClickSelect('year')}
          isShowMenu={isBirthDropdownShow.year}
        >
          <BirthDateSelector
            selectedBold
            focus={EFocusTypeList.YEAR}
            list={yearList}
            value={birth.year.num}
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
      height: 18px;
      border-right: solid 1px ${LIGHT_GRAY6};
      margin: 0 10px;
      width: 1px;
    }

    .label {
      justify-content: flex-start;
    }
    @media only screen and (max-width: 767px) { 
      span {
        height: 14px;
      }
    }
    @media only screen and (max-width: 599px) {
      display:block;
      span{
        display:none;
      }
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
    @media only screen and (max-width: 767px) { 
      height: 32px;
    }
  `,
};
export default BirthDateSelectorGroup;
