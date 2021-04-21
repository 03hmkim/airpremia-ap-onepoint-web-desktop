import styled from 'styled-components';
import {
  ComTitle,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY8,

} from '@airpremia/cdk/styles/colors';


function PersonalInfo(){
  return (
    <Container>
      <ComTitle
        title="개인정보 처리방침"
        description = '2020.5.31'
      />
      <C.wrap>
        <C.sb>
          <C.p>본 개인정보 처리방침은 ㈜에어프레미아(이하 에어프레미아)의 상용고객우대 프로그램인 에어프레미아 멤버십에 가입한 회원, 에어프레미아가 운영하는 인터넷 웹사이트</C.p>
          <C.p>(AirPREMIA.com) 및 마이크로사이트(모바일 사이트 포함)의 회원 및 비회원과 에어프레미아의 서비스센터, 공항지점(또는 도심공항터미널), 시내지점(위탁영업소 포함)을 이용하는</C.p>
          <C.p> 정보주체의 개인정보 처리 및 보호와 정보통신망 안전성확보에 대하여 규정하고 있습니다.</C.p>
          <C.p>에어프레미아는 정보주체의 개인정보를 보호하고, 불법적인 개인정보유출 및 손해 발생을 방지함에 최선의 노력을 다하겠습니다. 에어프레미아의 개인정보 처리방침은 법률의 제개정 </C.p>
          <C.p>및 정부지침의 변경 또는 에어프레미아 내부 방침의 변경에 따라 바뀔 수 있으므로 수시로 확인하여 주시기 바랍니다. </C.p><br />
          <br />
          <C.p><C.b>“개인정보”란 무엇을 의미합니까?</C.b></C.p>
          <C.p>개인정보는 식별된 또는 식별 가능한 개인과 직간접적으로 연관된 모든 정보를 의미합니다.</C.p>
          <br />
          <br />
          <C.p><C.b>개인정보 관리자란 누구입니까?</C.b></C.p>
          <C.p>에어프레미아, 서울시 영등포구 국제금융로 8길 31, 10층 , (이하 에어프레미아 또는 당사)은 이 방침에서 언급하는 개인 정보와 관련된 처리 활동의 개인정보 관리자 역할을 합니다.</C.p>
          <C.p>이는 에어프레미아가 본 방침에서 언급한 정보 처리의 목적과 수단을 결정한다는 것을 의미합니다.</C.p>
          <br />
          <br />
          <C.p>개인정보는 에어프레미아를 통해 예약한 항공편을 운항하는 다른 항공사, 예약 시스템 제공 업체, 호텔, 렌터카 등의 다른 회사의 목적과 수단으로 정보가 처리될 수도 있습니다.</C.p>
          <C.p>그런 경우, 해당 회사들이 개인정보 관리자 역할을 하게 되며, 이때 해당 회사의 개인정보 처리방침이 적용됩니다. 에어프레미아가 아닌 다른 항공사가 사용자의 개인정보를 처리하는</C.p>
          <C.p> 경우, IATA 개인정보 안내 에서 해당 항공사의 개인정보 관련 정책을 확인할 수 있습니다.</C.p>
          <br />
          <br />
          <C.p><C.b>개인정보 처리방침의 범위는 어떻게 됩니까?</C.b></C.p>
          <C.p>본 개인정보 처리방침은 개인정보 주체와 관련된 개인정보 처리 및 보호에 대해 설명합니다.</C.p>
          <C.p>- 승객</C.p>
          <C.p>- 상용고객우대 프로그램(스카이패스) 회원</C.p>
          <C.p>- 에어프레미아 웹사이트(koreanair.com), 모바일 사이트(m.koreanair.com) 또는 모바일 애플리케이선 사용자</C.p>
          <C.p>- 에어프레미아 서비스센터 또는 지점 이용자</C.p>
          <br />
          <br />
          <br />
          <C.p>지정하여 개인정보와 관련된 문의를 처리하고, 개인정보 주체의 권리를 보호하고 있습니다. 에어프레미아의 개인정보 보호책임자에 대한 자세한 내용은 제5조 3항의 “에어프레미아 개인정보 보호책임자” 란을 참조하시기 바랍니다.</C.p>
          <C.p>개인정보 관련 문의 또는 권리 행사 요청 시 정보 처리를 위해 정보 주체를 식별할 수 있는 정보를 함께 보내주셔야 합니다. 보내주신 정보는 요청 처리를 위한 본인 확인 용도로만 사용</C.p>
          <C.p>되며, 정보 주체 식별 정보가 없을 경우 에어프레미아는 이를 요청하는 이메일을 발송할 수 있습니다.</C.p>
          <br />
          <br />
          <C.ul>
            <C.li>영문 성명</C.li>
            <C.li>요청 사항</C.li>
            <C.li>대리인이 신청할 경우, 본인이 서명한 위임장</C.li>
            <C.li>회원의 경우, 에어프레미아 회원번호</C.li>
          </C.ul>
          <C.span>*에어프레미아 회원번호가 기억나지 않을 경우, 아래 정보를 보내주시기 바랍니다.</C.span>
          <C.lft>- 생년월일</C.lft>
          <C.lft>- 주소</C.lft>
          <C.lft>- 휴대폰 번호</C.lft>
          <C.lft>- 탑승 정보(편명, 날짜, 노선 등)</C.lft>
          <br />
          <br />
          <C.p>또한 에어프레미아는 EU GDPR* 제 17조에 따라 다음의 사유에 해당하는 경우 일부 개인정보를 삭제하지 않을 수 있음을 안내 드립니다.</C.p>
          <C.p>* EU GDPR: 유럽연합 일반 개인정보</C.p>
          <br />
          <br />
          <C.p>보호법(General Data Protection Regulation)</C.p>
          <C.p>법적 의무 이행을 위해 개인정보처리가 필요한 경우</C.p>
          <C.ul>
            <C.li>법적 청구권의 행사나 방어를 위해</C.li>
            <C.li>개인정보처리가 필요한 경우</C.li>
          </C.ul>
        </C.sb>  
      </C.wrap>
    </Container>
  );
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
  title: styled.h4`
    font-size: 22px;
    font-weight: bold;
  `,
  sub: styled.h5`
    margin-top: 60px;
    font-size: 18px;
    font-weight: bold;
  `,
  content: styled.div`
    margin-top: 12px;
  `,
  sb: styled.div`
    margin-top: 60px;
  `,
  p: styled.p`
    font-size: 16px;
    color: ${DARK_GRAY1};
    line-height: 36px;
  `,
  span: styled.p`
    margin-top: 10px;
    font-size: 16px;
    color: ${DARK_GRAY1};
    line-height: 1.8;
  `,
  b: styled.p`
    font-weight: bold;
  `,
  ul: styled.ul`
    
  `,
  li: styled.li`
    margin-bottom: 15px;
    padding-left: 10px;
    position: relative;
    &::before{
      content:"";
      width: 4px;
      height: 4px;
      top: 5px;
      left: 0px;
      text-indent: -9999px;
      display: block;
      position: absolute;
      background-color: ${DARK_GRAY1};
      border-radius: 50%
    }
    &:first-child{
      margin-top: 10px;
    }
    &:last-child{
      margin-bottom: 0px;
    }
  `,
  rf: styled.p`
    font-size: 14px;
    color: ${LIGHT_GRAY8};
    margin-top: 20px;
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
  ntg: styled.p`
    font-size: 14px;
    color: ${LIGHT_GRAY8};
    margin-top: 15px;
  `,
  lft: styled.p`
    font-size: 16px;
    margin: 10px 0px;
    padding-left: 10px;
    line-height: 1.8;
    &first-child{
      margin-top: 0px;
    }
  `,
}


export default PersonalInfo;