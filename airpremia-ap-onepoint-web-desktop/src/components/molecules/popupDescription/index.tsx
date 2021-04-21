import styled from 'styled-components';
import { LIGHT_GRAY7 } from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {
  children: React.ReactElement | string;
}

function PopupDescription({ children }: IProps) {
  return <S.container>{children}</S.container>;
}

PopupDescription.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    font-size: 18px;
    line-height: 36px;
    letter-spacing: -0.28px;
    color: ${LIGHT_GRAY7};
    font-weight: 600;
    .spacing {
      display: block;
    }
    @media only screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 28px; 
      .spacing {
        display: none;
      }
    }
  `,
};

export default PopupDescription;
