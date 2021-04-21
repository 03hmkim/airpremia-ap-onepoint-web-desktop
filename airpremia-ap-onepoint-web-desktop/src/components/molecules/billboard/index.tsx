import React from 'react';
import styled from 'styled-components';
// import { XButtonRound } from 'src/components';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';
import SvgBtnLinkCircle from 'public/images/btn_link_circle.svg';
import Link from 'next/link';

export enum RenderType {
  /** 인사메시지 */
  HELLO = 'hello',
  /** 공지사항 */
  INFO = 'info',
}

export interface IProps {
  /** 한줄 공지사항에 들어갈 내용 */
  label?: string;
  /** 한줄 공지사항 클릭 이벤트 */
  onClick?: () => void;
  /** 제거 버튼 클릭 이벤트 */
  onClose?: () => void;
}

// function Billboard({ label, onClick, onClose }: IProps) {
//  const type = label ? RenderType.INFO : RenderType.HELLO;
function Billboard() {
  const type = RenderType.HELLO;

  return (
    <S.container>
      {type === RenderType.HELLO && (
        <Link href="/other/covid">
          <a className="goCovid">
            [코로나 19 안내 센터] <span className="moDp">항공편 운항 등 코로나 19 관련 정보 확인하기</span> <SvgBtnLinkCircle />
          </a>
        </Link>
      )}
      {/*
      {type === RenderType.INFO && (
        <S.infoWrapper>
          <S.InfoLabel onClick={onClick}>
            {label}
          </S.InfoLabel>
          <XButtonRound onClick={onClose} />
        </S.infoWrapper>
      )}
      */}
    </S.container>
  );
}

Billboard.defaultProps = {
  label: '[공지사항] 메세지 표시',
  onClick: () => {},
  onClose: () => {},
};

const S = {
  container: styled.div`
    display: flex;
    .goCovid {
      display: flex;
      font-size: 16px;
      letter-spacing: -0.24px;
      text-align: left;
      color: ${DARK_GRAY1};

      .moDp{
        margin-left: 5px;
      }

      svg{
        margin-left: 5px;
      }
    }
  `,
  infoWrapper: styled.div`
    display: flex;
    button + div {
      padding-left: 10px;
    }
  `,
  InfoLabel: styled.button`
    display: inline-block;
    line-height: 18px;
    max-width: 680px;
    text-align: left;
    color: ${DARK_GRAY1};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.24px;
  `,
};

export default Billboard;
