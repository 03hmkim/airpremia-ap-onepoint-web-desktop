import styled from 'styled-components';
import { SsrModalS } from 'src/styles/common';
import {
  ClosedInfo,
  Checkbox,
  WarningList,
  SsrInputWifi,
} from 'src/components';
import { TaskButton } from 'src/components';
import {
  Fragment,
  useMemo,
  useState,
  useEffect,
} from 'react';
import { commaNumber } from '@airpremia/core/lib/util';
import { useSsr } from 'src/hooks';
import {
  ISsrModalTabItem,
  ISsrModalLeftItem,
} from 'src/hooks/useSsr/useSsrUI';

export interface ISsrModalWifiInput {
  id: string;
  price: number;
  img: React.ReactElement | string;
  isActive: boolean;
}

interface IStyleProps {}
interface IProps extends IStyleProps {
  tabs?: ISsrModalTabItem[];
  leftItems?: ISsrModalLeftItem[];
  /** 입력 리스트 */
  inputs?: ISsrModalWifiInput[];
  /** 추가 총 금액 */
  total?: number;
  /** 버튼 라벨 */
  buttonLabel?: string;
  /** 일괄 적용 event */
  onAdoptToAllPassengers?: () => void;
  /** 버튼 event */
  onClickButton?: () => void;
}

function SsrModalWifi({
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
  )} Wi-Fi 신청이 마감되었습니다.`;
  const closedDescription = (
    <div>
      와이파이 신청은 출발 24시간전까지 가능합니다.
      <br />
      추가 신청은 기내 탑승 후 진행해주세요.
    </div>
  );
  const warningDescriptions = [
    '출발 24시간 전 까지 와이파이 변경이 가능합니다.',
  ];
  const getInputsElement = (
    inputs?: ISsrModalWifiInput[],
  ) => {
    return inputs?.map((input: ISsrModalWifiInput) => {
      return (
        <div key={input.id} className="inputWrapper">
          <div key={input.id} className="inputWrapper">
            <SsrInputWifi
              isActive={input.isActive}
              image={input.img}
              value={input.id}
              price={input.price}
            />
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    initializeMenuItems(setSelectedTabId, tabs);
  }, [tabs]);
  useEffect(() => {
    initializeMenuItems(setSelectedLeftItemId, leftItems);
  }, [leftItems]);

  // TODO useSsrUI 로 옮기는 것 고민
  const hasTotal = useMemo(() => !!total, [total]);

  return (
    <S.container>
      <S.top>
        <div className="title font-bold">
          기내 와이파이 신청
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
                {getInputsElement(inputs)}
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

SsrModalWifi.defaultProps = {};

// TODO .adoptAllWrapper 필요한지 확인
const S = {
  ...SsrModalS.S1,
  container: styled.div<IStyleProps>`
    .adoptAllWrapper {
      display: flex;
      justify-content: flex-end;
      padding: 30px 21px 0 0;
    }
  `,
};

export default SsrModalWifi;
