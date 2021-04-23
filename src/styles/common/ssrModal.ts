import styled from 'styled-components';
import {
  DARK_GRAY1,
  LIGHT_GRAY6,
  BLUE1,
  ORANGE2,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';

const S1 = {
  top: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 220px;
    padding: 40px 30px 29px;
    box-sizing: border-box;
    .title {
      font-size: 40px;
      line-height: 1.2;
      letter-spacing: -0.3px;
      color: ${DARK_GRAY1};
    }
    .tabsWrapper {
      display: flex;
      .tabWrapper + .tabWrapper {
        padding-left: 30px;
      }
    }

    @media only screen and (max-width: 1059px) {
      height: 160px;
        .title {
          font-size: 26px;
          line-height: 36px;
          letter-spacing: -0.52px;
        }
    }
  `,
  middle: styled.div`
    height: calc(100vh - 300px);
    overflow-y: auto;
    border-top: 1px solid ${LIGHT_GRAY6};
    .innerWrapper {
      width: 100%;
      height: 100%;
      display: flex;
      > div {
        height: 100%;
        overflow-y: auto;
        box-sizing: border-box;
      }
      .left {
        width: 250px;
        padding: 30px;
        overflow-y: auto;
        box-sizing: border-box;
        border-top: none;
        .buttonWrapper + .buttonWrapper {
          padding-top: 30px;
        }
      }
      .right {
        flex: 1;
        border-left: 1px solid ${LIGHT_GRAY6};
        overflow: auto;
        padding: 30px 50px;
        .inputsWrapper {
          width: 449px;
          margin: 0 auto;
          .inputWrapper + .inputWrapper {
            padding-top: 40px;
          }
        }
        .ruleLinkWrapper {
          width: 449px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 30px;
          .ruleLink {
            display: block;
            padding-bottom: 2px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: -0.24px;
            color: ${BLUE1};
            border-bottom: 1px solid ${BLUE1};
          }
        }
        .adoptAllWrapper {
          button {
            width: 142px;
            height: 30px;
            border-radius: 300px;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: -0.28px;
            text-align: center;
            border: 1px solid ${LIGHT_GRAY6};
          }
        }
        .noticeWrapper {
          padding-top: 70px;
        }
      }
    }

    @media only screen and (max-width: 1059px) {
      height: calc(100vh - 240px);
    }

    @media only screen and (max-width: 767px) {
      .innerWrapper {
        flex-direction: column;
        >div {
          height: auto;
        }
        .left {
          width: 100%;
          display: inline-block;
          border-bottom: 1px solid #dddddd;
          overflow-y: visible;
          &:last-child {
            margin-right: 0;
          }
          .buttonWrapper {
            width: 100%;
            display: inline-block;
          }
        }
        .right {
          padding: 30px 30px;
          border: 0;
          overflow:visible
        }
      }
    }

    @media only screen and (max-width: 479px) {
      height: calc(100vh - 242px);
      .innerWrapper {
        .right {
          padding: 30px;
          .inputsWrapper {
            width: 315px;
            margin: 0 auto;
          }
        }
      }
    }
  `,
  bottom: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
    border-top: 1px solid ${LIGHT_GRAY6};
    .priceWrapper {
      display: flex;
      align-items: center;
      .label {
        font-size: 15px;
        font-weight: bold;
        letter-spacing: -0.3px;
        color: ${DARK_GRAY1};
      }
      .value {
        padding-left: 30px;
        font-size: 18px;
        font-weight: bold;
        letter-spacing: -0.36px;
        color: ${ORANGE2};
      }
    }
    .buttonsWrapper {
      display: flex;
      .buttonWrapper + .buttonWrapper {
        margin-left: 15px;
      }
      .buttonWrapper {
        width: 160px;
        height: 50px;
        font-size: 18px;
      }
    }

    @media only screen and (max-width: 1059px) {
      .buttonsWrapper {
        .buttonWrapper {
          font-size: 14px;
        }
      }
    }

    @media only screen and (max-width: 479px) {
      .buttonsWrapper {
        .buttonWrapper {
          width: 140px;
        }
      }
    }
  `,
};
const S2 = {
  top: styled.div`
    padding: 40px 50px 0;
    .title {
      font-size: 30px;
      line-height: 1.2;
      letter-spacing: -0.6px;
      color: ${DARK_GRAY1};
    }
    .description {
      padding-top: 10px;
      font-size: 15px;
      font-weight: 600;
      line-height: 1.73;
      letter-spacing: -0.3px;
      color: ${LIGHT_GRAY7};
      .focus {
        color: ${ORANGE2};
      }
    }
  `,
  middle: styled.div`
    padding: 0 50px;
    height: 780px;
    box-sizing: border-box;
    overflow-y: auto;
    .focus {
      padding-top: 9px;
      color: ${ORANGE2};
    }
    .subtitle {
      font-size: 18px;
      line-height: 1.56;
      letter-spacing: -0.36px;
    }
    .inputsWrapper {
      padding: 58px 0 80px;
      .inputs {
        padding-top: 15px;
      }
    }
    .inputWrapper + .inputWrapper {
      padding-top: 5px;
    }
    .emptyPassengersWrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 317px;
      .imgWrapper {
        width: 96px;
        height: 117px;
        margin-left: 23px;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .description {
        padding-top: 18px;
        font-size: 15px;
        font-weight: 500;
        line-height: 1.47;
        letter-spacing: -0.3px;
        color: ${LIGHT_GRAY7};
      }
    }
    .info {
      padding-top: 40px;
      border-top: 1px solid ${LIGHT_GRAY6};
    }
    .available {
      .detailWrapper {
        padding-top: 30px;
      }
      .label {
        font-size: 15px;
        line-height: 1.87;
        letter-spacing: -0.3px;
      }
      .description {
        padding-top: 12px;
        font-size: 15px;
        line-height: 1.87;
        letter-spacing: -0.3px;
      }
    }
    .detailsWrapper {
      padding-top: 15px;
      div + div {
        padding-top: 12px;
      }
    }
    .service {
      padding-top: 60px;
    }
    .warningListWrapper {
      padding: 60px 0 50px;
    }
  `,
  bottom: styled.div`
    padding: 15px 30px;
    border-top: 1px solid ${LIGHT_GRAY6};
    display: flex;
    justify-content: flex-end;
    .buttonWrapper {
      width: 160px;
    }
  `,
};

const S3 = {
  top: styled.div`
    height: calc(100vh - 81px);
    padding: 40px 50px 50px;
    box-sizing: border-box;
    overflow-y: auto;
    .titleWrapper {
      .title {
        font-size: 30px;
        line-height: 1.2;
        letter-spacing: -0.6px;
      }
      .description {
        padding-top: 10px;
        font-size: 15px;
        font-weight: 600;
        line-height: 1.73;
        letter-spacing: -0.3px;
        color: ${LIGHT_GRAY7};
        .focus {
          color: ${ORANGE2};
        }
      }
    }
    .contentsWrapper {
      padding-top: 58px;
    }
    .subtitle {
      font-size: 18px;
      line-height: 1.56;
      letter-spacing: -0.36px;
    }
    .inputsWrapper {
      padding-top: 15px;
      .inputWrapper + .inputWrapper {
        padding-top: 5px;
      }
    }
    .detailWraper {
      padding-top: 60px;
      .textareaWrapper {
        position: relative;
        padding-top: 20px;
        .count {
          position: absolute;
          top: -20px;
          right: 0;
          font-size: 12px;
          line-height: 2.5;
          color: ${LIGHT_GRAY7};
        }
      }
    }
    .warningListWrapper {
      padding-top: 60px;
    }
  `,
  bottom: styled.div`
    height: 80px;
    box-sizing: border-box;
    padding: 15px 30px;
    border-top: 1px solid ${LIGHT_GRAY6};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .buttonWrapper {
      width: 160px;
    }
  `,
};

export default { S1, S2, S3 };
