import styled from 'styled-components';
import { PopupTitle } from 'src/components';
import { LinkText1 } from 'src/components';
import { Input } from 'src/components';
import {
  LIGHT_GRAY7,
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';
import { EInputType } from 'src/components/atoms/input';
import SvgKeypad from 'public/images/keypad.svg';

interface IStyleProps {}
interface IProps extends IStyleProps {
  /** 팝업 타이틀 */
  popupTitleLabel: string;
  /** 팝업 설명 */
  description: string;
  /** 결제 비밀번호 확인 팝업인 경우 */
  isConfirm?: boolean;
}

function PayPasswordInput({
  popupTitleLabel,
  description,
  isConfirm,
}: IProps) {
  return (
    <S.container>
      <PopupTitle>{popupTitleLabel}</PopupTitle>
      <div className="description">{description}</div>
      <div className="inputWrapper">
        <Input type={EInputType.PASSWORD} />
      </div>
      {isConfirm && (
        <div className="resetWrapper">
          <div className="label">
            결제 비밀번호를 잊어버리셨나요?
          </div>
          {/* TODO 재설정 버튼 기능 */}
          <div className="linkTextWrapper">
            <LinkText1 onClick={() => {}}>
              결제 비밀번호 재설정
            </LinkText1>
          </div>
        </div>
      )}
      <div className="keypadWrapper">
        <SvgKeypad />
      </div>
    </S.container>
  );
}

PayPasswordInput.defaultProps = {
  popupTitleLabel: '결제 비밀번호',
  description:
    '결제에 사용할 6자리 비밀번호를 입력해주세요.',
  isConfirm: false,
};

const S = {
  container: styled.div<IStyleProps>`
    .description {
      padding-top: 10px;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.71;
      letter-spacing: -0.28px;
      color: ${LIGHT_GRAY7};
    }
    .inputWrapper {
      padding: 89px 0 15px;
      border-bottom: 1px solid ${DARK_GRAY1};
      margin-bottom: 129px;
    }
    .resetWrapper {
      display: flex;
      align-items: center;
      padding-bottom: 30px;
      .label {
        padding-right: 10px;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: -0.26px;
        color: ${LIGHT_GRAY7};
      }
      .linkTextWrapper {
        font-size: 13px;
      }
    }
    .keypadWrapper {
      svg {
        width: 100%;
      }
    }
  `,
};

export default PayPasswordInput;
