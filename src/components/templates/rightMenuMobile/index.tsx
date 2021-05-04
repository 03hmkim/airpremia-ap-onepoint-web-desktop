import {
  WHITE1,
  DARK_BLUE1,
} from '@airpremia/cdk/styles/colors';
import styled from 'styled-components';
import ProfileMan01 from 'public/images/usericon/img_profile_man_01.svg';

function RightMenuMobile () {
  return (
    <S.container>
      <S.wrapper>
        <U.wrap>
          <U.content>
            <U.button>
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
            <U.info>
              <div className="info">
                <div className="title">나의 등급</div>
                <div className="text">
                  <span className="badge">BLUE<i className="arrow"></i></span>
                </div>
              </div>
              <div className="info">
                <div className="title">사용 가능 포인트</div>
                <div className="text"><span className="num">369,000</span></div>
              </div>
              <div className="info">
                <div className="title">쿠폰</div>
                <div className="text"><span className="num">3</span>장</div>
              </div>
            </U.info>
          </U.content>
        </U.wrap>
        <M.wrap>
          <M.content>

          </M.content>
        </M.wrap>
      </S.wrapper>
    </S.container>
  );
}

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
    display: flex;
    align-items: center;
    text-align: left;
  `,

  left: styled.div`
    margin-right: 30px;
  `,

  right: styled.div`
    h1 {
      color: ${WHITE1};
      font-family: 'premia';
      font-weight: 700;
      font-size: 30px;

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
    }

    h2 {
      margin-top: 8px;
      color: ${WHITE1};
      font-family: 'heebo';
      font-weight: 700;
      font-size: 12px;
      opacity: 0.6;
    }  
  `,

  info: styled.div`
    margin-top: 35px;

    .info {
      margin-top: 6px;
      display: flex;
      align-items: center;
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
          font-family: 'Premia';
          font-weight: 700;
          font-size: 14px;

          .arrow {
            width: 10px;
            height: 12px;
    
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
    
  `,

  content: styled.div`
  
  `,
}

export default RightMenuMobile;