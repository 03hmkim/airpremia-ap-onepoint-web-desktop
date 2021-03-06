import styled from 'styled-components';
import {
  ComTitle,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';

function AirtraficUser(){
  return (
    <Container>
      <ComTitle
        title="항공교통이용자 서비스 계획"
      />
      <S.container>
        <C.wrap>
          <C.body>
            <C.p>
              에어프레미아는 “항공교통이용자 보호기준”에 의거하여 아래와 같이 서비스 계획을 게시합니다.
            </C.p>
            <C.title>1. 초과판매로 인한 탑승거부 발생 시</C.title>
            <C.m20>
              <C.p>1.1 에어프레미아는 좌석 초과 판매로 인하여 탑승하지 못한 고객에 대하여 공정하고 일관성 있는 기준으로 응대하겠습니다.</C.p>
              <C.p>1.2 좌석 초과 판매로 인하여 항공권을 구입한 고객이 항공기에 탑승하지 못할 상황이 예상되는 경우, 자발적 탑승유예자를 찾아 비자발적 탑승불가를 최소화하고, 그럼에도 불구하고 발생되는 탑승 불가 승객에게는 “소비자분쟁해결기준”에 의거하여 배상하도록 하겠습니다.</C.p>
            </C.m20>
            <C.title>2. 수하물 피해 발생 시</C.title>
            <C.m20>
              <C.p>2.1 에어프레미아는 고객의 수하물의 안전한 인도를 위해 최선을 다하겠습니다. 다만 불가피한 상황으로 수하물의 분실, 파손 발생 시 공정하고 신속하게 처리하여 빠른 시일 내에 고객에게 처리 결과를 통지하겠습니다.</C.p>
              <C.p>2.2 위탁수하물의 분실 또는 파손으로 인한 손해는 그 손해의 원인이 된 사실이 항공기 상에서 또는 위탁수하물이 에어프레미아의 관리 하에 있는 기간 중에 발생한 경우에 책임을 부담합니다. 다만, 그 손해가 위탁수하물의 고유한 결함, 특수한 성질 또는 숨은 하자로 인하여 발생한 경우에는 책임을 지지 아니합니다.</C.p>
              <C.p>2.3 수하물의 분실 또는 파손으로 인한 손해에 대하여는 바르샤바 협약, 몬트리올 협약 등 국제 협약 또는 국내법이 정한 규정의 범위 내에서 책임을 다하겠습니다. 다만 고객이 에어프레미아에 위탁수하물을 인도할 때에 도착지에서 인도받을 때의 예정가액을 미리 신고하는 경우, 수하물 위탁 처리시 소정의 수수료가 발생하며, 에어프레미아는 신고가액이 위탁수하물을 도착지에서 인도할 때의 실제가액을 초과한다는 것을 증명하지 아니하는 한 신고가액을 한도로 책임을 부담합니다.</C.p>
              <C.p>2.4 수하물의 지연으로 인한 손해에 대하여 책임을 부담하겠습니다. 다만, 에어프레미아 또는 그 사용인 및 대리인의 손해를 방지하기 위해 합리적으로 요구되는 모든 조치를 하였다는 것 또는 그 조치를 하는 것이 불가능하였다는 것을 증명한 경우에는 그 책임을 지지 않습니다.</C.p>
            </C.m20>
            <C.title>3. 항공권 취소, 환불, 변경 등의 안내</C.title>
            <C.m20>
              <C.p>3.1 대한민국에서 항공권을 판매 시, 고객에게 항공권 취소, 환불 또는 변경에 소요되는 비용, 비용의 면제조건 및 항공권 취소, 환불 또는 변경 가능 기간 등을 안내하겠습니다.</C.p>
            </C.m20>
            <C.title>4. 항공기 이동지역 내 지연 시 조치</C.title>
            <C.m20>
              <C.p>4.1 에어프레미아는 항공기 내에 고객을 탑승시킨 채로 항공기 이동지역 내에서 국제선 4시간, 국내선 3시간을 초과하여 지연시키지 않도록 노력하겠습니다. 다만 기상, 정부기관의 지시 등의 안전이나 보안 상의 이유에 따른 예외상황의 경우나 탑승구로 돌아가는 것 또는 탑승구 이외의 다른 지역에서의 승객 하기가 공항 운영에 중대한 혼란을 초래할수 있는 경우는 이동지역 내 대기 지연 기준시간 규정에서 제외됩니다.</C.p>
              <C.p>4.2 이동지역 내 지연이 2시간 이상 지속되는 경우, 탑승객에게 적절한 음식물을 제공하겠습니다. 단, 이와 같은 서비스가 안전 또는 보안에 위협이 될 수 있다고 판단하는 경우에는 제외됩니다.</C.p>
              <C.p>4.3 이동지역 내 대기 지연 상태로 있는 동안 매 30분마다 승객에게 지연사유 및 진행 사항에 대해 안내하겠습니다.</C.p>
            </C.m20>
            <C.title>5. 항공권 판매 후 변경 사항 발생 시의 조치</C.title>
            <C.m20>
              <C.p>5.1 에어프레미아에서 판매하는 항공편의 운항 스케줄이 사업계획 변경, 정부의 사업계획 불인가, 30분 이상의 지연, 결항 등으로 인하여 항공권 판매 당시 예정된 운항 계획대로 운항하지 못할 수 있으며 당사 홈페이지를 통해 최신의 운항 스케줄을 고지하겠습니다.</C.p>
              <C.p>5.2 운항 스케줄 변경 시, 휴대전화에 의한 문자 전송, 전자메일, 전화, 우편 등의 방법으로 변경 사실을 안내하겠습니다. 단, 출발시간 임박시점(국내선 30분, 국제선 1시간 이내)의 경우는 공항에서의 안내로 대체합니다.</C.p>
            </C.m20>
            <C.title>6. 정보제공</C.title>
            <C.m20>
              <C.p>6.1 에어프레미아에서 판매하는 경우, 항공권에 대한 수하물의 요금과 무료 허용 중량, 개수를 전자 항공권(E-ticket) 및 홈페이지를 통해 고지하고 있습니다.</C.p>
              <C.p>6.2 공동운항편 항공권에 대해 실제 탑승하는 항공기, 판매사와 운항사 간 운임차이가 발생 할 수 있다는 사실, 탑승수속을 처리하는 항공사, 실제 적용되는 수하물 정책 등을 전자 항공권에 고지하고 있습니다.</C.p>
              <C.p>6.3 보유 항공기의 좌석 구조, 비상구 위치 등의 정보가 담긴 기내 배치도를 인터넷 홈페이지에 게시하고 있습니다.</C.p>
              <C.p>6.4 수하물 요금 변동이나 무료 수하물 허용량에 관한 정책 변경이 있을 경우, 최소 3개월간 인터넷 홈페이지를 통해 해당 내용을 안내하겠습니다.</C.p>
            </C.m20>
          </C.body>
        </C.wrap>
      </S.container>
    </Container>
  );
}

const S = {
  container: styled.div`
  `,
}

const C = {
  wrap: styled.div`
  `,
  body: styled.div`
    border-top: 2px solid ${DARK_GRAY1};
    padding-top: 30px;
    @media only screen and (max-width: 767px){
      padding-top: 20px;
    }
  `,
  m20: styled.div`
    margin-top: 20px;
    text-align: justify;
    @media only screen and (max-width: 767px){
      letter-spacing: -0.28px;
    }
  `,
  m30: styled.div`
    margin-top: 30px;
    text-align: justify;
    font-size: 18px;
    line-height: 2em;
    @media only screen and (max-width: 767px){
      margin-top: 20px;
      font-size: 14px;
      font-weight: 300;
    }
  `,
  title: styled.p`
    font-size: 21px;
    font-weight: 700;
    line-height: 2em;
    margin-top: 100px;
    @media only screen and (max-width: 767px){
      font-size: 16px;
      letter-spacing: -0.32px;
      margin-top: 60px;
    }
  `,
  p: styled.p`
    font-size: 18px;
    line-height: 2em;
    @media only screen and (max-width: 767px){
      font-size: 14px;
      font-weight: 300;
    }
  `,
}

export default AirtraficUser;