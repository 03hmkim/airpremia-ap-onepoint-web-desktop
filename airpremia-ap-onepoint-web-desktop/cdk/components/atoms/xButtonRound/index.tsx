import React, { FC } from 'react';
import styled from 'styled-components';
import Img from '../../../public/images/btn_delete.svg';

export interface IProps {
  /** 클릭 이벤트 */
  onClick?: () => void;
}

const XButtonRound: FC<IProps> = ({ onClick }) => {
  return (
    <S.container onClick={onClick}>
      <Img />
    </S.container>
  );
};

XButtonRound.defaultProps = {
  onClick: () => {},
};

const S = {
  container: styled.div<IProps>`
    display: flex;
    cursor: pointer;
  `,
};

export default XButtonRound;
