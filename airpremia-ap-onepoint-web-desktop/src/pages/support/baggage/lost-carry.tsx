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
  ORANGE2,
} from '@airpremia/cdk/styles/colors';
import Linkblack from 'public/images/support/btn_txt_link_black.svg';
import Linkblue from 'public/images/support/btn_txt_link_blue.svg';
import Link from 'next/link';
import { EScrollType } from 'src/components/templates/centerPopup';


function additionalServicelostcarry(){
  const {
    onShowNewModal,
    UIStore: { newModal },
  } = useModal();

  const report = () =>
  onShowNewModal('report');

  const onClickModal = () => {
    switch (newModal.target) {
      case 'report':
        return (
          <NewModal
            className="min hAuto"
            type={EScrollType.TYPE4}
            title={
              <S.modalTitle>
                <PopupTitle>고가품 신고 제도</PopupTitle>
              </S.modalTitle>
            }
            body={
              <>
                <S.textArea className="auto">                  
                  <C.ul>
                    <C.li className="ndot">1. 손님께서 고가의 물품을 위탁하실 경우 소정의 추가 요금을 지불하시면 손해 배상 시 신고하신 금액까지 보장받으실 수 있습니다.</C.li>
                    <C.li className="ndot">2. 위탁수하물로 부치신 물품이 분실, 파손된 경우 운송약관이 정하는 범위 외의 일체의 책임을 부담하지 않습니다. </C.li>
                    <C.li className="ndot">3. 최대 신고액은 USD 2,500으로 한정되며, 물품 가액을 증명할 수 있는 서류를 제시해야 합니다.</C.li>
                    <C.li className="ndot">4. 고가품 신고 시 부과되는 요금은 USD 100달러당 USD 0.5로 계산됩니다.</C.li>
                  </C.ul>
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
          <C.titleMain>수하물 분실 및 보상</C.titleMain>
          <C.sb>
            <C.title>수하물 보상 책임 및 안내</C.title>
          </C.sb>
          <C.tmi>
            <C.ntg><C.dgray>에어프레미아는 수하물을 운송, 보관 및 관리하는 과정에서 회사의 고의 또는 과실로 수하물에 손해가 발생한 경우에 한하여 보상에 대한 책임을 부담합니다.​​</C.dgray></C.ntg>
            <C.ntg><C.dgray>위탁수하물에 대한 에어프레미아의 책임한도는 몬트리올 협약이 적용되는 국제 운송의 경우에는 1인당  1,288SDR의 금액을 한도로 하며, 바르샤바 협약 또는 개정 바르샤바 협약이 적용되는 국제<br /> 운송의 경우에는 킬로그램당 미국 달러화 20.00불(250 프랑스 골드프랑)을 초과하지 않는 범위 내에서 배상에 대한 책임을 부담합니다.​​</C.dgray></C.ntg>
            <C.ntg><C.dgray>수하물에 손상이 있는 경우에는 수하물을 인도받으신 날로부터 7일 이내, 수하물이 지연 또는 분실된 경우에는 항공사에 수하물을 위탁하신 날로부터 21일 내에 에어프레미아로 서면으로<br /> 신고하셔야 합니다.</C.dgray>​​</C.ntg>
            <C.ntg><C.dgray>사전에 수하물배상한도액보다 높은 가격을 신고하고 종가 요금을 지불한 경우에 에어프레미아의 배상책임 한도는 신고 가격을 근거로 합니다.</C.dgray></C.ntg>
            <C.linkm onClick={report}>
              고가품 신고 제도<Linkblue />
            </C.linkm>    
            <C.tmi>
              <C.rf>*SDR이란? Special Drawing Rights(특별인출권)의 약자로 국제통화기금(IMF)에서 정한 전세계 공통의 통화 단위를 나타냅니다.  SDR로 표시된 금액을 각국 통화로 환산하는 경우, 소송의 경우에는<br /> 법원의 최종 판결 일에 유효한 해당 통화와의 환율을 적용하고 소송 이외의 경우에는 지불해야 할 손해배상 금액이 합의된 날에 유효한 해당 통화와의 환율을 적용합니다.</C.rf>
            </C.tmi>
          </C.tmi>
        </C.body>
        <C.body>
          <C.title>배상불가 사항</C.title>
          <C.tmi>
            <C.txt>다음의 경우에는 이용 구간에 따라 보상에서 제외 되거나, 운송약관 또는 바르샤바조약/ 몬트리올협약에 의한 제한된 보상이 실시됩니다.​</C.txt>
            <C.txt><C.txtb>가.</C.txtb> 회사가 손해 방지를 위하여 필요한 제반 조치를 취하였거나 또는 불가항력적인 사유로 인하여 조치를 취할 수 없었음이 입증될 경우​</C.txt>
            <C.txt><C.txtb>나.</C.txtb> 손님에 의한 사고 또는 과실로 손해가 발생한 경우​​​</C.txt>
            <C.txt><C.txtb>다.</C.txtb> 너무 무겁거나 가방 용량에 비해 무리하게 내용품을 넣은 경우의 수하물 파손 및 내용품의 파손 또는 분실​</C.txt>
            <C.txt><C.txtb>라.</C.txtb> 보안검색 과정에서 발생한 잠금장치 파손이나 X-ray 통과로 인한 필름 손상​​</C.txt>
            <C.txt><C.txtb>마.</C.txtb> 일상적으로 수하물을 취급하는 과정에서 발생한 경미한 긁힘, 마모, 눌림, 흠집, 얼룩 등​​</C.txt>
            <C.txt><C.txtb>바.</C.txtb> 아래와 같이 위탁수하물로 운송이 금지되는 물품으로 반드시 기내수하물로 운송되어야 할 물품​</C.txt>
            <C.lft>1) 파손되기 쉬운 물품이거나 부패하기 쉬운 물품, 악기류 등</C.lft>
            <C.lft>2) 건강과 관련된 의약품​</C.lft>
            <C.lft>3) 노트북, 휴대폰, 카메라, 캠코더 등 고가의 개인 전자제품 또는 데이터​</C.lft>
            <C.lft>4) 현금, 보석이나 귀금속, 유가증권, 계약서, 논문 등의 서류, 여권, 신분증, 열쇠, 견본품, 골동품 등 가치를 따지기 어려운 물건</C.lft>
          </C.tmi>
        </C.body>
        <C.body>
          <C.title>에어프레미아 수하물 문의처</C.title>
          <C.tmi>
            <C.txt>
              이메일 &nbsp;&nbsp;&nbsp; contact@airpremia.com
            </C.txt>
            <C.txt>
              전화번호 &nbsp;&nbsp;&nbsp; +82 2-6953-6115
            </C.txt>
          </C.tmi>
        </C.body>
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
            <C.helpl>
              <Link href="./special-carry">
                <a>
                  스포츠/악기/고가품 운송<Linkblack />
                </a>
              </Link>
            </C.helpl>
            <C.helpl className="dpN">
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
  ul: styled.ul`
      
  `,
  li: styled.li`
    margin-bottom: 15px;
    padding-left: 10px;
    line-height: 1.8;
    position: relative;
    &::before{
      content:"";
      width: 4px;
      height: 4px;
      top: 11px;
      left: 0px;
      text-indent: -9999px;
      display: block;
      position: absolute;
      background-color: ${DARK_GRAY1};
      border-radius: 50%
    }
    &.ndot{
      padding-left: 0;
      &::before{
        display: none;
      }
    }
    &:first-child{
      margin-top: 20px;
    }
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
  tmi: styled.p`
    margin-top: 30px;
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
  lft: styled.p`
    font-size: 14px;
    margin-top: 15px;
    padding-left: 20px;
    line-height: 1.8;
  `,
  span: styled.span`
    padding: 4px 12px;
    color:${WHITE1};
    background-color: ${DARK_BLUE1};
    border-radius: 60px;
  `,
  dgray: styled.span`
    font-size: 15px;
    color: ${DARK_GRAY1};
  `,
  linkTitle: styled.a`
    font-size: 14px;
    font-weight: bold;
    color: ${BLUE1};
    margin-right: 10px;
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
  linkm: styled.p`
    margin-top: 20px;
    margin-left: 10px;
    color: ${BLUE1};
    font-weight: 600;
    cursor: pointer;
  `,
  txtb: styled.span`
    font-size: 15px;
    font-weight: bold;
    line-height: 1.8;
  `,
  txt: styled.p`
    font-size: 15px;
    line-height: 1.8;
    margin-top: 15px;
  `,
  linkpage: styled.a`
    font-size: 15px;
    font-weight: regular;
    color: ${BLUE1};
    margin-left: 20px;
  `,
  under: styled.u`
    font-weight: 600;
    color: ${BLUE1};
  `,
}
    
const S = {
  container : styled.div`
    width: 800px;
    height: 400px;
    margin: 30px auto;
    color: ${ORANGE2};
    text-align: center;
  `,

  button : styled.div`
    text-align: center;
    margin-top: 30px;
    button{
      width: 300px;
      height: 50px;
    }
  `,

  modalTitle : styled.div``,

  textArea: styled.div`
    height: 100%;
    &.auto{
      padding: 0 50px 50px;
      overflow-y: auto;
      box-sizing: border-box;
    }
  `,

  btnArea: styled.div`
    padding: 25px 50px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 1px solid ${LIGHT_GRAY5};
    &.auto{
      position: static;
    }
  `,
};

export default additionalServicelostcarry;