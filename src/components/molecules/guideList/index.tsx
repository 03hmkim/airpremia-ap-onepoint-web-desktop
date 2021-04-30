import React from 'react';
import styled from 'styled-components';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {
  /** 제목 */
  title?: string;
  /** 설명 list */
  descriptions: string[] | React.ReactElement[];
}

function guideList({
  title = '온라인 체크인 신청 안내',
  descriptions,
}: IProps) {
  return (
    <S.container>
      <S.title className="font-bold">
        <h3>{title}</h3>
      </S.title>
      <ul>
        {descriptions.map((description: any, index: number) => (
          <li key={index}>{description}</li>
        ))}
      </ul>
    </S.container>
  );
}

guideList.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    ul {
      padding-top: 10px;

      li {
        font-size: 18px;
        line-height: 2em !important;
        letter-spacing: -0.3px;
        color: ${DARK_GRAY1};
        display: flex;
        align-items: center;
        width:calc( 100% - 10px );
        padding-left:10px;
        position:relative;

        &:before {
          content: '';
          width: 4px;
          height: 4px;
          background-color: ${DARK_GRAY1};
          display: inline-block;
          border-radius: 50%;
          position: absolute;
          left: 0;
          top: 16px;
        }
      }
    }
    @media only screen and (max-width: 767px) { 
      ul {
        li {
          font-size: 14px;
          font-weight: 300;
          line-height: 28px;

          &:before {
            width: 3px;
            height: 3px;
            top: 13px;
          }            
        }
      }
    }
  `,
  title: styled.div`
    margin-bottom: 20px;

    h3 {
      font-size: 21px;
      line-height: 34px;
      letter-spacing: -0.44px;
      color: ${DARK_GRAY1};
    }

    @media only screen and (max-width: 767px) { 
      h3 {
        font-size: 16px;
      }
    }
  `,
};

export default guideList;
