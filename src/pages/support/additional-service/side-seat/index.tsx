import styled from 'styled-components';
import {
  ComTitle,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  DARK_BLUE1,
  LIGHT_GRAY6,
  WHITE1,
  ORANGE2,
  RED2,
} from '@airpremia/cdk/styles/colors';
import Img_plusseat from 'public/images/support/img_plusseat.png';
import { ListGlobal } from 'src/components';
import Link from 'next/link'
import Linkblack from 'public/images/support/btn_txt_link_black.svg';

function SideSeat(){
  return (
    <Container>
      <ComTitle
        title="부가서비스 구매"
      />
      <C.wrap>
        <C.body>
          <C.titleMain>공항에서의 옆좌석 구매</C.titleMain>
          <C.sb>
            출발 당일 공항 탑승수속 카운터에서만 구매가 가능하며 더욱 편안한 여행을 하실 수 있습니다.<br></br>
            (커플 손님, 유아를 동반한 손님, 혼자 누워서 여행하고자 하는 손님 등)  
            <C.image></C.image>
          </C.sb>
          <C.title>옆자리 구매 요금</C.title>
          <C.sb>
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
                    <td><C.red>구매 불가</C.red></td>
                    <td>20,000</td>
                    <td>40,000</td>
                    <td>100,000</td>
                  </tr>
                </tbody>
              </table>
            </T.table>
          </C.sb>
          <C.title>유의사항</C.title>
          <C.sb>
            <ListGlobal level="fst" body={
              <p>옆자리 구매는 출발당일 탑승수속 카운터에서 구매가 가능하며, 취소나 환불은 불가합니다.<br></br>단, 항공사 사정으로 인하여 서비스를 제공받지 못할 경우는 취소나 환불이 가능합니다.​</p>
            }/>
            <ListGlobal level="fst" body={
              <p>배정 가능 좌석이 비어있는 경우에 한해 구매가 가능합니다.​</p>
            }/>
            <ListGlobal level="fst" body={
              <p><C.orange>이용 불가 손님</C.orange>: 타 항공사와 공동 운항편이나 제휴 항공사의 항공편 이용손님, CBBG(Cabin Baggage) 이용 손님, EXST(Extra Seat) 이용 손님​</p>
            }/>
            <ListGlobal level="fst" body={
              <p>성인 1명이 유아 2명을 동반한 경우 유아 1명의 항공권은 소아운임이 적용됩니다.​</p>
            }/>
          </C.sb>
          <C.helpTitle>도움이 되셨나요?</C.helpTitle>
          <C.helpCon>
            <C.helpl>
              <Link href="./baggage">
                <a>
                  사전 수하물 구매<Linkblack />
                </a>
              </Link>
            </C.helpl>
            <C.helpl>
              <Link href="./seat">
                <a>
                  사전 좌석 구매<Linkblack />
                </a>
              </Link>
            </C.helpl>
            <C.helpl className="dpN">
              <Link href="./side-seat">
                <a>
                  공항에서의 옆좌석 구매<Linkblack />
                </a>
              </Link>
            </C.helpl>
            <C.helpl>
              <Link href="./packing">
                <a>
                  수하물용품 구매<Linkblack />
                </a>
              </Link>
            </C.helpl>
            <C.helpl>
              <Link href="./#">
                <a>
                  1:1 문의<Linkblack />
                </a>
              </Link>
            </C.helpl>
          </C.helpCon>
        </C.body>
      </C.wrap>
    </Container>
  );
}

const C = {
  orange: styled.span`
    color: ${ORANGE2};
  `,
  red: styled.span`
    color: ${RED2};
  `,
  wrap: styled.div`
  `,
  body: styled.div`
    border-top: 2px solid ${DARK_GRAY1};
    padding-top: 30px;
    @media only screen and (max-width: 767px){
      padding-top: 20px;
    }
  `,
  titleMain: styled.h3`
    font-size: 24px;
    font-weight: 700;
    @media only screen and (max-width: 767px){
      font-size: 22px;
      letter-spacing: -0.4px;
    }
  `,
  image: styled.div`
    background: url(${Img_plusseat});
    background-size: cover;
    width: 750px;
    height: 240px;
    margin: 30px auto 0;
    @media only screen and (max-width: 767px){
      margin: 20px auto 0;
      width: 600px;
      height: 192px;
    }
    @media only screen and (max-width: 599px){
      width: 400px;
      height: 128px;
    }
  `,
  title: styled.h4`
    font-size: 21px;
    font-weight: 700;
    margin-top: 100px;
    @media only screen and (max-width: 767px){
      font-size: 16px;
      letter-spacing: -0.32px;
      margin-top: 60px;
    }
  `,
  sb: styled.div`
    margin-top: 30px;
    font-size: 18px;
    line-height: 1.8em;
    @media only screen and (max-width: 767px){
      margin-top: 20px;
      font-size: 14px;
      letter-spacing: -0.28px;
    }
  `,
  helpl: styled.p`
    width: 100%;
    padding: 25px 0px;
    border-bottom: 1px solid ${LIGHT_GRAY5};
    font-size: 18px;

    &.dpN{
      display: none;
    }
    @media only screen and (max-width: 767px){
      font-size: 14px;
      letter-spacing: -0.28px;
    }
  `,
  helpTitle: styled.p`
    font-size: 24px;
    margin-top: 100px;
    font-weight: 700;
    @media only screen and (max-width: 767px){
      font-size: 22px;
      letter-spacing: -0.4px;
      margin-top: 60px;
    }
  `,
  helpCon: styled. div`
    margin-top: 30px;
    @media only screen and (max-width: 767px){
      margin-top: 20px;
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
        padding: 15px;
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
        &:last-child {
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

export default SideSeat;