import styled from 'styled-components';
import {
  ComTitle,
  SupportLink,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  DARK_BLUE1,
  LIGHT_GRAY6,
  WHITE1,
} from '@airpremia/cdk/styles/colors';
import { ListGlobal } from 'src/components';
import { 
  additionalBaggage,
  additionalPacking,
  additionalSeat,
} from '../../linkset';

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
                title={additionalPacking.title}
                link={additionalPacking.link}
              />
              <SupportLink
                title={additionalSeat.title}
                link={additionalSeat.link}
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
  /* 서비스안내 공통css */
  wrap: styled.div`
    border-top: 2px solid ${DARK_GRAY1};

    &.bdN {
      border-top: 0;
    }
  `,
  body: styled.div`
    margin-top: 100px;

    &:first-of-type {
      margin-top: 30px;
    }
  `,
  titleMain: styled.h2`
    font-size: 24px;
    font-weight: bold;

    @media only screen and (max-width: 767px) {
      font-size: 22px;
      line-height: 28px;
      letter-spacing: -0.04em;
    }
  `,
  titleSub: styled.h3`
    font-size: 21px;
    font-weight: 700;

    @media only screen and (max-width: 767px){
      font-size: 16px;
      letter-spacing: -0.32px;
      margin-top: 60px;
    }
  `,
  content: styled.div`
    margin-top: 30px;
    font-size: 18px;
    line-height: 1.8em;

    &.mt60 {
      margin-top: 60px;
    }

    @media only screen and (max-width: 767px){
      margin-top: 40px;
      font-size: 14px;
      letter-spacing: -0.28px;

      &.mt60 {
        margin-top: 40px;
      }
    }
  `,
  linkWrap: styled.div`
    margin-top: 30px;

    @media only screen and (max-width: 1059px) {
      margin-top: 20px;
    }
  `,
  /* 서비스안내 공통css 끝 */
}

const T = {
  table: styled.div`
    border-top: 0.75px solid ${DARK_BLUE1};
    border-bottom: 0.75px solid ${DARK_BLUE1};
    table {
      width: 100%;
      th, td{
        font-size: 20px;
        line-height: 1.36em;
        text-align: center;
        vertical-align: middle;
        padding: 15px;
      }
      thead th, thead td {
        color: ${WHITE1};
        font-weight: 700;
        background: ${DARK_BLUE1};
      }
      tbody th, tbody td{
        border-bottom: 0.75px solid ${LIGHT_GRAY6};
        border-right: 0.75px solid ${LIGHT_GRAY6};
      }
      tbody th{
        font-weight: 700;
      }
      tbody td{
        font-weight: 400;
        &:last-child {
          border-right: none;
        }
      }
    }
    @media only screen and (max-width: 767px) {
      table {
        th, td{
          font-size: 14px;
          letter-spacing: -0.28px;
        }
      }
    }
  `,
}
export default Packing;