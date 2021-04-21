import {
  useState,
  useCallback,
  useEffect,
  useMemo,
  Fragment
} from 'react';
import { flow, map, get } from 'lodash/fp';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useBooking, useLoading } from '@airpremia/core/hooks';
import {
  TicketPayConfirm,
  FlightSummaryWithTotal,
  Ticket,
  ButtonLink2Type4,
  NewModal,
  PopupTitle,
  TaskButton,
  TicketPayPopDetailedCost,
} from 'src/components';

import { Tag, Title } from 'src/components';
import { TabDataRule } from 'src/components';
import { EScrollType } from 'src/components/templates/centerPopup';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  // ORANGE2
} from '@airpremia/cdk/styles/colors';
import { useScroll } from '@airpremia/core/hooks';
import { useBookingLocal, useModal } from 'src/hooks';

interface IStyleProps {}
interface IProps extends IStyleProps {}

function Confirm({}: IProps) {
  const { upScroll } = useScroll();
  const { 
    getTicket, 
  } = useBookingLocal();
  const { onLoadBookingSessionSearch } = useBooking();
  const { showLoading } = useLoading();
  const [isAgree, setAgree] = useState<boolean>(false);
  const router = useRouter();

  const getTitle = (
    <Title>
      <p>결제 전 마지막으로</p>
      <p>확인해주세요 :-)</p>
    </Title>
  );

  const tickets = useMemo(() => {
    return flow(
      map((ticket: any) => {
        const getTags = flow(
          get('tags'),
          map((tag: any) => {
            return (
              <Tag
                key={tag.label}
                backgroundColor={DARK_GRAY1}
              >
                {tag.label}
              </Tag>
            );
          }),
        )(ticket);

        return (
          <Ticket
            {...ticket}
            key={ticket.id}
            tags={getTags}
          />
        );
      }),
    )(getTicket);
  }, [getTicket]);
    
  const { onHideNewModal } = useModal();
  const {
    onShowNewModal,
    UIStore: { newModal },
  } = useModal();


  const rulePop1 = () =>
    onShowNewModal('rulePop1');
  const rulePop2 = () =>
    onShowNewModal('rulePop2');
  const rulePop3 = () =>
    onShowNewModal('rulePop3');
  const rulePop4 = () =>
    onShowNewModal('rulePop4');
  const popDetailedCost = () =>
  onShowNewModal('popDetailedCost');

  // let [tabBox] = useState(TabDataRule);

  const onClickModal = () => {
    switch (newModal.target) {
      case 'rulePop1':
        return(
          <NewModal
            className="max"
            type={EScrollType.TYPE8}
            title={
              <S.modalTitle>
                <PopupTitle>항공권 규정</PopupTitle>
              </S.modalTitle>
            }
            body={
              <>
                <S.textArea>
                  <Tab.textArea>
                    <TabDataRule
                      Idx={0}
                    />
                  </Tab.textArea>
                </S.textArea>
                <S.btnArea>
                  <TaskButton onClick={onHideNewModal}>확인</TaskButton>
                </S.btnArea>
              </>
            }
          />
        );
      case 'rulePop2':
        return(
          <NewModal
            className="max"
            type={EScrollType.TYPE8}
            title={
              <S.modalTitle>
                <PopupTitle>수하물 규정</PopupTitle>
              </S.modalTitle>
            }
            body={
              <>
                <S.textArea className="auto">
                  <Tab.textArea>
                    <TabDataRule
                      Idx={1}
                    />
                  </Tab.textArea>
                </S.textArea>
                <S.btnArea>
                  <TaskButton onClick={onHideNewModal}>확인</TaskButton>
                </S.btnArea>
              </>
            }
          />
        );
      case 'rulePop3':
        return(
          <NewModal
            className="max"
            type={EScrollType.TYPE8}
            title={
              <S.modalTitle>
                <PopupTitle>항공 위험물품 안내</PopupTitle>
              </S.modalTitle>
            }
            body={
              <>
                <S.textArea className="auto">
                  <Tab.textArea>
                    <TabDataRule
                      Idx={2}
                    />
                  </Tab.textArea>
                </S.textArea>
                <S.btnArea>
                  <TaskButton onClick={onHideNewModal}>확인</TaskButton>
                </S.btnArea>
              </>
            }
          />
        );
      case 'rulePop4':
        return(
          <NewModal
            className="max"
            type={EScrollType.TYPE8}
            title={
              <S.modalTitle>
                <PopupTitle>
                  국제 운송 약관
                </PopupTitle>
              </S.modalTitle>
            }
            body={
              <>
                <S.textArea className="auto">
                  <Tab.textArea>
                    <TabDataRule
                      Idx={3}
                    />
                  </Tab.textArea>
                </S.textArea>
                <S.btnArea>
                  <TaskButton onClick={onHideNewModal}>확인</TaskButton>
                </S.btnArea>
              </>
            }
          />
        );
      case 'popDetailedCost':
        return(
          <NewModal
            className="max"
            type={EScrollType.TYPE9}
            title={
              <S.modalTitle>
                <PopupTitle>
                  <Fragment>항공권의 상세 금액을<br />확인해주세요 :-)</Fragment>
                </PopupTitle>
              </S.modalTitle>
            }
            body={
              <>
                <S.textArea>
                  <Tab.textArea>
                    <TicketPayPopDetailedCost />
                  </Tab.textArea>
                </S.textArea>
                <S.btnArea>
                  <TaskButton onClick={onHideNewModal}>확인</TaskButton>
                </S.btnArea>
              </>
            }
          />
        );
    }
  }

  const agreeButtons = [
    <ButtonLink2Type4
      key={0}
      onClick={rulePop1}
      lengthType="short"
    >
      항공권 규정
    </ButtonLink2Type4>,
    <ButtonLink2Type4
      key={1}
      onClick={rulePop2}
      lengthType="short"
    >
      수하물 규정
    </ButtonLink2Type4>,
    <ButtonLink2Type4
      key={2}
      onClick={rulePop3}
      lengthType="short"
    >
      항공 위험물품 안내
    </ButtonLink2Type4>,
    <ButtonLink2Type4
      key={3}
      onClick={rulePop4}
      lengthType="short"
    >
      국제 운송 약관
    </ButtonLink2Type4>,
  ];

  const toggleAgree = useCallback(() => {
    setAgree(!isAgree);
  }, [isAgree]);

  const nextStep = useCallback(() => {
    showLoading();
    router.push('/ticket/pay/checkout');
  }, []);

  useEffect(() => {
    upScroll();
  }, []);

  useEffect(() => {
    // TODO 최적화. 다시 부르지 않는 정책
    onLoadBookingSessionSearch();
  }, []);

  return (
    <S.container>
      {onClickModal()}
      <TicketPayConfirm
        top={<FlightSummaryWithTotal />}
        title={getTitle}
        tickets={tickets}
        detailButton={
          <ButtonLink2Type4
            onClick={popDetailedCost}
            lengthType="long"
          >
            상세 요금 내역
          </ButtonLink2Type4>
        }
        agreeButtons={agreeButtons}
        isAgree={isAgree}
        onChangeAgree={toggleAgree}
        onClickPayMethodButton={nextStep}
      />
    </S.container>
  );
}






Confirm.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    width: 1200px;
    margin: 0 auto;
  `,
  modalTitle : styled.div``,
  textArea: styled.div`
    height: 100%;
    &.auto{
      overflow-y: auto;
      box-sizing: border-box;
    }
  `,

  btnArea: styled.div`
    padding: 25px 50px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 1px solid ${LIGHT_GRAY5};
    &.auto{
      position: static;
    }
  `,
};

const Tab = {
  box: styled.div``,

  textArea: styled.div`
    height: 100%;
    > div {
      height: 100%;
    }
  `,
};export default Confirm;
