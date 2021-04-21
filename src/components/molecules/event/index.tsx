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
  EventContent, 
} from 'src/components';
import { listData } from 'src/components/molecules/event/dataset';

function eventPage(){

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
      <Tag weight={400} backgroundColor={ORANGE2}>D-19</Tag>
      <C.titleMain>산호세 신규 취항 기념<br />
      산호세행 15% 할인 이벤트</C.titleMain>
      <C.ntg>2020. 10. 31. - 2022. 10. 31.</C.ntg>
      <C.wrap>
        <C.textBox>
          <EventContent
            image='event_img_10.png'
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
  titleMain: styled.h3`
    margin-top: 10px;
    font-size: 30px;
    font-weight: bold;
    line-height: 42px;
  `,
  ntg: styled.p`
    font-size: 16px;
    color: ${LIGHT_GRAY8};
    margin-top: 15px;
    padding-left: 5px;
    line-height: 1.8;
    position: relative;    
  `,
  wrap: styled.div`
    margin-top: 80px;
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
    width: 350px;
    margin: 60px auto 0;
    display: none;
  `,
}

export default eventPage;