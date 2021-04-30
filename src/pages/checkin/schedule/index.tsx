import styled from 'styled-components';
import { Container } from 'src/styles/layout';
import IntoCheckInTab from './intoCheckInTab/index';
import { 
  ComTitle,
} from 'src/components';

function flightSchedule(){
  return (
    <Container>
      <ComTitle
        title="운항스케줄"
      />
      <C.igr>
        <IntoCheckInTab />
      </C.igr>
    </Container>
  );
}


const C = {
  igr: styled.div`
    margin-top: 80px;

    @media only screen and (max-width: 767px) { 
      margin-top: 40px;
    }
  `,
}


export default flightSchedule;
