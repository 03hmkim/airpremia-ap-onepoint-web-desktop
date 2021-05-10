import styled from 'styled-components';
import { Container } from 'src/styles/layout';
import { LIGHT_GRAY7 } from '@airpremia/cdk/styles/colors';
import PointTab from './pointTab/index';
import { 
  ComTitle,
} from 'src/components';

function point(){
    return (
    <Container>
      <ComTitle
        title="포인트 적립 안내"
      />
      <C.igr>
          <PointTab />
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


export default point;