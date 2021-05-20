import {
  WHITE1,
  BLUE1,
  LIGHT_GRAY10,
  DARK_BLUE1,
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';
import styled from 'styled-components';
import ProfileMan01 from 'public/images/usericon/img_profile_man_01.svg';
import ProfileMan02 from 'public/images/usericon/img_profile_man_02.svg';
import IcoNotice from 'public/images/ico_notice.svg';
import {
  Footer
} from 'src/components';
import Link from 'next/link';

function RightMenuMobile () {
  return (
    <S.container>
      <S.wrapper>
        <U.wrap>
          <U.content>
            <U.button className="login">
              <U.left>
                <div className="icon">
                  <ProfileMan01 />
                </div>
              </U.left>
              <U.right>
                <h1>LEE JIWON <i className="arrow"></i></h1>
                <h2>jw.lee@airpremia.com</h2>
              </U.right>
            </U.button>
            <U.button className="logout"  style={{display:'none'}}>
              <U.left>
                <div className="icon">
                  <ProfileMan02 />
                </div>
              </U.left>
              <U.right className="flex">
                <h3>
                  <strong>로그인</strong>하고<br />
                  더 많은 혜택을 확인하세요!
                </h3>
                <h4><i className="arrow"></i></h4>
              </U.right>
            </U.button>
          </U.content>
        </U.wrap>
        <M.wrap>
          <M.content>
            <M.menu>
              <dl className="notice">
                <dt>
                  <i><IcoNotice /></i> 공지사항
                </dt>
                <dd>
                  <p>오사카 정상 회담 개최에 따른 교통 통제 및 공항 보안 강화 안내</p>
                  <i className="arrow go"></i>
                </dd>
              </dl>
              <dl className="list">
                <dt>예매</dt>
                <dd>
                  <Link href='/ticket/flight'>
                    <a>
                      <p>항공권 예매</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
                <dd>
                  <Link href='/ticket/promotion'>
                    <a>
                      <p>프로모션</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
                <dd>
                  <Link href='/ticket/fare'>
                    <a>
                      <p>운임안내</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
              </dl>
              <dl className="list">
                <dt>조회/체크인</dt>
                <dd>
                  <Link href='/checkin/find-trip'>
                    <a>
                      <p>예약 조회</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
                <dd>
                  <Link href='/checkin/online'>
                    <a>
                      <p>온라인 체크인</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
                <dd>
                  <Link href='/checkin/depArrCheck'>
                    <a>
                      <p>출/도착 조회</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
                <dd>
                  <Link href='/checkin/schedule'>
                    <a>
                      <p>운항 스케줄</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
              </dl>
              <dl className="list">
                <dt>프레미아 멤버스</dt>
                <dd>
                  <Link href='/premiaMembers/grade'>
                    <a>
                      <p>회원 등급</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
                <dd>
                  <Link href='/premiaMembers/savePoint'>
                    <a>
                      <p>포인트 적립</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
                <dd>
                  <Link href='/premiaMembers/usePoint'>
                    <a>
                      <p>포인트 사용</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
              </dl>
              <dl className="list">
                <dt>도움이 필요한 손님</dt>
                <dd>
                  <Link href='/support/need/infant'>
                    <a>
                      <p>유아 동반 손님</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
                <dd>
                  <Link href='/support/need/teenager'>
                    <a>
                      <p>혼자 여행하는 어린이,청소년</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
                <dd>
                  <Link href='/support/need/pregnant'>
                    <a>
                      <p>임산부 손님</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
                <dd>
                  <Link href='/support/need/help'>
                    <a>
                      <p>장애인 및 의료 도움이 필요한 손님</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
                <dd>
                  <Link href='/support/need/pet'>
                    <a>
                      <p>반려동물을 동반하는 손님</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
              </dl>
              <dl className="list">
                <dt>수하물</dt>
                <dd>
                  <Link href='/support/baggage/prohibition'>
                    <a>
                      <p>운송제한물품</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
                <dd>
                  <Link href='/support/baggage/free-baggage'>
                    <a>
                      <p>무료수하물</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
                <dd>
                  <Link href='/support/baggage/special-carry'>
                    <a>
                      <p>초과수하물</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
                <dd>
                  <Link href='/support/baggage/lost-carry'>
                    <a>
                      <p>수하물 배상</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
              </dl>
              <dl className="list">
                <dt>부가서비스 구매</dt>
                <dd>
                  <Link href='/support/additional-service/baggage'>
                    <a>
                      <p>사전 수하물 구매</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
                <dd>
                  <Link href='/support/additional-service/seat'>
                    <a>
                      <p>사전 좌석 구매</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
                <dd>
                  <Link href='/support/additional-service/side-seat'>
                    <a>
                      <p>공항에서의 옆좌석 구매</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
                <dd>
                  <Link href='/support/additional-service/packing'>
                    <a>
                      <p>수하물용품 구매</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
              </dl>
              <dl className="list">
                <dt>취항지 공항 정보</dt>
                <dd>
                  <Link href='/support/airport/incheon'>
                    <a>
                      <p>인천공항</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
                <dd>
                  <Link href='/support/airport/gimpo'>
                    <a>
                      <p>김포공항</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
                <dd>
                  <Link href='/support/airport/jeju'>
                    <a>
                      <p>제주공항</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
              </dl>
              <dl className="list">
                <dt>탑승 수속</dt>
                <dd>
                  <Link href='/support/checkin/info'>
                    <a>
                      <p>탑승 수속 안내</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
              </dl>
              <dl className="list">
                <dt>고객지원</dt>
                <dd>
                  <Link href='/customer/notice/list'>
                    <a>
                      <p>공지사항</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
                <dd>
                  <Link href='/customer/faq'>
                    <a>
                      <p>자주 묻는 질문</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
                <dd>
                  <Link href='/customer/archive'>
                    <a>
                      <p>서식 자료실</p>
                      <i className="arrow go"></i>
                    </a>
                  </Link>
                </dd>
              </dl>
            </M.menu>
          </M.content>
        </M.wrap>
        <F.wrap>
          <F.content>
            <Footer />
          </F.content>
        </F.wrap>
      </S.wrapper>
    </S.container>
  );
}


const flex = `
  display: flex;
  align-items: center;
`;

const S = {
  container: styled.div`
    background-color: ${DARK_BLUE1};
  `,

  wrapper: styled.div`
    
  `,
}

const U = {
  wrap: styled.div`
    .arrow {
      position: relative;
      display: inline-block;

      &:before,
      &:after {
        content: "";
        position: absolute;
        display: block;
        background-color: ${WHITE1};
      }

      &:before {
        top: 7px;
        transform: rotate(45deg);
      }

      &:after {
        top: 11px;
        transform: rotate(-45deg);
      }
    }
  `,

  content: styled.div`
    padding: 40px 25px;
  `,

  button: styled.button`
    width: 100%;
    ${flex};
    text-align: left;

    &.logout {
      .arrow {
        display: none;
      }
    }
  `,

  left: styled.div`
    margin-right: 30px;
  `,

  right: styled.div`

    &.flex {
      width: calc(100% - 86px);
      ${flex};
      justify-content: space-between;
    }

    .arrow {
      width: 20px;
      height: 20px;

      &:before,
      &:after {
        content: "";
        width: 7px;
        height: 2px;
        left: 7px;
      }

      &:before {
        top: 7px;
      }

      &:after {
        top: 11px;
      }
    }
    
    h1 {
      color: ${WHITE1};
      font-family: 'premia';
      font-weight: 700;
      font-size: 30px;
    }

    h2 {
      margin-top: 8px;
      color: ${WHITE1};
      font-family: 'heebo';
      font-weight: 700;
      font-size: 12px;
      opacity: 0.6;
    }

    h3 {
      color: ${WHITE1};
      font-size: 15px;
      line-height: 23px;

      strong {
        text-decoration: underline;
      }
    }
  `,

  info: styled.div`
    margin-top: 35px;

    .info {
      margin-top: 6px;
      ${flex};
      justify-content: space-between;
      color: ${WHITE1};

      &:first-child {
        margin-top: 0;
      }

      .title {
        font-size: 12px;
      }

      .text {
        font-size: 19px;

        .badge {
          padding: 5px 9px 4px 12px;
          ${flex};
          font-family: 'Premia';
          font-weight: 700;
          font-size: 14px;
          background-color: ${BLUE1};
          border-radius: 4px;

          .arrow {
            width: 9px;
            height: 11px;
    
            &:before,
            &:after {
              content: "";
              width: 5px;
              height: 2px;
              left: 2px;
            }
    
            &:before {
              top: 2px;
            }
    
            &:after {
              top: 5px;
            }
          }
        }

        .num {
          font-family: 'Premia';
          font-weight: 700;
          font-size: 24px;
        }
      }
    }
  `,
}

const M = {
  wrap: styled.div`
    .arrow.go {
      width: 20px;
      height: 20px;
      position: relative;
      display: inline-block;

      &:before,
      &:after {
        content: "";
        width: 7px;
        height: 2px;
        position: absolute;
        left: 7px;
        display: block;
        background-color: ${DARK_GRAY1};
      }

      &:before {
        top: 7px;
        transform: rotate(45deg);
      }

      &:after {
        top: 11px;
        transform: rotate(-45deg);
      }
    }  
  `,

  content: styled.div`
    overflow: hidden;
    background-color: ${WHITE1};
    border-radius: 12px 12px 0 0;
  `,

  menu: styled.div`
    padding-left: 25px;

    .notice {
      padding: 30px 20px 30px 0;
      ${flex};

      dt {
        ${flex};
        margin-right: 20px;
        font-size: 13px;

        i {
          width: 20px;
          height: 19px;
          margin-right: 5px;
        }
      }

      dd {        
        width: calc(100% - 93px);
        ${flex};

        p {
          width: calc(100% - 20px);
          font-size: 13px;
          font-weight: 300;
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          line-height: inherit;
        }
      }
    }

    .list {
      padding-bottom: 16px;
      border-top: 1px solid ${LIGHT_GRAY10};

      dt {
        padding-top: 22px;
        padding-bottom: 16px;
        font-size: 13px;
        font-weight: 700;
      }

      dd {

        a {
          padding-right: 20px;
          ${flex};
          justify-content: space-between;
        }

        p {
          padding-left: 12px;
          font-size: 15px;
          line-height: 50px;
        }
      }
    }
  `,
}

const F = {
  wrap: styled.div`
    
  `,

  content: styled.div`
  
  `,
}

export default RightMenuMobile;