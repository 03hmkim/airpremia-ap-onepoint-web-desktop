import styled from 'styled-components';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { Emphasis } from 'src/components';
import { IAuthState } from '@airpremia/core/stores/models/auth';
import { IMeState } from '@airpremia/core/stores/models/me';
import {
  DARK_GRAY1,
  BLUE1,
  LIGHT_GRAY8,
  LIGHT_GRAY5,
  WHITE1,
} from '@airpremia/cdk/styles/colors';


interface IDropdownLoginProps {
  authStore?: IAuthState;
  meStore?: IMeState;
  onLogout: () => void;
  onMouse: (toggle: boolean) => void;
}

function DropdownLogin({
  authStore,
  meStore,
  onMouse,
  onLogout,
}: IDropdownLoginProps) {

  return (
    <S.container
      onMouseEnter={() => onMouse(true)}
      onMouseLeave={() => onMouse(false)}
    >
      <li>
        {authStore?.isLogIn ? (
          <em>
            {meStore?.userInfo?.grade}&nbsp;{'>'}
          </em>
        ) : (
          <Link href="/auth/login">
            <a>로그인</a>
          </Link>
        )}
      </li>
      <li>
        {authStore?.isLogIn ? (
          <button onClick={onLogout}>로그아웃</button>
        ) : (
          <Link href="/auth/signup">
            <a>회원가입</a>
          </Link>
        )}
      </li>
      <S.divider />
      <li>
        <Link href={`/me`}>
          <a>나의 정보</a>
        </Link>
      </li>
      <li>
        <Link href="/checkin/find-trip">
          <a>
            <span>다가오는 여정</span>
          </a>
        </Link>
        <Emphasis />
      </li>
      <li>
        <Link href="/checkin/find-last-trip">
        {/* <Link href="/checkin/find-trip?check=1"> */}
          <a>지난 여정</a>
        </Link>
        
      </li>
      {/* <li>
        <Link href={`${router.asPath}`}>
          <a>결제 내역</a>
        </Link>
      </li> */}
      {/* <li>
        <Link href={`${router.asPath}`}>
          <span>나의 문의 내역</span>
        </Link>
        <Emphasis />
      </li> */}
    </S.container>
  );
}

DropdownLogin.defaultProps = {
  onMouse: () => {},
};

const S = {
  container: styled.ul`
    width: 160px;
    padding: 20px;
    border-radius: 8px;
    border: solid 1px ${DARK_GRAY1};
    background-color: ${WHITE1};
    box-sizing: border-box;
    li,
    button {
      display: flex;
      font-size: 16px;
      letter-spacing: -0.26px;
      color: ${LIGHT_GRAY8};
      height: 19px;
      cursor: pointer;
      &:hover {
        color: ${DARK_GRAY1};
      }
      span {
        padding-right: 1px;
      }
      em {
        font-size: 18px;
        line-height: 15px;
        letter-spacing: -0.3px;
        color: ${BLUE1};
        font-weight: 600;
        font-family: 'Premia', sans-serif;
      }
    }
    li + li {
      padding-top: 12px;
    }
  `,
  divider: styled.li`
    height: 1px !important;
    border-bottom: 1px solid ${LIGHT_GRAY5};
    margin: 15px 0 3px;
    padding-top: 0 !important;
  `,
};

export default DropdownLogin;
