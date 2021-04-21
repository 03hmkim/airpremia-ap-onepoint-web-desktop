import { FC, useState, Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { EInputType } from 'src/components/atoms/input';
import {
  PopupTitle,
  TextInput,
  LoginSubmenu,
  LoginTemplate,
} from 'src/components';
import { useAuth } from '@airpremia/core/hooks';
import { TaskButton } from 'src/components';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

const list = [
  { text: '이메일 찾기', href: '/auth/forgot-email' },
  {
    text: '비밀번호 찾기',
    href: '/auth/forgot-password',
  },
  { text: '회원가입', href: '/auth/signup' },
];

interface IProps {}

const Login: FC<IProps> = () => {
  const router = useRouter();
  const {
    authStore,
    handleInputDataChange,
    handleInputBlur,
    onLogin,
    onEraseField,
  } = useAuth({ isPreventAccess: true });
  const { email, password } = authStore;
  const errorStr = '이메일을 입력해주세요.';
  const [isLoginStay, setLoginStay] = useState(false);
  const [isError, setError] = useState(false);

  const onLoginStayChange = () =>
    setLoginStay(!isLoginStay);

  const onLoginSubmit = (e: any) => {
    e.preventDefault();

    if (
      email.value.length > 0 &&
      password.value.length > 0
    ) {
      onLogin(isLoginStay, router);
    } else {
      alert('email과 password를 입력하세요');
    }
  };

  const onInputBlur = () => {
    if (email.error) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const emailData = {
    value: email.value,
    target: 'email',
    type: EInputType.TEXT,
    placeholder: '이메일 입력',
    onChange: (e: any) => handleInputDataChange(e),
    onBlur: (e: any) => handleInputBlur(e),
  };

  const passwordData = {
    value: password.value,
    target: 'password',
    type: EInputType.PASSWORD,
    placeholder: '패스워드 입력',
    onChange: (e: any) => handleInputDataChange(e),
  };

  const checkboxData = {
    isActive: isLoginStay,
    onChange: onLoginStayChange,
  };

  const onErasePasswordField = () =>
    onEraseField({ key: 'password' });

  useEffect(() => {
    onInputBlur();
  }, [email, password]);

  return (
    <S.container>
      <LoginTemplate
        title={
          <PopupTitle>
            <Fragment>
              에어프레미아에
              <br />
              로그인 해주세요 :-)
            </Fragment>
          </PopupTitle>
        }
        form={
          <S.form
            autoComplete="on"
            onSubmit={onLoginSubmit}
          >
            <S.email>
              <TextInput
                borderColor={DARK_GRAY1}
                inputProps={emailData}
              >
                <S.warning>{isError && errorStr}</S.warning>
              </TextInput>
            </S.email>
            <S.password>
              <TextInput
                hasClearBtn
                borderColor={DARK_GRAY1}
                inputProps={passwordData}
                onErase={onErasePasswordField}
              />
            </S.password>
            <S.subMenu>
              <LoginSubmenu
                menuList={list}
                checkboxData={checkboxData}
              />
            </S.subMenu>
            <S.button>
              <TaskButton
                type="submit"
                onClick={onLoginSubmit}
              >
                로그인
              </TaskButton>
            </S.button>
          </S.form>
        }
      />
    </S.container>
  );
};

const S = {
  container: styled.div``,

  warning: styled.sub``,

  form: styled.form``,

  email: styled.div`
    margin-bottom: 25px;
  `,

  password: styled.div`
    margin-bottom: 30px;
  `,

  button: styled.div`
    text-align: center;
    margin-top: 60px;
    button {
      width: 300px;
      height: 50px;
    }
  `,

  subMenu: styled.div``,
};

export default Login;
