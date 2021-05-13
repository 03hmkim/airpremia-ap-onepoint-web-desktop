import React, {
  useCallback,
  useState,
  useEffect,
} from 'react';
import styled from 'styled-components';
import {
  Billboard,
  ButtonGroupHeader,
  DropdownLanguage,
  DropdownLogin,
} from 'src/components';
import { useAuth, useMe } from '@airpremia/core/hooks';
import {
  WHITE1,
} from '@airpremia/cdk/styles/colors';

export interface IStyleProps {}
export interface IProps extends IStyleProps {}
/**
 * 홈 - 한줄 정보와 로그인관련 버튼이 있는 헤더
 */
function Header({}: IProps) {
  // billboard
  const { authStore, onLogout } = useAuth();
  const { meStore } = useMe();

  const [billboard, setBillboard] = useState(
    // '태풍 ‘솔릭’ 관련 항공기 결항편 추가 안내',
    ''
  );
  const billboardProps = {
    label: billboard,
    onClick: () => {},
    onClose: () => setBillboard(''),
  };

  // buttonGroup
  const [
    isOnMouseButtonLogin,
    setIsOnMouseButtonLogin,
  ] = useState(false);
  const [
    isOnMouseDropdownLogin,
    setIsOnMouseDropdownLogin,
  ] = useState(false);
  const [
    isShowDropdownLanguage,
    setIsShowDropdownLanguage,
  ] = useState(false);
  const isShowDropdownLogin =
    isOnMouseButtonLogin || isOnMouseDropdownLogin;
  const toggleShowDropdownLanguage = useCallback(() => {
    isShowDropdownLanguage
      ? setIsShowDropdownLanguage(false)
      : setIsShowDropdownLanguage(true);
  }, [isShowDropdownLanguage]);

  useEffect(() => {
    if (isOnMouseButtonLogin || isOnMouseDropdownLogin) {
      setIsShowDropdownLanguage(false);
    }
  }, [isOnMouseButtonLogin, isOnMouseDropdownLogin]);

  return (
    <S.container id="header">
      <div className="innerWrapper">
        <S.leftWrapper>
          <Billboard {...billboardProps} />
        </S.leftWrapper>
        <S.rightWrapper>
          <ButtonGroupHeader
            authStore={authStore}
            meStore={meStore}
            isShowDropdownLanguage={isShowDropdownLanguage}
            onMouseLogin={setIsOnMouseButtonLogin}
            onClickLanguage={toggleShowDropdownLanguage}
          />
          {isShowDropdownLogin && (
            <S.dropdownLoginWrapper>
              <DropdownLogin
                authStore={authStore}
                meStore={meStore}
                onLogout={onLogout}
                onMouse={setIsOnMouseDropdownLogin}
              />
            </S.dropdownLoginWrapper>
          )}
          {isShowDropdownLanguage && (
            <S.dropdownLanguageWrapper>
              <DropdownLanguage
                onClick={toggleShowDropdownLanguage}
              />
            </S.dropdownLanguageWrapper>
          )}
        </S.rightWrapper>
      </div>
    </S.container>
  );
}

Header.defaultProps = {};

const S = {
  container: styled.div`
    padding: 0 95px;
    background-color: ${WHITE1};
    .innerWrapper {
      margin: 0 auto;
      padding: 0 25px;
      display: flex;
      justify-content: space-between;
    }

    @media only screen and (max-width: 1430px) {      
      padding: 0;
      > .innerWrapper {
        max-width: 1280px;
        margin: 0 auto;
      }
    }

    @media only screen and (max-width: 1059px) {
      display: none;
    }
  `,
  leftWrapper: styled.div`
    padding: 25px 0 45px;
    display: flex;
    align-items: center;
  `,
  rightWrapper: styled.div`
    position: relative;
  `,
  dropdownLoginWrapper: styled.div`
    position: absolute;
    left: -20px;
    top: 48px;
    z-index: 1;
  `,
  dropdownLanguageWrapper: styled.div`
    position: absolute;
    right: 0;
    top: 48px;
    z-index: 1;
  `,
};

export default Header;
