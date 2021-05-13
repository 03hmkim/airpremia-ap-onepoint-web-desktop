import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  BLUE1,
} from '@airpremia/cdk/styles/colors';

function TabContent({currIdxCont}: IProps) {
  if ( currIdxCont === 0 ) {
    return (
      <C.wrap className="bdN">
        <C.body>
          <C.content>
            항공기 출발 48시간 전 위탁수하물이 추가로 필요한 경우 미리 구매하시면 할인된 요금으로 이용하실 수 있습니다.
            <T.table>
              <div className="tbl-scrolls">
                <table>
                  <colgroup>
                    <col width="14%"></col>
                    <col width="8%"></col>
                    <col width="13%"></col>
                    <col width="13%"></col>
                    <col width="13%"></col>
                    <col width="13%"></col>
                    <col width="13%"></col>
                    <col width="13%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <td rowSpan={2}>구분</td>
                      <td rowSpan={2}>국내선</td>
                      <td colSpan={6}>국제선</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>동북아</td>
                      <td colSpan={2}>동남아</td>
                      <td colSpan={2}>미주</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p>개수 초과</p>
                        <p>(최대 23kg)</p>
                      </td>
                      <td>-</td>
                      <td colSpan={2}>60,000</td>
                      <td colSpan={2}>80,000</td>
                      <td colSpan={2}>160,000</td>
                    </tr>
                    <tr>
                      <td rowSpan={2}>
                        <p>무게 초과</p>
                        <p>(23kg 초과)</p>
                      </td>
                      <td rowSpan={2}>-</td>
                      <td>24~28kg</td>
                      <td>29~32kg</td>
                      <td>24~28kg</td>
                      <td>29~32kg</td>
                      <td>24~28kg</td>
                      <td>29~32kg</td>
                    </tr>
                    <tr>
                      <td>25,000</td>
                      <td>50,000</td>
                      <td>35,000</td>
                      <td>70,000</td>
                      <td>60,000</td>
                      <td>100,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </T.table>
            * 개수/무게 동시 초과 시 각각의 요금이 합산되어 부과됩니다.<br></br>
            예시) 한국 - 동북아 노선에서 20kg 수하물을 추가로 위탁하는 경우: 60,000원(개수 초과)<br></br>
            한국 - 동북아 노선에서 26kg 수하물을 추가로 위탁하는 경우: 60,000원(개수 초과) + 25,000원(무게 초과) = 총 85,000원
          </C.content>
        </C.body>
      </C.wrap>
    )
  } else {
    return (
      <C.wrap className="bdN">
        <C.body>
        <C.content>
            위탁수하물이 추가로 필요하신 경우 탑승수속 카운터에서 구매하실 수 있습니다.
            <T.table>
              <div className="tbl-scrolls">
                <table>
                  <colgroup>
                    <col width="10%"></col>
                    <col width="15%"></col>
                    <col width="15%"></col>
                    <col width="20%"></col>
                    <col width="20%"></col>
                    <col width="20%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <td rowSpan={2} colSpan={2}>구분</td>
                      <td rowSpan={2}>국내선</td>
                      <td colSpan={3}>국제선</td>
                    </tr>
                    <tr>
                      <td>동북아</td>
                      <td>동남아</td>
                      <td>미주</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={2}>
                        <p>개수 초과</p>
                        <p>(최대 23kg)</p>
                      </td>
                      <td>-</td>
                      <td>70,000</td>
                      <td>100,000</td>
                      <td>200,000</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <p>무게 초과</p>
                        <p>(23kg 초과)</p>
                      </td>
                      <td>2,000/kg</td>
                      <td>10,000/kg</td>
                      <td>15,000/kg</td>
                      <td>20,000/kg</td>
                    </tr>
                    <tr>
                      <td rowSpan={2}>크기 초과</td>
                      <td>159~203cm</td>
                      <td>-</td>
                      <td>80,000</td>
                      <td>120,000</td>
                      <td>160,000</td>
                    </tr>
                    <tr>
                      <td>204~292cm</td>
                      <td>10,000</td>
                      <td>160,000</td>
                      <td>240,000</td>
                      <td>320,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </T.table>
            * 개수/무게/크기가 동시 초과 시 각각의 요금이 합산되어 부과됩니다.<br></br>
            예시) 한국 - 동북아 노선에서 20kg 수하물을 추가로 위탁하는 경우: 70,000원(개수 초과)<br></br>
            한국 - 동북아 노선에서 26kg 수하물을 추가로 위탁하는 경우: 70,000원(개수 초과) + 30,000원(무게 초과) = 총 100,000원<br></br>
            한국 - 동북아 노선에서 26kg, 210cm의 수하물을 추가로 위탁하는 경우: 70,000원(개수 초과) + 30,000원(무게 초과) + 160,000원(크기 초과) = 총 260,000원
          </C.content>
        </C.body>
      </C.wrap>
    )
  } 
}


const C = {
  /* 서비스안내 공통css */
  wrap: styled.div`
    border-top: 2px solid ${DARK_GRAY1};

    &.bdN {
      border-top: 0;
    }
  `,
  body: styled.div`
    margin-top: 100px;

    &:first-of-type {
      margin-top: 30px;
    }
  `,
  titleMain: styled.h2`
    font-size: 24px;
    font-weight: bold;

    @media only screen and (max-width: 767px) {
      font-size: 22px;
      line-height: 28px;
      letter-spacing: -0.04em;
    }
  `,
  titleSub: styled.h3`
    font-size: 21px;
    font-weight: 700;

    @media only screen and (max-width: 767px){
      font-size: 16px;
      letter-spacing: -0.32px;
      margin-top: 60px;
    }
  `,
  content: styled.div`
    margin-top: 30px;
    font-size: 18px;
    line-height: 1.8em;

    &.mt60 {
      margin-top: 60px;
    }

    @media only screen and (max-width: 767px){
      margin-top: 40px;
      font-size: 14px;
      letter-spacing: -0.28px;

      &.mt60 {
        margin-top: 40px;
      }
    }
  `,
  linkWrap: styled.div`
    margin-top: 30px;

    @media only screen and (max-width: 1059px) {
      margin-top: 20px;
    }
  `,
  /* 서비스안내 공통css 끝 */
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
        vertical-align: middle;
      }
      thead td{
        color:#fff;
        background:#1b2b45;
        border:1px solid #324158;
        text-align:center !important;
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
        text-align: center;
        vertical-align: middle;
        &>p {
          margin-top: 18px;
        }
        &>p:first-of-type {
          margin-top: 0;
        }
      }
      th:first-child,      
      td:first-child{
        border-left:0;
      }
      th:last-child,
      td:last-child{
        text-align: center;
        vertical-align: middle;
        border-right:0;
      }
      thead th,
      thead td{
        padding: 18px 0;
        border:1px solid #324158;
      }
      tbody th,
      tbody td{
        padding: 18px 0;
        border:1px solid #ddd;
      }
    }
    @media only screen and (max-width: 767px) { 
      padding:20px 0;
      .tbl-scrolls{
        width:100%;
        height:auto;
        overflow:hidden;
        overflow-x:auto;
        table{
          min-width:800px;
          thead{
            td{
              padding:10px;
              font-size:14px;
              height:30px;
              vertical-align:middle;
              text-align:center;
            }
          }
          td{
            padding:10px;
            font-size:14px;
            text-align:left;
          }
          .img-type{
            td{
              text-align:center;
            }
          }
          
        }
      }
      table{
        td{
          font-size:14px;
          padding:10px !important;
          &>p {
            margin-top: 0;
          }
          &>p:first-of-type {
            margin-top: 0;
          }
        }
      }
    }
  `,
}

export default TabContent;
