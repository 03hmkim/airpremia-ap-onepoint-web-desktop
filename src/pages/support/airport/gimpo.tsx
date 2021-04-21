import styled from 'styled-components';
import {
  ComTitle,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  BLUE1,
} from '@airpremia/cdk/styles/colors';


function AirportIncheon(){
  return (
    <Container>
      <ComTitle
        title="취항지 공항 정보"
      />
      <C.wrap>
        <C.body>
            <C.titleMain>김포공항</C.titleMain>
            <C.sb>
              <T.table>
                <table>
                  <colgroup>
                    <col width="20%"></col>
                    <col width="80%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>기준</th>
                      <td>내용</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>위치</th>
                      <td>서울특별시 강서구 하늘길 112(공항동)</td>
                    </tr>
                    <tr>
                      <th>운영시간</th>
                      <td>
                        <p>요일 : 월 ~ 일</p>
                        <p>시간 : 04:30 ~ 23:00</p>
                      </td>
                    </tr>
                    <tr>
                      <th>대표전화</th>
                      <td>1661-2626</td>
                    </tr>
                    <tr>
                      <th>홈페이지</th>
                      <td>
                        <a className="link" href="https://www.airport.co.kr/gimpo/index.do" target="_blank">https://www.airport.co.kr/gimpo/index.do</a>
                      </td>
                    </tr>
                    <tr>
                      <th>오시는길</th>
                      <td>
                        <a className="link" href="https://www.airport.co.kr/gimpo/cms/frCon/index.do?MENU_ID=1290" target="_blank">https://www.airport.co.kr/gimpo/cms/frCon/index.do?MENU_ID=1290</a>
                      </td>
                    </tr>
                    <tr>
                      <th>체크인 카운터</th>
                      <td>
                        <p>AXX ~ XX</p>
                        <p>카운터 사진 첨부 예정</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </T.table>
            </C.sb>
        </C.body>
      </C.wrap>
    </Container>
  );
}
  
const C = {
  wrap: styled.div`
    margin-top: 70px;
    border-top: 2px solid ${DARK_GRAY1};
  `,
  body: styled.div`
    margin-top: 140px;
    &:first-of-type{
      margin-top: 30px;
    }
  `,
  titleMain: styled.h3`
    font-size: 30px;
    font-weight: bold;
  `,
  sb: styled.div`
    margin-top: 60px;
  `,
};

const T = {
  table: styled.div`
    .taL,
    .taL{
      text-align: left;
    }
    .taR,
    .taR{
      text-align: right;
    }
    table {
      width: 100%;
      th,
      thead td,
      td strong {
        color: ${DARK_GRAY1};
        font-size: 15px;
        font-weight: bold;
        line-height: 1.6;
        letter-spacing: -0.3px;
        text-align: center;
      }
      td strong {
        margin-top: 30px;
        display: block;
        &:first-of-type {
          margin-top: 0;
        }
      }
      td{
        font-size: 14px;
        font-weight: 400;
        line-height: 1.9;
        letter-spacing: -0.3px;
        text-align: right;

        .link{
          color: ${BLUE1};
        }

        &>p {
          margin-top: 18px;
        }

        &>p:first-of-type {

          margin-top: 0;
        }

        .txt {
          margin-top: 10px;

          p {
            position: relative;
            color: ${LIGHT_GRAY8};
            &.iLine{
              padding-left: 8px;
            }

            &.iLine::after{
              content: "-";
              position: absolute;
              left: 0;
              top: 0;
              display: block;
            }
          }
        }
      }
      th:first-child,      
      td:first-child{
        text-align: left;
      }
      th:last-child,
      td:last-child{
        text-align: left;
      }
      thead th,
      thead td{
        padding: 18px 0;
        border-bottom: 1px solid ${DARK_GRAY1};
      }
      tbody th,
      tbody td{
        padding: 18px 0;
        border-bottom: 1px solid ${LIGHT_GRAY5};
      }
    }
  `,
};

export default AirportIncheon;