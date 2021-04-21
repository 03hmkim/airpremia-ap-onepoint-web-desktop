import styled from 'styled-components';
import { 
  ORANGE2,
  LIGHT_GRAY8,
} from '@airpremia/cdk/styles/colors';
import IcoRight from 'public/images/btn_dropdown_able_right_gray.svg';

interface IStyleProps {}
interface IProps extends IStyleProps {
  /** 제목 */
  title?: string;
}

function MainSecTitle({
  title,
}: IProps) {
  return (
    <S.container>
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="more">
        <button>더보기 <IcoRight /></button>
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
        font-size: 50px;
        font-weight: 700;
        line-height: 60px;
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