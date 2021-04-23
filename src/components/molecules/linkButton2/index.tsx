import styled from 'styled-components';
import { Arrow } from 'src/components';
import {
  DARK_GRAY1,
  WHITE1,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {
  children: string;
  onClick?: () => void;
}

function LinkButton2({ children, onClick }: IProps) {
  return (
    <S.container>
      <button onClick={onClick}>
        <div className="label">{children}</div>
        <Arrow
          color={DARK_GRAY1}
          scale={0.5}
          borderWidth="3px"
        />
      </button>
    </S.container>
  );
}

LinkButton2.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    button {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      padding: 20px 30px;
      box-sizing: border-box;
      border-radius: 8px;
      border: solid 1px ${DARK_GRAY1};
      background-color: ${WHITE1};
      .label {
        font-size: 18px;
        font-weight: 600;
        line-height: 1.4;
        letter-spacing: -0.32px;
        color: ${DARK_GRAY1};
      }
    }

    @media only screen and (max-width: 767px) {
      button {
        .label {
          font-size: 14px;
        }
      }
    }
  `,
};

export default LinkButton2;
