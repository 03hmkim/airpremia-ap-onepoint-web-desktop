import styled from 'styled-components';
import {
  ComTitle,
  ListGlobal,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';


function Transit(){
  return (
    <Container>
      <ComTitle
        title="운송약관"
      />
      <S.container>
        <C.wrap>
          <C.body>
            <C.titleMain>관련 법규</C.titleMain>
            <C.m60>
              <C.title>[항공사업법]</C.title>
            </C.m60>
            <C.m30>
              <ListGlobal level="fst" body={
                <p>제62조(운송약관 등의 비치 등) 제4항</p>
              }/>
              <ListGlobal level="scd" body={
                <p>항공교통사업자는 다음 각 호의 서류를 그 사업자의 영업소, 인터넷 홈페이지 또는 항공교통이용자가 잘 볼 수 있는 곳에 국토교통부령으로 정하는 바에 따라 갖추어 두고, 항공교통이용자가 열람할 수 있게 하여야 한다. 다만, 제1호부터 제3호까지의 서류는 항공교통사업자 중 항공운송사업자만 해당한다.</p>
              }/>
              <ListGlobal level="trd" body={
                <p>운임표</p>
              }/>
              <ListGlobal level="trd" body={
                <p>요금표</p>
              }/>
              <ListGlobal level="trd" body={
                <p>운송약관</p>
              }/>
              <ListGlobal level="trd" body={
                <p>피해구제계획 및 피해구제 신청을 위한 관계 서류</p>
              }/>
            </C.m30>
            <C.m60>
              <C.title>[항공교통이용자 보호기준]</C.title>
            </C.m60>
            <C.m30>
              <ListGlobal level="fst" body={
                <p>제6조(항공권 취소·환불 또는 변경 안내)</p>
              }/>
              <ListGlobal level="scd" body={
                <p>항공운송사업자등, 항공운송총대리점업자 및 여행업자는 전자상거래로 항공권을 판매하는 경우 계약체결 전에 항공교통이용자에게 항공권 취소·환불 또는 변경에 소요되는 비용, 비용의 면제조건 및 항공권 취소·환불 또는 변경 가능기간 등(이하 "취소·환불관련 거래조건"이라 한다)을 제공하여야 한다. 이 경우, 항공교통이용자가 쉽게 식별할 수 있도록 글자크기·형태 또는 색상 등을 차별되게 강조하여야 하며, 별도의 연결페이지에서만 취소·환불 관련 거래조건을 확인할 수 있어서는 아니 된다.</p>
              }/>
              <ListGlobal level="scd" body={
                <p>항공운송사업자등, 항공운송총대리점업자 및 여행업자는 전자상거래 이외의 방법(대리점·영업소 등에서의 판매 등)으로 항공권을 판매하는 경우 계약체결 전에 취소·환불 관련 거래조건을 제공하여야 한다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>제8조(항공권 판매 후 변경 시 조치)</p>
              }/>
              <ListGlobal level="scd" body={
                <p>항공운송사업자등은 대한민국에서 출발하는 항공권 판매 당시 예정된 운항계획과 다른 내용으로 정부에 사업계획 변경 인가를 요청하거나, 정부의 사업계획 불인가로 예정된 운항계획대로 운항하지 못할 경우 항공권을 예약·구매한 사람에 대한 조치계획(대체편 제공, 취소·환불 등)을 수립하여 국토교통부장관 또는 지방항공청장에게 제출하여야 한다.</p>
              }/>
              <ListGlobal level="scd" body={
                <p>항공운송사업자등, 항공운송총대리점업자 및 여행업자는 대한민국에서 출발하는 항공권을 판매한 이후 사업계획 변경, 정부의 사업계획 불인가, 지연(30분 이상), 결항 등으로 인하여 항공권 판매 당시 예정된 운항계획대로 운항하지 못할 경우에 이 사실을 알게된 후 지체없이 휴대전화에 의한 문자전송, 전자메일, 전화, 우편 또는 이에 상당하는 방법으로 항공교통이용자에게 변경내용을 안내하여야 한다. 다만, 항공교통이용자의 연락처 정보를 알고 있는 경우에 한하며, 출발시간 임박시점(국내선 30분, 국제선 1시간 이내)에서는 공항내 안내로 갈음할 수 있다. 이 때, 안내방법의 예시는 별표1과 같다.</p>
              }/>
              <ListGlobal level="scd" body={
                <p>제2항에도 불구하고 정기적 사업계획 변경에 따라 운항계획 변경이 있는 경우에는 변경 후 7일 이내에 항공교통이용자에게 변경내용을 안내하여야 한다.</p>
              }/>
              <ListGlobal level="scd" body={
                <p>항공운송사업자등은 제2항에 따른 변경내용을 지체없이 인터넷 홈페이지에 게시하여야 한다. 다만, 당일 변경은 예외로 할 수 있다.</p>
              }/>
              <ListGlobal level="scd" body={
                <p>항공운송사업자등, 항공운송총대리점업자 및 여행업자는 항공권 판매 후 운항계획 변경 발생사항에 대한 항공교통이용자 고지 계획을 사전적으로 수립하여야 한다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>제9조(정보제공) 제1항~제5항</p>
              }/>
              <ListGlobal level="scd" body={
                <p>항공운송사업자등, 항공운송총대리점업자 및 여행업자는 항공교통이용자에게 항공권을 대한민국에서 판매하는 경우 해당 항공권에 대한 수하물의 요금과 무료 허용중량 또는 허용개수를 정확히 알 수 있도록 고지하여야 한다.</p>
              }/>
              <ListGlobal level="scd" body={
                <p>항공운송사업자등, 항공운송총대리점업자 및 여행업자는 전자상거래로 공동운항 항공권을 판매하는 경우 항공편 첫 안내 시 실제 항공기의 운항사를 안내하여야 하며, 계약 체결 전에 실제 탑승하는 항공기, 판매사와 운항사간 운임차이가 발생할 수 있다는 사실, 탑승수속을 처리하는 항공사, 실제 적용되는 수하물 정책 등에 대한 정보(이하 "공동운항 관련 정보")를 고지하여야 한다. 이 때, 별도의 연결페이지를 통해서만 공동운항 관련 정보가 고지되어서는 아니 되며, 고지의 예시는 별표2와 같다.</p>
              }/>
              <ListGlobal level="scd" body={
                <p>항공운송사업자등, 항공운송총대리점업자 및 여행업자는 전자상거래 이외의 방법(대리점·영업소 등에서의 판매 등)으로 공동운항 항공권을 판매하는 경우 해당 항공편의 첫 안내 시 또는 해당 항공편에 대한 항공교통이용자의 첫 문의 시에 공동운항 관련 정보를 안내하여야 한다.</p>
              }/>
              <ListGlobal level="scd" body={
                <p>항공운송사업자등은 보유 항공기의 좌석배치(앞뒤 좌석간격, 좌석넓이를 포함한다), 비상구 위치 등의 정보가 담긴 기내 배치도를 인터넷 홈페이지에 게시하여야 한다.</p>
              }/>
              <ListGlobal level="scd" body={
                <p>항공운송사업자등은 수하물 요금변동이나 무료 수하물 허용량 등 수하물 정책에 관한 정책변경이 있을 경우 최소 3개월간 그러한 내용을 인터넷 홈페이지에 게시하여야 한다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>제10조(계획수립) 제1항</p>
              }/>
              <ListGlobal level="scd" body={
                <p>항공운송사업자등은 제4조부터 제9조까지의 내용을 포함하는 항공교통이용자 서비스 계획을 수립하여 인터넷 홈페이지에 게시하여야 한다.</p>
              }/>
              <ListGlobal level="scd" body={
                <p>공항운영자는 제7조에 따른 이동지역에서의 지연이 발생하지 않도록 탑승구 우선 배정 등 지원계획을 수립하여야 한다.</p>
              }/>
            </C.m30>
            <C.m60>
              <C.title>[항공위험물운송기술기준]</C.title>
            </C.m60>
            <C.m30>
              <ListGlobal level="fst" body={
                <p>제208조(승객에 대한 정보 제공)</p>
              }/>
              <ListGlobal level="scd" body={
                <p>항공운송사업자는 승객에게 항공기에 반입·운송하는 것이 금지된 위험물(이하 "항공기 반입금지 위험물"이라 한다)에 대하여 알려야 하며, 통보시스템(알리는 방법 등)은 항공운송사업자의 위험물교범에 반영하여야 하고, 승객이 타인의 개입(또는 도움)없이 자동화 장치(또는 기기)를 이용하여 항공권 구매, 탑승권 발급할 수 있어야 한다. 또한 이 시스템은 승객이 정보를 확인하였다는 증명(확인하는 단계 등)을 포함해야 한다. 정보는 항공권 구매시점(불가한 경우 탑승권 발행 전 또는 구매 후 지체없이) 그리고 탑승권 발행시점(탑승권 발행이 안되는 경우 항공기 탑승 전)에 승객에게 제공되어야 한다.</p>
              }/>
              <ListGlobal level="scd" body={
                <p>항공운송사업자 또는 항공운송사업자의 조업사와 공항운영자는 공항 내 항공권 발행, 탑승권 발행, 수하물 접수 그리고 항공기 탑승구역 마다 운송금지품목 위험물의 유형에 대하여 충분한 수의 주의 게시물(안내문)을 승객들의 눈에 띄게 게시하여야 한다.</p>
              }/>
              <ListGlobal level="trd" body={
                <p>정보를 승객 탑승권에 포함하는 방법 또는 승객이 탑승 수속 전이나 도중에 관련 정보를 습득하게 하는 방법</p>
              }/>
              <ListGlobal level="trd" body={
                <p>정보에는 위험물의 실물과 유사한 그림(visual example) 등이 포함되어야 한다.</p>
              }/>
              <ListGlobal level="scd" body={
                <p>인터넷(핸드폰 사용 포함)을 통한 탑승권 발행 절차가 마련되어 있는 경우 항공운송사업자는 승객에게 항공기 반입금지 위험물의 유형에 대한 정보를 제공하여야 한다. 이 경우 관련 정보는 그림이나 문장 형태로 제공될 수 있으나 승객 또는 그 대리인의 수하물에 포함된 위험물의 제한 사항에 대한 정보는 인터넷 상에서 그림이나 문장 형태로 제공하여야 한다.</p>
              }/>
            </C.m30>
            <C.m100>
              <C.titleMain>APZ 홈페이지 게시 필요사항</C.titleMain>
            </C.m100>
            <C.m30>
              <ListGlobal level="fst" body={
                <p>항공교통이용자 보호기준 제9조(정보제공) 제4항</p>
              }/>
              <ListGlobal level="scd" body={
                <p>항공기 정보 제공 시 항공기의 좌석배치(앞뒤 좌석간격, 좌석넓이 포함), 비상구 위치 등의 정보가 담긴 기내 배치도</p>
              }/>
              <ListGlobal level="fst" body={
                <p>항공위험물운송기술기준 제208조(승객에 대한 정보 제공) 제1항</p>
              }/>
              <ListGlobal level="scd" body={
                <p>항공기 반입금지 위험물 등 시스템은 승객이 정보를 확인하였다는 증명(확인하는 단계 등)을 포함</p>
              }/>
            </C.m30>
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
    text-align: justify;
    @media only screen and (max-width: 767px){
      padding-top: 20px;
    }
  `,
  m100: styled.div`
    margin-top: 100px;
    @media only screen and (max-width: 767px){
      margin-top: 60px;
    }
  `,
  m60: styled.div`
    margin-top: 60px;
    @media only screen and (max-width: 767px){
      margin-top: 40px;
    }
  `,
  m30: styled.div`
    margin-top: 30px;
    @media only screen and (max-width: 767px){
      margin-top: 20px;
    }
  `,
  titleMain: styled.p`
    font-size: 24px;
    line-height: 2em;
    font-weight: 700;
    @media only screen and (max-width: 767px){
      font-size: 22px;
      letter-spacing: -0.4px;
    }
  `,
  title: styled.p`
    font-size: 21px;
    font-weight: 700;
    line-height: 2em;
    margin-top: 60px;
    @media only screen and (max-width: 767px){
      font-size: 16px;
      letter-spacing: -0.32px;
      margin-top: 40px;
    }
  `,
}


export default Transit;