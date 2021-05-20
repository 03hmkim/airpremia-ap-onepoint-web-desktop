import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}

function TabContent({currIdxCont}: IProps) {
  if ( currIdxCont === 0 ) {
    return (
      <C.wrap>
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
      </C.wrap>
    )
  } else {
    return (
      <C.wrap>
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
      </C.wrap>
    )
  }
}

const C = {
  wrap: styled.div`
    margin-top: 60px;
    @media only screen and (max-width: 767px) { 
      margin-top: 40px;
    }
  `,
}

const T = {
  table: styled.div`
  `,
}

export default TabContent;
