import React, { FC } from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import SvgBtnTxtLinkBlack from '../../../public/images/btn_txt_link_black.svg';
import { BLUE1 } from '../../../styles/colors';

interface IStyleProp {
  color?: string;
}

export interface IProps extends IStyleProp {
  children: string;
  onClick: () => void;
}

const BtnType8: FC<IProps> = ({
  color,
  children,
  onClick,
}) => {
  return (
    <S.container color={color} onClick={onClick}>
      <S.span color={color}>{children}</S.span>
      <SvgBtnTxtLinkBlack />
    </S.container>
  );
};

BtnType8.defaultProps = {};

const S = {
  container: styled.button<IStyleProp>`
    svg path {
      stroke: ${prop('color', BLUE1)};
    }
  `,
  span: styled.span<IStyleProp>`
    padding-right: 1px;
    font-size: 13px;
    font-weight: 600;
    color: ${prop('color', BLUE1)};
  `,
};

export default BtnType8;
