import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY6,
  LIGHT_GRAY8,
  LIGHT_GRAY9,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import { TaskButton } from 'src/components';
import SelectDateOn from 'public/images/select_date_on.svg';
import SelectDateOff from 'public/images/select_date_off.svg';
import Caution from 'public/images/support/ico_caution.svg';


function TabContent({currIdxCont}: IProps) {
  if ( currIdxCont === 0 ) {
    return (
    <C.sb>
      <C.flex>
        <C.title>서울/김포(GMP) - 제주(CJU)</C.title>
        <C.titleLine />
        <C.titleMain className="font-premia-bold"><C.blueEmp>D-30</C.blueEmp></C.titleMain>
      </C.flex>
      <T.table>
        <table>
          <colgroup>
            <col width="25%"></col>
            <col width="25%"></col>
            <col width="6.25%"></col>
            <col width="6.25%"></col>
            <col width="6.25%"></col>
            <col width="6.25%"></col>
            <col width="6.25%"></col>
            <col width="6.25%"></col>
            <col width="6.25%"></col>
            <col width="6.25%"></col>
          </colgroup>
          <thead>
            <tr>
              <th>항공편</th>
              <td>시간</td>
              <td></td>
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
              <td></td>
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
              <td></td>
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
              <td></td>
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
      </T.table>
      <C.wrap>
        <C.flex>
          <C.title>제주(CJU) - 서울/김포(GMP)</C.title>
        </C.flex>
        <T.table>
          <table>
            <colgroup>
              <col width="25%"></col>
              <col width="25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
            </colgroup>
            <thead>
              <tr>
                <th>항공편</th>
                <td>시간</td>
                <td></td>
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
                <td></td>
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
                <td></td>
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
                <td></td>
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
        </T.table>
        <C.mt50>
          <C.note><C.image><Caution /></C.image>꼭 확인해주세요!</C.note>
              <div style={{marginTop:'15px'}}>
                <C.description>- 항공 스케줄은 정부인가 조건이며, 스케줄과 기종은 예고없이 변경될 수 있습니다.</C.description>
                <C.description>- 스케줄 재확인이나 기타 문의사항이 있으시면 고객센터 (1234-1234)로 문의하여 주십시오.</C.description>
              </div>
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
        <C.titleLine />
        <C.titleMain className="font-premia-bold"><C.blueEmp>D-10</C.blueEmp></C.titleMain>
      </C.flex>
      <T.table>
          <table>
            <colgroup>
              <col width="25%"></col>
              <col width="25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
            </colgroup>
            <thead>
              <tr>
                <th>항공편</th>
                <td>시간</td>
                <td></td>
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
                <td></td>
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
                <td></td>
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
                <td></td>
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
        </T.table>
      <C.wrap>
        <C.flex>
          <C.title>제주(CJU) - 서울/인천(ICN)</C.title>
        </C.flex>
        <T.table>
          <table>
            <colgroup>
              <col width="25%"></col>
              <col width="25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
            </colgroup>
            <thead>
              <tr>
                <th>항공편</th>
                <td>시간</td>
                <td></td>
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
                <td></td>
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
                <td></td>
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
                <td></td>
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
        </T.table>
        <C.mt50>
          <C.note><C.image><Caution /></C.image>꼭 확인해주세요!</C.note>
              <div style={{marginTop:'15px'}}>
                <C.description>- 항공 스케줄은 정부인가 조건이며, 스케줄과 기종은 예고없이 변경될 수 있습니다.</C.description>
                <C.description>- 스케줄 재확인이나 기타 문의사항이 있으시면 고객센터 (1234-1234)로 문의하여 주십시오.</C.description>
              </div>
        </C.mt50>
        <C.igr>
          <div style={{width:'300px', margin: '0 auto'}}>
          <TaskButton fontWeight ={"normal"}>제주(CJU)행 예매하러 가기</TaskButton>
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
        <C.titleLine />
        <C.titleMain className="font-premia-bold"><C.blueEmp>D-2</C.blueEmp></C.titleMain>
      </C.flex>
      <T.table>
          <table>
            <colgroup>
              <col width="25%"></col>
              <col width="25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
            </colgroup>
            <thead>
              <tr>
                <th>항공편</th>
                <td>시간</td>
                <td></td>
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
                <td></td>
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
                <td></td>
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
                <td></td>
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
        </T.table>
      <C.wrap>
        <C.flex>
          <C.title>제주(CJU) - 서울/김포(GMP)</C.title>
        </C.flex>
        <T.table>
          <table>
            <colgroup>
              <col width="25%"></col>
              <col width="25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
            </colgroup>
            <thead>
              <tr>
                <th>항공편</th>
                <td>시간</td>
                <td></td>
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
                <td></td>
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
                <td></td>
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
                <td></td>
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
        </T.table>
        <C.mt50>
          <C.note><C.image><Caution /></C.image>꼭 확인해주세요!</C.note>
              <div style={{marginTop:'15px'}}>
                <C.description>- 항공 스케줄은 정부인가 조건이며, 스케줄과 기종은 예고없이 변경될 수 있습니다.</C.description>
                <C.description>- 스케줄 재확인이나 기타 문의사항이 있으시면 고객센터 (1234-1234)로 문의하여 주십시오.</C.description>
              </div>
        </C.mt50>
        <C.igr>
          <div style={{width:'300px', margin: '0 auto'}}>
          <TaskButton fontWeight ={"normal"}>예매하러 가기</TaskButton>
        </div>
        </C.igr>
      </C.wrap>
    </C.sb>
    )
  }
  
  else {
    return (
    <C.sb>
      <C.flex>
        <C.title>서울/인천(ICN) - 뮌헨(MUC)</C.title>
        <C.titleLine />
        <C.titleMain className="font-premia-bold"><C.blueEmp>D-30</C.blueEmp></C.titleMain>
      </C.flex>
      <T.table>
          <table>
            <colgroup>
              <col width="25%"></col>
              <col width="25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
            </colgroup>
            <thead>
              <tr>
                <th>항공편</th>
                <td>시간</td>
                <td></td>
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
                <td></td>
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
                <td></td>
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
        </T.table>
      <C.mt50>
        <C.flex>
          <C.title>뮌헨(MUC) - 서울/인천(ICN)</C.title>
          <C.titleLine />
          <C.titleMain className="font-premia-bold"><C.blueEmp>D-30</C.blueEmp></C.titleMain>
        </C.flex>
        <T.table>
          <table>
            <colgroup>
              <col width="25%"></col>
              <col width="25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
            </colgroup>
            <thead>
              <tr>
                <th>항공편</th>
                <td>시간</td>
                <td></td>
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
                <td></td>
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
                <td></td>
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
        </T.table>
      </C.mt50>
      <C.mt50>
        <C.flex>
          <C.title>서울/인천(ICN) - 벤쿠버(YVR)</C.title>
          <C.titleLine />
          <C.titleMain className="font-premia-bold"><C.blueEmp>Comming Soon!</C.blueEmp></C.titleMain>
        </C.flex>
        <T.table>
          <table>
            <colgroup>
              <col width="25%"></col>
              <col width="25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
            </colgroup>
            <thead>
              <tr>
              <th>항공편</th>
                <td>시간</td>
                <td></td>
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
                <td></td>
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
                <td></td>
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
        </T.table>
      </C.mt50>
      <C.mt50>
        <C.flex>
          <C.title>벤쿠버(YVR) - 서울/인천(ICN)</C.title>
          <C.titleLine />
          <C.titleMain className="font-premia-bold"><C.blueEmp>Comming Soon!</C.blueEmp></C.titleMain>
        </C.flex>
        <T.table>
          <table>
            <colgroup>
              <col width="25%"></col>
              <col width="25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
              <col width="6.25%"></col>
            </colgroup>
            <thead>
              <tr>
                <th>항공편</th>
                <td>시간</td>
                <td></td>
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
                <td></td>
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
                <td></td>
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
        </T.table>
      </C.mt50>
      <C.mt50>
        <C.note><C.image><Caution /></C.image>꼭 확인해주세요!</C.note>
        <div style={{marginTop:'15px'}}>
          <C.description>- 항공 스케줄은 정부인가 조건이며, 스케줄과 기종은 예고없이 변경될 수 있습니다.</C.description>
          <C.description>- 스케줄 재확인이나 기타 문의사항이 있으시면 고객센터 (1234-1234)로 문의하여 주십시오.</C.description>
        </div>
      </C.mt50>
    </C.sb>
    )
  }
}


const T = {
  table: styled.div`
    padding: 40px 0 30px;
    .taL,
    .taL{
      text-align: left;
    }

    table {
      width: 100%;
      thead th,
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
      td:nth-child(2){
        text-align: left;
        vertical-align: middle;
      }
      thead th,
      thead td{
        padding: 18px 0;
        border-bottom: 1px solid ${DARK_GRAY1};
      }
      tbody th,
      tbody td{
        padding: 25px 0;
        border-bottom: 1px solid ${LIGHT_GRAY5};
      }
    }
  `,
};
  

const C = {
  wrap: styled.div`
    margin-top: 70px;
  `,
  titleLine:styled.div`
  width: 1px;
  height: 18px;
  background:${LIGHT_GRAY6};
  margin: 6px 10px;
  `,
  titleMain: styled.h3`
    font-size: 30px;
    font-weight: bold;
  `,
  title: styled.h4`
    font-size: 22px;
    font-weight: bold;
  `,
  itemTitle: styled.h5`
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  `,
  sb: styled.div`
    margin-top: 60px;
  `,
  flex:styled.div`
  display: flex;
  align-items: center;
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
  font-size: 14px;
  color: ${LIGHT_GRAY8};
  line-height: 1.8;
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
      font-weight: 400;
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
  text-align: center;
  `,

  textBoxCenter:styled.div`
  width: auto;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  `
}
export default TabContent;
