import { FC, useState, useEffect } from 'react';
import { get } from 'lodash';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { TaskButton } from 'src/components';
import { useAuth } from '@airpremia/core/hooks';
import { useModal } from 'src/hooks';

import {
  DARK_GRAY1,
  LIGHT_GRAY8,
  DARK_BLUE1,
  LIGHT_GRAY6,
  ORANGE1,
  WHITE1,
} from '@airpremia/cdk/styles/colors';
import { PhoneAuthForm } from 'src/components';

interface IProps {
  originPhoneNumber: string;
}

const ChangePhoneNumber: FC<IProps> = ({
  originPhoneNumber,
}: IProps) => {
  const { handleLoadUserInfoData } = useAuth();
  const { onShowToastPopup, onHideNewModal } = useModal();
  const [isAllChecked, setAllChecked] = useState(false);
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [isSend, setSend] = useState(false);
  const [label, setLabel] = useState('+ 82');

  const fieldValidationCheck = () => {
    return Boolean(
      label && authCode && newPhoneNumber && isSend,
    );
  };

  const onSubmit = async (e: any) => {
    if (isAllChecked) {
      e.preventDefault();

      try {
        // @TODO: 휴대폰만 변경 할 수 있는 API 가 나와야함
        // await put_phoneNumber_change_api({
        //   phoneNumber: newPhoneNumber,
        //   countryNumber: Number(label.split(' ')[1]),
        //   authCode,
        // });

        onShowToastPopup(
          '휴대폰 번호가 성공적으로 변경되었습니다.',
        );
      } catch (e) {
        alert(get(e, 'response.data.message'));
      } finally {
        handleLoadUserInfoData();
        onHideNewModal();
      }
    }
  };

  const onSendAuthCode = (status: boolean) =>
    setSend(status);

  const onChangeValue = (e: any) => {
    const {
      dataset: { target },
      value,
    } = e.target;

    if (target === 'phoneNumber') {
      setNewPhoneNumber(value);
    } else {
      setAuthCode(value);
    }
  };

  useEffect(() => {
    setAllChecked(fieldValidationCheck());
  }, [label, authCode, newPhoneNumber, isSend]);

  return (
    <S.container>
      <S.top>
        <p>현재 사용 중인 휴대폰 번호</p>
        <b>{originPhoneNumber}</b>
      </S.top>

      <S.middle>
        <PhoneAuthForm
          tagLabel="변경할 휴대폰 번호​"
          label={label}
          onChangeLabel={setLabel}
          phoneNumber={newPhoneNumber}
          authCode={authCode}
          onChangeValue={onChangeValue}
          onSendAuthCode={onSendAuthCode}
        />
      </S.middle>

      <S.button>
        <TaskButton
          backgroundColor={
            isAllChecked ? DARK_BLUE1 : LIGHT_GRAY6
          }
          onClick={isAllChecked ? onSubmit : () => {}}
        >
          변경
        </TaskButton>
      </S.button>
    </S.container>
  );
};

const pFont = `
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.28px;
`;

const S = {
  container: styled.div`
    & > div {
      padding: 0 50px;
    }
  `,

  top: styled.div`
    margin: 80px 0 45px;
    p {
      ${pFont};
      margin-bottom: 12px;
    }
    b {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.28px;
      font-weight: 600;
    }
  `,

  middle: styled.div`
    margin-bottom: 80px;

    .textinput {
      border-bottom: solid 1px ${DARK_GRAY1};
    }
  `,

  bottom: styled.div`
    p {
      ${pFont};
      color: ${LIGHT_GRAY8};
    }
  `,

  button: styled.div`
    margin-top: 80px;
  `,

  warning: styled.sub``,

  phoneNumber: styled.div`
    margin-bottom: 40px;

    h3 {
      font-size: 14px;
      margin-bottom: 4px;
    }

    em {
      font-style: normal;
      color: ${ORANGE1};
    }

    .phone {
      display: flex;
      position: relative;
      justify-content: space-between;
      height: 40px;
      margin-bottom: 40px;
      box-sizing: border-box;

      .textinput {
        width: 100%;
      }

      .send-btn {
        position: absolute;
        padding: 0;
        top: 9px;
        right: 0;
        width: 50px;
        height: 24px;
        border-radius: 12px;
        border: solid 1px ${LIGHT_GRAY6};
        background-color: ${WHITE1};
        color: ${LIGHT_GRAY6};
        font-size: 11px;
        font-weight: 600;
        &.active {
          background-color: ${WHITE1};
          color: ${DARK_GRAY1};
        }
      }
    }

    .auth-number {
      position: relative;

      .time-guide {
        position: absolute;
        top: 15px;
        right: 0;
        p {
          font-size: 12px;
        }
        sub {
          font-size: 100%;
          bottom: 0;
          color: #0093ff;
        }
      }
    }

    .phone-number-wrapper {
      position: relative;
      sub {
        position: absolute;
        bottom: 25px;
        font-size: 12px;
        color: #0093ff;
      }
    }
  `,

  phoneArea: styled.div`
    display: flex;
  `,

  autoComplete: styled.div`
    border-bottom: solid 1px black;
    padding: 9px 0;
    margin-right: 11px;
    flex-basis: 50px;
    margin-bottom: 39px;
    font-weight: 600;
  `,

  textInput: styled.div<{ isBold: boolean }>`
    flex: 1;

    input {
      font-weight: ${ifProp('isBold', 600, 'normal')};
    }
  `,

  sendButton: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 0;
    top: 26px;
    right: 0;
    width: 50px;
    height: 24px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;

    background-color: ${WHITE1};
    color: ${DARK_GRAY1};

    border: solid 1px ${LIGHT_GRAY6};
  `,
};

export default ChangePhoneNumber;
