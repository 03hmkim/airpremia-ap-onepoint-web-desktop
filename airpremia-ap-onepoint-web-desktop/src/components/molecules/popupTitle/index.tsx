import styled from 'styled-components';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {
  children: React.ReactElement | string;
}

function PopupTitle({ children }: IProps) {
  return (
    <S.container className="font-bold">
      {children}
    </S.container>
  );
}

PopupTitle.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.3px;
    color: ${DARK_GRAY1};
    @media only screen and (max-width: 767px) { 
      font-size: 26px;
      line-height: 36px;
      letter-spacing: -0.52px;
    }
  `,
};

export default PopupTitle;
