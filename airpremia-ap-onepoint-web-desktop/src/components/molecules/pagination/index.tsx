import PagingButton from "src/components/atoms/pagingButton/index";
import styled from "styled-components";
import { ifProp } from 'styled-tools';
import ArrowPrev from 'public/images/btn_link_pre.svg';
import ArrowNext from 'public/images/btn_link_next.svg';


function Pagination() {

  const totalPosts = 100; // 총 글(list)의 갯수
  const postsPerPage = 10; // 한 페이지에 보여줄 글(list)의 갯수

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <P.container>
      <P.arrow>
        <ArrowPrev />
      </P.arrow>
      {pageNumbers.map(number => (
        <PagingButton>{number}</PagingButton>
      ))}
      <P.arrow>
        <ArrowNext />
      </P.arrow>
    </P.container>
  )
}

const P = {
  container : styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

  `,
  arrow : styled.button`
    width: 20px;
    height: 20px;
    cursor: ${ifProp('disabled', 'default', 'pointer')};
  `
}

export default Pagination;