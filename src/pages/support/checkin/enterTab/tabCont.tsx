import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import {
  LIGHT_GRAY8,
  LIGHT_GRAY13,
} from '@airpremia/cdk/styles/colors';

function TabContent({currIdxCont}: IProps) {
  if ( currIdxCont === 0 ) {
    return (
      <S.container>
        <table>
          <colgroup>
            <col width="33.3333%"></col>
            <col width="33.3333%"></col>
            <col width="33.3333%"></col>
          </colgroup>
            <thead>
              <tr>
                <th></th>
                <td></td>
                <td></td>
              </tr>
            </thead>
          <tbody>
            <tr>
              <th>만 19세 이상</th>
              <td>사전등록 절차 없이 바로 이용</td>
              <td>
                <p>(단, 개명 등 인적사항 변경 및 주민등록증 발급 후</p>
                <p>30년이 경과된 국민은 사전등록 후 이용)</p>
              </td>
            </tr>
            <tr>
              <th>만 7세 ~ 만 18세 이하</th>
              <td>사전등록 후 이용</td>
              <td>
                <p>(7세 이상 ~ 14세 미만은 부모 동반 및 가족관계</p>
                <p>확인서류 제출 필요)</p>
              </td>
            </tr>
          </tbody>
        </table>
      </S.container>
    )
  } else {
    return (
      <S.container>
        <table>
          <colgroup>
            <col width="33.3333%"></col>
            <col width="33.3333%"></col>
            <col width="33.3333%"></col>
          </colgroup>
            <thead>
              <tr>
                <th></th>
                <td></td>
                <td></td>
              </tr>
            </thead>
          <tbody>
            <tr>
              <th>
                <p>17세 이상 등록 외국</p>
                <p><C.lgcl>(거소신고를 한 재외동포)</C.lgcl></p>
              </th>
              <td>사전등록 절차 없이 바로 이용</td>
              <td></td>
            </tr>
            <tr>
              <th>만 7세 ~ 만 18세 이하</th>
              <td>
                <p>사전등록 없이 출국심사장에서 바로 이용</p>
              </td>
              <td><C.lgc>(입국 시 바이오정보 미제공자는 이용 불가)</C.lgc></td>
            </tr>
          </tbody>
        </table>
      </S.container>
    )
  }
}


const S = {
  container: styled.div``,

};

const C = {
  lgcl: styled.p`
    color: ${LIGHT_GRAY13};
  `,
  lgc: styled.p`
    color: ${LIGHT_GRAY8};
  `
};

export default TabContent;
