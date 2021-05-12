import React from 'react';
import styled from 'styled-components';
import { LIGHT_GRAY5 } from '@airpremia/cdk/styles/colors';
import Link from 'next/link'
import Linkblack from 'public/images/support/btn_txt_link_black.svg';

interface IStyleProps {}
interface IProps extends IStyleProps {
  /** 제목 */
  title?: string;
  /** 링크 */
  link?: any;
}

function SupportList({
  title,
  link,
}: IProps) {
  return (
    <S.container>
      <Link href={link}>
        <a className="title">
          {title}<Linkblack />
        </a>
      </Link>
    </S.container>
  );
}

SupportList.defaultProps = {};

const S = {
  container: styled.p<IStyleProps>` 
    width: 100%;
    padding: 25px 0px;
    border-bottom: 1px solid ${LIGHT_GRAY5};

    .title {
      font-size: 18px;
      letter-spacing: 0;
      line-height: 1.8em;
      font-weight: 700;      
    }

    @media only screen and (max-width: 767px) {
      padding: 10px 0px;

      .title {
        font-size: 14px;
        letter-spacing: 0;
        line-height: 1.8em;
        font-weight: 300;      

        svg {
          width: 10px;
          height: 10px;
        }
      }
    }
  `,
};

export default SupportList;
