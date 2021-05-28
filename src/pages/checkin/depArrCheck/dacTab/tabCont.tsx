import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import {
  WHITE1,
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY7,
  LIGHT_GRAY8,
  LIGHT_GRAY9,
  BLUE1,
  ORANGE1,
  RED2
} from '@airpremia/cdk/styles/colors';
import {
  TicketArrivalInquiry,
  TicketNameCheck,
  TicketRealTime,
  SpeechBubble
} from 'src/components';


function TabContent({currIdxCont}: IProps) {
  if ( currIdxCont === 0 ) {
    return (
      <C.wrap>
        <TicketArrivalInquiry />
        <C.sbody>
          <S.stBox>
            <C.btn>
              <C.itemText>2019.9.2. <C.bold>(월)</C.bold></C.itemText>
            </C.btn>
            <C.btn>
              <C.itemText>2019.9.3. <C.bold>(화)</C.bold></C.itemText>
            </C.btn>
            <C.btn className='Selected'>
              <C.itemText>2019.9.4. <C.bold>(수)</C.bold></C.itemText>
            </C.btn>
            <C.btn>
              <C.itemText>2019.9.5. <C.bold>(목)</C.bold></C.itemText>
            </C.btn>
            <C.btn>
              <C.itemText>2019.9.6. <C.bold>(금)</C.bold></C.itemText>
            </C.btn>
          </S.stBox>
          <C.sb>
            <C.title>서울/인천(ICN) - 하노이(HAN)</C.title>
            <div>
              <T.table className="mt40">
                <table>
                  <colgroup>
                    <col width="18.75%"></col>
                    <col width="35.25%"></col>
                    <col width="32.4%"></col>
                    <col width="21.6%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>항공편</th>
                      <td>출발</td>
                      <td>도착</td>
                      <td>운항상태</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        <p><C.bold>AP3400</C.bold><br />(직항)</p>
                      </th> 
                      <td>
                        <div>
                          <C.textBox>
                            <C.description>스케줄</C.description>
                            <C.itemTitle>10:00</C.itemTitle>
                          </C.textBox>
                          <C.textBoxCenter>
                            <C.line></C.line>
                          </C.textBoxCenter>
                          <C.textBox>
                            <C.description>출발예정</C.description>
                            <C.itemTitle>10:15</C.itemTitle>
                          </C.textBox>
                        </div>
                      </td>
                      <td>
                        <div>
                          <C.textBox>
                            <C.description>스케줄</C.description>
                            <C.itemTitle>13:00</C.itemTitle>
                          </C.textBox>
                          <C.textBoxCenter>
                            <C.line></C.line>
                          </C.textBoxCenter>
                          <C.textBox>
                            <C.description>도착예정</C.description>
                            <C.itemTitle>13:20</C.itemTitle>
                          </C.textBox>
                        </div>
                      </td>
                      <td>
                        <C.Badge className='blue'>도착완료</C.Badge>
                        </td>
                    </tr>
                    <tr>
                      <th>
                        <p><C.bold>AP3200</C.bold><br />(직항)</p>
                      </th> 
                      <td>
                        <div>
                          <C.textBox>
                            <C.description>스케줄</C.description>
                            <C.itemTitle>21:00</C.itemTitle>
                          </C.textBox>
                          <C.textBoxCenter>
                            <C.line></C.line>
                          </C.textBoxCenter>
                          <C.textBox>
                            <C.description>출발예정</C.description>
                            <C.itemTitle>21:07</C.itemTitle>
                          </C.textBox>
                        </div>
                      </td>
                      <td>
                        <div>
                          <C.textBox>
                            <C.description>스케줄</C.description>
                            <C.itemTitle>12:00</C.itemTitle>
                          </C.textBox>
                          <C.textBoxCenter>
                            <C.line></C.line>
                          </C.textBoxCenter>
                          <C.textBox>
                            <C.description>도착예정</C.description>
                            <C.itemTitle>12:20</C.itemTitle>
                          </C.textBox>
                        </div>
                      </td>
                      <td>
                      <C.Badge className='black'>도착 전</C.Badge>
                        </td>
                    </tr>
                  </tbody>
                  <tfoot className='displayNone'>
                    <tr>
                      <td colSpan={4}>
                        <C.description className='center'>조회 결과가 존재하지 않습니다.</C.description>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </T.table>
            </div>
          </C.sb>
        </C.sbody>

      </C.wrap> 
    )
  } else if ( currIdxCont === 1 ) {
    return (
      <C.wrap>
        <TicketNameCheck />
        <C.sbody>
          <S.stBox>
            <C.btn>
              <C.itemText>2019.9.2. <C.bold>(월)</C.bold></C.itemText>
            </C.btn>
            <C.btn>
              <C.itemText>2019.9.3. <C.bold>(화)</C.bold></C.itemText>
            </C.btn>
            <C.btn className='Selected'>
              <C.itemText>2019.9.4. <C.bold>(수)</C.bold></C.itemText>
            </C.btn>
            <C.btn>
              <C.itemText>2019.9.5. <C.bold>(목)</C.bold></C.itemText>
            </C.btn>
            <C.btn>
              <C.itemText>2019.9.6. <C.bold>(금)</C.bold></C.itemText>
            </C.btn>
          </S.stBox>
          <C.sb>
            <C.title>서울/인천(ICN) - 샌프란시스코(SFO)</C.title>
            <div>
              <T.table className="mt40">
                <table>
                  <colgroup>
                    <col width="18.75%"></col>
                    <col width="35.25%"></col>
                    <col width="32.4%"></col>
                    <col width="21.6%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>항공편</th>
                      <td>출발</td>
                      <td>도착</td>
                      <td>운항상태</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        <p><C.bold>AP0001</C.bold><br />(직항)</p>
                      </th> 
                      <td>
                        <div>
                          <C.textBox>
                            <C.description>스케줄</C.description>
                            <C.itemTitle>10:00</C.itemTitle>
                          </C.textBox>
                          <C.textBoxCenter>
                            <C.line></C.line>
                          </C.textBoxCenter>
                          <C.textBox>
                            <C.description>출발예정</C.description>
                            <C.itemTitle>10:15</C.itemTitle>
                          </C.textBox>
                        </div>
                      </td>
                      <td>
                        <div>
                          <C.textBox>
                            <C.description>스케줄</C.description>
                            <C.itemTitle>13:00</C.itemTitle>
                          </C.textBox>
                          <C.textBoxCenter>
                            <C.line></C.line>
                          </C.textBoxCenter>
                          <C.textBox>
                            <C.description>도착예정</C.description>
                            <C.itemTitle>13:20</C.itemTitle>
                          </C.textBox>
                        </div>
                      </td>
                      <td>
                        <C.Badge className='blue'>도착완료</C.Badge>
                        </td>
                    </tr>
                  </tbody>
                  <tfoot className='displayNone'>
                    <tr>
                      <td colSpan={4}>
                        <C.description className='center'>조회 결과가 존재하지 않습니다.</C.description>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </T.table>
            </div>
          </C.sb>
        </C.sbody>

      </C.wrap>
    )
  } else {
    return (
      <C.wrap>
      <div>
        <div>
          <SpeechBubble backgroundColor={BLUE1}>MY FLIGHT</SpeechBubble>
          <C.itemText className="mt20">서울/인천(ICN) - 하노이(HAN)<br />
          2019. 10. 12. (일)</C.itemText>
        </div>
        <C.bannerBox>
          <div className="mt15"><p className="mb6"><C.bold>AP6040</C.bold></p><p>(직항)</p></div>
          <div>
                <C.textBox>
                  <C.description className="mb6">스케줄</C.description>
                  <C.itemTitle>09:20</C.itemTitle>
                </C.textBox>
                <C.textBoxCenter>
                  <C.line></C.line>
                </C.textBoxCenter>
                <C.textBox>
                  <C.description className="mb6">출발예정</C.description>
                  <C.itemTitle>09:30</C.itemTitle>
                </C.textBox>
            </div>
          <div>
            <C.textBox>
              <C.description className="mb6">스케줄</C.description>
              <C.itemTitle>09:20</C.itemTitle>
            </C.textBox>
            <C.textBoxCenter>
              <C.line></C.line>
            </C.textBoxCenter>
            <C.textBox>
              <C.description className="mb6">출발예정</C.description>
              <C.itemTitle>09:30</C.itemTitle>
            </C.textBox>
          </div>
          <div><C.Badge className='black'>출발 전</C.Badge></div>
        </C.bannerBox>
      </div>
        <TicketRealTime />
        <C.sbody>
          <T.table>
            <table>
              <colgroup>
                <col width="18.75%"></col>
                <col width="68.75%"></col>
                <col width="12.5%"></col>
              </colgroup>
              <thead>
                <tr>
                  <th>도착지</th>
                  <td>시간</td>
                  <td>운항 상태</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <p><C.bold>하노이</C.bold><br />(HAN)</p>
                  </th> 
                  <td>
                    <div>
                      <C.textBox>
                        <C.description>스케줄</C.description>
                        <C.itemTitle>09:20</C.itemTitle>
                      </C.textBox>
                      <C.textBoxCenter>
                        <C.line></C.line>
                      </C.textBoxCenter>
                      <C.textBox>
                        <C.description>출발예정</C.description>
                        <C.itemTitle>09:30</C.itemTitle>
                      </C.textBox>
                    </div>
                  </td>
                  <td>
                    <C.Badge className='blue'>출발완료</C.Badge>
                  </td>
                </tr>
                <tr>
                  <th>
                    <p><C.bold>호치민</C.bold><br />(SGN)</p>
                  </th> 
                  <td>
                    <div>
                      <C.textBox>
                        <C.description>스케줄</C.description>
                        <C.itemTitle>12:00</C.itemTitle>
                      </C.textBox>
                      <C.textBoxCenter>
                        <C.line></C.line>
                      </C.textBoxCenter>
                      <C.textBox>
                        <C.description>출발예정</C.description>
                        <C.itemTitle>12:00</C.itemTitle>
                      </C.textBox>
                    </div>
                  </td>
                  <td>
                    <C.Badge className='black'>출발 전</C.Badge>
                  </td>
                </tr>
                <tr>
                  <th>
                    <p><C.bold>호치민</C.bold><br />(SGN)</p>
                  </th> 
                  <td>
                    <div>
                      <C.textBox>
                        <C.description>스케줄</C.description>
                        <C.itemTitle>13:20</C.itemTitle>
                      </C.textBox>
                      <C.textBoxCenter>
                        <C.line></C.line>
                      </C.textBoxCenter>
                      <C.textBox>
                        <C.description>출발예정</C.description>
                        <C.itemTitle>13:20</C.itemTitle>
                      </C.textBox>
                    </div>
                  </td>
                  <td>
                    <C.Badge className='black'>출발 전</C.Badge>
                  </td>
                </tr>
                <tr>
                  <th>
                    <p><C.bold>오사카/간사이</C.bold><br />(KIX)</p>
                  </th> 
                  <td>
                    <div>
                      <C.textBox>
                        <C.description>스케줄</C.description>
                        <C.itemTitle>15:00</C.itemTitle>
                      </C.textBox>
                      <C.textBoxCenter>
                        <C.line></C.line>
                      </C.textBoxCenter>
                      <C.textBox>
                        <C.description>출발예정</C.description>
                        <C.itemTitle>-</C.itemTitle>
                      </C.textBox>
                    </div>
                  </td>
                  <td>
                    <C.Badge className='red'>결항</C.Badge>
                  </td>
                </tr>
              </tbody>
              <tfoot className='displayNone'>
                <tr>
                  <td colSpan={4}>
                    <C.description className='center'>조회 결과가 존재하지 않습니다.</C.description>
                  </td>
                </tr>
              </tfoot>
            </table>
            <C.description className="mt20">업데이트 기준 11:17</C.description>
          </T.table>
        </C.sbody>
      </C.wrap>
    )
  }
}
const T = {
table: styled.div`
  &.mt40{
    margin-top:40px;
  }
  .taL,
  .taL{
    text-align: left;
  }
  table {
    width: 100%;
      thead th,
      thead td,
      td strong {
        color: ${LIGHT_GRAY7};
        font-size: 14px;
        line-height: 1.6;
        letter-spacing: -0.3px;
        text-align: center;
      }
      td strong {
        margin-top: 30px;
        display: block;
      }
      th,td{
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
    td:nth-child(2),
    td:nth-child(3){
      text-align: left;
      vertical-align: middle;
    }
    td:last-child{
      text-align: center;
    }
    thead th,
    thead td{
      padding: 18px 0;
      border-bottom: 1px solid ${DARK_GRAY1};
    }
    thead td:last-child{
      padding: 0;
    }
    .displayNone{
      display:none;
    }
    tbody th,
    tbody td{
      padding: 25px 0;
      border-bottom: 1px solid ${LIGHT_GRAY5};
    }
    tfoot tr {
      height: 228px;
    }
    tfoot th, td{
      border-bottom: 1px solid ${LIGHT_GRAY5};
    }
    tfoot td>p{
      margin:0;
    }
  }
`,
};

const S = {
  stBox:styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
      .Selected{
        color: ${ORANGE1};
        border: 1px solid ${ORANGE1};
        border-radius: 28px;
      }
  `,
  stOptions:styled.div`
    margin-right: 30px;
    padding: 13px 47px;
    border-radius: 30px;
  `,
};

const C = {
  wrap: styled.div`
    margin-top: 60px;
      .displayNone{
        display: none;
      }
  `,
  sbody: styled.div`
    margin-top: 100px;
  `,
  title: styled.h4`
    font-size: 22px;
    font-weight: bold;
  `,
  itemTitle: styled.h5`
    font-size: 20px;
    font-weight: bold;
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
  itemText: styled.p`
    display: inline-block;
    font-size: 16px;
    line-height: 1.8;
    &.mt20{
      margin-top:20px;
    }
  `,
  description: styled.p`
    margin-top: 10px;
    color: ${LIGHT_GRAY7};
    font-size: 13px;
    line-height: 28px;
    &.center{
      text-align:center;
    }
    &.mt20{
      margin-top:20px;
    }
  `,
  bold: styled.span`
    font-weight: bold;
  `,
  li: styled.li`
    padding-left: 10px;
    position: relative;
    line-height: 36px;
      &::before{
        content:"";
        width: 4px;
        height: 4px;
        top: 15px;
        left: 0px;
        text-indent: -9999px;
        display: block;
        position: absolute;
        background-color: ${DARK_GRAY1};
        border-radius: 50%
      }
      &:first-child{
        margin: 0;
      }

  `,
  Badge:styled.div`
    width: 60px;
    height: 24px;
    margin: 0 auto;
    padding: 2px;
    color: #fff;
    font-size: 14px;
    line-height: 23px;
    text-align: center;
    border-radius: 4px;
    box-sizing: border-box;
      &.blue{
        background-color: ${BLUE1};
      }
      &.black{
        background-color: ${DARK_GRAY1};
      }
      &.red{
        background-color: ${RED2};
      }
    `,
  line:styled.div`
    width: 83px;
    height: 1px;
    margin: 10px 20px 14px;
    background: ${LIGHT_GRAY9};
    `,
  textBox:styled.div`
    width: auto;
    display: inline-block;
    text-align: left;
    `,
  textBoxCenter:styled.div`
    width: auto;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
  `,
  bannerBox:styled.div`
    margin-top: 20px;
    padding: 32px 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    border: 1px solid #dddddd;
    border-radius: 12px;
      .mb6{
        margin-bottom:6px;
      }
      .mt15{
        margin-top:15px;
      }
    `,
  btn:styled.button`
    display: inline-block;
    padding: 13px 47px;
    border-radius: 12px;
    border: solid 1px ${WHITE1};
    font-size: 16px;
    font-weight: 600;
    color: ${DARK_GRAY1};
`,
}
export default TabContent;
