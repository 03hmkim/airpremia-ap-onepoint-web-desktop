import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from 'src/styles/layout';
import { useModal } from 'src/hooks';
import {
  MyCoupon,
  CouponHeader,
  CouponBodyTable,
  NewModal,
  PopupTitle,
  CouponDetail,
  PopupDescription,
  CouponRegistration,
} from 'src/components';
import { useMe } from '@airpremia/core/hooks';
import { EScrollType } from 'src/components/templates/centerPopup';

interface IProps {}

const Coupon: FC<IProps> = ({}) => {
  const {
    onShowNewModal,
    UIStore: { newModal },
  } = useModal();
  const { meStore, onLoadCouponList } = useMe();
  const { couponList } = meStore;

  const availableCouponCount = couponList?.filter(
    (item) => !item.used,
  ).length;

  const onClickRegisterCoupon = () =>
    onShowNewModal('couponRegistration');

  const onClickCouponDetail = (code: string) => () => {
    console.log('call', code);
    onShowNewModal('couponDetail');
  };

  const onClickModal = () => {
    switch (newModal.target) {
      case 'couponDetail':
        return (
          <NewModal
            type={EScrollType.TYPE2}
            title={
              <S.modalTitle>
                <PopupTitle>나의 쿠폰 상세</PopupTitle>
              </S.modalTitle>
            }
            body={<CouponDetail />}
          />
        );

      case 'couponRegistration':
        return (
          <NewModal
            type={EScrollType.TYPE2}
            title={
              <S.modalTitle>
                <PopupTitle>쿠폰 등록</PopupTitle>
                <PopupDescription>
                  쿠폰 코드를 정확하게 입력 후 등록 버튼을
                  눌러주세요.
                </PopupDescription>
              </S.modalTitle>
            }
            body={<CouponRegistration />}
          />
        );

      default:
        return null;
    }
  };

  useEffect(() => {
    onLoadCouponList();
  }, []);

  return (
    <Container>
      {onClickModal()}
      <MyCoupon
        title="나의 쿠폰"
        couponHeader={
          <CouponHeader
            name={'LEE YONGHYUN'}
            numberOfCoupons={availableCouponCount}
            onClickRegisterCoupon={onClickRegisterCoupon}
          />
        }
        couponBody={
          <CouponBodyTable
            couponList={couponList}
            onClickCouponDetail={onClickCouponDetail}
          />
        }
      />
    </Container>
  );
};

const S = {
  modalTitle: styled.div``,
  modalBody: styled.div``,
};

export default Coupon;
