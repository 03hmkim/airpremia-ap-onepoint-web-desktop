import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import SvgLogo from 'public/images/btn_logo_JS.svg';
import IcoNav1b1 from 'public/images/nav/ico_nav_1-1.svg';
import IcoNav1b2 from 'public/images/nav/ico_nav_1-2.svg';
import IcoNav1b3 from 'public/images/nav/ico_nav_1-3.svg';
import IcoNav1b4 from 'public/images/nav/ico_nav_1-4.svg';
import IcoNav2b1 from 'public/images/nav/ico_nav_2-1.svg';
import IcoNav2b2 from 'public/images/nav/ico_nav_2-2.svg';
import IcoNav2b3 from 'public/images/nav/ico_nav_2-3.svg';
import IcoNav2b4 from 'public/images/nav/ico_nav_2-4.svg';
import IcoNav3b1 from 'public/images/nav/ico_nav_3-1.svg';
import IcoNav3b2 from 'public/images/nav/ico_nav_3-2.svg';
import IcoNav3b3 from 'public/images/nav/ico_nav_3-3.svg';
import IcoNav4b1 from 'public/images/nav/ico_nav_4-1.svg';
import IcoNav4b2 from 'public/images/nav/ico_nav_4-2.svg';
import IcoNav4b3 from 'public/images/nav/ico_nav_4-3.svg';
import IcoNav4b4 from 'public/images/nav/ico_nav_4-4.svg';
import IcoNav4b5 from 'public/images/nav/ico_nav_4-5.svg';
import IcoNav4b6 from 'public/images/nav/ico_nav_4-6.svg';
import IcoNav5b1 from 'public/images/nav/ico_nav_5-1.svg';
import IcoNav5b2 from 'public/images/nav/ico_nav_5-2.svg';
import IcoNav5b3 from 'public/images/nav/ico_nav_5-3.svg';
import IcoNav5b4 from 'public/images/nav/ico_nav_5-4.svg';
import IcoNav5b5 from 'public/images/nav/ico_nav_5-5.svg';
import {
  ORANGE1,
  WHITE1,
  LIGHT_GRAY3,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  DARK_GRAY2,
  PALE_BLUE6,
} from '@airpremia/cdk/styles/colors';
import { useState } from 'react';
import { ERightDpType } from './types';
import { 
  RightMenuMobile,
} from 'src/components';

interface IProps {
  resetData: () => void;
}
const GnbNew = ({ resetData }: IProps) => {
  const linkOnClick = useCallback(() => {
    //smartport.mhh bookingSession reset
    resetData();
  }, [resetData]);

  const { CLOSE, OPEN } = ERightDpType;
  const [rightDp, setrightDp] = useState(CLOSE);

  return (
    <S.container id="gnbNew">
      <div className="innerWrapper">
        <S.logo>
          <Link href="/">
            <a className="logo">
              <SvgLogo />
            </a>
          </Link>
        </S.logo>
        <S.rightMenu rightDp={rightDp}>
          <button className="btnMenu open" onClick={() => setrightDp(OPEN)}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>          
          <div className="rightMenuWrapper">
            <button className="btnMenu close" onClick={() => setrightDp(CLOSE)}>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
            <div className="contents">
              <RightMenuMobile />
            </div>  
          </div>
        </S.rightMenu>
        <S.menusWrapper>
          <div className="mainMenu">
            <div className="label">
              예매
            </div>
            <div className="subMenusWrapper">
              <div className="subMenus">
                <div className="subMenu">
                  <Link href='/ticket/flight'>
                    <a className="label" onClick={linkOnClick}>
                      <IcoNav1b1 />
                      <span>항공권 예매</span>
                    </a>
                  </Link>
                </div>
                <div className="subMenu dpN">  {/* 추후업데이트 */}
                  <Link href='/ticket/bonus'>
                    <a className="label" onClick={linkOnClick}>
                      <IcoNav1b2 />
                      <span>보너스 항공권</span>
                    </a>
                  </Link>
                </div>
                <div className="subMenu">
                  <Link href='/ticket/promotion'>
                    <a className="label" onClick={linkOnClick}>
                      <IcoNav1b3 />
                      <span>프로모션</span>
                    </a>
                  </Link>
                </div>
                <div className="subMenu">
                  <Link href='/ticket/fare'>
                    <a className="label" onClick={linkOnClick}>
                      <IcoNav1b4 />
                      <span>운임안내</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mainMenu">
            <div className="label">
              조회/체크인
            </div>
            <div className="subMenusWrapper">
              <div className="subMenus">
                <div className="subMenu">
                  <Link href='/checkin/find-trip'>
                    <a className="label" onClick={linkOnClick}>
                      <IcoNav2b1 />
                      <span>예약 조회</span>
                    </a>
                  </Link>
                </div>
                <div className="subMenu">
                  <Link href='/checkin/online'>
                    <a className="label" onClick={linkOnClick}>
                      <IcoNav2b2 />
                      <span>온라인 체크인</span>
                    </a>
                  </Link>
                </div>
                <div className="subMenu">
                  <Link href='/checkin/depArrCheck'>
                    <a className="label" onClick={linkOnClick}>
                      <IcoNav2b3 />
                      <span>출/도착 조회</span>
                    </a>
                  </Link>
                </div>
                <div className="subMenu">
                  <Link href='/checkin/schedule'>
                    <a className="label" onClick={linkOnClick}>
                      <IcoNav2b4 />
                      <span>운항 스케줄</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mainMenu">
            <div className="label">
              프레미아 멤버스
            </div>
            <div className="subMenusWrapper">
              <div className="subMenus">
                <div className="subMenu">
                  <Link href='/premiaMembers/grade'>
                    <a className="label" onClick={linkOnClick}>
                      <IcoNav3b1 />
                      <span>회원 등급</span>
                    </a>
                  </Link>
                </div>
                <div className="subMenu">
                  <Link href='/premiaMembers/savePoint'>
                    <a className="label" onClick={linkOnClick}>
                      <IcoNav3b2 />
                      <span>포인트 적립</span>
                    </a>
                  </Link>
                </div>
                <div className="subMenu">
                  <Link href='/premiaMembers/usePoint'>
                    <a className="label" onClick={linkOnClick}>
                      <IcoNav3b3 />
                      <span>포인트 사용</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mainMenu">
            <div className="label">
              서비스 안내
            </div>
            <div className="subMenusWrapper">
              <div className="subMenuWrap">
                <div className="subMenu">
                  <div className="title">
                    <IcoNav4b5 />
                    <span>도움이 필요한 손님</span>
                  </div>
                  <ul className="list">
                    <li>
                      <Link href='/support/need/infant'>
                        <a className="label" onClick={linkOnClick}>
                          유아 동반 손님
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/support/need/teenager'>
                        <a className="label" onClick={linkOnClick}>
                          혼자 여행하는 어린이,청소년
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/support/need/pregnant'>
                        <a className="label" onClick={linkOnClick}>
                          임산부 손님
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/support/need/help'>
                        <a className="label" onClick={linkOnClick}>
                          장애인 및 의료 도움이 필요한 손님
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/support/need/pet'>
                        <a className="label" onClick={linkOnClick}>
                          반려동물을 동반하는 손님
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="subMenu">
                  <div className="title">
                    <IcoNav4b2 />
                    <span>수하물</span>
                  </div>
                  <ul className="list">
                    <li>
                      <Link href='/support/baggage/prohibition'>
                        <a className="label" onClick={linkOnClick}>
                          운송제한물품
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/support/baggage/free-baggage'>
                        <a className="label" onClick={linkOnClick}>
                          무료수하물
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/support/baggage/over-balance'>
                        <a className="label" onClick={linkOnClick}>
                          초과수하물
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/support/baggage/special-carry'>
                        <a className="label" onClick={linkOnClick}>
                          특수수하물
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/support/baggage/lost-carry'>
                        <a className="label" onClick={linkOnClick}>
                          수하물 배상
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="subMenu">
                  <div className="title">
                    <IcoNav4b1 />
                    <span>부가서비스 구매</span>
                  </div>
                  <ul className="list">
                    <li>
                      <Link href='/support/additional-service/baggage'>
                        <a className="label" onClick={linkOnClick}>
                          사전 수하물 구매
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/support/additional-service/seat'>
                        <a className="label" onClick={linkOnClick}>
                          사전 좌석 구매
                        </a>
                      </Link>
                    </li>
                    <li className="dpN">  {/* 추후업데이트 */}
                      <Link href='/support/additional-service/meal'>
                        <a className="label" onClick={linkOnClick}>
                          사전 기내식 구매
                        </a>
                      </Link>
                    </li>
                    <li className="dpN">  {/* 추후업데이트 */}
                      <Link href='/support/additional-service/bundle'>
                        <a className="label" onClick={linkOnClick}>
                          번들 구매
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/support/additional-service/side-seat'>
                        <a className="label" onClick={linkOnClick}>
                          공항에서의 옆좌석 구매
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/support/additional-service/packing'>
                        <a className="label" onClick={linkOnClick}>
                          수하물용품 구매
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="subMenu">
                  <div className="title">
                    <IcoNav4b4 />
                    <span>취항지 공항 정보</span>
                  </div>
                  <ul className="list">
                    <li>
                      <Link href='/support/airport/incheon'>
                        <a className="label" onClick={linkOnClick}>
                          인천공항
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/support/airport/gimpo'>
                        <a className="label" onClick={linkOnClick}>
                          김포공항
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/support/airport/jeju'>
                        <a className="label" onClick={linkOnClick}>
                          제주공항
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="subMenu">
                  <div className="title">
                    <IcoNav4b3 />
                    <span>탑승 수속</span>
                  </div>
                  <ul className="list">
                    <li>
                      <Link href='/support/checkin/info'>
                        <a className="label" onClick={linkOnClick}>
                          탑승 수속 안내
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="subMenu dpN">  {/* 추후업데이트 */}
                  <div className="title">
                    <IcoNav4b6 />
                    <span>기내 서비스</span>
                  </div>
                  <ul className="list">
                    <li>
                      <Link href='/support/service'>
                        <a className="label" onClick={linkOnClick}>
                          기내 서비스1
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/support/service'>
                        <a className="label" onClick={linkOnClick}>
                          기내 서비스2
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/support/service'>
                        <a className="label" onClick={linkOnClick}>
                          기내 서비스3
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mainMenu">
            <div className="label">
              고객지원
            </div>
            <div className="subMenusWrapper">
              <div className="subMenus">                  
                <div className="subMenu">
                  <Link href='/customer/notice/list'>
                    <a className="label" onClick={linkOnClick}>
                      <IcoNav5b1 />
                      <span>공지사항</span>
                    </a>
                  </Link>
                </div>
                <div className="subMenu dpN">
                  <Link href='/customer/qna'>
                    <a className="label" onClick={linkOnClick}>
                      <IcoNav5b2 />
                      <span>1:1 문의</span>
                    </a>
                  </Link>
                </div>
                <div className="subMenu">
                  <Link href='/customer/faq'>
                    <a className="label" onClick={linkOnClick}>
                      <IcoNav5b3 />
                      <span>자주 묻는 질문</span>
                    </a>
                  </Link>
                </div>
                <div className="subMenu dpN">
                  <Link href='/customer/lost'>
                    <a className="label" onClick={linkOnClick}>
                      <IcoNav5b4 />
                      <span>기내 유실물 센터</span>
                    </a>
                  </Link>
                </div>
                <div className="subMenu">
                <Link href='/customer/archive'>
                    <a className="label" onClick={linkOnClick}>
                      <IcoNav5b5 />
                      <span>서식 자료실</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </S.menusWrapper>
      </div>
    </S.container>
  );
}

GnbNew.defaultProps = {
  resetData: () => {}
}

const S = {
  container: styled.div`
    padding: 0 95px;
    position: relative;
    background-color: ${WHITE1};
    
    > .innerWrapper {
      height: 80px;
      margin: 0 auto;
      padding: 0 25px;
      display: flex;
      align-items: center;
      border-bottom: solid 1px transparent;
    }
    
    @media only screen and (max-width: 1530px) {
      > .innerWrapper {
        justify-content: space-between;
      }
    }
    @media only screen and (max-width: 1430px) {      
      padding: 0;
      > .innerWrapper {
        max-width: 1280px;
        margin: 0 auto;
      }
    }

    @media only screen and (max-width: 767px) {
      > .innerWrapper {
        height: 60px;
      }
    }
  `,
  logo: styled.div`
    margin-right: 210px;
    cursor: pointer;
    a {
      display: block;
      position: relative;

      svg {
        width: 180px;
      }
    }
    @media only screen and (max-width: 1530px) {
      margin-right: 0;
    }
    @media only screen and (max-width: 1059px) {
      a svg{
        width: 180px;
      }
    }
    @media only screen and (max-width: 767px) {
      a svg{
        width: 140px;
      }
    }
  `,
  rightMenu: styled.div<{
    rightDp: ERightDpType;
  }>`
    margin-right: -10px;
    display: none;

    .btnMenu {
      padding: 10px;

      .line {
        height: 3px;
        display: block;
        background-color: ${DARK_GRAY2};
      }

      &.open {
        .line {
          width: 28px;
          margin-bottom: 7px;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      &.close {
        width: 40px;
        height: 40px;
        padding: 5px;
        position: absolute;
        top: 20px;
        right: 15px;

        .line {
          width: 32px;
          background-color: ${WHITE1};

          &:nth-child(2) {
            display: none;
          }
          &:first-child {
            transform: rotate(45deg);
          }
          &:last-child {
            margin-top: -3px;
            transform: rotate(-45deg);
          }
        }
      }
    }

    .rightMenuWrapper {
      position: fixed;
      display: none;
      width: 100%;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      overflow-y: auto;
      z-index: 100;
      background: ${WHITE1};
    }

    ${({ rightDp }) => {
      if (rightDp === ERightDpType.CLOSE) {
        return css`
          .btnMenu.open {
            display: block;
          }
          .btnMenu.close,
          .rightMenuWrapper {
            display: none;
          }
        `;
      }
      return css`
        .btnMenu.open {
          display: none;
        }
        .btnMenu.close,
        .rightMenuWrapper {
          display: block;
        }
      `;
    }}

    @media only screen and (min-width: 1059px) {
      .rightMenuWrapper {
        display: none;
      }
    }

    @media only screen and (max-width: 1059px) {
      display: block;
    }

    @media only screen and (max-width: 767px) {
      .btnMenu {
        .line {
          height: 2px;
        }

        &.open {
          .line {
            width: 20px;
            margin-bottom: 5px;
          }
        }

        &.close {
          padding: 10px;

          .line {
            width: 24px;

            &:last-child {
              margin-top: -2px;
            }
          }
        }
      }
    }
  `,
  menusWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .mainMenu {
      display: flex;
      align-items: center;
      cursor: pointer;

      > .label {
        padding: 25px 110px 25px 0;
        font-size: 21px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: -0.3px;

        &:hover {
          color: ${ORANGE1};
        }

      }

      &:last-child{
        > .label {
          padding-right: 0;
        }
      }

      .subMenusWrapper {
        width: 100%;
        height: 220px;
        position: absolute;
        top: 80px;
        left: 0;
        display: none;
        background-color: ${WHITE1};
        border-top: 1px solid ${LIGHT_GRAY3};
        box-shadow: 0 10px 14px rgba(0,0,0,0.05);
        z-index: 100;
        box-sizing: border-box;
        cursor: initial;

        .subMenus {
          padding-left: calc(50% - 360px);
          display: flex;

          .subMenu {
            padding: 20px;
            position: relative;

            &.dpN{
              display: none;
            }

            > .label {
              width: 200px;
              height: 180px;
              padding-bottom: 20px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              font-size: 21px;
              line-height: 24px;
              letter-spacing: -0.26px;
              box-sizing: border-box;

              span{
                border-bottom: 1px solid transparent;
              }

              &:hover{
                background-color: ${PALE_BLUE6};

                span{
                  color: ${ORANGE1};
                  border-color: ${ORANGE1};
                }
              }
            }
          }

          .subMenu + .subMenu::before {
            content: "";
            width: 1px;
            height: 100px;
            position: absolute;
            left: 0;
            top: 60px;
            display: block;
            background-color: ${LIGHT_GRAY5};
          }
        }

        .subMenuWrap {
          margin-top: 80px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;

          .subMenu {
            margin-right: 70px;

            &.dpN { 
              display: none;
              opacity: 0;
            }

            &:last-child{
              margin-right: 0;
            }

            .title {
              display: flex;

              span{
                margin-left: 14px;
                font-size: 21px;
                font-weight: bold;
                line-height: 44px;
              }
            }

            .list {
              margin-top: 14px;
              margin-left: 60px;

              > li {
                margin-top: 5px;

                &.dpN{
                  display: none;
                }

                > .label {
                  font-size: 18px;
                  color: ${LIGHT_GRAY8};
                  letter-spacing: -0.3px;
                  line-height: 30px;

                  &:hover {
                    color: ${ORANGE1};
                    border-bottom: 1px solid ${ORANGE1};
                  }
                }
              }              
            }
          }
        }
      }

      &:hover{
        .subMenusWrapper {
          display: block;
        }
      }

      &:nth-child(2) .subMenus {
        padding-left: calc(50% - 480px);
      }    

      &:nth-child(4) .subMenusWrapper {
        height: 400px;
      }
    }

    @media only screen and (max-width: 1440px) {
      .mainMenu {
        .subMenusWrapper {
          .subMenuWrap {
            width: 880px;
            margin: 40px auto 0;

            .subMenu {
              &:nth-child(3n-2){
                width: 320px;
              }
              &:nth-child(3n-1){
                width: 180px;
              }
              &:nth-child(3n){
                width: 240px;
                margin-right: 0;
              }              
              &:nth-child(4),
              &:nth-child(5),
              &:nth-child(6){
                margin-top: 40px;
              }
              &.dpN {
                display: block;
              }
            }
          }
        }

        &:nth-child(4){
          .subMenusWrapper {
              height: 500px;
          }
        }
      }
    }
    @media only screen and (max-width: 1199px) {
      .mainMenu {
        > .label {
          padding-right: 50px;    
        }
      }      
    }
    @media only screen and (max-width: 1059px) {
      display: none;
    }
  `,
};

export default GnbNew;
