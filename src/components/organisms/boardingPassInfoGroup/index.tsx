import { FC, useCallback } from 'react';
import styled from 'styled-components';
import { BoardingPassInfo } from 'src/components';
import { LinkText1 } from 'src/components';
import { BLUE1 } from '@airpremia/cdk/styles/colors';
import { IBookingDetailBoardingPassInfo } from '@airpremia/core/api/checkin/types';

interface IProps {
  recordLocator: string;
  boardingPassInfo: IBookingDetailBoardingPassInfo;
  isCommingSoon: boolean;
  params?: any;
}

const BoardingPassInfoGroup: FC<IProps> = ({
  recordLocator,
  boardingPassInfo,
  isCommingSoon,
  params,
}) => {
  const tripText =
    boardingPassInfo.tripType === 'OneWay'
      ? '편도'
      : '왕복';

  const onClickEticketDownload = useCallback(() => {

    const firstName = !params.first ? params?.first : '';
    const lastName = !params.last ? params?.last : '';

    window.open(
      `/checkin/e-ticket?recordLocator=${recordLocator}&firstName=${firstName}&lastName=${lastName}`,
      '_blank',
    );
  }, [params]);

  return (
    <S.container id="test">
      <S.title>
        <div className="left">
          <h2 className="font-bold">{tripText} 항공권</h2>
        </div>
        <div className="right">
          {isCommingSoon && boardingPassInfo?.tripType ? (
            <LinkText1
              color={BLUE1}
              onClick={onClickEticketDownload}
            >
              여정 안내서(E-Ticket)
            </LinkText1>
            // <Link href={`/checkin/e-ticket?recordLocator=${recordLocator}`}>
            // <a
            //   href={`/checkin/e-ticket?recordLocator=${recordLocator}`}
            //   target="_blank"
            // >
            //   여정 안내서(E-Ticket) 인쇄하기
            // </a>
            // </Link>
            ) : null } 
        </div>
      </S.title>
      <S.boardingPassInfo>
        <BoardingPassInfo
          recordLocator={recordLocator}
          boardingPassInfo={boardingPassInfo}
          isCommingSoon={isCommingSoon}
        />
      </S.boardingPassInfo>
    </S.container>
  );
};

BoardingPassInfoGroup.defaultProps = {
  params: { firsr: '', last: '' },
};

const S = {
  container: styled.div``,
  title: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    h2 {
      font-size: 30px;
      line-height: 45px;
      letter-spacing: -0.6px;
    }

    .right {
      font-size: 15px;
      line-height: 36px;
      letter-spacing: -0.3px;
    }
    @media only screen and (max-width: 1059px) {
        h2 {
            font-size:26px;
        }
    }
    @media only screen and (max-width: 767px) { 
        h2 {
            font-size:22px;
        }
    }
  `,
  boardingPassInfo: styled.div`
    margin-top: 60px;
    @media only screen and (max-width: 1059px) {
        margin-top: 40px;
    }
    @media only screen and (max-width: 767px) { 
        margin-top: 20px;
    }
  `,
};

export default BoardingPassInfoGroup;
