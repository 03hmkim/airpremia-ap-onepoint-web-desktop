import styled from 'styled-components';
import { Container } from 'src/styles/layout';
import { LIGHT_GRAY7 } from '@airpremia/cdk/styles/colors';
import GradeTab from './gradeTab/index';

function membersinfo(){
    return (
    <Container>
      <C.ComTitles>멤버십 안내</C.ComTitles>
      <C.igr>
          <GradeTab />
      </C.igr>
    </Container>
    )
}


const C = {
  ComTitles:styled.div`
  font-size:36px;
  font-weight: bold;
  `,
  content: styled.div`
    margin-top: 10px;
  `,
  lgray: styled.p`
    color: ${LIGHT_GRAY7};
  `,
  igr: styled.div`
    margin-top: 80px;
  `,
}


export default membersinfo;