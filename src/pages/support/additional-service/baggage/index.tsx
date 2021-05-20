import styled from 'styled-components';
import {
  ComTitle,
  SupportLink,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';
import { ListGlobal } from 'src/components';
import BaggageTab from './baggageTab';
import { 
  additionalPacking,
  additionalSeat,
  additionalSideseat,
} from '../../linkset';

function Baggage(){
  return (
    <Container>
      <S.container>
        <ComTitle
          title="부가 서비스 구매"
        />
        <C.wrap>
          <C.body>
            <C.titleMain>사전 수하물 구매</C.titleMain>
            <BaggageTab />            
          </C.body>
          <C.body>
            <C.titleSub>구매 안내</C.titleSub>
            <C.content>
              <ListGlobal level="fst" body={
                <p>사전 구매 전 무료수하물 허용량을 먼저 확인해주시기 바랍니다.​</p>
              }/>
              <ListGlobal level="fst" body={
                <p>항공기 출발 48시간 전까지 홈페이지, 모바일 앱 및 예약센터를 통하여 구매하실 수 있습니다.​</p>
              }/>
              <ListGlobal level="fst" body={
                <p>수하물 구매는 탑승 당일 탑승수속 카운터에서도 구매 하실 수 있으나 초과수하물 요금이 적용됩니다.​</p>
              }/>
              {/* <ListGlobal level="fst" body={
                <p>타 항공사와 공동 운항편이나 제휴 항공사의 항공편 및 연결편 이용손님은 구매가 불가합니다.​</p>
              }/>
              <ListGlobal level="fst" body={
                <p>구매처가 한국인 경우 KRW, 그 외 해외공항은 USD 또는 현지통화로 구매하실 수 있습니다.​</p>
              }/>  
              ---------국제선 시 표출------------
              */}
            </C.content>
          </C.body>
          <C.body>
            <C.titleSub>취소 및 환불 안내</C.titleSub>
            <C.content>
              <ListGlobal level="fst" body={
                <p>항공기 출발 48시간 전까지만 취소 및 환불이 가능하며 48시간 이내에는 취소 및 환불이 불가합니다.<br></br>단, 항공기 지연 및 결항등 항공사 사정에 항공편 취소의 경우는 환불이 가능합니다</p>
              }/>
              <ListGlobal level="fst" body={
                <p>여정 변경/취소 시의 경우,</p>
              }/>
              <ListGlobal level="scd" body={
                <p>항공기 출발 48시간 전에는 구매한 사전수하물은 자동 취소되며 환불 가능합니다.​</p>
              }/>
              <ListGlobal level="scd" body={
                <p>항공기 출발 48시간 이내에는 구매한 사전수하물은 자동 취소되며 환불 불가합니다.​</p>
              }/>
              <ListGlobal level="fst" body={
                <p>환불 및 취소는 홈페이지, 모바일 앱 및 예약센터 각 구매처에서만 가능합니다.​</p>
              }/>
            </C.content>
          </C.body>
          <C.body>
            <C.titleSub>유의사항</C.titleSub>
            <C.content>
              <ListGlobal level="fst" body={
                <p>사전수하물구매는 당사자만 적용되며 양도가 불가능합니다.​</p>
              }/>
              <ListGlobal level="fst" body={
                <p>사전 구매하신 수하물은 탑승수속 카운터에서만 이용 가능하며 탑승구 등에서는 사용이 불가합니다.​</p>
              }/>
              <ListGlobal level="fst" body={
                <p>특수수하물 및 반려동물을 동반하는 손님은 사전수하물 구매가 불가능하며 탑승수속 카운터에서만 가능합니다.​</p>
              }/>
            </C.content>
          </C.body>
          <C.body>
            <C.titleMain>도움이 되셨나요?</C.titleMain>
            <C.linkWrap>
              <SupportLink
                title={additionalPacking.title}
                link={additionalPacking.link}
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

export default Baggage;