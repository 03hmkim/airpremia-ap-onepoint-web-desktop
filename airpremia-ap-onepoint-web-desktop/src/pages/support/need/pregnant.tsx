import styled from 'styled-components';
import {
  ComTitle,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY8,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import Psghelp from 'public/images/support/img_psghelp_menu2.svg'

function travel_teenager(){
  return (
    <Container>
      <ComTitle title="도움이 필요한 손님" />
      <C.wrap>
        <C.body>
          <C.div>
            <C.title>임산부 손님</C.title>
            <C.itemText>임산부 손님께서 안전하고 편안한 여행을 위하여 전 노선에서 항공기 우선탑승과 도착지에서 수하물 우선 수취 서비스를 제공해 드립니다.</C.itemText>
            <br />
            <Psghelp />
          </C.div>
          <C.body>
            <C.subTitle>임신 기간별 항공여행 안내</C.subTitle>
            <C.itemText>
              <C.bold>1) 임신 32주(8개월) 미만</C.bold>
              의사로부터 항공여행 금지 권고를 받지 않는 일반인과 동일한 항공 여행이 가능합니다.​ (별도의 구비 서류 필요 없음)​
            </C.itemText>
            <C.itemText>
              <C.bold>2) 임신 32주(8개월) 이상 37주 미만​</C.bold>
              전문의가 작성한 의사소견서 총 2부(원본 1부/사본 1부)를 제출하셔야 합니다.<br />
              <span>*탑승기준일(복편탑승일도 동일하게 적용) 7일 이내여야 하며, 의사소견서 내에는 항공 여행의 적합 여부/임신일 수(작성일 ​기준)/분만 예정일/임신관련 합병증 유무가 명기되어야 합니다.</span>
            </C.itemText>
            <C.itemText>
              <C.bold>3) 임신 37주 이상 ​(다태 임신 33주 이상)</C.bold>
              임산부와 태아의 건강을 위해 의사소견서 소지 여부와 관계 없이 항공기 탑승이 불가합니다.
            </C.itemText>
          </C.body>
          <C.body>
            <C.subTitle>의사소견서 준비 방법</C.subTitle>
            <C.itemText>1) 의사소견서는 원본 1부와 사본 2부를 준비해주시기 바랍니다.​<br />
              2) 의사소견서 내에는 항공 여행의 적합 여부/분만 예정일/분만 징후 및 임신 관련 합병증 유무의 내용이 포함되어야 합니다.​<br />
              3) 탑승기준일(복편탑승일도 동일하게 적용) 7일 이내 발급한 것이여야 합니다. 복편의 탑승일을 기준으로 7일을 초과한 경우 현지에서 다시 의사소견서를 제출하여야 합니다.<br />
              <span>예시) 의사진단서를 5월 1일에 발급받은 임산부 손님의 여정: 5월 2일 (인천 → 하노이) / 5월 8일 (하노이 → 인천)</span><br />
              <C.mb>
                <C.itemText>
                  <span>- 5월 2일: 소견서 유효</span><br />
                  <span>- 5월 8일: 소견서 유효기간 만료</span>
                </C.itemText>
              </C.mb>
            </C.itemText>              
          </C.body>
        </C.body>
      </C.wrap>
    </Container>
  );
}

const C = {
  wrap: styled.div`
    margin-top: 70px;
    border-top: 2px solid ${DARK_GRAY1};
  `,
  body: styled.div`
    margin-top: 100px;
    &:first-of-type{
      margin-top: 30px;
    }
  `,
  title: styled.h4`
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 30px;
    
  `,
  subTitle: styled.h5`
    font-size: 22px;
    font-weight: bold;
    padding-bottom: 30px;
  `,
  itemTitle: styled.h6`
    padding-bottom: 30px;
    font-size: 18px;
    font-weight: bold;
  `,
  linkTitle: styled.a`
    font-size: 16px;
    font-weight: bold;
    color: ${BLUE1};
    line-height: 36px;
    cursor: pointer;
  `,
  itemText: styled.p`
    font-size: 15px;
    line-height: 30px;
    span{
        color: ${LIGHT_GRAY8}
    }
  `,
  description: styled.p`
    font-size:14px;
    color: ${LIGHT_GRAY8};
    margin-top: 15px;
  `,
  
  content: styled.div`
    margin-top: 12px;
  `,
  button: styled.button`
    background: none;
    color: #ccc;
    font-size: 15px;
    font-weight: bold;
    margin:30px 40px 30px 0;
  `,
  div: styled.div`
    padding-top: 25px;
  `,
  ul: styled.ul`
    font-size: 18px;
    font-weight: bold;`,
  li: styled.li`
    font-size: 15px;
    line-height: 36px;
    font-weight: normal;
  `,
  span: styled.span`
    color:#FF5800;
    border-bottom: 2px solid #FF5800;
  `,
  p: styled.p``,
  bold: styled.p`
    font-weight: bold;
  `,

  subbox:styled.h5`
    padding-bottom: 50px;
    font-size: 15px;
    line-height: 36px;
  `,
  badge:styled.div`
    width: 60px;
    height: 100%;
    display: flex;
    -webkit-box-pack: center;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: #0093ff;
    padding-top: 2px;
    box-sizing: border-box;
    color:#fff;
    font-size: 18px;
    margin-right: 9px;
  `,
  inline: styled.div`
    display: flex;
    align-items: baseline;
    padding-bottom: 30px;
  `,
  sbody: styled.div`
    margin-top: 100px;
  `,
  note: styled.p`
    font-size: 15px;
    color: ${DARK_GRAY1};
    font-weight: bold;
    display: flex;
    justify-align: center;
  `,
  image: styled.p`
    margin-right: 5px;
  `,
  right: styled.div`
    display: block;
  `,
  mb: styled.div`
    margin-left: 20px;`,
}


export default travel_teenager;