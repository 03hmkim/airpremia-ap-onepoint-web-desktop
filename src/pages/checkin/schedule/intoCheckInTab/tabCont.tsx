import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import {
  DARK_GRAY1,
  LIGHT_GRAY6,
  LIGHT_GRAY8,
  LIGHT_GRAY9,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import { 
  TaskButton,
  WarningList,
 } from 'src/components';
import SelectDateOn from 'public/images/select_date_on.svg';
import SelectDateOff from 'public/images/select_date_off.svg';


function TabContent({currIdxCont}: IProps) {

  const description = [
    '항공 스케줄은 정부인가 조건이며, 스케줄과 기종은 예고없이 변경될 수 있습니다.',
    '스케줄 재확인이나 기타 문의사항이 있으시면 고객센터 (02-6953-6115)로 문의하여 주십시오.',
  ];

  if ( currIdxCont === 0 ) {
    return (
    <C.sb>
      <C.flex>
        <C.title>서울/김포(GMP) - 제주(CJU)</C.title>
        <C.titleMain><C.blueEmp>D-30</C.blueEmp></C.titleMain>
      </C.flex>
      <T.table>
        <div className="tbWrap">
          <table>
            <colgroup>
              <col width="15%"></col>
              <col width="25%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
            </colgroup>
            <thead>
              <tr>
                <th>항공편</th>
                <td>시간</td>
                <td>월</td>
                <td>화</td>
                <td>수</td>
                <td>목</td>
                <td>금</td>
                <td>토</td>
                <td>일</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <p>YP3200<br />(2시간 10분)</p>
                </th> 
                <td>
                  <div>
                    <C.textBox>
                      <C.description>출발시간</C.description>
                      <C.itemTitle>15:30</C.itemTitle>
                    </C.textBox>
                    <C.textBoxCenter>
                      <C.line></C.line>
                    </C.textBoxCenter>
                    <C.textBox>
                      <C.description>도착시간</C.description>
                      <C.itemTitle>17:40</C.itemTitle>
                    </C.textBox>
                  </div>
                </td>
                <td><SelectDateOn /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOn /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOn /></td>
              </tr>
              <tr>
                <th>
                  <p>YP3500<br />(2시간 10분)</p>
                </th>
                <td>
                  <div>
                    <C.textBox>
                      <C.description>출발시간</C.description>
                      <C.itemTitle>17:30</C.itemTitle>
                    </C.textBox>
                    <C.textBoxCenter>
                      <C.line></C.line>
                    </C.textBoxCenter>
                    <C.textBox>
                      <C.description>도착시간</C.description>
                      <C.itemTitle>19:50</C.itemTitle>
                    </C.textBox>
                  </div>
                </td>
                <td><SelectDateOff /></td>
                <td><SelectDateOn /></td>
                <td><SelectDateOn /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOn /></td>
                <td><SelectDateOff /></td>
              </tr>
              <tr>
                <th>
                  <p>YP3800<br />(2시간 10분)</p>
                </th>
                <td>
                  <div>
                    <C.textBox>
                      <C.description>출발시간</C.description>
                      <C.itemTitle>20:30</C.itemTitle>
                    </C.textBox>
                    <C.textBoxCenter>
                      <C.line></C.line>
                    </C.textBoxCenter>
                    <C.textBox>
                      <C.description>도착시간</C.description>
                      <C.itemTitle>22:40</C.itemTitle>
                    </C.textBox>
                  </div>
                </td>
                <td><SelectDateOn /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOn /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </T.table>
      <C.wrap>
        <C.flex>
          <C.title>제주(CJU) - 서울/김포(GMP)</C.title>
        </C.flex>
        <T.table>
          <div className="tbWrap">
            <table>
              <colgroup>
                <col width="15%"></col>
                <col width="25%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
              </colgroup>
              <thead>
                <tr>
                  <th>항공편</th>
                  <td>시간</td>
                  <td>월</td>
                  <td>화</td>
                  <td>수</td>
                  <td>목</td>
                  <td>금</td>
                  <td>토</td>
                  <td>일</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <p>YP3200<br />(2시간 10분)</p>
                  </th> 
                  <td>
                    <div>
                      <C.textBox>
                        <C.description>출발시간</C.description>
                        <C.itemTitle>15:30</C.itemTitle>
                      </C.textBox>
                      <C.textBoxCenter>
                        <C.line></C.line>
                      </C.textBoxCenter>
                      <C.textBox>
                        <C.description>도착시간</C.description>
                        <C.itemTitle>17:40</C.itemTitle>
                      </C.textBox>
                    </div>
                  </td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                </tr>
                <tr>
                  <th><p>YP3500<br />(2시간 10분)</p></th>
                  <td>
                    <div>
                      <C.textBox>
                        <C.description>출발시간</C.description>
                        <C.itemTitle>17:30</C.itemTitle>
                      </C.textBox>
                      <C.textBoxCenter>
                        <C.line></C.line>
                      </C.textBoxCenter>
                      <C.textBox>
                        <C.description>도착시간</C.description>
                        <C.itemTitle>19:50</C.itemTitle>
                      </C.textBox>
                    </div>
                  </td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOn /></td>
                </tr>
                <tr>
                  <th><p>YP3800<br />(2시간 10분)</p></th>
                  <td>
                    <div>
                      <C.textBox>
                        <C.description>출발시간</C.description>
                        <C.itemTitle>20:30</C.itemTitle>
                      </C.textBox>
                      <C.textBoxCenter>
                        <C.line></C.line>
                      </C.textBoxCenter>
                      <C.textBox>
                        <C.description>도착시간</C.description>
                        <C.itemTitle>22:40</C.itemTitle>
                      </C.textBox>
                    </div>
                  </td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOn /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </T.table>
        <C.mt50>
          <WarningList
            title = '꼭 확인해주세요!'
            descriptions={description}
          />
        </C.mt50>
        <C.igr>
          <div style={{width:'300px', margin: '0 auto'}}>
          <TaskButton fontWeight ={"normal"}>제주(CJU)행 예매하러 가기</TaskButton>
        </div>
        </C.igr>
      </C.wrap>
    </C.sb>
    )
  } else if ( currIdxCont === 1 ) {
    return (
    <C.sb>
      <C.flex>
        <C.title>서울/인천(ICN) - 제주(CJU)</C.title>
        
        <C.titleMain><C.blueEmp>D-10</C.blueEmp></C.titleMain>
      </C.flex>
      <T.table>
        <div className="tbWrap">
          <table>
            <colgroup>
              <col width="15%"></col>
              <col width="25%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
            </colgroup>
            <thead>
              <tr>
                <th>항공편</th>
                <td>시간</td>
                <td>월</td>
                <td>화</td>
                <td>수</td>
                <td>목</td>
                <td>금</td>
                <td>토</td>
                <td>일</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <p>YP3200<br />(2시간 10분)</p>
                </th> 
                <td>
                  <div>
                    <C.textBox>
                      <C.description>출발시간</C.description>
                      <C.itemTitle>15:30</C.itemTitle>
                    </C.textBox>
                    <C.textBoxCenter>
                      <C.line></C.line>
                    </C.textBoxCenter>
                    <C.textBox>
                      <C.description>도착시간</C.description>
                      <C.itemTitle>17:40</C.itemTitle>
                    </C.textBox>
                  </div>
                </td>
                <td><SelectDateOn /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOn /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOn /></td>
              </tr>
              <tr>
                <th><p>YP3500<br />(2시간 10분)</p></th>
                <td>
                  <div>
                    <C.textBox>
                      <C.description>출발시간</C.description>
                      <C.itemTitle>17:30</C.itemTitle>
                    </C.textBox>
                    <C.textBoxCenter>
                      <C.line></C.line>
                    </C.textBoxCenter>
                    <C.textBox>
                      <C.description>도착시간</C.description>
                      <C.itemTitle>19:50</C.itemTitle>
                    </C.textBox>
                  </div>
                </td>
                <td><SelectDateOff /></td>
                <td><SelectDateOn /></td>
                <td><SelectDateOn /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOn /></td>
                <td><SelectDateOff /></td>
              </tr>
              <tr>
                <th><p>YP3800<br />(2시간 10분)</p></th>
                <td>
                  <div>
                    <C.textBox>
                      <C.description>출발시간</C.description>
                      <C.itemTitle>20:30</C.itemTitle>
                    </C.textBox>
                    <C.textBoxCenter>
                      <C.line></C.line>
                    </C.textBoxCenter>
                    <C.textBox>
                      <C.description>도착시간</C.description>
                      <C.itemTitle>22:40</C.itemTitle>
                    </C.textBox>
                  </div>
                </td>
                <td><SelectDateOn /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOn /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </T.table>
      <C.wrap>
        <C.flex>
          <C.title>제주(CJU) - 서울/인천(ICN)</C.title>
        </C.flex>
        <T.table>
          <div className="tbWrap">
            <table>
              <colgroup>
                <col width="15%"></col>
                <col width="25%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
              </colgroup>
              <thead>
                <tr>
                  <th>항공편</th>
                  <td>시간</td>
                  <td>월</td>
                  <td>화</td>
                  <td>수</td>
                  <td>목</td>
                  <td>금</td>
                  <td>토</td>
                  <td>일</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <p>YP3200<br />(2시간 10분)</p>
                  </th> 
                  <td>
                    <div>
                      <C.textBox>
                        <C.description>출발시간</C.description>
                        <C.itemTitle>15:30</C.itemTitle>
                      </C.textBox>
                      <C.textBoxCenter>
                        <C.line></C.line>
                      </C.textBoxCenter>
                      <C.textBox>
                        <C.description>도착시간</C.description>
                        <C.itemTitle>17:40</C.itemTitle>
                      </C.textBox>
                    </div>
                  </td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                </tr>
                <tr>
                  <th>
                    <p>YP3500<br />(2시간 10분)</p>
                  </th>
                  <td>
                    <div>
                      <C.textBox>
                        <C.description>출발시간</C.description>
                        <C.itemTitle>17:30</C.itemTitle>
                      </C.textBox>
                      <C.textBoxCenter>
                        <C.line></C.line>
                      </C.textBoxCenter>
                      <C.textBox>
                        <C.description>도착시간</C.description>
                        <C.itemTitle>19:50</C.itemTitle>
                      </C.textBox>
                    </div>
                  </td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOn /></td>
                </tr>
                <tr>
                  <th>
                    <p>YP3800<br />(2시간 10분)</p>
                  </th>
                  <td>
                    <div>
                      <C.textBox>
                        <C.description>출발시간</C.description>
                        <C.itemTitle>20:30</C.itemTitle>
                      </C.textBox>
                      <C.textBoxCenter>
                        <C.line></C.line>
                      </C.textBoxCenter>
                      <C.textBox>
                        <C.description>도착시간</C.description>
                        <C.itemTitle>22:40</C.itemTitle>
                      </C.textBox>
                    </div>
                  </td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOn /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </T.table>
        <C.mt50>
          <WarningList
            title = '꼭 확인해주세요!'
            descriptions={description}
          />
        </C.mt50>
        <C.igr>
          <div style={{width:'300px', margin: '0 auto'}}>
          <TaskButton fontWeight ={"normal"}>인천(ICN)행 예매하러 가기</TaskButton>
        </div>
        </C.igr>
      </C.wrap>
    </C.sb>
    )
  } else if ( currIdxCont === 2 ) {
    return (
    <C.sb>
      <C.flex>
        <C.title>제주(CJU) - 서울/인천(ICN)</C.title>        
        <C.titleMain><C.blueEmp>D-2</C.blueEmp></C.titleMain>
      </C.flex>
      <T.table>
        <div className="tbWrap">
          <table>
            <colgroup>
              <col width="15%"></col>
              <col width="25%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
            </colgroup>
            <thead>
              <tr>
                <th>항공편</th>
                <td>시간</td>
                <td>월</td>
                <td>화</td>
                <td>수</td>
                <td>목</td>
                <td>금</td>
                <td>토</td>
                <td>일</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <p>YP3200<br />(2시간 10분)</p>
                </th> 
                <td>
                  <div>
                    <C.textBox>
                      <C.description>출발시간</C.description>
                      <C.itemTitle>15:30</C.itemTitle>
                    </C.textBox>
                    <C.textBoxCenter>
                      <C.line></C.line>
                    </C.textBoxCenter>
                    <C.textBox>
                      <C.description>도착시간</C.description>
                      <C.itemTitle>17:40</C.itemTitle>
                    </C.textBox>
                  </div>
                </td>
                <td><SelectDateOn /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOn /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOn /></td>
              </tr>
              <tr>
                <th>
                  <p>YP3500<br />(2시간 10분)</p>
                </th>
                <td>
                  <div>
                    <C.textBox>
                      <C.description>출발시간</C.description>
                      <C.itemTitle>17:30</C.itemTitle>
                    </C.textBox>
                    <C.textBoxCenter>
                      <C.line></C.line>
                    </C.textBoxCenter>
                    <C.textBox>
                      <C.description>도착시간</C.description>
                      <C.itemTitle>19:50</C.itemTitle>
                    </C.textBox>
                  </div>
                </td>
                <td><SelectDateOff /></td>
                <td><SelectDateOn /></td>
                <td><SelectDateOn /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOn /></td>
                <td><SelectDateOff /></td>
              </tr>
              <tr>
                <th>
                  <p>YP3800<br />(2시간 10분)</p>
                </th>
                <td>
                  <div>
                    <C.textBox>
                      <C.description>출발시간</C.description>
                      <C.itemTitle>20:30</C.itemTitle>
                    </C.textBox>
                    <C.textBoxCenter>
                      <C.line></C.line>
                    </C.textBoxCenter>
                    <C.textBox>
                      <C.description>도착시간</C.description>
                      <C.itemTitle>22:40</C.itemTitle>
                    </C.textBox>
                  </div>
                </td>
                <td><SelectDateOn /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOn /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </T.table>
      <C.wrap>
        <C.flex>
          <C.title>제주(CJU) - 서울/김포(GMP)</C.title>
        </C.flex>
        <T.table>
          <div className="tbWrap">
            <table>
              <colgroup>
                <col width="15%"></col>
                <col width="25%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
              </colgroup>
              <thead>
                <tr>
                  <th>항공편</th>
                  <td>시간</td>
                  <td>월</td>
                  <td>화</td>
                  <td>수</td>
                  <td>목</td>
                  <td>금</td>
                  <td>토</td>
                  <td>일</td>                
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <p>YP3200<br />(2시간 10분)</p>
                  </th> 
                  <td>
                    <div>
                      <C.textBox>
                        <C.description>출발시간</C.description>
                        <C.itemTitle>15:30</C.itemTitle>
                      </C.textBox>
                      <C.textBoxCenter>
                        <C.line></C.line>
                      </C.textBoxCenter>
                      <C.textBox>
                        <C.description>도착시간</C.description>
                        <C.itemTitle>17:40</C.itemTitle>
                      </C.textBox>
                    </div>
                  </td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                </tr>
                <tr>
                  <th>
                    <p>YP3500<br />(2시간 10분)</p>
                  </th>
                  <td>
                    <div>
                      <C.textBox>
                        <C.description>출발시간</C.description>
                        <C.itemTitle>17:30</C.itemTitle>
                      </C.textBox>
                      <C.textBoxCenter>
                        <C.line></C.line>
                      </C.textBoxCenter>
                      <C.textBox>
                        <C.description>도착시간</C.description>
                        <C.itemTitle>19:50</C.itemTitle>
                      </C.textBox>
                    </div>
                  </td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOn /></td>
                </tr>
                <tr>
                  <th>
                    <p>YP3800<br />(2시간 10분)</p>
                  </th>
                  <td>
                    <div>
                      <C.textBox>
                        <C.description>출발시간</C.description>
                        <C.itemTitle>20:30</C.itemTitle>
                      </C.textBox>
                      <C.textBoxCenter>
                        <C.line></C.line>
                      </C.textBoxCenter>
                      <C.textBox>
                        <C.description>도착시간</C.description>
                        <C.itemTitle>22:40</C.itemTitle>
                      </C.textBox>
                    </div>
                  </td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOn /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </T.table>
        <C.mt50>
          <WarningList
            title = '꼭 확인해주세요!'
            descriptions={description}
          />
        </C.mt50>
        <C.igr>
          <div style={{width:'300px', margin: '0 auto'}}>
          <TaskButton fontWeight ={"normal"}>예매하러 가기</TaskButton>
        </div>
        </C.igr>
      </C.wrap>
    </C.sb>
    )
  } else {
    return (
    <C.sb>
      <C.flex>
        <C.title>서울/인천(ICN) - 뮌헨(MUC)</C.title>        
        <C.titleMain><C.blueEmp>D-30</C.blueEmp></C.titleMain>
      </C.flex>
      <T.table>
        <div className="tbWrap">
          <table>
            <colgroup>
              <col width="15%"></col>
              <col width="25%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
              <col width="8%"></col>
            </colgroup>
            <thead>
              <tr>
                <th>항공편</th>
                <td>시간</td>
                <td>월</td>
                <td>화</td>
                <td>수</td>
                <td>목</td>
                <td>금</td>
                <td>토</td>
                <td>일</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <p>YP3200<br />(11시간 10분)</p>
                </th> 
                <td>
                  <div>
                    <C.textBox>
                      <C.description>출발시간</C.description>
                      <C.itemTitle>10:10</C.itemTitle>
                    </C.textBox>
                    <C.textBoxCenter>
                      <C.line></C.line>
                    </C.textBoxCenter>
                    <C.textBox>
                      <C.description>도착시간</C.description>
                      <C.itemTitle>14:20</C.itemTitle>
                    </C.textBox>
                  </div>
                </td>
                <td><SelectDateOn /></td>
                <td><SelectDateOn /></td>
                <td><SelectDateOn /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOn /></td>
              </tr>
              <tr>
                <th>
                  <p>YP3500<br />(11시간 10분)</p>
                </th>
                <td>
                  <div>
                    <C.textBox>
                      <C.description>출발시간</C.description>
                      <C.itemTitle>12:00</C.itemTitle>
                    </C.textBox>
                    <C.textBoxCenter>
                      <C.line></C.line>
                    </C.textBoxCenter>
                    <C.textBox>
                      <C.description>도착시간</C.description>
                      <C.itemTitle>18:10</C.itemTitle>
                    </C.textBox>
                  </div>
                </td>
                <td><SelectDateOff /></td>
                <td><SelectDateOn /></td>
                <td><SelectDateOn /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOff /></td>
                <td><SelectDateOn /></td>
                <td><SelectDateOff /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </T.table>
      <C.mt50>
        <C.flex>
          <C.title>뮌헨(MUC) - 서울/인천(ICN)</C.title>          
          <C.titleMain><C.blueEmp>D-30</C.blueEmp></C.titleMain>
        </C.flex>
        <T.table>
          <div className="tbWrap">
            <table>
              <colgroup>
                <col width="15%"></col>
                <col width="25%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
              </colgroup>
              <thead>
                <tr>
                  <th>항공편</th>
                  <td>시간</td>
                  <td>월</td>
                  <td>화</td>
                  <td>수</td>
                  <td>목</td>
                  <td>금</td>
                  <td>토</td>
                  <td>일</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <p>YP3200<br />(11시간 10분)</p>
                  </th> 
                  <td>
                    <div>
                      <C.textBox>
                        <C.description>출발시간</C.description>
                        <C.itemTitle>15:30</C.itemTitle>
                      </C.textBox>
                      <C.textBoxCenter>
                        <C.line></C.line>
                      </C.textBoxCenter>
                      <C.textBox>
                        <C.description>도착시간</C.description>
                        <C.itemTitle>17:40</C.itemTitle>
                      </C.textBox>
                    </div>
                  </td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOn /></td>
                </tr>
                <tr>
                  <th>
                    <p>YP3500<br />(11시간 10분)</p>
                  </th>
                  <td>
                    <div>
                      <C.textBox>
                        <C.description>출발시간</C.description>
                        <C.itemTitle>18:00</C.itemTitle>
                      </C.textBox>
                      <C.textBoxCenter>
                        <C.line></C.line>
                      </C.textBoxCenter>
                      <C.textBox>
                        <C.description>도착시간</C.description>
                        <C.itemTitle>20:10</C.itemTitle>
                      </C.textBox>
                    </div>
                  </td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </T.table>
      </C.mt50>
      <C.mt50>
        <C.flex>
          <C.title>서울/인천(ICN) - 벤쿠버(YVR)</C.title>          
          <C.titleMain><C.blueEmp>Comming Soon!</C.blueEmp></C.titleMain>
        </C.flex>
        <T.table>
          <div className="tbWrap">
            <table>
              <colgroup>
                <col width="15%"></col>
                <col width="25%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
              </colgroup>
              <thead>
                <tr>
                <th>항공편</th>
                  <td>시간</td>
                  <td>월</td>
                  <td>화</td>
                  <td>수</td>
                  <td>목</td>
                  <td>금</td>
                  <td>토</td>
                  <td>일</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <p>YP6030<br />(9시간 40분)</p>
                  </th> 
                  <td>
                    <div>
                      <C.textBox>
                        <C.description>출발시간</C.description>
                        <C.itemTitle>17:55</C.itemTitle>
                      </C.textBox>
                      <C.textBoxCenter>
                        <C.line></C.line>
                      </C.textBoxCenter>
                      <C.textBox>
                        <C.description>도착시간</C.description>
                        <C.itemTitle>11:35</C.itemTitle>
                      </C.textBox>
                    </div>
                  </td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOff /></td>
                </tr>
                <tr>
                  <th>
                    <p>YP6040<br />(9시간 40분)</p>
                  </th>
                  <td>
                    <div>
                      <C.textBox>
                        <C.description>출발시간</C.description>
                        <C.itemTitle>18:40</C.itemTitle>
                      </C.textBox>
                      <C.textBoxCenter>
                        <C.line></C.line>
                      </C.textBoxCenter>
                      <C.textBox>
                        <C.description>도착시간</C.description>
                        <C.itemTitle>12:20</C.itemTitle>
                      </C.textBox>
                    </div>
                  </td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </T.table>
      </C.mt50>
      <C.mt50>
        <C.flex>
          <C.title>벤쿠버(YVR) - 서울/인천(ICN)</C.title>          
          <C.titleMain><C.blueEmp>Comming Soon!</C.blueEmp></C.titleMain>
        </C.flex>
        <T.table>
          <div className="tbWrap">
            <table>
              <colgroup>
                <col width="15%"></col>
                <col width="25%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
                <col width="8%"></col>
              </colgroup>
              <thead>
                <tr>
                  <th>항공편</th>
                  <td>시간</td>
                  <td>월</td>
                  <td>화</td>
                  <td>수</td>
                  <td>목</td>
                  <td>금</td>
                  <td>토</td>
                  <td>일</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <p>YP6030<br />(9시간 40분)</p>
                  </th> 
                  <td>
                    <div>
                      <C.textBox>
                        <C.description>출발시간</C.description>
                        <C.itemTitle>17:55</C.itemTitle>
                      </C.textBox>
                      <C.textBoxCenter>
                        <C.line></C.line>
                      </C.textBoxCenter>
                      <C.textBox>
                        <C.description>도착시간</C.description>
                        <C.itemTitle>11:35</C.itemTitle>
                      </C.textBox>
                    </div>
                  </td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOn /></td>
                </tr>
                <tr>
                  <th>
                    <p>YP6040<br />(9시간 40분)</p>
                  </th>
                  <td>
                    <div>
                      <C.textBox>
                        <C.description>출발시간</C.description>
                        <C.itemTitle>18:40</C.itemTitle>
                      </C.textBox>
                      <C.textBoxCenter>
                        <C.line></C.line>
                      </C.textBoxCenter>
                      <C.textBox>
                        <C.description>도착시간</C.description>
                        <C.itemTitle>12:20</C.itemTitle>
                      </C.textBox>
                    </div>
                  </td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOff /></td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOn /></td>
                  <td><SelectDateOff /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </T.table>
      </C.mt50>
      <C.mt50>
        <WarningList
          title = '꼭 확인해주세요!'
          descriptions={description}
        />
      </C.mt50>
    </C.sb>
    )
  }
}


const T = {
  table: styled.div`
    margin-top: 30px;
    @media only screen and (max-width: 767px){
      margin-top: 20px;
    }
  `,
};
  

const C = {
  wrap: styled.div`
    margin-top: 100px;
    @media only screen and (max-width: 767px){
      margin-top: 60px;
    }
  `,
  flex:styled.div`
    display: flex;
    align-items: center;

    &:after {
      content: "";
      display: block;
      clear: both;
    }

    @media only screen and (max-width: 479px) {
      display: block;
    }
  `,
  titleMain: styled.h3`  
    margin-left: 10px;
    padding-left: 11px;
    position: relative;
    font-size: 24px;
    font-weight: 700;

    &:before {
      content: "";
      width: 1px;
      height: 18px;
      display: block;
      position: absolute;
      left: 0;
      top: 6px;
      background:${LIGHT_GRAY6};
    }

    @media only screen and (max-width: 767px) { 
      margin-top: 3px;
      float: right;
      font-size: 22px;
      text-align: right;

      &:before {
        height: 14px;
      }
    }
  `,
  title: styled.h4`
    font-size: 24px;
    font-weight: 700;
    line-height: 1.8em;

    @media only screen and (max-width: 767px) { 
      display: inline-block;
      font-size: 22px;
    }
  `,
  itemTitle: styled.h5`
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;

    @media only screen and (max-width: 1059px) {
      margin-top: 0px;
    }

    @media only screen and (max-width: 767px) { 
      font-size: 14px;
    }
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
  note: styled.p`
    font-size: 15px;
    color: ${DARK_GRAY1};
    font-weight: bold;
    display: flex;
    justify-align: center;
    
  `,
  description: styled.p`
    font-size: 18px;
    color: ${LIGHT_GRAY8};
    line-height: 1.8;

    @media only screen and (max-width: 767px) { 
      font-size: 14px;
    }
`,
  image: styled.p`
    margin-right: 5px;
  `,
  igr: styled.div`
    margin-top: 80px;
  `,
  desc: styled.p`
    margin-left: 50px;
    line-height: 1.8;
    display: inline-block;
    vertical-align: middle;
  `,
  mt50:styled.div`
    margin-top: 50px;
  `,
  blueEmp:styled.span`
      color: ${BLUE1};
      font-family: 'premia';
      font-weight: 700;
  `,
  line:styled.div`
    width: 70px;
    height: 1px;
    margin: 10px 20px 14px;
    background: ${LIGHT_GRAY9};
    
    @media only screen and (max-width: 1059px) { 
      margin: 10px auto;
    }
  `,
  textBox:styled.div`
    width: auto;
    display: inline-block;
    text-align: center;

    @media only screen and (max-width: 1059px) { 
      width: 100%;

      &:not(:last-of-type) {
        margin-bottom: 10px;
      }
    }
  `,

  textBoxCenter:styled.div`
    width: auto;
    display: inline-block;
    vertical-align: middle;
    text-align: center;

    @media only screen and (max-width: 1059px) { 
      width: 100%;
      display: none;
    }
  `
}
export default TabContent;
