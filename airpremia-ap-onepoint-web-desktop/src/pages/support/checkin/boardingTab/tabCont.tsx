import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import {
  LIGHT_GRAY8,
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';

function TabContent({currIdxCont}: IProps) {
  if ( currIdxCont === 0 ) {
    return (
      <S.container>
        <C.sb>
          <C.sub>외화반출</C.sub>
          <C.p>해외여행자는 미화(US$) 1만 달러를 초과하는 해외여행경비를 휴대반출 시 관할세관의 장에게 신고해야합니다.</C.p>
          <C.p>[⌜외국환거래규정⌟(기획재정부고시 제2019-20호, 2019. 10. 8. 발령·시행) 제6-2조제2항제1호].</C.p>
          <C.tmi>
          <C.sub>귀중품 및 고가품 반출</C.sub>
          <C.p>출국 시 휴대하여 반출하였다가 입국 시 재반입할 귀중품 및 고가의 물품을 소지하고 출국하는 해외여행자는 세관에 휴대물품의 반출신고를 해야합니다.</C.p>
          <C.p>[⌜여행자 및 승무원 휴대품 통관에 관한 고시⌟(관세청고시 제2019-20호, 2019. 5. 22. 발령·시행) 제53조제1호].</C.p>
          </C.tmi>
          <C.tmi>
          <C.p>위에 따른 휴대물품을 반출하는 해외여행자는 관세청 홈페이지를 통해 사전신고하거나 출국 시 신고하여 휴대물품반출신고(확인)서를 발급받아야 입국 시에 해당 물품에 대한</C.p>
          <C.p> 관세를 면제받을 수 있습니다.[⌜여행자 및 승무원 휴대품 통관에 관한 고시⌟ 제54조제1항 및 별지 제8호서식].</C.p>
          </C.tmi>
          <C.rf>※ 해외여행자의 출국 시 세관신고에 관한 보다 자세한 내용은 관세청 홈페이지 또는 관세청 종합상담센터(1577-8577)에서 확인하실 수 있습니다.</C.rf>
        </C.sb>
      </S.container>
    )
  } else if ( currIdxCont === 1 ) {
    return (
      <S.container>
          <C.sb>
            <C.sub>병무신고</C.sub>
            <C.p>다음의 병역의무자가 해외여행을 하려는 경우 지방병무청장의 해외여행허가를 받고 출국 당일 법무부 출입국에서 출국심사 시 국외여행 허가서(전자문서로 된 신청서 포함)를 제출해야 합니다.</C.p>
            <C.p>⌜병역법⌟ 제70조제1항, ⌜출입국관리법 시행령⌟ 제1조제6항 본문, ⌜병역법 시행규칙⌟ 제108조제3항, 별지 제134호서식 및 ⌜병역의무자 국외여행 업무처리 규정⌟</C.p>
            <C.p>(병무청훈련 제1598호, 2019. 12. 11. 발령·시행) 제4조].</C.p>
            <C.tmi>
              <C.ul>
                <C.li>25세 이상인 병역준비역</C.li>
                <C.li>25세 이상인 보충역으로서 소집되지 않은 사람</C.li>
                <C.li>승선근무예비역으로 복무 중인 사람</C.li>
                <C.li>사회복무요원, 예술·체육요원, 전문연구요원, 산업기능요원, 공중보건의사, 병역판정검사전담의사, 공익법무관 또는 공중방역수의사로 복무 중인 사람</C.li>
              </C.ul>
            </C.tmi>
          </C.sb>
      </S.container>
    )
  } else {
    return (
      <S.container>
          <C.sb>
            <C.sub>여행자 검역</C.sub>
            <C.p>해외여행자는 검역소에서 황열 및 콜레라 등 검역대상 감염병의 예방접종과 그에 따른 국제공인 예방접종증명서를 발급받을 수 있습니다.</C.p>
            <C.p>(⌜검역법⌟ 제28조제3항, ⌜검역법 시행규칙⌟ 제23조제2항 본문 및 별지 제31호서식).</C.p>
            <C.rf>※ 여행하실 국가에 따라 검역증명서를 요구하는 경우가 있으므로 미리 확인하시기 바라며 자세한 사항은 질병관리청 국립검역소 홈페이지를 참고해 주시기 바랍니다.</C.rf>
          </C.sb>
      </S.container>
      )
  }
}


const S = {
  container: styled.div``,

};

const C = {
sb: styled.div`
  margin-top: 60px;
`,
sub: styled.h5`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`,
p: styled.p`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 1.8;
  &:first-child{
    margin-top: 20px;
  }
  &:last-child{
    margin-bottom: 0px;
  }
`,
tmi: styled.p`
  margin-top: 30px;
`,
rf: styled.p`
  font-size: 14px;
  color: ${LIGHT_GRAY8};
  margin-top: 20px;
`,
ul: styled.ul`
      
`,
li: styled.li`
  margin-bottom: 15px;
  padding-left: 10px;
  line-height: 1.8;
  position: relative;
  &::before{
    content:"";
    width: 4px;
    height: 4px;
    top: 11px;
    left: 0px;
    text-indent: -9999px;
    display: block;
    position: absolute;
    background-color: ${DARK_GRAY1};
    border-radius: 50%
  }
  &:first-child{
    margin-top: 20px;
  }
`,
};

export default TabContent;
