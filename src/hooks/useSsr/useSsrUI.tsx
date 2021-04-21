import {
  flow,
  find,
  get,
  head,
  map,
  filter,
  includes,
  last,
} from 'lodash/fp';
import { PassengerButton } from 'src/components';
import { TabText } from 'src/components';
import {
  useCallback,
  Dispatch,
  SetStateAction,
  useMemo,
} from 'react';
import useSsr from './useSsr';
import passenger from './passenger';
import { IIdLabel } from '@airpremia/core/lib/types';
import { ISsrTrip } from '@airpremia/core/stores/models/ssr';

export interface ISsrModalTabItem {
  /** 여정 id */
  id: string;
  /** 여정 label */
  label: string;
  /** 마감 유무 */
  isClosed: boolean;
  /** 활성화 유무 */
  isActive?: boolean;
}

export interface ISsrModalLeftItem extends IIdLabel {
  /** 선택한 부가서비스 이름 */
  selectedSsrLabel: string | React.ReactElement;
}

export interface ISsrCurrentInput {
  tripLabel: string;
  ssrId: string;
  ssrCode?: string;
  passengerId: string;
  count: number;
  type?: string;
}

export interface ISsrInput {
  id: string;
  ssrCode: string;
  label: string;
  price: number;
  img: string;
  category?: string;
  categoryText?: string;
  description?: string;
}

function useSsrUI() {
  const {
    ssrStore,
    getSsrType,
    getSsrSubType,
    findPassenger,
  } = useSsr();
  const { passengers } = passenger();

  const filterSsrType = (ssrType: string) => (
    list: any,
  ) => {
    switch (ssrType) {
      case 'baggage':
        return flow(filter(['category', 'Baggage']))(list);
      case 'meal':
        return flow(filter(['ssrType', 'Meal']))(list);
    }

    return list;
  };

  /** @deprecated */
  const segmentTabs = useMemo(() => {
    return flow(get('availableSsrs.segment'))(ssrStore);
  }, [ssrStore.availableSsrs.segment]);

  /** @deprecated */
  const legTabs = useMemo(() => {
    return flow(get('availableSsrs.leg'))(ssrStore);
  }, [ssrStore.availableSsrs.leg]);

  /** @deprecated util 함수(getLastId) 이용 */
  const getLastTabId = useCallback((tabs: any) => {
    return flow(last, get('id'))(tabs);
  }, []);

  const leftItems = useMemo(() => {
    return flow(
      map((passenger: any) => {
        return {
          ...passenger,
          selectedSsrLabel: '기본 제공',
        };
      }),
    )(passengers);
  }, [passengers]);

  /** @deprecated */
  const getActivatedTabLabel = useCallback(
    (tabs?: ISsrModalTabItem[], selectedTabId?: string) => {
      return flow(
        find(['id', selectedTabId]),
        get('label'),
      )(tabs);
    },
    [],
  );
  const getActivatedTabIsClosed = ({
    tabs,
    selectedTabId,
  }: {
    tabs?: ISsrModalTabItem[];
    selectedTabId?: string;
  }) => {
    return flow(
      find(['id', selectedTabId]),
      get('isClosed'),
    )(tabs);
  };

  const getTabsElement = ({
    tabs,
    selectedTabId,
    onClick,
  }: {
    tabs?: ISsrTrip[] | ISsrModalTabItem[]; // SsrModalTabItem 지우기
    selectedTabId?: string;
    onClick?: (e: any) => void;
  }) => {
    return flow(
      map((tabItem: ISsrTrip | ISsrModalTabItem) => {
        return (
          <div key={tabItem.id} className="tabWrapper">
            <TabText
              isActive={tabItem.id == selectedTabId}
              value={tabItem.id}
              onClick={onClick}
            >
              {tabItem.label}
            </TabText>
          </div>
        );
      }),
    )(tabs);
  };

  const getLeftItemsElement = ({
    leftItems,
    selectedLeftItemId,
    onClick,
  }: {
    leftItems?: ISsrModalLeftItem[];
    selectedLeftItemId?: string;
    onClick?: (e: any) => void;
  }) => {
    return leftItems?.map((leftItem: ISsrModalLeftItem) => {
      return (
        <div className="buttonWrapper" key={leftItem.id}>
          <PassengerButton
            isActive={leftItem.id == selectedLeftItemId}
            name={leftItem.label}
            label={leftItem.selectedSsrLabel}
            value={leftItem.id}
            onClick={onClick}
          />
        </div>
      );
    });
  };

  const onClickMenuItem = (
    fn: Dispatch<SetStateAction<string>>,
  ) => (e: any) => {
    flow(get('target.dataset.value'), fn)(e);
  };

  const initializeMenuItems = (
    fn: Dispatch<SetStateAction<string>>,
    items?: ISsrModalTabItem[] | ISsrModalLeftItem[],
  ) => {
    flow(head, get('id'), fn)(items);
  };

  const getInputs = useCallback(
    ({
      tripType,
      tripId,
      passengerId,
      ssrType,
    }: {
      /** 여정 정보 */
      tripType: string;
      /** 여정 아이디 */
      tripId: string;
      /** 승객 id */
      passengerId: string;
      /** 부가서비스 타입(카테고리)  */
      ssrType: string;
    }) => {
      return flow(
        get(['availableSsrs', tripType]),
        find(['key', tripId]),
        get('items'),
        filterSsrType(ssrType),
        filter(
          flow(
            get('passengers'),
            map('passengerKey'),
            includes(passengerId),
          ),
        ),
        map((item: any) => {
          return {
            id: findPassenger(item, passengerId, 'ssrKey'),
            ssrCode: item.ssrCode,
            label: item.ssrInfo.title,
            price: findPassenger(
              item,
              passengerId,
              'price',
            ),
            img: item.ssrInfo.imageUrl,
            ssrType: getSsrType(item),
            ssrSubType: getSsrSubType(item),
            ssrSubTypeText: item.categoryText,
            description: item.ssrInfo.description,
          };
        }),
      )(ssrStore);
    },
    [ssrStore.availableSsrs],
  );

  return {
    segmentTabs,
    legTabs,
    leftItems,
    getActivatedTabLabel,
    getActivatedTabIsClosed,
    getTabsElement,
    getLeftItemsElement,
    onClickMenuItem,
    initializeMenuItems,
    getInputs,
    getLastTabId,
  };
}

export default useSsrUI;
