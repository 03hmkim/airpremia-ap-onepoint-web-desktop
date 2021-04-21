import styled from 'styled-components';
import {
  WHITE1,
  LIGHT_GRAY5,
} from '@airpremia/cdk/styles/colors';

import { Modal } from 'src/components';

export interface IProps {
  /** 첫번째 버튼 이벤트 */
  onClickFirstButton?: () => void;
  /** 두번째 버튼 이벤트 */
  onClickSecondButton?: () => void;
  /** 첫번째 버튼 텍스트 */
  firstButtonText?: string;
  /** 두번째 버튼 텍스트 */
  secondButtonText?: string;
  /** children */
  children?: React.ReactElement | string;
}

function PageoutAlert({
  onClickFirstButton,
  onClickSecondButton,
  children,
}: IProps) {
  return (
    <Modal>
      <S.container>
        <S.body>{children}</S.body>
        <S.buttonWrapper>
          <button onClick={onClickFirstButton}>
            <p>확인</p>
          </button>
          <button onClick={onClickSecondButton}>
            <p>취소</p>
          </button>
        </S.buttonWrapper>
      </S.container>
    </Modal>
  );
}

PageoutAlert.defaultProps = {
  onClickFirstButton: () => {},
  onClickSecondButton: () => {},
};

const S = {
  container: styled.div`
    width: 485px;
    height: 330px;
    border-radius: 12px;
    background-color: ${WHITE1};
  `,

  body: styled.div`
    padding: 50px 50px 20px 50px;
    box-sizing: border-box;
    height: calc(100% - 61px);
  `,

  buttonWrapper: styled.div`
    display: flex;
    flex: 1;
    height: 60px;
    border-top: solid 1px ${LIGHT_GRAY5};
    position: absolute;
    width: 100%;
    bottom: 0;

    button {
      flex: 1;
      &:first-of-type {
        p {
          border-right: solid 1px ${LIGHT_GRAY5};
        }
      }
    }
  `,
};

export default PageoutAlert;
