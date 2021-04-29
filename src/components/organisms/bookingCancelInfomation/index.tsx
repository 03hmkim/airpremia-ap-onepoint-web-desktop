import { FC } from 'react';
import moment from 'moment';
import styled from 'styled-components';

import {
  caution,
  fee,
  ssr,
  changeFeelist,
  ssrRefundList,
} from './dataset';
import { NarrowTableRow, GuideList
  , NewModal, PopupTitle, TaskButton, } from 'src/components';
import { useModal } from 'src/hooks';
import { useBooking } from '@airpremia/core/hooks';
import {
  DARK_GRAY1,
  BLUE1,
} from '@airpremia/cdk/styles/colors';

interface IProps {}

const getRefundRuleIndex = (leftDate: number) => {
  if (leftDate >= 90) {
    return 0;
  } else if (leftDate >= 30 && leftDate < 90) {
    return 1;
  } else if (leftDate >= 15 && leftDate < 29) {
    return 2;
  } else if (leftDate >= 3 && leftDate < 14) {
    return 3;
  } else if (leftDate < 3) {
    return 4;
  }
  return 5;
};

const bookingCancelCaution: FC<IProps> = () => {
  
  //팝업 
  const { onShowNewModal, UIStore: { newModal }, } = useModal();
  const { onHideNewModal } = useModal();
  
  const { bookingStore } = useBooking();
  const { bookingDetailInfo } = bookingStore;
  const date = bookingDetailInfo?.bookingInfo?.beginDate;
  const leftDate = moment
    .duration(moment(date).diff(moment()))
    .asDays();
  const idx = getRefundRuleIndex(leftDate);

  const onClickModal = () => {

    switch (newModal.target) {
      case 'onPopup':
        return (
          <NewModal
            title={
              <S.modalTitle>
                <PopupTitle>예약 변경 규정 및 수수료 상세</PopupTitle>
              </S.modalTitle>
            }
            body={
              <S.modalBody>
                <S.ssrRefund className="unordered-list">
                  <GuideList
                    title={fee.title}
                    descriptions={fee.descriptions}
                  />
                  <S.narrowTableRow>
                    {changeFeelist.map((item, i) => {
                      return (
                        <NarrowTableRow
                          description={item.condition}
                          subDescription={item.fee}
                          isEmphasisRow={i === idx}
                          key={i.toString()}
                        />
                      );
                    })}
                  </S.narrowTableRow>
                </S.ssrRefund>
                <S.ssrRefund className="unordered-list">
                  <GuideList
                    title={ssr.title}
                    descriptions={ssr.descriptions}
                  />
                  <S.narrowTableRow>
                    {ssrRefundList.map((item, i) => {
                      return (
                        <NarrowTableRow
                          description={item.title}
                          subDescription={item.condition}
                          option={item.option}
                          optionColor={item.optionColor}
                          key={`narrowTableRow${i.toString()}`}
                        />
                      );
                    })}
                  </S.narrowTableRow>
                </S.ssrRefund>
                <TaskButton onClick={onHideNewModal}>확인</TaskButton>
              </S.modalBody>
            }
          />
        );
      default:
        return null;
    }    
    
  };

  const onPopup = () => {
    onShowNewModal('onPopup');
    return false;
  }

  return (
    <S.container>
      {onClickModal()} 
      <S.title className="font-bold">
        <h2>예약 취소</h2>
      </S.title>
      <S.subTitle className="font-bold">
        <h3>예약 취소 안내</h3>
      </S.subTitle>
      <S.bookingCancelCaution className="unordered-list">
        <GuideList
          title={caution.title}
          descriptions={caution.descriptions}
        />
      </S.bookingCancelCaution>

      <S.bookingChangeFee className="unordered-list">
        <GuideList
          title={fee.title}
          descriptions={fee.descriptions}
        />
        <S.narrowTableRow>
          {changeFeelist.map((item, i) => {
            return (
              <NarrowTableRow
                description={item.condition}
                subDescription={item.fee}
                isEmphasisRow={i === idx}
                key={i.toString()}
              />
            );
          })}
        </S.narrowTableRow>
      </S.bookingChangeFee>

      <S.ssrRefund className="unordered-list">
        <GuideList
          title={ssr.title}
          descriptions={ssr.descriptions}
        />
        <S.narrowTableRow>
          {ssrRefundList.map((item, i) => {
            return (
              <NarrowTableRow
                description={item.title}
                subDescription={item.condition}
                option={item.option}
                optionColor={item.optionColor}
                key={`narrowTableRow${i.toString()}`}
              />
            );
          })}
        </S.narrowTableRow>
        {/*  20210428 삭제요청
        <S.link>
          <a onClick={onPopup}>예약 변경 규정 및 수수료 상세보기</a>
        </S.link> */}
      </S.ssrRefund>
    </S.container>
  );
};

const S = {
  container: styled.div`
    .unordered-list {
      h3 {
        font-size: 21px;
        font-weight: 600;
        font-family: 'NotoSans', sans-serif;
        line-height: 27px;
      }
      ul {
        padding-top: 0;
      }
    }

    @media only screen and (max-width: 767px) {
      .unordered-list {
        h3 {
          font-size: 16px;
        }
      }
    }
  `,

  title: styled.div`
    border-bottom: solid 1px ${DARK_GRAY1};
    h2 {
      font-size: 40px;
      line-height: 50px;
      letter-spacing: -0.8px;
      margin-bottom: 80px;
    }

    @media only screen and (max-width: 767px) { 
      h2 {
        font-size: 26px;
        margin-bottom: 20px;
      }
    }
  `,

  subTitle: styled.div`
    padding: 20px 0 60px;
    
    h3 {
      font-size: 24px;
      line-height: 36px;
      letter-spacing: -0.44px;
    }

    @media only screen and (max-width: 767px) { 
      padding-bottom: 40px;

      h3 {
        font-size: 22px;
      }
    }
  `,

  bookingCancelCaution: styled.div`
    margin-bottom: 100px;

    @media only screen and (max-width: 767px) { 
      margin-bottom: 40px;
    }
  `,

  bookingChangeFee: styled.div`
    margin-bottom: 100px;

    @media only screen and (max-width: 767px) { 
      margin-bottom: 40px;
    }
  `,

  narrowTableRow: styled.div`
    margin-top: 30px;
    border-top: solid 1px ${DARK_GRAY1};
  `,

  ssrRefund: styled.div`
    margin-bottom: 140px;

    @media only screen and (max-width: 767px) { 
      margin-bottom: 60px;
    }
  `,

  link: styled.div`
    margin-top: 20px;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
    a {
      font-size: 18px;
      line-height: 36px;
      letter-spacing: -0.3px;
      color: ${BLUE1};
    }

    @media only screen and (max-width: 767px) {
      a {
        font-size: 14px;
      }
    }
  `,
  modalTitle : styled.div``,
  modalBody : styled.div`
    width: 600px;
    padding: 0 50px;
    div {
    },
    h4 { 
      color: black;
      font-size: 18px;
      margin:50px 0 0 0;
      font-weight: 600;
    },
    hr {
      margin: 10px 0
    },
    ol {
      margin: 5px 30px;
      list-style-type : disc;
    },
    li {
      color: black;
      padding: 10px;
      font-size: 15px;
      font-weight: 400;
    },
  `,  
  button : styled.div`
    text-align: center;
    margin-top: 30px;
    button{
      width: 300px;
      height: 50px;
    }
  `,
};

export default bookingCancelCaution;
