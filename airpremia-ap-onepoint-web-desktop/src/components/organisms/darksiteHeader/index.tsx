import { FC, useCallback, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {
  WHITE1,
  LIGHT_GRAY6,
} from '@airpremia/cdk/styles/colors';
import Logo from 'public/images/airpremia_brand_dark_logo.png';
import { DropdownLanguage } from 'src/components';
import { Triangle } from 'src/components';
import { EPosition } from 'src/components/atoms/arrow';

interface IProps {}

const DarksiteHeader: FC<IProps> = () => {
  const [
    isShowDropdownLanguage,
    setIsShowDropdownLanguage,
  ] = useState(false);

  const toggleTrianglePosition = isShowDropdownLanguage
    ? EPosition.DOWN
    : EPosition.UP;

  const toggleShowDropdownLanguage = useCallback(() => {
    isShowDropdownLanguage
      ? setIsShowDropdownLanguage(false)
      : setIsShowDropdownLanguage(true);
  }, [isShowDropdownLanguage]);
  return (
    <S.container>
      <S.wrapper>
        <S.left>
          <Link href="/">
            <a>
              <img src={Logo} alt="logo" />
            </a>
          </Link>
        </S.left>
        <S.right>
          <Link href="/">
            <a className="header-text">
              에어프레미아 바로가기 {'>'}
            </a>
          </Link>

          <span />

          <S.languageButton
            onClick={toggleShowDropdownLanguage}
          >
            <span className="header-text">한국어</span>
            <S.triangleWrapper>
              <Triangle position={toggleTrianglePosition} />
            </S.triangleWrapper>
          </S.languageButton>

          {isShowDropdownLanguage && (
            <S.dropdownLanguageWrapper>
              <DropdownLanguage
                onClick={toggleShowDropdownLanguage}
              />
            </S.dropdownLanguageWrapper>
          )}
        </S.right>
      </S.wrapper>
    </S.container>
  );
};

const S = {
  container: styled.div`
    background-color: ${WHITE1};
    height: 80px;
  `,

  wrapper: styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    max-width: 1920px;
    /* min-width: 1440px; */
    margin: 0 auto;
    padding: 0 80px;
  `,

  left: styled.div`
    img {
      width: 160px;
      height: 40px;
    }
  `,
  right: styled.div`
    display: flex;
    position: relative;
    align-items: center;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.3px;

    .header-text {
      font-weight: 600;
    }

    .triangle {
      margin-left: 6px;
    }

    & > span {
      height: 10px;
      position: relative;
      border-right: solid 1px;
      margin: 0 20px;
      color: ${LIGHT_GRAY6};
    }
  `,

  languageButton: styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
  `,

  dropdownLanguageWrapper: styled.div`
    position: absolute;
    top: 37px;
    right: 0;
  `,
  triangleWrapper: styled.div``,
};

export default DarksiteHeader;
