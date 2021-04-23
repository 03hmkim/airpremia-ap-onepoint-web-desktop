import styled from 'styled-components';
import {
  DARK_GRAY1,
  LIGHT_BLUE1,
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
        여행 정보를 알려드려요.
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
          <div className="label">GOOGLE PLAY</div>
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
    background-color: ${LIGHT_BLUE1};
    padding: 18px 30px;

    @media only screen and (max-width: 1059px) {
      flex-direction: column;
    }
    .description {
      font-size: 18px;
      font-weight: 500;
      letter-spacing: -0.3px;
      color: ${DARK_GRAY1};

      @media only screen and (max-width: 1059px) {
        font-size: 18px;
        line-height: 1.3;
        margin-bottom: 20px;
      }

      @media only screen and (max-width: 767px) {
        font-size: 14px;
      }
    }
    .buttonsWrapper {
      display: flex;

      @media only screen and (max-width: 479px) {
        flex-direction: column;
      }

      .buttonWrapper + .buttonWrapper {
        margin-left: 10px;

        @media only screen and (max-width: 1059px) {
          margin: 0;
        }
      }
      .buttonWrapper {
        display: flex;
        align-items: center;
        padding: 7px 15px;
        border-radius: 19px;
        background-color: ${WHITE1};

        @media only screen and (max-width: 1059px) {
          margin-right: 20px;
          margin-bottom: 0;
        }

        @media only screen and (max-width: 479px) {
          margin-right: 0;
          margin-bottom: 20px;
        }

        .svgWrapper {
          width: 14px;
          height: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .noticeIcon{
          height: 14px;
        }
        .label {
          padding-left: 4px;
          font-size: 18px;
          font-family: 'Heebo';
          font-weight: 700;
          letter-spacing: -0.24px;
          color: ${DARK_GRAY1};

          @media only screen and (max-width: 767px) {
            font-size: 14px;
            line-height: 26px;
            letter-spacing: -0.028em;
          }
        }
      }
    }
  `,
};

export default AppDownloadButton2;
