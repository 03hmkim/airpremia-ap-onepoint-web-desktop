import styled from 'styled-components';
import { NewPagination } from 'src/components';

function testPaging() {

  return (
    <TestPub>
      <p>페이징 화면입니다.</p>

      <NewPagination
        count={25}
        siblingCount={3}
        boundaryCount={1}
      />

    </TestPub>
  )  
};

const TestPub = styled.div`
  padding: 200px 0;
  p {
    margin-bottom: 100px;
    font-size: 30px;
    text-align: center;
  }
`;


export default testPaging;