import styled from 'styled-components';
import {
  WHITE1,
  LIGHT_GRAY2,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  DARK_GRAY1,
  BLUE1,
  ORANGE1,
} from '@airpremia/cdk/styles/colors';
import Link from 'next/link';
import eventImg01 from 'public/images/ticket/promotion/list/promotion_bg_01.png';
import eventImg02 from 'public/images/ticket/promotion/list/promotion_bg_02.png';
import eventImg03 from 'public/images/ticket/promotion/list/promotion_bg_03.png';
import eventImg04 from 'public/images/ticket/promotion/list/promotion_bg_04.png';

function MainSecEvent () {
  return (
    <S.container>
      <S.banner>
        <ul>
          <li className="list">
            <Link href="/ticket/promotion">
              <a>
                <div className="img num01"></div>
                <p className="badgeWrap"><span className="badge blue">D-5</span></p>
                <h4>산호세 신규 취항 기념, 산호세행 15% 할인 이벤트</h4>
                <p className="date">2021. 3.12. ~ 2021. 5. 1.</p>
              </a>
            </Link>
          </li>
          <li className="list">
            <Link href="/ticket/promotion">
              <a>
                <div className="img num02"></div>
                <p className="badgeWrap"><span className="badge blue">D-8</span></p>
                <h4>기내면세품 예약하고 무료 호치민 여행 떠나자!</h4>
                <p className="date">2021. 3.12. ~ 2021. 5. 1.</p>
              </a>
            </Link>
          </li>
          <li className="list">
            <Link href="/ticket/promotion">
              <a>
                <div className="img num03"></div>
                <p className="badgeWrap"><span className="badge blue">D-13</span></p>
                <h4>퀴즈 맞추고 마일리지 받아가세요!</h4>
                <p className="date">2021. 3.12. ~ 2021. 5. 1.</p>
              </a>
            </Link>
          </li>
          <li className="list">
            <Link href="/ticket/promotion">
              <a>
                <div className="img num04"></div>
                <p className="badgeWrap"><span className="badge blue">D-15</span></p>
                <h4>퀴즈 맞추고 함께 샌프란시스코로 떠나요 :-)</h4>
                <p className="date">2021. 3.12. ~ 2021. 5. 1.</p>
              </a>
            </Link>
          </li>
        </ul>
      </S.banner>
    </S.container>
  );
}

const S = {
  container: styled.div`

  `,
  banner: styled.div`

    ul {
      display: flex;
      justify-content: space-between;
    }

    .list {
      width: calc(25% - 30px);

      a:hover {
        h4 {          
          color: ${ORANGE1};
        }
      }
    }

    .img {
      width: 100%;
      height: 210px;
      display: block;
      overflow: hidden;
      background: ${LIGHT_GRAY2};
      background-size: cover;
      background-position: center;
      border-radius: 20px;

      &.num01 {
        background-image: url(${eventImg01});
      }
      &.num02 {
        background-image: url(${eventImg02});
      }
      &.num03 {
        background-image: url(${eventImg03});
      }
      &.num04 {
        background-image: url(${eventImg04});
      }
    }

    .badgeWrap{
      margin-top: 10px;

      .badge {
        padding: 0 15px;
        color: ${WHITE1};
        font-weight: 700;
        line-height: 30px;
        background: ${LIGHT_GRAY5};
        border-radius: 15px;

        &.blue{
          background: ${BLUE1};
        }

        &.black{
          background: ${DARK_GRAY1};
        }
      }
    }

    h4 {
      margin-top: 27px;
      font-size: 21px;
      font-weight: 700;
      line-height: 1.3em;
    }

    .date {
      margin-top: 20px;
      color: ${LIGHT_GRAY8};
      font-size: 18px;
      line-height: 1.3em;
    }

    @media only screen and (max-width: 1059px) {
      .list {
        width: calc(25% - 15px);
      }
    }

    @media only screen and (max-width: 767px) {
      ul {
        flex-flow: wrap;
      }

      .list {
        width: calc(50% - 10px);
        margin-bottom: 40px;

        &:nth-child(3),
        &:nth-child(4) {
          margin-bottom: 0;
        }
      }

      h4 {
        margin-top: 12px;
        font-size: 16px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: inherit;
        white-space: normal !important;
        display: -webkit-box !important;
        -webkit-line-clamp: 2 !important;
        -webkit-box-orient: vertical !important;
        word-wrap: break-word !important;
      }

      .date {
        margin-top: 12px;
        font-size: 13px;
        font-weight: 300;
      }
    }

    @media only screen and (max-width: 479px) {      
      .list {
        width: 100%;

        &:nth-child(3) {
          margin-bottom: 40px;
        }
      }
    }
  `,
};

export default MainSecEvent;