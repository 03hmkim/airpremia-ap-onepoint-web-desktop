import styled from 'styled-components';
import {
  ComTitle,
  SupportLink,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  LIGHT_GRAY8,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';
// import Psghelp from 'public/images/support/img_psghelp_menu2.svg'
import { ListGlobal } from 'src/components';
import { SupportStyle } from 'src/styles/common';
import { 
  needHelp,
  needInfant,
  needPet,
  needTeenager,
} from 'src/components/molecules/gnbNew/linkset';


function Pregnant(){
  return (
    <Container>
      <S.container>
        <ComTitle title="도움이 필요한 손님" />
        <C.wrap>
          <C.body>
            <C.titleMain>임산부 손님</C.titleMain>
            <C.content>
              <C.itemText>임산부 손님께서 안전하고 편안한 여행을 위하여 전 노선에서 항공기 우선탑승과 도착지에서 수하물 우선 수취 서비스를 제공해 드립니다.</C.itemText>
            </C.content>
          </C.body>
          <C.body>
            <C.titleSub>임신 기간별 항공여행 안내</C.titleSub>
            <C.content>
              <T.table>
                <div className="tbWrap vtc">
                  <table className="vtc">
                    <colgroup>
                      <col width="30%"></col>
                      <col width="70%"></col>
                    </colgroup>
                    <tbody>
                      <tr>
                        <th>임신 32주 미만</th>
                        <td>
                          의사로부터 항공여행 금지 권고를 받지 않는 일반인과 동일한 항공 여행이 가능합니다.<br />(별도의 구비 서류 필요 없음)
                        </td>
                      </tr>
                      <tr>
                        <th>임신 32주 이상 ~ 37주 미만</th>
                        <td>
                          전문의가 작성한 의사소견서 총 2부(원본 1부/사본 1부)를 제출하셔야 합니다.<br />→ 탑승기준일(복편탑승일도 동일하게 적용) 7일 이내여야 하며, 의사소견서 내에는 항공 여행의 적합 여부/임신일 수(작성일 기준)/분만 예정일/임신관련 합병증 유무가 명기되어야 합니다.
                        </td>
                      </tr>
                      <tr>
                        <th>임신 37주 이상 (다태 33주 이상)</th>
                        <td>
                          임산부와 태아의 건강을 위해 의사소견서 소지 여부와 관계 없이 항공기 탑승이 불가합니다.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </T.table>
            </C.content>
          </C.body>
          <C.body>
            <C.titleSub>의사소견서 준비 방법</C.titleSub>
            <C.content>
              <ListGlobal level="fst" body={
                <p>의사소견서는 원본 1부와 사본 1부를 준비해주시기 바랍니다.​</p>
              }/>
              <ListGlobal level="fst" body={
                <p>의사소견서 내에는 항공 여행의 적합 여부/분만 예정일/분만 징후 및 임신 관련 합병증 유무의 내용이 포함되어야 합니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>
                  <C.orange>탑승기준일(복편탑승일도 동일하게 적용) 7일 이내 발급한 것</C.orange>이여야 하며, 복편의 탑승일을 기준으로 7일을 초과한 경우 현지에서 다시 의사소견서를 제출하여야 합니다.
                  <C.ex>의사진단서를 5월 1일에 발급받은 임산부 손님의 여정: 5월 2일 인천-하노이/5월 8일 하노이-인천 <br />→ 5월 2일: 소견서 유효/5월 8일: 소견서 유효기간 만료</C.ex>​</p>
              }/>
            </C.content>
          </C.body>
          <C.body>
            <C.titleMain>도움이 되셨나요?</C.titleMain>      
            <C.linkWrap>
              <SupportLink
                title={needHelp.title}
                link={needHelp.link}
              />
              <SupportLink
                title={needInfant.title}
                link={needInfant.link}
              />
              <SupportLink
                title={needPet.title}
                link={needPet.link}
              />
              <SupportLink
                title={needTeenager.title}
                link={needTeenager.link}
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

  itemText: styled.p`
    font-size: 18px;
    line-height: 30px;
    span{
        color: ${LIGHT_GRAY8}
    }
    @media only screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 1.8em;
      letter-spacing: -0.028em;
    }
  `,
  orange: styled.span`
    color: ${ORANGE2};
  `,
  ex: styled.div`
    position: relative;
    font-size: 18px;
    line-height: 2em;
    padding-left: 44px;
    &:before {
      content: "예시)";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }

    @media only screen and (max-width: 767px) {
      padding-left: 34px;
      font-size: 14px;
      line-height: 1.8em;
      letter-spacing: -0.028em;
    }
  `,
}

const T = {
  table: styled.div`
  `,
}

export default Pregnant;