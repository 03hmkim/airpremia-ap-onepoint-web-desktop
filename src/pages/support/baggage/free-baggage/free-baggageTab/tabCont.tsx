import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import {
  DARK_GRAY1,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import { SupportStyle } from 'src/styles/common';
import Redcarry from 'public/images/support/img_redcarry.png';
import { ListGlobal } from 'src/components';
import OneBaggage from 'public/images/support/oneBaggage.png';
import TwoBaggage from 'public/images/support/twoBaggage.png';
import NoBaggage from 'public/images/support/noBaggage.png';
import Stroller from 'public/images/support/stroller.png';
import BaggageStroller from 'public/images/support/baggageStroller.png';
import Link from 'next/link'
import Linkblue from 'public/images/support/btn_txt_link_blue.svg';

function TabContent({currIdxCont}: IProps) {
  if ( currIdxCont === 0 ) {
    return (
      <C.wrap className="bdN">
        <C.body>
          <C.titleSub>휴대수하물 크기</C.titleSub>
          <C.content>
            <ListGlobal level="fst" body={
              <p>세 변의 합이 115cm 이내 이며, 각 변의 최대치는 높이(A) 55cm, 가로(B) 40cm, 세로(C) 20cm로 제한합니다.</p>
            }/>
            <ListGlobal level="fst" body={
              <p>전 노선과 클래스에서 동일 기준으로 적용됩니다.</p>
            }/>
          </C.content>
          <C.content><C.image></C.image></C.content>
        </C.body>
        <C.body>
          <C.titleSub>위탁수하물 무게 및 개수</C.titleSub>
          <C.content>
            <T.table>
              <div className="tbWrap">
                <table>
                  <colgroup>
                    <col width="50%"></col>
                    <col width="50%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <td>Premia 42</td>
                      <td>Economy 35</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <C.OneBaggage><C.oneBText>10kg<br></br>(22lbs)</C.oneBText></C.OneBaggage>
                        <C.OneBaggage><C.oneBText>10kg<br></br>(22lbs)</C.oneBText></C.OneBaggage>
                      </td>
                      <td><C.OneBaggage><C.oneBText>10kg<br></br>(22lbs)</C.oneBText></C.OneBaggage></td>
                    </tr>
                    <tr>
                      <td>무게: 10kg(22lbs) 이내, 개수: 2개</td>
                      <td>무게: 10kg(22lbs) 이내, 개수: 1개</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </T.table>
          </C.content>
        </C.body>
        <C.body>
          <C.titleSub>유의사항</C.titleSub>
          <C.content>
            <ListGlobal level="fst" body={
              <p>휴대수하물은 손님의 책임과 보관 하에 기내로 가져갈 수 있는 수하물로 개폐가 가능한 머리 위 선반, 손님 좌석 하단에 안전하게 보관할 수 있어야 합니다.</p>
            }/>
            <ListGlobal level="fst" body={
              <p>모든 물품은 기내수하물 허용량에 포함하나 유아 및 소아, 도움이 필요한 손님, 노약자 필요 물품은 추가로 기내에 반입하실 수 있습니다.</p>
            }/>
            <C.ex>거동이 불편하신 손님의 지팡이, 목발 또는 보조기구, 개인용 휠체어, 비행 중 사용할 유아용 음식, 유아 및 소아용 안전의자, 세 변의 합이 115cm 미만으로 기내 반입 수하물 기준을 충족하는 유모차 등<br></br>(단, 기내 허용 수하물일지라도 기내 공간 부족, 항공사 사정 등에 따라 위탁수하물로 처리될 수 있습니다)</C.ex>
            <ListGlobal level="fst" body={
              <p>대형 악기 (세 변의 합이 115cm를 초과하는 첼로, 가야금, 거문고, 기타 등)는 별도의 좌석을 구매해야 기내로 운송이 가능합니다.</p>
            }/>
            <ListGlobal level="fst" body={
              <p>항공기의 제약 및 운항 국가별 공항 규정 및 절차에 따라 기내 반입이 변경/제한되는 경우도 있습니다.</p>
            }/>
            <ListGlobal level="fst" body={
              <p>기내반입 제한물품</p>
            }/>
            <ListGlobal level="scd" body={
              <p>총, 소총기 등 탄환을 발사하는 장치</p>
            }/>
            <ListGlobal level="scd" body={
              <p>전자충격기, 고추/산성스프레이 등 기절 또는 마비시키기 위해 고안된 장치</p>
            }/>
            <ListGlobal level="scd" body={
              <p>모든 종류의 도검류, 가위 등 끝이 뽀족하거나 옆이 날카로운 물체</p>
            }/>
            <ListGlobal level="scd" body={
              <p>야구 방망이, 볼링공, 아령 등 공격적인 물건, 기타 무기로 사용될 수 있는 물건</p>
            }/>
            <ListGlobal level="scd" body={
              <p>화학물질, 유독성 물질, 폭발성 및 인화성 물질</p>
            }/>
            <ListGlobal level="trd" body={
              <p>[항공보안법] 제44조에 따라 2년 이상 5년 이하의 징역 또는 2천만원 이상 5천만원 이하의 벌금에 처할 수 있으니 금지 물품을 항공기로 반입하지 않도록 유의해 주시기 바랍니다.</p>
            }/>
          </C.content>
        </C.body>
      </C.wrap>
    )
  } else {
    return (
      <C.wrap className="bdN">
        <C.body>
          <C.titleSub>위탁 수하물 크기</C.titleSub>
          <C.content>
            <C.image></C.image>
            <T.table>
              <div className="tbWrap">
                <table>
                  <colgroup>
                    <col width="50%"></col>
                    <col width="50%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <td>국내선</td>
                      <td>국제선</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>세 변의 합이 203cm 이내</td>
                      <td>세 변의 합이 158cm 이내</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </T.table>
          </C.content>
        </C.body>
        <C.body>
          <C.titleSub>휴대수하물 무게 및 개수</C.titleSub>
          <C.content>
            <T.table>
              <div className="tbWrap">
                <table className="resize">
                  <colgroup>
                    <col width="10%"></col>
                    <col width="30%"></col>
                    <col width="30%"></col>
                    <col width="30%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>구분</th>
                      <td>Premia 42</td>
                      <td>Economy 35<br></br>(Flex/Standard)</td>
                      <td>Economy 35<br></br>(Lite)</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th rowSpan={2}>국내선</th>
                      <td className="mobN"><C.OneBaggage><C.oneBText>30kg<br></br>(66lbs)</C.oneBText></C.OneBaggage></td>
                      <td className="mobN"><C.OneBaggage><C.oneBText>20kg<br></br>(44lbs)</C.oneBText></C.OneBaggage></td>
                      <td className="mobN"><C.OneBaggage><C.oneBText>20kg<br></br>(44lbs)</C.oneBText></C.OneBaggage></td>
                    </tr>
                    <tr>
                      <td>무게: 30kg(66lbs) 이내, 개수: 1개</td>
                      <td>무게: 20kg(44lbs) 이내, 개수: 1개</td>
                      <td>무게: 20kg(44lbs) 이내, 개수: 1개</td>
                    </tr>
                    <tr>
                      <th rowSpan={2}>동북아/<br></br>동남아</th>
                      <td className="mobN">
                        <C.OneBaggage><C.oneBText>23kg<br></br>(51lbs)</C.oneBText></C.OneBaggage>
                        <C.OneBaggage><C.oneBText>23kg<br></br>(51lbs)</C.oneBText></C.OneBaggage>
                      </td>
                      <td className="mobN"><C.OneBaggage><C.oneBText>23kg<br></br>(51lbs)</C.oneBText></C.OneBaggage></td>
                      <td className="mobN"><C.NoBaggage></C.NoBaggage></td>
                    </tr>
                    <tr>
                      <td>무게: 23kg(51lbs) 이내, 개수: 2개</td>
                      <td>무게: 23kg(51lbs) 이내, 개수: 1개</td>
                      <td>수하물 없음</td>
                    </tr>
                    <tr>
                      <th rowSpan={2}>미주</th>
                      <td className="mobN">
                        <C.OneBaggage><C.oneBText>32kg<br></br>(71lbs)</C.oneBText></C.OneBaggage>
                        <C.OneBaggage><C.oneBText>32kg<br></br>(71lbs)</C.oneBText></C.OneBaggage>  
                      </td>
                      <td className="mobN">
                        <C.OneBaggage><C.oneBText>23kg<br></br>(51lbs)</C.oneBText></C.OneBaggage>
                        <C.OneBaggage><C.oneBText>23kg<br></br>(51lbs)</C.oneBText></C.OneBaggage>
                      </td>
                      <td className="mobN"><C.OneBaggage><C.oneBText>23kg<br></br>(51lbs)</C.oneBText></C.OneBaggage></td>
                    </tr>
                    <tr>
                      <td>무게: 32kg(71lbs) 이내, 개수: 2개</td>
                      <td>무게: 23kg(51lbs) 이내, 개수: 2개</td>
                      <td>무게: 23kg(51lbs) 이내, 개수: 1개</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </T.table>
          </C.content>
          <C.content>
            <ListGlobal level="ball" body={
              <div>
                <p>항공기 출발 48시간 전에 추가수하물을 미리 구매하시면 할인된 요금으로 이용하실 수 있습니다</p>
                <p>
                  <C.linkm>
                    <Link href="/ticket/pay/confirm">
                      <a>
                        사전 수하물 구매 <Linkblue />
                      </a>
                    </Link>
                  </C.linkm>
                </p>
              </div>
            }/>
          </C.content>
        </C.body>
        {/* <C.body>
          <C.titleSub>유아 위탁수하물 허용량</C.titleSub>
          <C.content>
            <T.table>
              <div className="tbWrap">
                <table>
                  <colgroup>
                    <col width="50%"></col>
                    <col width="50%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <td>국내선</td>
                      <td>국제선</td>
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
              </div>
            </T.table>
          </C.content>
        </C.body> */}
        <C.body>
          <C.titleSub>유의사항</C.titleSub>
          <C.content>
            <ListGlobal level="fst" body={
              <p>소아 운임을 지불한 소아 또는 좌석을 점유하는 유아의 위탁수하물 허용량은 성인 적용 운임을 지불한 여객과 동일합니다.</p>
            }/>
            <ListGlobal level="fst" body={
              <p>소아/유아의 경우, 유모차, 카시트, 요람 중 1개 추가 위탁가능합니다.</p>
            }/>
            <ListGlobal level="fst" body={
              <p>거동이 불편하신 손님이 사용하는 1개의 휠체어 또는 기타 보조기구는, 상기의 무료 위탁수하물 허용량과는 별도로, 무료로 위탁이 가능합니다.</p>
            }/>
            <ListGlobal level="fst" body={
              <p>위탁수하물 중 노트북 컴퓨터, 휴대폰, 카메라, 캠코더, MP3 플레이어 등 개인 전자제품 또는 데이터 저장매체 등 과 같이 파손되기 쉬운 물건, 적절히 포장되지 않은 물건, 부패성 물건, 화폐, 보석류, 귀금속, 유가증권, 의약품, 신분증, 열쇠, 예술작품, 골동품, 기타 고가품 또는 귀중품, 서류 또는 견본 등은 위탁이 불가합니다.</p>
            }/>
            <ListGlobal level="fst" body={
              <p>손님의 여정이 다구간일 경우 출발 당일 공항 탑승수속 카운터에서 수하물이 최종 목적지까지 연결 수속 가능한지 확인해 주시기 바랍니다.<br></br>(수하물 연결 수속은 경우지 공항 사정 및 연결편 항공사에 따라 제한될 수 있습니다)</p>
            }/>
          </C.content>
        </C.body>
        <C.body>
          <C.titleSub>무료 위탁수하물의 개수 합산</C.titleSub>
          <C.content>
            <ListGlobal level="fst" body={
              <p>동일 손님예약번호(PNR)의 2인 이상 손님이 동일 목적지와 항공편으로 여행하며 동시에 탑승수속할 경우, 각 개인의 무료수하물 개수 허용량의 합계를 단체 여객 전원에 대한 허용량으로 취급할 수 있습니다.(무게 합산은 불가)</p>
            }/>
            <ListGlobal level="fst" body={
              <p>단, 상기 합산된 무료 수하물 허용량을 초과하는 수하물에 대해서는 정해진 기준에 따라 초과수하물 요금에 따라 부과합니다.</p>
            }/>
          </C.content>
        </C.body>
      </C.wrap>
    )
  } 
}



const C = {
  ...SupportStyle.C1,

  OneBaggage: styled.div`
    margin: 0 auto;
    width: 58px;
    height: 112px;
    margin-right: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    line-height: 24px;
    background-image: url(${OneBaggage});
    background-repeat: no-repeat;

    &:last-child {
      margin-right: 0;
    }

    @media only screen and (max-width: 767px) {
      width: 30px;
      height: 60px;
      background-size: 30px;
      background-repeat: no-repeat;
    }
  `,
  oneBText:styled.span`
    margin-top: 15px;

    @media only screen and (max-width: 767px) {
      display: none;
    }
  `,
  TwoBaggage: styled.div`
    margin: 0 auto;
    width: 127px;
    height: 112px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${TwoBaggage});
  `,
  twoBText:styled.span`
    margin-top: 15px;
    margin-left: -68px;
  `,
  NoBaggage: styled.div`
    margin: 0 auto;
    width: 98px;
    height: 112px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${NoBaggage});

    @media only screen and (max-width: 767px) {
      width: 40px;
      height: 60px;
      background-size: 40px;
      background-repeat: no-repeat;
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

    @media only screen and (max-width: 767px) {
      width: 60px;
      height: 60px;
      background-size: 60px;
      background-repeat: no-repeat;
    }
  `,
  baggageStroller: styled.div`
    margin: 0 auto;
    width: 125px;
    height: 130px;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${BaggageStroller});
    background-repeat: no-repeat;

    @media only screen and (max-width: 767px) {
      width: 80px;
      height: 80px;
      background-size: 75px;
      background-repeat: no-repeat;
    }
  `,
  bSText:styled.span`
    margin-top: 5px;
    margin-left: -52px;

    @media only screen and (max-width: 767px) {
      display: none;
    }
  `,
  ex: styled.div`
    position: relative;
    font-size: 18px;
    line-height: 2em;
    padding-left: 42px;
    &:before {
      content: "예)";
      display: block;
      position: absolute;
      top: 0;
      left: 14px;
      color: ${DARK_GRAY1};
    }

    @media only screen and (max-width: 767px) { 
      font-size: 14px;
      &:before {
        font-size: 14px;
      }
    }
  `,
  image: styled.div`
    width: 400px;
    height: 280px;
    margin: 30px auto;
    background-image: url(${Redcarry});
    background-repeat: no-repeat;

    @media only screen and (max-width: 767px) {
      width: 240px;
      height: 168px;
      background-size: 240px;
    }
  `,
  linkm: styled.p`
    a {
      color: ${BLUE1};
      font-weight: 600;
      cursor: pointer;
    }
  `,
};

const T = {
  table: styled.div`

    @media only screen and (max-width: 767px) {
      table.resize {
        col:nth-child(1),
        col:nth-child(2),
        col:nth-child(3),
        col:nth-child(4) {
          width: 25%;
        }
      }

      .mobN {
        display: none !important;
      }
    }
  
  `,
  }

export default TabContent;
