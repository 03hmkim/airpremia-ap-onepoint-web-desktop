import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import {
  LIGHT_GRAY8,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';

function TabContentPenalty({currIdxCont}: IProps) {
  if ( currIdxCont === 0 ) {
    return (
      <C.wrap>
        <C.sbody>
          <C.tmi>
            <T.table>
              <div className="tbWrap">
                <table>
                  <colgroup>
                    <col width="25%"></col>
                    <col width="25%"></col>
                    <col width="25%"></col>
                    <col width="25%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th></th>
                      <td>라이트</td>
                      <td>스탠다드</td>
                      <td>플렉스</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>변경/취소</th>
                      <td>7,000</td>
                      <td>5,000</td>
                      <td>3,000</td>
                    </tr>
                    <tr>
                      <th>No-show</th>
                      <td>8,000</td>
                      <td>8,000</td>
                      <td>8,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </T.table>
          </C.tmi>
          <C.sb>
            <C.content>
              <C.oneLine>
                <C.yell>*</C.yell> 
                <C.lg>No-Show 시 항공권 취소 수수료와 위약금 모두 부과되며, 미탑승 항공편에 관한 유류할증료 및 공항세는 환불 요청 가능합니다.</C.lg>
              </C.oneLine>
              <C.oneLine>
                <C.yell>*</C.yell> 
                <C.lg>상기 규정은 국내선 항공편에서 제공됩니다.</C.lg>
              </C.oneLine>
            </C.content>
          </C.sb>
        </C.sbody>
      </C.wrap>
    )
  } else {
    return (
      <C.wrap>
        <C.sbody>
          <C.tmi>
            <T.table>
              <div className="tbWrap">
                <table>
                  <colgroup>
                    <col width="33%"></col>
                    <col width="33%"></col>
                    <col width="33%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th></th>
                      <td>스탠다드</td>
                      <td>플렉스</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>변경/취소</th>
                      <td>3,000</td>
                      <td>3,000</td>
                    </tr>
                    <tr>
                      <th>No-show</th>
                      <td>8,000</td>
                      <td>8,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </T.table>
          </C.tmi>
          <C.sb>
            <C.content>
              <C.oneLine>
                <C.yell>*</C.yell> 
                <C.lg>No-Show 시 항공권 취소 수수료와 위약금 모두 부과되며, 미탑승 항공편에 관한 유류할증료 및 공항세는 환불 요청 가능합니다.</C.lg>
              </C.oneLine>
              <C.oneLine>
                <C.yell>*</C.yell> 
                <C.lg>상기 규정은 국내선 항공편에서 제공됩니다.</C.lg>
              </C.oneLine>
            </C.content>
          </C.sb>
        </C.sbody>
      </C.wrap>
    )
  }
}

const C = {
  oneLine: styled.p`
  `,
  lg: styled.span`
    color: ${LIGHT_GRAY8};
  `,
  yell: styled.span`
    color: ${ORANGE2};
  `,
  wrap: styled.div`
    margin: 0;
  `,
  sbody: styled.div`
    margin-top: 60px;
  `,
  content: styled.div`
    font-size: 18px;
    line-height: 1.8em;
    @media only screen and (max-width: 767px) {
      font-size: 14px;
    }
  `,
  sb: styled.div`
    margin-top: 30px;
    @media only screen and (max-width: 767px) {
      margin-top: 20px;
    }
  `,
  tmi: styled.p`
    margin-top: 60px;
  `,
  center: styled.p`
    text-align: center;
  `,
}
const T = {
  table: styled.div`
  `,
}
export default TabContentPenalty;
