import styled from 'styled-components';
import {
  ComTitle,
  SupportLink,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
} from '@airpremia/cdk/styles/colors';
import { ListGlobal } from 'src/components';
import { 
  baggageFree,
  baggageLost,
  baggageProhibition,
  baggageSpecial,
} from '../../linkset';


function OverBalance(){
  return (
    <Container>
      <S.container>
        <ComTitle
          title="수하물"
        />
        <C.wrap>
          <C.body>
            <C.titleMain>초과수하물</C.titleMain>
            <C.content>
              <p>위탁수하물이 추가로 필요한 경우 탑승수속 카운터에서 구매하실 수 있습니다.</p>
            </C.content>
            <T.table>
              <table>
                <colgroup>
                  <col width="10%"></col>
                  <col width="10%"></col>
                  <col width="20%"></col>
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
                    <td colSpan={2}>개수 초과 (최대 23kg)</td>
                    <td>-</td>
                    <td>70,000</td>
                    <td>100,000</td>
                    <td>200,000</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>무게 초과 (23kg 초과/1kg)</td>
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
          </C.body>
          <C.body>
            <C.titleSub>요금 안내</C.titleSub>
            <C.content>
              <ListGlobal level="fst" body={
                <p>무료수하물 허용량을 초과할 경우 초과수하물 요금이 부과됩니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>초과수하물 요금 적용 기준은 현장(공항)구매 요금 기준이며, 항공기 출발 48시간 전 모바일 APP, 홈페이지 및 예약센터를 통해 사전수하물 구매도 이용하실 수 있습니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>위탁 가능한 수하물 최대 무게 및 부피는 출/도착지 국가에 따라 제한될 수 있습니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>휴대수하물  허용량 외의 수하물은 반드시 위탁하셔야 하며, 탑승게이트에서 위탁 시 별도의 수수료가 부과됩니다.</p>
              }/>
            </C.content>
          </C.body>
          <C.body>
            <C.titleMain>도움이 되셨나요?</C.titleMain>
            <C.linkWrap>
              <SupportLink
                title={baggageFree.title}
                link={baggageFree.link}
              />
              <SupportLink
                title={baggageLost.title}
                link={baggageLost.link}
              />
              <SupportLink
                title={baggageProhibition.title}
                link={baggageProhibition.link}
              />
              <SupportLink
                title={baggageSpecial.title}
                link={baggageSpecial.link}
              />
            </C.linkWrap>
          </C.body>
        </C.wrap>
      </S.container>
    </Container>
  )
}

const S = {
  container: styled.div``,
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
}
    
const T = {
table: styled.div`
  padding: 30px;
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
      text-align: center;
      vertical-align: middle;
      position: relative;
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
      vertical-align: middle;
    }
    th:last-child,
    td:last-child{
      text-align: right;
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
export default OverBalance;