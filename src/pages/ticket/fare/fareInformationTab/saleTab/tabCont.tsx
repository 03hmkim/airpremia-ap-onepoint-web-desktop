import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';

function TabContentSale() {
    return (
      <C.wrap>
        <C.sbody>
          <C.title>장애인 할인</C.title>
          <C.tmi>
            <T.table>
              <table>
                <colgroup>
                  <col width="15%"></col>
                  <col width="10%"></col>
                  <col width="20%"></col>
                  <col width="20%"></col>
                  <col width="35%"></col>
                </colgroup>
                <thead>
                  <tr>
                    <td colSpan={2}>대상</td>
                    <td>플렉스 운임 할인율</td>
                    <td>공항세 할인율</td>
                    <td>증빙서류</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan={2}>중증장애인<C.br></C.br>(1~3급)</td>
                    <td>본인</td>
                    <td>50%</td>
                    <td>50%</td>
                    <td rowSpan={4}>시/군/구청 발행 장애인 등록증 및 복지카드
                    <C.br></C.br><C.lg>(보건복지부장관명의)</C.lg></td>
                  </tr>
                  <tr>
                    <td>동반인</td>
                    <td>50%</td>
                    <td>50%</td>
                  </tr>
                  <tr>
                    <td rowSpan={2}>중증 장애인<C.br></C.br>(4~6급)</td>
                    <td>본인</td>
                    <td>해당없음</td>
                    <td>50%</td>
                  </tr>
                  <tr>
                    <td>동반인</td>
                    <td>해당없음</td>
                    <td>해당없음</td>
                  </tr>
                </tbody>
              </table>
            </T.table>
          </C.tmi>
          <C.title>보훈 대상자</C.title>
          <C.tmi>
            <T.table>
              <table>
                <colgroup>
                  <col width="25%"></col>
                  <col width="20%"></col>
                  <col width="25%"></col>
                  <col width="30%"></col>
                </colgroup>
                <thead>
                  <tr>
                    <td colSpan={2}>대상</td>
                    <td>공항세 할인율</td>
                    <td>증빙서류</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>국가유공자</td>
                    <td>본인</td>
                    <td>해당없음</td>
                    <td rowSpan={5}>국가보훈처 발행 유공자증</td>
                  </tr>
                  <tr>
                    <td rowSpan={2}>국가유공상이자</td>
                    <td>본인</td>
                    <td>50%</td>
                  </tr>
                  <tr>
                    <td>동반인</td>
                    <td>50%<C.br></C.br>(1~3급에 한함)</td>
                  </tr>
                  <tr>
                    <td>5·18 민주 유공</td>
                    <td>-</td>
                    <td>해당없음</td>
                  </tr>
                  <tr>
                    <td>5·18 민주 유공부상자</td>
                    <td>-</td>
                    <td>해당없음</td>
                  </tr>
                  <tr>
                    <td>고엽제 후유증 환자</td>
                    <td>-</td>
                    <td>해당없음</td>
                    <td>고엽제 유공자증</td>
                  </tr>
                </tbody>
              </table>
            </T.table>
          </C.tmi>
          <C.title>기타</C.title>
          <C.tmi>
            <T.table>
            <table>
                <colgroup>
                  <col width="33%"></col>
                  <col width="17%"></col>
                  <col width="50%"></col>
                </colgroup>
                <thead>
                  <tr>
                    <td>대상</td>
                    <td>공항세 할인율</td>
                    <td>증빙서류</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>기술기능분야 우수자</td>
                    <td>50%</td>
                    <td>고용노동부 및 국제기능올림픽대회 한국위원회 발행 증서</td>
                  </tr>
                  <tr>
                    <td>기초생활 수급자</td>
                    <td>50%</td>
                    <td>국민기초생활수급자 증명</td>
                  </tr>
                </tbody>
              </table>
            </T.table>
            <C.sb>
              <C.content>
                <C.yell>*</C.yell> 
                <C.lg>상기 규정은 국내선 항공편에서 제공됩니다.</C.lg>
              </C.content>
            </C.sb>
          </C.tmi>
        </C.sbody>
      </C.wrap>
    )
}

const C = {
  br: styled.p`
    font-size: 0;
  `,
  oneLine: styled.p`
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
  title: styled.h4`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 45px;
    line-height: 1.8em;
    @media only screen and (max-width: 767px) { 
      font-size: 22px;
      margin-bottom: 30px;
      letter-spacing: -0.4px;
    }
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
    margin-bottom: 100px;
    @media only screen and (max-width: 767px) {
      margin-bottom: 60px;
    }
  `,
}
const T = {
  table: styled.div`
    table {
      width: 100%;
      th,
      thead td{
        color: ${DARK_GRAY1};
        font-size: 21px;
        font-weight: bold;
        line-height: 1.36em;
        text-align: center;
        @media only screen and (max-width: 767px) {
          font-size: 16px;
        }
      }
      td{
        font-size: 18px;
        letter-spacing: 0;
        line-height: 1.36em;
        text-align: center;
        vertical-align: middle;
        @media only screen and (max-width: 767px){
          font-size: 14px;
        }
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
      tbody th,
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
  }
  `,
}
export default TabContentSale;
