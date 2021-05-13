import styled from 'styled-components';
import {
  ComTitle,
  SupportLink,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  ORANGE2,
  RED2,
} from '@airpremia/cdk/styles/colors';
import Img_plusseat from 'public/images/support/img_plusseat.png';
import { ListGlobal } from 'src/components';
import { 
  additionalBaggage,
  additionalPacking,
  additionalSeat,
} from '../../linkset';

function SideSeat(){
  return (
    <Container>
      <S.container>
        <ComTitle
          title="부가서비스 구매"
        />
        <C.wrap>
          <C.body>
            <C.titleMain>공항에서의 옆좌석 구매</C.titleMain>
              <C.content>
                <C.sb>
                  출발 당일 공항 탑승수속 카운터에서만 구매가 가능하며 더욱 편안한 여행을 하실 수 있습니다.<br></br>
                  (커플 손님, 유아를 동반한 손님, 혼자 누워서 여행하고자 하는 손님 등)  
                  <C.image></C.image>
                </C.sb>
              </C.content>
            </C.body>
            <C.body>
              <C.titleSub>옆자리 구매 요금</C.titleSub>
              <C.content>
                <C.sb>
                  <T.table>
                    <div className="tbWrap">
                      <table>
                        <colgroup>
                          <col width="20%"></col>
                          <col width="20%"></col>
                          <col width="20%"></col>
                          <col width="20%"></col>
                          <col width="20%"></col>
                        </colgroup>
                        <thead>
                          <tr>
                            <th>구분</th>
                            <td>국내선</td>
                            <td>동북아</td>
                            <td>동남아</td>
                            <td>미주</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>요금</th>
                            <td><C.red>구매 불가</C.red></td>
                            <td>20,000</td>
                            <td>40,000</td>
                            <td>100,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </T.table>
                </C.sb>
              </C.content>
            </C.body>
            <C.body>
              <C.titleSub>유의사항</C.titleSub>
              <C.content>
                <C.sb>
                  <ListGlobal level="fst" body={
                    <p>옆자리 구매는 출발당일 탑승수속 카운터에서 구매가 가능하며, 취소나 환불은 불가합니다.<br></br>단, 항공사 사정으로 인하여 서비스를 제공받지 못할 경우는 취소나 환불이 가능합니다.​</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p>배정 가능 좌석이 비어있는 경우에 한해 구매가 가능합니다.​</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p><C.orange>이용 불가 손님</C.orange>: 타 항공사와 공동 운항편이나 제휴 항공사의 항공편 이용손님, CBBG(Cabin Baggage) 이용 손님, EXST(Extra Seat) 이용 손님​</p>
                  }/>
                  <ListGlobal level="fst" body={
                    <p>성인 1명이 유아 2명을 동반한 경우 유아 1명의 항공권은 소아운임이 적용됩니다.​</p>
                  }/>
                </C.sb>
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


  orange: styled.span`
    color: ${ORANGE2};
  `,
  red: styled.span`
    color: ${RED2};
  `,
  image: styled.div`
    background: url(${Img_plusseat});
    background-size: cover;
    width: 750px;
    height: 240px;
    margin: 30px auto 0;
    @media only screen and (max-width: 767px){
      margin: 20px auto 0;
      width: 600px;
      height: 192px;
    }
    @media only screen and (max-width: 599px){
      width: 400px;
      height: 128px;
    }
  `,
  sb: styled.div`
    font-size: 18px;
    line-height: 1.8em;

    @media only screen and (max-width: 767px){
      font-size: 14px;
      letter-spacing: -0.28px;
    }
  `,
}

const T = {
  table: styled.div`
  `,
}

export default SideSeat;