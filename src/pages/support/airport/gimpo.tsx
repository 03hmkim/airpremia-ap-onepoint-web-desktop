import styled from 'styled-components';
import {
  ComTitle,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import { SupportStyle } from 'src/styles/common';
import Linkblue from 'public/images/support/btn_txt_link_blue.svg';

function AirportIncheon(){
  return (
    <Container>
      <ComTitle
        title="취항지 공항 정보"
      />
      <S.container>
        <C.wrap>
          <C.body>
            <C.titleMain>김포국제공항</C.titleMain>
            <C.content>
              <T.table>
                <div className="tbWrap vtc">
                  <table>
                    <colgroup>
                      <col width="20%"></col>
                      <col width="80%"></col>
                    </colgroup>
                    <tbody>
                      <tr>
                        <th>위치</th>
                        <td>서울특별시 강서구 하늘길 112(공항동)</td>
                      </tr>
                      <tr>
                        <th>운영시간</th>
                        <td>04:30 ~ 23:00</td>
                      </tr>
                      <tr>
                        <th>대표전화</th>
                        <td>1661-2626</td>
                      </tr>
                      <tr>
                        <th>홈페이지</th>
                        <td>
                          운항정보 및 출입국절차 등의 정보가 필요하신 분은&nbsp;
                          <a className="link" href="https://www.airport.co.kr/gimpo/index.do" target="_blank">김포국제공항 홈페이지</a>
                          를 이용해주시기 바랍니다.
                        </td>
                      </tr>
                      <tr>
                        <th>오시는길</th>
                        <td>
                          <a className="link2" href="https://www.airport.co.kr/gimpo/cms/frCon/index.do?MENU_ID=1290" target="_blank">김포국제공항 오시는 길<Linkblue /></a>
                        </td>
                      </tr>
                      <tr>
                        <th>체크인 카운터</th>
                        <td>AXX ~ XX</td>
                      </tr>
                      <tr>
                        <th>공항유실물 센터</th>
                        <td>Tel : 02-2660-4097</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </T.table>
            </C.content>
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
  ...SupportStyle.C1,
};

const T = {
  table: styled.div`
    .link{
      color: ${BLUE1};
      border-bottom: 1px solid ${BLUE1};
    }
    
    .link2{
      color: ${BLUE1};
    }
  `,
};

export default AirportIncheon;