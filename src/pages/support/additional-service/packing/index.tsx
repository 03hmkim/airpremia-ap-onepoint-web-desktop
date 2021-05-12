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
} from '@airpremia/cdk/styles/colors';
import { ListGlobal } from 'src/components';
import Link from 'next/link'
import Linkblack from 'public/images/support/btn_txt_link_black.svg';

function Packing(){
  return (
    <Container>
      <ComTitle
        title="부가서비스 구매"
      />
      <C.wrap>
        <C.body>
          <C.titleMain>수하물용품 구매</C.titleMain>
          <C.sb>
            출발 당일 탑승수속 카운터에서 유모차 및 위탁수하물을 포장할 수 있는 비닐을 구매하실 수 있습니다.
          </C.sb>
          <C.title>가격 및 규격</C.title>
          <C.sb>
            <T.table>
              <table>
                <colgroup>
                  <col width="50%"></col>
                  <col width="50%"></col>
                </colgroup>
                <thead>
                  <tr>
                    <th>구분</th>
                    <td>포장용 비닐</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>가격</th>
                    <td>3,000</td>
                  </tr>
                  <tr>
                    <th>규격</th>
                    <td>1,000 X 1,510mm</td>
                  </tr>
                </tbody>
              </table>
            </T.table>
          </C.sb>
          <C.title>유의사항</C.title>
          <C.sb>
            <ListGlobal level="fst" body={
              <p>구매 후 환불이 불가합니다. (항공기 지연, 결항 포함)​</p>
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
            <C.helpl>
              <Link href="./side-seat">
                <a>
                  공항에서의 옆좌석 구매<Linkblack />
                </a>
              </Link>
            </C.helpl>
            <C.helpl className="dpN">
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
      padding: 20px 0px;
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
    margin-top: 60px;
    @media only screen and (max-width: 767px){
      margin-top: 40px;
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
export default Packing;