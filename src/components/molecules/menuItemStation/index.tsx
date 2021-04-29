import styled from 'styled-components';
import { ORANGE1 } from '@airpremia/cdk/styles/colors';
import { ifProp } from 'styled-tools';

interface IStyleProps {
  /** 선택 유무 */
  isSelected?: boolean;
  /** 활성화 유무 */
  disabled: boolean;
  /** 예정 유무 */
  isComing: boolean;
}
export interface IProps extends IStyleProps {
  /** 취항지명 */
  label: string;
  /** 해당 항목의 데이터 */
  id: string;
  onClick?: () => void;
}

function MenuItemStation({
  label,
  id,
  onClick,
  ...styleProps
}: IProps) {
  return (
    <S.container
      {...styleProps}
      onClick={onClick}
      data-id={id}
    >
      <S.label {...styleProps}>{label}</S.label>
      {styleProps.isComing && (
        <div className="comingSoon">Coming Soon</div>
      )}
    </S.container>
  );
}

MenuItemStation.defaultProps = {};

const S = {
  container: styled.button<IStyleProps>`
    width: 100%;
    padding: 17px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    letter-spacing: -0.28px;
    div {
      pointer-events: none;
    }
    .comingSoon {
      font-family: 'Premia', sans-serif;
      font-weight: 700;
      color: ${ORANGE1};
    }

    @media only screen and (max-width: 767px) {
      font-size: 14px;
    }

    @media only screen and (max-width: 599px) {
      padding: 10px 0;
    }
  `,
  label: styled.div<IStyleProps>`
    font-weight: 700;
    color: ${ifProp('isSelected', ORANGE1, 'inherit')};

    @media only screen and (max-width: 767px) {
      font-weight: 300;
    }
  `,
};

export default MenuItemStation;
