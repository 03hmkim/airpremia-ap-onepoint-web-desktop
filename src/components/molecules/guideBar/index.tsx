import styled from 'styled-components';
import { FC } from 'react';
import { prop } from 'styled-tools';
import { WHITE1 } from '@airpremia/cdk/styles/colors';

interface IStyle {
  backgroundColor?: string;
}

interface IProps extends IStyle {}

const GuideBar: FC<IProps> = ({ children, ...props }) => {
  return <S.container {...props}>{children}</S.container>;
};

const S = {
  container: styled.div<IStyle>`
    width: 100%;
    height: 64px;
    box-sizing: border-box;
    padding: 13px 20px 13px 30px;
    border-radius: 8px;
    background-color: ${prop('backgroundColor', WHITE1)};

    @media only screen and (max-width: 767px) { 
      height: auto;
    }
  `,
};

export default GuideBar;
