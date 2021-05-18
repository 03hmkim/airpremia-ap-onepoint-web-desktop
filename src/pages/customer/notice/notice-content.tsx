import { useEffect, useMemo } from 'react';
import { flow, find, get } from 'lodash/fp';
import styled from 'styled-components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';
import {
  ComTitle,
} from 'src/components';
import { useRouter } from 'next/router';
import { useNotice, useScroll } from '@airpremia/core/hooks';
// import BgDog from 'public/images/bg_right.svg';
import moment from 'moment';

function noticeContent(){
  const router = useRouter();
  const {
    noticeStore,
    onGetNotices,
    onGetNoticeContents,
  } = useNotice();
  const { upScroll } = useScroll();

  const { notices, noticeContent } = noticeStore;

  const {
    noticeId
  } = router.query

  useEffect (() => {
    upScroll();
    onGetNotices();
    onGetNoticeContents(String(noticeId));
  }, [])

  const getNotice = useMemo(() => {
    return flow(
      find(['id', noticeId])
    )(notices);
  }, [notices])

  const getTitle = flow(
    get('title')
  )(getNotice)

  const getCreatedDate = flow(
    get('createdAt')
  )(getNotice)

  return (
    <Container>
      <ComTitle
        title= {getTitle}
        description= {moment(getCreatedDate).format('YYYY. MM. DD')}
        desColor= "gray"
      />
      <C.wrap>
        <C.body>
          {/* <C.selectBox>
            <BgDog />
          </C.selectBox> */}
          <C.igr>
            <C.ul>
              {noticeContent.map ((content: any, i) => {
                return (
                  <C.li key={i.toString()}>
                    <C.itemTitle>{content.title}</C.itemTitle>
                    <C.darkGray>
                      {content.content.split('\n').map( (line: any) => {
                        return (<span>{line}<br/></span>)
                      })}
                    </C.darkGray>
                  </C.li>
                )
              })}
                {/* // <C.li>
                //     <C.itemTitle>1. 단두종 동물 수하물 위탁 운송</C.itemTitle>
                //     <C.darkGray>
                //       해부학적 구조로 인해 항공 여행 중 호흡 곤란, 폐사 위험이 있는 단두종 동물은 위탁 수하물로 접수 불가합니다.<br />
                //       기내 반입 조건을 충족하는 경우에 한하여 기내 운송이 가능합니다.
                //     </C.darkGray>
                // </C.li>
                // <C.li>
                //   <C.itemTitle>2. 반려동물 위탁 운송 시 최소 연령 기준 변경</C.itemTitle>
                //   <C.darkGray>
                //       위탁 운송 시 외부 환경 변화 및 주인과의 분리가 반려 동물에게 미치는 점을 감안하여,<br />
                //       안전한 운송을 위해 위탁 운송 취소 연령 기준을 신체 안정기로 접어드는 시점으로 상향 하였습니다.
                //   </C.darkGray>
                // </C.li>
                // <C.li>
                //   <C.itemTitle>시행일 : 2019년 4월 11일 부 (출발일 기준)</C.itemTitle>
                //   <C.darkGray>단, 시행일 이전 사전 운송 승인을 득한 경우, 시행일과 관계없이 운송 가능합니다.</C.darkGray>
                // </C.li> */}
            </C.ul>
          </C.igr>
        </C.body>
      </C.wrap>
    </Container>
  )
}


const C = {
  wrap: styled.div`
  `,
  body: styled.div`
    border-top: 2px solid ${DARK_GRAY1};
    padding-top: 30px;
    @media only screen and (max-width: 767px){
      padding-top: 20px;
    }
  `,
  itemTitle: styled.h5`
    font-size: 24px;
    line-height: 1.8em;
    font-weight: 700;
    @media only screen and (max-width: 767px){
      font-size: 22px;
      letter-spacing: -0.4px;
    }
  `,
  darkGray: styled.p`
    margin-top: 30px;
    font-size: 18px;
    line-height: 1.8em;
    color: ${DARK_GRAY1};
    @media only screen and (max-width: 767px){
      margin-top: 20px;
      font-size: 14px;
      letter-spacing: -0.28px;
    }
  `,
  igr: styled.div`
  `,
  ul:styled.ul`
  `,
  li:styled.li`
    margin-top: 100px;
    &:first-child{
      margin-top: 0;
    }
    @media only screen and (max-width: 767px){
      margin-top: 60px;
    }
  `,
}


export default noticeContent;