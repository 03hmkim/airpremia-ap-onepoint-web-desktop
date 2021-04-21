import styled from 'styled-components';
import {
    LIGHT_BLUE1,
    BLUE1,
    ORANGE2,
    RED1
} from '@airpremia/cdk/styles/colors';
import { Horizon,  } from 'src/components';

function testPage(){

  return (
    <TestPub>
      <S.container>
        <div className="top">top</div>
        <Horizon
          top={40}
          bottom={40}
          color={BLUE1}
          width={1}
        />
        <h2>title</h2>
        <p className="font-bold">글자test</p>
      </S.container>
      <S.font>
        테스트중입니다.
      </S.font>
    </TestPub>
  )  
};

const TestPub = styled.div`
  padding: 200px 0;
`;

const S = {
  container : styled.div`
    width: 800px;
    height: 400px;
    margin: 30px auto;
    color: ${ORANGE2};
    .top{
      color: blue;
      &:hover{
          color: green;
      }
      cursor: pointer;
    }
    text-align: center;
    background: ${LIGHT_BLUE1};
  `,
  font : styled.p`
    color: ${RED1};
    text-align: center;
  `,
};

export default testPage;