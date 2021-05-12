import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  BLUE1,
} from '@airpremia/cdk/styles/colors';

function TabContent({currIdxCont}: IProps) {
  if ( currIdxCont === 0 ) {
    return (
      <C.wrap>
        <C.body>
          <C.content>
            항공기 출발 48시간 전 위탁수하물이 추가로 필요한 경우 미리 구매하시면 할인된 요금으로 이용하실 수 있습니다.
            <T.table>
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
                <tbody>
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
      <C.wrap>
        <C.body>
        <C.content>
            위탁수하물이 추가로 필요하신 경우 탑승수속 카운터에서 구매하실 수 있습니다.
            <T.table>
              <table>
                <colgroup>
                  <col width="10%"></col>
                  <col width="15%"></col>
                  <col width="15%"></col>
                  <col width="20%"></col>
                  <col width="20%"></col>
                  <col width="20%"></col>
                </colgroup>
                <tbody>
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


// const S = {
//   container: styled.div``,
//   ul: styled.ul`
//     padding-bottom: 30px;
//   `,
//   li: styled.li`
//     margin-left: 10px;
//     margin-bottom: 15px;
//     padding-left: 10px;
//     position: relative;
//     font-size: 15px;
//     &::before{
//       content:"";
//       width: 4px;
//       height: 4px;
//       top: 5px;
//       left: 0px;
//       text-indent: -9999px;
//       display: block;
//       position: absolute;
//       background-color: ${DARK_GRAY1};
//       border-radius: 50%
//     }
//     &:first-child{
//       margin-top: 20px;
//     }
//     &:last-child{
//       margin-bottom: 0px;
//     }
//   `,

// };


const C = {
  wrap: styled.div`
    margin-top: 70px;
  `,
  body: styled.div`
    margin-top: 140px;
    &:first-of-type{
      margin-top: 30px;
    }
  `,
  title: styled.h4`
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 30px;
    
  `,
  subTitle: styled.h5`
    font-size: 22px;
    font-weight: bold;
    padding-bottom: 30px;
  `,
  itemTitle: styled.h6`
    padding-bottom: 30px;
    font-size: 18px;
    font-weight: bold;
  `,
  linkTitle: styled.a`
    font-size: 16px;
    font-weight: bold;
    color: ${BLUE1};
    line-height: 36px;
    cursor: pointer;
  `,

  itemText: styled.p`
    font-size: 15px;
    line-height: 30px;
    span{
      display: block;
      &:first-child{
        margin-top: 35px;
      }
    }
  `,
  description: styled.p`
    font-size:14px;
    color: ${LIGHT_GRAY8};
    margin-top: 15px;
    &.mt0{
      margin-top: 0;
    }
  `,
  
  content: styled.div`
    margin-top: 12px;
  `,
  button: styled.button`
    background: none;
    color: #ccc;
    font-size: 15px;
    font-weight: bold;
    margin:30px 40px 30px 0;
  `,
  div: styled.div`
    padding-top:50px;
  `,
  ul: styled.ul`
    font-size: 18px;
    font-weight: bold;
  `,
  li: styled.li`
    font-size: 15px;
    line-height: 36px;
    font-weight: normal;
  `,
  span: styled.span`
    color:#FF5800;
    border-bottom: 2px solid #FF5800;
  `,
  p: styled.p``,
  bold: styled.span`
    font-weight: bold;
  `,

  subbox:styled.h5`
    font-size: 15px;
    line-height: 36px;
  `,
  badge:styled.div`
    width: 60px;
    height: 100%;
    display: flex;
    -webkit-box-pack: center;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: #0093ff;
    padding-top: 2px;
    box-sizing: border-box;
    color:#fff;
    font-size: 18px;
    margin-right: 9px;
  `,
  inline: styled.div`
    display: flex;
    align-items: baseline;
    padding-bottom: 30px;
  `,
  sbody: styled.div`
    margin-top: 100px;
  `,
  note: styled.p`
    font-size: 15px;
    color: ${DARK_GRAY1};
    font-weight: bold;
    display: flex;
    justify-align: center;
  `,
  image: styled.p`
    margin-right: 5px;
  `,
  right: styled.div`
    display: block;
  `,
  ml20: styled.div`
    margin-left: 20px;
  `,
  mb60: styled.div`
    margin-bottom: 60px;
  `,
  mt60: styled.div`
    margin-top: 60px;
  `,
  mb30: styled.div`
    margin-bottom: 30px;
  `,
  linkm: styled.p`
    font-weight: 600;
    color: ${BLUE1};
    margin-top: 20px;
    &.dpin{
      display: inline-block;
    }
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
        vertical-align: middle;
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
      // th:first-child,      
      // td:first-child{
      //   text-align: left;
      // }
      th:last-child,
      td:last-child{
        text-align: center;
        vertical-align: middle;
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
}

export default TabContent;
