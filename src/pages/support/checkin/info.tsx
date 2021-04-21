import styled from 'styled-components';
import {
  ComTitle,
  SpeechBubble,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import EnterTab from './enterTab'
import BoardingTab from './boardingTab'


function additionalServiceCheckin(){
    return (
      <Container>
        <ComTitle
          title="탑승 수속"
        />
        <C.wrap>
          <C.body>
            <C.title>탑승수속 안내</C.title>
            <C.sb>
                <SpeechBubble backgroundColor={BLUE1}>
                STEP1
                </SpeechBubble>
            </C.sb>
            <C.sub>공항 도착</C.sub>
            <C.p>탑승수속 카운터 및 출국장이 혼잡할 수 있으니 탑승수속 카운터 오픈 시간 및 마감 시간을 확인하시어 도착하여 주시기 바랍니다.​</C.p>
            <C.area>
              <T.table>
                <table>
                  <colgroup>
                    <col width="33.3333%"></col>
                    <col width=""></col>
                    <col width="240px"></col>
                  </colgroup>
                    <thead>
                      <tr>
                        <th>기준</th>
                        <td>오픈 시간</td>
                        <td>마감 시간</td>
                      </tr>
                    </thead>
                  <tbody>
                    <tr>
                      <th>국제선 인천공항</th>
                      <td>항공기 출발 3시간 전</td>
                      <td>항공기 출발 50분 전</td>
                    </tr>
                    <tr>
                      <th>국제선 호치민공항</th>
                      <td>업데이트 예정</td>
                      <td>업데이트 예정</td>
                    </tr>
                    <tr>
                      <th>
                          <p>국제선 김포공항</p>
                          <p>국제선 제주공항</p>
                      </th>
                      <td rowSpan={2}>항공기 출발 1시간 30분 전</td>
                      <td rowSpan={2}>항공기 출발 20분 전</td>
                    </tr>
                  </tbody>
                </table>
              </T.table>
            </C.area>
          </C.body>
          <C.body>
            <C.sb>
                <SpeechBubble backgroundColor={BLUE1}>
                    STEP2
                </SpeechBubble>
            </C.sb>
            <C.sub>탑승권 발급</C.sub>
            <C.p>사전에 온라인 체크인을 진행하거나 공항 현장 탑승수속 카운터에서 탑승권을 발급할 수 있습니다.</C.p>
            <C.area>
              <C.cover>
                <C.sub>온라인 체크인 안내</C.sub>
                <C.ul>
                  <C.li>온라인 체크인을 신청하면 출발 24시간 전에 자동으로 체크인이 완료되며 연락처로 탑승권이 전송됩니다.​</C.li>
                  <C.li>온라인 체크인 신청 완료 후에도 탑승권 발급 전까지 좌석 변경 및 항공편 변경이 가능합니다.​</C.li>
                  <C.li>입력한 여권 정보가 부정확하거나 유효하지 않을 경우 탑승권 발급이 불가능할 수 있습니다.</C.li>
                </C.ul>
                <C.sub>온라인 체크인 신청 불가한 경우</C.sub>
                <C.ul>
                  <C.li>유아 동반 승객, 임산부 승객​</C.li>
                  <C.li>온라인 탑승권이 허용되지 않는 일부 해외 공항 출발 항공편​</C.li>
                  <C.li>직원의 확인이 필요한 요청사항이 있는 탑승객</C.li>
                </C.ul>
              </C.cover>
            </C.area>
          </C.body>
          <C.body>
            <C.sb>
              <SpeechBubble backgroundColor={BLUE1}>
                STEP3
              </SpeechBubble>
            </C.sb>
            <C.sub>수하물 위탁</C.sub>
            <C.p>에어프레미아 카운터에서 수하물을 위탁하여 주시기 바랍니다.</C.p>
            <C.p>온라인을 통해 체크인을 하신 손님은 온라인 체크인 전용 카운터를 이용해 주시기 바랍니다. (단, 공항 사정에 따라 운영되지 않을 수 있습니다)</C.p>
          </C.body>
          <C.body>
            <C.sb>
              <SpeechBubble backgroundColor={BLUE1}>
                  STEP4
              </SpeechBubble>
            </C.sb>
            <C.sub>출발장 입장</C.sub>
            <C.p>① 보안검색: 여행객 및 소지품을 대상으로 보안 검색을 실시합니다.</C.p>
            <C.p>② 출국심사: 유효한 여권을 소지하고 있는지를 확인합니다.</C.p>
            <C.area>
              <T.table>
                <EnterTab />
              </T.table>
            </C.area>
            <C.rf>※ 사전등록장소 : 인천공항 · 서울 · 부산 · 인천 · 수원 · 제주출입국외국인청, 서울남부 · 김해공항 · 대구 · 대전 · 광주 · 청주 · 김포공항출입국외국인사무소, 서울역 · 도심공항출장소</C.rf>
          </C.body>
          <C.body>
            <C.sb>
              <SpeechBubble backgroundColor={BLUE1}>
                  STEP5
              </SpeechBubble>
              </C.sb>
            <C.sub>항공기 탑승</C.sub>
            <C.p>원활한 탑승을 위하여, 탑승권과 여권은 개별 소지하여 주시기 바랍니다.​</C.p>
            <C.p>출발 10분전에 탑승이 마감되오니 탑승시간에 맞추어 해당 탑승구에서 대기하여 주시기 바랍니다.</C.p>
            <C.rf>※ 환불 및 취소는 홈페이지, 모바일 앱 및 예약센터 각 구매처에서만 가능합니다.​</C.rf>
            <C.area>
              <C.cover>
                <BoardingTab /> 
              </C.cover>
            </C.area>
          </C.body>
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
    area: styled.div`
      width: 1200px;
      height: auto;
      margin-top: 30px;
      border: 1px solid #ddd;
      border-radius: 8px;
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
    `,
    tmi: styled.p`
      margin-top: 30px;
    `,
    cover: styled.div`
      padding: 30px;
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
          text-align: left;
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
          text-align: left;
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
        }
        th:last-child,
        td:last-child{
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
  }
  export default additionalServiceCheckin;