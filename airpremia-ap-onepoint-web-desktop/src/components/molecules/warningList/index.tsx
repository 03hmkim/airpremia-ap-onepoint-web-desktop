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
  descriptions: string[];
}

function WarningList({
  SvgIcon,
  title = '유의사항',
  descriptions,
}: IProps) {
  return (
    <S.container>
      <div className="title font-bold">
        {SvgIcon ? <SvgIcon /> : <SvgCaution />}
        <span>{title}</span>
      </div>
      <ul>
        {descriptions.map((description: string, index) => (
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
      display: flex;
      align-items: center;
      svg {
        margin-top: 1.5px;
      }
      span {
        margin-left: 5px;
        font-size: 15px;
        line-height: 22px;
        font-weight: 600;
        letter-spacing: -0.3px;
        color: ${DARK_GRAY1};
      }
    }
    ul {
      padding-top: 10px;
      li {
        font-size: 14px;
        line-height: 2;
        letter-spacing: -0.28px;
        color: ${LIGHT_GRAY8};
        &:before {
          content: '- ';
        }
      }
    }
  `,
};

export default WarningList;
