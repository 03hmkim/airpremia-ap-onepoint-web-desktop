import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import {
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
              <div className="tbWrap">
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
                      <th colSpan={2}>대상</th>
                      <td>플렉스 운임 할인율</td>
                      <td>공항세 할인율</td>
                      <td>증빙서류</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td rowSpan={2}><C.bold>중증장애인<C.br></C.br>(1~3급)</C.bold></td>
                      <th>본인</th>
                      <td>50%</td>
                      <td>50%</td>
                      <td rowSpan={4} className="noBLine">시/군/구청 발행 장애인 등록증 및 복지카드
                      <C.br></C.br><C.lg>(보건복지부장관명의)</C.lg></td>
                    </tr>
                    <tr>
                      <th>동반인</th>
                      <td>50%</td>
                      <td>50%</td>
                    </tr>
                    <tr>
                      <td rowSpan={2} className="noBLine"><C.bold>중증 장애인<C.br></C.br>(4~6급)</C.bold></td>
                      <th>본인</th>
                      <td>해당없음</td>
                      <td>50%</td>
                    </tr>
                    <tr>
                      <th>동반인</th>
                      <td>해당없음</td>
                      <td>해당없음</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </T.table>
          </C.tmi>
          <C.title>보훈 대상자</C.title>
          <C.tmi>
            <T.table>
              <div className="tbWrap">
                <table>
                  <colgroup>
                    <col width="20%"></col>
                    <col width="13%"></col>
                    <col width="33%"></col>
                    <col width="34%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th colSpan={2}>대상</th>
                      <td>공항세 할인율</td>
                      <td>증빙서류</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><C.bold>국가유공자</C.bold></td>
                      <th>본인</th>
                      <td>해당없음</td>
                      <td rowSpan={5}>국가보훈처 발행 유공자증</td>
                    </tr>
                    <tr>
                      <td rowSpan={2}><C.bold>국가유공상이자</C.bold></td>
                      <th>본인</th>
                      <td>50%</td>
                    </tr>
                    <tr>
                      <th>동반인</th>
                      <td>50%<C.br></C.br>(1~3급에 한함)</td>
                    </tr>
                    <tr>
                      <td><C.bold>5·18 민주 유공</C.bold></td>
                      <th>-</th>
                      <td>해당없음</td>
                    </tr>
                    <tr>
                      <td><C.bold>5·18 민주 유공부상자</C.bold></td>
                      <th>-</th>
                      <td>해당없음</td>
                    </tr>
                    <tr>
                      <td><C.bold>고엽제 후유증 환자</C.bold></td>
                      <th>-</th>
                      <td>해당없음</td>
                      <td>고엽제 유공자증</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </T.table>
          </C.tmi>
          <C.title>기타</C.title>
          <C.tmi>
            <T.table>
              <div className="tbWrap">
                <table>
                  <colgroup>
                    <col width="33%"></col>
                    <col width="17%"></col>
                    <col width="50%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>대상</th>
                      <td>공항세 할인율</td>
                      <td>증빙서류</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>기술기능분야 우수자</th>
                      <td>50%</td>
                      <td>고용노동부 및 국제기능올림픽대회 한국위원회 발행 증서</td>
                    </tr>
                    <tr>
                      <th>기초생활 수급자</th>
                      <td>50%</td>
                      <td>국민기초생활수급자 증명</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
  bold: styled.span`
    font-weight: 700;
  `,
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
    margin-bottom: 30px;
    line-height: 1.8em;
    @media only screen and (max-width: 767px) { 
      font-size: 22px;
      margin-bottom: 20px;
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
    td.noBLine{
      border-bottom: none;
    }
  `,
}
export default TabContentSale;
