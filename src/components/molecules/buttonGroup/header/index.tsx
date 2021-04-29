// TODO 로그인 상태의 DOM 변경
import React from 'react';
import styled from 'styled-components';
// import { Triangle } from 'src/components';
// import { EPosition } from 'src/components/atoms/arrow';
// import { addComma } from '@airpremia/core/lib/service';
import { IMeState } from '@airpremia/core/stores/models/me';
import { IAuthState } from '@airpremia/core/stores/models/auth';
import {
  LIGHT_GRAY8,
  LIGHT_GRAY5,
  ORANGE1,
} from '@airpremia/cdk/styles/colors';

export interface IProps {
  meStore?: IMeState;
  authStore?: IAuthState;
  isShowDropdownLanguage: boolean;
  onMouseLogin: (toggle: boolean) => void;
  onClickLanguage: () => void;
}

function ButtonGroupHeader({
  authStore,
  meStore,
  // isShowDropdownLanguage,
  onMouseLogin,
  // onClickLanguage,
}: IProps) {
  /* const toggleTrianglePosition = isShowDropdownLanguage
    ? EPosition.UP
    : EPosition.DOWN; */
  const onMouseEnterLogin = () => onMouseLogin(true);
  const onMouseLeaveLogin = () => onMouseLogin(false);

  return (
    <S.container>
      <S.buttonWrapper>
        <li
          onMouseEnter={onMouseEnterLogin}
          onMouseLeave={onMouseLeaveLogin}
        >
          {authStore?.isLogIn ? (
            <S.loginText>
              <em>
                <span>
                  {meStore?.userInfo?.name?.first}
                </span>
                &nbsp;
                <span>{meStore?.userInfo?.name?.last}</span>
                님
              </em>
              &nbsp;안녕하세요
            </S.loginText>
          ) : (
            <p>로그인/회원가입</p>
          )}
        </li>
        {/* <li>
          {authStore?.isLogIn ? (
            <S.loginText>
              {addComma(meStore?.userInfo?.points)} pp
            </S.loginText>
          ) : (
            '포인트'
          )}
        </li> */}
        <li className="language" /* onClick={onClickLanguage} */>
          {/* <S.languageButton> */}
            <span>한국어</span>
            {/* <S.triangleWrapper>
              <Triangle position={toggleTrianglePosition} />
            </S.triangleWrapper>
          </S.languageButton> */}
        </li>
      </S.buttonWrapper>
    </S.container>
  );
}

ButtonGroupHeader.defaultProps = {
  isShowDropdownLanguage: false,
  onMouseLogin: () => {},
  onClickLanguage: () => {},
};

const S = {
  container: styled.div`
    display: flex;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.5;
    letter-spacing: -0.24px;
    color: ${LIGHT_GRAY8};

    @media only screen and (max-width: 767px) {
      font-size: 12px;
    }
  `,
  buttonWrapper: styled.ul`
    display: flex;
    li {
      position: relative;
      cursor: pointer;
      padding: 15px 0;
    }
    li + li {
      position: relative;
      margin-left: 25px;

      &:before {
        content: '';
        position: absolute;
        top: 24px;
        left: -13px;
        width: 1px;
        height: 10px;
        background-color: ${LIGHT_GRAY5};
      }
    }
  `,
  loginText: styled.p`
    letter-spacing: -0.24px;
    font-weight: 600;
    em {
      color: ${ORANGE1};
      text-decoration: underline;
    }
  `,
  languageButton: styled.div`
    display: flex;
    align-items: center;
  `,
  triangleWrapper: styled.div`
    padding-left: 5px;
    transform: scale(0.7);
    position: relative;
  `,
};

export default ButtonGroupHeader;
