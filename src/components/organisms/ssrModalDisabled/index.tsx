import { Fragment } from 'react';
import styled from 'styled-components';
import { SsrModalS } from 'src/styles/common';
import { useSsr } from 'src/hooks';
import ImgPregnent from 'public/images/pregent_illust@2x.png';
import { WarningList } from 'src/components';
import {
  TaskButton,
  UnOrderedListLine,
} from 'src/components';
import { ISsrModalLeftItem } from 'src/hooks/useSsr/useSsrUI';

interface IStyleProps {}
interface IProps extends IStyleProps {
  passengers?: ISsrModalLeftItem[];
  onClickButton: () => void;
}

function SsrModalDisabled({
  passengers,
  onClickButton,
}: IProps) {
  const { getPassengersCheckboxElement } = useSsr();
  const hasPassengers = !!passengers?.length;
  const warningDescriptions = [
    '휠체어를 소지하신 고객의 경우 항공기 탑승구까지 사용하여 이동하실 수 있으며, 탑승구에서 휠체어를 위탁하시면 됩니다.(단, 해외공항 사정에 따라 탑승구 앞에서 휠체어 위탁 및 수취가 불가능할 수 있습니다.)',
    '전동 휠체어를 소지하신 고객의 경우 배터리를 분리해야 하는 조치가 필요하므로 예약 시 미리 알려주시기 바랍니다.',
    '기내 휠체어 고객 거동이 불편한 고객이 기내에서 자유롭게 통로 이동을 할 수 있도록 모든 항공기의 기내에 휠체어가 비치되어 있습니다.',
  ];

  return (
    <S.container>
      <S.top>
        <div className="title font-bold">장애인 승객</div>
        <div className="description">
          시각, 청각 장애를 가지신 고객 또는 휠체어가 필요한
          고객의 경우 휠체어 대여 및 담당 직원 보조,
          <br />
          안내견 무료 운송 서비스를 제공해드립니다.
          <span className="focus">
            &nbsp; (의사 소견서 제출 필요)
          </span>
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
          <div className="target">
            <div className="subtitle font-bold">
              서비스 대상
            </div>
            <div className="detailsWrapper">
              <UnOrderedListLine>
                시각, 청각 장애를 가지신 고객
              </UnOrderedListLine>
              <UnOrderedListLine>
                <Fragment>
                  휠체어(Whellchair)가 필요한 고객
                  <div className="line focus">
                    (출국 수속 시 항공 여행을 위한 의사
                    소견서를 제출 하여야 합니다.)
                  </div>
                </Fragment>
              </UnOrderedListLine>
            </div>
          </div>
          <div className="service">
            <div className="subtitle font-bold">
              제공 서비스
            </div>
            <div className="detailsWrapper">
              <UnOrderedListLine>
                휠체어 대여
              </UnOrderedListLine>
              <UnOrderedListLine>
                담당 직원이 탑승 수속부터 입국 수속까지 안내
                및 보조
              </UnOrderedListLine>
              <UnOrderedListLine>
                도착 시 담당 직원이 공항 내 마중 나온
                보호자가 계신 곳 까지 안내
              </UnOrderedListLine>
              <UnOrderedListLine>
                <Fragment>
                  시각, 청각 장애인 안내견을 동반하는
                  시각장애 고객님의 경우 안내견 무료 운송
                  <br />
                  <div className="line">
                    (단, 공인 인증서 소지 및 Harness
                    착용하고, 장애 고객과 동행할 경우에만
                    기내 탑승 가능)
                  </div>
                </Fragment>
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

SsrModalDisabled.defaultProps = {};

const S = {
  ...SsrModalS.S2,
  container: styled.div<IStyleProps>``,
};

export default SsrModalDisabled;
