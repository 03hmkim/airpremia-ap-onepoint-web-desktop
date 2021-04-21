import React, { FC } from 'react';
import styled from 'styled-components';
import SvgIcoDel from '../../../public/images/ico_del.svg';
import { DARK_GRAY1 } from '../../../styles/colors';

export interface IProps {
  children: string;
  onClick: () => void;
}

const BtnType9: FC<IProps> = ({ children, onClick }) => {
  return (
    <S.container onClick={onClick}>
      <SvgIcoDel />
      <span className="font-bold">{children}</span>
    </S.container>
  );
};

BtnType9.defaultProps = {};

const S = {
  container: styled.button`
    display: flex;
    align-items: center;
    span {
      padding-left: 5px;
      font-size: 14px;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: -0.28px;
      text-align: left;
      color: ${DARK_GRAY1};
    }
  `,
};

export default BtnType9;
