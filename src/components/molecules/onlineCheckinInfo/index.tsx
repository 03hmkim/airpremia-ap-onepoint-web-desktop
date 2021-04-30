import styled from 'styled-components';
import { FC } from 'react';
import SvgCheckin from 'public/images/ico_checkin.svg';
import SvgTicket from 'public/images/ico_ticket.svg';
import SvgFlight from 'public/images/ico_flight.svg';
import {
  LIGHT_GRAY8,
  BLUE1,
  LIGHT_GRAY6,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {}

const OnlineCheckInfo: FC<IProps> = ({}) => {
  return (
    <S.container>
      <S.left>
        <h3 className="font-bold">온라인 체크인 안내</h3>
        <div className="description">
          홈페이지에서 미리 온라인 체크인하면 공항
          대기시간을 줄일 수 있어요 :)
        </div>
      </S.left>
      <S.right>
        <div className="info">
          <div className="subtitle">
            예매 직후부터 출발 24시간 전까지
          </div>
          <div className="stepsWrapper">
            <div className="step">
              <div className="label">
                STEP 01
              </div>
              <div className="svgWrapper">
                <SvgCheckin />
              </div>
              <div className="description">
                원하는 자리 먼저 찜하고 체크인 정보 입력
              </div>
            </div>
            <div className="step">
              <div className="label">
                STEP 02
              </div>
              <div className="svgWrapper">
                <SvgTicket />
              </div>
              <div className="description">
                출발 24시간 전 탑승권 발급
              </div>
            </div>
            <div className="step">
              <div className="label">
                STEP 03
              </div>
              <div className="svgWrapper">
                <SvgFlight />
              </div>
              <div className="description">
                공항 수속 없이 바로 기내 탑승
              </div>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="subtitle">
            출발 24시간 전부터 1시간 전까지
          </div>
          <div className="stepsWrapper">
            <div className="step">
              <div className="label font">
                STEP 01
              </div>
              <div className="svgWrapper">
                <SvgCheckin />
              </div>
              <div className="description">
                홈페이지/앱에서 체크인 정보 입력
              </div>
            </div>
            <div className="step">
              <div className="label">
                STEP 02
              </div>
              <div className="svgWrapper">
                <SvgTicket />
              </div>
              <div className="description">탑승권 발급</div>
            </div>
            <div className="step">
              <div className="label">
                STEP 03
              </div>
              <div className="svgWrapper">
                <SvgFlight />
              </div>
              <div className="description">
                공항 수속 없이 바로 기내 탑승
              </div>
            </div>
          </div>
        </div>
      </S.right>
    </S.container>
  );
};

OnlineCheckInfo.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 1059px) { 
      display: block;
    }
  `,
  left: styled.div<IStyleProps>`
    width: calc(100% - 860px);
    h3 {
      font-size: 22px;
      letter-spacing: -0.44px;
    }
    .description {
      padding-top: 10px;
      font-size: 18px;
      line-height: 1.57;
      letter-spacing: -0.28px;
      color: ${LIGHT_GRAY8};
    }

    @media only screen and (max-width: 1200px) {
      width: calc(100% - 760px);
    }

    @media only screen and (max-width: 1059px) {
      width: 100%;
    }

    @media only screen and (max-width: 767px) {
      .description {
        font-size: 14px;
      }
    }
  `,
  right: styled.div<IStyleProps>`
    width: 800px;
    .info + .info {
      padding-top: 60px;
    }
    .subtitle {
      font-size: 18px;
      font-weight: 700;
      line-height: 1.75;
      letter-spacing: -0.32px;
    }
    .stepsWrapper {
      padding-top: 30px;
      .step {
        display: flex;
        align-items: center;
        height: 84px;
        border-bottom: 1px solid ${LIGHT_GRAY6};
        .label {
          font-size: 20px;
          font-family: 'Premia';
          font-weight: 700;
          letter-spacing: -0.4px;
          color: ${BLUE1};
        }
        .svgWrapper {
          padding-left: 40px;
          margin-top: -3px;
        }
        .description {
          padding-left: 15px;
          height: 20px;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: -0.32px;
        }
      }
    }

    @media only screen and (max-width: 1200px) {
      width: 700px;
    }

    @media only screen and (max-width: 1059px) { 
      width: auto;
      padding-top: 60px;
    }

    @media only screen and (max-width: 767px) { 

      .subtitle {
        font-size: 16px;
      }
      
      .stepsWrapper {
        padding-top: 20px;
        .step {
          .label {
            min-width: 55px;
          }
          .svgWrapper {
            padding-left: 20px;
          }
          .description {
            font-size: 14px;
          }
        }
      }
    }
  `,
};

export default OnlineCheckInfo;
