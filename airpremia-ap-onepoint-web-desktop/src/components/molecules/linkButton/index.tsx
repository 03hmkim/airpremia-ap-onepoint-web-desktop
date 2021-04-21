import styled from 'styled-components';
import Link from 'next/link';
import { Arrow } from 'src/components';
import {
  DARK_GRAY1,
  WHITE1,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {
  /** 링크 */
  to: string;
  /** 링크 라벨 */
  children: string;
}

function LinkButton({ to, children }: IProps) {
  return (
    <S.container>
      <Link href={to} passHref>
        <a>
          <div className="label">{children}</div>
          <Arrow
            color={DARK_GRAY1}
            scale={0.5}
            borderWidth="3px"
          />
        </a>
      </Link>
    </S.container>
  );
}

LinkButton.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    a {
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
        font-size: 16px;
        font-weight: 600;
        line-height: 1.4;
        letter-spacing: -0.32px;
        color: ${DARK_GRAY1};
      }
    }
  `,
};

export default LinkButton;
