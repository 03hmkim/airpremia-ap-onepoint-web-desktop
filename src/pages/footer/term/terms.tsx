import styled from 'styled-components';
import {
  ComTitle,
  ListGlobal,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';


function Terms(){
  return (
    <Container>
      <ComTitle
        title="이용약관"
      />
      <S.container>
        <C.wrap>
          <C.body>
            <C.titleMain>제1장 총칙</C.titleMain>
            <C.m60>
              <C.title>제1조 (목적)</C.title>
            </C.m60>
            <C.m30>
              이 약관은 에어프레미아 주식회사(이하 “에어프레미아라 한다)가 운영하는 에어프레미아 웹에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 에어프레미아와 이용자의 권리․의무 및 책임사항을 규정함을 목적으로 합니다.
            </C.m30>
            <C.m100>
              <C.title>제2조 (정의)</C.title>
            </C.m100>
            <C.m30>
              <ListGlobal level="fst" body={
                <p>“에어프레미아 웹”이란 에어프레미아가 서비스를 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용해 재화 등을 거래할 수 있도록 설정한 가상의 영업장(웹, 어플리케이션)을 말합니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>“이용자”란 “에어프레미아 웹”에 접속하여 이 약관에 따라 에어프레미아가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>“회원”이라 함은 “에어프레미아 웹”에 회원등록을 한 자로서, 계속적으로 에어프레미아가 제공하는 서비스를 이용할 수 있는 자를 말합니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>“비회원”이라 함은 회원에 가입하지 않고 에어프레미아가 제공하는 서비스를 이용하는 자를 말합니다.</p>
              }/>
            </C.m30>
            <C.m100>
              <C.title>제3조 (약관 등의 명시와 설명 및 개정)</C.title>
            </C.m100>
            <C.m30>
              <ListGlobal level="fst" body={
                <p>에어프레미아는 이 약관의 내용과 상호 및 대표자 성명, 영업장 소재지 주소, 연락처(전화번호, 팩스번호 등), 사업자등록번호, 통신판매업 신고번호, 개인정보관리책임자등을 이용자가 쉽게 알 수 있도록 에어프레미아 웹의 초기 서비스화면에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>에어프레미아는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「방문판매 등에 관한 법률」, 「소비자기본법」 등 관련 법을 위배하지 않는 범위에서 이.p 약관을 개정할 수 있습니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>에어프레미아가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 에어프레미아 웹의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다.  이 경우 에어프레미아는 개정 전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>에어프레미아가 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정 전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 공지기간 내에 에어프레미아에 송신하여 동의를 받은 경우에는 개정약관 조항이 적용됩니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자 보호지침 및 관계법령 또는 상관례에 따릅니다.</p>
              }/>
            </C.m30>
            <C.m100>
              <C.title>제4조 (서비스의 제공 및 변경)</C.title>
            </C.m100>
            <C.m30>
              <ListGlobal level="fst" body={
                <p>에어프레미아 웹은 다음과 같은 업무를 수행합니다.</p>
              }/>
              <ListGlobal level="scd" body={
                <p>항공권 예약 및 구매에 관련된 서비스</p>
              }/>
              <ListGlobal level="scd" body={
                <p>에어프레미아가 제공하는 서비스 안내</p>
              }/>
              <ListGlobal level="scd" body={
                <p>기타 에어프레미아가 정하는 업무</p>
              }/>
              <ListGlobal level="fst" body={
                <p>에어프레미아는 필요한 경우 서비스의 내용을 임의로 추가, 조정 등 변경하여 적용할 수 있습니다.</p>
              }/>
            </C.m30>
            <C.m100>
              <C.title>제5조 (서비스의 중단)</C.title>
            </C.m100>
            <C.m30>
              <ListGlobal level="fst" body={
                <p>에어프레미아는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신  두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>에어프레미아는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상하지 아니합니다. 단, 에어프레미아가 고의 또는 과실이 있는 경우에는 그러하지 아니합니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>사업종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로 서비스를 제공할 수 없게 되는 경우에는 에어프레미아는 제8조에 정한 방법으로 이용자에게 통지하고 당초 에어프레미아에서 제시한 조건에 따라 소비자에게 보상합니다. 다만, 에어프레미아가 보상기준 등을 고지하지 아니한 경우에는 이용자들의 마일리지 또는 적립금 등을 에어프레미아에서 통용되는 통화가치에 상응하는 현물 또는 현금으로 이용자에게 지급합니다.</p>
              }/>
            </C.m30>
            <C.m100>
              <C.title>제6조 (회원가입)</C.title>
            </C.m100>
            <C.m30>
              <ListGlobal level="fst" body={
                <p>이용자는 에어프레미아가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>에어프레미아는 이용자가 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.</p>
              }/>
              <ListGlobal level="scd" body={
                <p>가입신청자가 이 약관 제7조제3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 다만 제7조제3항에 의한 회원자격 상실 후 3년이 경과한 자로서 “몰”의 회원재가입 승낙을 얻은 경우에는 예외로 한다.</p>
              }/>
              <ListGlobal level="scd" body={
                <p>등록 내용에 허위, 기재누락, 오기가 있는 경우</p>
              }/>
              <ListGlobal level="scd" body={
                <p>기타 회원으로 등록하는 것이 “몰”의 기술상 현저히 지장이 있다고 판단되는 경우</p>
              }/>
              <ListGlobal level="fst" body={
                <p>회원가입계약의 성립 시기는 에어프레미아의 승낙이 회원에게 도달한 시점으로 합니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>회원은 회원가입 시 등록한 사항에 변경이 있는 경우, 즉시 에어프레미아에게 회원정보 변경의 방법으로 그 변경사항을 알려야 합니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>회원가입 신청 시에 기입한 모든 정보는 실제 정보인 것으로 간주하며 실제 정보를 입력하지 않거나 변경을 알리지 않음으로 인해 발생하는 불이익은 회원이 부담하게 됩니다.</p>
              }/>
            </C.m30>
            <C.m100>
              <C.title>제7조 (회원 탈퇴 및 자격 상실 등)</C.title>
            </C.m100>
            <C.m30>
              <ListGlobal level="fst" body={
                <p>회원은 에어프레미아에 언제든지 탈퇴를 요청할 수 있으며 에어프레미아는 즉시 회원탈퇴를 처리합니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>회원이 다음 각 호의 사유에 해당하는 경우, 에어프레미아는 회원자격을 제한 및 정지시킬 수 있습니다.</p>
              }/>
              <ListGlobal level="scd" body={
                <p>회원이 사망할 경우</p>
              }/>
              <ListGlobal level="scd" body={
                <p>가입 신청 시 허위 내용을 기재하거나 2개 이상의 ID로 이중 등록한 경우</p>
              }/>
              <ListGlobal level="scd" body={
                <p>다른 사람의 에어프레미아 웹 이용을 방해하거나 그 정보를 도용하는 등 부정한 행위를 한 경우</p>
              }/>
              <ListGlobal level="scd" body={
                <p>에어프레미아 웹을 통해 구입한 항공권 대금의 지급을 거부하거나 기타 에어프레미아에서 제공한 서비스를 이용하고 이에 대한 채무를 불이행한 경우</p>
              }/>
              <ListGlobal level="fst" body={
                <p>에어프레미아가 회원 자격을 제한․정지 시킨 후, 동일한 행위가 2회 이상 반복되거나 30일 이내에 그 사유가 시정되지 아니하는 경우 에어프레미아는 회원자격을 상실시킬 수 있습니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>에어프레미아가 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소 전에 최소한 30일 이상의 기간을 정하여 소명할 기회를 부여합니다.</p>
              }/>
            </C.m30>
            <C.m100>
              <C.title>제8조 (회원에 대한 통지)</C.title>
            </C.m100>
            <C.m30>
              <ListGlobal level="fst" body={
                <p>에어프레미아가 회원에 대한 통지를 하는 경우, 회원이 에어프레미아에 회원가입 시 제출한 전자우편주소로 할 수 있습니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>에어프레미아는 불특정다수 회원에 대한 통지의 경우 1주일이상 에어프레미아 웹에 공지함으로서 개별 통지에 갈음할 수 있습니다. 다만, 회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 개별통지를 합니다.</p>
              }/>
            </C.m30>
            <C.m100>
              <C.title>제9조 (구매신청과 계약의 성립)</C.title>
            </C.m100>
            <C.m30>
              <ListGlobal level="fst" body={
                <p>에어프레미아 웹 이용자는 에어프레미아가 정한 방식에 따라 항공권 등의 구매를 신청할 수 있습니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>에어프레미아는 전 항과 같은 구매신청에 대하여 다음 각 호에 해당하면 승낙하지 않을 수 있습니다.</p>
              }/>
              <ListGlobal level="scd" body={
                <p>신청 내용에 허위, 기재누락, 오기가 있는 경우</p>
              }/>
              <ListGlobal level="scd" body={
                <p>기타 구매신청에 승낙하는 것이 에어프레미아 영업, 기술상 현저히 지장이 있다고 판단하는 경우</p>
              }/>
              <ListGlobal level="fst" body={
                <p>에어프레미아의 승낙이 제11조제1항의 수신확인통지형태로 이용자에게 도달한 시점에 계약이 성립한 것으로 봅니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>에어프레미아의 승낙의 의사표시에는 이용자의 구매 신청에 대한 확인, 구매신청의 정정 취소 등에 관한 정보 등을 포함하여야 합니다.</p>
              }/>
            </C.m30>
            <C.m100>
              <C.title>제10조 (지급방법)</C.title>
            </C.m100>
            <C.m30>
              <ListGlobal level="fst" body={
                <p>에어프레미아에서 구매한 재화 또는 용역에 대한 대금지급방법은 다음 각 호의 방법중 가용한 방법으로 할 수 있습니다.</p>
              }/>
              <ListGlobal level="scd" body={
                <p>온라인 계좌이체</p>
              }/>
              <ListGlobal level="scd" body={
                <p>신용카드 결제</p>
              }/>
              <ListGlobal level="scd" body={
                <p>에어프레미아가 지급한 포인트에 의한 결제</p>
              }/>
              <ListGlobal level="scd" body={
                <p>기타 에어프레미아가 정한 결제 방식</p>
              }/>
            </C.m30>
            <C.m100>
              <C.title>제11조 (수신확인통지․구매신청 변경 및 취소)</C.title>
            </C.m100>
            <C.m30>
              <ListGlobal level="fst" body={
                <p>에어프레미아는 이용자의 구매신청이 있는 경우 이용자에게 수신확인통지를 합니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>수신확인통지를 받은 이용자는 의사표시의 불일치 등이 있는 경우에는 수신확인통지를 받은 후 즉시 구매신청 변경 및 취소를 요청할 수 있고 에어프레미아는 이용자의 요청이 있는 경우에는 지체 없이 그 요청에 따라 처리하여야 합니다.</p>
              }/>
            </C.m30>
            <C.m100>
              <C.title>제12조 (개인정보보호)</C.title>
            </C.m100>
            <C.m30>
              <ListGlobal level="fst" body={
                <p>개인정보보호에 대한 상세한 내용은 에어프레미아 웹에 게시된 개인정보처리방침에 규정한 바에 따릅니다.</p>
              }/>
            </C.m30>
            <C.m100>
              <C.title>제13조 (에어프레미아의 의무)</C.title>
            </C.m100>
            <C.m30>
              <ListGlobal level="fst" body={
                <p>에어프레미아는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 재화․용역을 제공하는데 최선을 다하여야 합니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>에어프레미아는 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보 보호를 위한 보안 시스템을 갖추어야 합니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>에어프레미아는 상품이나 용역에 대하여 「표시․광고의 공정화에 관한 법률」 제3조 소정의 부당한 표시․광고행위를 하지 않습니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>에어프레미아는 이용자가 원하지 않는 영리목적의 광고성 전자우편을 발송하지 않습니다.</p>
              }/>
            </C.m30>
            <C.m100>
              <C.title>제14조 (회원의 ID 및 비밀번호에 대한 의무)</C.title>
            </C.m100>
            <C.m30>
            <ListGlobal level="fst" body={
                <p>개인정보처리방침에 규정된 이용을 제외한 ID와 비밀번호에 대한 관리책임은 회원에게 있습니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>회원은 자신의 ID 및 비밀번호를 제3자에게 이용하게 해서는 안됩니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>회원이 자신의 ID 및 비밀번호를 도난당하거나 제3자가 사용하고 있음을 인지한 경우에는 바로 에어프레미아에 통보하고 에어프레미아의 안내가 있는 경우에는 그에 따라야 합니다.</p>
              }/>
            </C.m30>
            <C.m100>
              <C.title>제15조 (이용자의 의무)</C.title>
            </C.m100>
            <C.m30>
              <ListGlobal level="fst" body={
                <p>이용자는 다음 행위를 하여서는 안 됩니다.</p>
              }/>
              <ListGlobal level="scd" body={
                <p>신청 또는 변경시 허위 내용의 등록</p>
              }/>
              <ListGlobal level="scd" body={
                <p>타인의 정보 도용</p>
              }/>
              <ListGlobal level="scd" body={
                <p>에어프레미아에 게시된 정보의 변경</p>
              }/>
              <ListGlobal level="scd" body={
                <p>에어프레미아가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</p>
              }/>
              <ListGlobal level="scd" body={
                <p>에어프레미아 기타 제3자의 저작권 등 지적재산권에 대한 침해</p>
              }/>
              <ListGlobal level="scd" body={
                <p>에어프레미아 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</p>
              }/>
              <ListGlobal level="scd" body={
                <p>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 몰에 공개 또는 게시하는 행위</p>
              }/>
            </C.m30>
            <C.m100>
              <C.title>제16조 (에어프레미아 웹과 연결 웹 간의 관계)</C.title>
            </C.m100>
            <C.m30>
              <ListGlobal level="fst" body={
                <p>에어프레미아 웹과 다른 웹이 하이퍼링크(예: 하이퍼링크의 대상에는 문자, 그림 및 동화상 등이 포함됨)방식 등으로 연결된 경우, 에어프레미아는 연결된 웹이 독자적으로 제공하는 재화 등에 의하여 이용자와 행하는 거래에 대해서는 그 거래에 대한 보증 책임을 지지 않습니다.</p>
              }/>
            </C.m30>
            <C.m100>
              <C.title>제17조 (저작권의 귀속 및 이용제한)</C.title>
            </C.m100>
            <C.m30>
              <ListGlobal level="fst" body={
                <p>에어프레미아가 작성한 저작물에 대한 저작권 기타 지적재산권은 에어프레미아에 귀속합니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>이용자는 에어프레미아를 이용함으로써 얻은 정보 중 에어프레미아에게 지적재산권이 귀속된 정보를 에어프레미아의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.</p>
              }/>
            </C.m30>
            <C.m100>
              <C.title>제18조(분쟁해결)</C.title>
            </C.m100>
            <C.m30>
              <ListGlobal level="fst" body={
                <p>에어프레미아는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>에어프레미아는 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보합니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>에어프레미아와 이용자 간에 발생한 전자상거래 분쟁과 관련하여 이용자의 피해구제신청이 있는 경우에는 공정거래위원회 또는 시·도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.</p>
              }/>
            </C.m30>
            <C.m100>
              <C.title>제19조 (재판권 및 준거법)</C.title>
            </C.m100>
            <C.m30>
              <ListGlobal level="fst" body={
                <p>에어프레미아와 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 서울중앙법원에 제기합니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>에어프레미아와 이용자 간에 제기된 전자상거래 소송에는 대한민국의 법을 적용합니다.</p>
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
    font-size: 18px;
    line-height: 2em;
    @media only screen and (max-width: 767px){
      margin-top: 20px;
      font-size: 14px;
      letter-spacing: -0.28px;
      font-weight: 300;
    }
  `,
  titleMain: styled.p`
    font-size: 24px;
    font-weight: 700;
    line-height: 2em;
    margin-top: 30px;
    &:first-child {
      margin-top: 0;
    }
    @media only screen and (max-width: 767px){
      font-size: 22px;
      letter-spacing: -0.4px;
      margin-top: 20px;
    }
  `,
  title: styled.p`
    font-size: 21px;
    font-weight: 700;
    line-height: 2em;
    @media only screen and (max-width: 767px){
      font-size: 16px;
      letter-spacing: -0.32px;
    }
  `,
}


export default Terms;