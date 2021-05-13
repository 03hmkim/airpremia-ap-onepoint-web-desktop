import styled from 'styled-components';
import {
  ComTitle,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import Linkblue from 'public/images/support/btn_txt_link_blue.svg';


function International(){
  return (
    <Container>
      <ComTitle
        title="국제화물운송약관"
      />
      <S.container>
        <C.wrap>
          <C.body>
            <C.titleMain>제 1 장 총 칙</C.titleMain>
            <C.title>1.1 적용범위</C.title>
            <C.content>
              <C.t>1.1.1 본 약관은 에어프레미아의 대한민국내 운송을 제외한 모든 국제화물운송에 적용된다.</C.t>
              <C.t>1.1.2 무상운송에 대하여 에어프레미아는 본 약관의 전부 또는 일부의 적용을 배제할 수 있다.</C.t>
              <C.t>1.1.3 에어프레미아와의 전세운송계약에 의한 운송에 대하여서는 당해 전세운송계약이 우선 적용되며, 전세운송계약에서 정함이 없는 사항에 대하여는 이 운송약관을 적용한다. 송하인이 전세운송계약에 의한 운송을 수락하여 운송이 이루어지는 경우, 송하인은 당해 전세운송계약 및 이 운송약관에 동의하는 것으로 간주한다.</C.t>
              <C.t>1.1.4 적용법령, 정부규제, 명령, 또는 지시에 따라 필요한 경우를 제외하고는 본 약관과 기타 적용 태리프의 규정은 사전에 예고 없이 변경될 수 있다. 단, 운송장 발행일 이후의 그러한 변경은 당해 운송계약에는 적용되지 아니한다.</C.t>
              <C.t>1.1.5 모든 운송은 운송장 발행당일에 유효한 약관과 기타 적용 태리프의 규정에 따른다. 하지만, 본 약관과 기타 적용 태리프의 규정이 국제협약상의 규정을 수정하거나 포기하도록 하는 것은 아니다.</C.t>
            </C.content>
            <C.title>1.2 정의</C.title>
            <C.content>
              <C.t>본 약관에서 사용되는 각 용어에 대한 정의는 다음과 같다.</C.t>
              <C.t>1.2.1 "에어프레미아"라 함은 에어프레미아 주식회사를 말한다.</C.t>
              <C.t>1.2.2 "협약"이라 함은 운송계약에 적용되는 다음 각호 중 하나를 말한다.</C.t>
              <C.t>1.2.2.1 1929년 바르샤바에서 의결된 국제항공운송에 관한 협약 (이하 '바르샤바협약'이라 한다).</C.t>
              <C.t>1.2.2.2 1955년 헤이그에서 개정된 바르샤바 협약 (이하 '개정 바르샤바 협약'이라 한다).</C.t>
              <C.t>1.2.2.3 1999년 몬트리올에서 성립된 국제항공운송에 있어서의 일부 규칙의 통일에 관한 협약 (이하 ‘몬트리올협약’이라 한다).</C.t>
              <C.t>1.2.3 "운송"이라 함은 유상 또는 무상으로 행하는 화물의 국제항공운송을 말한다.</C.t>
              <C.t>1.2.4 "항공화물운송장 (이하 “운송장”이라 한다)"이란 에어프레미아 노선상의 화물운송을 위하여 송하인 또는 송하인 대신 에어프레미아가 작성한 송하인과 에어프레미아 간의 운송계약을 증명하는 증표를 말한다.</C.t>
              <C.t>1.2.5 "화물"이라 함은 ‘물품’과 동의어로서 우편물과 수하물을 제외하고 항공기로 운송 중이거나, 운송될 모든 물품을 말한다. 또한, 운송장이 작성되어 운송되는 비동반 수하물도 화물에 속한다.</C.t>
              <C.t>1.2.6 "귀중화물"이라 함은 다음 각호 중 하나 또는 그 이상에 해당하는 화물을 말한다.</C.t>
              <C.t>1.2.6.1 킬로그램당 운송신고 가격이 미화 1,000 불 (또는 그 상당액)이상인 품목</C.t>
              <C.t>1.2.6.2</C.t>
              <C.t1>가. 금괴 (잉곳트 형태의 정련 및 비정련된 금 포함), 금합금괴, 금화</C.t1>
              <C.t1>나. 입자, 박판, 극박판, 분말, 스폰지, 선, 봉, 관, 환, 모울딩, 주물의 형태로 된 금</C.t1>
              <C.t>1.2.6.3</C.t>
              <C.t1>가. 백금, 백금계 금속 (파라듐, 이리듐, 루테늄, 오스뮴 및 리듐)</C.t1>
              <C.t1>나. 입자, 스폰지, 각봉, 괴, 박판, 환봉, 선, 망사, 관 또는 스트립 형태로 된 합금 (단, 상기금속 및 합금의 방사선 동위원소는 위험물임)</C.t1>
              <C.t>1.2.6.4 지폐, 여행자수표, 유가증권, 주권, 채권, 우표 및 인지류, 사용 가능한 은행카드 및 신용카드</C.t>
              <C.t>1.2.6.5</C.t>
              <C.t1>가. 다이아몬드 (공업용 다이아몬드 포함), 홍옥, 취옥, 청옥, 단백석, 진주 (양식 진주 포함)</C.t1>
              <C.t1>나. 위 1.2.6.5의 (가)에 기재된 품목으로 구성된 보석류</C.t1>
              <C.t>1.2.6.6 백금, 금, 은으로 제작된 보석류 및 시계</C.t>
              <C.t>1.2.6.7 백금, 또는 금으로 제작된 품목 (백금 및 금도금제품 제외)</C.t>
              <C.t>1.2.7 "선불화물"이라 함은 송하인이 운임 및 요금을 운송장 작성시 납부하도록 운송장에 기재된 화물을 말한다.</C.t>
              <C.t>1.2.8. "착지불화물"이라 함은 수하인이 운임 및 요금을 화물인도시 납부하도록 운송장에 기재된 화물을 말한다.</C.t>
              <C.t>1.2.9 "비동반 수하물"이라 함은 여객과 동일 항공편에 운송되지 아니하는 수하물로서 수하물임에도 운송장이 작성되어 운송되는 수하물을 말한다.</C.t>
              <C.t>1.2.10 "운송인"이란 운송장을 발행하는 항공운송인 또는 당해운송장에 따라 화물을 운송하거나, 운송할 것을 인수하는 항공운송인 또는 당해 항공운송과 관련하여 부수적인 서비스를 제공하는 항공 운송인을 말한다.</C.t>
              <C.t>1.2.11 "송하인"이라 함은 운송을 위하여 에어프레미아와 운송계약을 체결한 당사자로 운송장에 명시되어 있는 자를 말한다.</C.t>
              <C.t>1.2.12 "수하인"이라 함은 운송인으로부터 화물을 인도받을 자로 운송장에 명시되어 있는 자를 말한다.</C.t>
              <C.t>1.2.13 "통관수하인"이라 함은 수하인을 대신하여 통관 업무를 수행하도록 지정된 통관업자 또는 기타 수하인의 대리인을 말한다.</C.t>
              <C.t>1.2.14 "요율"이라 함은 운임산출을 위하여 설정한 단위당 금액을 말한다.</C.t>
              <C.t>1.2.15 "운송신고가격"이라 함은 화물의 분실, 손상, 지연 (이하 총칭하여 “손해”라 한다)의 경우에 에어프레미아의 배상책임 한도액을 산정하기 위하여 송하인이 신고하는 화물의 가격을 말한다.</C.t>
              <C.t>1.2.16 "집하서비스"라 함은 수출화물의 집하지점으로부터 출발지 공항까지의 지상운송을 말한다.</C.t>
              <C.t>1.2.17 "배달서비스"라 함은 목적지 공항으로부터 수하인의 주소지까지 혹은 수하인이 지정한 대리인의 주소지까지 또는 정부기관에서 지정한 주소지까지 수입화물의 지상운송을 말한다.</C.t>
              <C.t>1.2.18 "시내화물취급서비스"라 함은 에어프레미아의 시내화물취급소와 출발지 공항 또는 목적지 공항 간에 제공되는 화물의 지상운송을 말한다.</C.t>
              <C.t>1.2.19 "태리프"라 함은 공시된 요율 및 기타요금과 이와 관련된 규정을 말하며 이는 본 약관의 일부를 구성한다.</C.t>
              <C.t>1.2.20 "사전조치"라 함은 화물 운송에 앞서 송하인과 에어프레미아 사이에 특별히 취해야 할 선행조치를 말한다.</C.t>
              <C.t>1.2.21 “SDR (Special Drawing Right) “는 국제통화기금 (IMF)의 특별인출권을 말한다.</C.t>
              <C.t1>1.2.21.1 본 약관 제12장 1절에 의하여 운송신고가격이 운송장에 기재되는 경우, 각국 통화와 SDR의 환율은 운송장 발행 당일에 유효한 환율에 따른다.</C.t1>
              <C.t1>1.2.21.2 본 약관 제12장 1절에 의하여 운송신고가격이 운송장에 기재되지 않은 경우, 각국 통화와 SDR의 환율은 소송의 경우에는 판결일에 유효한 환율에 의하며, 소송 이외의 경우에는 손해배상금액이 합의된 날의 유효한 환율에 따른다.</C.t1>
              <C.t>1.2.22 "국가"라 함은 한 나라의 주권, 종주권, 위임통치, 신탁통치 또는 그 권력 하에 있는 모든 지역을 포함한다.</C.t>
              <C.t>1.2.23 "일"이라 함은 공휴일을 포함한 달력상의 모든 날을 말한다.</C.t>
            </C.content>
            <C.titleMain>제 2 장 운송장의 작성</C.titleMain>
            <C.title>2.1 송하인에 의한 운송장의 작성</C.title>
            <C.content>
              <C.t>2.1.1 송하인은 화물의 위탁과 동시에 에어프레미아가 정하는 양식, 방법 또는 매수에 따라 운송장을 작성하여 에어프레미아에 제출하여야 한다. 그러나 운임 및 요금이 확정되어 있는 경우에는 에어프레미아가 당해 운임 및 요금을 기입한다.</C.t>
              <C.t>2.1.2 화물의 포장이 2개 이상이고, 당해 화물 전부를 하나의 항공기로 운송할 수 없거나, 하나의 운송장에 의하여 운송하는 것이 적용법령, 정부규제, 명령, 지시 또는 에어프레미아의 운송규정에 위반되는 경우, 에어프레미아는 송하인에게 운송장을 2부 이상으로 분할하여 작성하도록 요구할 수 있다.</C.t>
            </C.content>
            <C.title>2.2 운송장의 보완 또는 수정</C.title>
            <C.content>
              <C.t>에어프레미아는 송하인의 요청에 의하여 운송장을 작성할 수 있고, 이렇게 작성된 운송장은 송하인이 작성한 것으로 간주한다. 만일, 수탁화물과 함께 인수한 운송장에 필수 기재사항이 누락되었거나 잘못 기재된 부분이 있을 경우, 에어프레미아는 가능한 한 운송장을 보완 및 수정할 수 있지만, 반드시 그러한 의무를 가지는 것은 아니다.</C.t>
            </C.content>
            <C.title>2.3 운송장 기재내용에 대한 책임</C.title>
            <C.content>
              <C.t>송하인은 운송장을 송하인이 작성하였는지 에어프레미아가 송하인을 대신하여 작성하였는지와 관계없이 운송장 기재내용상의 부적법, 부정확 또는 결여로 인하여 에어프레미아 및 기타 관계 자가 입은 일체의 손해에 대하여 책임을 진다.</C.t>
            </C.content>
            <C.title>2.4 화물의 외양이 양호하지 않은 경우</C.title>
            <C.content>
              <C.t>화물의 외양 또는 포장이 양호하지 못한 경우, 송하인은 당해 화물의 외양 또는 포장과 취급조건 등에 대하여 운송장에 기재하여야 하지만, 만일 기재하지 아니하였거나 기재된 내용이 정확 하지 아니할 경우 에어프레미아는 운송장의 내용을 보완할 수 있다. 그러나 에어프레미아가 반드시 그러한 의무를 가지는 것은 아니다.</C.t>
            </C.content>
            <C.title>2.5 운송장의 변조</C.title>
            <C.content>
              <C.t>운송장의 일부가 훼손 또는 멸실되었거나 또는 운송인 이외의 자에 의하여 변조되었을 경우에는 에어프레미아가 운송장의 접수를 거절할 수 있다.</C.t>
            </C.content>
            <C.titleMain>제 3 장 운임 및 요금</C.titleMain>
            <C.title>3.1 운임 및 요금의 적용</C.title>
            <C.content>
              <C.t>3.1.1 유효한 요율 및 요금</C.t>
              <C.t>본 약관에 따라 적용되는 요율 및 요금은 에어프레미아가 적법하게 공시한 것이어야 하며, 운송장 발행 당일에 유효한 것이어야 한다. 만일 유효하지 아니한 요율 및 요금에 의하여 운임이 산출된 경우 에어프레미아가 그 차액을 송하인 또는 수하인에게 환불하거나 송하인 혹은 수하 인으로부터 추징할 수 있다.</C.t>
              <C.t>3.1.2 운임적용구간</C.t>
              <C.t>태리프에서 별도로 정하고 있지 않는 한, 공시된 요율은 출발지 공항에서 목적지공항까지의 운송에만 적용한다.</C.t>
              <C.t>3.1.3 운임적용우선순위</C.t>
              <C.t>태리프에 별도로 정하고 있지 않는 한, 공시된 직행 요율이 동일한 지점들 간의 동일한 화물에 적용되는 여러 구간의 요율을 합산한 요율보다 우선하여 적용된다.</C.t>
              <C.t>3.1.4 공시 요율에 포함되지 않는 요금</C.t>
              <C.t>태리프에 정하고 있지 않는 한, 공시된 요율은 아래의 서비스 요금을 포함하지 않는다.</C.t>
              <C.t>3.1.4.1 집하, 배달 및 시내화물 취급 서비스요금</C.t>
              <C.t>3.1.4.2 창고료 또는 보관료</C.t>
              <C.t>3.1.4.3 보험료</C.t>
              <C.t>3.1.4.4 화물의 통관에 따른 비용</C.t>
              <C.t>3.1.4.5 제세공과금을 포함한 제 수수료 및 과태료</C.t>
              <C.t>3.1.4.6 화물포장의 개, 보수에 따른 비용</C.t>
              <C.t>3.1.4.7 화물을 출발지로 반송함에 따른 비용</C.t>
              <C.t>3.1.4.8 기타 서비스요금</C.t>
              <C.t>3.1.5 단수의 처리</C.t>
              <C.t>3.1.5.1 운임 및 요금을 각각 계산할 때 또는 합산한 운임 및 요금을 운송장에 명시된 통화 이외의 통화로 환산할 때 단수가 있는 경우에는 에어프레미아의 규정에 따라 소정의 단위로 단수 처리한다. 합산한 운임 및 요금을 대한민국 "원"화로 환산할 경우에는 10 원 미만의 단수는 절사한다.</C.t>
              <C.t>3.1.5.2 용적계산의 경우 0.5 센티미터 미만 또는 0.5 인치 미만의 단수는 절사하고 0.5 센티미터 이상 또는 0.5 인치 이상의 단수는 각각 1 센티미터 또는 1 인치로 절상한다.</C.t>
              <C.t>3.1.5.3 용적의 계산은 화물의 최대용적에 따라야 하며 화물이 수개의 포장으로 구성되어 있을 경우 포장되어 있는 전체화물의 최대용적을 기준으로 한다. 최대용적은 화물의 최대길이, 최대폭 및 최대높이를 곱하여 산출한다.</C.t>
              <C.t>3.1.5.4 중량계산의 경우 0.5 킬로그램 이하의 단수는 0.5 킬로그램으로 하고 0.5 킬로그램을 초과하는 단수는 1 킬로그램으로 절상한다. 또한 1 파운드 미만의 단수는 1 파운드로 절상한다.</C.t>
              <C.t>3.1.6 운임 및 요금의 산출</C.t>
              <C.t>3.1.6.1 운임은 화물의 총중량을 기준으로 산출한 운임과 총 용적을 기준으로 산출한 운임 중 더 높은 것을 적용한다.</C.t>
              <C.t>3.1.6.2 용적에 의한 중량 계산은</C.t>
              <C.t1>① 3,000 입방 센티미터 이하의 용적을 0.5 킬로그램, 3,000 입방 센티미터를 초과하여 6,000 입방 센티미터 이하의 용적을 1 킬로그램으로 계산한다.</C.t1>
              <C.t1>② 183 입방인치 이하의 단수를 0.5 킬로그램, 183 입방인치를 초과하여 366 입방인치인이하의 단수는 1 킬로그램으로 하여 중량을 계산한다.</C.t1>
              <C.t1>③ 166 입방인치 또는 그 미만의 단수를 1 파운드로 하여 중량을 계산한다.</C.t1>
              <C.t>3.1.7 공시되지 않은 요율 및 요금의 구성</C.t>
              <C.t>어느 두 지점 간의 요율 및 요금이 공시되어 있지 아니한 경우, 두 지점 간의 요율 및 요금은 태리프에 따라 산출한다.</C.t>
              <C.t>3.1.8 최저운임</C.t>
              <C.t>태리프에서 별도로 정하고 있지 않는 한, 화물의 총중량에 따라 산출한 운임의 총액이 태리프 에서 정하는 최저 운임보다 낮은 금액일 경우에는 태리프에 공시된 최저운임을 적용한다.</C.t>
              <C.t>3.1.9 운송가격신고</C.t>
              <C.t>종가요금의 적용과 관계없이 송하인은 모든 화물에 대하여 운송장에 운송가격을 신고하여야 하며, 그러한 신고는 금액 또는 "NVD (NO VALUE DECLARED: 신고가격 없음)"으로 하여야 한다.</C.t>
              <C.t>3.1.10 종가요금</C.t>
              <C.t>3.1.10.1 운송신고가격에 종가요금이 적용되는 경우, 킬로그램당 화물의 가격은 운송신고가격을 운송장에 기재된 화물의 총중량으로 나누어 결정한다.</C.t>
              <C.t>3.1.10.2 화물의 가격이 킬로그램당 22 SDR을 초과하는 경우, 그 초과분에 대하여 0.75%에 해당하는 금액을 종가요금으로 한다.</C.t>
              <C.t>3.1.11 중량에 의한 할인</C.t>
              <C.t>동일한 화물에 적용되는 운임은 화물의 총중량에 해당 중량에 적용하는 요율을 곱하여 산출된 운임과 당해 화물에 적용하는 중량단계보다 더 무거운 다음 중량단계에 당해 중량에 대한 요율을 곱하여 산출된 운임 중 더 낮은 운임이 우선하여 적용된다.</C.t>
              <C.t>3.1.12 국제 특송 서비스(International Priority Service) 요금</C.t>
              <C.t>에어프레미아는 송하인의 요청에 따라 국제선 화물 특송 서비스 (International Priority Service) 를 제공할 수 있다. 태리프에 명시된 International Priority Service 조건을 만족시키는 화물에 대하여 에어프레미아 화물운송규정에 따라 Priority 요율을 적용, 국제선 전 노선 화물에 대하여 할증 운임을 적용할 수 있다.</C.t>
            </C.content>
            <C.content>
              <C.title>3.2 수수료</C.title>
              <C.t>3.2.1 입체지불수수료</C.t>
              <C.t>송하인의 요구가 있을 경우, 에어프레미아는 에어프레미아, 송하인 또는 그의 대리인이 선불한 보관료, 공과금, 통관수수료, 보험료 또는 에어프레미아 이외의 자가 행하는 적재 및 하역에 대한 수수료 등을 입체지불금으로서 수하인으로부터 징수한다.</C.t>
              <C.t>3.2.2 위험물 취급수수료</C.t>
              <C.t>에어프레미아의 규정에 명시된 위험물의 운송에 대하여 에어프레미아가 별도로 정하는 바에 따라 별도로 소정의 위험물 취급수수료를 징수한다.</C.t>
              <C.t>3.2.3 착지불 수수료</C.t>
              <C.t>착지불 조건으로 운송되는 화물에 대하여서는 에어프레미아가 별도로 정하는 바에 따라 소정의 착지불 수수료를 징수한다. 단, 대한민국이 도착지인 경우에는 운임과 종가요금을 합한 금액의 5%에 상당하는 금액을 착지불수수료로 징수하며 최저 착지불수수료는 미화 10 불(또는그 상당액) 이다.</C.t>
              <C.t>3.2.4 터미널 서비스 요금</C.t>
              <C.t>에어프레미아는 운송장에 기재된 송하인 또는 수하인에게 터미널 서비스 요금을 부과할 수 있으며 당해 요금은 에어프레미아가 그러한 서비스를 제공할 때마다 각기 적용된다.</C.t>
              <C.t>3.2.5 운송장 작성 수수료</C.t>
              <C.t>에어프레미아가 화주를 대신하여 운송장을 작성할 경우 에어프레미아는 화주로부터 운송장 작성 수수료를 징수한다.</C.t>
            </C.content>
            <C.title>3.3 운임 및 요금의 지불</C.title>
            <C.content>
              <C.t>3.3.1 운임 및 요금은 현금 또는 에어프레미아가 수락할 수 있는 기타 지불수단으로 지급되어야 한다.</C.t>
              <C.t>3.3.2 선불화물의 경우에는 에어프레미아가 송하인으로터 그 화물을 인수할 때 송하인이, 착지불화물의 경우에는 에어프레미아가 수하인에게 그 화물을 인도할 때 수하인이 당해 운임 및 요금을 지급하여야 한다.</C.t>
              <C.t>3.3.3 선불화물의 경우에는 운송장 발행일에 유효한 환율이 적용되고, 착지불화물의 경우에는 당해 화물의 목적지 공항 도착일에 유효한 환율이 적용된다. 단, 대한민국 도착화물의 경우에는 당해 화물이 국내최초 도착지 공항에 도착된 당일에 유효한 환율이 적용된다.</C.t>
              <C.t>3.3.4 대한민국 내에서 운임 및 요금을 원화로 지불하는 경우 환율은</C.t>
              <C.t1>가. 매주 월요일에 유효한 은행의 대고객 전신환 매도율을 당해주의 화요일부터 다음 주 월요일까지 주간단위로 적용하나, 단, 월요일이 공휴일인 경우 전주 마지막 영업일에 유효한 은행의 대고객 전신환 매도율을 적용한다.</C.t1>
              <C.t1>나. 위 가 호에도 불구하고 전일까지 적용되어온 환율과 비교하여 환율의 변동폭이 1%이상 발생하였을 경우에는 변동된 신환율을 익일부터 당해 1 주일 중 잔여기간 동안 사용한다.</C.t1>
              <C.t>3.3.5 선불화물 또는 착지불화물에 적용된 운임 및 요금 또는 에어프레미아가 대신 지불하였거나 당해 화물의 운송과 관련하여 발생된 수수료, 공과금, 세금, 제비용, 선불금, 기타 에어프레미아가 지불하여야 할 금액은 화물의 분실, 손상, 지연, 미도착과 관계없이 전액 모두 에어프레미아의 수입으로 간주한다.</C.t>
              <C.t>3.3.6 송하인이 화물을 에어프레미아에 위탁하는 시점에서 확정할 수 없는 요금, 비용 또는 입체지불금에 대하여 에어프레미아는 당해 요금, 비용 또는 입체 지불금으로 충당하기에 충분하다고 추정하는 금액을 사전에 예치하도록 송하인에게 요구할 수 있다. 당해 예치금에 대하여 송하인에 대한 잔금의 환불 또는 부족한 금액의 추가징수는 당해 요금, 비용 또는 입체 지불금이 확정된 후에 이루어진다.</C.t>
              <C.t>3.3.7 송하인은 모든 운임 및 요금과 다음 각호의 사유로 인하여 에어프레미아가 지불하였거나 부담할 모든 경비, 과태료 등에 대하여 그 지불을 보증하여야 한다.</C.t>
              <C.t>가. 법령에 의하여 운송이 금지되어 있는 품목의 화물의 불법 혼입</C.t>
              <C.t>나. 부적법, 부정확 또는 불충분한 포장, 주소의 기재 또는 화물표시</C.t>
              <C.t>다. 수입허가서 또는 필요한 증명서의 부재</C.t>
              <C.t>라. 세관에 대한 가격신고의 부정</C.t>
              <C.t>마. 중량 또는 용적에 대한 부정확한 기술</C.t>
              <C.t>3.3.8 송하인이 운임 및 요금을 이미 완납한 경우가 아닌 이상, 수하인은 화물의 인도 등 운송계약에 따라 발생하는 모든 권리를 가짐과 동시에 모든 미지불 운임 및 요금, 비용, 벌금, 과태료, 입체지불금을 지급하는 것에 동의한다. 그러나 이러한 수하인의 동의가 당해 금액에 대한 송하인의 지불채무를 면제하는 것은 아니다. 에어프레미아는 이러한 미지불 금액이 발생하였을 경우 화물에 대한 유치권을 가지며 당해 지불이 이루어지지 않을 경우 그 화물을 경매 또는 임의매각 처분하고 당해 매각 대금으로 상기 미지불 금액의 전부 또는 일부에 충당하는 권리를 가진다. 그러한 에어프레미아의 경매 또는 임의매각 처분금액이 미지불금액보다 적을 경우 송하인과 수하인은 부족 금액에 대한 지불 채무를 가지며 송하인과 수하인은 연대하여 당해 지불 채무를 부담하여야 한다 (단, 매각전에 에어프레미아는 운송장에 명시되어 있는 송하인 또는 수하인의 주소지로 그러한 취지를 서면으로 통지하여야 한다). 이러한 부족금액이 지불되지 않는 한, 지불승인을 이유로 이러한 유치 및 매각 권리와 전기 비용을 징수하는 에어프레미아의 권리는 영향을 받거나 소멸 또는 침해되지 않으며 화물을 인도하거나 화물의 점유포기가 있어도 이러한 전기비용을 징수하는 에어프레미아의 권리는 영향을 받거나 소멸 또는 침해되지 않는다.</C.t>
              <C.t>3.3.9 실제화물의 총중량, 용적, 수량 또는 운송신고 가격이 기존 운임 및 요금의 계산 시 사용한 총 중량, 용적, 수량 또는 운송신고가격을 초과할 경우, 에어프레미아는 송하인 또는 수하인에게 그 초과분에 대한 운임 및 요금의 지불을 요구할 수 있다.</C.t>
              <C.t>3.3.10 화물의 손해배상청구는 모든 운임 및 요금이 지급된 이후에 행사할 수 있다. 단, 화물의 전부가 인도되지 않은 경우에는 운임 및 요금의 지불과 관계없이 그 화물에 대한 손해 배상을 청구할 수 있다. 손해배상 청구액은 당해 운임 및 요금으로부터 공제할 수 없다.</C.t>
            </C.content>
            <C.titleMain>제 4 장 화물의 인수</C.titleMain>
            <C.title>4.1 화물의 인수</C.title>
            <C.content>
              <C.t>에어프레미아는 에어프레미아의 규정에 별도로 명시된 경우를 제외하고는, 화물의 취급에 적당한 장비의 사용이 가능하거나 또는 항공기 탑재허용량 범위내에서 화물의 운송을 수락한다.</C.t>
            </C.content>
            <C.title>4.2 운송신고가격의 제한</C.title>
            <C.content>
              <C.t>4.2.1 에어프레미아는 하나의 화물의 운송신고가격이 미화 200,000 불(또는 그 상당액)을 초과하는 경우, 운송을 수락하지 아니한다. 단, 운송신고가격이 미화 200,000 불(또는 그 상당액)을 초과하는 운송건의 경우, 에어프레미아의 사전 동의를 득한 후에 운송할 수 있다.</C.t>
              <C.t>4.2.2 1대의 항공기로 운송되는 하나 또는 그 이상의 화물의 운송 신고가격총액의 한도는 미화 3,200,000 불(또는 그 상당액)로 하되, 만일 운송 신고 가격의 총액이 이 한도액을 초과하는 경우에는 에어프레미아의 사전 동의가 있지 않는 한 1대의 항공기로 운송할 수 없으며, 에어프레미아의 단독 판단으로 2대 이상의 항공기로 분할하여 운송할 수 있다.</C.t>
              <C.t>4.2.3 화물의 포장 및 표시</C.t>
              <C.t1>가. 화물은 운송 중 사람, 항공기, 타 화물 또는 재산에 손해를 주는 일이 없도록 일반적인 화물취급절차에 따라 안전하게 포장되어야 하며 각각의 포장물에는 송하인과 수하인의 성명, 주소 및 연락처가 명확하고 멸실되지 않도록 기재되어야 한다.</C.t1>
              <C.t1>나. 귀중화물의 경우 에어프레미아가 정하는 방법으로 포장 및 봉인이 되어야 한다.</C.t1>
              <C.t>4.2.4 수탁금지화물</C.t>
              <C.t>에어프레미아는 위 4.1의 내용에도 불구하고, 다음 각호의 화물에 대하여는 운송을 수락하지 아니한다.</C.t>
              <C.t1>가. 운송 또는 수출입이 목적지국, 출발지국, 도중 기착지국 또는 통과국의 법령이나 규제에 금지되어 있는 화물</C.t1>
              <C.t1>나. 항공운송에 적합치 아니한 상태로 포장된 화물</C.t1>
              <C.t1>다. 운송에 필요한 서류가 모두 구비되어 있지 아니한 화물</C.t1>
              <C.t1>라. 사람, 항공기, 타 화물 또는 재산에 위험을 주거나 또는 여객에게 불편을 끼칠 수 있는 화물</C.t1>
              <C.t>4.2.5 조건부 수탁화물</C.t>
              <C.t1>가. 위험물, 생동물, 부패성화물, 시체 및 유골과 기타 항공운송에 적합치 아니한 고유의 성질을 가지고 있는 화물에 대하여는 에어프레미아가 정하는 조건하에서만 운송을 수락한다.</C.t1>
              <C.t1>나. 에어프레미아는 다음의 화물에 대하여 착지불조건으로 운송을 수락하지 않는다.</C.t1>
              <C.t2>1) 자유를 구속당하고 있는 자에게 보내는 화물</C.t2>
              <C.t2>2) 정부기관에 보내는 화물. 단, 정부기관원이 정당한 증명서를 제시하여 운송하는 경우는 제외</C.t2>
              <C.t2>3) 부패성 화물</C.t2>
              <C.t2>4) 법규에 따라 착지불화물의 인도를 금지하는 국가로 발송하는 화물</C.t2>
              <C.t2>5) 생동물</C.t2>
              <C.t2>6) 시체 및 유골</C.t2>
              <C.t1>다. 항공기로 운송하기에 적합하지 않은 형태, 크기 또는 중량의 화물은 운송 전 적절한 조치가 취해지지 않는 한 에어프레미아는 운송을 수락하지 아니한다. 단, 에어프레미아가 특정 화물의 안전 취급을 위하여 별도로 특별 설비가 필요한 경우 송하인 또는 수하인이 그 설비를 준비하고 조작하고 그 비용을 부담하는 경우에 한하여 운송을 수락할 수 있다.</C.t1>
              <C.t1>라. 화물의 중량이 에어프레미아 규정상 항공기 탑재실 바닥의 단위면적당 탑재제한 중량을 초과하는 경우, 적절한 조치를 취함으로써 단위면적당 중량을 탑재제한 중량 이하로 만들지 아니하면 에어프레미아는 운송을 수락하지 않는다.</C.t1>
              <C.t>4.2.6  송하인의 운송조건 위반에 대한 책임</C.t>
              <C.t>송하인은 수탁 금지되는 화물 또는 조건부로 수탁되는 화물의 운송조건위반에 대하여 책임을 지고, 그러한 화물운송으로 인하여 발생하는 일체의 손해에 대하여 에어프레미아를 면책하여야 한다.</C.t>
              <C.t>4.2.7 화물의 내용물 검사</C.t>
              <C.t>에어프레미아는 보안 및 안전을 이유로 필요시 화물을 개봉하여 그 내용물을 검사할 수 있다.</C.t>
            </C.content>
            <C.titleMain>제 5 장 화물의 운송</C.titleMain>
            <C.title>5.1 법령의 준수</C.title>
            <C.content>
              <C.t>5.1.1 화물의 포장, 내용물, 운송, 인도, 인수 등과 관련하여 송하인은 화물의 목적지국, 기착지국, 통과국의 법령, 정부의 규제, 명령 또는 지시를 준수하여야 하며 그러한 정보를 에어프레미아에게 제공하고 이를 준수하기 위하여 필요한 제반 서류를 운송장에 첨부시켜야 한다. 에어프레미아는 당해 정보 또는 서류가 정확하고 충분한 것인지의 여부에 대하여 검사할 의무를 부담하는 것은 아니다.</C.t>
              <C.t>5.1.2 송하인이 위 1 항에서 정하는 바에 따르지 못했음을 이유로 발생된 손해에 대하여 에어프레미아는 송하인, 수하인 또는 기타인에게 책임을 지지 아니한다.</C.t>
              <C.t>5.1.3 에어프레미아가 법령 및 정부의 규제, 명령 또는 지시에 따라 화물의 운송 거절에 대해 선의의 결정을 한 뒤 운송을 거절하는 경우에는 에어프레미아는 책임을 지지 아니한다.</C.t>
            </C.content>
            <C.title>5.2 입체지불</C.title>
            <C.content>
              <C.t>5.2.1 에어프레미아는 화물의 운송 도중 발생한 공과금, 세금 또는 비용 등을 대납할 수 있지만, 그러한 의무를 부담하는 것은 아니다. 이 경우 송하인과 수하인은 연대하여 에어프레미 아가 대납한 금액에 대하여 지불을 보증하여야 한다.</C.t>
            </C.content>
            <C.title>5.3 운송 중의 화물에 대한 에어프레미아의 권리</C.title>
            <C.content>
              <C.t>5.3.1 에어프레미아는 화물의 운송 중 또는 운송 전후에 화물을 특정지점에서 유치할 필요가 있다고 판단할 경우 운송장에 기재되어 있는 주소의 송하인 또는 수하인에게 통지하고 당해화물을 창고 또는 기타 적절한 장소에 보관하거나 세관당국에 인도하거나 또는 수하인 앞으로 남은 운송을 위하여 타 운송기관에 인도한다.</C.t>
              <C.t>5.3.2 위 5.3.1의 조치에 따라 발생하는 일체의 비용 또는 및 위험에 대하여서는 송하인과 수하인이 연대하여 책임을 지고 에어프레미아를 면책하여야 한다.</C.t>
            </C.content>
            <C.title>5.4 운항시간, 운항노선 및 취소</C.title>
            <C.content>
              <C.t>5.4.1 에어프레미아는 예정된 운항시간 또는 운항노선을 예고없이 변경할 수 있으며, 운송인과 항공기 또한 예고없이 변경할 수 있다. 에어프레미아는 화물운송에 따른 여하한 지점에서의 접속과 관련하여 의무를 부담하지 아니하며, 에어프레미아의 사정에 따라 운송장에 기재된 노선과 상이한 노선을 선정하거나 변경할 수 있다.</C.t>
              <C.t>5.4.2 에어프레미아는 운항시간표 또는 기타 인쇄물상의 오기 또는 누락에 대하여 책임을 지지아니한다. 또한, 에어프레미아는 항공편 발착일시 또는 운항시간과 관련하여 에어프레미아의 직원 또는 대리인의 여하한 진술 또는 표현에 대하여 책임을 지지 아니한다.</C.t>
              <C.t>5.4.3 에어프레미아는 다음과 같은 경우, 예고 없이 항공편 혹은 미이행운송권을 취소, 우회, 연기 또는 지연시키거나 화물의 전부 또는 일부를 탑재하지 아니하고 항공편을 출발시킬 수 있다. 또한, 아래의 사유에 따라 항공편이 취소, 연기, 조발 또는 중단할 경우에는 에어프레미아는 당해 사태에 대하여 일체의 책임을 지지 아니한다.</C.t>
              <C.t1>가. 에어프레미아가 통제할 수 없는 상황 (기상조건, 불가항력, 파업, 폭동, 소요, 출입항금지, 전쟁 또는 이에 준하는 행위, 적대행위, 동란 또는 국제관계의 불안정 등 또는 그러한 상황에 따라 직접 또는 간접적으로 기인되는 상황)</C.t1>
              <C.t1>나. 예기치 못한 상황</C.t1>
              <C.t1>다. 적용법령위반, 정부의 규제, 명령 또는 지시</C.t1>
              <C.t1>라. 에어프레미아 또는 해당 화물운송인과 관련된 자의 노사분규</C.t1>
              <C.t1>마. 화물 및 항공기의 안전 또는 보안상의 이유</C.t1>
              <C.t1>위 사유에 따라 화물의 전부 또는 일부의 운송이 중단될 경우, 에어프레미아에 의한 당해화 물의 환적, 인도, 또는 보관은 운송장에 기재된 내용대로 완전하게 인도된 것으로 간주되며 에어프레미아는 운송장에 기재된 주소의 송하인이나 수하인에게 그러한 조치의 통보를 하여야 한다. 또한 위와 같이 화물의 전부 또는 일부의 운송이 중단될 경우 송하인 또는 수하인의 요청에 의하여 에어프레미아는 당해화물을 다른 목적지로 운송하거나 송하인 또는 수하 인의 대리인으로서 타 운송수단으로 운송 할 수 있다.</C.t1>
              <C.t>5.4.4 에어프레미아가 청구한 금액의 전부 또는 일부의 지불을 송하인이 거절하는 경우, 에어프레미아는 그 화물의 운송을 취소할 수 있으며, 이러한 경우 에어프레미아는 그러한 취소에 대한 책임을 지지 아니한다.</C.t>
              <C.t>5.4.5 적용법령, 정부규제, 명령 또는 지시에 따라 에어프레미아는 각 수탁 화물간 또는 수탁화물, 기타 물품, 우편물 및 여객 간의 운송 우선 순위를 결정하고 언제든 어느 지점에서나 운송할 물품과 운송하지 아니할 물품 또는 운송에 적합치 아니한 물품을 결정하고 화물의 전부 또는 일부를 탑재하지 아니하고 항공기를 출발시킬 수 있다. 이러한 운송 우선 순위를 결정함으로써 당해화물의 일부 또는 전부가 운송되지 아니하거나 운송이 연기, 지연된 경우 에어프레미아는 그로 인한 손해에 대하여 책임을 지지 아니한다.</C.t>
            </C.content>
            <C.titleMain>제 6 장 송하인의 화물처분</C.titleMain>
            <C.title>6.1 화물처분권의 행사</C.title>
            <C.content>
              <C.t>화물처분권의 행사는 송하인 또는 그의 대리인이 송하인에게 교부된 운송장을 제시한 경우에만 행해져야 하며 또한 운송장에 기재된 수탁화물 전체에 대하여 행해져야 한다. 화물처분에 관한 지시는 에어프레미아가 정하는 방법에 따라 서면으로 하여야만 하며, 화물 처분권의 행사 결과 수하인이 변경되는 경우 새로 정해진 수하인을 운송장상의 수하인으로 간주한다.</C.t>
            </C.content>
            <C.title>6.2 송하인의 화물처분권</C.title>
            <C.content>
              <C.t>송하인은 운송계약상 정해진 모든 의무를 이행하는 것을 조건으로 에어프레미아 또는 제3자의 권리를 해치지 아니하는 범위 내에서 다음에서 정하는 화물처분권을 행사할 수 있다.</C.t>
              <C.t>6.2.1 출발지 공항 또는 목적지 공항에서의 화물의 회수</C.t>
              <C.t>6.2.2 운송도중 여하한 지점에서 화물운송의 중지</C.t>
              <C.t>6.2.3 목적지 공항 또는 운송도중에 운송장에 명시된 수하인 이외의 자에게 화물의 인도를 요구</C.t>
              <C.t>6.2.4 출발지 공항으로 화물의 반송을 요구</C.t>
            </C.content>
            <C.title>6.3 송하인의 권리 범위</C.title>
            <C.content>
              <C.t>송하인의 화물처분권은 화물이 목적지 공항에 도착한 후 수하인이 화물을 인도 받거나 화물인 도를 청구하거나 또는 화물수취의 의사표시를 한 시기에 소멸한다. 단, 수하인이 운송장 또는 화물의 수취를 거절하거나 수하인을 알 수 없을 경우 화물처분권은 계속 송하인에게 귀속하는 것으로 본다.</C.t>
            </C.content>
            <C.title>6.4 이행불능상태</C.title>
            <C.content>
              <C.t>위 6.1의 규정에도 불구하고 에어프레미아가 송하인의 지시에 따를 수 없다고 판단되는 경우 에어프레미아는 당해 화물처분권의 행사를 거절할 수 있다. 이 경우 에어프레미아는 조속히 송하인에게 그 취지를 통지하여야 하며 당해 통지에 소요된 비용은 그 화물의 운임 및 요금에 추가된다.</C.t>
            </C.content>
            <C.titleMain>제 7 장 화물의 인도</C.titleMain>
            <C.title>7.1 화물의 도착통지</C.title>
            <C.content>
              <C.t>제9장에서 정하는 바에 따라 화물이 목적지공항 이외의 지점에 운송되는 경우를 제외하고는 에어프레미아는 항공업계에서의 통상적인 방법으로 수하인에게 화물의 도착을 알린다. 단, 송하인의 별도 지시가 있는 경우에는 그에 따른다. 또한, 운송장에 도착통지를 받을 자가 별도로 명시된 경우 화물의 도착 통지는 당해화물 도착 통지를 받을 자에게 행한다. 에어프레미아는 도착 통지가 수신되지 못한 사실과 수신 지연된 사실에 대하여 책임을 지지 아니한다.</C.t>
            </C.content>
            <C.title>7.2 화물의 인도</C.title>
            <C.content>
              <C.t>운송장에 도착통지를 받을 자가 별도로 명시된 경우를 제외하고, 화물의 인도는 운송장에 명시된 수하인에게만 행해진다. 단, 운송장에 도착통지를 받을 자가 별도로 명시된 경우 에어프레 미아는 위 7.1이 정하는 바에 따라 도착통지를 행하고 당해 도착통지를 받을 자에게 화물을 인도함으로써 수하인에 대한 인도가 유효하게 이루어진 것으로 간주한다. 송하인 또는 수하인과 에어프레미아 간에 사전 합의가 없는 한 수하인은 목적지 공항에서 화물의 인도를 받고 수취 하여야 한다.</C.t>
            </C.content>
            <C.title>7.3 수하인의 수취거절</C.title>
            <C.content>
              <C.t>7.3.1 아래 7.4에 적용되는 경우를 제외하고는 화물이 인도장소에 도착한 후 수하인이 화물의 수취를 거절하는 경우 에어프레미아는 운송장에 명시된 송하인의 지시에 따르도록 한다. 송하인의 지시가 없는 경우 또는 에어프레미아가 송하인의 지시를 수행하기 어려울 경우에는 에어프레미아는 수하인이 수취하지 않는 이유를 송하인에게 통지하고 다음 사항 중 하나의 조치를 취할 수 있다.</C.t>
              <C.t1>가. 에어프레미아 또는 타 운송수단을 이용하여 출발지공항으로 화물을 반송하여 거기에서 송하인의 지시를 기다린다. 단, 반송을 위한 운송조건은 별도로 정하지 않는 한 기존 운송조건과 동일한 것으로 간주한다.</C.t1>
              <C.t1>나. 최소한 30 일 이상 화물을 유치한 후 당해 화물을 일괄하여 또는 수개로 분할하여 경매 또는 임의 매각 처분한다.</C.t1>
              <C.t>7.3.2 송하인은 화물을 인도하지 못한 사실로 기인하는 모든 요금 및 비용에 대하여 책임을 진다. 당해 비용에는 화물을 반송함에 따라 발생된 운임 및 요금을 포함하지만 여기에 한정 되는 것은 아니다. 화물이 출발지 공항에 반송되어 있으나 송하인이 지불을 거절하거나 또는 반송 후 15 일 이내에 당해 지불을 하지 않는 경우에는 에어프레미아는 운송장에 기재된 주소의 송하인에게 처분하는 취지를 10 일전에 통보하고 경매 또는 임의 매각에 의해 화물의 전부 또는 일부를 처분할 수 있다.</C.t>
              <C.t>7.3.3 목적지 공항 또는 화물이 반송된 지점에서 위 7.3.1의 나 항에서 정하는 바에 따라 화물을 매각하는 경우에는 에어프레미아는 당해 매각대금을 가지고 에어프레미아 및 타 운송기관에 대한 선불금, 비용 및 매각경비에 충당할 수 있으며 잔액이 있을 경우 보관하고 송하인의 지시를 기다린다. 매각대금이 부족한 경우 에어프레미아는 송하인에 대하여 부족액에 대한 채권을 가진다.</C.t>
            </C.content>
            <C.title>7.4 부패성 화물의 처분</C.title>
            <C.content>
              <C.t>부패성 화물이 에어프레미아의 관리하에 있는 동안, 운송이 지연되거나 또는 목적지에서 인도 되지 않거나 인도가 거절되거나 또는 기타의 사유로 인하여 부패할 우려가 있을 경우 에어프 레미아는 즉시 에어프레미아 및 기타 이해관계자들을 위하여 필요한 조치를 취한다. 이러한 조치에는 화물의 전부 또는 일부를 파기하거나, 송하인의 비용부담으로 송하인의 지시에 따라 조치를 취하거나, 송하인의 위험과 비용부담으로 화물의 전부 또는 일부를 보관하거나, 예고 없이 화물의 전부 또는 일부를 경매 또는 임의 매각 처분하는 것을 포함하나 이러한 것에 한하는 것은 아니며 당해 화물의 처분이 에어프레미아에 대한 송하인의 지불채무를 면제하는 것은 아니다.</C.t>
            </C.content>
            <C.titleMain>제 8 장 화물 수행인</C.titleMain>
            <C.content>
              <C.t>화물의 성격상, 또는 사람, 항공기, 타 화물 또는 기타 재산의 안전을 위하여 필요하다고 판단 되는 경우에는 에어프레미아는 송하인에게 당해 화물의 운송을 수행하는 목적으로 화물수행인의 탑승을 요청할 수 있다. 에어프레미아의 규정에 별도로 명시된 경우를 제외하고는 화물수행 인의 운송에는 에어프레미아의 국제 여객 운송약관이 적용된다.</C.t>
            </C.content>
            <C.titleMain>제 9 장 집하, 배달 및 시내화물 취급 서비스</C.titleMain>
            <C.title>9.1 화물은 화물의 출발지에서 목적지까지의 운송을 위하여 인수된다.</C.title>
            <C.title>9.2 그러나 송하인 또는 수하인의 요청에 따라 에어프레미아가 집하, 배달 및 시내화물취급서비스를 행하는 경우에는 다음의 규정이 적용된다.</C.title>
            <C.content>
              <C.t>9.2.1 집하, 배달 및 시내화물 취급서비스는 에어프레미아가 정하는 바에 따라 명시된 장소에서 별도의 요금 및 운송조건에 따라 실시된다.</C.t>
              <C.t>9.2.2 만약 집하, 배달 및 시내화물취급서비스를 에어프레미아가 행하는 경우 본 약관 제12장에서 정하는 책임조항이 동일하게 적용된다.</C.t>
            </C.content>
            <C.title>9.3 에어프레미아는 위 1, 2항 이외의 경우에 송하인 또는 수하인의 대리인으로서 그리고 송하인 또는 수하인의 비용부담으로 당해운송을 타 운송기관에 의뢰할 수 있다.</C.title>
            <C.content>
              <C.t>이 경우 당해운송과 관련하여 발생한 손해가 에어프레미아의 고의 또는 과실에 의하여 발생되었다고 증명되지 않는 한 에어프레미아는 여하한 책임도 지지 아니한다. 에어프레미아가 타 운송기관을 지명하는 경우 송하인 또는 수하인은 당해 운송을 실시하기 위하여 필요한 모든 권한을 에어프레미아에 위임한 것으로 간주하며 당해 권한위임에는 운송수단과 운송경로의 선택, 필요한 운송서류의 작성 및 수령(당해 운송서류에는 에어프레미아의 책임을 면제 또는 제한하는 조항을 둘 수 있음)과 운송장에 운송신고 가격이 금액으로 기재되어 있음에도 불구하고 “신고가격 없음(NVD: NO VALUE DECLARED)”으로 화물 운송을 의뢰할 수 있는 권한을 포함하되 여기에 한정된 것만은 아니다.</C.t>
            </C.content>
            <C.titleMain>제 10 장 연결 운송편</C.titleMain>
            <C.content>
              <C.t>하나의 운송장에 의하여 둘 이상의 운송인이 연결하여 행하는 운송은 단일 운송으로 간주된다.</C.t>
            </C.content>
            <C.titleMain>제 11 장 적용협약 및 규정</C.titleMain>
            <C.title>11.1 적용되는 국제협약</C.title>
            <C.content>
              <C.t>‘바르샤바 협약’이 적용되는 국제운송은 ‘바르샤바 협약’상의 책임규정 및 제한의 적용을 받고, ‘개정 바르샤바 협약’이 적용되는 국제운송은 ‘개정 바르샤바 협약’상의 책임규정 및 제한의 적용을 받으며, ‘몬트리올 협약’이 적용되는 국제운송에 대하여는 ‘몬트리올 협약’상의 책임규정 및제한의 적용을 받는다. 단, 그러한 협약들에 정의되지 않은 국제운송에 대하여는 에어프레미아의 운송약관이 적용된다.</C.t>
            </C.content>
            <C.title>11.2 적용법령 및 기타규정</C.title>
            <C.content>
              <C.t>11.1의 국제협약에 저촉되지 아니하는 한 에어프레미아의 모든 국제운송 및 운송과 관련된 모든 업무는 다음 각호에서 정하는 바에 따른다.</C.t>
              <C.t>11.2.1 적용법령, 정부규제, 명령 또는 지시</C.t>
              <C.t>11.2.2 에어프레미아의 국제화물운송약관, 적용 태리프 및 기타 제규정</C.t>
            </C.content>
            <C.titleMain>제 12 장 배상책임</C.titleMain>
            <C.title>12.1 책임의 한도</C.title>
            <C.content>
              <C.t>12.1.1 송하인은 에어프레미아에 화물의 운송을 의뢰할 때 화물의 운송가격이 KG당 22 SDR을 초과할 경우, 화물의 가격을 운송장에 신고할 수 있으며, 이 경우 종가요금을 지급하여야 한다. 송하인이 종가요금을 지급하지 않은 경우, 송하인은 여하한 경우에도 화물의 가격신고를 할 기회가 없었음을 주장할 수 없다.</C.t>
              <C.t>12.1.2 운송가격이 신고되고, 종가요금이 지급된 화물에 대한 에어프레미아의 배상책임은 신고된 가격을 한도로 실제로 입은 손해액을 배상하며 여하한 경우에도 운송장 상의 운송신고가격을 초과할 수 없다.</C.t>
              <C.t>12.1.3 운송장의 운송신고 가격이 “NVD (NO VALUE DECLARED: 운송신고가격 없음)”로 기재된 화물의 손해에 대한 에어프레미아의 배상책임 한도액은 실손액을 배상하나 여하한 경우에도 22 SDR/KG을 초과할 수 없다.</C.t>
              <C.t>12.1.4 송하인 또는 수하인은 모든 손해배상 청구에 있어서 실제 손해액을 증명해야만 한다.</C.t>
            </C.content>
            <C.title>12.2 책임의 제한</C.title>
            <C.content>
              <C.t>12.2.1 운송에 적용되는 협약에서 다르게 규정하고 있지 않는 이상, 에어프레미아의 운송 또는 운송과 관련된 업무로 인하여 발생하는 손해가 에어프레미아의 고의 또는 과실로 인하여 발생한 것이라고 입증되지 않는 한, 송하인, 수하인을 포함한 그 누구에게도 책임을 지지 아니한다.</C.t>
              <C.t>12.2.2 에어프레미아는 에어프레미아가 적용법령 및 정부의 규제, 명령, 지시를 준수함에 따라, 또는 송하인, 수하인 및 그 이외의 자가 동일한 적용법령 및 정부의 규제, 명령, 지시를 준수하지 않음으로써, 또는 에어프레미아가 관리, 통제할 수 없는 사유로 직접 또는 간접적으로 발생한 손해에 대하여 책임을 지지 않는다.</C.t>
              <C.t>12.2.3 화물에 손해가 발생하였을 경우, 에어프레미아의 배상책임한도액은 손해가 발생된 부분의 중량을 기준으로 산정된다. 단, 화물의 일부 손해가 동일 운송장상의 전체화물의 가치에 영향을 미치는 경우, 당해 화물의 총중량이 에어프레미아의 배상책임한도액을 산정하는데 있어서 고려된다. 위 규정과는 별개로, 미국을 출발지 또는 목적지로 하는 화물의 전부(또는 일부) 손해가 발생한 경우, 당해 화물의 운임을 계산하기 위하여 사용된 중량(일부손해의 경우에는 그에 따른 비율)이 에어프레미아의 배상책임한도액의 산정 기준이 된다.</C.t>
              <C.t>12.2.4 화물의 파손, 분실 또는 손상이 당해화물의 자체 결함이나 특성으로 인하여 발생된 경우 에어프레미아는 그 손해에 대한 책임을 지지 아니한다. 송하인 또는 수하인의 화물로 인하여 대인 또는 대물(항공기 포함) 손해를 입힌 경우, 송하인 또는 수하인은 그로 인하여 에어프레미아가 입은 모든 손실 및 비용을 에어프레미아에 배상하여야 한다. 에어프레미아는 대인 또는 대물손해를 일으킬 위험이 있다고 판단되는 화물은 언제든지 예고없이 공중투하 하거나 파기할 수 있으며 이 경우 이러한 조치에 대한 책임을 지지 아니한다.</C.t>
              <C.t>12.2.5 파손, 분실 또는 손상된 화물과 관련하여, 그 손해의 전부 또는 일부가 손해배상을 청구하는 자의 과실, 부당행위 또는 태만으로 인한 것이라면, 에어프레미아는 그 손해에 대하여 손해배상청구자의 과실비율에 따라 전부 또는 일부 면책된다.</C.t>
              <C.t>12.2.6 에어프레미아는 운송에 사용되는 항공기의 감항성 및 적합성에 대하여 운송계약상 어떠한 담보도 하지 아니한다.</C.t>
              <C.t>12.2.7 에어프레미아는 에어프레미아의 노선 이외에서 발생한 화물의 파손, 분실, 손상에 대하여는 책임을 지지 아니하며, 에어프레미아가 타운송인의 노선에서 운송을 위하여 운송장을 발행하는 경우에도 타 운송인의 대리인으로만 행위를 한다. 하지만 에어프레미아가 운송계약상 최초 운송인 또는 최종 운송인인 경우, 송하인 또는 수하인은 화물의 파손, 분실, 손상에 대하여 에어프레미아에 손해배상을 청구할 권리를 가진다.</C.t>
              <C.t>12.2.8 에어프레미아는 운송중인 동물의 자연사, 동물자신의 또는 다른 동물의 행동으로 인한 죽음 또는 상해, 또는 동물의 상태, 성질, 습성 또는 안전상의 이유로 인하여 발생한 동물의 죽음이나 상해에 대하여 책임을 지지 아니한다.</C.t>
              <C.t>12.2.9 에어프레미아는 여하한 경우에도 동물의 상태, 행위, 성질, 습성 또는 타 화물의 상태에 기인하는 화물 수행인의 사망 또는 상해에 대하여는 책임을 지지 아니한다.</C.t>
              <C.t>12.2.10 에어프레미아는 기상, 기온, 고도의 변화, 죽음, 일반적인 노출 또는 환적시간으로 인하여 품질이 저하되거나 부패할 우려가 있는 화물에 대하여, 해당화물의 품질저하 또는 부패로 인한 손해에 대한 책임을 지지 않는 조건으로 운송을 인수한다.</C.t>
              <C.t>12.2.11 에어프레미아는 운송에 기인하여 발생하는 간접손해 또는 특별손해에 대하여 에어프레미아가 그 손해의 발생을 사전에 알고 있었는지 여부에 관계없이 여하한 경우에도 책임을 지지 아니한다.</C.t>
              <C.t>12.2.12 본 약관에서 정하고 있는 에어프레미아의 책임제한 및 면책은 에어프레미아 뿐 아니라, 에어프레미아의 대표, 임직원 및 대리인과 에어프레미아가 사용하고 있는 항공기의 소유자(소유자의 대표, 임직원 및 대리인)에게도 동일하게 적용된다. 또한, 에어프레미아, 에어프레미아의 대표, 임직원 및 대리인과 에어프레미아가 사용하고 있는 항공기의 소유자 (소유자의 대표, 임직원 및 대리인)로부터 배상 받을 수 있는 총액은 본 약관에서 정하고 있는 에어프레미아의 배상책임한도액을 초과하지 못한다.</C.t>
            </C.content>
            <C.title>12.3 손해발생 통보기한</C.title>
            <C.content>
              <C.t>12.3.1 화물을 인도받을 권리를 가진 자가 이의 없이 화물을 인수하는 것은 화물이 양호한 상태로 운송계약에 따라 인도된 것으로 간주된다.</C.t>
              <C.t>12.3.2 화물의 분실, 손상 또는 지연의 경우에는 그 화물을 인도받을 정당한 권리를 가진 자가 아래의 기준에 따라 운송인에게 배상청구 명세를 서면으로 제출하여야 한다.</C.t>
              <C.t1>12.3.2.1 손상 또는 일부 분실의 경우, 발견 즉시 그리고 화물을 인수한 날로부터 14 일 이내</C.t1>
              <C.t1>12.3.2.2 지연의 경우, 화물을 인도받을 권리를 가진 자가 그 화물을 처분할 수 있는 날로부터 21 일 이내</C.t1>
              <C.t1>12.3.2.3 전부분실을 포함한 인도불능의 경우 운송장 발행일로부터 120 일 이내</C.t1>
              <C.t1>12.3.2.4 사람의 사망 또는 상해에 대한 손해발생의 통보를 제외하고는 위 (1)~(3)호에서 정하는 이외의 모든 손해 발생의 통보는 운송장 발생일로부터 270 일 이내</C.t1>
            </C.content>
            <C.title>12.4 제소시한</C.title>
            <C.content>
              <C.t>에어프레미아의 책임에 대하여 소를 제기할 수 있는 권리는 목적지 공항에 도착한 날로부터, 항공기가 도착되었어야 할 날로부터 또는 운송이 중지된 날 가운데 가장 늦게 도래한 날로부터 2 년 이내에 재판상 청구가 이루어지지 않는 한 소멸된다.</C.t>
            </C.content>
            <C.title>12.5 법령우선</C.title>
            <C.content>
              <C.t>본 약관, 운송장 또는 기타 적용가능한 태리프상의 규정은 적용법령, 정부규제, 명령 또는 지시를 위반하지 않는 범위 내에서 유효하며 어느 한 조항이 무효가 되어도 타 조항에 영향을 주는 것은 아니다.</C.t>
            </C.content>
            <C.title>12.6 개정 및 권리 포기</C.title>
            <C.content>
              <C.t>에어프레미아의 대표, 임직원 또는 대리인은 적절한 절차에 의하지 않고는 본 약관, 운송계약 또는 기타 적용 가능한 태리프의 여하한 규정을 변경, 수정 또는 철회하지 못하며, 여하한 권리를 포기할 권한을 갖지 아니한다.</C.t>
            </C.content>
            <C.titleMain>제 13 장 약관의 정본</C.titleMain>
            <C.content>
              <C.t>본 약관은 영문판으로 발행될 수 있으며, 이러한 경우 국문판 약관과 일치하지 않는 것이 있다면, 국문판 약관이 우선하여 적용된다.</C.t>
            </C.content>
            <C.linkm className="mt30">
              {/* <a href="https://www.smartport.kr/smartport/resources/images/design/airpremia/footer_internationalCondition.pdf" target="_blank"> */}
              <a href="/document/footer_internationalCondition.pdf" download>
                GENERAL CONDITIONS OF CARRIAGE FOR INTERNATIONAL CARGO <Linkblue />
              </a>
            </C.linkm>
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
  titleMain: styled.p`
    font-size: 24px;
    font-weight: 700;
    line-height: 2em;
    margin-top: 100px;
    &:first-child {
      margin-top: 0;
    }
    @media only screen and (max-width: 767px){
      font-size: 22px;
      letter-spacing: -0.4px;
      margin-top: 60px;
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
  content: styled.div`
    margin-top: 20px;
    text-align: justify;
    @media only screen and (max-width: 767px){
      letter-spacing: -0.28px;
    }
  `,
  t: styled.div`
    font-size: 18px;
    line-height: 2em;
    @media only screen and (max-width: 767px){
      font-size: 14px;
      font-weight: 300;
    }
  `,
  t1: styled.div`
    padding-left: 15px;
    font-size: 18px;
    line-height: 2em;
    @media only screen and (max-width: 767px){
      font-size: 14px;
      font-weight: 300;
    }
  `,
  t2: styled.div`
    padding-left: 30px;
    font-size: 18px;
    line-height: 2em;
    @media only screen and (max-width: 767px){
      font-size: 14px;
      font-weight: 300;
    }
  `,
  linkm: styled.p`
    margin-top: 20px;
    a,
    span{
      color: ${BLUE1};
      font-size: 18px;
      font-weight: 400;
      cursor: pointer;
    }
    @media only screen and (max-width: 767px){
      margin-top: 10px;
      a,
      span{
        font-size: 14px;
        font-weight: 300;
      }
    }
  `,
}


export default International;