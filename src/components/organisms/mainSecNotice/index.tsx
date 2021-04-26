import styled from 'styled-components';
import { 
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  ORANGE1,
} from '@airpremia/cdk/styles/colors';
import Link from 'next/link';

function MainSecNotice () {
  return (
    <S.container>
      <S.listWrapper>
        <ul>
            <li>
              <Link href="">
                <a>
                  <div className="title">
                    <h4>맛있는 콜드브루 아이스 크림치즈 앙버터랑 먹으면 더 맛있어요!</h4>
                    <p className="desc">맛있는 콜드브루 아이스 크림치즈 앙버터랑 먹으면 더 맛있어요! 맛있는 콜드브루 아이스 크림치즈 앙버터랑 먹으면 더 맛있어요!</p>
                  </div>
                  <div className="date">2021.04.02</div>
                </a>
              </Link>
            </li>
          <li>
              <Link href="">
                <a>
                  <div className="title">
                    <h4>맛있는 콜드브루 아이스 크림치즈 앙버터랑 먹으면 더 맛있어요!</h4>
                    <p className="desc">맛있는 콜드브루 아이스 크림치즈 앙버터랑 먹으면 더 맛있어요! 맛있는 콜드브루 아이스 크림치즈 앙버터랑 먹으면 더 맛있어요!</p>
                  </div>
                  <div className="date">2021.04.02</div>
                </a>
              </Link>
          </li>
          <li>
              <Link href="">
                <a>
                  <div className="title">
                    <h4>맛있는 콜드브루 아이스 크림치즈 앙버터랑 먹으면 더 맛있어요!</h4>
                    <p className="desc">맛있는 콜드브루 아이스 크림치즈 앙버터랑 먹으면 더 맛있어요! 맛있는 콜드브루 아이스 크림치즈 앙버터랑 먹으면 더 맛있어요!</p>
                  </div>
                  <div className="date">2021.04.02</div>
                </a>
              </Link>
          </li>
          <li>
              <Link href="">
                <a>
                  <div className="title">
                    <h4>맛있는 콜드브루 아이스 크림치즈 앙버터랑 먹으면 더 맛있어요!</h4>
                    <p className="desc">맛있는 콜드브루 아이스 크림치즈 앙버터랑 먹으면 더 맛있어요! 맛있는 콜드브루 아이스 크림치즈 앙버터랑 먹으면 더 맛있어요!</p>
                  </div>
                  <div className="date">2021.04.02</div>
                </a>
              </Link>
          </li>
        </ul>
      </S.listWrapper>
    </S.container>
  );
}


const S = {
  container: styled.div`

  `,
  listWrapper: styled.div`
    border-top: 1px solid ${DARK_GRAY1};
    border-bottom: 1px solid ${DARK_GRAY1};

    > ul > li {
      padding: 30px 0;
      border-bottom: 1px solid ${LIGHT_GRAY5};

      &:last-child {
        border-bottom: 0;
      }

      &::after{
        content: "";
        display: block;
        clear: both;
      }

      a:hover {
        h4 {          
          color: ${ORANGE1};
        }
      }
    }
    .title {
      width: calc(100% - 120px);
      float: left;

      h4{
        font-size: 21px;
        font-weight: bold;
        line-height: 1.3em;
      }

      .desc {
        margin-top: 10px;
        color: ${LIGHT_GRAY8};
        font-size: 18px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 1.3em;
      }
    }

    .date {
      margin-top: 20px;
      float: right;
      color: ${LIGHT_GRAY8};
      font-size: 18px;
    }

    @media only screen and (max-width: 767px) {
      > ul > li {
        padding: 15px 0;
      }

      .title {
        width: 100%;

        h4 {
          font-size: 16px;
        }

        .desc {
          font-size: 13px;
          font-weight: 300;
        }
      }

      .date {
        display: none;
      }
    }
  `,
};

export default MainSecNotice;