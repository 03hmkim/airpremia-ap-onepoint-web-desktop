import styled from 'styled-components';
import {
  ComTitle,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
} from '@airpremia/cdk/styles/colors';
import { ListGlobal } from 'src/components';
import Link from 'next/link'
import Linkblack from 'public/images/support/btn_txt_link_black.svg';
import BaggageTab from './baggageTab';

function Baggage(){
  return (
    <Container>
      <S.container>
        <ComTitle
          title="부가 서비스 구매"
        />
        <C.wrap>
          <C.body>
            <C.title>사전 수하물 구매</C.title>
            <BaggageTab />
            {/* <C.sub>국제선</C.sub>
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
                      <td></td>
                      <td>동북아</td>
                      <td>동남아</td>
                      <td>미주</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>개수</th>
                      <td>1~23kg</td>
                      <td>60,000</td>
                      <td>80,000</td>
                      <td>160,000</td>
                    </tr>
                    <tr>
                      <th>무게</th>
                      <td>
                        <p>24~28kg</p>
                        <p>29~32kg</p>
                      </td>
                      <td>
                        <p>25,000</p>
                        <p>50,000</p>
                      </td>
                      <td>
                        <p>35,000</p>
                        <p>70,000</p>
                      </td>
                      <td>
                        <p>60,000</p>
                        <p>100,000</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </T.table> */}
          </C.body>
          {/* <C.body>
            <C.sub>국내선</C.sub>
            <C.content>
              <T.table>
                <table>
                  <colgroup>
                    <col width="20%"></col>
                    <col width=""></col>
                    <col width="240px"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>기준</th>
                      <td></td>
                      <td>공통</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>개수</th>
                      <td></td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>무게</th>
                      <td></td>
                      <td>
                        <p>2,000/kg</p>
                      </td>
                    </tr>
                    <tr>
                      <th>크기</th>
                      <td></td>
                      <td>
                        <p>159~203cm</p>
                        <p>204~292cm</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </T.table>
            </C.content>
          </C.body>
          <C.body>
            <C.sub>국제선</C.sub>
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
                        <th>기준</th>
                        <td></td>
                        <td>동북아</td>
                        <td>동남아</td>
                        <td>미주</td>
                      </tr>
                    </thead>
                  <tbody>
                    <tr>
                      <th>개수</th>
                      <td>-</td>
                      <td>70,000</td>
                      <td>100,000</td>
                      <td>200,000</td>
                    </tr>
                    <tr>
                      <th>무게</th>
                      <td>-</td>
                      <td>10,000/kg</td>
                      <td>15,000/kg</td>
                      <td>20,000/kg</td>
                    </tr>
                    <tr>
                      <th>크기</th>
                      <td>
                        <p>159~203cm</p>
                        <p>204~292cm</p>
                      </td>
                      <td>
                        <p>80,000</p>
                        <p>160,000</p>
                      </td>
                      <td>
                        <p>120,000</p>
                        <p>240,000</p>
                      </td>
                      <td>
                        <p>160,000</p>
                        <p>320,000</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </T.table>
            </C.content>
          </C.body> */}
          <C.body>
            <C.sub>구매 안내</C.sub>
            <C.content>
              <ListGlobal level="fst" body={
                <p>사전 구매 전 무료수하물 허용량을 먼저 확인해주시기 바랍니다.​</p>
              }/>
              <ListGlobal level="fst" body={
                <p>항공기 출발 48시간 전까지 홈페이지, 모바일 앱 및 예약센터를 통하여 구매하실 수 있습니다.​</p>
              }/>
              <ListGlobal level="fst" body={
                <p>수하물 구매는 탑승 당일 탑승수속 카운터에서도 구매 하실 수 있으나 초과수하물 요금이 적용됩니다.​</p>
              }/>
              {/* <ListGlobal level="fst" body={
                <p>타 항공사와 공동 운항편이나 제휴 항공사의 항공편 및 연결편 이용손님은 구매가 불가합니다.​</p>
              }/>
              <ListGlobal level="fst" body={
                <p>구매처가 한국인 경우 KRW, 그 외 해외공항은 USD 또는 현지통화로 구매하실 수 있습니다.​</p>
              }/>  
              ---------국제선 시 표출------------
              */}
            </C.content>
          </C.body>
          <C.sbody>
            <C.sub>취소 및 환불 안내</C.sub>
            <C.content>
              <ListGlobal level="fst" body={
                <p>항공기 출발 48시간 전까지만 취소 및 환불이 가능하며 48시간 이내에는 취소 및 환불이 불가합니다.<br></br>단, 항공기 지연 및 결항등 항공사 사정에 항공편 취소의 경우는 환불이 가능합니다</p>
              }/>
              <ListGlobal level="fst" body={
                <p>여정 변경/취소 시의 경우,</p>
              }/>
              <ListGlobal level="scd" body={
                <p>항공기 출발 48시간 전에는 구매한 사전수하물은 자동 취소되며 환불 가능합니다.​</p>
              }/>
              <ListGlobal level="scd" body={
                <p>항공기 출발 48시간 이내에는 구매한 사전수하물은 자동 취소되며 환불 불가합니다.​</p>
              }/>
              <ListGlobal level="fst" body={
                <p>환불 및 취소는 홈페이지, 모바일 앱 및 예약센터 각 구매처에서만 가능합니다.​</p>
              }/>
            </C.content>
          </C.sbody>
          <C.sbody>
            <C.sub>유의사항</C.sub>
            <C.content>
              <ListGlobal level="fst" body={
                <p>사전수하물구매는 당사자만 적용되며 양도가 불가능합니다.​</p>
              }/>
              <ListGlobal level="fst" body={
                <p>사전 구매하신 수하물은 탑승수속 카운터에서만 이용 가능하며 탑승구 등에서는 사용이 불가합니다.​</p>
              }/>
              <ListGlobal level="fst" body={
                <p>특수수하물 및 반려동물을 동반하는 손님은 사전수하물 구매가 불가능하며 탑승수속 카운터에서만 가능합니다.​</p>
              }/>
            </C.content>
          </C.sbody>
          <C.body>
            <C.sub>도움이 되셨나요?</C.sub>
            <C.sb>
              <C.helpl className="dpN">
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
            </C.sb>
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
  sb: styled.div`
    margin-top: 60px;
  `,
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
  ntg: styled.p`
    font-size: 14px;
    color: ${LIGHT_GRAY8};
    margin-top: 15px;
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
//         font-size: 15px;
//         font-weight: bold;
//         line-height: 1.6;
//         letter-spacing: -0.3px;
//         text-align: center;
//         vertical-align: middle;
//       }
//       td strong {
//         margin-top: 30px;
//         display: block;
//         &:first-of-type {
//           margin-top: 0;
//         }
//       }
//       td{
//         font-size: 14px;
//         font-weight: 400;
//         line-height: 1.9;
//         letter-spacing: -0.3px;
//         text-align: center;
//         vertical-align: middle;
//         &>p {
//           margin-top: 18px;
//         }
//         &>p:first-of-type {
//           margin-top: 0;
//         }
//       }
//       th:last-child,
//       td:last-child{
//         text-align: center;
//         vertical-align: middle;
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

export default Baggage;