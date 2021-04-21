import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import {
  PopupTitle,
  TextInput,
  Checkbox,
} from 'src/components';
import { useAuth } from '@airpremia/core/hooks';
import {
  BLUE1,
  LIGHT_GRAY8,
} from '@airpremia/cdk/styles/colors';
import { EInputType } from 'src/components/atoms/input';
import { useModal } from 'src/hooks';
import { TaskButton } from 'src/components';
import { EModalType } from '@airpremia/core/stores/models/ui';

const RegisteredUser: React.FC = () => {
  const router = useRouter();
  const {
    authStore,
    handleInputDataChange,
    handleInputBlur,
    onEraseField,
    onLogin,
  } = useAuth();
  const { email, password } = authStore;
  const { onHideModal } = useModal();
  const [isLoginStay, setLoginStay] = useState(false);

  const inputData = {
    value: password.value,
    target: 'password',
    type: EInputType.PASSWORD,
    placeholder: '비밀번호 입력',
    onChange: (e: any) => handleInputDataChange(e),
    onBlur: (e: any) => handleInputBlur(e),
  };

  const onHide = () =>
    onHideModal({ type: EModalType.MODAL });

  const getEmail = (email: string) => {
    const [id, address] = email.split('@');

    return `${id.slice(0, 3)}${Array(id.length - 3)
      .fill('*')
      .join('')}@${address}`;
  };

  const onLoginStayChange = () =>
    setLoginStay(!isLoginStay);

  const checkboxData = {
    isActive: isLoginStay,
    onChange: onLoginStayChange,
  };

  const onClickLogin = () => {
    onLogin(isLoginStay, router);
  };

  useEffect(() => {
    onEraseField({ key: 'password' });
  }, []);

  return (
    <S.container>
      <S.header>
        <S.popupTitle>
          <PopupTitle>
            <Fragment>
              회원님의 이메일로
              <br />
              가입한 계정이 있습니다.
            </Fragment>
          </PopupTitle>
        </S.popupTitle>
        <S.email>
          {email.value && getEmail(email.value)}
        </S.email>
        <S.description>
          계정의 비밀번호를 입력해주세요.
        </S.description>
      </S.header>

      <S.body>
        <S.textInput>
          <TextInput inputProps={inputData} />
        </S.textInput>
        <S.subMenu className="sub-menu">
          <div>
            <Checkbox {...checkboxData}>
              <p>로그인 상태 유지</p>
            </Checkbox>
          </div>
          <div>
            <Link href={'/auth/forgot-password'}>
              <a>비밀번호 찾기</a>
            </Link>
          </div>
        </S.subMenu>
        <S.button>
          <TaskButton
            onClick={onClickLogin}
            disabled={password.value.length === 0}
          >
            로그인
          </TaskButton>
        </S.button>
        <S.anotherAccount>
          <u onClick={onHide}>다른 계정으로 회원가입</u>
        </S.anotherAccount>
      </S.body>
    </S.container>
  );
};

const font = `
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.28px;
`;

const S = {
  container: styled.div`
    width: 380px;
    padding: 50px;
  `,

  header: styled.div`
    margin-bottom: 94px;
  `,

  popupTitle: styled.div`
    margin-bottom: 10px;
  `,

  email: styled.div`
    ${font};
    color: ${BLUE1};
    margin-bottom: 5px;
  `,

  description: styled.div`
    font-weight: 600;
  `,

  body: styled.div``,

  textInput: styled.div`
    margin-bottom: 25px;
  `,

  subMenu: styled.div`
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;

    p {
      font-size: 14px;
      line-height: 23px;
      letter-spacing: -0.28px;
      font-weight: 600;
    }
    a {
      font-size: 13px;
      line-height: 23px;
      letter-spacing: -0.26px;
      color: ${LIGHT_GRAY8};
    }
  `,

  button: styled.div`
    margin-bottom: 75px;
  `,

  anotherAccount: styled.div`
    font-size: 13px;
    line-height: 24px;
    letter-spacing: -0.26px;
    font-weight: 600;
    u {
      cursor: pointer;
    }
  `,
};

export default RegisteredUser;
