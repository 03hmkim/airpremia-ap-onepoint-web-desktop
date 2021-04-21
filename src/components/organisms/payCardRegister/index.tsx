import styled from 'styled-components';
import {
  PopupTitle,
  InputCardNumber,
  InputWithLabel,
  Checkbox,
} from 'src/components';
import { LinkText1, TaskButton } from 'src/components';
import { Input } from 'src/components';

import { EInputType } from 'src/components/atoms/input';

interface IStyleProps {}
interface IProps extends IStyleProps {}

function PayCardRegister({}: IProps) {
  const checkboxProps = {
    isActive: false,
    onChange: () => {},
  };

  return (
    <S.container>
      <PopupTitle>결제 카드 등록</PopupTitle>
      <div className="inputCardNumberWrapper">
        <InputCardNumber />
      </div>
      <div className="row">
        <div className="half">
          <InputWithLabel label="유효기간">
            <S.inputWrapper>
              <Input placeholder="유효기간 입력(MM/YY)" />
            </S.inputWrapper>
          </InputWithLabel>
        </div>
        <div className="half cvcWrapper">
          <InputWithLabel
            label="CVC"
            tooltipDescription="4DBC 번호는 신용카드 번호 오른쪽 위 또는 왼쪽 위에 인쇄된 4자리 숫자를 의미합니다."
          >
            <S.inputWrapper>
              <Input placeholder="3자리 입력" />
            </S.inputWrapper>
          </InputWithLabel>
        </div>
      </div>
      <div className="row">
        <InputWithLabel label="비밀번호">
          <S.inputWrapper>
            <Input
              type={EInputType.PASSWORD}
              placeholder="비밀번호 앞 2자리 입력"
            />
          </S.inputWrapper>
        </InputWithLabel>
      </div>
      <div className="row">
        <InputWithLabel label="카드 별명">
          <S.inputWrapper>
            <Input
              type={EInputType.TEXT}
              placeholder="별명 입력 (최대 10자)"
              maxLength={10}
            />
          </S.inputWrapper>
        </InputWithLabel>
      </div>
      <div className="checkboxWrapper">
        <Checkbox {...checkboxProps}>
          카드를 저장하고 다음에도 사용합니다.
        </Checkbox>
      </div>
      <div className="buttonWrapper">
        <TaskButton disabled>결제</TaskButton>
      </div>
      <div className="linkTextWrapper">
        <LinkText1 onClick={() => {}}>
          앱카드로 결제하기
        </LinkText1>
      </div>
    </S.container>
  );
}

PayCardRegister.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    .inputCardNumberWrapper {
      padding-top: 80px;
    }
    .row {
      padding-top: 45px;
      display: flex;
      justify-content: space-between;
      .half {
        width: 185px;
      }
    }
    .checkboxWrapper {
      padding-top: 30px;
      font-size: 15px;
      font-weight: 600;
    }
    .buttonWrapper {
      padding-top: 60px;
      font-size: 15px;
    }
    .linkTextWrapper {
      padding-top: 80px;
      font-size: 13px;
    }
  `,
  inputWrapper: styled.div`
    padding: 10px 0;
  `,
};

export default PayCardRegister;
