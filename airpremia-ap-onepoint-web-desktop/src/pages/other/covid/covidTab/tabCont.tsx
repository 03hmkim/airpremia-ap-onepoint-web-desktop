import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import { CovidGuide } from 'src/components';
// 1
import Covering from 'public/images/Icon_covering.png';
import SeatDistance from 'public/images/Icon_seatDistance.png';
import Kiosk from 'public/images/Icon_kiosk.png';
// 2
import Temperature from 'public/images/Icon_temperature.png';
import Bacode from 'public/images/Icon_bacode.png';
import BoardingOrder from 'public/images/Icon_BoardingOrder.png';

// 3
import HEPAfilter from 'public/images/Icon_HEPAfilter.png';
import Food from 'public/images/Icon_food.png';
import Broadcasting from 'public/images/Icon_broadcasting.png';

// share
import DistanceKeeping from 'public/images/Icon_distanceKeeping.png';
import HandSanitizer from 'public/images/Icon_handSanitizer.png';
import Mask from 'public/images/Icon_mask.png';


function TabContent({currIdxCont}: IProps) {
  if ( currIdxCont === 0 ) {
    return (
      <C.wrap>
        <C.sb>
          <C.titleMain>에어프레미아는 체크인 시 아래와 같은 사항을 준수합니다.</C.titleMain>
        </C.sb>
        <C.sb>
          <C.ft>
            <CovidGuide covidImage={Covering} 
              title="탑승수속 카운터 투명 가림막 설치" 
              text="비말 방지를 위해 탑승수속 카운터에 투명 가림막을 설치하여 더욱 안전하게 수속을 하실 수 있습니다."/>
            <CovidGuide covidImage={HandSanitizer} 
              title="손 소독제 비치" 
              text="탑승수속 카운터마다 손 소독제를 비치하였습니다."/>
          </C.ft>
          <C.sb>
            <C.ft>
              <CovidGuide covidImage={DistanceKeeping} 
                title="수속 대기 시 승객 간 거리두기" 
                text="수속 대기 시 바닥의 안내문에 맞게 줄을 서 주시기 바랍니다."/>
              <CovidGuide covidImage={SeatDistance} 
                title="좌석 배정 시 승객 간 거리두기" 
                text="기내에서 승객 간 충분한 거리를 두어 배정하고 있습니다."/>
            </C.ft>
          </C.sb>
          <C.sb>
            <C.ft>
              <CovidGuide covidImage={Kiosk} 
                title="온라인체크인/KIOSK 사용" 
                text="온라인체크인 또는 KIOSK 사용으로 비대면 수속을 하실 수 있습니다. "/>
              <CovidGuide covidImage={Mask} 
                title="마스크 착용 의무화" 
                text="승객 여러분의 안전을 위하여 공항 및 기내에서 마스크 착용을 의무화 하고 있습니다."/>
            </C.ft>
          </C.sb>
        </C.sb>
      </C.wrap> 
    )
  } else if ( currIdxCont === 1 ) {
    return (
      <C.wrap>
        <C.sb>
          <C.titleMain>에어프레미아는 탑승 시 아래와 같은 사항을 준수합니다.</C.titleMain>
        </C.sb>
        <C.sb>
          <C.ft>
            <CovidGuide covidImage={HandSanitizer} 
              title="손 소독제 비치" 
              text="탑승수속 카운터마다 손 소독제를 비치하였습니다."/>
            <CovidGuide covidImage={Temperature} 
              title="탑승 전 체온 측정" 
              text="탑승객 전원을 대상으로 체온 측정을 하고있습니다."/>
          </C.ft>
          <C.sb>
            <C.ft>
              <CovidGuide covidImage={DistanceKeeping} 
                title="탑승 대기 시 승객 간 거리두기" 
                text="탑승 대기 시 바닥의 안내문에 맞게 줄을 서 주시기 바랍니다."/>
              <CovidGuide covidImage={Bacode} 
                title="탑승구 셀프 탑승권 인식" 
                text="탑승 시 직접 탑승권을 인식하는 비대면 탑승을 실시하고 있습니다."/>
            </C.ft>
          </C.sb>
          <C.sb>
            <C.ft>
              <CovidGuide covidImage={BoardingOrder} 
                title="탑승순서" 
                text="도움이 필요한 손님 – Premia 42 – 뒷 열 좌석 – 앞 열 좌석 순으로 탑승하여 탑승 시 승객 간의 접촉을 최소화하고 있습니다."/>
              <CovidGuide covidImage={Mask} 
                title="마스크 착용 의무화" 
                text="승객 여러분의 안전을 위하여 공항 및 기내에서 마스크 착용을 의무화 하고 있습니다."/>
            </C.ft>
          </C.sb>
        </C.sb>
      </C.wrap> 
    )
  } else {
    return (
      <C.wrap>
        <C.sb>
          <C.titleMain>에어프레미아는 기내에서 아래와 같은 사항을 준수합니다.</C.titleMain>
        </C.sb>
        <C.sb>
          <C.ft>
            <CovidGuide covidImage={Mask} 
                title="객실승무원 보호장비 착용" 
                text="객실승무원은 비행 근무 시 마스크, 장갑 이외 방호복, 고글 그리고 마스크밴드를 착용하여 비행 중 방역을 철저히 하고 있습니다."/>
            <CovidGuide covidImage={HEPAfilter} 
              title="고성능 HEPA 필터 사용" 
              text="기내의 공기는 2~3분마다 완전히 교체됩니다. 이직경 0.003mm가 넘는 이물질을 99.9% 이상 여과하는 HEPA  필터의 사용으로, 항공기 내 공기는 외부 공기보다 더욱 깨끗하게 유지됩니다."/>
          </C.ft>
          <C.sb>
            <C.ft>
              <CovidGuide covidImage={Food} 
                title="기내식 위생 강화" 
                text="기내에서도 안심하고 식사하실 수 있도록 기내식 위생 강화에 최선을 다하고 있습니다. 기내식 생산시설 출입구 발열체크 및 전 직원 보호장비 착용을 의무화 하고 있습니다. 위생 강화를 위해 핸드타월과 컵을 일회용으로 제공하고 있습니다."/>
              <CovidGuide covidImage={Broadcasting} 
                title="기내 안내 방송 실시" 
                text="기내 방송을 통해 코로나 증세 발생 시 승객 여러분께서 취해야 할 행동에 대해 안내하고 있습니다. 안전한 여행을 위해 비행 중에는 승무원의 안내에 귀를 기울여 주시기 바랍니다."/>
            </C.ft>
          </C.sb>
          <C.sb>
            <C.ft>
              <CovidGuide covidImage={HandSanitizer} 
                title="손 소독제 비치" 
                text="기내에 비치된 손소독제를 사용하여, 비행 중에도 언제든 손을 소독하실 수 있습니다. 모든 탑승객 여러분들의 쾌적한 여행을 위해, 불편하시더라도 기내에서 마스크 착용을 유지해 주시기 바랍니다."/>
            </C.ft>
          </C.sb>
        </C.sb>
      </C.wrap>
    )
  }
}

const C = {
  wrap: styled.div`
    margin-top: 60px;
  `,
  sb: styled.div`
    margin-top: 60px;
    @media only screen and (max-width: 767px) {
      margin: 0;
    }
  `,
  titleMain: styled.h3`
    font-size: 24px;
    font-weight: bold;
    @media only screen and (max-width: 767px) {
      margin-bottom: 40px;
      font-size: 22px;
      letter-spacing: -0.04em;
      line-height: 28px;
    }
    `,
  ft:styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 1059px) {
      width: 100%;
      display: block;
      flex-direction: column;
    }
  `
}
export default TabContent;