import styled from 'styled-components';
import {
  ComTitle,
  ListGlobal,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import Linkblue from 'public/images/support/btn_txt_link_blue.svg';
//import fileDownload from 'file-saver';//☆추가


function DamageRelief(){
  return (
    <Container>
      <ComTitle
        title="피해구제 계획"
      />
      <S.container>
        <C.wrap>
          <C.body>
            <C.title>항공교통 이용자 피해구제 안내</C.title>
            <C.m60>
              <C.sub>1. 법적근거 : 항공사업법 제61조 및 동법 시행규칙 제64조</C.sub>
            </C.m60>
            <C.m100>
              <C.sub>2. 피해구제 대상</C.sub>
            </C.m100>
            <C.content>
              <ListGlobal level="fst" body={
                <p>항공교통사업자의 운송 불이행 및 지연</p>
              }/>
              <ListGlobal level="fst" body={
                <p>위탁수하물의 분실 및 파손</p>
              }/>
              <ListGlobal level="fst" body={
                <p>항공권 초과 판매</p>
              }/>
              <ListGlobal level="fst" body={
                <p>취소 항공권의 대금환급 지연</p>
              }/>
              <ListGlobal level="fst" body={
                <p>탑승장, 항공편 등 관련 정보 미제공으로 인한 탑승 불가</p>
              }/>
              <ListGlobal level="fst" body={
                <p>항공사 과실로 인한 항공마일리지의 누락</p>
              }/>
              <ListGlobal level="fst" body={
                <p>항공사의 사전고지 없이 발생한 항공마일리지의 소멸</p>
              }/>
              <ListGlobal level="fst" body={
                <p>「교통약자의 이동편의 증진법」제2조 제7호에 따른 이동편의시설의 미설치로 인한 항공기의 탑승장애</p>
              }/>
              <C.spc><C.t>※단, 기상악화, 안전운항을 위한 예견하지 못한 정비, 천재지변 또는 항공기의 접속관계 등의 불가항력적인 사유로 발생한 피해는 구제대상에서 제외</C.t></C.spc>
            </C.content>
            <C.m100>
              <C.sub>3. 피해구제 접수처의 설치 및 운영</C.sub>
            </C.m100>
            <C.content>
              <C.t>1) 피해구제 접수처 및 문의처</C.t>
                <C.special><ListGlobal level="fst" body={
                  <p>이메일 접수 및 문의 : contact@airpremia.com</p>
                }/></C.special>
                <C.special><ListGlobal level="fst" body={
                  <p>전화 문의 : 02-6953-6115</p>
                }/></C.special>
                <C.special><ListGlobal level="fst" body={
                  <p>우편 접수 : 서울특별시 강서구 공항대로 248, 4층, 에어프레미아</p>
                }/></C.special>
                <C.special><ListGlobal level="fst" body={
                  <p>방문 접수 : 서울특별시 강서구 공항대로 248, 4층, 에어프레미아</p>
                }/></C.special>
              <C.t className="mt30">2) 처리기한 : 피해구제신청 접수일로부터 14일 이내 결과 통지 (다만, 피해조사를 위한 번역이 필요한 경우 등 특별한 사유가 있는 경우에는 피해구제 신청 접수일로부터 60일 이내 결과 통지 및 통지서에 그 사유 명시)</C.t>
              <C.t>3) 처리 결과 안내를 위한 정보 제공 방법 : 전화, 문자메시지, 이메일, 우편 중 신청서 작성 시 신청인이 선택 가능</C.t>
              <C.t>4) 이의신청 방법 및 절차 : 처리결과 통지 후 고객이 접수번호, 고객명을 포함하여 이메일 또는 우편으로 이의신청 시 항공사에서 한국소비자원으로 이송</C.t>
              <C.t>5) 피해구제 업무 담당부서의 역할 및 임무 :</C.t>
              <C.special><ListGlobal level="fst" body={
                <p>공항지점 : 피해구제신청 접수</p>
              }/></C.special>
              <C.special><ListGlobal level="fst" body={
                <p>예약센터 : 피해구제신청 접수 및 처리</p>
              }/></C.special>
            </C.content>
            <C.m100>
              <C.sub>4. 피해구제 처리 절차도</C.sub>
            </C.m100>
            <C.content>
              <C.t>step1) <span className="blue">이용고객:</span> 피해구제 신청서 작성 및 제출</C.t>
              <C.t>step2) 에어프레미아: 피해구제 신청 접수 및 확인증 교부</C.t>
              <C.t>step3) 에어프레미아: 피해발생 경위 조사</C.t>
              <C.t>step4) 에어프레미아: 관련 법령 및 약관 등 처리방법 검토</C.t>
              <C.t>step5) 에어프레미아: 처리결과 고객 통지</C.t>
              <C.t>step6) 에어프레미아: 고객 요청 또는 이의 신청시 한국 소비자원 이송</C.t>
              <C.t>* 상기 처리 기한 내에 피해구제 신청처리가 곤란하거나 고객의 요청이 있을 경우에는, 항공사가 피해구제신청서를 「소비자기본법」에 따라 한국소비자원에 이송 처리.</C.t>
            </C.content>
              <C.linkm>
              {/* <a href="https://www.smartport.kr/smartport/resources/images/design/airpremia/footer_damageRelief.pdf" target="_blank"> */}
                <a href="/document/footer_damageRelief.pdf" download>
                  항공교통 이용자 피해구제 신청서 다운로드<Linkblue />
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
  title: styled.h4`
    font-size: 24px;
    font-weight: 700;
    line-height: 2em;

    @media only screen and (max-width: 767px) {
      font-size: 22px;
      line-height: 28px;
    }
  `,
  sub: styled.h5`
    
    margin-bottom: 10px;
    font-size: 21px;
    font-weight: 700;
    line-height: 2em;

    @media only screen and (max-width: 767px) {
      margin-top: 60px;
      font-size: 16px;
    }
  `,
  content: styled.div`
    margin-top: 30px;

    .blue{
      color: ${BLUE1};
    }

    @media only screen and (max-width: 767px) {
      margin-top: 20px;
    }
  `,
  t: styled.div`
    font-size: 18px;
    color: ${DARK_GRAY1};
    line-height: 2em;

    @media only screen and (max-width: 767px) {
      font-size: 14px;
    }
  `,
  spc: styled.p`
    padding-left: 10px;
  `,
  special: styled.p`
    padding-left: 20px;
  `,
  t1: styled.div`
    font-size: 18px;
    color: ${DARK_GRAY1};
    line-height: 2em;
  `,
  t2: styled.div`
    padding-left: 30px;
    font-size: 14px;
    color: ${DARK_GRAY1};
    line-height: 2em;
  `,
  helpl: styled.p`
    width: 100%;
    padding: 25px 0px;
    border-bottom: 1px solid ${LIGHT_GRAY5};
  `,
  linkm: styled.p`
    line-height: 2em;
      a,
      span{
        color: ${BLUE1};
        font-size: 18px;
        cursor: pointer;
      }

      @media only screen and (max-width: 767px) {
        a,
        span {
          font-size: 14px;
          font-weight: 300;
        }
      }
  `,
}

// const T = {
//   table: styled.div`
//     .taL,
//     .taL{
//       text-align: left;
//     }
//     .taR,
//     .taR{
//       text-align: right;
//     }
//     table {
//       width: 100%;
//       th,
//       thead td,
//       td strong {
//         color: ${DARK_GRAY1};
//         font-size: 18px;
//         font-weight: 700;
//         line-height: 1.36;
//         letter-spacing: -0.3px;
//         text-align: center;

//         @media only screen and (max-width: 767px) {
//           font-size: 14px;
//         }
//       }
//       td strong {
//         margin-top: 30px;
//         display: block;
//         &:first-of-type {
//           margin-top: 0;
//         }
//       }
//       thead td,
//       td{
//         font-size: 18px;
//         font-weight: 400;
//         line-height: 1.9;
//         letter-spacing: -0.3px;
//         text-align: center;
//         &>p {
//           margin-top: 18px;
//         }
//         &>p:first-of-type {
//           margin-top: 0;
//         }
//         .txt {
//           margin-top: 10px;
//           p {
//             position: relative;
//             color: ${LIGHT_GRAY8};
//             &.iLine{
//               padding-left: 8px;
//             }
//             &.iLine::after{
//               content: "-";
//               position: absolute;
//               left: 0;
//               top: 0;
//               display: block;
//             }
//           }
//         }

//         @media only screen and (max-width: 767px) {
//           font-size: 14px;
//         }
//       }
//       th:first-child,      
//       td:first-child{
//         text-align: left;
//       }
//       th:last-child,
//       td:last-child{
//         text-align: center;
//       }
//       thead th,
//       thead td{
//         padding: 18px 0;
//         border-bottom: 1px solid ${DARK_GRAY1};
//       }
//       tbody th,
//       tbody td{
//         padding: 18px 0;
//         border-bottom: 1px solid ${LIGHT_GRAY5};
//       }
//     }
//   `,
// }

export default DamageRelief;