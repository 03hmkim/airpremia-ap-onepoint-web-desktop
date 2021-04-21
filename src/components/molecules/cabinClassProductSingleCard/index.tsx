import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { FC } from 'react';
import {
  LIGHT_GRAY8,
  BLUE1,
  ORANGE1,
  LIGHT_GRAY4,
  PALE_BLUE1,
  PALE_RED1,
  WHITE1,
  PALE_BLUE3,
  PALE_ORANGE1,
} from '@airpremia/cdk/styles/colors';
import { IFlightTicketSearchProductClass } from '@airpremia/core/api/ticket/types';
import SvgCautionGray from 'public/images/ico_caution_gray.svg';
import { addComma } from '@airpremia/core/lib/service';
import {
  PALE_BLUE2,
  PINK1,
} from '@airpremia/cdk/styles/colors';

interface IStyle {
  isSelected: boolean;
  classCode: string;
}

interface IProps extends IStyle {
  classText: string;
  productClassList: IFlightTicketSearchProductClass[];
  onChangeProductType: (key: string) => void;
}

const getSpecType = (type: string) =>
  type.toUpperCase() === 'Y'
    ? {
        name: 'Economy 35',
        seat: 89,
        bag: 1,
        wifi: 10,
      }
    : {
        name: 'Premia 42',
        seat: 106,
        bag: 2,
        wifi: 500,
      };

const CabinClassProductSingleCard: FC<IProps> = ({
  classText,
  productClassList,
  onChangeProductType,
  ...props
}) => {
  const { seat, wifi } = getSpecType(props.classCode);
  const {
    available,
    fareAvailabilityKey,
    price,
  } = productClassList[0];
  const onClick = () =>
    onChangeProductType(fareAvailabilityKey);

  return (
    <S.container {...props}>
      <S.left {...props}>
        <div className="header">
          <h4>{classText}</h4>
          {available < 10 && <sub>잔여 {available}석</sub>}
        </div>
        <div className="description">
          좌석 간격 {seat}cm · 와이파이 {wifi}MB
          {/* 수하물 {bag}개· */}
        </div>
        <div className="caution">
          <SvgCautionGray />
          <p>변경/환불 시 수수료 부과</p>
        </div>
      </S.left>

      <S.right {...props}>
        <h3>{addComma(price || 0)} 원</h3>
        <button onClick={onClick}>
          {props.isSelected ? '선택됨' : '선택'}
        </button>
      </S.right>
    </S.container>
  );
};

const S = {
  container: styled.div<IStyle>`
    padding: 34px 36px 30px 40px;
    box-sizing: border-box;
    width: 800px;
    border-radius: 12px;

    display: flex;
    justify-content: space-between;

    transition: background-color 0.2s linear;

    background-color: ${({ isSelected, classCode }) => {
      if (isSelected) {
        if (classCode.toUpperCase() === 'Y') {
          return PALE_BLUE1;
        }
        return PALE_RED1;
      }
      return WHITE1;
    }};

    border: solid 1px
      ${({ isSelected, classCode }) => {
        if (isSelected) {
          if (classCode.toUpperCase() === 'Y') {
            return PALE_BLUE3;
          }
          return PALE_ORANGE1;
        }
        return LIGHT_GRAY4;
      }};
  `,

  left: styled.div`
    .header {
      display: flex;
      align-items: flex-end;
      margin-bottom: 6px;
      h4 {
        font-size: 18px;
        line-height: 35px;
        letter-spacing: -0.36px;
        font-weight: 600;
        color: ${ifProp(
          { classCode: 'Y' || 'y' },
          BLUE1,
          ORANGE1,
        )};
      }
      sub {
        font-size: 13px;
        line-height: 28px;
        letter-spacing: -0.26px;
        margin-left: 6px;
        color: ${LIGHT_GRAY8};
      }
    }

    .description {
      font-size: 14px;
      line-height: 35px;
      letter-spacing: -0.28px;
      margin-bottom: 40px;
    }

    .caution {
      display: flex;
      align-items: center;
      p {
        margin-left: 4px;
        font-size: 12px;
        line-height: 22px;
        letter-spacing: -0.24px;
        color: ${LIGHT_GRAY8};
      }
    }
  `,

  right: styled.div<IStyle>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      font-size: 24px;
      line-height: 35px;
      letter-spacing: -0.48px;
      font-weight: 600;
      text-align: center;
    }
    button {
      width: 120px;
      height: 50px;
      border-radius: 8px;
      font-weight: 600;
      color: ${ifProp(
        { classCode: 'Y' || 'y' },
        BLUE1,
        ORANGE1,
      )};
      border: solid 1px
        ${ifProp({ classCode: 'Y' || 'y' }, BLUE1, ORANGE1)};
      font-size: 16px;
      line-height: 30px;
      letter-spacing: -0.8px;

      ${({ isSelected }) =>
        isSelected &&
        css`
          border: 0;
          background-color: ${ifProp(
            { classCode: 'Y' || 'y' },
            PALE_BLUE2,
            PINK1,
          )};
        `}
    }
  `,
};

export default CabinClassProductSingleCard;
