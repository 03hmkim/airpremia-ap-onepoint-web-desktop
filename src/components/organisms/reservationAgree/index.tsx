import styled from 'styled-components';
import { Arrow } from 'src/components';
import { SubTitle, Checkbox } from 'src/components';
import {
  DARK_GRAY1,
  LIGHT_GRAY6,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {
  isAgree: boolean;
  onChange: () => void;
}

/** @deprecated 2020.07.30 이후 삭제 */
function reservationAgree({ isAgree, onChange }: IProps) {
  const AgreeArrow = () => (
    <Arrow
      color={DARK_GRAY1}
      scale={0.5}
      borderWidth="3px"
    />
  );

  const onOpenBaggageAndTicketAgree = () => {};

  return (
    <S.container>
      <div className="subTitleWrapper">
        <SubTitle>예약 규정 동의</SubTitle>
      </div>
      <div className="buttonWrapper">
        <button
          className="row"
          onClick={onOpenBaggageAndTicketAgree}
        >
          <div className="label">수하물 및 항공권 규정</div>
          <AgreeArrow />
        </button>
        <button className="row">
          <div className="label">항공 위험물 안내</div>
          <AgreeArrow />
        </button>
        <button className="row">
          <div className="label">국제 운송 약관</div>
          <AgreeArrow />
        </button>
      </div>
      <div className="checkboxWrapper">
        <Checkbox isActive={isAgree} onChange={onChange}>
          <div className="label">
            예정 규정을 확인했습니다.
          </div>
        </Checkbox>
      </div>
    </S.container>
  );
}

reservationAgree.defaultProps = {};

const S = {
  container: styled.div`
    .subTitleWrapper {
      border-top: 2px solid ${DARK_GRAY1};
      padding-top: 30px;
    }
    .buttonWrapper {
      margin: 50px 0 20px;
      border-radius: 8px;
      border: 1px solid ${LIGHT_GRAY6};
    }
    .row {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      padding: 20px 30px;
    }
    .row + .row {
      border-top: 1px solid ${LIGHT_GRAY6};
    }
    .checkboxWrapper {
      padding: 11px 0;
      .label {
        font-size: 15px;
        font-weight: 600;
        letter-spacing: -0.3px;
      }
    }
  `,
};

export default reservationAgree;
