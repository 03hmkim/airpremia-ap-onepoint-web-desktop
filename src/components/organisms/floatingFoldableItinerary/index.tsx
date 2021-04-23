import { FC, Fragment, useRef, useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import moment from 'moment';
import { getStationLabel } from '@airpremia/core/lib/booking';
import styled, { css } from 'styled-components';
import {
  useBooking,
  useCommon,
  useLoading,
  useAuth,
} from '@airpremia/core/hooks';
import { useModal } from 'src/hooks';
import {
  TicketSearchHorizontal,
  TicketSearchHorizontalRebook,
  Caution,
  RoundedButton2,
  NewModal,
  PopupTitle,
  PopupDescription,
  TextInput,
  TaskButton,
} from 'src/components';
import { EInputType } from 'src/components/atoms/input';
import { EScrollType } from 'src/components/templates/centerPopup';
import {
  WHITE1,
  LIGHT_GRAY8,
  ORANGE2,
  DARK_GRAY1,
  LIGHT_GRAY1,
} from '@airpremia/cdk/styles/colors';
import SvgCautionGray from 'public/images/ico_caution_gray.svg';
import { addComma } from '@airpremia/core/lib/service';
import { ifProp } from 'styled-tools';
import { LIGHT_GRAY5 } from '@airpremia/cdk/styles/colors';
import { Triangle } from 'src/components';
import { EPosition } from 'src/components/atoms/arrow';
import { EFlightType } from '@airpremia/core/stores/models/bookingSession';

interface IProps {
  isFolded: boolean;
  origin: string;
  destination: string;
  beginDate: moment.Moment;
  endDate: moment.Moment | undefined;
  totalPrice: number | null;
  itineraryType: EFlightType;
  onClick: () => void;
  isRebook?: boolean;
}

const FloatingFoldableItinerary: FC<IProps> = ({
  isFolded,
  origin,
  destination,
  beginDate,
  endDate,
  totalPrice,
  itineraryType,
  isRebook,
  onClick,
}: IProps) => {
  const containerRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { commonStore } = useCommon();
  const { 
    bookingSessionStore,
    checkPromotionCode,
    onSearchFlightTicket, 
  } = useBooking();
  const { showLoading, hideLoading } = useLoading();
  const { authStore } = useAuth();

  const {
    onShowNewModal,
    onHideNewModal,
    UIStore: { newModal },
  } = useModal();
  const { code } = commonStore.language;
  const {
    currencyCode,
    isPromotionCodeVaildationRequest,
    isPromotionCodeVaildationSuccess,
    promotionCodeNotVaildType,
  } = bookingSessionStore;

  const onClickOutside = (e: any) => {
    const inContainer = containerRef?.current?.parentNode?.contains(
      e.target.parentNode,
    );

    if (inContainer) {
      if (isFolded) {
        return onClick();
      }
      return;
    } else {
      if (!isFolded) {
        return onClick();
      }
      return;
    }
  };
  
  const [promotionCode, setPromotionCode] = useState('');
  const promotionData = {
    labelData: {
      children: '프로모션/바우처 코드',
    },
    inputData: {
      value: promotionCode,
      target: 'code',
      type: EInputType.TEXT,
      placeholder: '프로모션 코드 입력',
      onChange: (e: any) => setPromotionCode(e.target.value),
    },
  };

  const onClickConfirm = useCallback(() => {
    // await showLoading();
    checkPromotionCode(promotionCode);
    // await hideLoading();
  }, [checkPromotionCode]);

  useEffect(() => {
    console.log(1)
    if (
      !isPromotionCodeVaildationRequest &&
      isPromotionCodeVaildationSuccess
    ) {
      onSearchFlightTicket();
      onHideNewModal();
    }
    else if (
      !isPromotionCodeVaildationRequest &&
      !isPromotionCodeVaildationSuccess && 
      promotionCodeNotVaildType
    ) {
      alert(promotionCodeNotVaildType);
      setPromotionCode('');
    }
  }, [
    isPromotionCodeVaildationRequest,
    isPromotionCodeVaildationSuccess,
    promotionCodeNotVaildType,
  ]);

  const onClickLogin = useCallback(async () => {
    await showLoading();
    await router.push('/auth/login');
    await hideLoading();
  }, []);
  
  const onShowNewModalClick = useCallback(() => {
    onShowNewModal(
      authStore.isLogIn
        ? 'promotion_code'
        : 'promotion_login',
    );
  }, []);

  console.log("1 isRebook",isRebook)
  const onClickModal = () => {
    switch (newModal.target) {
      case 'promotion_login':
        return (
          <NewModal
            className="min hAuto"
            type={EScrollType.TYPE1}
            title={
              <S.modalTitle>
                <PopupTitle>에어프레미아 회원이십니까?</PopupTitle>
                <PopupDescription>로그인을 하시면 프로모션을 이용하실 수 있습니다.</PopupDescription>
              </S.modalTitle>
            }
            body={
              <S.modalBody>
                <TaskButton onClick={onClickLogin}>
                  로그인 하기
                </TaskButton>
              </S.modalBody>
            }
          />
        );
      case 'promotion_code':
        return (
          <NewModal
            className="min hAuto"
            type={EScrollType.TYPE1}
            title={
              <S.modalTitle>
                <PopupTitle>프로모션 코드 입력</PopupTitle>
              </S.modalTitle>
            }
            body={
              <S.modalBody>
                <TextInput
                  labelProps={promotionData.labelData}
                  inputProps={promotionData.inputData}
                />
                <S.taskButton>
                  <TaskButton
                    onClick={onClickConfirm}
                    disabled={!promotionCode}
                  >
                    확인
                  </TaskButton>
                </S.taskButton>
              </S.modalBody>
            }
          />
        );
      default:
        return null;
    }
  };

  const onClickSearch = () => onClick();

  useEffect(() => {
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener(
        'mousedown',
        onClickOutside,
      );
    };
  });

  return (
    <S.container ref={containerRef}>
      {onClickModal()}
      <S.innerWrapper isShow={!isFolded}>
        <S.folderWrapper>
          <S.left>
            <div className="itinerary">
              <p className="origin">
                {`${getStationLabel(origin)}(${origin})`}
              </p>
              <span>
                &nbsp;
                {itineraryType === EFlightType.OW ? (
                  <span className="arrow">→</span>
                ) : (
                  <span>&mdash;</span>
                )}
                &nbsp;
              </span>
              <p className="destination">
                {`${getStationLabel(
                  destination,
                )}(${destination})`}
              </p>
            </div>
            <S.divider />
            <div className="date">
              {beginDate && (
                <p>
                  {beginDate
                    .locale(code || 'ko')
                    .format('M. D. (ddd)')}
                </p>
              )}

              {endDate && (
                <Fragment>
                  <p>&nbsp;-&nbsp;</p>
                  <p>
                    {endDate
                      .locale(code || 'ko')
                      .format('M. D. (ddd)')}
                  </p>
                </Fragment>
              )}
            </div>
            <Triangle
              position={
                isFolded ? EPosition.DOWN : EPosition.UP
              }
            />
          </S.left>

          <S.rightWrap>
            <S.right isShow={!!totalPrice && totalPrice > 0}>
              <S.promotion>
                <RoundedButton2 onClick={onShowNewModalClick}>
                  프로모션 코드 입력
                </RoundedButton2>
              </S.promotion>
              <p>총 결제금액</p>
              <h3>
                {addComma(totalPrice || 0)} {currencyCode}
              </h3>
            </S.right>
          </S.rightWrap>
          {/* )} */}
        </S.folderWrapper>
        <S.unFolderWrapper isShow={!isFolded}>
          {isRebook?
            (<TicketSearchHorizontalRebook
              isRebook={isRebook}
            />)
            :
            (<TicketSearchHorizontal
              onHookingClickEvent={onClickSearch}
            />)
          }
          <S.caution>
            <Caution
              SvgIcon={SvgCautionGray}
              title="항공권을 재검색하는 경우 현재 금액의 항공권이 매진되어 가격이 변동될 수 있습니다."
            />
          </S.caution>
        </S.unFolderWrapper>
      </S.innerWrapper>
    </S.container>
  );
};


const S = {
  container: styled.div`
    width: 100%;
    /* height: 100%; */
    position: fixed;
    /* top: 128px; */
    z-index: 1;
    background-color: ${WHITE1};
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.02);

    @media only screen and (max-width: 767px) { 
      box-shadow: none;
    }
  `,

  innerWrapper: styled.div<{ isShow: boolean }>`
    box-sizing: border-box;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 100px;
    height: 64px;
    ${(isShow) => {
      if (isShow) {
        return css`
          height: 100%;
        `;
      } else {
        return css`
          cursor: pointer;
        `;
      }
    }}

    @media only screen and (max-width: 1059px) {
      padding: 0 40px
    }

    @media only screen and (max-width: 767px) {
      padding: 0 20px
    }
  `,

  folderWrapper: styled.div`
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 1059px) {
      display: block;
    }
  `,

  left: styled.div`
    display: flex;
    align-items: center;
    p {
      font-size: 18px;
      letter-spacing: -0.26px;
    }

    .itinerary {
      margin-right: 20px;
    }

    span .arrow {
      position: relative;
      top: 1px;
    }

    .date {
      margin-right: 10px;
    }

    .itinerary,
    .date {
      display: flex;
      align-items: center;
    }

    @media only screen and (max-width: 1059px) {
      margin-top: 1.5vw;
      justify-content: flex-start;
    }

    @media only screen and (max-width: 767px) { 
      p {
        font-size: 14px;
      }
    }
  `,

  right: styled.div<{ isShow: boolean }>`
    margin-left: 20px;
    display: flex;
    align-items: center;
    opacity: ${ifProp('isShow', 1, 0)};
    transition: opacity 0.5s linear;

    p {
      font-size: 14px;
      letter-spacing: -0.24px;
    }

    h3 {
      font-size: 18px;
      letter-spacing: -0.36px;
      color: ${ORANGE2};
      text-decoration: underline;
      margin-left: 15px;
      font-weight: 600;
    }
  `,

  unFolderWrapper: styled.div<{ isShow: boolean }>`
    height: auto;
    min-height: 168px;
    opacity: 0;
    transition: opacity 0.2s ease-out;
    overflow: unset;
    pointer-events: none;

    ${(isShow) =>
      isShow &&
      css`
        /* max-height: 168px; */
        opacity: 1;
        transition: opacity 0.2s ease-in;
        pointer-events: unset;
      `};
  `,

  caution: styled.div`
    height: 27px;
    padding: 20px 0 50px;
    font-weight: normal;
    align-items: flex-start;

    h3 {
      width: 100%;
      flex: 1;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: -0.28px;
      color: ${LIGHT_GRAY8};
    }
  `,

  divider: styled.span`
    border-right: solid 1px ${LIGHT_GRAY5};
    display: block;
    height: 10px;
    position: relative;
    left: -10px;
    top: 1px;
  `,


  rightWrap: styled.div`
    display: flex;
    justify-content: center;

    button{
      margin-left: 5px;
    }

    @media only screen and (max-width: 1059px) {
      margin-top: 1.5vw;
      justify-content: flex-start;

      button{
        margin: 0 5px 0 0;
        justify-content: center;
      }
    }

    @media only screen and (max-width: 767px) {
      button{
        padding: 0 8px;
        font-size: 14px;
        white-space: nowrap;
      }
    }
  `,

  promotion: styled.div`
    position: relative;
    z-index: 100;
  `,

  modalTitle : styled.div``,

  modalBody: styled.div`
    padding: 40px 50px 0;
    .select {
      margin-top: 40px;
      font-size: 15px;
      line-height: 30px;
      letter-spacing: -0.23px;
      box-sizing: border-box;
      &>div{
        height: 40px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid ${LIGHT_GRAY5};
      }
      .newPosition{
        >div{
          max-height: 120px;
        }
      }
    }
  `,

  taskButton: styled.div`
    margin-top: 80px;
  `,

  selectMenu: styled.div`
    min-width: 118px;
    border-radius: 8px;
    box-shadow: 7px 7px 7px 0 rgba(0, 0, 0, 0.03);
    border: ${DARK_GRAY1};
    background-color: ${WHITE1};
    padding: 15px 0;
    font-weight: 600;
  `,

  promotionItem: styled.div<{ isSelected: boolean }>`
    height: 29px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    font-size: 13px;
    line-height: 36px;
    letter-spacing: -0.26px;
    color: ${ifProp('isSelected', DARK_GRAY1, LIGHT_GRAY8)};
    cursor: pointer;
    &:hover {
      background-color: ${LIGHT_GRAY1};
      color: ${DARK_GRAY1};
    }
  `,

};

export default FloatingFoldableItinerary;
