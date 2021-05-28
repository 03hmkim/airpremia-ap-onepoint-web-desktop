import styled from 'styled-components';
import {
  ComTitle,
  SupportLink,
} from 'src/components';
import { Container } from 'src/styles/layout';
import { SupportStyle } from 'src/styles/common';
import {
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import { ListGlobal } from 'src/components';
import ProhibitionTab from './prohibitionTab';
import { 
  baggageFree,
  baggageLost,
  baggageOver,
  baggageSpecial,
} from 'src/components/molecules/gnbNew/linkset';

function Prohibition(){
  return (
    <Container>
      <S.container>
        <ComTitle
          title="수하물"
        />
        <C.wrap>
          <C.body>
            <C.titleMain>운송제한물품</C.titleMain>
            <C.content>
              <ListGlobal level="ball gray" body={
                <p>하기 기준은 대한민국 공항 적용 기준이며, 목적지가 외국 공항일 경우 추가 금지 물품을 항공사 또는 여행사를 통하여 사전에 반드시 확인 바랍니다.</p>
              }/>
              <ListGlobal level="ball gray" body={
                <p>
                  하기 외 제한 물품은&nbsp;
                  <C.linkpage>
                    <a href="https://avsec.ts2020.kr/avsc/main.do" target="_blank">
                      한국교통안전공단
                    </a>
                  </C.linkpage>
                  을 통하여 확인해 주시기 바랍니다.
                </p>
              }/>
            </C.content>
            <ProhibitionTab />
          </C.body>
          <C.body>
            <C.titleSub>유의사항</C.titleSub>
            <C.content>
              <ListGlobal level="fst" body={
                <p>[항공보안법] 제44조에 따라 2년 이상 5년 이하의 징역 또는 2천만원 이상 5천만원 이하의 벌금에 처할 수 있으니 금지 물품을 항공기로 반입하지 않도록 유의해 주시기 바랍니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>항공사 사전승인이 필요한 경우 수량 또는 운송이 제한될 수 있습니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>외국 공항의 경우 해당국의 규정에 따라 다를 수 있으며, 출국 또는 환승 검색 시 압수될 수 있습니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>액체류 면세품을 구매한 손님</p>
              }/>
              <ListGlobal level="scd" body={
                <p>면세점에서 제공하는 투명 봉인 봉투 STEB(Security Tamper Evident Bag)에 물품과 영수증이 들어있지 않으면 물품이 폐기 또는 압류 처분 되오니 주의하시기 바랍니다.</p>
              }/>
              <ListGlobal level="scd" body={
                <p>최종 목적지행 항공기 탑승 전까지는 미개봉 상태를 유지해주시기 바랍니다.</p>
              }/>
            </C.content>
          </C.body>
          <C.body>
            <C.titleMain>도움이 되셨나요?</C.titleMain>      
            <C.linkWrap>
              <SupportLink
                title={baggageFree.title}
                link={baggageFree.link}
              />
              <SupportLink
                title={baggageLost.title}
                link={baggageLost.link}
              />
              <SupportLink
                title={baggageOver.title}
                link={baggageOver.link}
              />
              <SupportLink
                title={baggageSpecial.title}
                link={baggageSpecial.link}
              />
            </C.linkWrap>
          </C.body>
        </C.wrap>
      </S.container>
    </Container>
  )
}

const S = {
  container: styled.div``,
}

const C = {
  ...SupportStyle.C1,

  linkpage: styled.span`
    color: ${BLUE1};
    border-bottom: 1px solid ${BLUE1};
  `,
}
export default Prohibition;