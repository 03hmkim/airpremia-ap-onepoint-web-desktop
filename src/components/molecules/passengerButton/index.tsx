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
    height: 60px;
    box-sizing: border-box;
    padding: 10px 15px 9px;
    font-weight: bold;
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
      font-size: 18px;
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
      font-size: 13px;
      font-weight: 600;
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
  `,
};

export default PassengerButton;
