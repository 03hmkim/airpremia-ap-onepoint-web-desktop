import styled from 'styled-components';
import SvgCaution from 'public/images/util/ico-caution-gray.svg';
import {
  DARK_GRAY1,
  LIGHT_GRAY8,
  BLUE1,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {}

/** @deprecated 2020.07.30 이후 삭제 */
function PayProgramInstallInfo({}: IProps) {
  // TODO: 브이피 홈페이지, 수동설치 클릭 이벤트

  return (
    <S.container>
      <div className="title font-bold">
        <SvgCaution />
        결제 프로그램 수동 설치 안내
      </div>
      <ul>
        <li>
          - 카드사별 결제 프로그램이 설치 되지 않는 경우,
          해당 카드사 고객센터에 문의바랍니다.
        </li>
        <li>
          - 안전결제(ISP)는&nbsp;
          <a href="#">브이피(주) 홈페이지</a>를 통해
          수동설치파일을 다운로드 할 수 있습니다.
        </li>
        <li>
          - 계좌이체 사용 시 자동설치가 원활하지 않으면
          &nbsp;
          <a href="#">수동 설치</a>해 주시기 바랍니다.
        </li>
        <li>
          - 결제 진행이 원활하지 않은 경우, 브라우저 설정의
          [팝업차단]해지 후 브이피(주) 홈페이지에서
          <br />
          [키보드 보안 수동 설치] 안내에 따라 수동으로
          설치해 주시기 바랍니다.
        </li>
      </ul>
    </S.container>
  );
}

PayProgramInstallInfo.defaultProps = {};

const S = {
  container: styled.div`
    .title {
      display: flex;
      align-items: center;
      font-size: 15px;
      line-height: 1.47;
      color: ${DARK_GRAY1};
      svg {
        padding-right: 5px;
      }
    }
    ul {
      padding-top: 15px;
      li {
        font-size: 14px;
        line-height: 2;
        color: ${LIGHT_GRAY8};
        a {
          cursor: pointer;
          color: ${BLUE1};
          border-bottom: 1px solid ${BLUE1};
        }
      }
    }
  `,
};

export default PayProgramInstallInfo;
