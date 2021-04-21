import styled from 'styled-components';
import {
  ComTitle,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY8,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import Caution from 'public/images/support/ico_caution.svg';
import Linkblue from 'public/images/support/btn_txt_link_blue.svg';


function additionalServiceneedhelp(){
    return (
    <Container>
      <ComTitle
        title="도움이 필요한 손님"
      />
      <C.wrap>
        <C.body>
          <C.titleMain>장애인 및 의료 도움이 필요한 손님</C.titleMain>
          <C.sb>
            <C.title>시각장애인 손님</C.title>
          </C.sb>
          <C.tmi>
            <C.ul>
            <C.li><C.dgray>서비스 요청 시, 탑승수속에서 입국수속까지 불편이 없도록 안내 및 보조서비스를 제공드립니다.<br />(단, 항공기 출발 48시간 전 예약없이 출발 당일 현장에서 신청하는 경우 도움이 지체될 수 있습니다)​</C.dgray></C.li>
            <C.li><C.dgray>비동반 시각장애 손님의 경우 스스로 보행이 가능하고, 제3자의 도움 없이 식사 및 개인 용무가 가능해야 하며, 출/도착지 공항에서<br /> ​손님을 보조/지원할 수 있는 보호자가 있어야 항공기 이용이 가능합니다.​​​</C.dgray></C.li>
            </C.ul>
          </C.tmi>
        </C.body>
        <C.sbody>
          <C.title>시각장애인 안내견</C.title>
          <C.tmi>
            <C.txt><C.txtb>가.</C.txtb> 별도의 요금 징수 없이 무료로 운송이 가능하며 운송용기 보관이 필요 없으며 기내 동반할 수 있습니다. ​(단, 추가로 좌석 점유를 할 수 없습니다.)​</C.txt>
          </C.tmi>
          <C.txt><C.txtb>나.</C.txtb> 운송요건</C.txt>
          <C.lft>1) 공인된 기관의 인증서(ID)를 소지한 경우​</C.lft>
          <C.lft>2) 안내견의 등에 두르는 줄이나 손잡이(Harness)등을 착용한 경우</C.lft>
          <C.lft>3) 목적지 국가 또는 경유지 국가의 검역절차 기준에 부합한 경우​</C.lft>
          <C.lft>4) 장거리 여행일 경우 연결지에서 음식 공급이 가능하며 음식물의 준비 및 비용은 손님에 의해 처리​</C.lft>
          <C.lft>5) 비행 중에는 손님의 발 앞에 위치​</C.lft>
        </C.sbody>
        <C.sbody>
          <C.title>휠체어가 필요한 손님</C.title>
          <C.tmi>
            <C.txt>서비스 요청 시, 거동이 불편한 손님에게 휠체어를 지원하며 탑승수속, 출국수속 및 탑승을 보조해 드립니다. </C.txt>
            <C.txt>(단, 하기 모든 서비스는 항공기 출발 48시간 전 예약없이 출발 당일 현장에서 신청 하는 경우 도움이 지체될 수 있습니다)</C.txt>
          </C.tmi>
        </C.sbody>
        <C.sbody>
          <C.title>휠체어 대여 서비스</C.title>
          <C.tmi>
            <C.txt>1) 보행이 불편하신 손님에게 공항 출발 및 도착 시에 휠체어를 무료로 대여해 드립니다.<br />(단, 일부 공항에서는 대여가 제한될 수도 있으니 이점 사전 양해 바랍니다)</C.txt>
            <C.txt>2) 공항 내 이동시간 등을 감안하여 탑승수속 카운터에 보다 일찍 도착하여 주시기 바랍니다.​</C.txt>
          </C.tmi>
          <C.tmi>
            <C.sub>본인 휠체어 이용 손님</C.sub>
          </C.tmi>
          <C.txt>1) 손님이 이용하는 휠체어와 보행을 위한 보조기구를 무료로 운송해드립니다.</C.txt>
          <C.txt>2) 본인 휠체어를 이용하는 손님은 탑승구까지 휠체어를 사용할 수 있으며, 출발지 탑승구에서 위탁 및 도착지 탑승구부터 본인의 휠체어를 사용할 수 있습니다.<br />(단, 공항사정에 따라 탑승구 위탁 및 인도가 제한될 수 있습니다)</C.txt>
          <C.txt>3) 전동휠체어의 경우 배터리 분리 등, 항공사의 조치가 필요하므로 항공사에 문의 부탁드립니다. </C.txt>
          <C.tmi>
            <C.sub>기내 휠체어 이용 손님</C.sub>
          </C.tmi>
          <C.ul>
            <C.li>거동이 불편한 손님이 기내에서 이동할 수 있도록 모든 항공기에는 기내 휠체어가 탑재되어 있습니다.</C.li>
          </C.ul>
        </C.sbody>
        <C.sbody>
          <C.title>보조흡입장치(POC) 소지 손님</C.title>
          <C.tmi>
            <C.txt>본인 소유의 보조호흡장치를 사용하실 손님은 항공기 출발 48시간 전까지 예약센터로 연락주시기 바랍니다.<br />​(별도의 신청서와 의사소견서 제출이 필요합니다) ​</C.txt>
          </C.tmi>
          <C.linkm>
            <a href="/document/support_need-help_01.pdf" download>
              의사소견서(POC) 다운<Linkblue />
            </a>
          </C.linkm>
          <C.tmi>
            <C.note><C.image><Caution /></C.image>유의 사항</C.note>
            <C.ntg>1) 건식 및 리튬배터리(160Wh 이하) 타입의 미국 연방항공청(FAA)또는 해당 국가의 요구조건을 충족하는 기기만 반입이 가능합니다.</C.ntg>
            <C.ntg>2) 기내 전원은 사용이 불가합니다.</C.ntg>
            <C.ntg>3) 비행시간에 부합한 배터리 용량 (1.5배 이상)을 준비하시기 바랍니다. ​</C.ntg>
            <C.ntg>4) 에어프레미아는 Stretcher 및 Oxygen 서비스를 제공하지 않습니다.​</C.ntg>
          </C.tmi>
        </C.sbody>
        <C.sbody>
          <C.title>기내 사용 가능한 휴대용 산소 발생기 모델명</C.title>
          <C.tmi>
            <C.ul>
              <C.li>AirSep FreeStyle​</C.li>
              <C.li>AirSep LifeStyle</C.li>
              <C.li>AirSep Focus​</C.li>
              <C.li>AirSep Freestyle 5​</C.li>
              <C.li>(Caire) SeQual eQuinox / Oxywell (model 4000)​</C.li>
              <C.li>Delphi RS-00400 / Oxus RS-00400​</C.li>
              <C.li>DeVilbiss Healthcare iGo​</C.li>
              <C.li>Inogen One​</C.li>
              <C.li>Inogen One G2​</C.li>
              <C.li>lnogen One G3</C.li>
              <C.li>lnova Labs LifeChoice Activox​</C.li>
              <C.li>International Biophysics LifeChoice / lnova Labs LifeChoice</C.li>
              <C.li>Invacare XPO2 / XPO100</C.li>
              <C.li>Invacare Solo 2</C.li>
              <C.li>Oxylife Independence Oxygen Concentrator</C.li>
              <C.li>Precision Medical EasyPulse</C.li>
              <C.li>Respironics EverGo</C.li>
              <C.li>Respironics SimplyGo</C.li>
              <C.li>Sequal Eclipse</C.li>
              <C.li>SeQual SAROS</C.li>
              <C.li>X) VBox (3B Medical) Trooper (Aer X) Oxygen Concentrator</C.li>
            </C.ul>
          </C.tmi>
        </C.sbody>
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
      content:"";
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
  linkm: styled.p`
    font-weight: 600;
    color: ${BLUE1};
    margin-top: 20px;
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
  left: styled.p`
    margin-left: 10px;
  `,
}
    

export default additionalServiceneedhelp;