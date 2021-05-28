import styled from 'styled-components';
import {
  ComTitle,
  SupportLink,
} from 'src/components';
import { Container } from 'src/styles/layout';
import { ListGlobal } from 'src/components';
import { SupportStyle } from 'src/styles/common';
import { 
  additionalBaggage,
  additionalSideseat,
  additionalSeat,
} from 'src/components/molecules/gnbNew/linkset';

function Packing(){
  return (
    <Container>
      <S.container>
        <ComTitle
          title="부가서비스 구매"
        />
        <C.wrap>
          <C.body>
            <C.titleMain>수하물용품 구매</C.titleMain>
            <C.content>
              출발 당일 탑승수속 카운터에서 유모차 및 위탁수하물을 포장할 수 있는 비닐을 구매하실 수 있습니다.
            </C.content>
          </C.body>
          <C.body>
            <C.titleSub>가격 및 규격</C.titleSub>
            <C.content>
              <T.table>
                <div className="tbWrap">
                  <table>
                    <colgroup>
                      <col width="50%"></col>
                      <col width="50%"></col>
                    </colgroup>
                    <thead>
                      <tr>
                        <th>구분</th>
                        <td>포장용 비닐</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>가격</th>
                        <td>3,000</td>
                      </tr>
                      <tr>
                        <th>규격</th>
                        <td>1,000 X 1,510mm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </T.table>
            </C.content>
          </C.body>
          <C.body>
            <C.titleSub>유의사항</C.titleSub>
            <C.content>
              <ListGlobal level="fst" body={
                <p>구매 후 환불이 불가합니다. (항공기 지연, 결항 포함)​</p>
              }/>
            </C.content>
          </C.body>
          <C.body>
            <C.titleMain>도움이 되셨나요?</C.titleMain>
            <C.linkWrap>
              <SupportLink
                title={additionalBaggage.title}
                link={additionalBaggage.link}
              />
              <SupportLink
                title={additionalSeat.title}
                link={additionalSeat.link}
              />
              <SupportLink
                title={additionalSideseat.title}
                link={additionalSideseat.link}
              />
            </C.linkWrap>
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
}

const T = {
  table: styled.div`
  `,
}
export default Packing;