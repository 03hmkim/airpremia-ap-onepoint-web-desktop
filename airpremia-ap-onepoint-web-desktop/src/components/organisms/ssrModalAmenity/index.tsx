import { flow, filter, map } from 'lodash/fp';
import styled from 'styled-components';
import { SsrModalS } from 'src/styles/common';
import { useSsr } from 'src/hooks';
import {
  ClosedInfo,
  Checkbox,
  WarningList,
  SsrInputCheckboxRadio,
} from 'src/components';
import { TaskButton } from 'src/components';
import {
  Fragment,
  useState,
  useMemo,
  useEffect,
} from 'react';
import { commaNumber } from '@airpremia/core/lib/util';
import { ESsrInputType } from 'src/components/molecules/ssrInputCheckboxRadio';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';
import {
  ISsrModalTabItem,
  ISsrModalLeftItem,
} from 'src/hooks/useSsr/useSsrUI';

export interface ISsrModalAmenityInput {
  /** 편의용품 타입 */
  amenityType: string;
  /** 수하물 id */
  id: string;
  /** 선택 label */
  label: string;
  /** 설명 */
  description: string;
  /** 비용 */
  price: number;
  /** thumbnail image url string */
  img?: string;
  /** 선택 유무 */
  isActive: boolean;
}

interface IStyleProps {}
interface IProps extends IStyleProps {
  tabs?: ISsrModalTabItem[];
  leftItems?: ISsrModalLeftItem[];
  /** 입력 리스트 */
  inputs?: ISsrModalAmenityInput[];
  /** 추가 총 금액 */
  total?: number;
  /** 버튼 라벨 */
  buttonLabel?: string;
  /** 일괄 적용 event */
  onAdoptToAllPassengers?: () => void;
  /** 버튼 event */
  onClickButton?: () => void;
}

function SsrModalAmenity({
  tabs,
  leftItems,
  inputs,
  total,
  buttonLabel,
  onAdoptToAllPassengers,
  onClickButton,
}: IProps) {
  const {
    getTabsElement,
    getLeftItemsElement,
    getActivatedTabIsClosed,
    getActivatedTabLabel,
    onClickMenuItem,
    initializeMenuItems,
  } = useSsr();
  const [selectedTabId, setSelectedTabId] = useState<
    string
  >('');
  const [
    selectedLeftItemId,
    setSelectedLeftItemId,
  ] = useState<string>('');

  const closedTitle = `${getActivatedTabLabel(
    tabs,
    selectedTabId,
  )} 기내 편의 용품 신청이 마감되었습니다.`;
  const closedDescription = (
    <div>
      기내 편의 용품 신청은 출발 24시간전까지 가능합니다.
      <br />
      추가 신청은 기내 탑승 후 진행해주세요.
    </div>
  );
  const getInputsElement = (
    inputs?: ISsrModalAmenityInput[],
    amenityType?: string,
  ) => {
    return flow(
      filter(['amenityType', amenityType]),
      map((amenityInput: ISsrModalAmenityInput) => {
        const props = {
          inputType: ESsrInputType.CHECKBOX,
          isActive: amenityInput.isActive,
          image: amenityInput.img,
          value: amenityInput.id,
          name: amenityInput.label,
          description: amenityInput.description,
          price: amenityInput.price,
        };
        return (
          <div
            key={amenityInput.id}
            className="inputWrapper"
          >
            <SsrInputCheckboxRadio {...props} />
          </div>
        );
      }),
    )(inputs);
  };
  const warningDescriptions = [
    '출발 24시간 전 까지 기내 편의 용품 추가/변경이 가능합니다.',
    '해외 출발편의 경우 현지 사정에 따라 선택한 기내 편의용품의 제공이 어려울 수 있습니다.',
  ];

  const hasTotal = useMemo(() => !!total, [total]);

  useEffect(() => {
    initializeMenuItems(setSelectedTabId, tabs);
  }, [tabs]);
  useEffect(() => {
    initializeMenuItems(setSelectedLeftItemId, leftItems);
  }, [leftItems]);

  return (
    <S.container>
      <S.top>
        <div className="title font-bold">
          기내 편의용품 선택
        </div>
        <div className="tabsWrapper">
          {getTabsElement({
            tabs,
            selectedTabId,
            onClick: onClickMenuItem(setSelectedTabId),
          })}
        </div>
      </S.top>
      <S.middle>
        {getActivatedTabIsClosed({
          tabs,
          selectedTabId,
        }) ? (
          <ClosedInfo
            title={closedTitle}
            description={closedDescription}
          />
        ) : (
          <div className="innerWrapper">
            <div className="left">
              {getLeftItemsElement({
                leftItems,
                selectedLeftItemId,
                onClick: onClickMenuItem(
                  setSelectedLeftItemId,
                ),
              })}
            </div>
            <div className="right">
              <div className="inputsWrapper">
                <div className="default">
                  <div className="title font-bold">
                    기본 제공
                  </div>
                  <div className="inputs">
                    {getInputsElement(inputs, 'default')}
                  </div>
                </div>
                <div className="pay">
                  <div className="title font-bold">
                    유료 대여/구매
                  </div>
                  <div className="inputs">
                    {getInputsElement(inputs, 'pay')}
                  </div>
                </div>
              </div>
              <div className="adoptAllWrapper">
                <Checkbox
                  isActive={false}
                  onChange={onAdoptToAllPassengers}
                >
                  <span>모든 탑승객에 적용</span>
                </Checkbox>
              </div>
              <div className="noticeWrapper">
                <div className="warningListWrapper">
                  <WarningList
                    title="유의사항"
                    descriptions={warningDescriptions}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </S.middle>
      <S.bottom>
        <div className="priceWrapper">
          {hasTotal && (
            <Fragment>
              <div className="label">추가 금액</div>
              <div className="value">
                {commaNumber(total)} 원
              </div>
            </Fragment>
          )}
        </div>
        <div className="buttonWrapper">
          <TaskButton onClick={onClickButton}>
            {buttonLabel}
          </TaskButton>
        </div>
      </S.bottom>
    </S.container>
  );
}

SsrModalAmenity.defaultProps = {};

const S = {
  ...SsrModalS.S1,
  container: styled.div<IStyleProps>`
    .inputsWrapper {
      .pay {
        padding-top: 80px;
      }
      .title {
        font-size: 18px;
        letter-spacing: -0.36px;
        color: ${DARK_GRAY1};
      }
      .inputs {
        padding-top: 25px;
      }
    }
    .adoptAllWrapper {
      display: flex;
      justify-content: flex-end;
      padding: 30px 21px 0 0;
    }
  `,
};

export default SsrModalAmenity;
