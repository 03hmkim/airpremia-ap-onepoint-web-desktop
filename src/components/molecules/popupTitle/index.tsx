import styled from 'styled-components';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {
  children: React.ReactElement | string;
}

function PopupTitle({ children }: IProps) {
  return (
    <S.container>
      {children}
    </S.container>
  );
}

PopupTitle.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    padding-right: 40px;
    font-size: 30px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -0.3px;
    color: ${DARK_GRAY1};

    @media only screen and (max-width: 767px) { 
      font-size: 20px;
      line-height: 30px;
      letter-spacing: -0.52px;
    }
  `,
};

export default PopupTitle;
