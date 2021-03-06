import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useModal } from 'src/hooks';
import { useAuth } from '@airpremia/core/hooks';
import { LoginShortcutBox } from 'src/components';
import EmailIcon from 'public/images/ico_saved_email.svg';
import {
  getSavedUserEmail,
  initToken,
} from '@airpremia/core/lib/storage';
import { EModalType } from '@airpremia/core/stores/models/ui';
import { LIGHT_GRAY8, DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

interface IProps {}

const SavedLoginInfoPopup: FC<IProps> = ({}: IProps) => {
  const router = useRouter();
  const { handleLoadUserInfoData } = useAuth();
  const { onHideModal } = useModal();
  const [email, setEmail] = useState('');
  const onHideModalInterceptor = () =>
    onHideModal({ type: EModalType.MODAL });
  const clearSession = async () => {
    await initToken();
    onHideModalInterceptor();
  };
  const onLoadUserInfoData = () => {
    handleLoadUserInfoData();
    onHideModalInterceptor();
  };
  const onClickAnotherAccount = () => {
    clearSession();
    router.push('/auth/login');
  };

  useEffect(() => {
    setEmail(getSavedUserEmail());
  }, []);

  return (
    <S.container>
      <S.title className="font-premia-bold">
        LIFE IS A JOURNEY!
      </S.title>
      <S.description>
        에어프레미아에 오신 것을 환영합니다.
      </S.description>
      <S.loginShortcutBox>
        <LoginShortcutBox
          icon={<EmailIcon />}
          email={email}
          onClick={onLoadUserInfoData}
          onClickXButton={clearSession}
        />
      </S.loginShortcutBox>
      <S.anotherAccount>
        <p>다른계정이 있으신가요?</p>
        &nbsp;
        <u onClick={onClickAnotherAccount}>
          다른 계정으로 로그인하기
        </u>
      </S.anotherAccount>
    </S.container>
  );
};

const S = {
  container: styled.div`
    max-width: 480px;
    padding: 50px;
  `,

  title: styled.div`
    font-size: 36px;
    line-height: 38px;
    letter-spacing: -0.72px;
    margin-bottom: 5px;
    padding-right: 20px;
  `,

  description: styled.div`
    font-size: 18px;
    line-height: 20px;
    letter-spacing: -0.28px;
    font-weight: 600;
    margin-bottom: 100px;

    @media only screen and (max-width: 767px) {
      margin-bottom: 40px;      
      font-size: 14px;
    }
  `,

  loginShortcutBox: styled.div`
    cursor: pointer;
  `,

  anotherAccount: styled.div`
    display: flex;
    margin-top: 30px;
    color: ${LIGHT_GRAY8};
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.26px;

    u {
      font-weight: 600;
      cursor: pointer;
    }

    @media only screen and (max-width: 767px) {
      display: block;      
      color: ${DARK_GRAY1};
      font-size: 13px;
    }
  `,
};

export default SavedLoginInfoPopup;
