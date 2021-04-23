import styled from 'styled-components';
import SvgCautionGray from 'public/images/ico_caution_gray.svg';
import ImgbookingFinish from 'public/images/seq_booking_fin_pc_35@2x.png';
import {
  DARK_GRAY2,
  LIGHT_GRAY8,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {}

function ReservationCompleteTitle({}: IProps) {
  return (
    <S.container>
      <h2>
        항공권 예약이
        <br />
        완료되었습니다 :-)
      </h2>
      <div className="descriptionWrapper">
        <div className="svgWrapper noticeIcon">
          <SvgCautionGray />
        </div>
        <div className="description">
          예약 정보는 예매자 이메일과 휴대전화로 전송됩니다.
        </div>
      </div>
      <div className="imageWrapper">
        <img src={ImgbookingFinish} alt="축하이미지" />
      </div>
    </S.container>
  );
}

ReservationCompleteTitle.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    margin-top: 60px;
    position: relative;

    display: flex;
    justify-content: center;
    flex-direction: column;
    h2 {
      font-size: 40px;
      font-family: 'NotoSans';
      font-weight: 700;
      line-height: 48px;
      letter-spacing: -0.03em;
      font-weight: 600;
      color: ${DARK_GRAY2};
      @media only screen and (max-width: 767px) {
        font-size: 26px;
        line-height: 36px;
        letter-spacing: -0.052em;
      }
    }
    .descriptionWrapper {
      display: flex;
      align-items: center;
      padding-top: 15px;
      position: relative;
      .description {
        padding-left: 15px;
        font-size: 18px;
        line-height: 26px;
        letter-spacing: -0.28px;
        color: ${LIGHT_GRAY8};

        @media only screen and (max-width: 767px) {
          font-size: 14px;
        }
      }

    }
    .imageWrapper {
      position: absolute;
      /* top: -59px; */
      top: -60px;
      left: 25px;
      width: 426px;
      height: 224px;
      z-index: -1;

      @media only screen and (max-width: 767px) {
        width: 213px;
        top: -30px;
        left: 30px;
      }
      img {
        display: block;
        width: 100%;
        height: 100%;

        @media only screen and (max-width: 767px) {
          height: auto;
        }
      }
    }
    .svgWrapper{

      svg{
        width: 20px;
        height: 22px;
      }
    }
    .noticeIcon{
      position: absolute;
      top: 20px;
      svg{
        width: 12px;
        height: 15px;
      }
    }
  `,
};

export default ReservationCompleteTitle;
