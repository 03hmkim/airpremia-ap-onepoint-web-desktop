import styled from 'styled-components';
import {
  ComTitle,
  ListGlobal,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import Linkblue from 'public/images/support/btn_txt_link_blue.svg';
import Caution from 'public/images/support/ico_caution.svg';
import Link from 'next/link'
import Linkblack from 'public/images/support/btn_txt_link_black.svg';

function Teenager(){
  return (
    <Container>
      <S.container>
        <ComTitle title="도움이 필요한 손님" />
        <C.wrap>
          <C.body>
            <C.div>
              <C.inline>
                <C.title>혼자 여행하는 어린이/청소년</C.title>
              </C.inline>
              <C.subTitle>이용 대상</C.subTitle>
              <C.right>
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
                        <th></th>
                        <td></td>
                        <td>국내선</td>
                        <td></td>
                        <td>국제선</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>혼자 여행하는 어린이(UM)</th>
                        <td></td>
                        <td>만 5세 이상 ~ 만 13세 미만</td>
                        <td></td>
                        <td>만 5세 이상 ~ 만 12세 미만</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <th>혼자 여행하는 청소년(YPTA)</th>
                        <td></td>
                        <td>미제공</td>
                        <td></td>
                        <td>만 12세 이상 ~ 만 17세 미만</td>
                      </tr>
                    </tbody>
                  </table>
                </T.table>
              </C.right>
            </C.div>
            <C.sbody>
              <C.subTitle>운임 안내</C.subTitle>
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
                        <th></th>
                        <td></td>
                        <td>국내선</td>
                        <td></td>
                        <td>국제선</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>혼자 여행하는 어린이(UM)</th>
                        <td></td>
                        <td>에어프레미아에서 별도로 정한 성인운임</td>
                        <td></td>
                        <td>에어프레미아에서 별도로 정한 성인운임<br />+서비스 구간당(인당/편도) 100,000</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <th>혼자 여행하는 청소년(YPTA)</th>
                        <td></td>
                        <td>미제공</td>
                        <td></td>
                        <td>에어프레미아에서 별도로 정한 성인운임<br />+서비스 구간당(인당/편도) 100,000</td>
                      </tr>
                    </tbody>
                  </table>
                </T.table>
              </C.content>
            </C.sbody>
            <C.sbody>
              <C.subTitle>이용 안내</C.subTitle>
              <C.itemText>혼자 여행하는 어린이/청소년의 안전하고 편안한 여행을 위하여 제공하는 서비스입니다.</C.itemText>
              <C.ul>
                <C.li>가. 출발지: 담당직원이 출국수속 및 탑승을 도와드리며 해당 항공편 객실 승무원에게 인계합니다.</C.li>
                <C.li>나. 기내: 객실승무원들이 비행 중 어린이를 보살펴 드립니다.</C.li>
                <C.li>다. 도착지: 담당직원이 객실승무원으로부터 인계를 받고 수하물 수취와 입국 수속을 도와드립니다. 그 후, 도착지 보호자에게 인계합니다.</C.li>
              </C.ul>
            </C.sbody>
            <C.sbody>
              <C.subTitle>서비스 신청 방법</C.subTitle>
              <C.ul>
                <C.li>1) 비동반 소아 서비스 신청: 항공기 출발 48시간 전까지 예약센터(02-6953-6115)로 서비스를 신청하신 후 확약을 받으시기  바랍니다.</C.li>
                <C.li>2) 신청서를 다운받아 작성하여 지참해주시기 바랍니다.</C.li>
                <C.li>
                  <C.linkm>
                    <a href="/document/support_need-teenager_01.pdf" download className="flex">
                      <ListGlobal level="fst" body={<p>비동반 소아 서비스 신청서</p>} />
                      <Linkblue />
                    </a>
                  </C.linkm>
                </C.li>
                <C.li>
                  <C.linkm>
                    <a href="/document/support_need-teenager_02.pdf" download className="flex">
                      <ListGlobal level="fst" body={<p>보호자 서약서 다운</p>} />
                      <Linkblue />
                    </a>
                  </C.linkm>
                </C.li>
                <C.li>3) 여행 당일 보호자와 함께 항공기 출발 최소 120분 전까지 에어프레미아 탑승수속 카운터에 도착 하셔서 담당 직원​의 안내를 받으시면 됩니다.</C.li>
              </C.ul>
            </C.sbody>
            <C.sbody className="dpN">
              <C.subTitle>국가별 비동반 소아 규정</C.subTitle>
              <C.itemText><C.bold>- 베트남 UM 규정:</C.bold> 만 14세 미만 손님이 부모 또는 보호자 없이 혼자 베트남에 입국하려는 경우, 비동반 소아 서비스를 신청해야 입국이 가능합니다.</C.itemText>
            </C.sbody>
            <C.sbody>
              <C.content>
                <C.itemTitle><div className="flex"><C.image><Caution /></C.image>유의 사항</div></C.itemTitle>
                <ListGlobal level="fst" body={
                          <p>출발할 때와 도착할 때는 반드시 보호자(만 18세 이상)의 인수인계가 필요합니다.​</p>
                        } />
              <ListGlobal level="fst" body={
                          <p>회사가 직접 운항하는 구간만 이용 가능하며, 타사로 연결되는 항​공편의 경우 접수 불가합니다.</p>
                        } />
                <ListGlobal level="fst" body={
                          <p>항공기 출발 48시간 전 예약없이 출발 당일 신청 시에는 여행이 불가할 수도 있습니다.</p>
                        } />
                <ListGlobal level="fst" body={
                          <p>필요한 비동반 소아 서류(비동반 소아 서비스 신청서, 보호자 서약서)는 사전에 작성하시어 출발 당일 공항 카운터에 제출​하셔야 하며, 구비 여부에 따라 서비스가 제공되지 않을수도 있습니다.</p>
                        } />
              </C.content>
            </C.sbody>
          </C.body>
          <C.body>
              <C.title>도움이 되셨나요?</C.title>
              <C.sb>
                <C.helpl>
                  <Link href="./infant">
                    <a>
                      유아 동반 손님<Linkblack />
                    </a>
                  </Link>
                </C.helpl>
                <C.helpl className="dpN">
                  <Link href="./teenager">
                    <a>
                      혼자 여행하는 어린이,청소년<Linkblack />
                    </a>
                  </Link>
                </C.helpl>
                <C.helpl>
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
  wrap: styled.div`
    margin-top: 70px;
    border-top: 2px solid ${DARK_GRAY1};
  `,
  body: styled.div`
    margin-top: 140px;
    &:first-of-type{
      margin-top: 0;
    }
  `,
  title: styled.h4`
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 30px;
    
  `,
  subTitle: styled.h5`
    font-size: 21px;
    font-weight: bold;
    padding-bottom: 30px;
  `,
  itemTitle: styled.h6`
    padding-bottom: 30px;
    font-size: 18px;
    font-weight: 700;
    .flex{
      display: flex;
    }
  `,
  linkTitle: styled.a`
    font-size: 16px;
    font-weight: bold;
    color: ${BLUE1};
    line-height: 36px;
    cursor: pointer;
  `,
  itemText: styled.p`
    font-size: 18px;
    font-weight:700;
    padding-bottom: 20px;
  `,
  description: styled.p`
    font-size:14px;
    color: ${LIGHT_GRAY8};
    margin-top: 15px;
  `,
  
  content: styled.div`
    padding-top:30px;
  `,
  button: styled.button`
    background: none;
    color: #ccc;
    font-size: 15px;
    font-weight: bold;
    margin:30px 40px 30px 0;
  `,
  div: styled.div`
    padding-top: 25px;
  `,
  ul: styled.ul`
    font-size: 18px;
    font-weight: bold;`,
  li: styled.li`
    font-size: 18px;
    line-height: 36px;
    font-weight: 500;
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
    &.dpN{
      display: none;
    }
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
  underline: styled.span`
    text-decoration:underline ;
  `,
  linkm: styled.p`
    margin-left: 10px;
    a{
      color: ${BLUE1};
      font-weight: 600;
      cursor: pointer;
        &.flex{
          display: flex;
          align-items: center;
        }
    }
    &:last-child{
      margin-left: 0px;
    }
  `,
  flex: styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  `,
  sb: styled.div`
  margin-top: 60px;
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

export default Teenager;