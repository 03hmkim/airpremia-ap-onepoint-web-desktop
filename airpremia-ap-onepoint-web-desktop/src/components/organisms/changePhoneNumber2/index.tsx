import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { PhoneAuthForm } from 'src/components';
import { TaskButton } from 'src/components';
import { postUserConfirmPhoneAuthCode } from '@airpremia/core/api/user/user';

interface IProps {
  onChangeNewValue: ({
    target,
    value,
  }: {
    target: string;
    value: string;
  }) => void;
}

const ChangePhoneNumber2: FC<IProps> = ({
  onChangeNewValue,
}) => {
  const [label, setLabel] = useState('+ 82');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [isSend, setSend] = useState(false);
  const [isActive, setActive] = useState(false);
  const [authCompleted, setAuthCompleted] = useState(false);

  const onChangeValue = (e: any) => {
    const {
      dataset: { target },
      value,
    } = e.target;

    if (target === 'phoneNumber') {
      setPhoneNumber(value);
    } else {
      setAuthCode(value);
    }
  };

  const onSendAuthCode = (status: boolean) => {
    setAuthCompleted(false);

    setSend(status);
  };

  const onClickButton = async (e: any) => {
    e.preventDefault();

    const countryNumber = Number(label.split(' ')[1]);

    try {
      const {
        data: { phoneAuthToken },
      } = await postUserConfirmPhoneAuthCode({
        phoneNumber,
        countryNumber,
        authCode,
      });
      setAuthCompleted(true);
      onChangeNewValue({
        target: 'phone',
        value: `${countryNumber}|${phoneNumber}`,
      });
      onChangeNewValue({
        target: 'phoneAuthToken',
        value: phoneAuthToken,
      });
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  useEffect(() => {
    if (isSend && phoneNumber && authCode) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [isSend, phoneNumber, authCode]);

  return (
    <S.container>
      <form onSubmit={onClickButton}>
        <PhoneAuthForm
          forceStopTimer={authCompleted}
          tagLabel="변경할 휴대폰 번호​"
          label={label}
          onChangeLabel={setLabel}
          phoneNumber={phoneNumber}
          authCode={authCode}
          onChangeValue={onChangeValue}
          onSendAuthCode={onSendAuthCode}
        />

        <S.button>
          <TaskButton
            type="submit"
            disabled={!isActive}
            onClick={onClickButton}
          >
            확인
          </TaskButton>
        </S.button>
      </form>
    </S.container>
  );
};

const S = {
  container: styled.div`
    padding: 40px 50px 0;
  `,

  button: styled.div`
    margin-top: 80px;
  `,
};

export default ChangePhoneNumber2;
