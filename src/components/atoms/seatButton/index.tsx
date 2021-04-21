import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { ESeatType } from '@airpremia/core/hooks/useSsr/seat';
import {
  LIGHT_BLUE2,
  WHITE1,
  LIGHT_GRAY7,
  ORANGE2,
  PALE_BLUE4,
  LIGHT_BLUE3,
  LIGHT_BLUE1,
  PALE_BLUE1,
  ORANGE1,
  DARK_BLUE1,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {
  backgroundColor?: string;
}
interface IProps {
  seatType: ESeatType;
  /** 승객 이름 이니셜 */
  initialName?: string;
  onClick?: (e: any) => void;
}

function SeatButton({
  seatType,
  initialName,
  onClick,
}: IProps) {
  const colorLabelBySeatType = {
    [ESeatType.COST_0]: ORANGE1,
    [ESeatType.COST_1]: ORANGE1,
    [ESeatType.COST_2]: DARK_BLUE1,
    [ESeatType.COST_3]: LIGHT_BLUE1,
    [ESeatType.COST_4]: PALE_BLUE1,
    [ESeatType.COST_5]: LIGHT_BLUE3,
    [ESeatType.COST_6]: PALE_BLUE4,
    [ESeatType.COST_7]: ORANGE1,
    [ESeatType.COST_8]: ORANGE1,
    [ESeatType.COST_9]: LIGHT_BLUE2,
    [ESeatType.COST_99]: LIGHT_BLUE3,
    [ESeatType.FREE]: LIGHT_BLUE2,
    [ESeatType.DISABLED]: LIGHT_GRAY7,
    [ESeatType.SELECTED]: ORANGE2,
    [ESeatType.BLANK]: WHITE1,
  };

  return (
    <S.container
      backgroundColor={colorLabelBySeatType[seatType]}
      disabled={
        seatType == ESeatType.BLANK ||
        seatType == ESeatType.DISABLED
      }
      onClick={onClick}
    >
      {seatType === ESeatType.SELECTED && (
        <span className="dot" />
      )}
      <div className="initial font-premia-bold">
        {initialName}
      </div>
    </S.container>
  );
}

SeatButton.defaultProps = {};

const S = {
  container: styled.button<IStyleProps>`
    box-sizing: border-box;
    position: relative;
    width: 32px;
    height: 44px;
    border-radius: 8px 8px 4px 4px;
    background-color: ${prop(
      'backgroundColor',
      LIGHT_BLUE2,
    )};
    cursor: pointer;
    > div {
      pointer-events: none;
    }
    .dot {
      position: absolute;
      top: 7px;
      left: 14px;
      width: 4px;
      height: 4px;
      border-radius: 4px;
      background-color: ${WHITE1};
    }
    .initial {
      padding-top: 5px;
      font-size: 22px;
      text-align: center;
      color: ${WHITE1};
    }
    &:disabled,
    &[disabeld] {
      cursor: default;
    }
  `,
};

export interface ISeatButtonProps extends IProps {}
export default SeatButton;
