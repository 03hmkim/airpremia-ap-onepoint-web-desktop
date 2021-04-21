import styled from 'styled-components';
import {
  DARK_GRAY1,
  PALE_BLUE5,
  WHITE1,
} from '@airpremia/cdk/styles/colors';
import SvgApple from 'public/images/ico_apple.svg';
import SvgGooglePlay from 'public/images/ico_googleplay.svg';

interface IStyleProps {}
interface IProps extends IStyleProps {}

function AppDownloadButton2({}: IProps) {
  return (
    <S.container>
      <div className="description">
        에어프레미아 앱으로 여정을 관리해보세요. 실시간으로
        여행 정보를 알려드려요. :)
      </div>
      <div className="buttonsWrapper">
        <div className="buttonWrapper">
          <div className="svgWrapper">
            <SvgApple />
          </div>
          <div className="label">APP STORE</div>
        </div>
        <div className="buttonWrapper">
          <div className="svgWrapper">
            <SvgGooglePlay />
          </div>
          <div className="label">Google Play</div>
        </div>
      </div>
    </S.container>
  );
}

AppDownloadButton2.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    background-color: ${PALE_BLUE5};
    padding: 18px 30px;
    .description {
      font-size: 15px;
      font-weight: 600;
      letter-spacing: -0.3px;
      color: ${WHITE1};
    }
    .buttonsWrapper {
      display: flex;
      .buttonWrapper + .buttonWrapper {
        margin-left: 10px;
      }
      .buttonWrapper {
        display: flex;
        padding: 7px 15px;
        border-radius: 19px;
        background-color: ${WHITE1};
        .svgWrapper {
          width: 14px;
          height: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .label {
          padding-left: 4px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: -0.24px;
          color: ${DARK_GRAY1};
        }
      }
    }
  `,
};

export default AppDownloadButton2;
