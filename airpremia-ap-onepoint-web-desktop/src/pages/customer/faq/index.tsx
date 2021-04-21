import styled from 'styled-components';
import {
  ComTitle,
  TaskButton,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';
import CategoryTab from './categoryTab';
import IcoSearch from 'public/images/ico_input_search.png'


function FaqList(){
  return (
    <Container>
      <ComTitle
        title="자주 묻는 질문"
      />
      <C.wrap>
        <Sch.wrap>
          <input type="text" className="search" placeholder="검색어 입력" />
          <TaskButton className="short">검색</TaskButton>
        </Sch.wrap>
        <CategoryTab />
      </C.wrap>
    </Container>
  );
}

const C = {
  wrap: styled.div`
    margin-top: 70px;
  `,
  sb: styled.div`
    margin-top: 60px;
  `,
}

const Sch = {
  wrap: styled.div`
    display: flex;
    justify-content: center;
    aling-content: space-between;
    display: none;

    .search{
      width: calc(100% - 150px);
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
      height: 56px;
    }
  `
}

export default FaqList;
