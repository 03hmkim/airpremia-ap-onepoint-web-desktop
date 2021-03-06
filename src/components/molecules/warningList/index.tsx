import { ReactType } from 'react';
import styled from 'styled-components';
// import SvgInfo from 'public/images/btn_info.svg';
import SvgCaution from 'public/images/ico_caution.svg';
import {
  DARK_GRAY1,
  LIGHT_GRAY8,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {
  /** svg icon */
  SvgIcon?: ReactType;
  /** 제목 */
  title?: string;
  /** 설명 list */
  descriptions: string[] | React.ReactElement[];
}

function WarningList({
  SvgIcon,
  title = '유의사항',
  descriptions,
}: IProps) {
  return (
    <S.container>
      <div className="title">
        {SvgIcon ? <SvgIcon /> : <SvgCaution />}
        <span>{title}</span>
      </div>
      <ul>
        {descriptions.map((description: any, index: number) => (
          <li key={index}>{description}</li>
        ))}
      </ul>
    </S.container>
  );
}

WarningList.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    .title {
      font-family: 'NotoSans';
      font-weight: 700;
      display: flex;
      align-items: center;
      svg {
        margin-top: 1.5px;
      }
      span {
        margin-left: 5px;
        font-size: 18px;
        line-height: 22px;
        font-family: 'NotoSans';
        font-weight: 700;
        letter-spacing: -0.3px;
        color: ${DARK_GRAY1};
      }
    }
    ul {
      padding-top: 10px;
      li {
        padding-left: 10px;
        position: relative;
        font-size: 18px;
        line-height: 1.8;
        font-family: 'NotoSans';
        font-weight: 400;
        letter-spacing: -0.28px;
        color: ${LIGHT_GRAY8};

        &:before {
          content: '- ';
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    }

    @media only screen and (max-width: 767px) {
      .title {
        span {
          font-size: 14px;
        }
      }
      ul {
        li {
          font-size: 13px;
          font-weight: 300;
          line-height: 26px;
        }
      }
    }
  `,
};

export default WarningList;
