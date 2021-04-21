import styled from 'styled-components';
import {
  ComTitle,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import Caution from 'public/images/support/ico_caution.svg';
import BabyCarriage from 'public/images/support/img_baby_carriage.png';

function accompanied(){
  return (
    <Container>
      <ComTitle title="도움이 필요한 손님" />
      <C.wrap>
        <C.body>
          <C.div>
            <C.title>유아동반 손님</C.title>
            <C.subTitle><span>이용 대상 및 운임</span></C.subTitle>
            <C.content>
              <T.table>
                <table>
                  <colgroup>
                    <col width=""></col>
                    <col width="500px"></col>
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>유아의 기준</th>
                      <td>생후 7일 이상~24개월 미만<br /> 성인 1명이 유아 2명을 동반한 경우 유아 1명의 항공권은 소아운임이 적용됩니다.</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <th>운임</th>
                      <td>국내선:무료 <br /> 국제선:성인 구매요금의 10%</td>
                    </tr>
                  </tbody>
                </table>
              </T.table>
            </C.content>
          </C.div>
          <C.div>
            <C.subTitle>유아 수하물 허용량</C.subTitle>
            <C.content>
              <T.table>
                <table>
                  <colgroup>
                    <col width="50%"></col>
                    <col width="50%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>국내선</th>
                      <td>국제선</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr> 
                      <th>
                      <C.igr>
                        <C.img><img src={BabyCarriage} /></C.img>
                          <C.group>
                              <C.desc>유모차 / 유아용 안전의자, 요람 중 1개</C.desc>
                          </C.group>
                      </C.igr>
                      </th> 
                      <td>
                      <C.igr>
                        <C.img><img src={BabyCarriage} /></C.img>
                          <C.group>
                              <C.desc>1px X 10kg<br />유모차 / 유아용 안전의자, 요람 중 1개</C.desc>
                          </C.group>
                      </C.igr>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </T.table>
            </C.content>
          </C.div>
          <C.div>
            <C.subTitle>유모차, 유아용 안전의자, 요람 이용 안내</C.subTitle>
            <C.itemTitle>1.유모차</C.itemTitle>
            <C.itemText>1) 기내 반입 유모차: 바구니와 덮개가 없는 규격(세 변의 합이 115cm 이하) 내 접이식 유모차​ (단, 기내에 보관이 불가하거나 공간이 부족한 경우 탑승구에서 위탁수하물로 처리될 수 있습니다)​</C.itemText>
            <C.itemText>​2) 위탁수하물 유모차​<br />
- 위탁수하물 부치시는 위치: 탑승수속 카운터 또는 탑승구<br />- 위탁수하물 찾으시는 위치: 도착지의 탑승구 앞 또는 도착지 수하물 수취구역​ (단, 해외 공항 사정에 따라 탑승구 앞에서 유모차 수취가 불가능할 수 있습니다)</C.itemText>
          </C.div>
          <C.div>
            <C.itemTitle>2. 유아 및 소아용 안전의자(Car Seat)</C.itemTitle>
            <C.itemText>1) 이용대상: 소아운임을 지불하고 항공권을 구입한 유아 및 소아</C.itemText>
            <C.itemText>​2) 이용기준: 항공기내 사용 가능 승인을 받은 가로 43cm (17inch) 이하인 안전의자에 한하여 이용가능​</C.itemText>
            <C.itemText>3) 사전에 예약센터로 문의해 주시기 바랍니다.​<br />
(단, 항공기 출발 48시간 전 예약없이 현장에 나오실 경우나 항공기 좌석상황에 따라 사용이 제한될 수 있습니다)</C.itemText>
          </C.div>
          <C.div>
            <C.itemTitle>3. 아기 요람(Baby Bassinet)​</C.itemTitle>
            <C.itemText>1) 이용 기준: 신장 75cm (2.46 ft) 이하, 체중 11kg (24.25 lbs) 이하​</C.itemText>
            <C.itemText>​2) 이용 안내: 아기 요람은 항공기 출발 48시간 전 예약센터로 신청 후 이용이 가능합니다.​​</C.itemText>
            <C.itemText>3) 유의사항<br />
① 기내 요람 설치가 가능한 좌석은 별도 추가 요금이 부과될 수 있으며 사전에 예약센터에 문의 및 예약해 주시기 ​바랍니다.<br />
② 이용 기준 초과 시 사전에 예약을 하신 경우라도 기내 요람 이용이 불가하며 좌석 환불이 불가능합니다.</C.itemText>
          </C.div>
          <C.sbody>
            <C.content>
              <C.note><C.image><Caution /></C.image>유의 사항</C.note>
              <C.description>- 유아의 나이 기준은 최초 탑승일 기준입니다.</C.description>
              <C.description>- 탑승수속 시 생년월일이 확인 가능한 서류를 반드시 지참하여 주시기 바랍니다.</C.description>
              <C.description>- 유아는 별도의 좌석이 제공되지 않으며, 보호자가 안고 착석하셔야 합니다.</C.description>
              <C.description>- 좌석이 필요한 유아 또는 성인 1명이 유아 2명 이상을 동반하는 경우, 1명을 제외한 나머지 유아에 대해서는 소아운임이 적용됩니다.</C.description>
            </C.content>
          </C.sbody>
        </C.body>
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
  title: styled.h4`
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 30px;
    
  `,
  subTitle: styled.h5`
    font-size: 22px;
    font-weight: bold;
    padding-bottom: 30px;
    span:first-child{
      display: block;
      padding-top: 30px;
    }
  `,
  itemTitle: styled.h6`
  padding-bottom: 30px;
  font-size: 18px;
  font-weight: bold;
  `,
  linkTitle: styled.a`
  font-size: 16px;
  font-weight: bold;
  color: ${BLUE1};
  line-height: 36px;
  `,
  itemText: styled.p`
    font-size: 15px;
    line-height: 30px;
  `,
  description: styled.p`
    font-size:14px;
    color: ${LIGHT_GRAY8};
    margin-top: 15px;
  `,
  
  content: styled.div`
    margin-top: 12px;
  `,
  button: styled.button`
    background: none;
    color: #ccc;
    font-size: 15px;
    font-weight: bold;
    margin:30px 40px 30px 0;
  `,
  div: styled.div`
    padding: 25px 0;
  `,
  ul: styled.ul`
  font-size: 18px;
  font-weight: bold;`,
  li: styled.li`
  font-size: 15px;
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
    padding-bottom: 50px;
    font-size: 15px;
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
    font-size: 15px;
    color: ${DARK_GRAY1};
    font-weight: bold;
    display: flex;
    justify-align: center;
  `,
  image: styled.p`
    margin-right: 5px;
  `,
  right: styled.div`
    display: block;
  `,
  mb: styled.div`
  margin-left: 20px;`,
  carriage: styled.div`
  width: 90px;
  `,
  flex: styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  `,
  igr: styled.div`
    display: inline-block;
    `,
  group: styled.div`
  margin-left: 50px;
  display: inline-block;
  vertical-align: middle;
  `,
  bdt: styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
  `,
  desc: styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.8;
  display: inline-block;
  `,
  img: styled.p`
  display: inline-block;
  vertical-align: middle;
  `,
}
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
        font-size: 15px;
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
        font-size: 14px;
        font-weight: 400;
        line-height: 1.9;
        letter-spacing: -0.3px;
        text-align: right;
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
        text-align: left;
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
}

export default accompanied;