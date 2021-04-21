import {
  flow,
  map,
  filter,
  get,
  find,
  flatten,
  some,
  concat,
  sum,
  compact,
  head,
} from 'lodash/fp';
import styled from 'styled-components';
import {
  FC,
  Fragment,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { ISsrModalBaggageInput } from '../ssrModalBaggage';
import { SsrModalS } from 'src/styles/common';
import { useSsr } from 'src/hooks';
import {
  ClosedInfo,
  WarningList,
  MealAccordion,
} from 'src/components';
import { TaskButton } from 'src/components';
import SvgInfo from 'public/images/btn_info.svg';
import { commaNumber } from '@airpremia/core/lib/util';
import {
  ISsrRequestItem,
  ISsrHistory,
} from 'src/hooks/useSsr/useSsr';
import {
  ISsrCurrentInput,
  ISsrInput,
} from 'src/hooks/useSsr/useSsrUI';
import SsrInputCheckboxRadio, {
  ESsrInputType,
} from 'src/components/molecules/ssrInputCheckboxRadio';
import {
  DARK_BLUE1,
  WHITE1,
} from '@airpremia/cdk/styles/colors';

export interface ISsrModalMealInput
  extends ISsrModalBaggageInput {
  /** 기내식(meal) or 간식(snack) */
  mealType: string;
  /** 항목 설명 */
  description?: string;
  /** 특별 기내식 TODO 추후 데이터 구조 나오면 변경  */
  isSpecial?: boolean;
}

interface IStyleProps {}
interface IProps extends IStyleProps {
  /** 선택 완료 버튼 event */
  onSubmit?: (submitIds: ISsrRequestItem[] | []) => void;
}

const SsrModalMeal: FC<IProps> = ({ onSubmit }) => {
  const {
    legTabs,
    getTabsElement,
    getLeftItemsElement,
    getActivatedTabIsClosed,
    getActivatedTabLabel,
    onClickMenuItem,
    initializeMenuItems,
    getInputs,
    histories,
    getTripLabel,
    getPrice,
    getLastTabId,
    passengers,
    getSsrLabel,
  } = useSsr();
  const [selectedTabId, setSelectedTabId] = useState<
    string
  >('');
  const [
    selectedLeftItemId,
    setSelectedLeftItemId,
  ] = useState<string>('');
  const selectedTripLabel = useMemo(() => {
    return getTripLabel(selectedTabId);
  }, [selectedTabId]);
  const mealHistories = useMemo(() => {
    return flow(filter(['ssrType', 'meal']))(histories);
  }, [histories]);

  const getSsrCodeInHistories = useCallback(
    (tripLabel: string, passengerId: string) => {
      return flow(
        find((history: ISsrHistory) => {
          return (
            history.tripLabel == tripLabel &&
            history.passengerId == passengerId
          );
        }),
        get('ssrCode'),
        (result) => {
          return result ? result : 'default';
        },
      )(mealHistories);
    },
    [mealHistories],
  );

  const initialzedCurrentInputs = flow(
    map((tab: any) => {
      return flow(
        map((leftItem: any) => {
          return {
            tripLabel: tab.label,
            passengerId: leftItem.id,
            ssrCode: getSsrCodeInHistories(
              tab.label,
              leftItem.id,
            ),
            count: 1,
            ssrId: '',
          };
        }),
      )(passengers);
    }),
    flatten,
  )(legTabs);

  const [ssrCurrentInputs, setSsrCurrentInputs] = useState<
    ISsrCurrentInput[]
  >(initialzedCurrentInputs);

  const [activedAccordion, setActivedAccordion] = useState<
    string
  >('Standard');

  const getLeftItemLabel = useCallback(
    (passengerId: string) => {
      const label = flow(
        find((input: ISsrCurrentInput) => {
          return (
            input.tripLabel == selectedTripLabel &&
            input.passengerId == passengerId
          );
        }),
        get('ssrCode'),
        getSsrLabel,
        (label: string) => {
          return label ? label : '기본 기내식';
        },
      )(ssrCurrentInputs);

      return (
        <Fragment>
          <span
            className={
              label == '기본 기내식' ? '' : 'orange'
            }
          >
            {label}
          </span>
        </Fragment>
      );
    },
    [selectedTabId, ssrCurrentInputs],
  );

  const leftItems = useMemo(() => {
    return flow(
      map((passenger: any) => {
        return {
          ...passenger,
          selectedSsrLabel: (
            <Fragment>
              {getLeftItemLabel(passenger.id)}
            </Fragment>
          ),
        };
      }),
    )(passengers);
  }, [selectedTabId, passengers, ssrCurrentInputs]);

  const changeActivedAccordion = (
    payload: string,
  ) => () => {
    if (activedAccordion == payload)
      setActivedAccordion('');
    else setActivedAccordion(payload);
  };

  const updateCurrentInputs = useCallback(
    ({
      ssrCode,
      ssrId,
    }: {
      ssrCode?: string;
      ssrId: string;
    }) => () => {
      const result = flow(
        filter((input: ISsrCurrentInput) => {
          return !(
            input.tripLabel == selectedTripLabel &&
            input.passengerId == selectedLeftItemId
          );
        }),
        concat({
          tripLabel: selectedTripLabel,
          ssrId,
          ssrCode,
          passengerId: selectedLeftItemId,
          count: 1,
        }),
      )(ssrCurrentInputs);

      setSsrCurrentInputs(result);
    },
    [selectedTabId, selectedLeftItemId, ssrCurrentInputs],
  );

  const getInputsDataset = useMemo(() => {
    return getInputs({
      tripType: 'leg',
      tripId: selectedTabId,
      passengerId: selectedLeftItemId,
      ssrType: 'meal',
    });
  }, [selectedTabId, selectedLeftItemId]);

  const hasCurrentInputs = useCallback(
    (ssrCode: string) => {
      return flow(
        some((input: ISsrCurrentInput) => {
          return (
            input.ssrCode == ssrCode &&
            input.tripLabel == selectedTripLabel &&
            input.passengerId == selectedLeftItemId
          );
        }),
      )(ssrCurrentInputs);
    },
    [selectedTabId, selectedLeftItemId, ssrCurrentInputs],
  );

  const getInputsElement = useMemo(() => {
    const ssrSubTypes = [
      'Standard', // 일반식
      'ChildInfant', // 소아/유아식
      'VegetarianFruit', // 채식/과일
      'Religious', // 종교식
      'Diet', // 식이요법식
    ];

    const addStandardDefault = (ssrSubType: string) => (
      list: any,
    ) => {
      if (ssrSubType == 'Standard') {
        return [
          {
            ssrCode: 'default',
            label: '기본 기내식',
            description: '에어프레미아의 기본 기내식',
          },
          ...list,
        ];
      } else {
        return list;
      }
    };

    return flow(
      map((ssrSubType: string) => {
        const ssrSubTypeText = flow(
          find(['ssrSubType', ssrSubType]),
          get('ssrSubTypeText'),
        )(getInputsDataset);
        const getRadios = flow(
          filter(['ssrSubType', ssrSubType]),
          addStandardDefault(ssrSubType),
          map((item: ISsrInput) => {
            return (
              <div
                key={item.ssrCode}
                className="inputWrapper"
              >
                <SsrInputCheckboxRadio
                  inputType={ESsrInputType.RADIO}
                  isActive={hasCurrentInputs(item.ssrCode)}
                  value={item.ssrCode}
                  name={item.label}
                  description={item.description}
                  price={item.price}
                  onClick={updateCurrentInputs({
                    ssrCode: item.ssrCode,
                    ssrId: item.id,
                  })}
                />
              </div>
            );
          }),
        )(getInputsDataset);

        return (
          <Fragment key={ssrSubType}>
            <MealAccordion
              isOpen={activedAccordion == ssrSubType}
              title={ssrSubTypeText}
              onClick={changeActivedAccordion(ssrSubType)}
            >
              <Fragment>{getRadios}</Fragment>
            </MealAccordion>
          </Fragment>
        );
      }),
    )(ssrSubTypes);
  }, [
    getInputsDataset,
    ssrCurrentInputs,
    activedAccordion,
  ]);

  const getSsrCodeCurrentInput = useMemo(() => {
    return flow(
      find((input: ISsrCurrentInput) => {
        return (
          input.tripLabel == selectedTripLabel &&
          input.passengerId == selectedLeftItemId
        );
      }),
      get('ssrCode'),
    )(ssrCurrentInputs);
  }, [selectedTabId, selectedLeftItemId, ssrCurrentInputs]);

  const getSsrSubType = useCallback(
    (ssrCode: string) => {
      if (ssrCode == 'default') return 'Standard';

      return flow(
        find(['ssrCode', ssrCode]),
        get('ssrSubType'),
      )(getInputsDataset);
    },
    [getInputsDataset],
  );

  const closedTitle = `${getActivatedTabLabel(
    legTabs,
    selectedTabId,
  )} 기내식 추가 신청이 마감되었습니다.`;
  const closedDescription = (
    <div>
      기내식 신청은 출발 72시간 전까지,
      <br />
      유료 간식/주류 신청은 24시간 전까지 가능합니다.
      <br />
      유료 간식/주류 추가 신청은 기내 탑승 후 승무원에게
      문의해주세요.
    </div>
  );

  const warningDescriptions = [
    '기내식 선택 신청은 출발 72시간 전까지, 간식/주류 신청은 출발 24시간 전까지 가능합니다.',
    '해외 출발편의 경우 현지 사정에 따라 선택한 기내식의 제공이 어려울 수 있습니다.',
  ];

  const total = useMemo(() => {
    return flow(
      map((input: ISsrCurrentInput) => {
        return getPrice({
          ssrCode: input.ssrCode ? input.ssrCode : '',
          passengerId: input.passengerId,
          count: input.count,
        });
      }),
      sum,
    )(ssrCurrentInputs);
  }, [ssrCurrentInputs]);
  const hasTotal = useMemo(() => !!total, [total]);

  const isLastTabId = useMemo(() => {
    return selectedTabId == getLastTabId(legTabs);
  }, [selectedTabId, legTabs]);

  const onSameApplyNextTab = () => {};
  const onNextTab = useCallback(() => {
    setSelectedTabId(getLastTabId(legTabs));
  }, []);

  const onComplete = () => {
    if (typeof onSubmit != 'function') return;

    const result = flow(
      map((input: ISsrCurrentInput) => {
        const sameHistory: ISsrHistory = flow(
          find((history: ISsrHistory) => {
            return (
              history.tripLabel == input.tripLabel &&
              history.passengerId == input.passengerId
            );
          }),
        )(mealHistories);

        // history에 여정과 승객이 같은 아이템 있다면
        if (sameHistory) {
          // 다른 ssr를 선택했다면
          if (input.ssrCode != sameHistory.ssrCode) {
            let addItem = undefined;
            const deleteItem = {
              type: 'delete',
              ssrId: flow(get('ssrIds'), head)(sameHistory),
            };
            // 기본 기내식 제외 다른 기내식으로 선택한 경우만 add
            if (input.ssrCode != 'default') {
              addItem = {
                type: 'add',
                ssrId: input.ssrId,
              };
            } else {
              // 기본 기내식은 아무것도 add 하지 않는다
            }
            // delete, add 둘다 넣기
            return [addItem, deleteItem];
          } else {
            // 아무것도 하지 않기
          }
        } else {
          // default 제외 하고 add 넣기
          if (input.ssrCode !== 'default') {
            return {
              type: 'add',
              ssrId: input.ssrId,
            };
          } else {
            return undefined;
          }
        }
      }),
      flatten,
      compact,
      map((input: any) => {
        return {
          ...input,
          count: 1,
        };
      }),
    )(ssrCurrentInputs);
    onSubmit(result);
  };

  useEffect(() => {
    initializeMenuItems(setSelectedTabId, legTabs);
    initializeMenuItems(setSelectedLeftItemId, leftItems);
  }, []);

  useEffect(() => {
    flow(getSsrSubType, (ssrSubType: string) => {
      if (activedAccordion != ssrSubType) {
        changeActivedAccordion(ssrSubType)();
      }
    })(getSsrCodeCurrentInput);
  }, [selectedTabId, selectedLeftItemId]);

  return (
    <S.container>
      <S.top>
        <div className="title font-bold">기내식 선택</div>
        <div className="tabsWrapper">
          {getTabsElement({
            tabs: legTabs,
            selectedTabId,
            onClick: onClickMenuItem(setSelectedTabId),
          })}
        </div>
      </S.top>
      <S.middle>
        {getActivatedTabIsClosed({
          tabs: legTabs,
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
              <div className="infoWrapper">
                <SvgInfo />
                <span>
                  해외 출발편의 경우 현지 사정에 따라 선택한
                  기내식의 제공이 어려울 수 있습니다.
                </span>
              </div>
              <div className="inputsWrapper">
                {getInputsElement}
              </div>
              <div className="noticeWrapper">
                <div className="warningListWrapper">
                  <WarningList
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
        <div className="buttonsWrapper">
          {!isLastTabId && (
            <Fragment>
              <div className="buttonWrapper">
                <TaskButton
                  border={`solid 1px ${DARK_BLUE1}`}
                  backgroundColor={WHITE1}
                  color={DARK_BLUE1}
                  onClick={onSameApplyNextTab}
                >
                  오는 편 동일 적용
                </TaskButton>
              </div>
              <div className="buttonWrapper">
                <TaskButton onClick={onNextTab}>
                  오는 편 선택
                </TaskButton>
              </div>
            </Fragment>
          )}
          {isLastTabId && (
            <div className="buttonWrapper">
              <TaskButton onClick={onComplete}>
                선택 완료
              </TaskButton>
            </div>
          )}
        </div>
      </S.bottom>
    </S.container>
  );
};

SsrModalMeal.defaultProps = {};

const S = {
  ...SsrModalS.S1,
  container: styled.div<IStyleProps>`
    .adoptAllWrapper {
      display: flex;
      justify-content: flex-end;
      padding-right: 21px;
    }
    .infoWrapper {
      display: flex;
      align-items: center;
      span {
        line-height: 1.69;
        font-size: 13px;
        padding-left: 6px;
        letter-spacing: -1.1px;
      }
    }
    .inputsWrapper {
      padding-top: 30px;
    }
  `,
};

export default SsrModalMeal;
