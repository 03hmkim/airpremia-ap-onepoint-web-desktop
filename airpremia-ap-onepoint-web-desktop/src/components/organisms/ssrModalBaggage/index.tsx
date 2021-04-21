import {
  flow,
  find,
  concat,
  get,
  filter,
  map,
  join,
  sum,
  take,
  flatten,
} from 'lodash/fp';
import styled from 'styled-components';
import { SsrModalS } from 'src/styles/common';
import { useSsr } from 'src/hooks';
import {
  ClosedInfo,
  WarningList,
  SsrInputBaggage,
} from 'src/components';
import { TaskButton } from 'src/components';
import {
  Fragment,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { commaNumber } from '@airpremia/core/lib/util';
import {
  DARK_BLUE1,
  WHITE1,
} from '@airpremia/cdk/styles/colors';
import {
  ISsrHistory,
  ISsrRequestItem,
} from 'src/hooks/useSsr/useSsr';
import {
  ISsrCurrentInput,
  ISsrModalLeftItem,
} from 'src/hooks/useSsr/useSsrUI';

// TODO deprecated. useSsrUI.tsx 에 같은 것이 있으니 추후 제거
export interface ISsrModalBaggageInput {
  /** 수하물 id */
  id: string;
  ssrCode?: string;
  /** 선택 label */
  label?: string;
  /** 비용 */
  price?: number;
  /** thumbnail image url string */
  img?: string;
  /** 선택 유무 */
  isActive?: boolean;
}

interface IStyleProps {}

interface IProps extends IStyleProps {
  /** 선택 완료 버튼 event */
  onSubmit?: (submitIds: ISsrRequestItem[]) => void;
}

function SsrModalBaggage({ onSubmit }: IProps) {
  const {
    segmentTabs,
    getTabsElement,
    getLeftItemsElement,
    getActivatedTabIsClosed,
    getActivatedTabLabel,
    onClickMenuItem,
    initializeMenuItems,
    getSsrLastLabel,
    getInputs,
    getLastTabId,
    histories,
    getTripLabel,
    getPrice,
    passengers,
  } = useSsr();

  const [selectedTabId, setSelectedTabId] = useState<
    string
  >('');
  const selectedTripLabel = useMemo(() => {
    return getTripLabel(selectedTabId);
  }, [selectedTabId]);
  const [
    selectedLeftItemId,
    setSelectedLeftItemId,
  ] = useState<string>('');

  const baggageHistories = useMemo(() => {
    return flow(filter(['ssrType', 'baggage']))(histories);
  }, [histories]);

  const [ssrCurrentInputs, setSsrCurrentInputs] = useState<
    ISsrCurrentInput[]
  >(
    baggageHistories.map((history: ISsrHistory) => {
      return {
        tripLabel: history.tripLabel,
        passengerId: history.passengerId,
        ssrCode: history.ssrCode,
        count: history.count,
        ssrId: '',
      };
    }),
  );

  // TODO 기내식 코드와 동일. 추후 useSsr로 이관 생각중
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

  const getCount = useCallback(
    (ssrCode?: string) => {
      const result = flow(
        find((input: ISsrCurrentInput) => {
          return (
            input.tripLabel == selectedTripLabel &&
            input.passengerId == selectedLeftItemId &&
            input.ssrCode == ssrCode
          );
        }),
        get('count'),
      )(ssrCurrentInputs);

      if (!result) return 0;

      return result;
    },
    [selectedTabId, selectedLeftItemId, ssrCurrentInputs],
  );

  const updateCurrentInputs = useCallback(
    ({
      ssrCode,
      ssrId,
      tripLabel,
      passengerId,
    }: {
      ssrCode?: string;
      ssrId: string;
      tripLabel: string;
      passengerId: string;
    }) => (count?: number) => {
      const findObj = flow(
        find((input: ISsrCurrentInput) => {
          return (
            input.tripLabel == tripLabel &&
            input.passengerId == passengerId &&
            input.ssrCode == ssrCode
          );
        }),
      )(ssrCurrentInputs);
      const countLocal = count ? count : 0;

      let result: ISsrCurrentInput[];
      const payload = {
        tripLabel,
        ssrId,
        ssrCode,
        passengerId,
        count: countLocal,
      };
      if (!findObj) {
        result = [...ssrCurrentInputs, payload];
      } else {
        result = flow(
          filter((ssrData: ISsrCurrentInput) => {
            return !(
              ssrData.tripLabel == tripLabel &&
              ssrData.ssrCode == ssrCode &&
              ssrData.passengerId == passengerId
            );
          }),
          concat(payload),
        )(ssrCurrentInputs);
      }
      setSsrCurrentInputs(result);
    },
    [ssrCurrentInputs],
  );

  const closedTitle = `${getActivatedTabLabel(
    segmentTabs,
    selectedTabId,
  )} 위탁 수하물 추가 신청이 마감되었습니다.`;
  const closedDescription = (
    <div>
      수하물 신청은 출발 24시간 전까지 가능합니다.
      <br />
      추가 문의는 공항 내 체크인 카운터에서 진행해주세요.
    </div>
  );

  const getInputsDataset = useMemo(() => {
    return getInputs({
      tripType: 'segment',
      tripId: selectedTabId,
      passengerId: selectedLeftItemId,
      ssrType: 'baggage',
    });
  }, [selectedTabId, selectedLeftItemId]);

  const getInputsElement = useMemo(() => {
    return getInputsDataset?.map(
      (input: ISsrModalBaggageInput) => {
        return (
          <div key={input.id} className="inputWrapper">
            <SsrInputBaggage
              id={input.id}
              imgUrl={input.img}
              label={input.label}
              price={input.price}
              count={getCount(input.ssrCode)}
              min={0}
              onChange={updateCurrentInputs({
                ssrCode: input.ssrCode,
                ssrId: input.id,
                tripLabel: selectedTripLabel,
                passengerId: selectedLeftItemId,
              })}
            />
          </div>
        );
      },
    );
  }, [getInputsDataset, ssrCurrentInputs]);

  // TODO hook 으로 이관해야하는지
  const getLeftItemLabel = useCallback(
    (passengerId: string) => {
      const filtered = flow(
        filter((input: ISsrCurrentInput) => !!input.count),
        filter(['tripLabel', selectedTripLabel]),
        filter(['passengerId', passengerId]),
      )(ssrCurrentInputs);

      if (!filtered.length) return '';

      const concatLabel: string[] = flow(
        map((input: ISsrCurrentInput) => {
          return `${getSsrLastLabel(input.ssrCode)} ${
            input.count
          }개`;
        }),
      )(filtered);

      const result = (
        <Fragment>
          <span>&nbsp;+&nbsp;</span>
          <span className="orange">
            {flow(join(', '))(concatLabel)}
          </span>
        </Fragment>
      );

      return result;
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
              기본 제공{getLeftItemLabel(passenger.id)}
            </Fragment>
          ),
        };
      }),
    )(passengers);
  }, [selectedTabId, passengers, ssrCurrentInputs]);

  const warningDescriptions: string[] = [
    '위탁 수하물 1개당 최대 무게는 23KG이며, 가로, 세로, 높이의 합이 158cm를 초과할 수 없습니다.',
    '사전 위탁 수하물 구매 후 최초 출발 시간 기준 24시간 전부터는 환불이 불가합니다.',
    '현장에서 위탁 수하물을 구매하는 경우 온라인 사전 구매의 할인율이 적용되지 않습니다.',
  ];

  const isLastTabId = useMemo(() => {
    return selectedTabId == getLastTabId(segmentTabs);
  }, [selectedTabId, segmentTabs]);

  // TODO useCallback
  const onComplete = () => {
    if (typeof onSubmit != 'function') return;

    const ssrIds = flow(
      map((input: ISsrCurrentInput) => {
        const sameHistory: ISsrHistory = flow(
          find((history: ISsrHistory) => {
            return (
              history.tripLabel == input.tripLabel &&
              history.passengerId == input.passengerId &&
              history.ssrCode == input.ssrCode
            );
          }),
        )(baggageHistories);

        // 같은 애가 있으면
        if (sameHistory) {
          return {
            ...input,
            type: 'add',
            count: input.count - sameHistory.count,
          };
        } else {
          return {
            ...input,
            type: 'add',
          };
        }
      }),
      filter((input: ISsrRequestItem) => input.count != 0),
    )(ssrCurrentInputs);

    const addSsrIds = flow(
      filter((input: ISsrRequestItem) => input.count > 0),
      map((input: ISsrRequestItem) => {
        return {
          ssrId: input.ssrId,
          type: input.type,
          count: input.count,
        };
      }),
    )(ssrIds);

    const deleteSsrIds = flow(
      filter((input: ISsrRequestItem) => input.count < 0),
      map((input: any) => {
        const sameHistory: ISsrHistory = flow(
          find((history: ISsrHistory) => {
            return (
              history.tripLabel == input.tripLabel &&
              history.passengerId == input.passengerId &&
              history.ssrCode == input.ssrCode
            );
          }),
        )(baggageHistories);
        return flow(
          get('ssrIds'),
          take(Math.abs(input.count)),
        )(sameHistory);
      }),
      flatten,
      map((ssrId: string) => {
        return {
          count: 1,
          ssrId,
          type: 'delete',
        };
      }),
    )(ssrIds);

    const merged = [...addSsrIds, ...deleteSsrIds];

    onSubmit(merged);
  };

  const isMultiPassenger = useMemo(() => {
    return !!leftItems.length;
  }, [leftItems]);

  const onAdoptToAllPassengers = useCallback(() => {
    // 현재 여정인 애들 지우기
    const filteredInputs = flow(
      filter((input: ISsrCurrentInput) => {
        return input.tripLabel != selectedTripLabel;
      }),
    )(ssrCurrentInputs);

    const currentInputs = flow(
      filter(['tripLabel', selectedTripLabel]),
      filter(['passengerId', selectedLeftItemId]),
    )(ssrCurrentInputs);

    const newInputs = flow(
      map((passenger: ISsrModalLeftItem) => {
        const inputDataset = getInputs({
          tripType: 'segment',
          tripId: selectedTabId,
          passengerId: passenger.id,
          ssrType: 'baggage',
        });

        const changed = flow(
          map((input: ISsrCurrentInput) => {
            const ssrId = flow(
              find(['ssrCode', input.ssrCode]),
              get('id'),
            )(inputDataset);
            return {
              ...input,
              ssrId,
              passengerId: passenger.id,
            };
          }),
        )(currentInputs);

        return changed;
      }),
      flatten,
    )(passengers);

    setSsrCurrentInputs([...filteredInputs, ...newInputs]);
  }, [
    passengers,
    selectedTripLabel,
    selectedLeftItemId,
    ssrCurrentInputs,
  ]);

  const onSameApplyNextTab = useCallback(() => {
    // 현재 오는날에 있는 애들 다 지우기
    const filteredInputs = flow(
      filter((input: ISsrCurrentInput) => {
        return !(
          input.tripLabel != selectedTripLabel &&
          input.passengerId == selectedLeftItemId
        );
      }),
    )(ssrCurrentInputs);

    // 현재 가는날 것들을 오는날로 채우기
    const inputDataset = getInputs({
      tripType: 'segment',
      tripId: getLastTabId(segmentTabs),
      passengerId: selectedLeftItemId,
      ssrType: 'baggage',
    });

    const newInputs = flow(
      filter(['passengerId', selectedLeftItemId]),
      filter(['tripLabel', selectedTripLabel]),
      map((input: ISsrCurrentInput) => {
        const ssrId = flow(
          find(['ssrCode', input.ssrCode]),
          get('id'),
        )(inputDataset);
        return {
          ...input,
          ssrId,
          tripLabel: getTripLabel(
            getLastTabId(segmentTabs),
          ),
        };
      }),
    )(ssrCurrentInputs);

    setSsrCurrentInputs([...filteredInputs, ...newInputs]);
  }, [
    selectedTripLabel,
    selectedLeftItemId,
    ssrCurrentInputs,
  ]);
  const onNextTab = useCallback(() => {
    setSelectedTabId(getLastTabId(segmentTabs));
  }, []);

  useEffect(() => {
    initializeMenuItems(setSelectedTabId, segmentTabs);
    initializeMenuItems(setSelectedLeftItemId, leftItems);
  }, []);

  return (
    <S.container>
      <S.top>
        <div className="title font-bold">
          위탁 수하물 추가
        </div>
        <div className="tabsWrapper">
          {getTabsElement({
            tabs: segmentTabs,
            selectedTabId,
            onClick: onClickMenuItem(setSelectedTabId),
          })}
        </div>
      </S.top>
      <S.middle>
        {getActivatedTabIsClosed({
          tabs: segmentTabs,
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
                <div className="default inputWrapper">
                  <SsrInputBaggage
                    isDefault={true}
                    label="무료 위탁 수하물 23kg"
                  />
                </div>
                {getInputsElement}
              </div>
              <div className="ruleLinkWrapper">
                <button className="ruleLink">
                  수하물 규정보기
                </button>
                {isMultiPassenger && (
                  <div className="adoptAllWrapper">
                    <button
                      onClick={onAdoptToAllPassengers}
                    >
                      모든 탑승객에 적용
                    </button>
                  </div>
                )}
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
}

SsrModalBaggage.defaultProps = {};

const S = {
  ...SsrModalS.S1,
  container: styled.div<IStyleProps>``,
};
export default SsrModalBaggage;
