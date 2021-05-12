import styled from 'styled-components';
import {
  ComTitle,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  LIGHT_GRAY7,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import { ListGlobal } from 'src/components';
import Linkblack from 'public/images/support/btn_txt_link_black.svg';
import Link from 'next/link'


function OverBalance(){
  return (
    <Container>
      <S.container>
        <ComTitle
          title="수하물"
        />
        <C.wrap>
          <C.body>
            <C.title>초과수하물</C.title>
            <C.sb>
              <ListGlobal level="fst" body={
                <p>위탁수하물이 추가로 필요한 경우 탑승수속 카운터에서 구매하실 수 있습니다.</p>
              }/>
            </C.sb>
            <T.table>
              <table>
                <colgroup>
                  <col width="10%"></col>
                  <col width="10%"></col>
                  <col width="20%"></col>
                  <col width="20%"></col>
                  <col width="20%"></col>
                  <col width="20%"></col>
                </colgroup>
                <thead>
                  <tr>
                    <td rowSpan={2} colSpan={2}>구분</td>
                    <td rowSpan={2}>국내선</td>
                    <td colSpan={3}>국제선</td>
                  </tr>
                  <tr>
                    <td>동북아</td>
                    <td>동남아</td>
                    <td>미주</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={2}>개수 초과 (최대 23kg)</td>
                    <td>-</td>
                    <td>70,000</td>
                    <td>100,000</td>
                    <td>200,000</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>무게 초과 (23kg 초과/1kg)</td>
                    <td>2,000/kg</td>
                    <td>10,000/kg</td>
                    <td>15,000/kg</td>
                    <td>20,000/kg</td>
                  </tr>
                  <tr>
                    <td rowSpan={2}>크기 초과</td>
                    <td>159~203cm</td>
                    <td>-</td>
                    <td>80,000</td>
                    <td>120,000</td>
                    <td>160,000</td>
                  </tr>
                  <tr>
                    <td>204~292cm</td>
                    <td>10,000</td>
                    <td>160,000</td>
                    <td>240,000</td>
                    <td>320,000</td>
                  </tr>
                </tbody>
              </table>
            </T.table>
            <C.sb>
              <C.sub>요금 안내</C.sub>
              <ListGlobal level="fst" body={
                <p>무료수하물 허용량을 초과할 경우 초과수하물 요금이 부과됩니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>초과수하물 요금 적용 기준은 현장(공항)구매 요금 기준이며, 항공기 출발 48시간 전 모바일 APP, 홈페이지 및 예약센터를 통해 사전수하물 구매도 이용하실 수 있습니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>위탁 가능한 수하물 최대 무게 및 부피는 출/도착지 국가에 따라 제한될 수 있습니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>휴대수하물  허용량 외의 수하물은 반드시 위탁하셔야 하며, 탑승게이트에서 위탁 시 별도의 수수료가 부과됩니다.</p>
              }/>
            </C.sb>
            <C.sb>
              <C.sub>도움이 되셨나요?</C.sub>
              <C.helpl>
                <Link href="./carry">
                  <a>
                    운송제한물품<Linkblack />
                  </a>
                </Link>
              </C.helpl>
              <C.helpl>
                <Link href="./free-baggage">
                  <a>
                    무료수하물<Linkblack />
                  </a>
                </Link>
              </C.helpl>
              <C.helpl>
                <Link href="./prohibition">
                  <a>
                    초과수하물<Linkblack />
                  </a>
                </Link>
              </C.helpl>
              <C.helpl className="dpN">
                <Link href="./special-carry">
                  <a>
                    특수수하물<Linkblack />
                  </a>
                </Link>
              </C.helpl>
              <C.helpl>
                <Link href="./lost-carry">
                  <a>
                    수하물 배상<Linkblack />
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
            </C.sb>
          </C.body>
        </C.wrap>
      </S.container>
    </Container>
  )
}

const S = {
  container: styled.div``,
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
    margin-top: 20px;
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
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 1.8;
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
    line-height: 1.8;
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
  center: styled.p`
    text-align: center;
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
  lgray: styled.p`
    color: ${LIGHT_GRAY7};
  `,
  linkTitle: styled.p`
    color: ${BLUE1};
    margin-left: 10px;
    margin-top: 10px;
  `,
  igr: styled.div`
    width: 50%;
    margin-top: 80px;
    display: inline-block;
  `,
  desc: styled.p`
    margin-left: 50px;
    line-height: 1.8;
    display: inline-block;
    vertical-align: middle;
  `,
  img: styled.p`
    display: inline-block;
    vertical-align: middle;
  `,
  linkhelp: styled.a`
    text-decoration-line: none;
    border: 0px;
  `,
  helpl: styled.p`
    width: 100%;
    padding: 25px 0px;
    border-bottom: 1px solid ${LIGHT_GRAY5};
    
    &.dpN{
      display: none;
    }
  `,
}
    
const T = {
table: styled.div`
  padding: 30px;
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
      vertical-align: middle;
    }
    th:last-child,
    td:last-child{
      text-align: right;
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
export default OverBalance;