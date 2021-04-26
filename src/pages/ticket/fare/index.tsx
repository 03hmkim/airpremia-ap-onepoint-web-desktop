import styled from 'styled-components';
import { Container } from 'src/styles/layout';
import FareInformationTab from './fareInformationTab/index';
import {
  ComTitle,
} from 'src/components';

function fareInfomation(){
    return (
    <Container>
      <ComTitle
        title="운임안내"
      />
      <C.igr>
        <FareInformationTab />
      </C.igr>
    </Container>
    )
}

const C = {
  igr: styled.div`
  `,
}

export default fareInfomation;