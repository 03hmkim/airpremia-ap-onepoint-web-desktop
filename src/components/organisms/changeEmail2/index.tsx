import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { get } from 'lodash';
// import { BLACK, WHITE, GRAY } from '@airpremia/cdk/styles/colors';
import { makeDefaultInputData } from '@airpremia/core/lib/service';
import { EInputType } from 'src/components/atoms/input';
import { TextInput } from 'src/components';
import {
  LIGHT_GRAY7,
  DARK_BLUE1,
} from '@airpremia/cdk/styles/colors';
import { TaskButton } from 'src/components';
import { ifProp } from 'styled-tools';
import { useModal } from 'src/hooks';
import { postUserCheckEmail } from '@airpremia/core/api/user/user';
import { postUserEmailAuthCode, postUserConfirmEmailAuthCode } from '@airpremia/core/api/user/auths';
interface IProps {
  onChangeNewValue: ({
    target,
    value,
  }: {
    target: string;
    value: string;
  }) => void;
}

const ChangeEmail2: FC<IProps> = ({ onChangeNewValue }) => {
  let timer: any;
  const { onShowToastPopup } = useModal();
  const [email, setEmail] = useState(
    makeDefaultInputData(''),
  );
  const [authCode, setAuthCode] = useState('');
  const [isSend, setSendStatus] = useState(0);
  const [leftTime, setLeftTime] = useState(0);
  const [isActive, setActive] = useState(false);

  const emailData = {
    labelData: {
      children: '변경할 이메일 주소',
    },
    inputData: {
      value: email.value,
      target: 'email',
      type: EInputType.TEXT,
      placeholder: '이메일 주소 입력',
      onChange: (e: any) => {
        const { value } = e.target;
        setEmail({
          ...email,
          value,
        });
      },
    },
  };

  const authCodeData = {
    labelData: {
      children: '인증번호',
    },
    inputData: {
      value: authCode,
      target: 'authCode',
      type: EInputType.NUMBER,
      placeholder: '인증번호 입력',
      onChange: (e: any) => {
        setAuthCode(e.target.value);
      },
    },
  };

  const onClickSendButton = async (e: any) => {
    e.preventDefault();

    try {
      const {
        data: { exist },
      } = await postUserCheckEmail({
        email: email.value,
      });
      if (exist) {
        onShowToastPopup('현재 사용 중인 메일 주소입니다.');
        setLeftTime(0);
        setSendStatus(0);
      } else {
        await postUserEmailAuthCode({
          email: email.value,
        });
        setLeftTime(179);
        setSendStatus(1);
      }
    } catch (e) {
      alert(get(e, 'response.data.message'));
    }
  };

  const onClickButton = async (e: any) => {
    e.preventDefault();
    try{
      const {
        data: { emailAuthToken },
      } = await postUserConfirmEmailAuthCode({
        email: email.value,
        authCode: authCode,
      });
      console.log("emailAuthToken : ", emailAuthToken);
      // 인증토큰 확인
      onChangeNewValue({
        target: 'email',
        value: email.value,
      });
      onChangeNewValue({
        target: 'emailAuthToken',
        value: emailAuthToken,
      });
    } catch (e) {
      alert(get(e, 'response.data.message'));
    }
    
  };

  console.log("authCode : ",authCode);

  useEffect(() => {
    timer =
      leftTime > 0 &&
      setInterval(() => setLeftTime(leftTime - 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [leftTime]);

  useEffect(() => {
    if (email.value && authCode && isSend > 0) {
      return setActive(true);
    } else {
      return setActive(false);
    }
  }, [email, authCode, isSend]);

  return (
    <S.container>
      <form onSubmit={onClickSendButton}>
        <S.newEmail>
          <TextInput
            labelProps={emailData.labelData}
            inputProps={emailData.inputData}
          />
          <S.emailDirection>
            {isSend ? (
              <p>
                입력한 메일로 인증번호를 전송했습니다. 메일
                안의 인증번호를 입력해주세요.
              </p>
            ) : null}
          </S.emailDirection>
        </S.newEmail>

        <S.sendButton
          type="submit"
          onClick={onClickSendButton}
        >
          {/* <button > */}
          {!isSend
            ? '인증메일 전송'
            : `재전송 (${moment
                .utc(leftTime * 1000)
                .format('mm:ss')})`}
          {/* </button> */}
        </S.sendButton>
      </form>

      <form onSubmit={onClickButton}>
        <S.authCode isShow={!!isSend}>
          <TextInput
            labelProps={authCodeData.labelData}
            inputProps={authCodeData.inputData}
          />
        </S.authCode>

        <S.submitButton>
          <TaskButton
            type="submit"
            disabled={!isActive}
            onClick={onClickButton}
          >
            확인
          </TaskButton>
        </S.submitButton>
      </form>
    </S.container>
  );
};

const S = {
  container: styled.div`
    padding: 40px 50px 0;

    input {
      font-weight: 600;
      &::placeholder {
        font-weight: normal;
      }
    }
  `,
  newEmail: styled.div``,
  emailDirection: styled.div`
    padding: 5px 0 30px;
    height: 18px;
    p {
      font-size: 12px;
      line-height: 20px;
      letter-spacing: -0.24px;
      color: ${LIGHT_GRAY7};
    }
  `,
  sendButton: styled.button`
    height: 50px;
    border-radius: 8px;
    border: solid 1px ${DARK_BLUE1};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -0.8px;
    color: ${DARK_BLUE1};
    width: 100%;
  `,
  authCode: styled.div<{ isShow: boolean }>`
    margin-top: 40px;
    opacity: ${ifProp('isShow', 1, 0)};
    transition: opacity 0.5s linear;
  `,

  submitButton: styled.div`
    margin-top: 80px;
  `,
};

export default ChangeEmail2;
