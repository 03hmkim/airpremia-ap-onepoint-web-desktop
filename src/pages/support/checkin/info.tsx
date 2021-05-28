import styled from 'styled-components';
import {
  ComTitle,
} from 'src/components';
import { Container } from 'src/styles/layout';
import CheckinTab from './checkinTab';
import { SupportStyle } from 'src/styles/common';

function Checkin(){
  return (
    <Container>
      <ComTitle
        title="탑승 수속"
      />
      <S.container>
        <C.wrap>
          <C.body>
            <C.titleMain>탑승수속 안내</C.titleMain>
            <CheckinTab />
          </C.body>
        </C.wrap>
      </S.container>
    </Container>
  );
}

const S = {
  container: styled.div``,
}

const C = {
  ...SupportStyle.C1,
}
export default Checkin;
