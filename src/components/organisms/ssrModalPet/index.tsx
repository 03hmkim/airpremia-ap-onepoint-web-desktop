import { Fragment, useState } from 'react';
import styled from 'styled-components';
import {
  SsrCheckbox,
  WarningList,
  Select,
} from 'src/components';
import {
  TaskButton,
  UnOrderedListLine,
} from 'src/components';
import { SsrModalS } from 'src/styles/common';
import ImgPregnent from 'public/images/pregent_illust@2x.png';
import { ESelectPosition } from 'src/components/molecules/select';
import { ISsrModalTabItem } from 'src/hooks/useSsr/useSsrUI';

interface IStyleProps {}
interface IProps extends IStyleProps {
  inputs?: ISsrModalTabItem[];
  onClickButton?: () => void;
}

function SsrModalPet({ inputs, onClickButton }: IProps) {
  const hasInputs = !!inputs?.length;
  const getCheckboxsElement = (
    petInputs?: ISsrModalTabItem[],
  ) =>
    petInputs?.map((petInput: ISsrModalTabItem) => {
      const [isShowSelect, setIsShowSelect] = useState<
        boolean
      >(false);
      const toggleSelect = () => {
        setIsShowSelect(!isShowSelect);
      };

      return (
        <div className="inputWrapper pet" key={petInput.id}>
          <SsrCheckbox
            onClick={() => {}}
            isActive={!!petInput.isActive}
            select={
              <Select
                position={ESelectPosition.DOWN}
                isShowMenu={isShowSelect}
                label="반려동물 종류 선택"
                onClick={toggleSelect}
              >
                <div
                  className="menuWrapper"
                  onClick={toggleSelect}
                >
                  <div className="item">개</div>
                  <div className="item">고양이</div>
                  <div className="item">새</div>
                </div>
              </Select>
            }
          >
            <div className="label">{petInput.label}</div>
          </SsrCheckbox>
        </div>
      );
    });
  const warningDescriptions = [
    '여행 목적지 도시 또는 국가의 관련 규정과 법령으로 제한되는 경우에는 운송이 불가합니다.',
    '탑승 수속 혹은 항공기 탑승 시, 반려동물의 건강 상태 등에 따라 짖거나 소리를 내어 다른 승객에게 불쾌감을 줄 수 있는 경우에 운송이 거절될 수 있습니다.',
    '반려동물 운송 중 관리 책임은 소유자에게 있으며, 반려동물의 사망 또는 발병 등에 대해서 책임지지 않습니다.',
    '임신 중이거나 악취가 심한 경우, 안정제/수면제가 투여된 반려동물, 맹견(투견 등 사나운 동물), 맹금류는 운송이 불가합니다.',
    '해부학적 구조로 인해 항공여행 중 호흡 곤란, 폐사 위험이 있는 단두종 동물은 위탁 수하물 접수가 불가하며, 기내 반입 조건을 충족하는 경우에만 기내 운송이 가능합니다.',
  ];

  return (
    <S.container>
      <S.top>
        <div className="title font-bold">
          반려 동물 동반
        </div>
        <div className="description">
          반려 동물과 함께 여행하는 경우 아래 기준을 확인
          하시어 신청 구간을 선택해주세요.
          <br />
          신청 가능 여부는 예매자 연락처 또는 이메일을 통해
          안내해드립니다.
        </div>
      </S.top>
      <S.middle>
        {hasInputs ? (
          <div className="inputsWrapper">
            <div className="subtitle font-bold">
              신청 구간
            </div>
            <div className="inputs">
              {getCheckboxsElement(inputs)}
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
          <div className="section">
            <div className="subtitle font-bold">
              동반 가능 반려 동물
            </div>
            <div className="detailsWrapper">
              <UnOrderedListLine>
                애완용 개, 고양이, 새 : 생후 8주 이상(기내
                반입) / 생후 16주 이상(위탁 수하물 탑재)
              </UnOrderedListLine>
              <UnOrderedListLine>
                <Fragment>
                  시각, 청각 장애인 안내견을 동반하는 시각
                  장애 고객님의 경우 안내견 무료 운송
                  <div className="line focus">
                    (단, 공인 인증서 소지 및 Harness
                    착용하고, 장애 고객과 동행할 경우에만
                    기내 탑승 가능)
                  </div>
                </Fragment>
              </UnOrderedListLine>
            </div>
          </div>
          <div className="section">
            <div className="subtitle font-bold">
              허용 마리 수
            </div>
            <div className="detailsWrapper">
              <UnOrderedListLine>
                성인 탑승객 1인당 운송용기 1개, 1마리만 운송
                가능(단, 어미와 어린 새끼의 경우, 새 1쌍인
                경우 제외)
              </UnOrderedListLine>
              <UnOrderedListLine>
                성인 탑승객 1인당 운송용기 1개, 1마리만 운송
                가능(단, 어미와 어린 새끼의 경우, 새 1쌍인
                경우 제외)
              </UnOrderedListLine>
            </div>
          </div>
          <div className="section">
            <div className="subtitle font-bold">
              기내 반입 기준
            </div>
            <div className="detailsWrapper">
              <UnOrderedListLine>
                반려동물과 운반 용기의 합이 7kg 이하인 경우
              </UnOrderedListLine>
              <UnOrderedListLine>
                삼변의 길이 합이 100cm 이하이며, 가로 최대
                37cm, 높이는 최대 23cm 이내인 경우
                (하드/소프트 포함)
              </UnOrderedListLine>
              <UnOrderedListLine>
                안전 운항을 위해 반려동물을 운반 용기 밖으로
                꺼내는 행위 엄격히 금지합니다.
              </UnOrderedListLine>
            </div>
          </div>
          <div className="section">
            <div className="subtitle font-bold">
              기내 반입 기준
            </div>
            <div className="detailsWrapper">
              <UnOrderedListLine>
                반려동물과 운반 용기의 합이 7kg 이하인 경우
              </UnOrderedListLine>
              <UnOrderedListLine>
                삼변의 길이 합이 100cm 이하이며, 가로 최대
                37cm, 높이는 최대 23cm 이내인 경우
                (하드/소프트 포함)
              </UnOrderedListLine>
              <UnOrderedListLine>
                안전 운항을 위해 반려동물을 운반 용기 밖으로
                꺼내는 행위 엄격히 금지합니다.
              </UnOrderedListLine>
            </div>
          </div>
          <div className="section">
            <div className="subtitle font-bold">
              위탁 수하물 탑재 기준
            </div>
            <div className="detailsWrapper">
              <UnOrderedListLine>
                반려동물과 운반 용기의 합이 7kg 이하인 경우
              </UnOrderedListLine>
              <UnOrderedListLine>
                삼변의 길이 합이 100cm 이하이며, 가로 최대
                37cm, 높이는 최대 23cm 이내인 경우
                (하드/소프트 포함)
              </UnOrderedListLine>
              <UnOrderedListLine>
                안전 운항을 위해 반려동물을 운반 용기 밖으로
                꺼내는 행위 엄격히 금지합니다.
              </UnOrderedListLine>
            </div>
          </div>
          <div className="section">
            <div className="subtitle font-bold">
              운반 용기 조건
            </div>
            <div className="detailsWrapper">
              <UnOrderedListLine>
                금속, 목재 및 플라스틱 등의 견고한 재질로 된
                용기(기내 반입의 경우 천, 가죽 등 부드러운
                재질도 가능)
              </UnOrderedListLine>
              <UnOrderedListLine>
                잠금 장치가 있고, 비상 시 외부에서 열 수
                있는 용기
              </UnOrderedListLine>
              <UnOrderedListLine>
                반려동물이 움직이는 데 불편함이 없도록
                충분한 공간이 있는 용기
              </UnOrderedListLine>
              <UnOrderedListLine>
                환기구가 있고 방수 처리된 용기
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

SsrModalPet.defaultProps = {};

const S = {
  ...SsrModalS.S2,
  container: styled.div<IStyleProps>`
    .section + .section {
      padding-top: 50px;
    }
    .pet {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .label {
        font-size: 16px;
        font-weight: 600;
        letter-spacing: -0.32px;
      }
      .menuWrapper {
        position: absolute;
        top: 25px;
        right: -21px;
        width: 226px;
        text-align: left;
        padding: 15px 0;
        box-sizing: border-box;
        box-shadow: 7px 7px 7px 0 rgba(0, 0, 0, 0.03);
        border-radius: 12px;
        .item {
          padding: 15px 20px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.28px;
        }
      }
    }
  `,
};

export default SsrModalPet;
