import { useEffect, useMemo } from 'react';
import { flow, find, get } from 'lodash/fp';
import styled from 'styled-components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY7,
  LIGHT_GRAY8,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
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
      <C.ComTitles>{getTitle}</C.ComTitles>
      <C.content>
        <C.lgray>{moment(getCreatedDate).format('YYYY. MM. DD')}</C.lgray>  
      </C.content>
      <C.wrap>
        <C.selectBox>
          {/* <BgDog /> */}
        </C.selectBox>
      </C.wrap>

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
    </Container>
  )
}


const C = {
  ComTitles:styled.div`
  font-size:36px;
  font-weight: bold;
  `,
  wrap: styled.div`
    margin-top: 100px;
    border-top: 2px solid ${DARK_GRAY1};
  `,
  body: styled.div`
    margin-top: 140px;
    &:first-of-type{
      margin-top: 30px;
    }
  `,
  sbody: styled.div`
    margin-top: 100px;
  `,
  titleMain: styled.h3`
    font-size: 30px;
    font-weight: bold;
  `,
  title: styled.h4`
    font-size: 22px;
    font-weight: bold;
  `,
  itemTitle: styled.h5`
    margin-top: 20px;
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
  content: styled.div`
    margin-top: 15px;
  `,
  sb: styled.div`
    margin-top: 60px;
  `,
  mt30:styled.div`
  margin-top: 30px;
  `,
  flex:styled.div`
  display: flex;
  align-items: flex-end;
  `,

  p: styled.p`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 1.8;
    &:first-child{
      margin-top: 20px;
    }
    &:last-child{
      margin-bottom: 0px;
    }
  `,

  itemText: styled.p`
  font-size: 15px;
  line-height: 1.8;
  padding-top: 20px;
`,
  note: styled.p`
    font-size: 15px;
    color: ${DARK_GRAY1};
    font-weight: bold;
    display: flex;
    justify-align: center;
    
  `,
  description: styled.p`
  font-size: 14px;
  color: ${LIGHT_GRAY8};
  margin-top: 20px;
  line-height: 1.8;
`,
bold: styled.span`
font-weight: bold;
`,
  image: styled.p`
    margin-right: 5px;
  `,
  tmi: styled.p`
    margin-top: 30px;
  `,
  center: styled.p`
    text-align: center;
  `,
  ntg: styled.p`
    font-size: 14px;
    color: ${LIGHT_GRAY8};
    margin-top: 15px;
    padding-left: 10px;
    line-height: 1.8;
    position: relative;
    &::before{
      content:"-";
      width: 5px;
      height: 20px;
      top: 0px;
      left: 0px;
      color: ${LIGHT_GRAY8};
      display: block;
      position: absolute;
    }
  `,
  lgray: styled.p`
  margin-top: 15px;
  font-size:16px;
  line-height:1.8;
  color: ${LIGHT_GRAY7};
`,
  darkGray: styled.p`
    margin-top: 10px;
    font-size:16px;
    line-height:1.8;
    color: ${DARK_GRAY1};
  `,
  igr: styled.div`
    margin-top: 80px;
  `,
  desc: styled.p`
    margin-left: 50px;
    line-height: 1.8;
    display: inline-block;
    vertical-align: middle;
  `,
  img: styled.p`
    margin-left: 10px;
    display: inline-block;
    vertical-align: middle;
  `,
  linkhelp: styled.a`
    text-decoration-line: none;
    border: 0px;
  `,
  helpl: styled.p`
    width: 100%;
    padding: 25px 0px;
    border-bottom: 1px solid ${LIGHT_GRAY5};
    
    &.dpN{
      display: none;
    }
  `,
  selectBox: styled.div`
  margin-top: 40px;
  `,
  ptb30: styled.div`
  padding:30px 0
  `,
  ul:styled.ul`
  `,
  li:styled.li`
  margin-top: 42px;
  `,
  left:styled.div``,
  right:styled.div`
  &::after{
    content:"";
    clear:both;
    display:block;
  }
  
  `,
}


export default noticeContent;