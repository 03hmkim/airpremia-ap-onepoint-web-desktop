import React from 'react';
import styled from 'styled-components';
import SvgBtnLinkCircle from 'public/images/btn_link_circle.svg';
import Link from 'next/link';
import {
  DARK_GRAY1,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';
import { LIGHT_GRAY2 } from '@airpremia/cdk/styles/colors';

export interface INotice {
  /** 공지사항 제목 */
  title: string;
  /** 공지사항 내용(한줄) */
  description: string;
  /** 공지사항 시각(YYYY. MM. DD.) */
  date: string;
}

interface IProps {
  list: INotice[];
}

function NoticeNavigation({ list }: IProps) {
  return (
    <S.container>
      <div className="titleWrapper">
        <div className="title">공지사항</div>
        <Link href="/support/notice">
          <a>
            <div className="svgBtnLinkCircleWrapper">
              <SvgBtnLinkCircle />
            </div>
          </a>
        </Link>
      </div>
      <ul>
        {list.map((noticeItem, index) => (
          <li key={index}>
            <div className="left">
              <div className="itemTitle">
                {noticeItem.title}
              </div>
              <div className="description">
                {noticeItem.description}
              </div>
            </div>
            <div className="right">
              <span className="date">
                {noticeItem.date}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </S.container>
  );
}

NoticeNavigation.defaultProps = {};

const S = {
  container: styled.div`
    .titleWrapper {
      display: flex;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: 1px solid ${DARK_GRAY1};
      .title {
        font-family: 'Premia-Bold', sans-serif;
        font-weight: 600;
        font-size: 22px;
        line-height: 1.27;
        letter-spacing: -0.44px;
        color: ${DARK_GRAY1};
      }
      .svgBtnLinkCircleWrapper {
        padding-left: 5px;
      }
    }

    ul {
      padding-top: 51px;
      li + li {
        padding-top: 23px;
      }
      li {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        padding-bottom: 30px;
        border-bottom: solid 1px ${LIGHT_GRAY2};
        .itemTitle {
          font-size: 14px;
          font-weight: 600;
          line-height: 1.79;
          color: ${DARK_GRAY1};
        }
        .description {
          max-width: 400px;
          padding-top: 11px;
          font-size: 13px;
          line-height: 1.85;
          letter-spacing: -0.26px;
          color: ${LIGHT_GRAY7};
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .date {
          font-size: 14px;
          line-height: 1.64;
          letter-spacing: -0.28px;
          color: ${LIGHT_GRAY7};
        }
      }
    }
  `,
};

export default NoticeNavigation;
