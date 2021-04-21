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
import { Pagination,TaskButton } from 'src/components';
import IcoSearch from 'public/images/ico_input_search.png';

function noticeSearch(){
    return (
    <Container>
      <C.ComTitles>공지사항</C.ComTitles>
      
      <C.sbody>
        <C.ul>
          <C.li>
            <C.left>
              <C.itemTitle><C.emphasis>호치민</C.emphasis> 노선 운휴 안내 (1월 3일 부)</C.itemTitle>
              <C.description>공지사항 본문 내용을 최대 1줄까지 노출하며, 1줄 초과 시 말줄임 표시 ..</C.description>
            </C.left>
            <C.right>
              <C.description>2020. 05. 31.</C.description>
            </C.right>
          </C.li>
          <C.li>
            <C.left>
              <C.itemTitle>신규 취항지 안내:<C.emphasis>호치민</C.emphasis></C.itemTitle>
              <C.description>공지사항 본문 내용을 최대 1줄까지 노출하며, 1줄 초과 시 말줄임 표시 ..</C.description>
            </C.left>
            <C.right>
              <C.description>2020. 05. 31.</C.description>
            </C.right>
          </C.li>
        </C.ul>
        <C.ptb30>
          <Pagination />
        </C.ptb30>
        <C.mt30>
          <Sch.wrap>
            <input type="text" className="search" placeholder="검색어 입력"  value="호치민" />
            <TaskButton className="short">검색</TaskButton>
          </Sch.wrap>
        </C.mt30>
      </C.sbody>
    </Container>
    )
}


const C = {
  ComTitles:styled.div`
  font-size:36px;
  font-weight: bold;
  `,
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
    margin-top: 12px;
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
  width: 127px;
  margin-top: 40px;
  padding: 9px 14px;
  float: right;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${LIGHT_GRAY6};
  border-radius: 8px;
  `,
  ptb30: styled.div`
  padding:30px 0
  `,
  ul:styled.ul`
  `,
  li:styled.li`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  cursor: pointer;
  padding-bottom: 30px;
  border-bottom: 1px solid rgb(242, 242, 242);
  `,
  left:styled.div``,
  right:styled.div`
  &::after{
    content:"";
    clear:both;
    display:block;
  }
  `,
  emphasis:styled.span`
  color: ${ORANGE1};
  `
}

const Sch = {
  wrap: styled.div`
    display: flex;
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

export default noticeSearch;