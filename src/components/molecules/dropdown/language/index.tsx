import React from 'react';
import styled from 'styled-components';
import {
  DARK_GRAY1,
  LIGHT_GRAY8,
  WHITE1,
} from '@airpremia/cdk/styles/colors';

interface IDropdownLanguageProps {
  onClick: () => void;
}

function DropdownLanguage({
  onClick,
}: IDropdownLanguageProps) {
  return (
    <S.container onClick={onClick}>
      <li>한국어</li>
      <li>English</li>
      <li>日本語</li>
      <li>简体中文</li>
      <li>繁體中文</li>
      <li>Tiếng việt nam</li>
    </S.container>
  );
}

DropdownLanguage.defaultProps = {
  onClick: () => {},
};

const S = {
  container: styled.ul`
    width: 130px;
    padding: 20px;
    border-radius: 8px;
    border: solid 1px ${DARK_GRAY1};
    background-color: ${WHITE1};
    box-sizing: border-box;
    li {
      font-size: 13px;
      letter-spacing: -0.26px;
      color: ${LIGHT_GRAY8};
      height: 19px;
      cursor: pointer;
      &:hover {
        color: ${DARK_GRAY1};
      }
    }
    li + li {
      padding-top: 12px;
    }
  `,
};

export default DropdownLanguage;
