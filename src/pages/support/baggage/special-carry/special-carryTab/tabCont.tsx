import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import { useModal } from 'src/hooks';
import {
  NewModal,
  PopupTitle,
  TaskButton,
} from 'src/components';
import {
  LIGHT_GRAY8,
  BLUE1,
  RED1,
} from '@airpremia/cdk/styles/colors';
import { ListGlobal } from 'src/components';
import { SupportStyle } from 'src/styles/common';
import Linkblue from 'public/images/support/btn_txt_link_blue.svg';
import { EScrollType } from 'src/components/templates/centerPopup';

function TabContent({currIdxCont}: IProps) {
  if ( currIdxCont === 0 ) {

    const {
      onShowNewModal,
      UIStore: { newModal },
    } = useModal();

    const { onHideNewModal } = useModal();
    
    const li_ion = () =>
      onShowNewModal('li_ion');
  
      const onClickModal = () => {
        switch (newModal.target) {
          case 'li_ion':
            return (
              <NewModal
                className="max"
                type={EScrollType.TYPE1}
                title={
                  <PopupTitle>리튬배터리 운송 규정</PopupTitle>
                }
                body={
                  <>
                    <T.table>
                      <div className="tbWrap">
                        <table>
                          <colgroup>
                            <col width="32%"></col>
                            <col width="17%"></col>
                            <col width="17%"></col>
                            <col width="17%"></col>
                            <col width="17%"></col>
                          </colgroup>
                          <thead>
                            <tr>
                              <th rowSpan={2}>기준</th>
                              <td colSpan={2}>휴대수하물</td>
                              <td colSpan={2}>위탁 수하물</td>
                            </tr>
                            <tr>
                              <td>기기장착</td>
                              <td>여분</td>
                              <td>기기장착</td>
                              <td>여분</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>100Wh 이하, 2g 이하</th>
                              <td>A</td>
                              <td>5개</td>
                              <td>A</td>
                              <td><C.red>불가</C.red></td>
                            </tr>
                            <tr>
                              <th>100Wh 초과 160Wh 이하, 2g 초과 8g 이하 (항공사 사전 승인 필요)</th>
                              <td>B</td>
                              <td>2개</td>
                              <td>B</td>
                              <td><C.red>불가</C.red></td>
                            </tr>
                            <tr>
                              <th>160Wh 초과, 8g 초과</th>
                              <td colSpan={4}><C.red>운송 불가</C.red></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </T.table>
                    <C.m20>
                      <ListGlobal level="star gray" body={
                        <p>A=총 15개(휴대수하물+위탁수하물), B=총 10개(휴대수하물+위탁수하물)</p>
                      }/>
                      <ListGlobal level="star gray" body={
                        <p>리튬이온배터리의 용량 단위:Wh, 리튬메탈배터리의 용량 단위:g​</p>
                      }/>
                    </C.m20>
                    <C.m30>
                      <ListGlobal level="fst" body={
                        <p>배터리 용량 구하는 법 : 용량(Wh) = 전압(V) X 전류(Ah), 1Ah=1,000mAh</p>
                      }/>
                      <ListGlobal level="fst" body={
                        <p>여분의 리튬배터리 및 보조배터리는 위탁수하물로 운송이 불가합니다.</p>
                      }/>
                    ​</C.m30>
                  </>
                }
                button={
                  <TaskButton onClick={onHideNewModal}>확인</TaskButton>
                }
              />
            );         
          default:
            return null;
        };
      };

    return (      
      <C.wrap className="bdN">
        {onClickModal()}
        <C.body>
          <C.content className="mt60">
            <ListGlobal level="fst" body={
              <p>특수수하물의 최대 무게는 32kg 이하,  최대  크기는 세 변의 합이 292cm 이하입니다.</p>
            }/>
            <ListGlobal level="fst" body={
              <p>특수 수하물은 모양과 크기가 일반 수하물과 달라 운송 도중 내용물이 휘거나 파손될 가능성이 높으니 전용하드케이스 또는 내부 완충제가 포함된 BOX에 견고히 포장되어 있어야만 위탁이 가능합니다.</p>
            }/>
            <ListGlobal level="fst" body={
              <p>골프백을 제외한 기타 스포츠장비(스노우보드, 스노우/수상스키 장비, 서핑보드, 윈드서핑, 스쿠버다이빙 장비, 자전거, 하키 장비, 라켓류, 스케이트보드 등)은 위탁수하물 1개로 간주하며, 세변의 합이 292cm 이내일 경우 크기 초과수하물 요금을 적용하지 않으나  무게를 초과할 경우 초과수하물 요금을 적용합니다.</p>
            }/>
            <ListGlobal level="fst" body={
              <p>무료 수하물 허용량과 상관없이 별도의 취급수수료 KRW10,000가 부과됩니다. (골프백 제외)</p>
            }/>
            <ListGlobal level="fst" body={
              <p>포장이 미흡한 특수수하물은 파손 시 배상이 불가하오니 유의하시기 바랍니다.</p>
            }/>
            <ListGlobal level="fst" body={
              <p>
                탑승수속 시 특수수하물 운송 서약서를 작성하셔야 합니다.
                <C.linkm>
                  <a href="/document/support_special-carry.pdf" download>
                    특수수하물 운송 서약서<Linkblue />
                  </a>
                </C.linkm>  
              </p>
            }/>
          </C.content>
        </C.body>
        <C.body>
          <C.titleSub>골프장비</C.titleSub>
          <C.content>
            <ListGlobal level="fst" body={
              <p>
                골프백 1개와 일반가방 1개 무게의 합은 해당 클래스 무료 위탁수하물 허용량 1pc 무게를 적용합니다.
                <C.ex>무료수하물이 가방 1개(23kg)인 손님 1명이 골프백을 위탁 시</C.ex>
              </p>
            }/>
            <ListGlobal level="scd" body={
              <p>골프백 1개+일반가방 1개 무게의 합이 23kg 이하: 1개의 위탁수하물로 간주</p>
            }/>
            <ListGlobal level="scd" body={
              <p>골프백 1개+일반가방 1개 무게의 합이 32kg 이하: 1개의 위탁수하물로 간주하나 무게초과요금 부과</p>
            }/>
            <ListGlobal level="scd" body={
              <p>골프백 1개+일반가방 1개 무게의 합이 32kg 초과 45kg 이하: 2개의 위탁수하물로 간주</p>
            }/>
          </C.content>
        </C.body>
        <C.body>
          <C.titleSub>스쿠버다이빙 장비</C.titleSub>
          <C.content>
            <ListGlobal level="fst" body={
              <p>“공기통 1개+스쿠버다이빙 장비 가방 1개”를 위탁수하물 1개로 간주합니다.</p>
            }/>
            <ListGlobal level="fst" body={
              <p>스쿠버다이빙 장비는 공기통이 완전히 빈 상태여야하며, 탱크는 육안으로 내부검사가 가능하도록 개방된 상태여야 합니다.</p>
            }/>
            <ListGlobal level="fst" body={
              <p>
                수중랜턴은 기내수하물로 운송이 가능합니다. 이때 배터리가 반드시 분리된 상태이어야 하며, 분리된 배터리의 운송가능여부는 에어프레미아 규정에 따릅니다.
                <C.linkm onClick={li_ion}>
                  <span>리튬배터리 운송 규정<Linkblue /></span>
                </C.linkm>
              </p>
            }/>
          </C.content>
        </C.body>
        <C.body>
          <C.titleSub>자전거</C.titleSub>
          <C.content>
            <ListGlobal level="fst" body={
              <p>자전거는 핸들을 고정하고 페달을 제거한 후 충격 방지용 완충제가 내장된 전용 케이스 또는 종이박스 등으로 포장하여야 합니다.</p>
            }/>
            <ListGlobal level="fst" body={
              <p>엔진이 장착된 동력 자전거나 오토바이, 제트스크 등의 경우 수하물로 운송이 불가능합니다.</p>
            }/>
          </C.content>
        </C.body>
        <C.body>
          <C.titleSub>낚시 장비</C.titleSub>
          <C.content>
            <ListGlobal level="fst" body={
              <p>“낚시대 가방 1개+Tackle Box1개”를 위탁수하물 1개로 간주합니다.</p>
            }/>
          </C.content>
        </C.body>
        <C.body>
          <C.titleSub>하키/라크로스 장비</C.titleSub>
          <C.content>
            <ListGlobal level="fst" body={
              <p> “장비 가방 1개+스틱 1개”를 위탁수하물 1개로 간주합니다.</p>
            }/>
            <ListGlobal level="fst" body={
              <p>장비가방 없이 스틱만 위탁하는 경우에도 위탁수하물 1개로 간주합니다.</p>
            }/>
          </C.content>
        </C.body>
      </C.wrap>
    )
  } else if ( currIdxCont === 1 ) {
    return (
      <C.wrap className="bdN">
        <C.body>
          <C.content className="mt60">
            <ListGlobal level="fst" body={
              <p>첼로, 콘트라베이스 등 대형악기를 기내로 휴대하고자 하는 경우, 별도의 추가 좌석을 구매하시면 반입이 가능합니다.</p>
            }/>
            <ListGlobal level="fst" body={
              <p>첼로, 콘트라베이스 등 대형악기를 위탁수하물로 보내는 경우, 총 수하물 개수, 크기, 무게가 무료수하물 허용량을 초과하는 경우에는 초과수하물 요금이 부과됩니다.</p>
            }/>
            <ListGlobal level="fst" body={
              <p>악기류는 파손 가능성이 크기 때문에 기내 휴대 또는 별도 좌석 구매 후 운송을 권장드립니다.</p>
            }/>
            <ListGlobal level="fst" body={
              <p>별도의 좌석 구매와 관련하여 에어프레미아 예약센터로 문의해주시기 바랍니다.</p>
            }/>
          </C.content>
        </C.body>
      </C.wrap>
    )
  } else {
    return (
      <C.wrap className="bdN">
        <C.body>
          <C.content className="mt60">
            <ListGlobal level="fst" body={
              <p>손님께서 고가의 물품을 위탁하실 경우 소정의 추가 요금을 지불하시면 손해 배상 시 신고하신 금액까지 보장받으실 수 있습니다.</p>
            }/>
            <ListGlobal level="fst" body={
              <p>위탁수하물로 부치신 물품이 분실, 파손된 경우 운송약관이 정하는 범위 외의 일체의 책임을 부담하지 않습니다.</p>
            }/>
            <ListGlobal level="fst" body={
              <p>최대 신고액은 USD 2,500으로 한정되며, 물품 가액을 증명할 수 있는 서류를 제시해야 합니다.</p>
            }/>
            <ListGlobal level="fst" body={
              <p>고가품 신고 시 부과되는 요금은 USD 100달러당 USD 0.5로 계산됩니다.</p>
            }/>
          </C.content>
        </C.body>
      </C.wrap>
    )
  } 
}


const C = {
  ...SupportStyle.C1,

  m30: styled.div`
    margin-top: 30px;
    @media only screen and (max-width: 767px){
      margin-top: 20px;
    }
  `,
  m20: styled.div`
    margin-top: 20px;
    font-size: 18px;
    line-height: 2em;
    color: ${LIGHT_GRAY8};
    @media only screen and (max-width: 767px){
      font-size: 14px;
      font-weight: 300;
      line-height: 28px;
    }
  `,
  desc: styled.p`
    margin-top: 30px;
    font-size: 18px;
    font-weight: regular;
    line-height: 1.8;
  `,
  
  red: styled.span`
    color: ${RED1};
  `,
  linehgt: styled.div`
    font-size: 18px;
    color: ${LIGHT_GRAY8};
    margin-top: 20px;
    line-height: 1.8;
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
    }
  `,
  linkm: styled.p`
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
}

    
const T = {
  table: styled.div`
  
  `,
}

export default TabContent;
