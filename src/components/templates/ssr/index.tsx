import styled from 'styled-components';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {
  title?: React.ReactElement;
  bundlePanels?: React.ReactElement[];
  originalPanels?: React.ReactElement[];
  specialPanels?: React.ReactElement[];
  receipt?: React.ReactElement;
}

function Ssr({
  title,
  // bundlePanels,
  originalPanels,
  specialPanels,
  receipt,
}: IProps) {
  const getPanels = (elements?: React.ReactElement[]) => {
    return elements?.map(
      (element: React.ReactElement, index: number) => {
        return (
          <div
            className="panelWrapper"
            key={index.toString()}
          >
            {element}
          </div>
        );
      },
    );
  };

  return (
    <S.container>
      <div className="title">{title}</div>
      <div className="contentWrapper">
        <div className="left">
          {/* <div className="bundle">
            <div className="subtitle">
              번들 서비스
            </div>
            <div className="panels">
              {getPanels(bundlePanels)}
            </div>
          </div> */}
          <div className="original">
            <div className="subtitle">
              부가 서비스
            </div>
            <div className="panels">
              {getPanels(originalPanels)}
            </div>
          </div>
          <div className="special">
            <div className="subtitle">
              특별 서비스
            </div>
            <div className="panels">
              {getPanels(specialPanels)}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="receipt">{receipt}</div>
        </div>
      </div>
    </S.container>
  );
}

Ssr.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    /* width: 1400px; */
    margin: 0 auto 160px;
    padding: 60px 104px 0;
    box-sizing: border-box;
    .contentWrapper {
      display: flex;
      justify-content: space-between;
      padding-top: 100px;
    }
    .left {
      width: 767px;
      border-top: 2px solid ${DARK_GRAY1};
      > div {
        padding-top: 20px;
      }
      .original,
      .special {
        padding-top: 80px;
      }
      .panels {
        padding-top: 20px;
        .panelWrapper + .panelWrapper {
          padding-top: 10px;
        }
      }
    }
    .subtitle {
      font-size: 24px;
      font-family: 'NotoSans';
      font-weight: 700;
      letter-spacing: -0.36px;
      color: ${DARK_GRAY1};
    }
    .right {
      padding-left: 60px;
    }
    .receipt {
      position: sticky;
      top: 130px;
    }

    @media only screen and (max-width: 1059px) {
      padding: 20px 40px 0;

      .contentWrapper{
        display: block;
      }
      .left {
        width: 100%;

        .original,
        .special {
          padding-top: 10vw;
        }
      }
      .right {
        width: 100%;
        padding-left: 0;
        margin-top: 20px;
      }
      .contentWrapper {
        padding-top: 80px;
      }
    }

    @media only screen and (max-width: 767px) { 
      padding: 20px 20px 0;

      .subtitle {
        font-size: 22px;
      }
      .contentWrapper {
        padding-top: 60px;
      }
    }
  `,
};

export default Ssr;
