import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY7,
  LIGHT_GRAY8,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';

function TabContentService({currIdxCont}: IProps) {
  if ( currIdxCont === 0 ) {
    return (
      <C.wrap>
        <C.sbody>
          <C.tmi>
            <T.table>
              <table>
                <colgroup>
                  <col width="25%"></col>
                  <col width="25%"></col>
                  <col width="25%"></col>
                  <col width="25%"></col>
                </colgroup>
                <thead>
                  <tr>
                    <th></th>
                    <td>라이트</td>
                    <td>스탠다드</td>
                    <td>플렉스</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>위탁수하물</td>
                    <td>20KG</td>
                    <td>20KG</td>
                    <td>20KG</td>
                  </tr>
                  <tr>
                    <td>기내 수하물</td>
                    <td>10KG</td>
                    <td>10KG</td>
                    <td>10KG</td>
                  </tr>
                  <tr>
                    <td>유아 할인</td>
                    <td>제공</td>
                    <td>제공</td>
                    <td>제공</td>
                  </tr>
                  <tr>
                    <td>소아 할인</td>
                    <td><C.noOffer>미제공</C.noOffer></td>
                    <td><C.noOffer>미제공</C.noOffer></td>
                    <td>제공</td>
                  </tr>
                  <tr>
                    <td>포인트 적립</td>
                    <td><C.noOffer>미제공</C.noOffer></td>
                    <td>제공</td>
                    <td>제공</td>
                  </tr>
                  <tr>
                    <td>비동반 소아</td>
                    <td><C.noOffer>미제공</C.noOffer></td>
                    <td><C.noOffer>미제공</C.noOffer></td>
                    <td>제공</td>
                  </tr>
                </tbody>
              </table>
            </T.table>
          </C.tmi>
          <C.sb>
            <C.content>
              <C.yell>*</C.yell> 
              <C.lg>상기 서비스는 국내선 항공편에서 제공됩니다.</C.lg>
            </C.content>
          </C.sb>
        </C.sbody>
      </C.wrap>
    )
  } else {
    return (
      <C.wrap>
        <C.sbody>
          <C.tmi>
            <T.table>
              <table>
                <colgroup>
                  <col width="33%"></col>
                  <col width="33%"></col>
                  <col width="33%"></col>
                </colgroup>
                <thead>
                  <tr>
                    <th></th>
                    <td>스탠다드</td>
                    <td>플렉스</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>위탁수하물</td>
                    <td>30KG</td>
                    <td>30KG</td>
                  </tr>
                  <tr>
                    <td>기내 수하물</td>
                    <td>10KG (최대 2개)</td>
                    <td>10KG (최대 2개)</td>
                  </tr>
                  <tr>
                    <td>유아 할인</td>
                    <td>제공</td>
                    <td>제공</td>
                  </tr>
                  <tr>
                    <td>소아 할인</td>
                    <td>제공</td>
                    <td>제공</td>
                  </tr>
                  <tr>
                    <td>포인트 적립</td>
                    <td>제공</td>
                    <td>제공</td>
                  </tr>
                  <tr>
                    <td>위탁수하물 우선 수취</td>
                    <td>제공</td>
                    <td>제공</td>
                  </tr>
                  <tr>
                    <td>대형 악기 지참 탑승</td>
                    <td><C.noOffer>미제공</C.noOffer></td>
                    <td>제공</td>
                  </tr>
                  <tr>
                    <td>우선 탑승</td>
                    <td>제공</td>
                    <td>제공</td>
                  </tr>
                  <tr>
                    <td>비동반 소아 서비스</td>
                    <td><C.noOffer>미제공</C.noOffer></td>
                    <td>제공</td>
                  </tr>
                </tbody>
              </table>
            </T.table>
          </C.tmi>
          <C.sb>
            <C.content>
              <C.yell>*</C.yell> 
              <C.lg>상기 서비스는 국내선 항공편에서 제공됩니다.</C.lg>
            </C.content>
          </C.sb>
        </C.sbody>
      </C.wrap>
    )
  }
}

const C = {
  noOffer: styled.span`
    color: ${LIGHT_GRAY7};
  `,
  lg: styled.span`
    color: ${LIGHT_GRAY8};
  `,
  yell: styled.span`
    color: ${ORANGE2};
  `,
  wrap: styled.div`
    margin: 0;
  `,
  sbody: styled.div`
    margin-top: 60px;
  `,
  content: styled.div`
    font-size: 18px;
    line-height: 1.8em;
    @media only screen and (max-width: 767px) {
      font-size: 14px;
    }
  `,
  sb: styled.div`
    margin-top: 30px;
    @media only screen and (max-width: 767px) {
      margin-top: 20px;
    }
  `,
  tmi: styled.p`
    margin-top: 60px;
  `,
}
const T = {
  table: styled.div`
    table {
      width: 100%;
      thead td{
        color: ${DARK_GRAY1};
        font-size: 21px;
        font-weight: bold;
        text-align: center;
        @media only screen and (max-width: 767px) {
          font-size: 16px;
        }
      }
      td{
        font-size: 18px;
        line-height: 1.36em;
        letter-spacing: 0;
        text-align: center;
        @media only screen and (max-width: 767px){
          font-size: 14px;
        }
      }      
      td:first-child{
        text-align: left;
      }
      thead th,
      thead td{
        padding: 0 5px 30px 5px;
        border-bottom: 2px solid ${DARK_GRAY1};
        &:first-child{
          padding-left: 0;
        }
        &:last-child{
          padding-right: 0;
        }
        @media only screen and (max-width: 767px){
          padding: 0 5px 10px 5px;
        }
      }
      tbody td{
        padding: 30px 5px;
        border-bottom: 1px solid ${LIGHT_GRAY5};
        &:first-child{
          padding-left: 0;
        }
        &:last-child{
          padding-right: 0;
        }
        @media only screen and (max-width: 767px){
          padding: 10px 5px;
        }
      }
    }
  `,
}
export default TabContentService;
