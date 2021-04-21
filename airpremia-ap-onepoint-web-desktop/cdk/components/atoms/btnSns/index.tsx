import React, { FC } from 'react';
import styled from 'styled-components';
import { LIGHT_GRAY5 } from '../../../styles/colors';

export interface IProps {
  SvgImg: React.ReactElement;
  onClick?: () => void;
}

const BtnSns: FC<IProps> = ({ SvgImg, onClick }) => {
  return (
    <S.container onClick={onClick}>{SvgImg}</S.container>
  );
};

const S = {
  container: styled.div`
    width: 30px;
    height: 40px;
    border-radius: 15px;
    border: solid 1px ${LIGHT_GRAY5};
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

export default BtnSns;
