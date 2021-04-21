import styled from 'styled-components';
import {
  ComTitle,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  YELLOW1,
  PINK2,
  BLUE2,
} from '@airpremia/cdk/styles/colors';
import Caution from 'public/images/support/ico_caution.svg';
import Img_advanceseat from 'public/images/support/img_advanceseat.svg';

function additionalServiceSeat(){
  return (
    <Container>
      <ComTitle
        title="사전 좌석 구매"
      />
      <C.wrap>
        <C.body>
          <C.title>구매 안내</C.title>
          <C.ul>
            <C.li>항공기 출발 48시간 전까지 홈페이지, 모바일 앱 및 예약센터를 통하여 구매하실 수 있습니다.​</C.li>
            <C.li>맨 앞좌석 및 비상구좌석은 탑승 당일 탑승수속 카운터에서도 구매 하실 수 있으나 현장에서 배정 가능 좌석이 비어있는 경우에 한해 사전 좌석과 동일한 요금으로 구매 가능합니다.</C.li>
          </C.ul>
        </C.body>
        <C.body>
          <C.title>구매대상 좌석</C.title>
          <C.tmi><Img_advanceseat /></C.tmi>
          <C.sub>사전좌석 구매 가격</C.sub>
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
                    <td>미주/유럽/대양주</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th><C.ycircle></C.ycircle>맨 앞 좌석 & 비상구 좌석</th>
                    <td>10,000</td>
                    <td>20,000</td>
                    <td>40,000</td>
                    <td>120,000</td>
                  </tr>
                  <tr>
                    <th><C.pcircle></C.pcircle>복도 & 창가 좌석</th>
                    <td>-</td>
                    <td>13,000</td>
                    <td>25,000</td>
                    <td>50,000</td>
                  </tr>
                  <tr>
                    <th><C.bcircle></C.bcircle>가운데 좌석</th>
                    <td>-</td>
                    <td>10,000</td>
                    <td>20,000</td>
                    <td>40,000</td>
                  </tr>
                </tbody>
              </table>
            </T.table>
            <C.rgt>※ 맨 앞좌석(Front Seat)및 비상구 좌석은 현장에서 배정 가능하며, 좌석이 비어있는 경우에 한해 동일한 요금으로 구매 가능합니다.</C.rgt>
            <C.pay>[기준 : KRW]</C.pay>
          </C.content>
        </C.body>
        <C.body>
          <C.title>취소 및 환불 안내</C.title>
          <C.content>
            <C.p>항공기 출발 48시간 전까지 홈페이지, 모바일 앱 및 예약센터를 통하여 구매하실 수 있습니다.</C.p>
            <C.p>단, 항공기 지연 및 결항 등 항공사 사정에 항공편 취소의 경우는 환불이 가능합니다.</C.p>
          </C.content>
        </C.body>
        <C.sbody>
          <C.sub>여정 변경/취소</C.sub>
          <C.content>
            <C.ul>
              <C.li>항공기 출발 48시간 전에는 구매한 좌석은 자동 취소되며 환불 가능합니다.</C.li>
              <C.li>항공기 출발 48시간 이내에는 구매한 좌석은 자동 취소되며 환불 불가합니다.​</C.li>
            </C.ul>
            <C.rf>※ 환불 및 취소는 홈페이지, 모바일 앱 및 예약센터 각 구매처에서만 가능합니다.​</C.rf>
          </C.content>
        </C.sbody>
        <C.sbody>
          <C.content>
            <C.note><C.image><Caution /></C.image>유의 사항</C.note>
            <C.ntg>사전수하물구매는 당사자만 적용되며 양도가 불가능합니다.​</C.ntg>
            <C.ntg>비상구 좌석 지정 불가 손님: 만 15세 미만 손님, 임산부, 시각/청각 장애인, 거동이 불편한 손님, 노약자, 반려동물을 ​동반한 손님, 한국어나 영어로 의사소통이 불가한 손님, <br />음주상태의 손님 등
            비상시 승무원의 지시에 따르기 어려움이 ​있는 손님​</C.ntg>
            <C.ntg>탑승 당일 출발지 공항 탑승수속 카운터/기내에서 비상구 착석 불가 손님으로 판단될 경우 현장에서 임의로 좌석배정을 취소 후 재배정되며 구매하신 좌석은 환불이 불가합니다.</C.ntg>
          </C.content>
        </C.sbody>
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
  titleMain: styled.h3`
    font-size: 30px;
    font-weight: bold;
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
  ul: styled.ul`
    
  `,
  li: styled.li`
    margin-bottom: 15px;
    padding-left: 10px;
    line-height: 1.8;
    position: relative;
    &::before{
      content:"";
      width: 4px;
      height: 4px;
      top: 11px;
      left: 0px;
      text-indent: -9999px;
      display: block;
      position: absolute;
      background-color: ${DARK_GRAY1};
      border-radius: 50%
    }
    &:first-child{
      margin-top: 20px;
    }
    &:last-child{
      margin-bottom: 0px;
    }
  `,
  p: styled.p`
    margin-bottom: 15px;
    &:first-child{
      margin-top: 20px;
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
  tmi: styled.p`
    margin-top: 30px;
  `,
  ntg: styled.p`
    font-size: 14px;
    color: ${LIGHT_GRAY8};
    margin-top: 15px;
    padding-left: 10px;
    line-height: 1.8;
    position: relative;
    &::before{
      content:"-";
      width: 5px;
      height: 20px;
      top: 0px;
      left: 0px;
      color: ${LIGHT_GRAY8};
      display: block;
      position: absolute;
    }
  `,
  ycircle: styled.span`
    width: 16px;
    height: 16px;
    margin-right: 10px;
    display: inline-block;
    background-color: ${YELLOW1};
    border-radius: 50%;
    border: 1px solid ${DARK_GRAY1};
    vertical-align: middle;
  `,
  pcircle: styled.span`
    width: 16px;
    height: 16px;
    margin-right: 10px;
    display: inline-block;
    background-color: ${PINK2};
    border-radius: 50%;
    border: 1px solid ${DARK_GRAY1};
    vertical-align: middle;
  `,
  bcircle: styled.span`
    width: 16px;
    height: 16px;
    margin-right: 10px;
    display: inline-block;
    background-color: ${BLUE2};
    border-radius: 50%;
    border: 1px solid ${DARK_GRAY1};
    vertical-align: middle;
  `,
  rgt: styled.p`
    font-size: 14px;
    color: ${LIGHT_GRAY8};
    margin-top: 20px;
    float: left;
  `,
  pay: styled.span`
    font-size: 14px;
    margin-top: 20px;
    margin-right: 80px;
    float: right;
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
        text-align: center;
        position: relative;
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
}
export default additionalServiceSeat;