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
                    <h4>에어프레미아 기업설명회(IR) 개최</h4>
                    <p className="desc">공지사항 본문 내용을 최대 1줄까지 노출하며, 1줄 초과 시 말줄임 표시로 표기됩니다. 내용이 길어지면 말줄임으로 적용됩니다. 현재 공지사항 같은 경우는 이렇게 처리가 됩니다.</p>
                  </div>
                  <div className="date">2021.04.02</div>
                </a>
              </Link>
            </li>
          <li>
              <Link href="">
                <a>
                  <div className="title">
                    <h4>19년 6월 한국 출발 국제선 유류할증료 안내</h4>
                    <p className="desc">공지사항 본문 내용을 최대 1줄까지 노출하며, 1줄 초과 시 말줄임 표시로 표기됩니다. 내용이 길어지면 말줄임으로 적용됩니다.</p>
                  </div>
                  <div className="date">2021.04.02</div>
                </a>
              </Link>
          </li>
          <li>
              <Link href="">
                <a>
                  <div className="title">
                    <h4>오사카 정상 회담 개최에 따른 교통 통제 및 공항 보안 강화 안내</h4>
                    <p className="desc">공지사항 본문 내용을 최대 1줄까지 노출하며, 1줄 초과 시 말줄임 표시로 표기됩니다. 내용이 길어지면 말줄임으로 적용됩니다. 현재 공지사항 같은 경우는 이렇게 처리가 됩니다.</p>
                  </div>
                  <div className="date">2021.04.02</div>
                </a>
              </Link>
          </li>
          <li>
              <Link href="">
                <a>
                  <div className="title">
                    <h4>부산/삿포로 노선 운휴 안내 (1월 3일 부)</h4>
                    <p className="desc">공지사항 본문 내용을 최대 1줄까지 노출하며, 1줄 초과 시 말줄임 표시로 표기됩니다. 내용이 길어지면 말줄임으로 적용됩니다.</p>
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