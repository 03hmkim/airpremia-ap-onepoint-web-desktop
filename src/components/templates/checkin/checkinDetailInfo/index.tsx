import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { PassengerListComplete } from 'src/components';
import { Horizon } from 'src/components';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

interface IProps {
  isCompleted: boolean;
  guide: ReactElement | ReactElement[];
  passengerInfoShareButton: ReactElement;
  expansionPanel: ReactElement;
  confirmCheckbox: ReactElement | null;
  checkinButton: ReactElement;
}

const CheckinDetailInfoTemplate: FC<IProps> = ({
  isCompleted,
  guide,
  passengerInfoShareButton,
  expansionPanel,
  confirmCheckbox,
  checkinButton,
}) => {
  return (
    <S.container>
      <S.header>
        <h2 className="font-bold">온라인 체크인 신청</h2>
      </S.header>

      <Horizon width={2} bottom={60} />

      <S.guideArea>{guide}</S.guideArea>

      <S.share>{passengerInfoShareButton}</S.share>

      <S.expansionPanelGroup>
        {expansionPanel}
      </S.expansionPanelGroup>

      {isCompleted && (
        <S.checkinComplete>
          <PassengerListComplete />
        </S.checkinComplete>
      )}

      <Horizon width={2} top={60} bottom={32} />

      <S.confirmCheckbox>
        {confirmCheckbox}
      </S.confirmCheckbox>

      <S.checkinButton>{checkinButton}</S.checkinButton>
    </S.container>
  );
};

const S = {
  container: styled.div``,
  header: styled.div`
    margin-bottom: 100px;
    h2 {
      font-size: 36px;
      line-height: 48px;
      letter-spacing: -0.72px;
      margin-bottom: 10px;
    }horizon
    @media only screen and (max-width: 1059px) { 
        margin-bottom: 60px;
        h2 {
          font-size: 30px;
        }
    }
    @media only screen and (max-width: 767px) { 
        margin-bottom: 40px;
        h2 {
          font-size: 26px;
        }
    }
  `,

  guideArea: styled.div`
    & > div {
      &:not(:last-of-type) {
        margin-bottom: 80px;
      }
    }
    @media only screen and (max-width: 1059px) {
        & > div {
          &:not(:last-of-type) {
            margin-bottom: 60px;
          }
        }
    }
    @media only screen and (max-width: 767px) { 
        & > div {
          &:not(:last-of-type) {
            margin-bottom: 40px;
          }
        }
    }
  `,

  share: styled.div`
    margin: 60px 0 40px;
    @media only screen and (max-width: 1059px) { 
        margin: 40px 0 30px;
    }
    @media only screen and (max-width: 767px) { 
        margin: 30px 0 20px;
    }
  `,

  expansionPanelGroup: styled.div`
    border-top: solid 1px ${DARK_GRAY1};
    height: 100%;
  `,

  confirmCheckbox: styled.div`
    font-size: 16px;
    line-height: 36px;
    letter-spacing: -0.32px;
    font-weight: 600;
    margin-bottom: 60px;
  `,

  checkinButton: styled.div`
    text-align: center;
    button {
      width: 300px;
      letter-spacing: -0.8px;
    }
    @media only screen and (max-width: 1059px) { 
        button {
          width: 200px !important;
        }
    }
    @media only screen and (max-width: 767px) { 
        button {
          width: 130px !important;
        }
    }
  `,

  checkinComplete: styled.div`
    margin: 60px auto 80px;
    @media only screen and (max-width: 1059px) { 
        margin: 40px auto 60px;
    }
    @media only screen and (max-width: 767px) { 
        margin: 20px auto 40px;
    }
  `,
};

export default CheckinDetailInfoTemplate;
