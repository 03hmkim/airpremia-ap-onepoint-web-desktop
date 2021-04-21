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
      <h2 className="font-bold">
        항공권 예약이
        <br />
        완료되었습니다 :-)
      </h2>
      <div className="descriptionWrapper">
        <div className="svgWrapper">
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
    position: relative;
    height: 224px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h2 {
      font-size: 30px;
      line-height: 1.4;
      letter-spacing: -0.6px;
      color: ${DARK_GRAY2};
    }
    .descriptionWrapper {
      display: flex;
      align-items: center;
      padding-top: 15px;
      .description {
        padding-left: 5px;
        font-size: 14px;
        line-height: 1.71;
        letter-spacing: -0.28px;
        color: ${LIGHT_GRAY8};
      }
    }
    .imageWrapper {
      position: absolute;
      /* top: -59px; */
      top: -5px;
      left: 0;
      width: 426px;
      height: 224px;
      z-index: -1;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  `,
};

export default ReservationCompleteTitle;
