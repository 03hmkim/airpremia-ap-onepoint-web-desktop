import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import {
  DARK_BLUE1,
  WHITE1,
  DARK_GRAY1,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {
  isActive?: boolean;
}
interface IProps<T> extends IStyleProps {
  /** 승객 이름 */
  name: string;
  /** 승객이 선택한 부가서비스명 */
  label: string | React.ReactElement;
  value: T;
  onClick?: (e: any) => void;
}

function PassengerButton<T>({
  isActive,
  name,
  label,
  value,
  onClick,
}: IProps<T>) {
  return (
    <S.container
      isActive={isActive}
      onClick={onClick}
      data-value={value}
    >
      <div className="name font-premia-bold">
        {name.toUpperCase()}
      </div>
      <div className="label">{label}</div>
    </S.container>
  );
}

PassengerButton.defaultProps = {};

const S = {
  container: styled.button<IStyleProps>`
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    padding: 10px 15px 9px;
    margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0px;
      }
    font-family: 'NotoSans';
    font-weight: 700;
    border-radius: 8px;
    background-color: ${ifProp(
      'isActive',
      DARK_BLUE1,
      WHITE1,
    )};
    color: ${ifProp('isActive', WHITE1, DARK_GRAY1)};
    text-align: left;
    > div {
      pointer-events: none;
    }
    .name {
      font-size: 21px;
      font-family: 'Premia';
      font-weight: 700;
      letter-spacing: -0.36px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    /** TODO CSS 약간 안맞음(라벨 밑 패딩) */
    .label {
      display: flex;
      height: 20px;
      padding-top: 3px;
      font-size: 18px;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: -0.26px;
      .orange {
        color: ${ifProp('isActive', WHITE1, ORANGE2)};
        max-width: 95px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    @media only screen and (max-width: 1059px) {
      &:last-child {
        margin-bottom: 0px;
      }
      > div {

      }
    }

    @media only screen and (max-width: 767px) {
      width: calc(33.33% - 7px);
      min-width: 110px;
      margin-right: 10px;
      float: left;

      .name {
        font-size: 18px;
      }
      
      .label {
        font-size: 14px;
      }

      &:nth-child(3) {
        margin-right: 0;
      }
      &:nth-child(6) {
        margin-right: 0;
      }
      &:nth-child(7) {
        margin-bottom: 0;
      }
      &:nth-child(8) {
        margin-bottom: 0;
      }
      &:nth-child(9) {
        margin-right: 0;
        margin-bottom: 0;
      }
    }


    @media only screen and (max-width: 479px) {
      width: calc(50% - 5px);
      &:nth-child(2) {
        margin-right: 0;
      }
      &:nth-child(3) {
        margin-right: 10px;
      }
      &:nth-child(4) {
        margin-right: 0;
        margin-bottom: 10px;
      }
      &:nth-child(7) {
        margin-right: 10px;
        margin-bottom: 10px;
      }
      &:nth-child(8) {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }
  `,
};

export default PassengerButton;
