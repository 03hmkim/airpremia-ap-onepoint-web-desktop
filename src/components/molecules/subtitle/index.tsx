import styled from 'styled-components';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

interface IStyleProps {}

interface IProps extends IStyleProps {
  children?: React.ReactElement | string;
}

function Subtitle({ children }: IProps) {
  return (
    <S.container className="title font-bold">
      {children}
    </S.container>
  );
}

Subtitle.defaultProps = {
  children: '결제 방법',
};

const S = {
  container: styled.div`
    font-size: 22px;
    line-height: 1.27;
    letter-spacing: -0.44px;
    color: ${DARK_GRAY1};
  `,
};

export default Subtitle;
