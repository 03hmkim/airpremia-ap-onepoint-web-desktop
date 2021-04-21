import styled from 'styled-components';
import { useModal } from 'src/hooks';
import {
  ComTitle,
  NewModal,
  PopupTitle,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  WHITE1,
  DARK_BLUE1,
  BLUE1,
  RED1,
} from '@airpremia/cdk/styles/colors';
import { EScrollType } from 'src/components/templates/centerPopup';
import Caution from 'public/images/support/ico_caution.svg';
import Linkblack from 'public/images/support/btn_txt_link_black.svg';
import Linkblue from 'public/images/support/btn_txt_link_blue.svg';
import Special from 'public/images/support/img_special.png';
import Link from 'next/link'


function additionalServicespecialcarry(){

  const {
    onShowNewModal,
    UIStore: { newModal },
  } = useModal();
  
  const li_ion = () =>
    onShowNewModal('li_ion');

    const onClickModal = () => {
      switch (newModal.target) {
        case 'li_ion':
          return (
            <NewModal
              className="max"
              type={EScrollType.TYPE6}
              title={
                <S.modalTitle>
                  <PopupTitle>리튬배터리 운송 기준</PopupTitle>
                </S.modalTitle>
              }
              body={
                <>
                  <S.textArea className="auto">
                    <T.table>
                      <table>
                        <colgroup>
                          <col width=""></col>
                          <col width="120px"></col>
                          <col width="120px"></col>
                        </colgroup>
                        <thead>
                          <tr>
                            <th>기준</th>
                            <td>휴대수하물</td>
                            <td>위탁 수하물</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>100Wh 이하, 리튬 함량 2g 이하</th>
                            <td>
                              <p>기기 장착 : A</p>
                              <p>여분 : 5개</p>
                            </td>
                            <td>
                              <p>기기 장착 : A</p>
                              <p><C.red>여분 : 불가</C.red></p>
                            </td>
                          </tr>
                          <tr>
                            <th>100Wh 초과 ~ 160Wh 이하,<br />리튬 함량 8g 이하</th>
                            <td>
                              <p>기기 장착 : B</p>
                              <p>여분 : 2개</p>
                            </td>
                            <td>
                              <p>기기 장착 : B</p>
                              <p><C.red>여분 : 불가</C.red></p>
                            </td>
                          </tr>
                          <tr>
                            <th>160Wh 초과, 리튬 함량 8g 초과</th>
                            <td><C.red>운송 불가</C.red></td>
                            <td><C.red>운송 불가</C.red></td>
                          </tr>
                        </tbody>
                      </table>
                    </T.table>
                    <C.linehgt>
                      <p>* A = 총 15개(휴대수하물+위탁수하물), B = 총 10개(휴대수하물+위탁수하물)</p>
                      <p>** 리튬이온배터리의 용량 단위 : Wh, 리튬메탈배터리의 용량 단위 : g​</p>
                    </C.linehgt>
                    <C.desc>
                      <p>- 배터리 용량 구하는 법 : 용량(Wh) = 전압(V) X 전류(Ah),  1Ah=1,000mAh​</p>
                      <p>- 여분의 리튬배터리 및 보조배터리는 위탁수하물로 운송이 불가하며, 휴대용 전자기기를 위탁수하물로 운송하는 경우  반드시 전원을 꺼주시기 바랍니다.​</p>
                      <p>- 리튬배터리로 구동되는 일체의 탈 것류(에어휠, 호버보드, 전기 자전거, 전동 스쿠터, 전동 킥보드, 전동 스케이트 보드 등)는 배터리 용량에 관계없이 휴대/위탁수하물 모두 불가합니다.​​</p>
                    ​</C.desc>
                  </S.textArea>
                </>
              }
            />
          );         
        default:
          return null;
      };
    };

    return (
    <Container>
      {onClickModal()}
      <ComTitle
        title="수하물"
      />
      <C.wrap>
        <C.body>
          <C.titleMain>스포츠/악기/고가품 운송</C.titleMain>
          <C.sb>
            <C.title>특수수하물 안내</C.title>
          </C.sb>
          <C.tmi>
            <C.center><img src={Special} /></C.center>
          </C.tmi>
          <C.tmi>
          <T.table>
              <table>
                <colgroup>
                  <col width="50%"></col>
                  <col width="50%"></col>
                </colgroup>
                  <thead>
                    <tr>
                      <th></th>
                      <td></td>
                    </tr>
                  </thead>
                <tbody>
                  <tr>
                    <th>무게</th>
                    <td>32kg 이하</td>
                  </tr>
                  <tr>
                    <th>크기</th>
                    <td>A+B+C 세 변 길이의 합이 292cm 이하</td>
                  </tr>
                </tbody>
              </table>
            </T.table>
          </C.tmi>
          <C.sb>
          <C.content>
            <C.note><C.image><Caution /></C.image>유의 사항</C.note>
            <C.ntg>특수수하물의 최대 무게는 32kg 이하,  최대  크기는 세 변의 합이 292cm 이하입니다.​</C.ntg>
            <C.ntg>특수 수하물은 모양과 크기가 일반 수하물과 달라 운송 도중 내용물이 휘거나 파손될 가능성이 높으니 전용하드케이스 또는 내부 완충제가 포함된 BOX에 견고히 포장되어 있어야만 위탁이 가능합니다.</C.ntg>
            <C.ntg>골프백을 제외한 기타 스포츠장비(스노우보드, 스노우/수상스키 장비, 서핑보드, 윈드서핑, 스쿠버다이빙 장비, 자전거, 하키 장비, 라켓류, 스케이트보드 등)은 위탁수하물 1개로 간주하며, 세변의 합이 292cm 이내일 경우 크기 초과수하물 요금을 적용하지 않으나  무게를 초과할 경우 초과수하물 요금을 적용합니다.​</C.ntg>
            <C.ntg>무료 수하물 허용량과 상관없이 별도의 취급수수료 KRW10,000가 부과됩니다.(골프백 제외)​</C.ntg>
            <C.ntg>포장이 미흡한 특수수하물은 파손 시 배상이 불가하오니 유의하시기 바랍니다.​</C.ntg>
            <C.ntg>탑승수속 시 특수수하물 운송 서약서를 작성하셔야 합니다</C.ntg>
            <C.linkm>
                <a href="/document/support_special-carry.pdf" download>
                  특수수하물 운송 서약서<Linkblue />
                </a>
            </C.linkm>
          </C.content>
        </C.sb>
        </C.body>
        <C.sbody>
            <C.sub>골프 장비</C.sub>
            <C.tmi>
                <C.txtb>골프백 1개와 일반가방 1개 무게의 합은 해당 클래스 무료 위탁수하물 허용량 1pc 무게를 적용합니다.<br />​예) 무료수하물이 가방 1개(23kg)인 손님 1명이 골프백을 위탁 시</C.txtb>
            </C.tmi>
          <T.table>
              <table>
                <colgroup>
                  <col width="50%"></col>
                  <col width="50%"></col>
                </colgroup>
                <thead>
                  <tr>
                    <th></th>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>골프백 1개 + 일반가방 1개 무게의 합이 23kg 이하</th>
                    <td>1개의 위탁수하물로 간주</td>
                  </tr>
                  <tr>
                    <th>골프백 1개 + 일반가방 1개 무게의 합이 32kg 이하</th>
                    <td>1개의 위탁수하물로 간주하나<br />무게초과요금 부과</td>
                  </tr>
                  <tr>
                    <th>골프백 1개 + 일반가방 1개 무게의 합이 32kg 초과 ~ 45kg 이하</th>
                    <td>2개의 위탁수하물로 간주</td>
                  </tr>
                </tbody>
              </table>
            </T.table>
        </C.sbody>
        <C.sbody>
            <C.sub>스쿠버다이빙 장비</C.sub>
            <C.tmi>
                <C.txtb>
                  “공기통 1개+스쿠버다이빙 장비 가방 1개”를 위탁수하물 1개로 간주합니다.​<br />
                  스쿠버다이빙 장비는 공기통이 완전히 빈 상태여야하며, 탱크는 육안으로 내부검사가 가능하도록 개방된 상태여야 합니다.​<br />
                  수중랜턴은 기내수하물로 운송이 가능합니다. 이때 배터리가 반드시 분리된 상태이어야 하며, 분리된 배터리의 운송가능여부는 에어프레미아 규정에 따릅니다.
                </C.txtb>
            </C.tmi>
            <C.linkm onClick={li_ion}>
              <span>리튬배터리 운송 기준<Linkblue /></span>
            </C.linkm>
        </C.sbody>
        <C.sbody>
            <C.sub>자전거</C.sub>
            <C.tmi>
                <C.txtb>자전거는 핸들을 고정하고 페달을 제거한 후 충격 방지용 완충제가 내장된 전용 하드케이스에 포장하여야 합니다.<br />엔진이 장착된 동력 자전거나 오토바이, 제트스키 등의 경우 수하물로 운송이 불가능합니다.​</C.txtb>
            </C.tmi>
        </C.sbody>
        <C.sbody>
            <C.sub>낚시 장비</C.sub>
            <C.tmi>
                <C.txtb>“낚시대 가방 1개+Tackle Box1개”를 위탁수하물 1개로 간주합니다.</C.txtb>
            </C.tmi>
        </C.sbody>
        <C.sbody>
            <C.sub>하키/라크로스 장비</C.sub>
            <C.tmi>
                <C.txtb>“장비 가방 1개+스틱 1개”를 위탁수하물 1개로 간주합니다.​<br />장비가방 없이 스틱만 위탁하는 경우에도 위탁수하물 1개로 간주합니다.​</C.txtb>
            </C.tmi>
        </C.sbody>
        <C.sbody>
            <C.sub>대형악기운송</C.sub>
            <C.tmi>
                <C.txtb>
                  첼로, 콘트라베이스 등 대형악기를 기내로 휴대하고자 하는 경우, 별도의 추가 좌석을 구매하시면 반입이 가능합니다.<br />
                  첼로, 콘트라베이스 등 대형악기를 위탁수하물로 보내는 경우, 총 수하물 개수, 크기, 무게가 무료수하물 허용량을 초과하는 경우에는 초과수하물 요금이 부과됩니다.<br />
                  악기류는 파손 가능성이 크기 때문에 기내 휴대 또는 별도 좌석 구매 후 운송을 권장드립니다.<br />
                  별도의 좌석 구매와 관련하여 에어프레미아 예약센터로 문의해주시기 바랍니다.
                </C.txtb>
            </C.tmi>
        </C.sbody>
        <C.sbody>
            <C.sub>고가품 신고 제도</C.sub>
            <C.tmi>
                <C.txtb>
                  손님께서 고가의 물품을 위탁하실 경우 소정의 추가 요금을 지불하시면 손해 배상 시 신고하신 금액까지 보장받으실 수 있습니다.<br />
                  위탁수하물로 부치신 물품이 분실, 파손된 경우 운송약관이 정하는 범위 외의 일체의 책임을 부담하지 않습니다. <br />
                  최대 신고액은 USD 2,500으로 한정되며, 물품 가액을 증명할 수 있는 서류를 제시해야 합니다.<br />
                  고가품 신고 시 부과되는 요금은 USD 100달러당 USD 0.5로 계산됩니다.
                </C.txtb>
            </C.tmi>
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
            <C.helpl className="dpN">
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
  span: styled.span`
    padding: 4px 12px;
    color:${WHITE1};
    background-color: ${DARK_BLUE1};
    border-radius: 60px;
  `,
  linkTitle: styled.a`
    font-size: 14px;
    font-weight: bold;
    color: ${BLUE1};
    margin-right: 10px;
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

    .dpN{
      display: none;
    }
  `,
  linkm: styled.p`
    margin-top: 20px;
    margin-left: 10px;
    a,
    span{
      color: ${BLUE1};
      font-weight: 600;
      cursor: pointer;
    }
    &:last-child{
      margin-left: 0px;
    }
  `,
  txtb: styled.p`
    font-size: 15px;
    font-weight: bold;
    line-height: 1.8;
  `,
  red: styled.span`
    color: ${RED1};
  `,
  linehgt: styled.div`
    font-size: 14px;
    color: ${LIGHT_GRAY8};
    margin-top: 20px;
    line-height: 1.8;
  `,
  desc: styled.p`
    font-size: 15px;
    font-weight: regular;
    line-height: 1.8;
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

const S = {
  modalTitle : styled.div``,

  textArea: styled.div`
    height: 100%;
    &.auto{
      padding: 0 50px 50px;
      overflow-y: auto;
      box-sizing: border-box;
    }
  `,

}
export default additionalServicespecialcarry;