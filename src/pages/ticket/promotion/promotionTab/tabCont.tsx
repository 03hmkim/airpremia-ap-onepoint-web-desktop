import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import {
  DARK_GRAY1,
  LIGHT_GRAY8,
  LIGHT_GRAY9,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';
import { NewPagination, Tag } from 'src/components';


function TabContent({currIdxCont}: IProps) {
  if ( currIdxCont === 0 ) {
    return (
      <C.wrap>
        <C.body>
          <S.ul>
            <S.li>
              <C.left>
                <a href="promotion/detail/promotion1">
                  <img src="/images/ticket/promotion/list/promotion_bg_01.png" />
                </a>
                <C.badge>
                  <Tag weight={400} backgroundColor={ORANGE2}>오늘마감</Tag>
                  <Tag weight={400} backgroundColor={LIGHT_GRAY9}>응모완료</Tag>
                </C.badge>
                <C.content>
                  <a href="promotion/detail/promotion1">
                    <C.itemText><C.bold>산호세 신규 취항 기념, 산호세행 15% 할인 이벤트</C.bold></C.itemText>
                  </a>
                  <C.description>2019. 7. 1. - 2019. 8. 1.</C.description>
                </C.content>                
              </C.left>
            </S.li>
            <S.li>
              <C.right>
                <a href="promotion/detail/promotion1">
                  <img src="/images/ticket/promotion/list/promotion_bg_02.png" />
                </a>
                <C.badge>
                  <Tag weight={400} backgroundColor={ORANGE2}>오늘마감</Tag>
                  <Tag weight={400} backgroundColor={LIGHT_GRAY9}>응모완료</Tag>
                </C.badge>
                <C.content>
                  <a href="ticket/promotion/detail/promotion1">
                    <C.itemText><C.bold>기내면세품 예약하고 무료 호치민 여행 떠나자!</C.bold></C.itemText>
                  </a>
                  <C.description>2019. 7. 1. - 2019. 8. 1.</C.description>
                </C.content>
              </C.right>
            </S.li>
            <S.li>
              <C.left>
                <a href="promotion/detail/promotion1">
                  <img src="/images/ticket/promotion/list/promotion_bg_03.png" />
                </a>
                <C.badge>
                  <Tag weight={400} backgroundColor={ORANGE2}>D-3</Tag>
                </C.badge>
                <C.content>
                  <a href="promotion/detail/promotion1">
                    <C.itemText><C.bold>퀴즈 맞추고 마일리지 받아가세요!</C.bold></C.itemText>
                  </a>
                  <C.description>2019. 7. 1. - 2019. 8. 1.</C.description>
                </C.content>
              </C.left>
            </S.li>
            <S.li>
              <C.right>
                <a href="promotion/detail/promotion1">
                  <img src="/images/ticket/promotion/list/promotion_bg_04.png" />
                </a>
                <C.badge>
                  <Tag weight={400} backgroundColor={ORANGE2}>D-9</Tag>
                </C.badge>
                <C.content>
                  <a href="promotion/detail/promotion1">
                    <C.itemText><C.bold>퀴즈 맞히고 함께 샌프란시스코로 떠나요 :-)</C.bold></C.itemText>
                  </a>
                  <C.description>2019. 7. 1. - 2019. 8. 1.</C.description>
                </C.content>
              </C.right>
            </S.li>
            <S.li>
              <C.left>
                  <a href="promotion/detail/promotion1">
                    <img src="/images/ticket/promotion/list/promotion_bg_05.png" />
                  </a>
                  <C.badge>
                    <Tag weight={400} backgroundColor={ORANGE2}>D-13</Tag>
                </C.badge>
                <C.content>
                  <a href="promotion/detail/promotion1">
                    <C.itemText><C.bold>퀴즈 맞히고 에어프레미아와 베트남으로 떠나요 :-)</C.bold></C.itemText>
                  </a>
                  <C.description>2019. 7. 1. - 2019. 8. 1.</C.description>
                </C.content>
              </C.left>
            </S.li>
            <S.li>
              <C.right>
                <a href="promotion/detail/promotion1">
                  <img src="/images/ticket/promotion/list/promotion_bg_06.png" />
                </a>
                <C.badge>
                    <Tag weight={400} backgroundColor={ORANGE2}>D-13</Tag>
                </C.badge>
                <C.content>
                  <a href="promotion/detail/promotion1">
                    <C.itemText><C.bold>에어프레미아와 친해지길 바래 퀴즈 이벤트</C.bold></C.itemText>
                  </a>
                  <C.description>2019. 7. 1. - 2019. 8. 1.</C.description>
                </C.content>
              </C.right>
            </S.li>
            <S.li>
              <C.left>
                <a href="promotion/detail/promotion1">
                  <img src="/images/ticket/promotion/list/promotion_bg_07.png" />
                </a>
                <C.badge>
                  <Tag weight={400} backgroundColor={ORANGE2}>D-19</Tag>
                </C.badge>
                <C.content>
                  <a href="promotion/detail/promotion1">
                    <C.itemText><C.bold>퀴즈 맞히고 함께 샌프란시스코로 떠나요 :-)</C.bold></C.itemText>
                  </a>
                  <C.description>2019. 7. 1. - 2019. 8. 1.</C.description>
                </C.content>
              </C.left>
            </S.li>
            <S.li>
              <C.right>
                <a href="promotion/detail/promotion1">
                  <img src="/images/ticket/promotion/list/promotion_bg_08.png" />
                </a>
                <C.badge>
                    <Tag weight={400} backgroundColor={ORANGE2}>D-22</Tag>
                </C.badge>
                <C.content>
                  <a href="promotion/detail/promotion1">
                    <C.itemText><C.bold>에어프레미아 취항 기념 항공권 할인</C.bold></C.itemText>
                  </a>
                  <C.description>2019. 7. 1. - 2019. 8. 1.</C.description>
                </C.content>
              </C.right>
            </S.li>
            <S.li>
              <C.left>                
                <a href="promotion/detail/promotion1">
                  <img src="/images/ticket/promotion/list/promotion_bg_09.png" />
                </a>
                <C.badge>
                  <Tag weight={400} backgroundColor={ORANGE2}>D-28</Tag>
                </C.badge>
                <C.content>
                  <a href="promotion/detail/promotion1">
                    <C.itemText><C.bold>퀴즈 맞히고 에어프레미아와 베트남으로 떠나요 :-)</C.bold></C.itemText>
                  </a>
                  <C.description>2019. 7. 1. - 2019. 8. 1.</C.description>
                </C.content>                
              </C.left>
            </S.li>
            <S.li>
              <C.right>
                <a href="promotion/detail/promotion1">
                  <img src="/images/ticket/promotion/list/promotion_bg_10.png" />
                </a>
                <C.badge>
                    <Tag weight={400} backgroundColor={ORANGE2}>D-32</Tag>
                </C.badge>
                <C.content>
                  <a href="promotion/detail/promotion1">
                    <C.itemText><C.bold>에어프레미아와 친해지길 바래 퀴즈 이벤트</C.bold></C.itemText>
                  </a>
                  <C.description>2019. 7. 1. - 2019. 8. 1.</C.description>
                </C.content>
              </C.right>
            </S.li>
          </S.ul>
          <NewPagination
            count={25}
            siblingCount={3}
            boundaryCount={1}
          />
        </C.body>
        <C.noneEvent>{/* 이벤트 준비중 = display: block & Cbody:display:none */}
          <C.bd>
            <C.description>이벤트를 준비 중입니다.</C.description>
          </C.bd>
          <C.igr></C.igr>
        </C.noneEvent>
      </C.wrap>
    )
  } else if ( currIdxCont === 1 ) {
    return (
      <C.wrap>
        <C.body>
          <S.ul>
            <S.li>
              <C.left>
                <a href="promotion/detail/promotion1">
                  <img src="/images/ticket/promotion/list/promotion_bg_05.png" />
                </a>
                <C.badge>
                  <Tag weight={400} backgroundColor={DARK_GRAY1}>당첨자 선정중</Tag>
                </C.badge>
                <C.content>
                  <a href="promotion/detail/promotion1">
                    <C.itemText><C.bold>퀴즈 맞히고 에어프레미아와 베트남으로 떠나요 :-)</C.bold></C.itemText>
                  </a>
                  <C.description>2019. 7. 1. - 2019. 8. 1.</C.description>
                </C.content>
              </C.left>
            </S.li>
            <S.li>
              <C.right>
                <a href="promotion/detail/promotion1">
                  <img src="/images/ticket/promotion/list/promotion_bg_06.png" />
                </a>
                <C.badge>
                  <Tag weight={400} backgroundColor={DARK_GRAY1}>당첨자 선정중</Tag>
                  <Tag weight={400} backgroundColor={LIGHT_GRAY9}>응모완료</Tag>
                </C.badge>
                <C.content>
                  <a href="promotion/detail/promotion1">
                    <C.itemText><C.bold>에어프레미아와 친해지길 바래 퀴즈 이벤트</C.bold></C.itemText>
                  </a>
                  <C.description>2019. 7. 1. - 2019. 8. 1.</C.description>
                </C.content>
              </C.right>
            </S.li>
            <S.li>
              <C.left>
                <a href="promotion/detail/promotion1">
                  <img src="/images/ticket/promotion/list/promotion_bg_07.png" />
                </a>
                <C.badge>
                  <Tag weight={400} backgroundColor={DARK_GRAY1}>종료</Tag>
                </C.badge>
                <C.content>
                  <a href="promotion/detail/promotion1">
                    <C.itemText><C.bold>퀴즈 맞히고 함께 샌프란시스코로 떠나요 :-)</C.bold></C.itemText>
                  </a>
                  <C.description>2019. 7. 1. - 2019. 8. 1.</C.description>
                </C.content>
              </C.left>
            </S.li>
            <S.li>
              <C.right>
                <a href="promotion/detail/promotion1">
                  <img src="/images/ticket/promotion/list/promotion_bg_08.png" />
                </a>
                <C.badge>
                  <Tag weight={400} backgroundColor={DARK_GRAY1}>종료</Tag>
                </C.badge>
                <C.content>
                  <a href="promotion/detail/promotion1">
                    <C.itemText><C.bold>에어프레미아 취항 기념 항공권 할인</C.bold></C.itemText>
                  </a>
                  <C.description>2019. 7. 1. - 2019. 8. 1.</C.description>
                </C.content>
              </C.right>
            </S.li>
            <S.li>
              <C.left>
                <a href="promotion/detail/promotion1">
                  <img src="/images/ticket/promotion/list/promotion_bg_10.png" />
                </a>
                <C.badge>
                  <Tag weight={400} backgroundColor={DARK_GRAY1}>종료</Tag>
                  <Tag weight={400} backgroundColor={LIGHT_GRAY9}>응모완료</Tag>
                </C.badge>
                <C.content>
                  <a href="promotion/detail/promotion1">
                    <C.itemText><C.bold>에어프레미아와 친해지길 바래 퀴즈 이벤트</C.bold></C.itemText>
                  </a>
                  <C.description>2019. 7. 1. - 2019. 8. 1.</C.description>
                </C.content>                
              </C.left>
            </S.li>
          </S.ul>
          <NewPagination
            count={25}
            siblingCount={3}
            boundaryCount={1}
          />
        </C.body>
        <C.noneEvent>{/* 종료된 이벤트 = display: block & Cbody:display:none */}
          <C.bd>
            <C.description>종료된 이벤트가 없습니다.</C.description>
          </C.bd>
          <C.igr></C.igr>
        </C.noneEvent>
      </C.wrap>
    )
  } else {
    return (
      <C.wrap>
        <C.body>
          <S.ul>
            <S.li>
              <C.left>
                <a href="promotion/detail/promotion1">
                  <img src="/images/ticket/promotion/list/promotion_bg_01.png" />
                </a>
                <C.badge>
                  <Tag weight={400} backgroundColor={ORANGE2}>오늘마감</Tag>
                  <Tag weight={400} backgroundColor={LIGHT_GRAY9}>응모완료</Tag>
                </C.badge>
                <C.content>
                  <a href="promotion/detail/promotion1">
                    <C.itemText><C.bold>산호세 신규 취항 기념, 산호세행 15% 할인 이벤트</C.bold></C.itemText>
                  </a>
                  <C.description>2019. 7. 1. - 2019. 8. 1.</C.description>
                </C.content>
              </C.left>
            </S.li>
            <S.li>
              <C.right>
                <a href="promotion/detail/promotion1">
                  <img src="/images/ticket/promotion/list/promotion_bg_02.png" />
                </a>
                <C.badge>
                    <Tag weight={400} backgroundColor={ORANGE2}>오늘마감</Tag>
                    <Tag weight={400} backgroundColor={LIGHT_GRAY9}>응모완료</Tag>
                </C.badge>
                <C.content>
                  <a href="promotion/detail/promotion1">
                    <C.itemText><C.bold>기내면세품 예약하고 무료 호치민 여행 떠나자!</C.bold></C.itemText>
                  </a>
                  <C.description>2019. 7. 1. - 2019. 8. 1.</C.description>
                </C.content>
              </C.right> 
            </S.li>
            <S.li>
              <C.left>
                <a href="promotion/detail/promotion1">
                  <img src="/images/ticket/promotion/list/promotion_bg_03.png" />
                </a>
                <C.badge>
                  <Tag weight={400} backgroundColor={DARK_GRAY1}>당첨자 선정중</Tag>
                  <Tag weight={400} backgroundColor={LIGHT_GRAY9}>응모완료</Tag>
                </C.badge>
                <C.content>
                  <a href="promotion/detail/promotion1">
                    <C.itemText><C.bold>에어프레미아와 친해지길 바래 퀴즈 이벤트</C.bold></C.itemText>
                  </a>
                  <C.description>2019. 7. 1. - 2019. 8. 1.</C.description>
                </C.content>
              </C.left>
            </S.li>
            <S.li>
              <C.right>
                <a href="promotion/detail/promotion1">
                  <img src="/images/ticket/promotion/list/promotion_bg_04.png" />
                </a>
                <C.badge>
                  <Tag weight={400} backgroundColor={DARK_GRAY1}>종료</Tag>
                  <Tag weight={400} backgroundColor={LIGHT_GRAY9}>응모완료</Tag>
                </C.badge>
                <C.content>
                  <a href="promotion/detail/promotion1">
                    <C.itemText><C.bold>에어프레미아와 친해지길 바래 퀴즈 이벤트</C.bold></C.itemText>
                  </a>
                  <C.description>2019. 7. 1. - 2019. 8. 1.</C.description>
                </C.content>
              </C.right>
            </S.li>
          </S.ul>
          <NewPagination
            count={25}
            siblingCount={3}
            boundaryCount={1}
          />
        </C.body>
        <C.noneEvent>{/* 응모한 이벤트 X = display: block & Cbody:display:none */}
          <C.bd>
            <C.description>응모한 이벤트가 없습니다.</C.description>
          </C.bd>
          <C.igr></C.igr>
        </C.noneEvent>
      </C.wrap>
    )
  }
}

const S = {
  ul: styled.ul`
    padding-bottom: 80px;
  `,
  li: styled.li`
    display: inline-block;
    padding-bottom: 40px;
    width: calc(50% - 15px);
    margin-right: 30px;
    vertical-align: top;

    &:nth-child(even){
      margin-right: 0;
    }

    @media only screen and (max-width: 767px) { 
      width: 100%;
      margin-right: 0;
    }
  `,
};

const C = {
  wrap: styled.div`
    margin-top: 60px;
  `,
  body: styled.div`
    margin-top: 140px;
    display:block;
    &:first-of-type{
      margin-top: 30px;
    }
  `,
  bd: styled.div`
    margin-top: 150px;
    text-align: center;
  `,
  content: styled.div`
    padding-top: 12px;
  `,
  badge: styled.div`
    display: flex;
    align-items: flex-end;
    padding-top:24px;

    > div{
      margin-right: 3px;
    }
  `,
  itemText: styled.p`
    font-size: 18px;
    line-height: 1.8em;
    display: inline-block;
    :hover{
      color:${ORANGE2};
    }
    @media only screen and (max-width: 767px) {
      font-size: 14px;
    }
  `,
  note: styled.p`
    font-size: 18px;
    color: ${DARK_GRAY1};
    font-weight: bold;
    display: flex;
    justify-align: center;
    @media only screen and (max-width: 767px) {
      font-size: 14px;
    }
  `,
  description: styled.p`
    font-size: 18px;
    color: ${LIGHT_GRAY8};
    margin-top: 10px;
    line-height: 1.8em;
    @media only screen and (max-width: 767px) {
      font-size: 14px;
    }
  `,
  bold: styled.span`
    font-weight: bold;
  `,
  igr: styled.div`
    margin-top: 80px;
  `,
  left: styled.div`
    img{
      width: 100%;
    }
  `,
  right: styled.div`
    img{
      width: 100%;
    }
  `,
  noneEvent: styled.div`
    display: none;
  `, 
}

export default TabContent;
