import Link from 'next/link';
import styled from 'styled-components';
import ImgLogo from 'public/images/airpremia_brand_logo_transparent.png';
import { SnsButton } from 'src/components';
import {
  DARK_GRAY1,
  LIGHT_GRAY1,
  LIGHT_GRAY6,
  LIGHT_GRAY8,
  LIGHT_GRAY7,
  LIGHT_GRAY5,
} from '@airpremia/cdk/styles/colors';

export interface IStyleProps {}

interface IProps extends IStyleProps {}

function Footer({}: IProps) {
  return (
    <S.container id="footer">
      <div className="wrapper">
        <div className="top">
          <div className="list">
            <div className="box">
              <ul>
                <li className="title">
                  <h3>회사소개</h3>
                </li>
                <li>
                  <Link href="">
                    <a href="https://airpremia.com/PremiaGuide" target="_blank">에어프레미아 소개</a>
                  </Link>
                </li>
                <li>
                  <Link href="/footer/about/airplane">
                    <a>항공기 안내</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a href="https://airpremia.com/notice?category=uNLb2IiOZ7" target="_blank">채용안내</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a href="https://airpremia.com/notice?category=Pvd435myTa" target="_blank">투자정보</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a href="contact@airpremia.com" target="_blank">제휴문의</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="box">
              <ul>
                <li className="title">
                  <h3>약관 및 규정</h3>
                </li>
                <li>
                  <Link href="/footer/term/personal-info">
                    <a>개인정보 처리방침</a>
                  </Link>
                </li>
                <li>
                  <Link href="/footer/term/terms">
                    <a>이용약관</a>
                  </Link>
                </li>
                <li>
                  <Link href="/footer/term/transit">
                    <a>운송약관</a>
                  </Link>
                </li>
                <li>
                  <Link href="/footer/term/international">
                    <a>국제화물운송약관</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="box">
              <ul>
                <li className="title">
                  <h3>기타안내</h3>
                </li>
                <li>
                  <Link href="/footer/guide/airtrafic-user">
                    <a>항공교통이용자 서비스 계획</a>
                  </Link>
                </li>
                <li>
                  <Link href="/footer/guide/damage-relief">
                    <a>피해구제 계획</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="box">
              <ul>
                <li className="title">
                  <h3>항공화물사업</h3>
                </li>
                <li>
                  <Link href="/footer/cargo/cargo-premia">
                    <a>카고 프레미아</a>
                  </Link>
                </li>
                <li>
                  <Link href="/footer/cargo/premia-express">
                    <a>프레미아 익스프레스</a>
                  </Link>
                </li>
                <li className="dpN">
                  <Link href="/footer/cargo/news">
                    <a>카고 뉴스</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="rightSide">
            <div className="news">
              <ul>
                <li className="title">
                  <h3>뉴스레터</h3>
                </li>
              </ul>
              <div>
                <input
                  autoComplete="false"
                  placeholder="이메일 주소 입력"
                />
                <span
                  className="subscribeButton"
                  onClick={(): any =>
                    alert('구독 되었습니다.')
                  }
                >
                  구독하기
                </span>
              </div>
              <div className="sns">
                <div className="snsButtonWrapper">
                  <SnsButton
                    type="instagram"
                    to="https://instagram.com/airpremia/"
                  />
                </div>
                <div className="snsButtonWrapper">
                  <SnsButton
                    type="facebook"
                    to="https://www.facebook.com/airpremia/"
                  />
                </div>
                <div className="snsButtonWrapper">
                  <SnsButton
                    type="youtube"
                    to="https://www.youtube.com/AIRPREMIA/"
                  />
                </div>
              </div>
            </div>
            <div className="support">
              <h3 className="title">예약센터</h3>
              <h1 className="number">02-6953-6115</h1>
              <div className="timeWrapper">
                <p className="label">운영시간</p>
                <p className="time">AM 08:00 - PM 10:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="left-contents">
            <div className="image-wrapper">
              <Link href="/">
                <a>
                  <img src={ImgLogo} alt="AirPremiaLogo" />
                </a>
              </Link>
            </div>
            <div className="content">
              <ul>
                <li>
                  <span>에어프레미아(주)</span>
                  <span>대표이사: 김세영, 심주엽</span>
                  <span className="block"></span>
                  <span>사업자등록번호: 864-81-00738</span>
                  <span>통신판매업신고: 업데이트 필요</span>
                </li>
                <li>
                  <span>
                    서울특별시 강서구 공항대로 248, 4층
                  </span>
                  <span>대표번호 +82 2-6953-6115</span>
                  <span>개인정보보호책임자: 김세영</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="copy-right font-premia-normal">
            <p>
              &copy; AIR PREMIA, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </S.container>
  );
}

Footer.defaultProps = {};

const S = {
  container: styled.footer`
    /* max-width: 1920px; */
    /* min-width: 1440px; */

    width: 100%;
    margin: 0 auto;
    background-color: ${LIGHT_GRAY1};
    h3 {
      font-size: 18px;
    }
    a {
      color: ${LIGHT_GRAY7};
    }
    li {
      margin-bottom: 15px;
      color: ${LIGHT_GRAY7};
      font-size: 16px;
      letter-spacing: -0.5px;
    }
    input {
      width: 280px;
      font-size: 16px;
      border: 0;
      border-bottom: solid 1px ${DARK_GRAY1};
      background: transparent;
      height: 45px;
      padding-right: 45px;
      box-sizing: border-box;

      &:focus {
        outline: none;
      }
      &::placeholder {
        color: ${LIGHT_GRAY6};
      }
    }

    .wrapper {
      margin: 0 auto;
      padding: 50px 80px 60px;
      max-width: 1920px;
      box-sizing: border-box;
      z-index: -1;

      .top {
        padding-bottom: 94px;
        position: relative;
        display: flex;
        border-bottom: solid 1px ${LIGHT_GRAY5};
        .list {
          display: flex;
          justify-content: space-between;
        }
        .title {
          color: ${DARK_GRAY1};
          margin-bottom: 20px;
        }
        .box {
          display: block;

          &:not(:first-of-type) {
            margin-left: 40px;
          }
          .dpN{
            display: none;
          }
        }
        .news {
          margin-left: 40px;
          div {
            position: relative;
          }
          .title {
            margin-bottom: 15px;
          }
          input {
            border-radius: 0;
          }
          span {
            position: absolute;
            font-size: 16px;
            text-decoration: underline;
            top: 5px;
            right: 8px;
            font-weight: 500;
            line-height: 2.73;
            color: ${DARK_GRAY1};
            cursor: pointer;
          }
          .sns {
            padding-top: 20px;
            display: flex;
            .snsButtonWrapper + .snsButtonWrapper {
              padding-left: 10px;
            }
          }
        }
        .support {
          position: absolute;
          right: 0;
          top: 0;

          .number {
            font-family: 'Premia';
            font-size: 40px;
            font-weight: 700;
            line-height: 30px;
            letter-spacing: 0.8px;
          }
          .timeWrapper {
            margin: 10px 0;
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            font-weight: 300;
            line-height: 2.73;
            letter-spacing: -0.3px;
            color: ${LIGHT_GRAY8};

            .time{
              margin-left: 8px;
            }
          }
        }
      }

      .bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        .left-contents {
          display: flex;
        }
        .image-wrapper {
          width: 100px;
          img {
            width: 100%;
            filter: contrast(0.55);
          }
        }
        .content {
          margin-left: 50px;
          ul {
            width: 100%;
            font-size: 11px;
            color: ${LIGHT_GRAY8};
          }
          li {
            margin-bottom: 10px;
            span {
              margin-right: 15px;
            }
          }

          .block{
            display: none;
          }
        }
        .copy-right {
          font-size: 16px;
          color: ${LIGHT_GRAY7};
          font-weight: 600;
          letter-spacing: -0.26px;
        }
      }
    }

    
    @media only screen and (max-width: 1380px) {
      .wrapper {
        .top {
          display: block;

          .rightSide{
            margin-top: 50px;
            display: flex;
            justify-content: space-between;
          }
          .news {
            margin-left: 0;
          }
          .support {
            position: static;
          }
        }
      }
    }
    @media only screen and (max-width: 1280px) {
      .wrapper {
        padding-left: 25px;
        padding-right: 25px;

        .bottom {
          .content {
            .block{
              margin-bottom: 10px;
              display: block;
            }
          }
        }
      }
    }
    @media only screen and (max-width: 1059px) {
      display: none;
    }
  `,
};

export default Footer;
