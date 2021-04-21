import styled from 'styled-components';
import SvgCheckinComplete from 'public/images/img_illust_checkin.svg';

interface IStyleProps {}
interface IProps extends IStyleProps {}

function PassengerListComplete({}: IProps) {
  return (
    <S.container>
      <div className="svgWrapper">
        <SvgCheckinComplete />
      </div>
      <div className="description">
        가능한 모든 탑승객의
        <br />
        온라인 체크인이 완료됐습니다.
      </div>
    </S.container>
  );
}

PassengerListComplete.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    .svgWrapper {
      margin: 0 auto;
      width: 140px;
      height: 140px;
    }
    .description {
      padding-top: 20px;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.44;
      letter-spacing: -0.36px;
      text-align: center;
    }
  `,
};

export default PassengerListComplete;
