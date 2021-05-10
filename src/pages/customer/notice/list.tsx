import { useEffect, ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY6,
  LIGHT_GRAY7,
  LIGHT_GRAY8,
  BLUE1,
  ORANGE1,
} from '@airpremia/cdk/styles/colors';
import { reverse, flow, drop, take } from 'lodash/fp';
import { NewPagination, TaskButton, Triangle } from 'src/components';
import IcoSearch from 'public/images/ico_input_search.png';
// import IcoBadgeNew from 'public/images/ico_badge_new.svg';
// import Link from 'next/link';
import { useNotice, useScroll } from '@airpremia/core/hooks';
import { NoticeListTemplate } from 'src/components';
import moment from 'moment';

function notice(){
  const {
    noticeStore,
    onGetNotices
  } = useNotice();
  const { upScroll } = useScroll();

  const { notices } = noticeStore;

  const [currPage, setCurrPage] = useState(1);

  useEffect (() => {
    onGetNotices()
  }, [])

  const handleChange = (e: ChangeEvent<unknown>, value: number) => {
    console.log(e.target);
    setCurrPage(value);
    upScroll();
  };
  
  const contentsPerPage = 5;

  const noticesPerPage = flow(
    drop((currPage-1)*contentsPerPage),
    take(contentsPerPage)
  )(reverse(notices))

  return (
  <Container>
    <C.ComTitles>공지사항</C.ComTitles>
    <C.right>
      <C.selectBox>카테고리 선택 <Triangle /></C.selectBox>
    </C.right>
    
    <C.mt100>
      {noticesPerPage.map ((notice: any, i) => {
        return (
          <C.wrapper key={i.toString()}>
            <NoticeListTemplate
              title={notice.title}
              description={notice.description}
              createdDate={moment(notice.createdAt).format('YYYY-MM-DD')}
              noticeId={notice.id}
            />
          </C.wrapper>
        )
      })}
      <C.ptb30>
        <NewPagination
          count={Math.ceil(notices.length/contentsPerPage)}
          siblingCount={3}
          boundaryCount={1}
          page={currPage}
          onChange={handleChange}
        />
      </C.ptb30>
      <C.mt30>
        <Sch.wrap>
          <input type="text" className="search" placeholder="검색어 입력" />
          <TaskButton className="short">검색</TaskButton>
        </Sch.wrap>
      </C.mt30>
    </C.mt100>
  </Container>
  )
}


const C = {
  ComTitles:styled.div`
  font-size:36px;
  font-weight: bold;
  `,
  wrapper: styled.div``,
  wrap: styled.div`
    margin-top: 70px;
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
    margin-top: 12px;
  `,
  sb: styled.div`
    margin-top: 60px;
  `,
  mt30:styled.div`
    margin-top: 30px;
  `,
  mt100:styled.div`
    margin-top: 100px;
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
    margin-top: 10px;
    font-size: 14px;
    color: ${LIGHT_GRAY8};
    line-height: 1.8;

    &.date{
      margin-top: 0;
    }
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
    color: ${LIGHT_GRAY7};
  `,
  igr: styled.div`
    width: 50%;
    margin-top: 80px;
    display: inline-block;
  `,
  desc: styled.p`
    margin-left: 50px;
    line-height: 1.8;
    display: inline-block;
    vertical-align: middle;
  `,
  img: styled.p`
    margin-left: 10px;
    display: inherit;
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
    width: 127px;
    margin-top: 40px;
    padding: 9px 14px;
    float: right;
    display: flex;
    display: none;
    justify-content: space-between;
    border: 1px solid ${LIGHT_GRAY6};
    border-radius: 8px;
  `,
  ptb30: styled.div`
    padding:30px 0;
    // display: none;
  `,
  ul:styled.ul`
  `,
  li:styled.li`
    padding: 30px 0;
    border-bottom: 1px solid ${LIGHT_GRAY5};

    a{
      display: flex;
      justify-content: space-between;
      cursor: pointer;
    }

    &:hover{
      h5 {
        color: ${ORANGE1};
      }
    }
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

const Sch = {
  wrap: styled.div`
    display: flex;
    display: none;
    justify-content: center;
    aling-content: space-between;
    .search{
      width: 280px;
      margin-right: 10px;
      height: 56px;
      padding-left: 54px;
      font-size: 15px;
      background: url(${IcoSearch}) 20px center no-repeat;
      border: 1px solid ${DARK_GRAY1};
      border-radius: 8px;
      box-sizing: border-box;
    }

    button.short{
      width: 100px;  
      height: 56px;
    }
  `
}

export default notice;