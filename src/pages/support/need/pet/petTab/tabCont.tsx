import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  BLUE1,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';
import Linkblue from 'public/images/support/btn_txt_link_blue.svg';
import AnimalCage from 'public/images/support/img_animal_menu1_01.svg';
import { ListGlobal } from 'src/components';

function TabContent({currIdxCont}: IProps) {
  if ( currIdxCont === 0 ) {
    return (
      <C.wrap>
        <C.body>
          <C.subTitle>운송 가능한 동물</C.subTitle>
          <ListGlobal level="fst" body={
            <p>개, 새, 고양이만 가능하며 성인 1인당 기내 반입 1마리만 동반 가능합니다.<br />(단, 6개월 미만의 개 2마리, 고양이 2마리, 어미와 새끼, 새 1쌍의 경우는 예외로 운송가능)​</p>
          }/>
          <C.sbody>
            <C.subTitle>이용 안내</C.subTitle>
            <C.itemTitle>[사전 준비]</C.itemTitle>
            <C.inline>
              <C.badge className="font-premia-bold">
                <C.p>STEP 1</C.p>
              </C.badge>
              <C.right>
                <C.itemText><C.bold>운송 승인</C.bold></C.itemText>
                <C.itemText>에어프레미아 예약센터에 전화하셔서 운송 승인을 받아 주시기 바랍니다.​</C.itemText>
              </C.right>                    
            </C.inline>
                
            <C.inline>
              <C.badge className="font-premia-bold">
                <C.p>STEP 2</C.p>
              </C.badge>
              <C.right>
                <C.itemText><C.bold>서류 준비</C.bold></C.itemText>
                  <ListGlobal level="fst" body={
                    <p>해당 국가 또는 지역의 반려동물의 반입 가능 여부와 검역 시 준비 사항을 확인해 주시기 바랍니다.​</p>
                  }/>
                  <ListGlobal level="scd" body={
                    <p>서류 준비 시 총 3부(원본 1부/사본 2부) 준비해 주시기 바랍니다.<br />원본- 손님 소지/사본 2부- 농림축산검역본부 제출용, 항공사 제출용<br />국가/지역별 규정 및 자세한 사항은&nbsp;
                      <C.linkm2><a href="http://www.qia.go.kr/livestock/qua/livestock_outforeign_hygiene_inf.jsp">농림축산검역본부</a></C.linkm2>
                    를 확인바랍니다​</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p>애완동물운송서약서를 다운받아 탑승수속 카운터에서 직원에게 전달하여 주시기 바랍니다.​<br />
                      <C.linkm>
                        <a href="/document/support_need-pet_01.pdf" download>
                          애완동물서약서 다운<Linkblue />
                        </a>
                      </C.linkm>
                    </p>
                  }/>
              </C.right>
            </C.inline>
            <C.inline>
              <C.badge className="font-premia-bold">
                <C.p>STEP 3</C.p>
              </C.badge>
              <C.right>
                <C.itemText><C.bold>반려동물 운반용기 준비</C.bold></C.itemText>
                <C.itemText>반려동물 운반용기를 조건에 맞게 준비해 주시기 바랍니다.</C.itemText>
                <AnimalCage />
              </C.right>
            </C.inline>
            <C.content>
              <ListGlobal level="fst" body={
                <p>세변(가로, 세로, 높이)의 합이 총 115CM 이하이며, 높이가 최대 20CM 이하인 용기​</p>
              }/>
              <ListGlobal level="fst" body={
                <p>반려동물이 움직이는데 불편함이 없는 충분한 공간이 있는 용기​</p>
              }/>
              <ListGlobal level="fst" body={
                <p>환기, 방수, 잠금장치가 있으며, 비상시 외부에서 열 수 있는 용기​</p>
              }/>
              <ListGlobal level="fst" body={
                <p>조류의 운송용기는 철재용기로 된 케이지를 준비하셔야 하며, 용기외부는 불투명한 천으로 가려야 함​</p>
              }/>
              <ListGlobal level="fst" body={
                <p><C.linkm2><a href="https://www.iata.org/en/programs/cargo/live-animals/pets/#tab-1">IATA</a></C.linkm2>에서 용기에 관하여 정의한 지침입니다.​</p>
              }/>
                {/* <C.ml20>
                  <C.description>운반용기에 대한 자세한 내용은 <C.linkm className="dpin"><a href="https://www.iata.org/en/programs/cargo/live-animals/pets/#tab-1" target="_blank">IATA Traveler’s Pet Corner</a></C.linkm>를 참고해주시기 바랍니다.</C.description>
                </C.ml20>                     */}
            </C.content>            
            <C.mt60>
              <C.itemTitle>[공항 도착]</C.itemTitle>
            </C.mt60>
            <C.inline>
              <C.badge className="font-premia-bold">
                <C.p>STEP 1</C.p>
              </C.badge>
              <C.itemText>준비하신 예방 접종 증명서 및 건강진단서를 농림축산검역본부에 제출하시면 검역증명서를 발급받으실 수 있습니다.​</C.itemText><br />
            </C.inline>
            <C.inline>
              <C.badge className="font-premia-bold">
                <C.p>STEP 2</C.p>
              </C.badge>
              <C.itemText>검역증명서를 소지하시고 반려동물과 함께 일찍 탑승수속 카운터로 도착해주시기 바랍니다.​​</C.itemText><br />
            </C.inline>
            <C.inline>
              <C.badge className="font-premia-bold">
                <C.p>STEP 3</C.p>
              </C.badge>
              <C.itemText>탑승수속 카운터에서 반려동물의 무게를 측정 및 이용 요금 지불 등 직원의 안내에 따라 수속을 받아주세요.​​</C.itemText>
            </C.inline>
          </C.sbody>
          <C.sbody>
            <C.subTitle>요금안내</C.subTitle>
            <C.itemText2>※ 반려동물 요금은 무료 위탁수하물 허용량과 별도로 부과됩니다.</C.itemText2>
            <C.content>
              <T.table>
                <table>
                  <colgroup>
                    <col width="20%"></col>
                    <col width="20%"></col>
                    <col width="20%"></col>
                    <col width="20%"></col>
                    <col width="20%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>구분</th>
                      <td>국내선</td>
                      <td>동북아</td>
                      <td>동남아</td>
                      <td>미주</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>요금</th>
                      <td>20,000</td>
                      <td>70,000</td>
                      <td>100,000</td>
                      <td>200,000</td>
                    </tr>
                  </tbody>
                </table>
              </T.table>
            </C.content>
          </C.sbody>
          <C.sbody>
            <C.subTitle>유의사항</C.subTitle>
            <ListGlobal level="fst" body={
              <p>아래의 경우 운송이 불가하다.</p>
            }/>
            <ListGlobal level="scd" body={
              <p>생후 8주 미만의 동물, 안정제나 수면제가 투여된 동물</p>
            }/>
            <ListGlobal level="scd" body={
              <p>악취가 심한 경우 및 임신한 상태의 암컷</p>
            }/>
            <ListGlobal level="scd" body={
              <p>운송 가능 크기 및 무게를 초과한 경우</p>
            }/>
            <ListGlobal level="scd" body={
              <p>맹견종과 맹금류</p>
            }/>
            <ListGlobal level="trd" body={
              <p>맹견의 종류: 도사견, 아메리칸 핏불 테리어, 아메리칸 스태퍼드셔 테리어, 스태퍼드셔 불 테리어, 로트와일러, 마스티프, 오브차카와, 라이카, 울프독, 아메리칸 불리, 카네코르소, 미니어쳐 불테리어와 그 잡종의 개</p>
            }/>
          </C.sbody>
        </C.body>
      </C.wrap>
    )
  } else {
    return (
      <C.wrap>
        <C.body>
          <C.mb60>
            <ListGlobal level="fst" body={
              <p>서비스 요청 시, 탑승수속에서 입국수속까지 불편이 없도록 안내 및 보조서비스를 제공드립니다.<br />(단, 항공기 출발 48시간 전 예약없이 출발 당일 현장에서 신청하는 경우 도움이 지체될 수 있습니다)</p>
            }/>
            <ListGlobal level="fst" body={
              <p>비동반 시각장애 손님의 경우 스스로 보행이 가능하고, 제3자의 도움 없이 식사 및 개인 용무가 가능해야 하며, 출/도착지 공항에서 손님을 보조/지원할 수 있는 보호자가 있어야 항공기 이용이 가능합니다.</p>
            }/>
          </C.mb60>
          <C.mb60>
            <C.itemTitle>시각장애인 안내견</C.itemTitle>
            <ListGlobal level="fst" body={
              <p>별도의 요금 징수 없이 무료로 운송이 가능하며 운송용기 보관이 필요 없으며 기내 동반할 수 있습니다.<br/>(단, 추가로 좌석 점유를 할 수 없습니다.)</p>
            }/>
            <ListGlobal level="fst" body={
              <p>운송요건</p>
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
          </C.mb60>
        </C.body>
      </C.wrap>
    )
  } 
}

const C = {
  wrap: styled.div`
    margin-top: 70px;
  `,
  body: styled.div`
    margin-top: 140px;
    &:first-of-type{
      margin-top: 30px;
    }
  `,
  title: styled.h4`
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 30px;
    
  `,
  subTitle: styled.h5`
    font-size: 21px;
    font-weight: bold;
    padding-bottom: 30px;
  `,
  itemTitle: styled.h6`
    padding-bottom: 30px;
    font-size: 18px;
    font-weight: bold;
  `,
  linkTitle: styled.a`
    font-size: 18px;
    font-weight: bold;
    color: ${BLUE1};
    line-height: 36px;
    cursor: pointer;
  `,
  itemText: styled.p`
    font-size: 18px;
    line-height: 30px;
    span{
      display: block;
      &:first-child{
        margin-top: 35px;
      }
    }
  `,
  itemText2: styled.p`
    font-size: 18px;
    line-height: 30px;
    color: ${ORANGE2};
    span{
      display: block;
      &:first-child{
        margin-top: 35px;
      }
    }
  `,
  description: styled.p`
    font-size: 18px;
    color: ${LIGHT_GRAY8};
    margin-top: 15px;
    &.mt0{
      margin-top: 0;
    }
  `,
  
  content: styled.div`
    margin-top: 12px;
  `,
  button: styled.button`
    background: none;
    color: #ccc;
    font-size: 18px;
    font-weight: bold;
    margin:30px 40px 30px 0;
  `,
  div: styled.div`
    padding-top:50px;
  `,
  ul: styled.ul`
    font-size: 18px;
    font-weight: bold;
  `,
  li: styled.li`
    font-size: 18px;
    line-height: 36px;
    font-weight: normal;
  `,
  span: styled.span`
    color:#FF5800;
    border-bottom: 2px solid #FF5800;
  `,
  p: styled.p``,
  bold: styled.span`
    font-weight: bold;
  `,

  subbox:styled.h5`
    font-size: 18px;
    line-height: 36px;
  `,
  badge:styled.div`
    width: 60px;
    height: 100%;
    display: flex;
    -webkit-box-pack: center;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: #0093ff;
    padding-top: 2px;
    box-sizing: border-box;
    color:#fff;
    font-size: 18px;
    margin-right: 9px;
  `,
  inline: styled.div`
    display: flex;
    align-items: baseline;
    padding-bottom: 30px;
  `,
  sbody: styled.div`
    margin-top: 100px;
  `,
  note: styled.p`
    font-size: 18px;
    color: ${DARK_GRAY1};
    font-weight: bold;
    display: flex;
    justify-align: center;
  `,
  right: styled.div`
    display: block;
  `,
  image: styled.div`
    width: 300px;
  `,
  ml20: styled.div`
    margin-left: 20px;
  `,
  mb60: styled.div`
    margin-bottom: 60px;
  `,
  mt60: styled.div`
    margin-top: 60px;
  `,
  mb30: styled.div`
    margin-bottom: 30px;
  `,
  linkm: styled.span`
    font-weight: 600;
    color: ${BLUE1};
    &.dpin{
      display: inline-block;
    }
  `,
  linkm2: styled.span`
    font-weight: 600;
    color: ${BLUE1};
    border-bottom: 2px solid ${BLUE1};
    &.dpin{
      display: inline-block;
    }
  `,
};

const T = {
  table: styled.div`
    .taL,
    .taL{
      text-align: left;
    }
    .taR,
    .taR{
      text-align: right;
    }
    table {
      width: 100%;
      th,
      thead td,
      td strong {
        color: ${DARK_GRAY1};
        font-size: 18px;
        font-weight: bold;
        line-height: 1.6;
        letter-spacing: -0.3px;
        text-align: center;
      }
      td strong {
        margin-top: 30px;
        display: block;
        &:first-of-type {
          margin-top: 0;
        }
      }
      td{
        font-size: 18px;
        font-weight: 400;
        line-height: 1.9;
        letter-spacing: -0.3px;
        text-align: center;
        &>p {
          margin-top: 18px;
        }
        &>p:first-of-type {
          margin-top: 0;
        }
        .txt {
          margin-top: 10px;
          p {
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
      th:first-child,      
      td:first-child{
        text-align: left;
      }
      th:last-child,
      td:last-child{
        text-align: center;
      }
      thead th,
      thead td{
        padding: 18px 0;
        border-bottom: 1px solid ${DARK_GRAY1};
      }
      tbody th,
      tbody td{
        padding: 18px 0;
        border-bottom: 1px solid ${LIGHT_GRAY5};
      }
    }
  `,
};

export default TabContent;
