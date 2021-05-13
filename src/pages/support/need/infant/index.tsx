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
} from '@airpremia/cdk/styles/colors';
import Stroller from 'public/images/support/stroller.png';
import BaggageStroller from 'public/images/support/baggageStroller.png';
import { 
  needHelp,
  needPet,
  needPregnant,
  needTeenager,
} from '../../linkset';



function Infant(){
  return (
    <Container>
      <S.container>
        <ComTitle title="도움이 필요한 손님" />
        <C.wrap>
          <C.body>
            <C.titleMain>유아동반 손님</C.titleMain>
          </C.body>
          <C.body>
              <C.titleSub><span>이용 대상 및 운임</span></C.titleSub>
              <C.content>
                <T.table>
                  <dl>
                      <dt>유아의 기준</dt>
                      <dd>
                          <ul>
                              <li>
                                  <ListGlobal level="scd" body={
                                      <p>탑승일 기준 생후 7일 이상~24개월 미만</p>
                                  } />
                              </li>
                              <li>
                                  <ListGlobal level="scd" body={
                                      <p>성인 1명이 유아 2명을 동반한 경우 유아 1명의 항공권은 소아운임이 적용되며 좌석이 제공됩니다.</p>
                                  } />
                              </li>
                          </ul>
                      </dd>
                      <dt>운임</dt>
                      <dd>
                          <ul>
                              <li>
                                  <ListGlobal level="scd" body={
                                      <p>국내선:무료</p>
                                  } />
                              </li>
                              <li>
                                  <ListGlobal level="scd" body={
                                      <p>국제선:성인 구매운임의 10%</p>
                                  } />
                              </li>
                          </ul>
                      </dd>
                  </dl>
                    {/*
                    <table className="tbl-target">
                    <colgroup>
                      <col width=""></col>
                      <col width="500px"></col>
                    </colgroup>
                    <tbody>
                      <tr>
                        <th>유아의 기준</th>
                        <td className="al">


                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <th>운임</th>
                        <td className="al">
                          <ListGlobal level="scd" body={
                              <p>국내선:무료</p>
                            } />
                          <ListGlobal level="scd" body={
                              <p>국제선:성인 구매운임의 10%</p>
                            } />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  */}
                </T.table>
              </C.content>
          </C.body>
          <C.body>
            <C.titleSub>유아 수하물 허용량</C.titleSub>
            <C.content>
              <T.table>
                <table>
                  <colgroup>
                    <col width="50%"></col>
                    <col width="50%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <td className="cell">국내선</td>
                      <td className="cell">국제선</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><C.stroller></C.stroller></td>
                      <td><C.baggageStroller><C.bSText>1pc<br></br>X<br></br>10kg</C.bSText></C.baggageStroller></td>
                    </tr>
                    <tr>
                      <td>유모차/유아용 안전의자/요람 중 1개</td>
                      <td>1pc X 10kg + 유모차/유아용 안전의자/요람 중 1개</td>
                    </tr>
                  </tbody>
                </table>
              </T.table>
            </C.content>
          </C.body>
          <C.body>
            <C.titleSub>유모차, 유아용 안전의자, 요람 이용 안내</C.titleSub>
            <C.content>
              <C.itemTitle>유모차</C.itemTitle>
              <ListGlobal level="fst" body={
                          <p>기내 반입 유모차: 바구니와 덮개가 없는 규격(세 변의 합이 115cm 이하) 내 접이식 유모차​ (단, 기내에 보관이 불가하거나 공간이 부족한 경우 탑승구에서 위탁수하물로 처리될 수 있습니다)</p>
                        } />
              <ListGlobal level="fst" body={
                          <p>위탁수하물 유모차</p>
                        } />
              <ListGlobal level="scd" body={
                          <p>위탁수하물 부치시는 위치: 탑승수속 카운터 또는 탑승구</p>
                        } />
              <ListGlobal level="scd" body={
                          <p>위탁수하물 찾으시는 위치: 도착지의 탑승구 앞 또는 도착지 수하물 수취구역​ (단, 해외 공항 사정에 따라 탑승구 앞에서 유모차 수취가 불가능할 수 있습니다)</p>
                        } />
            </C.content>
            <C.content className="mt60">
              <C.itemTitle>유아 및 소아용 안전의자(Car Seat)</C.itemTitle>
              <ListGlobal level="fst" body={
                          <p>이용대상: 소아운임을 지불하고 항공권을 구입한 유아 및 소아</p>
                        } />
              <ListGlobal level="fst" body={
                          <p>이용기준: 항공기내 사용 가능 승인을 받은 가로 43cm (17inch) 이하인 안전의자에 한하여 이용가능​</p>
                        } />
              <ListGlobal level="fst" body={
                          <p>사전에 예약센터로 문의해 주시기 바랍니다.​<br />
                          (단, 항공기 출발 48시간 전 예약없이 현장에 나오실 경우나 항공기 좌석상황에 따라 사용이 제한될 수 있습니다)</p>
                        } />
            </C.content>
            <C.content className="mt60">
              <C.itemTitle>아기 요람(Bassinet)​</C.itemTitle>
              <ListGlobal level="fst" body={
                          <p>이용 기준: 신장 75cm (2.46 ft) 이하, 체중 11kg (24.25 lbs) 이하​</p>
                        } />
              <ListGlobal level="fst" body={
                          <p>이용 안내: 아기요람은 기내에 최대 6개(PREMIA 42- 2개/ECONOMY 35- 4개) 설치가능합니다.​</p>
                        } />
              <ListGlobal level="fst" body={
                          <p>ECONOMY 35는 설치가능한 좌석(맨 앞 좌석)을 구매하시고 서비스 예약은 항공기 출발 48시간 전까지 예약센터로 신청해주시기 바랍니다.​</p>
                        } />
              <ListGlobal level="fst" body={
                          <p>유의사항</p>
                        } />
              <ListGlobal level="scd" body={
                          <p>구매한 좌석은 항공기 출발 48시간 전까지만 취소 및 환불이 가능하며 48시간 이내 변경 및 환불이 불가합니다<br />(단, 항공기 지연 및 결항 등 항공사 사정에 항공편 취소의 경우는 환불이 가능합니다)</p>
                        } />
              <ListGlobal level="scd" body={
                          <p>여정 변경/취소 시의 경우,</p>
                        } />
              <ListGlobal level="trd" body={
                          <p>항공기 출발 48시간 전까지 구매한 좌석은 자동 취소되며 환불 가능합니다.</p>
                        } />
              <ListGlobal level="trd" body={
                          <p>항공기 출발 48시간 이내에는 구매한 좌석은 자동 취소되며 환불 불가합니다.</p>
                        } />
              <ListGlobal level="scd" body={
                          <p>환불 및 취소는 홈페이지, 모바일 앱 및 예약센터 각 구매처에서만 가능합니다.</p>
                        } />
              <ListGlobal level="scd" body={
                          <p>이용 기준 초과 시 사전에 예약을 하신 경우라도 기내 요람 이용이 불가하며 좌석 환불이 불가능합니다.</p>
                        } />
            </C.content>
          </C.body>
          <C.body>
            <C.titleSub>유의사항</C.titleSub>
            <C.content>
              <ListGlobal level="fst" body={
                          <p>유아의 나이 기준은 최초 탑승일 기준입니다.​</p>
                        } />
              <ListGlobal level="scd" body={
                          <p>나이 계산은 탑승일을 기준으로 하며, 왕복 여정의 경우에도 최초 탑승일을 기준으로 합니다.</p>
                        } />
              <ListGlobal level="fst" body={
                        <p>탑승수속 시 생년월일이 확인 가능한 서류를 반드시 지참하여 주시기 바랍니다.</p>
                      } />
              <ListGlobal level="fst" body={
                        <p>유아는 별도의 좌석이 제공되지 않으며, 보호자가 안고 착석하셔야 합니다.</p>
                      } />
              <ListGlobal level="fst" body={
                          <p>좌석이 필요한 유아 또는 성인 1명이 유아 2명 이상을 동반하는 경우, 1명을 제외한 나머지 유아에 대해서는 소아운임이 적용됩니다.​</p>
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
                title={needPet.title}
                link={needPet.link}
              />
              <SupportLink
                title={needPregnant.title}
                link={needPregnant.link}
              />
              <SupportLink
                title={needTeenager.title}
                link={needTeenager.link}
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
    @media only screen and (max-width: 1059px) { 
        margin-top: 80px;
        &:first-of-type {
          margin-top: 20px;
        }
    }
    @media only screen and (max-width: 767px) { 
        margin-top: 60px;
        &:first-of-type {
          margin-top: 10px;
        }
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
      font-size: 21px;
      letter-spacing: -0.32px;
      line-height:1.5em;
      margin-top: 30px;
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

  itemTitle: styled.h6`
    padding-bottom: 20px;
    font-size: 18px;
    font-weight: 700;

    .flex{
      display: flex;
    }
  `,
  stroller: styled.div`
    margin: 0 auto;
    width: 94px;
    height: 94px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${Stroller});
  `,
  baggageStroller: styled.div`
    margin: 0 auto;
    width: 125px;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${BaggageStroller});
  `,
  bSText:styled.span`
    margin-top: 5px;
    margin-left: -52px;
  `,
}


const T = {
  table: styled.div`
    dl{
        dt{ 
            margin-top:60px;
            font-size:21px;
            color:#222;
            font-weight:bold;
            line-height:1.71em;
        }
        dd{
            margin-top:30px;
            p{
                font-size:18px;
                color:#222;
                font-weight:500;
                line-height:2em;
            }
        }
    }
    .taL,
    .taL{
      text-align: left;
    }
    .taR,
    .taR{
      text-align: right;
    }
    table {
        th{
            background:#1b2b45;
            color:#fff;
        }
      width: 100%;
      thead td{
        color: ${DARK_GRAY1};
        font-size: 15px;
        font-weight: bold;
        line-height: 1.6;
        letter-spacing: -0.3px;
        text-align: center;
      }
      td{
        font-size: 14px;
        font-weight: 400;
        line-height: 1.9;
        letter-spacing: -0.3px;
        text-align: center;
        vertical-align: middle;
        position: relative;
      }
      td.cell{
        background:#1b2b45;
        color:#fff;
      }
      thead td{
        padding: 18px 0;
        border-bottom: 1px solid ${DARK_GRAY1};
      }
      tbody td{
        padding: 18px 0;
        border-bottom: 1px solid ${LIGHT_GRAY5};
      }
    }
    @media only screen and (max-width: 767px) { 
        dl{
            dt{ 
                margin-top:30px;
                font-size:18px;
            }
            dd{
                margin-top:10px;
                p{
                    font-size:14px;
                }
            }
        }
        table{
            td{
                padding:18px;
                word-break:keep-all;
            }
            td.cell{
                padding:10px 0;
            }
            thead td{
                font-size:14px;
            }
        }
    }
  `,
}

export default Infant;
