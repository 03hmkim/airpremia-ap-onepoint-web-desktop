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
  DARK_GRAY3,
  LIGHT_BLUE2,
} from '@airpremia/cdk/styles/colors';
import Airplane from 'public/images/img_airplane.png';
import Airplanedetail from 'public/images/img_airplanedetail.png';
import Galley from 'public/images/img_map_legend_galley.svg';
import Toilet from 'public/images/img_map_legend_toilet.svg';


function AirplaneInfo(){
  return (
    <Container>
      <ComTitle
        title="항공기 소개"
      />
      <C.wrap>
        <C.body>
          <C.tmi>
            <C.center><img src={Airplane} /></C.center>
          </C.tmi>
          <C.tmi>
            <C.p>에어프레미아는 꿈의 항공기라 불리는 보잉 787-9를 운영합니다.</C.p>
            <C.p>탄소 복합소재를 사용해 더 튼튼하고 가벼워졌으며 소재의 혁신을 통해 기내 환경을 개선했습니다. 이제 쾌적한 습도와 줄어든 소음, 최적의 공기로 만족스러운 비행을 경험하실 수</C.p>
            <C.p> 있습니다. 기존 항공기 대비 더 길어진 항속 거리와 향상된 연료효율을 자랑하는 차세대 항공기 보잉 787-9은 중장거리 노선에 투입할 수 있는 최적의 항공기입니다.</C.p>
          </C.tmi>
        </C.body>
        <C.sbody>
          <T.table>
            <table>
              <colgroup>
                <col width="50%"></col>
                <col width="50%"></col>
              </colgroup>
                <thead>
                  <tr>
                    <th>항공기 제원</th>
                    <td></td>
                  </tr>
                </thead>
              <tbody>
                <tr>
                  <th>운영 좌석 수</th>
                  <td>309석</td>
                </tr>
                <tr>
                  <th>제조사</th>
                  <td>BOEING</td>
                </tr>
                <tr>
                  <th>좌석구분</th>
                  <td>PREMIA 42, ECONOMY 35</td>
                </tr>
                <tr>
                  <th>순항 속도</th>
                  <td>1,040km/h</td>
                </tr>
                <tr>
                  <th>최대 운항거리</th>
                  <td>13,530 km</td>
                </tr>
                <tr>
                  <th>최대 운항고도</th>
                  <td>431,000ft</td>
                </tr>
                <tr>
                  <th>최대이륙중량</th>
                  <td>247,207 kg</td>
                </tr>
                <tr>
                  <th>항공기 길이</th>
                  <td>62.8m</td>
                </tr>
                <tr>
                  <th>날개폭</th>
                  <td>60.1 m</td>
                </tr>
                <tr>
                  <th>꼬리날개 높이</th>
                  <td>17m</td>
                </tr>
              </tbody>
            </table>
          </T.table>
        </C.sbody>
        <C.sbody>
          <T.table>
            <table>
              <colgroup>
                <col width="50%"></col>
                <col width="50%"></col>
              </colgroup>
                <thead>
                  <tr>
                    <th>항공기 등록현황</th>
                    <td></td>
                  </tr>
                </thead>
              <tbody>
                <tr>
                  <th>기종모델</th>
                  <td>B787-9</td>
                </tr>
                <tr>
                  <th>등록번호</th>
                  <td>HL8387</td>
                </tr>
                <tr>
                  <th>제조년월</th>
                  <td>2020.09.19</td>
                </tr>
              </tbody>
            </table>
          </T.table>
        </C.sbody>
        <C.sbody>
          <T.thtable>
            <table>
              <colgroup>
                <col width="33.3333%"></col>
                <col width="33.3333%"></col>
                <col width="33.3333%"></col>
              </colgroup>
                <thead>
                  <tr>
                    <th>좌석 배치도</th>
                    <td>PREMIA 42</td>
                    <td>ECONOMY 35</td>
                  </tr>
                </thead>
              <tbody>
                <tr>
                  <th>좌석 수</th>
                  <td>56</td>
                  <td>253</td>
                </tr>
                <tr>
                  <th>좌석 간격</th>
                  <td>
                    <p>42 inches</p>
                    <p>(106.68cm)</p>
                  </td>
                  <td>
                    <p>35 inches</p>
                    <p>(88.9cm)</p>
                  </td>
                </tr>
                <tr>
                  <th>좌석 넓이</th>
                  <td>
                    <p>20 inches</p>
                    <p>(50.8cm)</p>
                  </td>
                  <td>
                    <p>18 inches</p>
                    <p>(45.72cm)</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </T.thtable>
        </C.sbody>
        <C.sb>
          <C.block>
            <C.span>법례</C.span>
            <C.ico><C.image><C.box></C.box></C.image>PREMIA 42</C.ico>
            <C.picto><C.image><Galley /></C.image>갤리</C.picto>
          </C.block>
          <C.block>
            <C.span></C.span>
            <C.ico><C.image><C.bluebox></C.bluebox></C.image>ECONOMY 35</C.ico>
            <C.picto><C.image><Toilet /></C.image>화장실</C.picto>
          </C.block>
        </C.sb>
        <C.sb>
          <C.tmi>
            <C.center><img src={Airplanedetail} /></C.center>
          </C.tmi>
        </C.sb>
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
  title: styled.h4`
    font-size: 22px;
    font-weight: bold;
    line-height: 1.8;
  `,
  sub: styled.h5`
    margin-top: 60px;
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
    font-size: 16px;
    color: ${DARK_GRAY1};
    line-height: 36px;
  `,
  span: styled.p`
    width: 78px;
    color: ${DARK_GRAY1};
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    line-height: 1.8;
    display: inline-block;
  `,
  b: styled.p`
    font-weight: bold;
  `,
  ul: styled.ul`
    
  `,
  li: styled.li`
    margin-bottom: 15px;
    padding-left: 10px;
    position: relative;
    &::before{
      content:"";
      width: 4px;
      height: 4px;
      top: 5px;
      left: 0px;
      text-indent: -9999px;
      display: block;
      position: absolute;
      background-color: ${DARK_GRAY1};
      border-radius: 50%
    }
    &:first-child{
      margin-top: 10px;
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
    padding: 0px 20px 20px 0px;
    display: flex;
    justify-align: center;
  `,
  image: styled.p`
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle;
  `,
  ntg: styled.p`
    font-size: 14px;
    color: ${LIGHT_GRAY8};
    margin-top: 15px;
  `,
  lft: styled.p`
    font-size: 16px;
    margin: 10px 0px;
    padding-left: 10px;
    line-height: 1.8;
    &first-child{
      margin-top: 0px;
    }
  `,
  dlft: styled.p`
    font-size: 16px;
    margin: 10px 0px;
    padding-left: 25px;
    line-height: 1.8;
    &first-child{
      margin-top: 0px;
    }
  `,
  helpl: styled.p`
    width: 100%;
    padding-top: 80px;
    border-bottom: 1px solid ${LIGHT_GRAY5};
  `,
  under: styled.u`
    color: ${BLUE1};
  `,
  linkm: styled.p`
    margin-top: 20px;
  `,
  tmi: styled.p`
    margin-top: 30px;
  `,
  linkpage: styled.a`
    font-size: 15px;
    font-weight: regular;
    color: ${BLUE1};
    margin-left: 20px;
  `,
  txt: styled.p`
    font-size: 15px;
    line-height: 1.8;
    margin-top: 15px;
  `,
  mlz: styled.p`
    margin-left: 0px;
  `,
  center: styled.p`
    text-align: center;
  `,
  block: styled.div`
    padding-top: 15px;
    display: block;
  `,
  ico: styled.p`
    width: 135px;
    display: inline-block;
  `,
  picto: styled.p`
    margin-left: 20px;
    display: inline-block;
  `,
  box: styled.div`
    width: 21px;
    height: 28px;
    border-radius: 8px 8px 4px 4px;
    background-color: ${DARK_GRAY3};
    display: inline-block;
    vertical-align: text-bottom;
  `,
  bluebox: styled.div`
  width: 21px;
  height: 28px;
  border-radius: 8px 8px 4px 4px;
  background-color: ${LIGHT_BLUE2};
  display: inline-block;
  vertical-align: text-bottom;
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
  thtable: styled.div`
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

export default AirplaneInfo;