import styled from 'styled-components';
import { WarningList } from 'src/components';
import {
  UnOrderedListLine,
  TaskButton,
} from 'src/components';
import ImgPregnent from 'public/images/pregent_illust@2x.png';
import { SsrModalS } from 'src/styles/common';
import { useSsr } from 'src/hooks';
import { ISsrModalLeftItem } from 'src/hooks/useSsr/useSsrUI';

interface IStyleProps {}
interface IProps extends IStyleProps {
  passengers?: ISsrModalLeftItem[];
  onClickButton: () => void;
}

function SsrModalPregnant({
  passengers,
  onClickButton,
}: IProps) {
  const { getPassengersCheckboxElement } = useSsr();
  const hasPassengers = !!passengers?.length;
  const warningDescriptions = [
    '임신성 고혈압, 당뇨 등 합병증이 있거나 유산, 조기 출산의 가능성이 있는 경우에는 임신 기간에 상관없이 탑승 수속 시 의사 소견서 및 건강 상태 서약서를 작성 및 제출해주셔야 합니다.',
    '위 서류를 제출한 경우라 할지라도 당일 공항에서의 건강 상태를 감안하여 항공여행이 불가하다는 판단이 있을 때에는 탑승이 거절될 수 있습니다.',
  ];

  return (
    <S.container>
      <S.top>
        <div className="title font-bold">임산부 승객</div>
        <div className="description">
          <div>
            임산부 승객의 경우 우선 체크인 탑승, 수하물 우선
            찾기 서비스를 제공해드립니다.
          </div>
          <div className="focus">
            (의사 소견서 및 건강 상태 서약서 제출 필요)
          </div>
        </div>
      </S.top>
      <S.middle>
        {hasPassengers ? (
          <div className="inputsWrapper">
            <div className="subtitle font-bold">
              신청 승객
            </div>
            <div className="inputs">
              {getPassengersCheckboxElement(passengers)}
            </div>
          </div>
        ) : (
          <div className="emptyPassengersWrapper">
            <div className="imgWrapper">
              <img
                src={ImgPregnent}
                alt="자고있는 임산부"
              />
            </div>
            <div className="description">
              신청 가능한 승객이 없습니다.
            </div>
          </div>
        )}
        <div className="info">
          <div className="available">
            <div className="subtitle font-bold">
              임신 중 여행 가능 여부
            </div>
            <div className="detailWrapper">
              <div className="label font-bold">
                임신 32주 미만
              </div>
              <div className="description">
                의사로부터 항공 여행 금지를 권고받지 않은
                한, 제한 없이 자유롭게 여행하실 수 있습니다.
              </div>
            </div>
            <div className="detailWrapper">
              <div className="label font-bold">
                임신 32주 이상
              </div>
              <div className="description">
                의사로부터 항공 여행 금지를 권고받지 않은
                한, 의사 소견서 원본 1부와 건강 상태
                서약서를 작성 및 제출해주셔야 합 니다.
              </div>
            </div>
            <div className="detailWrapper">
              <div className="label font-bold">
                임신 37주 이상 (다태 임신 시 33주 이상)
              </div>
              <div className="description">
                임산부와 태아의 건강을 위하여 여행이
                불가합니다.
              </div>
            </div>
          </div>
          <div className="service">
            <div className="subtitle font-bold">
              제공 서비스
            </div>
            <div className="detailsWrapper">
              <UnOrderedListLine>
                우선 체크인
              </UnOrderedListLine>
              <UnOrderedListLine>
                항공기 우선 탑승
              </UnOrderedListLine>
              <UnOrderedListLine>
                도착지에서의 위탁 수하물 우선 찾기
              </UnOrderedListLine>
            </div>
          </div>
        </div>
        <div className="warningListWrapper">
          <WarningList descriptions={warningDescriptions} />
        </div>
      </S.middle>
      <S.bottom>
        <div className="buttonWrapper">
          <TaskButton onClick={onClickButton}>
            신청 완료
          </TaskButton>
        </div>
      </S.bottom>
    </S.container>
  );
}

SsrModalPregnant.defaultProps = {};

const S = {
  ...SsrModalS.S2,
  container: styled.div<IStyleProps>``,
};

export default SsrModalPregnant;
