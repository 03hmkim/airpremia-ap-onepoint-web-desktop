import { FC, ReactType } from 'react';
import styled from 'styled-components';
import {
  ButtonLinkType6,
  ReservationDetailInfo,
} from 'src/components';
import { IBookingDetailBreakdown, IBookingDetailInfo } from '@airpremia/core/api/checkin/types';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

interface IButtonList {
  SvgIcon: ReactType;
  text: string;
  disabled: boolean;
  isShow?: boolean;
  onClick: () => void;
}

interface IProps {
  bookingInfo: IBookingDetailInfo;
  breakdown: IBookingDetailBreakdown;
  list: IButtonList[];
}

const reservationDetailInfoGroup: FC<IProps> = ({
  list,
  breakdown,
  bookingInfo,
}) => {
  return (
    <S.container>
      <S.detailInfoWrapper>
        <S.detailInfo>
          <ReservationDetailInfo
            bookingInfo={bookingInfo}
            breakdown={breakdown}
          />
        </S.detailInfo>
        <S.buttonGroup>
          {
            bookingInfo.isCommingSoon ? 
              (
              list.map((item, i) => (
              <ButtonLinkType6
                key={`buttonGroup${i.toString()}`}
                disabled={item.disabled}
                SvgIcon={item.SvgIcon}
                text={item.text}
                onClick={item.onClick}
              />))
              ) : null
          }
        </S.buttonGroup>
      </S.detailInfoWrapper>
    </S.container>
  );
};

const S = {
  container: styled.div``,
  detailInfoWrapper: styled.div``,
  detailInfo: styled.div`
    margin: 100px 0 25px;
    padding: 25px 0 30px;
    border-top: solid 2px ${DARK_GRAY1};
    border-bottom: solid 2px ${DARK_GRAY1};
  `,
  buttonGroup: styled.div`
    display: flex;
    & > div {
      flex: 1;
      &:not(:last-of-type) {
        margin-right: 20px;
      }
    }
  `,
};

export default reservationDetailInfoGroup;
