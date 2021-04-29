import styled from 'styled-components';
import {
  LIGHT_GRAY8,
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {
  /** 썸네일 */
  imgUrl: string;
  /** 제목 */
  title: string;
  /** 시작일자 */
  from: string;
  /** 종료일자 */
  to: string;
}

function TimeLimitPromotionCard({
  imgUrl,
  title,
  from,
  to,
}: IProps) {
  return (
    <S.container>
      <div className="imgWrapper">
        <img src={imgUrl} alt="프로모션 카드" />
      </div>
      <div className="descriptionWrapper">
        <div className="title">{title}</div>
        <div className="time">
          {from} - {to}
        </div>
      </div>
    </S.container>
  );
}

TimeLimitPromotionCard.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    .imgWrapper {
      min-width: 150px;
      max-width: 350px;
      height: 500px;
      border-radius: 12px;
      overflow: hidden;
      
      @media only screen and (max-width: 1059px) {
        width: 100%;
        height: 100%;
      }
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .descriptionWrapper {
      padding-top: 30px;
      .title {
        font-size: 18px;
        font-family: 'NotoSans';
        font-weight: 400;
        line-height: 1.5;
        letter-spacing: -0.32px;
        color: ${DARK_GRAY1};

        @media only screen and (max-width: 767px) {
          font-size: 16px;
          line-height: 26px;
          letter-spacing: -0.032em;
          text-align: center;
        }
      }
      .time {
        padding-top: 10px;
        font-size: 18px;
        font-family: 'Heebo';
        line-height: 1.8;
        letter-spacing: -0.26px;
        color: ${LIGHT_GRAY8};

        @media only screen and (max-width: 767px) {
          font-size: 14px;
          line-height: 26px;
          letter-spacing: -0.028em;
          text-align: center;
        }
      }
    }
  `,
};

export default TimeLimitPromotionCard;
