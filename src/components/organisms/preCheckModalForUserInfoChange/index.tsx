import { FC, useState, useEffect } from 'react';
import { get } from 'lodash';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { TextInput } from 'src/components';
import { EInputType } from 'src/components/atoms/input';
import { TaskButton } from 'src/components';
import { useMe } from '@airpremia/core/hooks';
import { useModal } from 'src/hooks';
import { postUserPasswordCheck } from '@airpremia/core/api/user/me';

interface IProps {}

const PreCheckModalForUserInfoChange: FC<IProps> = ({}) => {
  const router = useRouter();
  const {
    meStore,
    onPreCheckModalForUserInfoChangeModifingStatus,
  } = useMe();
  const { onHideNewModal } = useModal();
  const {
    isPasswordConfirmForModifingInfomation,
  } = meStore;
  const [password, setPassword] = useState('');
  const passwordData = {
    labelData: {
      children: '비밀번호',
    },
    inputData: {
      value: password,
      target: 'password',
      type: EInputType.PASSWORD,
      placeholder: '비밀번호 입력',
      onChange: (e: any) => setPassword(e.target.value),
    },
  };

  const onClickConfirm = async () => {
    try {
      await postUserPasswordCheck(password);
      onPreCheckModalForUserInfoChangeModifingStatus(true);
    } catch (e) {
      alert(get(e, 'response.data.message'));
    }
  };

  useEffect(() => {
    if (isPasswordConfirmForModifingInfomation) {
      onHideNewModal();
      router.push('/me/change-user-infomation');
    }
  }, [isPasswordConfirmForModifingInfomation]);

  return (
    <S.container>
      <TextInput
        labelProps={passwordData.labelData}
        inputProps={passwordData.inputData}
      />
      <S.taskButton>
        <TaskButton
          onClick={onClickConfirm}
          disabled={!password}
        >
          확인
        </TaskButton>
      </S.taskButton>
      <S.forgotPassword>
        <Link href="/auth/forgot-password">
          <a>
            <u>비밀번호를 잊으셨나요?</u>
          </a>
        </Link>
      </S.forgotPassword>
    </S.container>
  );
};

const S = {
  container: styled.div``,
  taskButton: styled.div`
    margin-top: 40px;
  `,
  forgotPassword: styled.div`
    font-size: 13px;
    line-height: 24px;
    letter-spacing: -0.26px;
    font-weight: 600;
    margin-top: 80px;
  `,
};

export default PreCheckModalForUserInfoChange;
