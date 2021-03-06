import styled from 'styled-components';
import { 
  ORANGE2,
  LIGHT_GRAY8,
} from '@airpremia/cdk/styles/colors';
import IcoRight from 'public/images/btn_dropdown_able_right_gray.svg';
import Link from 'next/link';

interface IStyleProps {}
interface IProps extends IStyleProps {
  /** 제목 */
  title?: string;
  /** 링크 */
  goto?: string;
}

function MainSecTitle({
  title,
  goto,
}: IProps) {
  return (
    <S.container>
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="more">
        <Link href={goto}>
          <a>
            <button>더보기 <IcoRight /></button>
          </a>
        </Link>
      </div>
    </S.container>
  );
}

MainSecTitle.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  
    .title {
      h3 {
        color: ${ORANGE2};
        font-family: 'Premia';
        font-size: 40px;
        font-weight: 700;
        line-height: 48px;
      }
    }

    .more {
      button {
        display: flex;
        align-items: center;
        color: ${LIGHT_GRAY8};
        font-size: 18px;
        line-height: 22px;

        svg {
          padding-left: 10px;
        }
      }
    }

    @media only screen and (max-width: 767px) {
      .title {
        h3 {
          font-size: 40px;
          line-height: 50px;
        }
      }
      .more {
        button {
          font-size: 15px;
        }
      }
    }
  `,
};

export default MainSecTitle;