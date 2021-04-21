import styled from 'styled-components';
import { Container } from 'src/styles/layout';
import { DARK_GRAY1, LIGHT_GRAY1, LIGHT_GRAY6, RED2 } from '@airpremia/cdk/styles/colors';
import { ComTitle, BtnBlue } from 'src/components';
import IcoFlight from 'public/images/ico_flight.svg';

function UsePoint(){

  return (
    <Container>
      <ComTitle
        title="포인트 사용 안내"
        description = {
          <>
            <p>적립한 프레미안포인트로 항공권 구매, 좌석 업그레이드, 사전 수하물 구매, 사전 좌석 구매가 가능합니다.</p>
            <p>국제선 항공권에 대해서만 사용이 가능한 점 양해 부탁드립니다.</p>
          </>
        }
        desColor = 'gray'
      />
      <C.wrap>
        <C.title>포인트로 항공권 구매하기</C.title>
        <C.mt30>
          <C.ul>
            <C.li>프레미안 포인트를 사용하여 국제선 항공권 구매가 가능합니다.</C.li>
            <C.li>포인트 항공권의 가격은 아래 표에서 확인이 가능하며 예고없이 변동될 수 있습니다.</C.li>
          </C.ul>
          <C.btnWrap>
            <BtnBlue className="down">
              <a href="/document/archive_health.pdf" download>
                국제선 포인트항공권 운임 공제표</a></BtnBlue>
          </C.btnWrap>
        </C.mt30>
      </C.wrap>
      <C.sbody>
        <C.title>포인트로 좌석 업그레이드하기</C.title>
        <C.mt30>
          <C.ul>
            <C.li>프레미안포인트를 사용하여 Economy Flex (Y,B,M Class) 운임 구매 시 프리미엄이코노미 좌석으로 업그레이드가 가능합니다. </C.li>
          </C.ul>          
          <T.wrap>
            <T.title>좌석 업그레이드를 위한 포인트 공제표</T.title>
            <T.body>
              <table>
                <colgroup>
                  <col width="50%"></col>
                  <col width=""></col>
                </colgroup>
                <tr>
                  <th>노선</th>
                  <th>포인트</th>
                </tr>
                <tr>
                  <td className="flight"><span className="text taR">한국</span><span className="icon_flight"><IcoFlight /></span><span className="text">베트남</span></td>
                  <td className="red">미정</td>
                </tr>
                <tr>
                  <td className="flight"><span className="text taR">한국</span><span className="icon_flight"><IcoFlight /></span><span className="text">태국</span></td>
                  <td className="red">미정</td>
                </tr>
                <tr>
                  <td className="flight"><span className="text taR">한국</span><span className="icon_flight"><IcoFlight /></span><span className="text">싱가폴</span></td>
                  <td className="red">미정</td>
                </tr>
                <tr>
                  <td className="flight"><span className="text taR">한국</span><span className="icon_flight"><IcoFlight /></span><span className="text">미주</span></td>
                  <td className="red">미정</td>
                </tr>
              </table>
            </T.body>
          </T.wrap>
        </C.mt30>
      </C.sbody>
      <C.sbody>
        <C.title>포인트로 사전 수하물 구매하기</C.title>
        <C.mt30>
          <C.ul>
            <C.li>프레미아포인트를 사용하여 사전 수하물 구매가 가능합니다.</C.li>
          </C.ul>          
          <T.wrap>
            <T.title>사전 수하물 구매를 위한 포인트 공제표</T.title>
            <T.body>
              <table>
                <colgroup>
                  <col width="20%"></col>
                  <col width="20%"></col>
                  <col width="20%"></col>
                  <col width="20%"></col>
                  <col width=""></col>
                </colgroup>
                <tr>
                  <th colSpan={2} rowSpan={2}>구분</th>
                  <th colSpan={3}>구간</th>
                </tr>
                <tr>
                  <th>일본/홍콩</th>
                  <th>동남아</th>
                  <th>미주</th>
                </tr>
                <tr>
                  <td rowSpan={3}>Premia 42</td>
                  <td>23kg 이하</td>
                  <td>6,000</td>
                  <td>8,000</td>
                  <td>16,000</td>
                </tr>
                <tr>
                  <td>23kg 초과 28kg이하</td>
                  <td>2,500</td>
                  <td>3,500</td>
                  <td>6,000</td>
                </tr>
                <tr>
                  <td>29초과 32kg이하</td>
                  <td>5,000</td>
                  <td>7,000</td>
                  <td>10,000</td>
                </tr>
                <tr>
                  <td rowSpan={3}>Economy 35</td>
                  <td>23kg 이하</td>
                  <td>6,000</td>
                  <td>8,000</td>
                  <td>16,000</td>
                </tr>
                <tr>
                  <td>23kg 초과 28kg이하</td>
                  <td>2,500</td>
                  <td>3,500</td>
                  <td>6,000</td>
                </tr>
                <tr>
                  <td>29초과 32kg이하</td>
                  <td>5,000</td>
                  <td>7,000</td>
                  <td>10,000</td>
                </tr>
              </table>
            </T.body>
          </T.wrap>
        </C.mt30>
      </C.sbody>
      <C.sbody>
        <C.title>포인트로 사전 좌석 구매하기</C.title>
        <C.mt30>
          <C.ul>
            <C.li>프레미아포인트를 사용하여 유상 좌석 구매가 가능합니다.</C.li>
          </C.ul>          
          <T.wrap>
            <T.title>좌석 업그레이드를 위한 포인트 공제표</T.title>
            <T.body>
              <table>
                <colgroup>
                  <col width="20%"></col>
                  <col width="20%"></col>
                  <col width="20%"></col>
                  <col width="20%"></col>
                  <col width=""></col>
                </colgroup>
                <tr>
                  <th colSpan={2} rowSpan={2}>구분</th>
                  <th colSpan={3}>노선</th>
                </tr>
                <tr>
                  <th className="flight"><span className="text taR">한국</span><span className="icon_flight"><IcoFlight /></span><span className="text">동북아</span></th>
                  <th className="flight"><span className="text taR">한국</span><span className="icon_flight"><IcoFlight /></span><span className="text">동남아</span></th>
                  <th className="flight ctN"><span className="text taR">한국</span><span className="icon_flight"><IcoFlight /></span><span className="text">미주/유럽/대양주</span></th>
                </tr>
                <tr>
                  <td colSpan={2}>Bulkhead (10Row) 및 비상구 열 (26Row)</td>
                  <td>2,000</td>
                  <td>4,000</td>
                  <td>12,000</td>
                </tr>
                <tr>
                  <td rowSpan={2}>A zone<br />(11~22Row)</td>
                  <td>Aisle / Window</td>
                  <td>1,300</td>
                  <td>2,500</td>
                  <td>5,000</td>
                </tr>
                <tr>
                  <td>일반석</td>
                  <td>1,000</td>
                  <td>2,000</td>
                  <td>4,000</td>
                </tr>
              </table>
            </T.body>
          </T.wrap>
        </C.mt30>
      </C.sbody>
    </Container>
  
  )
}


const C = {
  wrap: styled.div`
    margin-top: 80px;
    padding-top: 60px;
    border-top: 2px solid ${DARK_GRAY1};
  `,
  sbody: styled.div`
    margin-top: 100px;
  `,
  title: styled.h4`
    font-size: 22px;
    font-weight: bold;
  `,
  mt30:styled.div`
    margin-top: 30px;
      .flex{
        display: flex;
        align-items: center;
        padding-bottom: 25px;
        &:last-child{
          padding: 0;
        }
      }
  `,
  ul:styled.ul`
  `,
  li: styled.li`
    position: relative;
    line-height: 36px;
  `,
  btnWrap: styled.div`
    margin-top: 10px;
  `,
}

const T = {
  wrap: styled.div`
    margin-top: 20px;
  `,
  title: styled.div`
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 36px;
    font-weight: 600;
  `,
  body: styled.div`

    table{
      width: 100%;

      th{
        background: ${LIGHT_GRAY1};
      }

      .flight{
        .text{
          width: calc(50% - 40px);
          text-align: left;
          display: inline-block;

          &.taR{              
            text-align: right;
          }
        }
        .icon_flight{
          width: 18px;
          height: 18px;
          margin: 0 21px;
          padding-top: 4px;
          display: inline-block;
          vertical-align: top;
        }

        &.ctN{
          .text{
            width: auto;
          }
        }
      }

      th,
      td{
        padding: 15px 2px;
        font-size: 14px;
        line-height: 28px;
        letter-spacing: -0.3px;
        text-align: center;
        vertical-align: middle;
        border-left: 1px solid ${LIGHT_GRAY6};
        border-bottom: 1px solid ${LIGHT_GRAY6};

        &.red{
          color: ${RED2};
        }
      }

      tr:first-of-type th,
      tr:first-of-type td{
        border-top: 1px solid ${LIGHT_GRAY6};
      }

      th:last-child,
      td:last-child{
        border-right: 1px solid ${LIGHT_GRAY6};
      }
    }
  `,
}


export default UsePoint;