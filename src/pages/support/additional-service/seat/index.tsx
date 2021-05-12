import styled from 'styled-components';
import {
  ComTitle,
  SupportLink,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY6,
  LIGHT_GRAY8,
  WHITE1,
  ORANGE2,
  BLUE1,
  LIGHT_BLUE2,
  DARK_BLUE1,
} from '@airpremia/cdk/styles/colors';
import Img_advanceseat from 'public/images/support/img_advanceseat.svg';
import Img_advanceseat_vertical_sm from 'public/images/support/img_advanceseat_vertical_sm.svg';
import { ListGlobal } from 'src/components';
import { 
  additionalBaggage,
  additionalPacking,
  additionalSeat,
} from '../../linkset';

function Seat(){
  return (
    <Container>
      <S.container>
        <ComTitle
          title="부가서비스 구매"
        />
        <C.wrap>
          <C.body>
            <C.titleMain>사전 좌석 구매</C.titleMain>
            <C.content className="mt60">
              <C.flex>
                <C.titleSub>구매대상 좌석</C.titleSub>
                <C.badge onClick={() => {}}>
                  좌석 전체 보기
                </C.badge>
              </C.flex>
              <C.image2><Img_advanceseat_vertical_sm /></C.image2>
              <C.image><Img_advanceseat /></C.image>
              <C.imageTxt>
                <C.imgSub><C.dark></C.dark>맨 앞 좌석 & 비상구 좌석</C.imgSub>
                <C.imgSub><C.sky></C.sky>복도 & 창가 좌석</C.imgSub>
                <C.imgSub><C.sky2></C.sky2>가운데 좌석</C.imgSub>
              </C.imageTxt>
            </C.content>
          </C.body>
          <C.body>
            <C.titleSub>사전좌석 구매 가격</C.titleSub>
            <C.content>
              <C.sb>
                <T.table>
                  <table>
                    <colgroup>
                      <col width="3%"></col>
                      <col width="17%"></col>
                      <col width="20%"></col>
                      <col width="20%"></col>
                      <col width="20%"></col>
                      <col width="20%"></col>
                    </colgroup>
                    <thead>
                      <tr>
                        <th colSpan={2}>구분</th>
                        <td>국내선</td>
                        <td>동북아</td>
                        <td>동남아</td>
                        <td>미주</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><C.dark></C.dark></td>
                        <th>맨 앞 좌석 & 비상구 좌석</th>
                        <td>10,000</td>
                        <td>20,000</td>
                        <td>40,000</td>
                        <td>120,000</td>
                      </tr>
                      <tr>
                        <td><C.sky></C.sky></td>
                        <th>복도 & 창가 좌석</th>
                        <td>-</td>
                        <td>13,000</td>
                        <td>25,000</td>
                        <td>50,000</td>
                      </tr>
                      <tr>
                        <td><C.sky2></C.sky2></td>
                        <th>가운데 좌석</th>
                        <td>-</td>
                        <td>10,000</td>
                        <td>20,000</td>
                        <td>40,000</td>
                      </tr>
                    </tbody>
                  </table>
                </T.table>
                <C.rgt>※ 맨 앞좌석(Front Seat)및 비상구 좌석은 배정 가능 좌석이 비어있는 경우에 한해 공항 현장에서 동일한 요금으로 구매 가능합니다.</C.rgt>
              </C.sb>
            </C.content>
          </C.body>
          <C.body>
            <C.titleSub>구매 안내</C.titleSub>
            <C.content>
              <C.sb>
                <ListGlobal level="fst" body={
                  <p>항공기 출발 48시간 전까지 홈페이지, 모바일 앱 및 예약센터를 통하여 구매하실 수 있습니다.​</p>
                }/>
                <ListGlobal level="fst" body={
                  <p>맨 앞좌석 및 비상구좌석은 탑승 당일 탑승수속 카운터에서도 구매 하실 수 있으나 현장에서 배정 가능 좌석이 비어있는 경우에 한해 사전 좌석과 동일한 요금으로 구매 가능합니다.​</p>
                }/>
                {/* <ListGlobal level="fst" body={
                  <p>타 항공사와 공동 운항편이나 제휴 항공사의 항공편 및 연결편 이용손님은 구매가 불가합니다.​</p>
                }/>
                <ListGlobal level="fst" body={
                  <p>구매처가 한국인 경우 KRW, 그 외 해외공항은 USD 또는 현지통화로 구매하실 수 있습니다.​</p>
                }/> 
                ------------국제선 시 표출--------------
                */}
              </C.sb>
            </C.content>
          </C.body>
          <C.body>
            <C.titleSub>취소 및 환불 안내</C.titleSub>
            <C.content>
              <C.sb>
                <ListGlobal level="fst" body={
                  <p>항공기 출발 48시간 전까지만 취소 및 환불이 가능하며 48시간 이내에는 취소 및 환불이 불가합니다.<br></br>단, 항공기 지연 및 결항등 항공사 사정에 항공편 취소의 경우는 환불이 가능합니다</p>
                }/>
                <ListGlobal level="fst" body={
                  <p>여정 변경/취소 시의 경우,</p>
                }/>
                <ListGlobal level="scd" body={
                  <p>항공기 출발 48시간 전에는 구매한 좌석은 자동 취소되며 환불 가능합니다.​</p>
                }/>
                <ListGlobal level="scd" body={
                  <p>항공기 출발 48시간 이내에는 구매한 좌석은 자동 취소되며 환불 불가합니다.​</p>
                }/>
                <ListGlobal level="fst" body={
                  <p>환불 및 취소는 홈페이지, 모바일 앱 및 예약센터 각 구매처에서만 가능합니다.​</p>
                }/>
              </C.sb>
            </C.content>
          </C.body>
          <C.body>
            <C.titleSub>유의사항</C.titleSub>
            <C.content>
              <C.sb>
                <ListGlobal level="fst" body={
                  <p>사전좌석구매는 당사자만 적용되며 양도가 불가능합니다.​</p>
                }/>
                <ListGlobal level="fst" body={
                  <p>비상구 좌석 구매​</p>
                }/>
                <ListGlobal level="scd" body={
                  <p><C.orange>비상구 좌석 지정 불가 손님</C.orange>: 만 15세 미만 손님, 임산부, 시각/청각 장애인, 거동이 불편한 손님, 노약자, 반려동물을 동반한 손님, 한국어나 영어로 의사소통이 불가한 손님, 음주상태의 손님 등 비상시 승무원의 지시에 따르기 어려움이 있는 손님​</p>
                }/>
                <ListGlobal level="scd" body={
                  <p>탑승 당일 출발지 공항 탑승수속 카운터/기내에서 비상구 착석 불가 손님으로 판단될 경우 현장에서 임의로 좌석배정을 취소 후 재배정되며 구매하신 좌석은 환불이 불가합니다​</p>
                }/>
              </C.sb>
            </C.content>
          </C.body>
          <C.body>
            <C.titleMain>도움이 되셨나요?</C.titleMain>
            <C.linkWrap>
              <SupportLink
                title={additionalBaggage.title}
                link={additionalBaggage.link}
              />
              <SupportLink
                title={additionalPacking.title}
                link={additionalPacking.link}
              />
              <SupportLink
                title={additionalSeat.title}
                link={additionalSeat.link}
              />
            </C.linkWrap>
          </C.body>
        </C.wrap>
      </S.container>
    </Container>
  );
}

const S = {
  container: styled.div``,
}

const C = {
  /* 서비스안내 공통css */
  wrap: styled.div`
    border-top: 2px solid ${DARK_GRAY1};

    &.bdN {
      border-top: 0;
    }
  `,
  body: styled.div`
    margin-top: 100px;

    &:first-of-type {
      margin-top: 30px;
    }
  `,
  titleMain: styled.h2`
    font-size: 24px;
    font-weight: bold;

    @media only screen and (max-width: 767px) {
      font-size: 22px;
      line-height: 28px;
      letter-spacing: -0.04em;
    }
  `,
  titleSub: styled.h3`
    font-size: 21px;
    font-weight: 700;

    @media only screen and (max-width: 767px){
      font-size: 16px;
      letter-spacing: -0.32px;
      margin-top: 60px;
    }
  `,
  content: styled.div`
    margin-top: 30px;
    font-size: 18px;
    line-height: 1.8em;

    &.mt60 {
      margin-top: 60px;
    }

    @media only screen and (max-width: 767px){
      margin-top: 40px;
      font-size: 14px;
      letter-spacing: -0.28px;

      &.mt60 {
        margin-top: 40px;
      }
    }
  `,
  linkWrap: styled.div`
    margin-top: 30px;

    @media only screen and (max-width: 1059px) {
      margin-top: 20px;
    }
  `,
  /* 서비스안내 공통css 끝 */


  flex:styled.div`
    display: flex;
    justify-content: space-between;
  `,
  badge:styled.div`
    height: 100%;
    border-radius: 30px;
    background-color: #0093ff;
    padding: 5px 12px;
    box-sizing: border-box;
    color:#fff;
    font-size: 18px;
    cursor: pointer;
    display: none;
    margin-top: 100px;

    @media only screen and (max-width: 1440px) { 
      display: block;
    }

    @media only screen and (max-width: 767px){
      margin-top: 60px;
      font-size: 14px;
      letter-spacing: -0.28px;
    }
  `,
  imgSub: styled.span`
    margin-left: 90px;
    &:first-child {
      margin-left: 0;
    }
  `,
  image: styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 30px auto 0;

    svg {
      width: 100%;
    }

    @media only screen and (max-width: 1059px) { 
      display: none;
    }
  `,
  image2: styled.div`
    width: 171px;
    height: 274px;
    margin: 30px auto 0;
    display: none;

    @media only screen and (max-width: 1059px) { 
      display: block;
    }
  `,
  imageTxt: styled.div`
    text-align: center;
    font-size: 16px;
    margin-top: 14px;
    @media only screen and (max-width: 1059px) { 
      display: none;
    }
  `,  
  orange: styled.span`
    color: ${ORANGE2};
  `,
  dark: styled.span`
    width: 25px;
    height: 15px;
    margin-right: 10px;
    display: inline-block;
    background-color: ${DARK_BLUE1};
    border-radius: 8px 4px 4px 8px;
    vertical-align: middle;

    @media only screen and (max-width: 767px){
      width: 20px;
      height: 12px;
      margin-right: 0;
      border-radius: 6px 3px 3px 6px;
    }
  `,
  sky: styled.span`
    width: 25px;
    height: 15px;
    margin-right: 10px;
    display: inline-block;
    background-color: ${LIGHT_BLUE2};
    border-radius: 8px 4px 4px 8px;
    vertical-align: middle;

    @media only screen and (max-width: 767px){
      width: 20px;
      height: 12px;
      margin-right: 0;
      border-radius: 6px 3px 3px 6px;
    }
  `,
  sky2: styled.span`
    width: 25px;
    height: 15px;
    margin-right: 10px;
    display: inline-block;
    background-color: ${BLUE1};
    border-radius: 8px 4px 4px 8px;
    vertical-align: middle;

    @media only screen and (max-width: 767px){
      width: 20px;
      height: 12px;
      margin-right: 0;
      border-radius: 6px 3px 3px 6px;
    }
  `,
  rgt: styled.p`
    font-size: 18px;
    color: ${LIGHT_GRAY8};
    margin-top: 20px;

    @media only screen and (max-width: 767px){
      font-size: 14px;
      letter-spacing: -0.28px;
    }
  `,
  sb: styled.div`
    @media only screen and (max-width: 767px){
      font-size: 14px;
      letter-spacing: -0.28px;
    }
  `,
}

const T = {
  table: styled.div`
    border-top: 0.75px solid ${DARK_BLUE1};
    border-bottom: 0.75px solid ${DARK_BLUE1};
    table {
      width: 100%;
      th, td{
        font-size: 20px;
        line-height: 1.36em;
        text-align: center;
        vertical-align: middle;
        padding-top: 15px;
        padding-bottom: 15px;
      }
      thead th, thead td {
        color: ${WHITE1};
        font-weight: 700;
        background: ${DARK_BLUE1};
      }
      tbody th, tbody td{
        border-bottom: 0.75px solid ${LIGHT_GRAY6};
        border-right: 0.75px solid ${LIGHT_GRAY6};
      }
      tbody th{
        font-weight: 700;
      }
      tbody td{
        font-weight: 400;
        &:last-child, &:first-child {
          border-right: none;
        }
      }
    }

    @media only screen and (max-width: 767px) {
      table {
        th, td{
          font-size: 14px;
          letter-spacing: -0.28px;
        }
      }
    }
  `,
}
export default Seat;