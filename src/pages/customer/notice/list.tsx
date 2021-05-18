import { useEffect, ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { Container } from 'src/styles/layout';
import {
  LIGHT_GRAY6,
} from '@airpremia/cdk/styles/colors';
import { reverse, flow, drop, take } from 'lodash/fp';
import { 
  NewPagination, 
  // TaskButton, 
  // Triangle 
} from 'src/components';
// import IcoSearch from 'public/images/ico_input_search.png';
// import IcoBadgeNew from 'public/images/ico_badge_new.svg';
// import Link from 'next/link';
import { useNotice, useScroll } from '@airpremia/core/hooks';
import { 
  NoticeListTemplate,
  ComTitle,
} from 'src/components';
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
    <ComTitle
        title="공지사항"
      />
    {/* <C.right>
      <C.selectBox>카테고리 선택 <Triangle /></C.selectBox>
    </C.right> */}
    
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
      {/* <C.mt30>
        <Sch.wrap>
          <input type="text" className="search" placeholder="검색어 입력" />
          <TaskButton className="short">검색</TaskButton>
        </Sch.wrap>
      </C.mt30> */}
    </C.mt100>
  </Container>
  )
}


const C = {
  wrapper: styled.div`
  `,
  wrap: styled.div`
  `,
  mt30:styled.div`
    margin-top: 30px;
    @media only screen and (max-width: 767px){
      margin-top: 20px;
    }
  `,
  mt100:styled.div`
    margin-top: 100px;
    @media only screen and (max-width: 767px){
      margin-top: 60px;
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
  left:styled.div``,
  right:styled.div`
  &::after{
    content:"";
    clear:both;
    display:block;
  }
  `,
}

// const Sch = {
//   wrap: styled.div`
//     display: flex;
//     display: none;
//     justify-content: center;
//     aling-content: space-between;
//     .search{
//       width: 280px;
//       margin-right: 10px;
//       height: 56px;
//       padding-left: 54px;
//       font-size: 18px;
//       background: url(${IcoSearch}) 20px center no-repeat;
//       border: 1px solid ${DARK_GRAY1};
//       border-radius: 8px;
//       box-sizing: border-box;
//     }

//     button.short{
//       width: 100px;  
//       height: 56px;
//     }
//   `
// }

export default notice;