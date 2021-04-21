import styled from 'styled-components';
import { XButtonRound } from 'src/components';
import {
  LIGHT_GRAY6,
  LIGHT_GRAY1,
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {
  children?: string;
  /** X 버튼 클릭시 */
  onClose?: () => void;
}

/**
 * X 버튼이 있는 한줄 내용 박스
 */
function OneLineBox({ children, onClose }: IProps) {
  return (
    <S.container>
      <div className="children">{children}</div>
      <div className="xButtonWrapper">
        <XButtonRound onClick={onClose} />
      </div>
    </S.container>
  );
}

OneLineBox.defaultProps = {};

const S = {
  container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
    border-radius: 8px;
    border: solid 1px ${LIGHT_GRAY6};
    background-color: ${LIGHT_GRAY1};
    .children {
      font-size: 14px;
      font-weight: 600;
      line-height: 1.45;
      letter-spacing: -0.28px;
      color: ${DARK_GRAY1};
    }
  `,
};

export default OneLineBox;
