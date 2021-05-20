import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import {
  DARK_GRAY1,
  BLUE1,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';
import { ListGlobal } from 'src/components';
import Link from 'next/link'

function TabContent({currIdxCont}: IProps) {
  if ( currIdxCont === 0 ) {
    return (
      <C.wrap className="bdN">
        <C.body>
          <C.titleMain>외화반출</C.titleMain>
          <C.content>
            <ListGlobal level="fst" body={
              <p>
                해외여행자는 미화(US$) 1만달러를 초과하는 해외여행경비를 휴대반출 시 관할 세관의 장에게 신고해야 합니다.<br></br>
                [「외국환거래규정」(기획재정부고시 제2020-21호, 2020. 8. 4.발령·시행) 제6-2조(신고 등) ].
              </p>
            }/>
          </C.content>
        </C.body>
        <C.body>
          <C.titleMain>귀중품 및 고가품 반출</C.titleMain>
          <C.content>
            <ListGlobal level="fst" body={
              <p>
                출국 시 휴대하여 반출하였다가 입국 시 재반입할 귀중품 및 고가의 물품을 소지하고 출국하는 해외여행자는 세관에 휴대물품의 반출신고를 해야 합니다.<br></br>
                [「여행자 및 승무원 휴대품 통관에 관한 고시」(관세청고시 제2019-20호, 2019. 5. 22. 발령·시행) 제53조 제1호 ].
              </p>
            }/>
            <ListGlobal level="fst" body={
              <p>
                위에 따른 휴대물품을 반출하는 해외여행자는 관세청 홈페이지를 통해 사전 신고하거나 출국시 신고하여 휴대물품반출신고(확인)서를 발급받아야 입국 시에 해당 물품에 대한 관세를 면제받을 수 있습니다.<br></br>
                [「여행자 및 승무원 휴대품 통관에 관한 고시」제54조 제1항 및 별지 제8호서식 ].
              </p>
            }/>
            <C.marginleft2>
              <C.orange>
                ※ 해외여행자의 출국 시 세관신고에 관한 보다 자세한 사항은&nbsp;
                <C.linkm>
                  <Link href="https://www.customs.go.kr/kcs/main.do">
                    <a>&lt;관세청 홈페이지&gt;</a>
                  </Link>
                </C.linkm>
                &nbsp;또는 관세청종합상담센터(☎국번없이 1577-8577)에서 확인하실 수 있습니다.
              </C.orange>
            </C.marginleft2>
          </C.content>
        </C.body>
      </C.wrap>
    )
  } else if( currIdxCont === 1 ){
    return (
      <C.wrap className="bdN">
        <C.body>
          <C.content>
            <ListGlobal level="fst" body={
              <p>
                다음의 병역의무자가 해외여행을 하려는 경우 지방병무청장의 해외여행 허가를 받고 출국 당일 법무부 출입국에서 출국 심사 시 국외여행 허가서 (전자문서로 된 신청서 포함)를 제출해야 합니다.<br></br>
                [「병역법」제70조제1항, 「출입국관리법 시행령」제1조 제6항 본문,「병역법 시행규칙」제108조제3항, 별지 제134호서식 및 「병역의무자 국외여행 업무처리 규정」(병무청훈령 제1598호, 2019. 12. 11. 발령·시행) 제4조 ].
              </p>
            }/>
            <ListGlobal level="scd" body={
              <p>25세 이상인 병역준비역</p>
            }/>
            <ListGlobal level="scd" body={
              <p>25세 이상인 보충역으로서 소집되지 않은 사람</p>
            }/>
            <ListGlobal level="scd" body={
              <p>승선근무예비역으로 복무 중인 사람</p>
            }/>
            <ListGlobal level="scd" body={
              <p>사회복무요원, 예술·체육요원, 전문연구요원, 산업기능요원, 공중보건의사, 병역판정검사전담의사, 공익법무관 또는 공중방역수의사로 복무 중인 사람</p>
            }/>
            <C.marginleft>
              <C.orange>
                ※ 병역의무자인 해외여행자의 국외여행허가 신청방법은 이 콘텐츠 
                <C.linkm>
                  <Link href="http://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=894&ccfNo=2&cciNo=4&cnpClsNo=1">
                    <a>&lt;해외여행 준비하기 - 그 밖의 준비사항 - 병무사항 확인&gt;</a>
                  </Link>
                </C.linkm> 
                &nbsp;부분에서 확인하실 수 있습니다.
              </C.orange>
            </C.marginleft>
          </C.content>
        </C.body>
      </C.wrap>
    )
  }
  else{
    return (
      <C.wrap className="bdN">
        <C.body>
          <C.content>
            <ListGlobal level="fst" body={
              <p>
                해외여행자는 검역소에서 황열 및 콜레라 등 검역대상 감염병의 예방접종과 그에 따른 국제공인 예방접종증명서를 발급받을 수 있습니다.<br></br>
                [「「검역법」제28조제3항,「검역법 시행규칙」제23조제2항 본문 및 별지 제31호서식 ].
              </p>
            }/>
            <C.marginleft2>
              <C.orange>※ 여행하실 국가에 따라 검역증명서를 요구하는 경우가 있으므로 미리 확인하시기 바랍니다.</C.orange>
            </C.marginleft2>
            <ListGlobal level="fst" body={
              <p>예방접종을 받으러 갈 때에는 여권(또는 여권사본)과 다음의 예방접종비용 및 증명서 교부 수수료를 준비합니다.</p>
            }/>
            <C.marginleft2>
              <C.orange>
                ※ 황열백신은 국가(질병관리본부)에서 제공하므로 백신비용은 병원에 납부하는 것이 아니라 수입인지를 구매하여야 합니다. 이외의 자세한 사항은&nbsp;
                <C.linkm>
                  <Link href="https://nqs.kdca.go.kr/nqs/main.do">
                    <a>질병관리본부 국립검역소</a>
                  </Link>
                </C.linkm>
                &nbsp;홈페이지를 참고해 주십시오.
              </C.orange>
            </C.marginleft2>            
          </C.content>
        </C.body>
      </C.wrap>
    )
  }
}

const C = {
  /* 서비스안내 공통css */
  wrap: styled.div`
    border-top: 2px solid ${DARK_GRAY1};

    &.bdN {
      border-top: 0;
    }
  `,
  body: styled.div`
    margin-top: 100px;

    &:first-of-type {
      margin-top: 30px;
    }
  `,
  titleMain: styled.h2`
    font-size: 24px;
    font-weight: bold;

    @media only screen and (max-width: 767px) {
      font-size: 22px;
      line-height: 28px;
      letter-spacing: -0.04em;
    }
  `,
  titleSub: styled.h3`
    font-size: 21px;
    font-weight: 700;

    @media only screen and (max-width: 767px){
      font-size: 16px;
      letter-spacing: -0.32px;
      margin-top: 60px;
    }
  `,
  content: styled.div`
    margin-top: 30px;
    font-size: 18px;
    line-height: 1.8em;

    &.mt60 {
      margin-top: 60px;
    }

    @media only screen and (max-width: 767px){
      margin-top: 20px;
      font-size: 14px;
      letter-spacing: -0.28px;
    }
  `,
  linkWrap: styled.div`
    margin-top: 30px;

    @media only screen and (max-width: 1059px) {
      margin-top: 20px;
    }
  `,
  /* 서비스안내 공통css 끝 */

  linkm: styled.span`
    margin-left: 2px;
    border-bottom: 1px solid ${BLUE1};
    a{
      color: ${BLUE1};
      font-weight: 600;
      cursor: pointer;
    }

    @media only screen and (max-width: 767px){
      font-size: 14px;
      letter-spacing: -0.28px;
    }
  `,
  orange: styled.span`
    color: ${ORANGE2};
  `,
  marginleft: styled.p`
    margin-left: 28px;
    font-size: 18px;
    line-height: 2em;
    @media only screen and (max-width: 767px){
      font-size: 14px;
      letter-spacing: -0.28px;
      margin-left: 20px;
      font-weight: 300;
    }
  `,
  marginleft2: styled.p`
    margin-left: 14px;
    font-size: 18px;
    line-height: 2em;
    @media only screen and (max-width: 767px){
      font-size: 14px;
      letter-spacing: -0.28px;
      margin-left: 10px;
      font-weight: 300;
    }
  `,
};

export default TabContent;