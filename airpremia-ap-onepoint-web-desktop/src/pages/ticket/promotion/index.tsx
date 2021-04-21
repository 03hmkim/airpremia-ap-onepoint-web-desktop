import styled from 'styled-components';
import { Container } from 'src/styles/layout';
import {
  ComTitle,
} from 'src/components';
import PromotionTab from './promotionTab/index';

function promotionList(){
    return (
    <Container>
      <ComTitle
        title="이벤트"
        description="에어프레미아 이벤트와 함께 특별한 여정을 시작해보세요 :-)"
        desColor="gray"
      />
      <C.igr>
        <PromotionTab />
      </C.igr>
    </Container>
    )
}


const C = {
  igr: styled.div`
    margin-top: 80px;
  `,
}


export default promotionList;