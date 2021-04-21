import styled from 'styled-components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY6,
  LIGHT_GRAY8,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';
import { 
  TaskButton, 
  Caution, 
  Tag,
  PromotionContent, 
} from 'src/components';
import { listData } from 'src/components/molecules/promotion/dataset';

function PromotionPage(){

  const caution = {
    title: '유의사항',
    body: [
      '항공권 구매 이벤트는 에어프레미아 홈페이지 또는 모바일을 통해 해당 이벤트 노선의 항공권을 구매한 회원을 대상으로 진행됩니다.',
      '모든 이벤트는 로그인을 통해 구매, 참여한 본인 1인에 한하여 응모 및 경품이 지급됩니다.',
      '항공권 구매 후 예약취소, 환불 시 이벤트 대상에서 제외됩니다.',
    ],
  };

  return (
    <Container>
      <C.titleWidth>
        <Tag weight={400} backgroundColor={ORANGE2}>D-19</Tag>
        <C.titleMain>산호세 신규 취항 기념<br />
        산호세행 15% 할인 이벤트</C.titleMain>
        <C.ntg>2020. 10. 31. - 2022. 10. 31.</C.ntg>
      </C.titleWidth>
      <C.wrap>
        <C.textBox>
          <PromotionContent
            image='promotion_img_10.png'
            description='산호세 신규 취항 기념으로 산호세행 여정을 예매하시는 고객 선착순 100명에 한하여 항공권 할인 이벤트를 진행합니다.'
            list={listData}
          />
        </C.textBox>
        <C.btnBox>
          <TaskButton>이벤트 참가하기</TaskButton>
        </C.btnBox>
        <C.caution>
          <Caution
            title={caution.title}
            body={caution.body}
          />
        </C.caution>
      </C.wrap>
    </Container>
  );
}


const C = {
  titleWidth:styled.div`
    margin-bottom: 100px !important;
    @media only screen and (max-width: 767px) { 
      margin-bottom: 80px !important;
    }
  `,
  titleMain: styled.h3`
    margin-top: 15px;
    font-size: 40px;
    font-weight: bold;
    line-height: 48px;
    letter-spacing: -0.3px;
    @media only screen and (max-width: 767px) { 
      margin-top: 10px;
      font-size: 26px;
      line-height: 36px;
      letter-spacing: -0.52px;
    }
  `,
  ntg: styled.p`
    color: ${LIGHT_GRAY8};
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0;
    position: relative;
    margin-top: 15px;
    @media only screen and (max-width: 767px) { 
      font-size: 13px;
      line-height: 23px;
      letter-spacing: -0.28px;
      margin-top: 10px;
    }
  `,
  wrap: styled.div`
    margin-top: 80px;
    @media only screen and (max-width: 767px) {
      margin-top: 60px;
    }
  `,
  textBox: styled.div`
    border-top: 2px solid ${DARK_GRAY1};    
    border-bottom: 2px solid ${DARK_GRAY1};
  `,
  imgBox:styled.div`
    width: 1200px;
    height: 720px;
    margin: 40px 0 60px;
    background-color: ${LIGHT_GRAY6};
  `,
  caution: styled.div`
    margin-top: 80px;
  `,
  btnBox: styled.div`
    max-width: 350px;
    margin: 60px auto 0;
    display: none;
  `,
}

export default PromotionPage;