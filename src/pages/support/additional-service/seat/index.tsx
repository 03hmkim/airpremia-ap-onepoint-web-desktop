import styled, { css } from 'styled-components';
import { useState } from 'react';
import {
  ComTitle,
  SupportLink,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  WHITE1,
  DARK_GRAY1,
  LIGHT_GRAY8,
  ORANGE2,
  BLUE1,
  LIGHT_BLUE2,
  DARK_BLUE1,
} from '@airpremia/cdk/styles/colors';
import Advanceseat from 'public/images/support/img_advanceseat.svg';
import Advanceseat_vtcHalf from 'public/images/support/img_advanceseat_vertical_half.svg';
import Advanceseat_vtcFull from 'public/images/support/img_advanceseat_vertical_full.svg';
import { ListGlobal } from 'src/components';
import { 
  additionalBaggage,
  additionalPacking,
  additionalSideseat,
} from '../../linkset';
import { ESeatImgType } from './types';

function Seat(){

  const { FULL, HALF } = ESeatImgType;
  const [seatImg, setSeatImg] = useState(FULL);
  

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
              <C.seatWrap seatImg={seatImg}>
                <C.flex>
                  <C.titleSub>구매대상 좌석</C.titleSub>
                  <C.badge className="btnHalf" onClick={() => setSeatImg(HALF)}>
                    좌석 전체 보기
                  </C.badge>
                  <C.badge className="btnFull" onClick={() => setSeatImg(FULL)}>
                    좌석 전체 닫기
                  </C.badge>
                </C.flex>
                <C.seatImg className="seatPC"><Advanceseat /></C.seatImg>
                <C.imageTxt>
                  <p><C.icon className="dark" /><span>맨 앞 좌석 & 비상구 좌석</span></p>
                  <p><C.icon className="sky" /><span>복도 & 창가 좌석</span></p>
                  <p><C.icon className="sky2" /><span>가운데 좌석</span></p>
                </C.imageTxt>
                <C.seatImg className="seatHalf"><Advanceseat_vtcHalf /></C.seatImg>
                <C.seatImg className="seatFull"><Advanceseat_vtcFull /></C.seatImg>
                <C.seatbottom>
                  <C.badge className="btnFull" onClick={() => setSeatImg(FULL)}>
                    좌석 전체 닫기
                  </C.badge>
                </C.seatbottom>
              </C.seatWrap>
            </C.content>
          </C.body>
          <C.body>
            <C.titleSub>사전좌석 구매 가격</C.titleSub>
            <C.content>
              <T.table>
                <div className="tbWrap">
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
                        <th>
                          <span className="icon"><C.icon className="dark" /></span>
                          맨 앞 좌석 & 비상구 좌석
                        </th>
                        <td>10,000</td>
                        <td>20,000</td>
                        <td>40,000</td>
                        <td>120,000</td>
                      </tr>
                      <tr>
                        <th>
                          <span className="icon"><C.icon className="sky" /></span>
                          복도 & 창가 좌석
                        </th>
                        <td>-</td>
                        <td>13,000</td>
                        <td>25,000</td>
                        <td>50,000</td>
                      </tr>
                      <tr>
                        <th>
                          <span className="icon"><C.icon className="sky2" /></span>
                          가운데 좌석
                        </th>
                        <td>-</td>
                        <td>10,000</td>
                        <td>20,000</td>
                        <td>40,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </T.table>
            </C.content>
            <C.content>
              <ListGlobal level="ball gray" body={
                <p>맨 앞좌석(Front Seat)및 비상구 좌석은 배정 가능 좌석이 비어있는 경우에 한해 공항 현장에서 동일한 요금으로 구매 가능합니다.​</p>
              }/>
            </C.content>
          </C.body>
          <C.body>
            <C.titleSub>구매 안내</C.titleSub>
            <C.content>
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
            </C.content>
          </C.body>
          <C.body>
            <C.titleSub>취소 및 환불 안내</C.titleSub>
            <C.content>
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
            </C.content>
          </C.body>
          <C.body>
            <C.titleSub>유의사항</C.titleSub>
            <C.content>
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
                <p>탑승 당일 출발지 공항 탑승수속 카운터/기내에서 비상구 착석 불가 손님으로 판단될 경우 현장에서 임의로 좌석배정을 취소 후 재배정되며 구매하신 좌석은 환불이 불가합니다​.</p>
              }/>
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
                title={additionalSideseat.title}
                link={additionalSideseat.link}
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


  seatWrap: styled.div<{
    seatImg: ESeatImgType;
  }>`

    .seatHalf,
    .seatFull {
      display: none;
    }

    @media only screen and (min-width: 1059px) {
      .btnHalf,
      .btnFull,
      .seatHalf,
      .seatFull {
        display: none;
      }
    } 

    @media only screen and (max-width: 1059px) {
      .btnHalf,
      .seatHalf {
        display: inline-block;
      }

      ${({ seatImg }) => {
        if (seatImg === ESeatImgType.FULL) {
          return css`
            .btnHalf,
            .seatHalf {
              display: inline-block;
            }
            .btnFull,
            .seatFull {
              display: none;
            }
          `;
        }
        return css`
          .btnHalf,
          .seatHalf {
            display: none;
          }
          .btnFull,
          .seatFull {
            display: inline-block;
          }
        `;
      }}
    }  
  `,
  flex:styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  seatbottom: styled.div`
    margin-top: 30px;
    text-align: center;
  `,
  badge:styled.button`
    height: 36px;
    padding: 0 12px;
    color: ${WHITE1};
    font-size: 18px;
    border-radius: 30px;
    background-color: ${BLUE1};
    box-sizing: border-box;
    cursor: pointer;

    &.btnFull {
      color: ${BLUE1};
      background-color: ${WHITE1};
      border: 1px solid ${BLUE1};
    }

    @media only screen and (max-width: 767px){
      height: 28px;
      font-size: 13px;
      letter-spacing: -0.28px;
    }
  `,
  seatImg: styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 30px auto 0;

    &.seatPC {
      svg {
        width: 100%;
      }
    }

    @media only screen and (max-width: 1059px) { 
      margin-top: 0;
      text-align: center;

      &.seatPC {
        display: none;
      }
    }
  `,
  imageTxt: styled.div`
    margin-top: 14px;
    text-align: center;

    p {
      margin-left: 90px;
      display: inline-flex;
      align-items: center;

      &:first-child {
        margin-left: 0;
      }
    }

    span {
      margin-left: 10px;
      font-size: 18px;
    }
    
    @media only screen and (max-width: 1059px) { 
      text-align: left;

      p {
        margin-left: 0px;
        display: flex;
      }

      span {          
        margin-left: 10px;
      }
    }

    @media only screen and (max-width: 767px) {
      span {
        font-size: 14px;
        font-weight: 300;
      }
    }
  `,  
  orange: styled.span`
    color: ${ORANGE2};
  `,
  icon: styled.div`
    width: 25px;
    height: 15px;
    display: inline-block;
    vertical-align: middle;
    background-color: ${DARK_BLUE1};
    border-radius: 8px 4px 4px 8px;

    &.sky {
      background-color: ${LIGHT_BLUE2};
    }

    &.sk2 {
      background-color: ${BLUE1};
    }

    @media only screen and (max-width: 767px){
      width: 20px;
      height: 12px;
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
}

const T = {
  table: styled.div`
    .icon {
      display: block;
    }

  `,
}
export default Seat;