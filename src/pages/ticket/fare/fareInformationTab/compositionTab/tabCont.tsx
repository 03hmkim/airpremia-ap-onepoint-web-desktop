import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';
import FareConfig from 'public/images/ticket/fareConfig.png';

function TabContentComposition({currIdxCont}: IProps) {
  if ( currIdxCont === 0 ) {
    return (
      <C.wrap>
        <C.fareBox>
          <C.boxCon>
            <C.title>ECONOMY CLASS</C.title>
            <C.tmi>
              <C.oneLine>이코노미 클래스의 새로운 기준을 제안합니다.</C.oneLine>
              <C.oneLine>충분한 간격의 좌석으로 이코노미의 새로운 좌석 기준을 경험해보세요.</C.oneLine>
            </C.tmi>
          </C.boxCon>
        </C.fareBox>
        <C.tmi>
          <T.table>
            <table>
              <colgroup>
                <col width="30%"></col>
                <col width="70%"></col>
              </colgroup>
              <tbody>
                <tr>
                  <th>좌석정보</th>
                  <td>
                    <T.noBorder>
                      <table>
                        <colgroup>
                          <col width="50%"></col>
                          <col width="50%"></col>
                        </colgroup>
                        <tbody>
                          <tr>
                            <th>항공사</th>
                            <th>좌석 길이</th>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <td><C.yell>에어프레미아 이코노미</C.yell></td>
                            <td><C.yell>35 inch (약 89cm)</C.yell></td>
                          </tr>
                          <tr>
                            <td>대형 항공사(FSC)</td>
                            <td>31-32 inch (약 78-91cm)</td>
                          </tr>
                          <tr>
                            <td>저가 항공사(LCC)</td>
                            <td>29-31 inch (약 73-78cm)</td>
                          </tr>
                        </tbody>
                      </table>
                    </T.noBorder>
                  </td>
                </tr>
                <tr>
                  <th>기내 와이파이 정보</th>
                  <td>
                    <C.oneLine>
                      기내 와이파이 
                      <C.yell>5MB</C.yell>
                      를 무료로 제공해 드립니다. 기내에서도 편리하게 인터넷을 사용해보세요.
                    </C.oneLine>
                    <C.oneLine>
                      <C.yell>*</C.yell>
                      <C.lg>국제선 노선에 적용</C.lg>
                    </C.oneLine>
                  </td>
                </tr>
                <tr>
                  <th>서비스 용품</th>
                  <td>안대, 귀마개, 필기도구, 간단한 의약품이 상시 준비되어 있습니다.</td>
                </tr>
              </tbody>
            </table>
          </T.table>
        </C.tmi>
      </C.wrap>
    )
  } else {
    return (
      <C.wrap>
        <C.fareBox>
          <C.boxCon>
            <C.title>PREMIUM ECONOMY CLASS</C.title>
            <C.tmi>
              합리적인 가격으로 편안함을 누릴 수 있는 프리미엄 이코노미 클래스를 소개합니다.
            </C.tmi>
          </C.boxCon>
        </C.fareBox>
        <C.tmi>
          <T.table>
            <table>
              <colgroup>
                <col width="30%"></col>
                <col width="70%"></col>
              </colgroup>
              <tbody>
                <tr>
                  <th>좌석정보</th>
                  <td>
                    <T.noBorder>
                      <table>
                        <colgroup>
                          <col width="50%"></col>                            <col width="50%"></col>
                        </colgroup>
                        <tbody>
                          <tr>
                            <th>항공사</th>
                            <th>좌석 길이</th>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <td><C.yell>에어프레미아 프리미엄 이코노미</C.yell></td>
                            <td><C.yell>42 inch (약 105cm)</C.yell></td>
                          </tr>
                          <tr>
                            <td>대형 항공사(FSC)</td>
                            <td>31-32 inch (약 78-91cm)</td>
                          </tr>
                          <tr>
                            <td>저가 항공사(LCC)</td>
                            <td>29-31 inch (약 73-78cm)</td>
                          </tr>
                        </tbody>
                      </table>
                    </T.noBorder>
                  </td>
                </tr>
                <tr>
                <th>기내 와이파이 정보</th>
                  <td>
                    <C.oneLine>
                      기내 와이파이 
                      <C.yell>5MB</C.yell>
                      를 무료로 제공해 드립니다. 기내에서도 편리하게 인터넷을 사용해보세요.
                    </C.oneLine>
                    <C.oneLine>
                      <C.yell>*</C.yell>
                      <C.lg>국제선 노선에 적용</C.lg>
                    </C.oneLine>
                  </td>
                </tr>
                <tr>
                  <th>서비스 용품</th>
                  <td>안대, 귀마개, 필기도구, 간단한 의약품이 상시 준비되어 있습니다.</td>
                </tr>
              </tbody>
            </table>
          </T.table>
        </C.tmi>
      </C.wrap>
    )
  }
}

const C = {
  fareBox: styled.div`
    height: 275px;
    background-image: url(${FareConfig});
    background-repeat: no-repeat;
    background-position: right 50px top 0;
    @media only screen and (max-width: 1059px) {
      height: auto;
      background: none;
      margin-bottom: 60px;
    }
  `,
  boxCon: styled.div`
    &::after{
      content: "";
      display: block;
      clear: both;
    }
  `,
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
  title: styled.h4`
    font-family: 'premiaOTF';
    font-size: 40px;
    font-weight: bold;
    padding-top: 100px;
    line-height: 1.8em;
    letter-spacing: -0.30px;
    @media only screen and (max-width: 767px) { 
      font-size: 26px;
      letter-spacing: -0.52px;
      padding-top: 60px;
    }
  `,
  tmi: styled.p`
    margin-top: 40px;
    font-size: 18px;
    line-height: 1.8em;
    @media only screen and (max-width: 767px) { 
      margin-top: 30px;
      font-size: 14px;
      letter-spacing: -0.32px;
    }
  `,
}
const T = {
  table: styled.div`
    border-top: 2px solid ${DARK_GRAY1};
    border-bottom: 2px solid ${DARK_GRAY1};
    table {
      width: 100%;
      th{
        color: ${DARK_GRAY1};
        font-size: 21px;
        font-weight: bold;
        line-height: 1.36em;
        letter-spacing: -0.3px;
        text-align: left;
        @media only screen and (max-width: 767px){
          font-size: 16px;
        }
      }
      td{
        font-size: 18px;
        font-weight: 400;
        line-height: 1.36em;
        letter-spacing: -0.3px;
        text-align: left;
        vertical-align: middle;
        position: relative;
        @media only screen and (max-width: 767px){
          font-size: 14px;
        }
      }
      tbody th,
      tbody td{
        padding: 60px 5px;
        border-bottom: 1px solid ${LIGHT_GRAY5};
        @media only screen and (max-width: 767px){
          padding: 20px 5px;
        }
      }
      tbody th{
        padding-left: 0;
      }
      tbody td{
        padding-right: 0;
      }
    }
  }
  `,
  noBorder: styled.div`
    border-top: none;
    border-bottom: none;
    table tbody th{
      font-size: 18px;
      padding-bottom: 13px;
      padding-top: 0;
      padding-left: 5px;
      padding-right: 5px;
      @media only screen and (max-width: 767px){
        font-size: 14px;
      }
    }
    table tbody td{
      border-bottom: none;
      padding: 10px 5px;
    };
    table tbody tr:first-child td{
      padding-top: 30px;
      @media only screen and (max-width: 767px){
        padding-top: 10px;
      }
    };
  `,
}
export default TabContentComposition;
