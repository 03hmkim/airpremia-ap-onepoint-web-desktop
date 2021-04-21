import styled from 'styled-components';
import { Container } from 'src/styles/layout';
import {
  LIGHT_GRAY8
} from '@airpremia/cdk/styles/colors';

function noticeNone(){
    return (
    <Container>
      <C.ComTitles>공지사항</C.ComTitles>
      <C.body>
          <C.description>공지사항이 없습니다.</C.description>
      </C.body>
      <C.body></C.body>
    </Container>
    )
}

const C = {
  ComTitles:styled.div`
  font-size:36px;
  font-weight: bold;
  `,
  body: styled.div`
    margin-top: 140px;
    &:first-of-type{
      margin-top: 30px;
    }
  `,
  description: styled.p`
  margin-top: 20px;
  color: ${LIGHT_GRAY8};
  font-size: 14px;
  line-height: 1.8;
  text-align: center;
`,
}

export default noticeNone;