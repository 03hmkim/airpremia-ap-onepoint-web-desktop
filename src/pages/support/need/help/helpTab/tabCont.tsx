import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import { useModal } from 'src/hooks';
import {
  BLUE1,
  ORANGE2,
  LIGHT_GRAY5,
  LIGHT_GRAY8
} from '@airpremia/cdk/styles/colors';
import { 
  ListGlobal,
  NewModal,
  PopupTitle,
  TaskButton,
} from 'src/components';
import Linkblue from 'public/images/support/btn_txt_link_blue.svg';
import { EScrollType } from 'src/components/templates/centerPopup';

function TabContent({currIdxCont}: IProps) {
  const {
    onShowNewModal,
    UIStore: { newModal },
  } = useModal();

  const helpModal = () =>
  onShowNewModal('helpModal');

  const onClickModal = () => {
    switch (newModal.target) {
      case 'helpModal':
        return (
          <NewModal
            className="min"
            type={EScrollType.TYPE1}
            title={
              <S.modalTitle>
                <PopupTitle>기내 사용 가능한 <br /> 휴대용 산소 발생기 모델명</PopupTitle>
              </S.modalTitle>
            }
            body={
              <>
                <S.textArea>
                  <ListGlobal level="fst" body={
                    <p>AirSep FreeStyle​</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p>AirSep LifeStyle</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p>AirSep Focus​</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p>AirSep Freestyle 5​</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p>(Caire) SeQual eQuinox / Oxywell (model 4000)​​</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p>Delphi RS-00400 / Oxus RS-00400​​</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p>DeVilbiss Healthcare iGo​</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p>Inogen One​</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p>Inogen One G2​​</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p>lnogen One G3</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p>lnova Labs LifeChoice Activox​</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p>International Biophysics LifeChoice / lnova Labs LifeChoice</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p>​Invacare XPO2 / XPO100​</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p>Invacare Solo 2</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p>Oxylife Independence Oxygen Concentrator​​</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p>Precision Medical EasyPulse​</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p>Respironics EverGo</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p>Respironics SimplyGo​</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p>Sequal Eclipse​</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p>SeQual SAROS​​</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p>​X) VBox (3B Medical) Trooper (Aer X) Oxygen Concentrator</p>
                  }/>
                </S.textArea>
              </>
            }
            button={
              <S.btnArea className="twin">
                <TaskButton>확인</TaskButton>
              </S.btnArea>
            }
          />
        );
    default:
        return null;
    };
  };

  if ( currIdxCont === 0 ) {
    return (
      <C.wrap>
        <C.body>
          <ListGlobal level="fst" body={
            <p>서비스 요청 시, 탑승수속에서 입국수속까지 불편이 없도록 안내 및 보조서비스를 제공드립니다.<br />(단, 항공기 출발 48시간 전 예약없이 출발 당일 현장에서 신청하는 경우 도움이 지체될 수 있습니다)</p>
          }/>
          <C.tmi>
            <ListGlobal level="fst" body={
              <p>비동반 시각장애 손님의 경우 스스로 보행이 가능하고, 제3자의 도움 없이 식사 및 개인 용무가 가능해야 하며, 출/도착지 공항에서 손님을 보조/지원할 수 있는 보호자가 있어야 항공기 이용이 가능합니다.</p>
            }/>
          </C.tmi>
        </C.body>
        <C.sb>
          <C.title>시각장애인 안내견</C.title>
          <div>
            <ListGlobal level="fst" body={
              <p>별도의 요금 징수 없이 무료로 운송이 가능하며 운송용기 보관이 필요 없으며 기내 동반할 수 있습니다.<br />(단, 추가로 좌석 점유를 할 수 없습니다.)​</p>
            }/>
            <ListGlobal level="fst" body={
              <p>운송요건​</p>
            }/>
            <ListGlobal level="scd" body={
              <p>공인된 기관의 인증서(ID)를 소지한 경우</p>
            }/>
            <ListGlobal level="scd" body={
              <p>안내견의 등에 두르는 줄이나 손잡이(Harness)등을 착용한 경우</p>
            }/>
            <ListGlobal level="scd" body={
              <p>목적지 국가 또는 경우지 국가의 검역절차 기준에 부합한 경우</p>
            }/>
            <ListGlobal level="scd" body={
              <p>장거리 여행일 경우 연결지에서 음식 공급이 가능하며 음식물의 준비 및 비용은 손님에 의해 처리</p>
            }/>
            <ListGlobal level="scd" body={
              <p>비행 중에는 손님의 발 앞에 위치</p>
            }/>
          </div>
        </C.sb>
      </C.wrap>
    )
  } else if ( currIdxCont === 1 ) {
    return (
      <C.wrap>
        <C.body>
          <ListGlobal level="fst" body={
            <p>서비스 요청 시, 거동이 불편한 손님에게 휠체어를 지원하며 탑승수속, 출국수속 및 탑승을 보조해 드립니다.<br />(단, 하기 모든 서비스는 항공기 출발 48시간 전 예약없이 출발 당일 현장에서 신청 하는 경우 도움이 지체될 수 있습니다)</p>
          }/>
        </C.body>
        <C.sb>
          <C.title>휠체어 대여 서비스</C.title>
          <ListGlobal level="fst" body={
            <p>보행이 불편하신 손님에게 공항 출발 및 도착 시에 휠체어를 무료로 대여해 드립니다.<br />(단, 일부 공항에서는 대여가 제한될 수도 있으니 이점 사전 양해 바랍니다)​</p>
          }/>
          <ListGlobal level="fst" body={
            <p>공항 내 이동시간 등을 감안하여 탑승수속 카운터에 보다 일찍 도착하여 주시기 바랍니다.​</p>
          }/>
        </C.sb>
        <C.sbody>
          <C.title>본인 휠체어 이용 손님</C.title>
          <ListGlobal level="fst" body={
            <p>손님이 이용하는 휠체어와 보행을 위한 보조기구를 무료로 운송해드립니다.​</p>
          }/>
          <ListGlobal level="fst" body={
            <p>본인 휠체어를 이용하는 손님은 탑승구까지 휠체어를 사용할 수 있으며, 출발지 탑승구에서 위탁 및 도착지 탑승구부터 본인의 휠체어를 사용할 수 있습니다.<br />(단, 공항사정에 따라 탑승구 위탁 및 인도가 제한될 수 있습니다)​</p>
          }/>
          <ListGlobal level="fst" body={
            <p>전동휠체어의 경우 배터리 분리 등, 항공사의 조치가 필요하므로 항공사에 문의 부탁드립니다.​</p>
          }/>
        </C.sbody>
        <C.sbody>
          <C.title>기내 휠체어 이용 손님</C.title>
          <ListGlobal level="fst" body={
            <p>거동이 불편한 손님이 기내에서 이동할 수 있도록 모든 항공기에는 기내 휠체어가 탑재되어 있습니다.</p>
          }/>
        </C.sbody>
      </C.wrap>
    )
  } else {
    return (
      <C.wrap>
        {onClickModal()}
        <C.body>
          <ListGlobal level="fst" body={
            <p>
              본인 소유의 보조호흡장치를 사용하실 손님은 항공기 출발 48시간 전까지 예약센터로 연락주시기 바랍니다.<br />(별도의 신청서와 의사소견서 제출이 필요합니다)
              <C.linkm>
                <a href="/document/support_need-help_01.pdf" download>
                  의사소견서(POC) 다운<Linkblue />
                </a>
              </C.linkm>
            </p>
          }/>
        </C.body>
        <C.sbody>
          <C.title>유의사항</C.title>
          <ListGlobal level="fst" body={
            <p>건식 및 리튬배터리(160Wh 이하) 타입의 미국 연방항공청(FAA)또는 해당 국가의 요구조건을 충족하는 기기만 반입이 가능합니다.​</p>
          }/>
          <ListGlobal level="fst" body={
            <p>기내 전원은 사용이 불가합니다.​</p>
          }/>
          <ListGlobal level="fst" body={
            <p>비행시간에 부합한 배터리 용량 (1.5배 이상)을 준비하시기 바랍니다.​</p>
          }/>
          <ListGlobal level="fst" body={
            <p>
              에어프레미아는 Stretcher 및 Oxygen 서비스를 제공하지 않습니다.​
              <C.linkm onClick={helpModal}>
                  기내 사용 가능한 휴대용 산소 발생기 모델명<Linkblue />
              </C.linkm>
            </p>
          }/>
        </C.sbody>
      </C.wrap>
    )
  }
}

const C = {
  wrap: styled.div`
    margin-top: 60px;
  `,
  tmi: styled.p`
    margin-top: 60px;
    @media only screen and (max-width: 1059px) {
      margin-top: 30px;
    }
  `,
  body: styled.div`
    margin-top: 140px;
    &:first-of-type{
      margin-top: 0;
    }
  `,
  sbody: styled.div`
  margin-top: 100px;
  @media only screen and (max-width: 1059px) {
    margin-top: 60px;
  }
`,
  mt20:styled.div`
    margin-top:20px;
  `,
titleMain: styled.h2`
font-size:24px;
font-weight: bold;
margin-bottom:30px;
@media only screen and (max-width: 1059px) {
  margin-bottom:20px;
}
@media only screen and (max-width: 767px) {
  font-size: 22px;
  line-height: 28px;
  letter-spacing: -0.04em;
}
`,
title: styled.h3`
font-size: 21px;
font-weight: bold;
@media only screen and (max-width: 767px) {
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.032em;
}
`,
itemText: styled.p`
font-size: 18px;
line-height: 30px;
span{
    color: ${LIGHT_GRAY8}
}
@media only screen and (max-width: 767px) {
  font-size: 14px;
  line-height: 1.8em;
  letter-spacing: -0.028em;
}
`,
  sb: styled.div`
  margin-top: 60px;
`,
  linkm: styled.p`
    font-weight: 600;
    color: ${BLUE1};
    pointer
    &.dpin{
      display: inline-block;
    }
  `,
};
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
export default TabContent;
