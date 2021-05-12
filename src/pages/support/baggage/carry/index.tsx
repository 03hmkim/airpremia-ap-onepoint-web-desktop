import styled from 'styled-components';
import {
  ComTitle,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  LIGHT_GRAY7,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import Caution from 'public/images/support/ico_caution.svg';
import Handcarry from 'public/images/support/img_carry.svg';
import Liquid from 'public/images/support/img_liquid.svg';
import Gun from 'public/images/support/img_gun.svg';
import Elect from 'public/images/support/img_elect.svg';
import Knife from 'public/images/support/img_knife.svg';
import Bet from 'public/images/support/img_bet.svg';
import Chemical from 'public/images/support/img_chemical.svg';
import Linkblack from 'public/images/support/btn_txt_link_black.svg';
import Link from 'next/link'


function Carry(){
    return (
    <Container>
      <ComTitle
        title="수하물"
      />
      <C.wrap>
        <C.body>
          <C.titleMain>휴대수하물</C.titleMain>
          <C.sb>
            <C.title>기내에 휴대할 수 있어요.</C.title>
          </C.sb>
          <C.tmi><Handcarry /></C.tmi>
          <C.tmi>
          <T.table>
            <table>
              <colgroup>
                <col width="33.3333%"></col>
                <col width="33.3333%"></col>
                <col width="33.3333%"></col>
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <td></td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>무게</th>
                  <td></td>
                  <td>10kg (22lbs) 이내</td>
                </tr>
                <tr>
                  <th>크기</th>
                  <td></td>
                  <td>
                    <p>세 변의 합이 115cm 이내</p>
                    <p><C.lgray>A+B+C 세 변 길이의 합이며, 각 변의 최대치는</C.lgray></p>
                    <p><C.lgray>가로 40cm, 세로 55c, 높이 20cm를 넘을 수 없음</C.lgray></p>
                  </td>
                </tr>
                <tr>
                  <th>개수</th>
                  <td>
                      <p>Premia 42</p>
                      <p>Economy 35</p>
                  </td>
                  <td>
                      <p>2개</p>
                      <p>1개</p> 
                  </td>
                </tr>
              </tbody>
            </table>
          </T.table>
        </C.tmi>
        <C.sb>
        <C.content>
          <C.note><C.image><Caution /></C.image>유의 사항</C.note>
          <C.ntg>휴대 수하물은 손님의 책임과 보관 하에 기내로 가져갈 수 있는 수하물로 개폐가 가능한 머리 위 선반, 손님 좌석 하단에 안전하게 보관할 수 있어야 합​니다.​</C.ntg>
          <C.ntg>모든 물품은 기내 수하물 허용량에 포함하나 유아 및 소아, 도움이 필요한 손님, 노약자 필요 물품은 추가로 기내에 반입하실 수 있습니다.​<br />예) 거동이 불편하신 손님의 지팡이, 목발 또는 보조기구, 개인용 휠체어, 비행 중 사용할 유아용 음식, 유아 및 소아용 안전의자, 세 변의 합이 115㎝ 미만으로 기내 반입 수하물 기준을 충족하는 유모차 등<br />​(단, 기내 허용 수하물일지라도 기내 공간 부족, 항공사 사정 등에 따라 위탁 수하물로 처리될 수 있습니다)​</C.ntg>
          <C.ntg>대형 악기(세 변 길이의 합이 115㎝를 초과하는 첼로, 가야금, 거문고, 기타 등)는 별도의 좌석을 구매해야 기내로 운송이 가능합니다.</C.ntg>
          <C.ntg>항공기의 제약 및 운항 국가별 공항 규정 및 절차에 따라 기내 반입이 변경/제한되는 경우도 있습니다.​</C.ntg>
        </C.content>
      </C.sb>
      </C.body>
      <C.body>
        <C.title>기내에 액체류를 휴대하려면?</C.title>
          <C.tmi><C.center><Liquid /></C.center></C.tmi>
          <C.tmi>
              <C.p>물·음료·식품·화장품 등 액체·분무(스프레이) ·겔류(젤 또는 크림)로 된 물품은 100㎖ 이하의 개별용기에 담아 1인당 1ℓ 투명 비닐지퍼백 1개에 한해 반입이 가능합니다.</C.p>
              <C.p>유아식 및 의약품 등은 항공여정에 필요한 용량에 한하여 반입이 허용됩니다. 단, 의약품은 처방전 등 증빙 서류를 검색요원에게 제시해야 합니다.</C.p>
              <C.note>고추장/김치 등 액체류 음식물</C.note>
              <C.ntg>기내 액체류 반입 규정과 동일하게 적용</C.ntg>
              <C.ntg>위탁 수하물로 부치실 것을 권고드리며 발효식품의 특성상 부피가 늘어나는 것을 감안하여 용기의 3분의 2만 채워서 포장해 주시기 바랍니다.</C.ntg>
          </C.tmi>
        </C.body>
        <C.body>
          <C.title>기내에 반입할 수 없어요</C.title>
          <C.content>
            <C.tmi>
              <C.igr>
                  <C.img><Gun /></C.img>
                  <C.desc>총, 소총기 등 탄환을 발사하는 장치</C.desc>
              </C.igr>
              <C.igr>
                  <C.img><Elect /></C.img>
                  <C.desc>전자충격기, 고추/산성스프레이 등<br />기절 또는 마비시키기 위해 고안된 장치</C.desc>
              </C.igr>
              <C.igr>
                  <C.img><Knife /></C.img>
                  <C.desc>모든 종류의 도검류, 가위 등<br />끝이 뾰족하거나 옆이 날카로운 물체</C.desc>
              </C.igr>
              <C.igr>
                  <C.img><Bet /></C.img>
                  <C.desc>야구 방망이, 볼링공, 아령 등 공격적인 물건,<br /> 기타 무기로 사용될 수 있는 물건</C.desc>
              </C.igr>
              <C.igr>
                  <C.img><Chemical /></C.img>
                  <C.desc>화학물질, 유독성 물질,<br /> 폭발성 및 인화성 물질</C.desc>
              </C.igr>
            </C.tmi>
          </C.content>
        </C.body>
        <C.sbody>
          <C.rf>항공보안법 제 44조 (휴대 또는 탑재가 금지된 물건을 항공기에 휴대 또는 탑재하거나 다른 사람으로 하여금 휴대 또는 탑재하게 한 사람은 2년 이상 5년 이하의 징역 또는 2천만원 이상 5천만원 이하의<br />벌금에 처합니다)에 따라 금지 물품을 항공기로 반입하지 않도록 유의해 주시기 바랍니다.</C.rf>              
        </C.sbody>
        <C.body>
          <C.title>도움이 되셨나요?</C.title>
          <C.sb>
            <C.helpl className="dpN">
              <Link href="./carry">
                <a>
                  휴대 수하물<Linkblack />
                </a>
              </Link>
            </C.helpl>
            <C.helpl>
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
        </C.body>
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
  rf: styled.p`
    font-size: 14px;
    color: ${LIGHT_GRAY8};
    margin-top: 20px;
    line-height: 1.8;
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
  lgray: styled.p`
    color: ${LIGHT_GRAY7};
  `,
  linkTitle: styled.p`
    color: ${BLUE1};
    margin-left: 10px;
    margin-top: 10px;
  `,
  igr: styled.div`
    width: 50%;
    margin-top: 80px;
    display: inline-block;
  `,
  desc: styled.p`
    margin-left: 50px;
    line-height: 1.8;
    display: inline-block;
    vertical-align: middle;
  `,
  img: styled.p`
    display: inline-block;
    vertical-align: middle;
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
export default Carry;