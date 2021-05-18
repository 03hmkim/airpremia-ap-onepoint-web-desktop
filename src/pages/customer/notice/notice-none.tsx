import styled from 'styled-components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1
} from '@airpremia/cdk/styles/colors';
import {
  ComTitle,
} from 'src/components';

function noticeNone(){
    return (
    <Container>
      <ComTitle
        title= "공지사항"
      />
      <C.body>
        <C.description>공지사항이 없습니다.</C.description>
      </C.body>
      <C.body></C.body>
    </Container>
    )
}

const C = {
  body: styled.div`
    border-top: 2px solid ${DARK_GRAY1};
    padding-top: 30px;
    @media only screen and (max-width: 767px){
      padding-top: 20px;
    }
  `,
  description: styled.p`
    margin-top: 30px;
    font-size: 18px;
    line-height: 1.8em;
    color: ${DARK_GRAY1};
    @media only screen and (max-width: 767px){
      margin-top: 20px;
      font-size: 14px;
      letter-spacing: -0.28px;
    }
`,
}

export default noticeNone;