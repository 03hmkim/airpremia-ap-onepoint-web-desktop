import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import {
  ORANGE2,
  LIGHT_GRAY6,
  WHITE1,
  LIGHT_GRAY5,
} from '@airpremia/cdk/styles/colors';
import { Checkbox } from 'src/components';

interface IStyleProps {
  /** 포커싱 유무 */
  isFocus?: boolean;
}
interface IProps extends IStyleProps {
  /** 활성화 유무 */
  isActive: boolean;
  children: React.ReactElement | string;
  /** 체크박스 내 Select */
  select?: React.ReactElement;
  onClick: () => void;
}

function SsrCheckbox({
  isActive,
  isFocus,
  children,
  select,
  onClick,
}: IProps) {
  const isFocusLocal =
    isFocus !== undefined ? isFocus : isActive;

  return (
    <S.container isFocus={isFocusLocal} onClick={onClick}>
      <Checkbox isActive={isActive}>
        <div className="children">{children}</div>
      </Checkbox>
      {isActive && (
        <div className="selectWrapper">{select}</div>
      )}
    </S.container>
  );
}

SsrCheckbox.defaultProps = {};

const S = {
  container: styled.button<IStyleProps>`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 18px 20px;
    border-radius: 12px;
    border: 1px solid
      ${ifProp('isFocus', ORANGE2, LIGHT_GRAY6)};
    background-color: ${WHITE1};
    transition: ease-in-out 0.2s;
    .children {
      margin-left: 9px;
    }
    .selectWrapper {
      width: 186px;
      padding-left: 20px;
      border-left: 1px solid ${LIGHT_GRAY5};
    }
  `,
};

export default SsrCheckbox;
