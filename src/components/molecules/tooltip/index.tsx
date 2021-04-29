import styled from 'styled-components';
import SvgInfo from 'public/images/btn_info.svg';
import {
  DARK_GRAY1,
  WHITE1,
} from '@airpremia/cdk/styles/colors';
import { useState } from 'react';

interface IStyleProps {}
interface IProps extends IStyleProps {
  children?: string;
}

function Tooltip({ children }: IProps) {
  const [isShow, setIsShow] = useState(false);

  const toggleIsShow = () => {
    setIsShow(!isShow);
  };

  return (
    <S.container>
      <div className="iconWrapper" onClick={toggleIsShow}>
        <SvgInfo />
      </div>
      {isShow && (
        <div className="description">{children}</div>
      )}
    </S.container>
  );
}

Tooltip.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    position: relative;
    .iconWrapper {
      cursor: pointer;
    }
    .description {
      position: absolute;
      top: 25px;
      left: -171px;
      width: 315px;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 7px 7px 7px 0 rgba(0, 0, 0, 0.03);
      border: solid 1px ${DARK_GRAY1};
      background-color: ${WHITE1};
      font-size: 18px;
      line-height: 1.67;
      color: ${DARK_GRAY1};
    }
    @media only screen and (max-width: 767px) { 
      .description {
        font-size: 14px;
      }
    }
    @media only screen and (max-width: 599px) {
      .description {
        width: 230px;
      }
    }
  `,
};

export default Tooltip;
