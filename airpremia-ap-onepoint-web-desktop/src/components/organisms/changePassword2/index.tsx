import { FC, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useBookingLocal, useModal } from 'src/hooks';
import { useMe } from '@airpremia/core/hooks';
import { makeDefaultInputData } from '@airpremia/core/lib/service';
import { EInputType } from 'src/components/atoms/input';
import {
  checkPasswordPartially,
  checkInputForm,
} from '@airpremia/core/lib/auth';
import { TextInput } from 'src/components';
import { ifProp } from 'styled-tools';
import {
  BLUE1,
  ORANGE1,
  DARK_GRAY1,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';
import { TaskButton } from 'src/components';

interface IProps {}

const ChangePassword2: FC<IProps> = ({}) => {
  const {
    meStore,
    onChangePassword,
    onInitPasswordUpdateStatus,
  } = useMe();
  const { isPasswordUpdateSuccess } = meStore;
  const { onBlurLocalInputData } = useBookingLocal();
  const { onHideNewModal } = useModal();
  const [buttonStatus, onChangeButtonStatus] = useState<
    boolean
  >(false);

  const [currPassword, setCurrPassword] = useState(
    makeDefaultInputData(''),
  );
  const [password, setPassword] = useState(
    makeDefaultInputData(''),
  );
  const [newPassword, setNewPassword] = useState(
    makeDefaultInputData(''),
  );

  const [isLeavePwInput, setLeavePwInputStatus] = useState(
    false,
  );
  const [pwErrorStatus, setPwErrorStatus] = useState([
    false,
    false,
    false,
    false,
  ]);

  console.log("mestore : ", meStore);

  const currPasswordData = {
    labelData: {
      fontSize: '14px',
      children: '현재 비밀번호',
    },
    inputData: {
      value: currPassword.value,
      target: 'currPassword',
      type: EInputType.PASSWORD,
      placeholder: '현재 비밀번호',
      onChange: (e: any) => {
        const { value } = e.target;
        return setCurrPassword({
          ...currPassword,
          value,
        });
      },
      onBlur: (e: any) => {
        const { target } = e.target.dataset;
        const res = onBlurLocalInputData({
          target,
          data: currPassword,
        });
        setCurrPassword(res);
      },
    },
  };


  const passwordData = {
    labelData: {
      fontSize: '14px',
      children: '새 비밀번호',
    },
    inputData: {
      value: password.value,
      target: 'password',
      type: EInputType.PASSWORD,
      placeholder: '새 비밀번호 입력',
      onChange: (e: any) => {
        const { value } = e.target;
        setLeavePwInputStatus(false);
        setPwErrorStatus(checkPasswordPartially(value));
        return setPassword({
          ...password,
          value,
        });
      },
      onBlur: (e: any) => {
        const { target } = e.target.dataset;
        setLeavePwInputStatus(true);
        const res = onBlurLocalInputData({
          target,
          data: password,
        });
        setPassword(res);
      },
    },
  };
  const newPasswordData = {
    labelData: {
      fontSize: '14px',
      children: '새 비밀번호 확인',
    },
    inputData: {
      value: newPassword.value,
      target: 'newPassword',
      type: EInputType.PASSWORD,
      placeholder: '새 비밀번호 재입력',
      onChange: (e: any) => {
        const { value } = e.target;
        return setNewPassword({
          ...newPassword,
          value,
        });
      },
      onBlur: (e: any) => {
        const { target } = e.target.dataset;
        const res = onBlurLocalInputData({
          target,
          data: newPassword,
        });
        setNewPassword(res);
      },
    },
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    onChangePassword({
      password: currPassword.value,
      newPassword: newPassword.value,
    });
  };

  useEffect(() => {
    const allChecked = pwErrorStatus.reduce(
      (acc, it) => acc && it,
      true,
    );
    if (
      checkInputForm(password) &&
      password.value === newPassword.value &&
      allChecked
    ) {
      onChangeButtonStatus(true);
    } else {
      onChangeButtonStatus(false);
    }
  }, [password, newPassword, pwErrorStatus]);

  useEffect(() => {
    if (isPasswordUpdateSuccess) {
      onHideNewModal();
      onInitPasswordUpdateStatus();
    }
  }, [isPasswordUpdateSuccess]);

  return (
    <S.container>
      <form onSubmit={onSubmit}>
        <S.textInputWrapper>
          <TextInput
            labelProps={currPasswordData.labelData}
            inputProps={currPasswordData.inputData}
          />
          <TextInput
            labelProps={passwordData.labelData}
            inputProps={passwordData.inputData}
          >
            <S.pwWrapper
              isValid={pwErrorStatus.indexOf(false) < 0}
            >
              <S.pwWarning
                status={pwErrorStatus[0]}
                fillError={isLeavePwInput}
              >
                영문
              </S.pwWarning>
              <S.pwWarning
                status={pwErrorStatus[1]}
                fillError={isLeavePwInput}
              >
                숫자
              </S.pwWarning>
              <S.pwWarning
                status={pwErrorStatus[2]}
                fillError={isLeavePwInput}
              >
                특수문자
              </S.pwWarning>
              <S.pwWarning
                status={pwErrorStatus[3]}
                fillError={isLeavePwInput}
              >
                8~20자
              </S.pwWarning>
            </S.pwWrapper>
          </TextInput>
          <TextInput
            labelProps={newPasswordData.labelData}
            inputProps={newPasswordData.inputData}
          />
        </S.textInputWrapper>
        <S.button>
          <TaskButton
            disabled={!buttonStatus}
            onClick={onSubmit}
            type="submit"
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
    padding: 40px 50px 0 50px;
  `,

  textInputWrapper: styled.div`
    & > div:first-of-type {
      margin-bottom: 68px;
    }
  `,

  pwWrapper: styled.div<{ isValid: boolean }>`
    top: 5px;
    position: relative;
    & > sub {
      color: ${ifProp('isValid', BLUE1)};
      font-size: 100%;

      &:not(:first-of-type) {
        margin-left: 10px;
      }
    }
  `,

  pwWarning: styled.sub<{
    status: boolean;
    fillError: boolean;
  }>`
    ${({ status, fillError }) => {
      if (fillError) {
        if (!status) {
          return css`
            color: ${ORANGE1};
          `;
        }
      } else {
        if (status) {
          return css`
            color: ${DARK_GRAY1};
          `;
        }
      }
      return css`
        color: ${LIGHT_GRAY7};
      `;
    }};
  `,

  button: styled.div`
    margin-top: 80px;
  `,
};

export default ChangePassword2;
