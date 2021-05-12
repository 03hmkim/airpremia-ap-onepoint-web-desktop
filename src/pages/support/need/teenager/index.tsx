import styled from 'styled-components';
import {
  ComTitle,
  ListGlobal,
  SupportLink,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import Linkblue from 'public/images/support/btn_txt_link_blue.svg';
import { 
  needHelp,
  needInfant,
  needPet,
  needPregnant,
} from '../../linkset';

function Teenager(){
  return (
    <Container>
      <S.container>
        <ComTitle title="도움이 필요한 손님" />
        <C.wrap>
          <C.body>
            <C.titleMain>혼자 여행하는 어린이/청소년</C.titleMain>
            <C.content className="mt60">
              <C.titleSub>이용 대상</C.titleSub>
              <C.right>
                <T.table>
                  <table>
                    <colgroup>
                      <col width="20%"></col>
                      <col width="20%"></col>
                      <col width="20%"></col>
                      <col width="20%"></col>
                      <col width="20%"></col>
                    </colgroup>
                    <thead>
                      <tr>
                        <th></th>
                        <td></td>
                        <td>국내선</td>
                        <td></td>
                        <td>국제선</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>혼자 여행하는 어린이(UM)</th>
                        <td></td>
                        <td>만 5세 이상 ~ 만 13세 미만</td>
                        <td></td>
                        <td>만 5세 이상 ~ 만 12세 미만</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <th>혼자 여행하는 청소년(YPTA)</th>
                        <td></td>
                        <td>미제공</td>
                        <td></td>
                        <td>만 12세 이상 ~ 만 17세 미만</td>
                      </tr>
                    </tbody>
                  </table>
                </T.table>
              </C.right>
            </C.content>
          </C.body>
          <C.body>
            <C.titleSub>운임 안내</C.titleSub>
            <C.content>
              <T.table>
                <table>
                  <colgroup>
                    <col width="20%"></col>
                    <col width="20%"></col>
                    <col width="20%"></col>
                    <col width="20%"></col>
                    <col width="20%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th></th>
                      <td></td>
                      <td>국내선</td>
                      <td></td>
                      <td>국제선</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>혼자 여행하는 어린이(UM)</th>
                      <td></td>
                      <td>에어프레미아에서 별도로 정한 성인운임</td>
                      <td></td>
                      <td>에어프레미아에서 별도로 정한 성인운임<br />+서비스 구간당(인당/편도) 100,000</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <th>혼자 여행하는 청소년(YPTA)</th>
                      <td></td>
                      <td>미제공</td>
                      <td></td>
                      <td>에어프레미아에서 별도로 정한 성인운임<br />+서비스 구간당(인당/편도) 100,000</td>
                    </tr>
                  </tbody>
                </table>
              </T.table>
            </C.content>
          </C.body>
          <C.body>
            <C.titleSub>이용 안내</C.titleSub>
            <C.content>
              <C.itemText>혼자 여행하는 어린이/청소년의 안전하고 편안한 여행을 위하여 제공하는 서비스입니다.</C.itemText>
              <ListGlobal level="fst" body={
                <p>출발지: 담당직원이 출국수속 및 탑승을 도와드리며 해당 항공편 객실 승무원에게 인계합니다.​</p>
              } />
              <ListGlobal level="fst" body={
                <p>기내: 객실승무원들이 비행 중 어린이를 보살펴 드립니다.​</p>
              } />
              <ListGlobal level="fst" body={
                <p>도착지: 담당직원이 객실승무원으로부터 인계를 받고 수하물 수취와 입국 수속을 도와드립니다. 그 후, 도착지 보호자에게 인계합니다.​</p>
              } />
            </C.content>
          </C.body>
          <C.body>
            <C.titleSub>서비스 신청 방법</C.titleSub>
            <C.content>
              <ListGlobal level="fst" body={
                <p>비동반 소아 서비스 신청: 항공기 출발 48시간 전까지 예약센터(02-6953-6115)로 서비스를 신청하신 후 확약을 받으시기  바랍니다.​</p>
              } />
              <ListGlobal level="fst" body={
                <div>
                  <p>신청서를 다운받아 작성하여 지참해주시기 바랍니다.</p>
                  <p>
                    <C.linkm>
                      <a href="/document/support_need-teenager_01.pdf" download className="flex">
                        비동반 소아 서비스 신청서<Linkblue />
                      </a>
                    </C.linkm>
                  </p>
                  <p>
                    <C.linkm>
                      <a href="/document/support_need-teenager_02.pdf" download className="flex">
                        보호자 서약서 다운<Linkblue />
                      </a>
                    </C.linkm>
                  </p>
                </div>
              } />
              <ListGlobal level="fst" body={
                <p>여행 당일 보호자와 함께 항공기 출발 최소 120분 전까지 에어프레미아 탑승수속 카운터에 도착 하셔서 담당 직원​의 안내를 받으시면 됩니다.​</p>
              } />
            </C.content>
          </C.body>
          <C.body>
            <C.titleSub>유의사항</C.titleSub>
            <C.content>
              <ListGlobal level="fst" body={
                        <p>출발할 때와 도착할 때는 반드시 보호자(만 18세 이상)의 인수인계가 필요합니다.​</p>
                      } />
              <ListGlobal level="fst" body={
                        <p>회사가 직접 운항하는 구간만 이용 가능하며, 타사로 연결되는 항​공편의 경우 접수 불가합니다.</p>
                      } />
              <ListGlobal level="fst" body={
                        <p>항공기 출발 48시간 전 예약없이 출발 당일 신청 시에는 여행이 불가할 수도 있습니다.</p>
                      } />
              <ListGlobal level="fst" body={
                        <p>필요한 비동반 소아 서류(비동반 소아 서비스 신청서, 보호자 서약서)는 사전에 작성하시어 출발 당일 공항 카운터에 제출​하셔야 하며, 구비 여부에 따라 서비스가 제공되지 않을수도 있습니다.</p>
                      } />
            </C.content>
          </C.body>
          <C.body>
            <C.titleMain>도움이 되셨나요?</C.titleMain>      
            <C.linkWrap>
              <SupportLink
                title={needHelp.title}
                link={needHelp.link}
              />
              <SupportLink
                title={needInfant.title}
                link={needInfant.link}
              />
              <SupportLink
                title={needPet.title}
                link={needPet.link}
              />
              <SupportLink
                title={needPregnant.title}
                link={needPregnant.link}
              />
            </C.linkWrap>
          </C.body>
        </C.wrap>
      </S.container>
    </Container>
  );
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
      margin-top: 20px;
      font-size: 14px;
      letter-spacing: -0.28px;
    }
  `,
  linkWrap: styled.div`
    margin-top: 30px;

    @media only screen and (max-width: 1059px) {
      margin-top: 20px;
    }
  `,
  /* 서비스안내 공통css 끝 */


  itemText: styled.p`
    font-size: 18px;
    font-weight:700;
    padding-bottom: 20px;
  `,
  right: styled.div`
    display: block;
  `,
  linkm: styled.p`
    margin-left: 10px;
    a{
      color: ${BLUE1};
      font-weight: 600;
      cursor: pointer;
        &.flex{
          display: flex;
          align-items: center;
        }
    }
    &:last-child{
      margin-left: 0px;
    }
  `,
}

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
        text-align: center;
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
        text-align: center;
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

export default Teenager;