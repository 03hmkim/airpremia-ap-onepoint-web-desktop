import styled from 'styled-components';
import { Container } from 'src/styles/layout';
import { 
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';
import GradeTab from './gradeTab/index';
import { 
  ComTitle,
  MembersWhy,
} from 'src/components';

function membersinfo(){
  return (
    <Container>
      <ComTitle
        title="멤버십 안내"
      />
      <C.igr>
          <GradeTab />
      </C.igr>
      <MembersWhy />
    </Container>
  )
}


const C = {
  lgray: styled.p`
    color: ${LIGHT_GRAY7};
  `,
  igr: styled.div`
    margin-top: 80px;
  `,  
}


export default membersinfo;