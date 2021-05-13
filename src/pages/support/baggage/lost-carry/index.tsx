import styled from 'styled-components';
import { useModal } from 'src/hooks';
import {
  ComTitle,
  NewModal,
  PopupTitle,
  SupportLink,
  TaskButton,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import Linkblue from 'public/images/support/btn_txt_link_blue.svg';
import { EScrollType } from 'src/components/templates/centerPopup';
import { ListGlobal } from 'src/components';
import { 
  baggageFree,
  baggageOver,
  baggageProhibition,
  baggageSpecial,
} from '../../linkset';


function LostCarry(){
  const {
    onShowNewModal,
    UIStore: { newModal },
  } = useModal();

  const { onHideNewModal } = useModal();

  const report = () =>
  onShowNewModal('report');

  const onClickModal = () => {
    switch (newModal.target) {
      case 'report':
        return (
          <NewModal
            className="min hAuto"
            type={EScrollType.TYPE1}
            title={
              <PopupTitle>고가품 신고 제도</PopupTitle>
            }
            body={
              <>
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
    <Container>
      <S.container>
        {onClickModal()}
        <ComTitle
          title="수하물"
        />
        <C.wrap>
          <C.body>
            <C.titleMain>수하물 배상</C.titleMain>
            <C.content className="mt60">
              <C.titleSub>수하물 배상 책임 및 안내</C.titleSub>
            </C.content>
            <C.content>
              <ListGlobal level="fst" body={
                <p>에어프레미아는 수하물을 운송, 보관 및 관리하는 과정에서 회사의 고의 또는 과실로 수하물에 손해가 발생한 경우에 한하여 배상에 대한 책임을 부담합니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>위탁수하물에 대한 에어프레미아의 책임한도는 몬트리올 협약이 적용되는 국제 운송의 경우에는 1인당  1,288SDR의 금액을 한도로 하며, 바르샤바 협약 또는 개정 바르샤바 협약이 적용되는 국제 운송의 경우에는 킬로그램당 미국 달러화 20.00불(250 프랑스 골드프랑)을 초과하지 않는 범위 내에서 배상에 대한 책임을 부담합니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>수하물에 손상이 있는 경우에는 수하물을 인도받으신 날로부터 7일 이내, 수하물이 지연 또는 분실된 경우에는 항공사에 수하물을 위탁하신 날로부터 21일 내에 에어프레미아로 서면으로 신고하셔야 합니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>
                  사전에 수하물배상한도액보다 높은 가격을 신고하고 종가 요금을 지불한 경우에 에어프레미아의 배상책임 한도는 신고 가격을 근거로 합니다.
                  <C.linkm onClick={report}>
                    고가품 신고 제도<Linkblue />
                  </C.linkm>
                </p>
              }/>
              <C.textM>
                <p>SDR이란? Special Drawing Rights(특별인출권)의 약자로 국제통화기금(IMF)에서 정한 전세계 공통의 통화 단위를 나타냅니다. SDR로 표시된 금액을 각국 통화로 환산하는 경우, 소송의 경우에는 법원의 최종 판결 일에 유효한 해당 통화와의 환율을 적용하고 소송 이외의 경우에는 지불해야 할 손해배상 금액이 합의된 날에 유효한 해당 통화와의 환율을 적용합니다.</p>
              </C.textM>
            </C.content>
          </C.body>
          <C.body>
            <C.titleSub>배상불가 사항</C.titleSub>
            <C.content>
              <ListGlobal level="fst" body={
                <p>다음의 경우에는 이용 구간에 따라 배상에서 제외 되거나, 운송약관 또는 바르샤바조약/ 몬트리올협약에 의한 제한된 배상이 실시됩니다.</p>
              }/>
              <ListGlobal level="scd" body={
                <p>회사가 손해 방지를 위하여 필요한 제반 조치를 취하였거나 또는 불가항력적인 사유로 인하여 조치를 취할 수 없었음이 입증될 경우</p>
              }/>
              <ListGlobal level="scd" body={
                <p>손님에 의한 사고 또는 과실로 손해가 발생한 경우</p>
              }/>
              <ListGlobal level="scd" body={
                <p>너무 무겁거나 가방 용량에 비해 무리하게 내용품을 넣은 경우의 수하물 파손 및 내용품의 파손 또는 분실</p>
              }/>
              <ListGlobal level="scd" body={
                <p>보안검색 과정에서 발생한 잠금장치 파손이나 X-ray 통과로 인한 필름 손상</p>
              }/>
              <ListGlobal level="scd" body={
                <p>일상적으로 수하물을 취급하는 과정에서 발생한 경미한 긁힘, 마모, 눌림, 흠집, 얼룩 등</p>
              }/>
              <ListGlobal level="scd" body={
                <p>아래와 같이 위탁수하물로 운송이 금지되는 물품으로 반드시 기내수하물로 운송되어야 할 물품</p>
              }/>
              <ListGlobal level="trd" body={
                <p>파손되기 쉬운 물품이거나 부패하기 쉬운 물품, 악기류 등</p>
              }/>
              <ListGlobal level="trd" body={
                <p>건강과 관련된 의약품</p>
              }/>
              <ListGlobal level="trd" body={
                <p>노트북, 휴대폰, 카메라, 캠코더 등 고가의 개인 전자제품 또는 데이터</p>
              }/>
              <ListGlobal level="trd" body={
                <p>현금, 보석이나 귀금속, 유가증권, 계약서, 논문 등의 서류, 여권, 신분증, 열쇠, 견본품, 골동품 등 가치를 따지기 어려운 물건</p>
              }/>
            </C.content>
          </C.body>
          <C.body>
            <C.titleSub>에어프레미아 수하물 문의처</C.titleSub>
            <C.content>
              (LL전용 지점별 이메일 &카톡아이디 공지예정)
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
                title={baggageOver.title}
                link={baggageOver.link}
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
  container : styled.div`

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


  linkm: styled.p`
    color: ${BLUE1};
    font-weight: 600;
    cursor: pointer;
  `,
  textM: styled.div`
    color: ${LIGHT_GRAY8};
    padding-left: 28px;
    position: relative;
    font-size: 18px;
    line-height: 2em;
    
      &:before {
        position: absolute;
        content: "*";
        left: 14px;
        top: 0;
      }
  `,
}

export default LostCarry;