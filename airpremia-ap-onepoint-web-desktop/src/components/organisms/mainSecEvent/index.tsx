import styled from 'styled-components';
import {
  WHITE1,
  LIGHT_GRAY2,
  LIGHT_GRAY5,
  LIGHT_GRAY7,
  DARK_GRAY1,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import Link from 'next/link';

function MainSecEvent () {
  return (
    <S.container>
      <S.banner>
        <ul>
          <li className="list">
            <Link href="">
              <a>
                <div className="image"></div>
                <p className="badgeWrap"><span className="badge blue">D-13</span></p>
                <h4>맛있는 콜드브루 아이스. 크림치즈 앙버터랑 먹으면 더 맛있어요!</h4>
                <p className="date">2021. 3.12. ~ 2021. 5. 1.</p>
              </a>
            </Link>
          </li>
          <li className="list">
            <Link href="">
              <a>
                <div className="image"></div>
                <p className="badgeWrap"><span className="badge blue">D-13</span></p>
                <h4>맛있는 콜드브루 아이스. 크림치즈 앙버터랑 먹으면 더 맛있어요!</h4>
                <p className="date">2021. 3.12. ~ 2021. 5. 1.</p>
              </a>
            </Link>
          </li>
          <li className="list">
            <Link href="">
              <a>
                <div className="image"></div>
                <p className="badgeWrap"><span className="badge blue">D-13</span></p>
                <h4>맛있는 콜드브루 아이스. 크림치즈 앙버터랑 먹으면 더 맛있어요!</h4>
                <p className="date">2021. 3.12. ~ 2021. 5. 1.</p>
              </a>
            </Link>
          </li>
          <li className="list">
            <Link href="">
              <a>
                <div className="image"></div>
                <p className="badgeWrap"><span className="badge blue">D-13</span></p>
                <h4>맛있는 콜드브루 아이스. 크림치즈 앙버터랑 먹으면 더 맛있어요!</h4>
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
    }

    .image {
      width: 100%;
      height: 210px;
      display: block;
      background: ${LIGHT_GRAY2};
      border-radius: 20px;
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
      color: ${LIGHT_GRAY7};
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