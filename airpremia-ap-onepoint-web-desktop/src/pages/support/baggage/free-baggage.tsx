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
import Caution from 'public/images/support/ico_caution.svg';
import Redcarry from 'public/images/support/img_redcarry.svg';
import Linkblack from 'public/images/support/btn_txt_link_black.svg';
import Link from 'next/link'


function additionalServicefreebaggage(){
  return (
    <Container>
      <ComTitle
        title="수하물"
      />
      <C.wrap>
        <C.body>
          <C.titleMain>위탁 수하물</C.titleMain>
        </C.body>
        <C.sb>
          <C.title>무료 수하물</C.title>
        </C.sb>
        <C.tmi><C.center><Redcarry /></C.center></C.tmi>
        <C.tmi>
          <C.sub>국내선</C.sub>
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
                      <th>기준</th>
                      <td>Premia 42</td>
                      <td>Economy 35<br />(Flex/Standard)</td>
                      <td>Economy 35<br />(Lite)</td>
                      <td>유아(Infant)</td>
                    </tr>
                  </thead>
                <tbody>
                  <tr>
                    <th>무게</th>
                    <td>30kg(66lbs) 이하</td>
                    <td>20kg(44lbs) 이하</td>
                    <td>20kg(44lbs) 이하</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <th>크기</th>
                    <td>세 변의 합이 203cm 이내</td>
                    <td>세 변의 합이 203cm 이내</td>
                    <td>세 변의 합이 203cm 이내</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <th>개수</th>
                    <td>1개</td>
                    <td>1개</td>
                    <td>1개</td>
                    <td>유모차, 카시트, 요람 중 1개</td>
                  </tr>
                </tbody>
              </table>
            </T.table>
          </C.content>
        </C.tmi>
        <C.sbody>
          <C.sub>동북아/동남아</C.sub>
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
                      <th>기준</th>
                      <td>Premia 42</td>
                      <td>Economy 35<br />(Flex/Standard)</td>
                      <td>Economy 35<br />(Lite)</td>
                      <td>유아(Infant)</td>
                    </tr>
                  </thead>
                <tbody>
                  <tr>
                    <th>무게</th>
                    <td>23kg(51lbs) 이하</td>
                    <td>23kg(51lbs) 이하</td>
                    <td>-</td>
                    <td>10kg(22lbs) 이하</td>
                  </tr>
                  <tr>
                    <th>크기</th>
                    <td>세 변의 합이 158cm 이내</td>
                    <td>세 변의 합이 158cm 이내</td>
                    <td>-</td>
                    <td>세 변의 합이 158cm 이내</td>
                  </tr>
                  <tr>
                    <th>개수</th>
                    <td>2개</td>
                    <td>1개</td>
                    <td>수하물 없음</td>
                    <td>
                        <p>수하물 1개 + </p>
                        <p>유모차, 카시트, 요람 중 1개</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </T.table>
          </C.content>
        </C.sbody>
        <C.sbody>
          <C.sub>미주</C.sub>
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
                      <th>기준</th>
                      <td>Premia 42</td>
                      <td>Economy 35<br />(Flex/Standard)</td>
                      <td>Economy 35<br />(Lite)</td>
                      <td>유아(Infant)</td>
                    </tr>
                  </thead>
                <tbody>
                  <tr>
                    <th>무게</th>
                    <td>32kg(71lbs) 이하</td>
                    <td>23kg(51lbs) 이하</td>
                    <td>23kg(51lbs) 이하</td>
                    <td>23kg(51lbs) 이하</td>
                  </tr>
                  <tr>
                    <th>크기</th>
                    <td>세 변의 합이 158cm 이내</td>
                    <td>세 변의 합이 158cm 이내</td>
                    <td>세 변의 합이 158cm 이내</td>
                    <td>세 변의 합이 158cm 이내</td>
                  </tr>
                  <tr>
                    <th>개수</th>
                    <td>2개</td>
                    <td>2개</td>
                    <td>1개</td>
                    <td>
                        <p>수하물 1개 + </p>
                        <p>유모차, 카시트, 요람 중 1개</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </T.table>
          </C.content>
        </C.sbody>
        <C.subtit>※ 항공기 출발 48시간 전까지 추가 수하물을 미리 구매하시면 할인된 요금으로 이용할 수 있습니다.</C.subtit>
        <C.linkTitle>
          <Link href="/ticket/pay/confirm">
            <a>
              <u>사전 수하물 구매</u>
            </a>
          </Link>
        </C.linkTitle>
        <C.sb>
          <C.content>
            <C.note><C.image><Caution /></C.image>유의 사항</C.note>
            <C.ntg>소아 운임을 지불한 소아 또는 좌석을 점유하는 유아의 위탁수하물 허용량은 성인 적용 운임을 지불한 여객과 동일합니다.​</C.ntg>
            <C.ntg>소아/유아의 경우, 유모차, 카시트, 요람 중 1개 추가 위탁 가능합니다.</C.ntg>
            <C.ntg>거동이 불편하신 손님이 사용하는 1개의 휠체어 또는 기타 보조기구는, 상기의 무료 위탁수하물 허용량과는 별도로, 무료로 위탁이 가능합니다.</C.ntg>
            <C.ntg>위탁수하물 중 노트북 컴퓨터, 휴대폰, 카메라, 캠코더, MP3 플레이어 등 개인 전자제품 또는 데이터 저장매체 등 과 같이 파손되기 쉬운 물건, 적절히 포장되지 않은 물건, 부패성 물건, 화폐, 보석류, 귀금속,<br />유가증권, 의약품, 신분증, 열쇠, 예술작품, 골동품, 기타 고가품 또는 귀중품, 서류 또는 견본 등은 위탁이 불가합니다.</C.ntg>
            <C.ntg>손님의 여정이 다구간일 경우 출발 당일 공항 탑승수속 카운터에서 수하물이 최종 목적지까지 연결 수속 가능한지 확인해 주시기 바랍니다.<br />(수하물 연결 수속은 경우지 공항 사정 및 연결편 항공사에 따라 제한될 수 있습니다)</C.ntg>
          </C.content>
        </C.sb>
        <C.tmi>
          <C.content>
            <C.note><C.image><Caution /></C.image>무료 위탁수하물의 개수의 합산</C.note>
            <C.ntg>동일 손님예약번호(PNR)의 2인 이상 손님이 동일 목적지와 항공편으로 여행하며 동시에 탑승수속할 경우, 각 개인의 무료수하물 개수 허용량의 합계를 단체 여객 전원에 대한 허용량으로 취급할 수 있습니다.<br />(무게 합산은 불가)</C.ntg>
            <C.ntg>단, 상기 합산된 무료 수하물 허용량을 초과하는 수하물에 대해서는 정해진 기준에 따라 초과수하물 요금에 따라 부과합니다.​</C.ntg>
          </C.content>
        </C.tmi>
        <C.sbody>
          <C.sb>
            <C.title>초과 수하물</C.title>
          </C.sb>
          <C.sb>
            <C.sub>국내선</C.sub>
            <C.content>
              <T.table>
                <table>
                    <colgroup>
                    <col width="20%"></col>
                    <col width=""></col>
                    <col width="240px"></col>
                    </colgroup>
                    <thead>
                    <tr>
                        <th>기준</th>
                        <td></td>
                        <td>공통</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>개수</th>
                        <td></td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th>무게</th>
                        <td></td>
                        <td>
                          <p>2,000/kg</p>
                        </td>
                    </tr>
                    <tr>
                        <th>크기</th>                        
                        <td></td>
                        <td>
                          <p>159~203cm</p>
                          <p>204~292cm</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
              </T.table>
            </C.content>
          </C.sb>
        </C.sbody>
        <C.sbody>
          <C.sub>국제선</C.sub>
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
                    <th>기준</th>
                    <td></td>
                    <td>동북아</td>
                    <td>동남아</td>
                    <td>미주</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>개수</th>
                    <td></td>
                    <td>70,000</td>
                    <td>100,000</td>
                    <td>200,000</td>
                  </tr>
                  <tr>
                    <th>무게</th>
                    <td></td>
                    <td>10,000/kg</td>
                    <td>15,000/kg</td>
                    <td>20,000/kg</td>
                  </tr>
                  <tr>
                    <th>크기</th>
                    <td>
                      <p>159~203cm</p>
                      <p>204~292cm</p>
                    </td>
                    <td>
                      <p>80,000</p>
                      <p>160,000</p>
                    </td>
                    <td>
                      <p>120,000</p>
                      <p>240,000</p>
                    </td>
                    <td>
                      <p>160,000</p>
                      <p>320,000</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </T.table>
          </C.content>
        </C.sbody>
        <C.subtit>※ 항공기 출발 48시간 전까지 추가 수하물을 미리 구매하시면 할인된 요금으로 이용할 수 있습니다.</C.subtit>
        <C.linkTitle>
          <Link href="/ticket/pay/confirm">
            <a>
              <u>사전 수하물 구매</u>
            </a>
          </Link>
        </C.linkTitle>
        <C.sbody>
          <C.content>
            <C.note><C.image><Caution /></C.image>유의사항</C.note>
            <C.ntg>무료수하물 허용량을 초과할 경우 초과수하물 요금이 부과됩니다.​</C.ntg>
            <C.ntg>초과수하물 요금 적용 기준은 현장(공항)구매 요금 기준이며, 항공기 출발 24시간 전 모바일 APP, 홈페이지 및 예약센터를 통해 사전수하물 구매도 이용하실 수 있습니다.​</C.ntg>
            <C.ntg>항공기 출발 24시간 전까지 추가 수하물을 미리 구매하시면 할인된 요금으로 이용할 수 있습니다.​</C.ntg>
            <C.ntg>구매처가 한국인 경우 KRW, 그 외 해외공항은 USD 또는 현지통화로 구매하실 수 있습니다.​​</C.ntg>
            <C.ntg>현지 통화 사정에 따라, 해외 출발편의 초과 수하물 요금이 달라질 수 있습니다.​​</C.ntg>
            <C.ntg>위탁 가능한 수하물 최대 무게 및 부피는 출/도착지 국가에 따라 제한될 수 있습니다.​​</C.ntg>
            <C.ntg>휴대수하물  허용량 외의 수하물은 반드시 위탁하셔야 하며, 탑승게이트에서 위탁 시 별도의 수수료가 부과됩니다.​​</C.ntg>
          </C.content>
        </C.sbody>
        <C.body>
          <C.title>도움이 되셨나요?</C.title>
          <C.sb>
            <C.helpl>
              <Link href="./carry">
                <a>
                  휴대 수하물<Linkblack />
                </a>
              </Link>
            </C.helpl>
            <C.helpl className="dpN">
              <Link href="./free-baggage">
                <a>
                  위탁 수하물<Linkblack />
                </a>
              </Link>
            </C.helpl>
            <C.helpl>
              <Link href="./prohibition">
                <a>
                  항공기 반입금지 물품 안내<Linkblack />
                </a>
              </Link>
            </C.helpl>
            <C.helpl>
              <Link href="./special-carry">
                <a>
                  스포츠/악기/고가품 운송<Linkblack />
                </a>
              </Link>
            </C.helpl>
            <C.helpl>
              <Link href="./lost-carry">
                <a>
                  수하물 분실 및 보상<Linkblack />
                </a>
              </Link>
            </C.helpl>
            <C.helpl className="dpN">
              <Link href="./#">
                <a>
                  1:1 문의<Linkblack />
                </a>
              </Link>
            </C.helpl>
          </C.sb>
        </C.body>​
      </C.wrap>
    </Container>
  )
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
  sbody: styled.div`
    margin-top: 100px;
  `,
  titleMain: styled.h3`
    font-size: 30px;
    font-weight: bold;
  `,
  title: styled.h4`
    font-size: 22px;
    font-weight: bold;
  `,
  sub: styled.h5`
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
  `,
  content: styled.div`
    margin-top: 12px;
  `,
  sb: styled.div`
    margin-top: 60px;
  `,
  p: styled.p`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 1.8;
    &:first-child{
      margin-top: 20px;
    }
    &:last-child{
      margin-bottom: 0px;
    }
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
  tmi: styled.p`
    margin-top: 30px;
  `,
  center: styled.p`
    text-align: center;
  `,
  ntg: styled.p`
    font-size: 14px;
    color: ${LIGHT_GRAY8};
    margin-top: 15px;
    padding-left: 10px;
    line-height: 1.8;
    position: relative;
    &::before{
      content:"-";
      width: 5px;
      height: 20px;
      top: 0px;
      left: 0px;
      color: ${LIGHT_GRAY8};
      display: block;
      position: absolute;
    }
  `,
  linkTitle: styled.a`
    font-weight: 600;
    color: ${BLUE1};
  `,
  linkhelp: styled.a`
    text-decoration-line: none;
    border: 0px;
  `,
  helpl: styled.p`
    width: 100%;
    padding: 25px 0px;
    border-bottom: 1px solid ${LIGHT_GRAY5};
    
    &.dpN{
      display: none;
    }
  `,
  stit: styled.p`
    font-size: 15px;
    font-weight: bold;
  `,
  subtit: styled.p`
    font-size: 15px;
    margin: 20px 0px;
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
export default additionalServicefreebaggage;