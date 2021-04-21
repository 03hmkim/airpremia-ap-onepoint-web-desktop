import styled from 'styled-components';
import { PopupTitle } from 'src/components';
import { TaskButton } from 'src/components';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {}

function PayPasswordError({}: IProps) {
  return (
    <S.container>
      <PopupTitle>
        <>
          결제 비밀번호 입력
          <br />
          5회 오류
        </>
      </PopupTitle>
      <div className="description">
        기존 비밀번호를 더이상 사용할 수 없습니다. 인증 후
        결제 비밀번호를 재설정 해주세요.
      </div>
      <div className="buttonWrapper">
        <TaskButton>인증하기</TaskButton>
      </div>
    </S.container>
  );
}

PayPasswordError.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    .description {
      padding-top: 10px;
      font-size: 14px;
      line-height: 1.71;
      letter-spacing: -0.28px;
      color: ${DARK_GRAY1};
    }
    .buttonWrapper {
      padding-top: 60px;
      font-size: 15px;
    }
  `,
};

export default PayPasswordError;
