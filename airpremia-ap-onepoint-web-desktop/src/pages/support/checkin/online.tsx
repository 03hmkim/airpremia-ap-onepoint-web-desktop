import styled from 'styled-components';
import {
  ComTitle,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';


function additionalServiceonlinecheckin(){
    return (
        <Container>
            <ComTitle
                title="탑승 수속"
            />
            <C.wrap>
                <C.body>
                    <C.title>온라인 체크인</C.title>
                    <C.p>홈페이지에서 미리 온라인 체크인하면 공항 대기시간을 줄일 수 있어요 :)​</C.p>
                </C.body>
                <C.sbody>
                    <C.sub>예매 직후부터 출발 24시간 전까지</C.sub>
                    <C.inline>
                        <C.badge className="font-premia-bold">
                            STEP 1
                        </C.badge>
                        <C.itemText>원하는 자리 먼저 찜하고 체크인 정보 입력</C.itemText>
                    </C.inline>
                    <C.inline>
                        <C.badge className="font-premia-bold">
                            STEP 2
                        </C.badge>
                        <C.itemText>출발 24시간 전 탑승권 자동 발급</C.itemText>
                    </C.inline>
                    <C.inline>
                        <C.badge className="font-premia-bold">
                            STEP 3
                        </C.badge>
                        <C.itemText>공항 수속 없이 바로 기내 탑승</C.itemText>
                    </C.inline>
                </C.sbody>
                <C.sbody>
                    <C.sub>출발 24시간 전부터 1시간 전까지</C.sub>
                    <C.inline>
                        <C.badge className="font-premia-bold">
                            STEP 1
                        </C.badge>
                        <C.itemText>홈페이지/앱에서​ 체크인 정보 입력​</C.itemText>
                    </C.inline>
                    <C.inline>
                        <C.badge className="font-premia-bold">
                            STEP 2
                        </C.badge>
                        <C.itemText>탑승권 발급​</C.itemText>
                    </C.inline>
                    <C.inline>
                        <C.badge className="font-premia-bold">
                            STEP 3
                        </C.badge>
                        <C.itemText>공항 수속 없이 바로 기내 탑승</C.itemText>
                    </C.inline>
                </C.sbody>
                <C.sbody>
                <C.sub>온라인 체크인 안내</C.sub>
                    <C.ul>
                        <C.li>온라인 체크인을 신청하면 출발 24시간 전에 자동으로 체크인이 완료되며 연락처로 탑승권이 전송됩니다.​</C.li>
                        <C.li>온라인 체크인 신청 완료 후에도 탑승권 발급 전까지 좌석 변경 및 항공편 변경이 가능합니다.​</C.li>
                        <C.li>입력한 여권 정보가 부정확하거나 유효하지 않을 경우 탑승권 발급이 불가능할 수 있습니다.</C.li>
                    </C.ul>
                    <C.pt>온라인 체크인 신청 불가한 경우</C.pt>
                    <C.ul>
                        <C.li>유아 동반 승객, 임산부 승객​</C.li>
                        <C.li>온라인 탑승권이 허용되지 않는 일부 해외 공항 출발 항공편​</C.li>
                        <C.li>직원의 확인이 필요한 요청사항이 있는 탑승객</C.li>
                    </C.ul>
                </C.sbody>
            </C.wrap>
        </Container>
    )
}

const C = {
    wrap: styled.div`
      margin-top: 70px;
      border-top: 2px solid ${DARK_GRAY1};
    `,
    body: styled.div`
      margin-top: 140px;
      &:first-of-type{
        margin-top: 30px;
      }
    `,
    sbody: styled.div`
      margin-top: 100px;
    `,
    titleMain: styled.h3`
      font-size: 30px;
      font-weight: bold;
    `,
    title: styled.h4`
      font-size: 22px;
      font-weight: bold;
    `,
    sub: styled.h5`
      margin-bottom: 30px;
      font-size: 18px;
      font-weight: bold;
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
    p: styled.p`
      margin-top: 20px;
      margin-bottom: 15px;
      line-height: 1.8;
      &:last-child{
        margin-bottom: 0px;
      }
    `,
    badge:styled.div`
      width: 60px;
      height: 100%;
      display: flex;
      -webkit-box-pack: center;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      background-color: #0093ff;
      padding-top: 2px;
      box-sizing: border-box;
      color:#fff;
      font-size: 18px;
      margin-right: 9px;
    `,
    inline: styled.div`
      display: flex;
      align-items: baseline;
      padding-top: 0px;
      padding-bottom: 30px;
      &:first-child{
        padding-top: 30px;
      }
      &:last-child{
        padding-bottom: 0px;
      }
    `,
    pt: styled.p`
      font-size: 16px;
      font-weight: 600;
      margin-top: 20px;
    `,
    itemText: styled.p`
      font-size: 15px;
      line-height: 30px;
  `,
  }

  export default additionalServiceonlinecheckin;