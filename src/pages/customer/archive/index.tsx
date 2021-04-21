import styled from 'styled-components';
import { useModal } from 'src/hooks';
import {
  ComTitle,
  BtnBlue,
  NewModal,
  PopupTitle,
  TaskButton,
} from 'src/components';
import { EScrollType } from 'src/components/templates/centerPopup';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY6,
  LIGHT_GRAY8,
  LIGHT_GRAY13,
  BLUE1,
  ORANGE2,
  WHITE1,
} from '@airpremia/cdk/styles/colors';
import BtnDownBlue from 'public/images/btn_download_blue.png'


function archivelist(){

  const {
    onShowNewModal,
    UIStore: { newModal },
  } = useModal();

  const { onHideNewModal } = useModal();
  
  const popHealth = () =>
    onShowNewModal('popHealth');

    const onClickModal = () => {
      switch (newModal.target) {
        case 'popHealth':
          return (
            <NewModal
              className="max hAuto"
              type={EScrollType.TYPE4}
              title={
                <S.modalTitle>
                  <PopupTitle>건강상태 서약서가 필요한 고객</PopupTitle>
                </S.modalTitle>
              }
              body={
                <>
                  <S.textArea className="auto">
                    <ul>
                      <li>32주 이상 37주 미만 임산부 승객</li>
                      <li>당뇨 증상 및 특정 알레르기 반응의 처치 목적으로 주사기를 휴대한 승객</li>
                      <li>체내 의료용 장비(인공 심장박동기,인슐린 펌프, 척추자극기 등)가 삽입되어 있는 승객</li>
                      <li>급성 감염병 질환  및 전염성 질환을 보유한 승객</li>
                      <li>심근 경색, 협심증, 심부전 등의 심혈관계 질환이 있는 환자 및 심장 수술을<br />받은 경우</li>
                      <li>만성 폐쇄성 폐질환, 천식, 폐렴, 폐수종, 기흉 등의 호흡기계 질환이 있는 경우</li>
                      <li>뇌졸중, 뇌종양 등의 신경계 질환이 있는 환자 및 뇌수술을 받은 경우</li>
                      <li><C.orange>최근 한 달 이내</C.orange> 수술을 받은 경우</li>
                      <li>현재 입원 중이거나, 지속적인 치료를 요하는 질환이 있는 경우</li>
                      <li>조절되지 않는 정신과적 질환이 있는 경우</li>
                    </ul>
                  </S.textArea>
                  <S.btnArea className="auto">
                    <TaskButton onClick={onHideNewModal}>확인</TaskButton>
                  </S.btnArea>
                </>
              }
            />
          );       
      default:
        return null;
    };
  };

  return (
    <Container>
      {onClickModal()}
      <ComTitle
        title="서식 자료실"
      />
      <C.wrap>
        <S.total>
          <span>총 <strong>8</strong>건</span>
        </S.total>
        <C.body>
          <C.sb>
            <T.table>
              <table>
                <colgroup>
                  <col width=""></col>
                  <col width="330px"></col>
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      <C.ptit>기내 분실물품 신고서</C.ptit>
                      <C.pscr>기내 분실물을 인수하기 위한 접수 양식으로 작성 후 아래 이메일 주소로 보내주시기 바랍니다.</C.pscr>
                      <C.pth>EMAIL : ICNLL@airpremia.com</C.pth>
                    </th>
                    <td>
                    <BtnBlue className="down"><a href="/document/archive_Left-Behind-Report.pdf" download>다운로드</a></BtnBlue>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <C.ptit>특수 수하물 운송 서약서</C.ptit>
                      <C.pscr>
                        스포츠 장비(골프, 스키, 스쿠버다이빙, 자전거 등), 대형악기 또는 고가의 물품을 위탁하시는 고객은<br />특수수하물 운송서약서를 작성 후  출발 당일 탑승수속 카운터에서 직원에게 제출해 주시기 바랍니다. 
                        </C.pscr>
                    </th>
                    <td>
                      <BtnBlue className="down"><a href="/document/support_special-carry.pdf" download>다운로드</a></BtnBlue>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <C.ptit>비동반 소아 서비스 신청서 (UM/YPTA 신청서)</C.ptit>
                      <C.pscr>
                        보호자 없이 혼자 여행하는 어린이/청소년은 예약센터를 통해 신청하신 후 UM/YPTA 신청서를 작성하여<br />출발 당일 탑승수속 카운터 직원에게 제출해 주시기 바랍니다.
                      </C.pscr>
                    </th>
                    <td>
                      <BtnBlue className="down"><a href="/document/support_need-teenager_01.pdf" download>다운로드</a></BtnBlue>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <C.ptit>비동반 소아 보호자 서약서</C.ptit>
                      <C.pscr>
                        보호자 없이 혼자 여행하는 어린이/청소년은 예약센터를 통해 신청하신 후 보호자 서약서를 작성하여<br />출발 당일 탑승수속 카운터 직원에게 제출해 주시기 바랍니다.
                      </C.pscr>
                    </th>
                    <td>
                      <BtnBlue className="down"><a href="/document/support_need-teenager_02.pdf" download>다운로드</a></BtnBlue>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <C.ptit>반려동물 운송 서약서</C.ptit>
                      <C.pscr>
                        반려동물을 동반한 고객은 예약센터를 통해 운송 승인을 받은신 후 반려동물 운송 서약서를 작성하여<br />출발 당일 탑승수속 카운터 직원에게 제출해 주시기 바랍니다.
                      </C.pscr>
                    </th>
                    <td>
                    <BtnBlue className="down"><a href="/document/support_need-pet_01.pdf" download>다운로드</a></BtnBlue>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <C.ptit>건강상태 서약서</C.ptit>
                      <C.pscr>건강상태 서약서가 필요한 고객은 작성 후 출발 당일 탑승수속 카운터 직원에게 제출해 주시기 바랍니다.</C.pscr>
                    </th>
                    <td>
                      <BtnBlue className="mr10" onClick={popHealth}>건강상태 서약서가 필요한 고객</BtnBlue>
                      <BtnBlue className="down"><a href="/document/archive_health.pdf" download>다운로드</a></BtnBlue>                 
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <C.ptit>의사소견서(POC)</C.ptit>
                      <C.pscr>
                        보조흡입장치 기내사용이 필요한 손님께서는 예약센터를 통해 운송 확인을 먼저 받으신 후<br />작성된 의사소견서(POC)를 출발 당일 탑승수속 카운터 직원에게 제출해 주시기 바랍니다.
                      </C.pscr>
                    </th>
                    <td>
                    <BtnBlue className="down"><a href="/document/support_need-help_01.pdf" download>다운로드</a></BtnBlue>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <C.ptit>항공교통이용자 피해구제 신청서</C.ptit>
                      <C.pscr>
                        항공사업법 제61조 및 동법 시행규칙 제64조에 의거 피해구제신청을 위한 양식입니다.<br />피해구제 접수처에 제출해 주시기 바랍니다.
                      </C.pscr>
                    </th>
                    <td>
                    <BtnBlue className="down"><a href="/document/footer_damageRelief.pdf" download>다운로드</a></BtnBlue>
                    </td>
                  </tr>
                </tbody>
              </table>
            </T.table>
          </C.sb>
        </C.body>
      </C.wrap>
    </Container>
  )
}

const C = {
  wrap: styled.div`
    margin-top: 70px;

    .mr10{
      margin-right: 10px;
    }

    .btnDown{
      margin: 0 !important;
      padding: 9px 15px 7px;
      padding-left: 32px;
      position: relative;
      color: ${BLUE1} !important;;
      white-space: nowrap;
      font-size: 14px;
      text-decoration: none !important;;
      background-color: ${WHITE1};
      border: 1px solid ${BLUE1};
      border-radius: 6px;

      &::before{
        content: "";
        width: 12px;
        height: 12px;
        position: absolute;
        left: 15px;
        top: calc(50% - 6px);
        display: block;
        background: url(${BtnDownBlue}) no-repeat;
      }

      &:hover{        
        text-decoration: underline !important;;
      }
    }
  `,
  body: styled.div`
  `,
  sbody: styled.div`
    margin-top: 100px;
  `,
  title: styled.h4`
    font-size: 22px;
    font-weight: bold;
  `,
  sb: styled.div`
  `,
  ptit: styled.div`
    font-size: 20px;
  `,
  pscr: styled.p`
    margin-top: 15px;
    color: ${LIGHT_GRAY13};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.8;
  `,
  pth: styled.p`
    margin-top: 10px;
  `,
  tmi: styled.p`
    margin-top: 30px;
  `,
  blue: styled.span`
    color: ${BLUE1};
  `,
  orange: styled.span`
    color: ${ORANGE2};
    font-weight: bold;
  `,
}
    
const T = {
  table: styled.div`
    table {
      width: 100%;
      th,
      thead td,
      td strong {
        color: ${DARK_GRAY1};
        font-size: 15px;
        font-weight: bold;
        line-height: 1.6;
        letter-spacing: -0.3px;
        text-align: center;
      }

      th{
        text-align: left;
      }

      td{
        font-size: 14px;
        font-weight: 400;
        line-height: 1.9;
        letter-spacing: -0.3px;
        text-align: right;
        vertical-align: middle;
        position: relative;

        &>p {
          margin-top: 18px;
        }

        &>p:first-of-type {
          margin-top: 0;
        }

        .txt {
          margin-top: 10px;

          p{
            position: relative;
            color: ${LIGHT_GRAY8};

            &.iLine{
              padding-left: 8px;
            }

            &.iLine::after{
              content: "-";
              position: absolute;
              left: 0;
              top: 0;
              display: block;
            }
          }
        }
      }

      thead th,
      thead td{
        padding: 30px 0;
        border-bottom: 1px solid ${DARK_GRAY1};
      }

      tbody th,
      tbody td{
        padding: 30px 0;
        border-bottom: 1px solid ${LIGHT_GRAY5};
      }
    }
  `,
}

const S = {
  total: styled.div`
    padding: 20px 0;
    border-top: 1px solid ${DARK_GRAY1};
    border-bottom: 1px solid ${LIGHT_GRAY6};

    > span,
    > span > strong {
      color: ${DARK_GRAY1};
      font-size: 14px;
    }
  `,

  container : styled.div`
    width: 800px;
    height: 400px;
    margin: 30px auto;
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

    ul {
      padding-left: 22px;

      > li{
        margin-top: 10px;
        line-height: 1.8;
        list-style: decimal;
        word-break: keep-all;
      }
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
}
export default archivelist;