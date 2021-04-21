import styled from 'styled-components';
import {
  LIGHT_GRAY7,
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
      width: 350px;
      height: 500px;
      border-radius: 12px;
      overflow: hidden;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .descriptionWrapper {
      padding-top: 30px;
      .title {
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
        letter-spacing: -0.32px;
        color: ${DARK_GRAY1};
      }
      .time {
        padding-top: 10px;
        font-size: 13px;
        line-height: 1.5;
        letter-spacing: -0.26px;
        color: ${LIGHT_GRAY7};
      }
    }
  `,
};

export default TimeLimitPromotionCard;
