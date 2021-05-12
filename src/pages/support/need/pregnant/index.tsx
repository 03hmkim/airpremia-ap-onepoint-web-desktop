import styled from 'styled-components';
import {
  ComTitle,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  WHITE1,
  DARK_GRAY1,
  LIGHT_GRAY8,
  LIGHT_GRAY5,
  ORANGE2,
  DARK_BLUE1,
} from '@airpremia/cdk/styles/colors';
// import Psghelp from 'public/images/support/img_psghelp_menu2.svg'
import { ListGlobal } from 'src/components';
import Link from 'next/link'
import Linkblack from 'public/images/support/btn_txt_link_black.svg';

function Pregnant(){
  return (
    <Container>
      <div>
        <ComTitle title="도움이 필요한 손님" />
        <C.wrap>
          <C.body>
            <C.titleMain>임산부 손님</C.titleMain>
            <C.itemText>임산부 손님께서 안전하고 편안한 여행을 위하여 전 노선에서 항공기 우선탑승과 도착지에서 수하물 우선 수취 서비스를 제공해 드립니다.</C.itemText>
            <C.sbody>
              <C.titleMain>임신 기간별 항공여행 안내</C.titleMain>
              <div>
                <T.table>
                  <table>
                    <colgroup>
                      <col width="30%"></col>
                      <col width="70%"></col>
                    </colgroup>
                    <tbody>
                      <tr>
                        <th>임신 32주 미만</th>
                        <td>
                          의사로부터 항공여행 금지 권고를 받지 않는 일반인과 동일한 항공 여행이 가능합니다.<br />(별도의 구비 서류 필요 없음)
                        </td>
                      </tr>
                      <tr>
                        <th>임신 32주 이상 ~ 37주 미만</th>
                        <td>
                          전문의가 작성한 의사소견서 총 2부(원본 1부/사본 1부)를 제출하셔야 합니다.<br />→탑승기분일(복편탑승일도 동일하게 적용) 7일 이내여야 하며, 의사소견서 내에는 항공 여행의 적합 여부/임신일 수(작성일 기준)/분만 예정일/임신관련 합병증 유무가 명기되어야 합니다.
                        </td>
                      </tr>
                      <tr>
                        <th>임신 37주 이상 (다태 33주 이상)</th>
                        <td>
                          임산부와 태아의 건강을 위해 의사소견서 소지 여부와 관계 없이 항공기 탑승이 불가합니다.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </T.table>
              </div>
            </C.sbody>
            <C.sbody>
              <C.titleMain>의사소견서 준비 방법</C.titleMain>
              <div>
                <ListGlobal level="fst" body={
                  <p>의사소견서는 원본 1부와 사본 1부를 준비해주시기 바랍니다.​</p>
                }/>
                <ListGlobal level="fst" body={
                  <p>의사소견서 내에는 항공 여행의 적합 여부/분만 예정일/분만 징후 및 임신 관련 합병증 유무의 내용이 포함되어야 합니다.</p>
                }/>
                <ListGlobal level="fst" body={
                  <p>
                    <C.orange>탑승기준일(복편탑승일도 동일하게 적용) 7일 이내 발급한 것</C.orange>이여야 하며, 복편의 탑승일을 기준으로 7일을 초과한 경우 현지에서 다시 의사소견서를 제출하여야 합니다.
                    <C.ex>의사진단서를 5월 1일에 발급받은 임산부 손님의 여정: 5월 2일 인천-하노이/5월 8일 하노이-인천 <br />→ 5월 2일: 소견서 유효/5월 8일: 소견서 유효기간 만료</C.ex>​</p>
                }/>
              </div>
            </C.sbody>
          </C.body>
          <C.sbody>
            <C.titleMain>도움이 되셨나요?</C.titleMain>
            <C.content>
              <C.helpl>
                <Link href="./infant">
                  <a>
                    유아 동반 손님<Linkblack />
                  </a>
                </Link>
              </C.helpl>
              <C.helpl>
                <Link href="./teenager">
                  <a>
                    혼자 여행하는 어린이,청소년<Linkblack />
                  </a>
                </Link>
              </C.helpl>
              <C.helpl className="dpN">
                <Link href="./pregnant">
                  <a>
                    임산부 손님<Linkblack />
                  </a>
                </Link>
              </C.helpl>
              <C.helpl>
                <Link href="./help">
                  <a>
                    장애인 및 의료 도움이 필요한 손님<Linkblack />
                  </a>
                </Link>
              </C.helpl>
              <C.helpl>
                <Link href="./pet">
                  <a>
                    반려동물을 동반하는 손님<Linkblack />
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
            </C.content>
          </C.sbody>
        </C.wrap>
      </div>
    </Container>
  );
}

const C = {
  wrap: styled.div`
    border-top: 2px solid ${DARK_GRAY1};
  `,
  body: styled.div`
    margin-top: 100px;
    &:first-of-type{
      margin-top: 30px;
      @media only screen and (max-width: 1059px) {
        margin-top: 20px;;
      }
    }
  `,
  sbody: styled.div`
    margin-top: 100px;
    @media only screen and (max-width: 1059px) {
      margin-top: 60px;
    }
  `,
  titleMain: styled.h2`
    font-size:24px;
    font-weight: bold;
    margin-bottom:30px;
    @media only screen and (max-width: 1059px) {
      margin-bottom:20px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 22px;
      line-height: 28px;
      letter-spacing: -0.04em;
    }
  `,
  title: styled.h3`
    font-size: 21px;
    font-weight: bold;
    @media only screen and (max-width: 767px) {
      font-size: 16px;
      line-height: 26px;
      letter-spacing: -0.032em;
    }
  `,
  itemText: styled.p`
    font-size: 18px;
    line-height: 30px;
    span{
        color: ${LIGHT_GRAY8}
    }
    @media only screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 1.8em;
      letter-spacing: -0.028em;
    }
  `,
  content: styled.div`
    margin-top: 30px;
    @media only screen and (max-width: 1059px) {
      margin-top: 20px;;
    }
  `,
  div: styled.div`
    padding-top: 25px;
  `,
  span: styled.span`
    color:#FF5800;
    border-bottom: 2px solid #FF5800;
  `,
  p: styled.p``,
  bold: styled.p`
    font-weight: bold;
  `,
  helpl: styled.p`
    width: 100%;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 1.8em;
    font-family: 'NotoSans';
    font-weight: 700;
    padding: 25px 0px;
    border-bottom: 1px solid ${LIGHT_GRAY5};
    &.dpN{
      display: none;
    }
  `,
  sb: styled.div`
    margin-top: 60px;
  `,
  orange: styled.span`
    color: ${ORANGE2};
  `,
  ex: styled.div`
    position: relative;
    font-size: 18px;
    line-height: 2em;
    padding-left: 44px;
    &:before {
      content: "예시)";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }
    @media only screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 1.8em;
      letter-spacing: -0.028em;
    }
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
      border-top: 0.75px solid ${DARK_BLUE1};
      border-bottom: 0.75px solid ${DARK_BLUE1};
      th,
      thead td,
      td strong {
        color: ${WHITE1};
        font-size: 20px;
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
        font-size: 20px;
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
      th:last-child,
      td:last-child{
        text-align: center;
      }
      thead th,
      thead td{
        padding: 18px 0;
        border-bottom: 0.75px solid ${DARK_GRAY1};
      }
      tbody th,
      tbody td{
        padding: 15px;
        border-bottom: 0.75px solid ${LIGHT_GRAY5};
        vertical-align: middle;
        .tableExBox{
          width: 80%;
          margin: 0 auto;
        }
        @media only screen and (max-width: 767px) {
          font-size:14px;
        }
      }
      tbody th{
        background: ${DARK_BLUE1};
      }
      tbody tr:last-child{
        th,td{
          border-bottom: none;
        }
      }
    }
  `,
}

export default Pregnant;