import { FC, Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useModal } from 'src/hooks';
import { LIGHT_GRAY6 } from '@airpremia/cdk/styles/colors';
import { addComma } from '@airpremia/core/lib/service';
import {
  ProgressBar,
  NewModal,
  PopupTitle,
  GradeUpgradeOrStay,
} from 'src/components';
import Tooltip from 'src/components/molecules/tooltip';
import { TaskButton } from 'src/components';
import { EScrollType } from 'src/components/templates/centerPopup';

interface IProps {
  grade: string;
  mileage?: number;
  unit?: string;
}

const MembershipDashboard: FC<IProps> = ({
  grade,
  mileage = 1000,
  unit = 'M',
}) => {
  const {
    UIStore: { newModal },
    onShowNewModal,
    onHideNewModal,
  } = useModal();
  const [base, setBase] = useState<number[]>([]);
  const [total, setTotal] = useState<number>(0);

  const onClickPopup = () => {
    onShowNewModal('userGradeGuideInfomation');
  };

  const modalSwitch = () => {
    switch (newModal.target) {
      case 'userGradeGuideInfomation':
        return (
          <NewModal
            className="hAuto btnN"
            type={EScrollType.TYPE1}
            title={<PopupTitle>승급 안내</PopupTitle>}
            body={
              <S.modalBody>
                <GradeUpgradeOrStay grade={grade} />
                <TaskButton onClick={onHideNewModal}>확인</TaskButton>
              </S.modalBody>
            }
          />
        );

      default:
        return null;
    }
  };

  useEffect(() => {
    if (grade === 'BLUE') {
      setBase([0, 80000]);
      setTotal(80000);
    } else {
      setBase([0, 80000, 300000]);
      setTotal(300000);
    }
  }, []);

  return (
    <S.container>
      {modalSwitch()}
      <S.left>
        <div>
          <div className="title">
            <h4>최근 24개월 적립 포인트</h4>
            <S.tooltip>
              <Tooltip>
                2018년 12월부터 2020년 11월까지 적립된
                포인트
              </Tooltip>
            </S.tooltip>
          </div>
          <h2 className="font-bold">
            {addComma(mileage)} {unit}
          </h2>
        </div>
        <div>
          <p onClick={onClickPopup}>
            {grade === 'BLUE' && (
              <u>SILVER 등급이 되려면?</u>
            )}
            {grade === 'SILVER' && (
              <u>GOLD 등급이 되려면?</u>
            )}
            {grade === 'GOLD' && (
              <u>GOLD 등급을 유지하려면?</u>
            )}
          </p>
        </div>
      </S.left>
      {total > 0 && (
        <S.right>
          <ProgressBar
            originFilled={(mileage / total) * 100}
            value={mileage.toString()}
          >
            <S.bottomInfo curr={mileage} total={total}>
              {grade === 'BLUE' && (
                <Fragment>
                  <p>{base[0]}</p>
                  <p>
                    {addComma(base[1])} {unit}
                  </p>
                </Fragment>
              )}
              {(grade === 'SILVER' || grade === 'GOLD') && (
                <Fragment>
                  <p>{base[0]}</p>
                  <p className="not-blue">{base[1]}</p>
                  <p>
                    {addComma(base[2])} {unit}
                  </p>
                </Fragment>
              )}
            </S.bottomInfo>
          </ProgressBar>
        </S.right>
      )}
    </S.container>
  );
};

const S = {
  container: styled.div`
    max-width: 1200px;
    min-height: 200px;
    border-radius: 12px;
    border: solid 1px ${LIGHT_GRAY6};
    padding: 30px 40px 30px 30px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;

    @media only screen and (max-width: 767px) { 
      display: block;
      padding: 20px 30px 20px 20px;
    }
  `,

  tooltip: styled.span``,

  left: styled.div`
    flex: 2;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .title {
      display: flex;
      align-items: center;

      span {
        margin-left: 3px;

        .description {
          left: -175px;
        }
      }
    }

    h2 {
      font-size: 32px;
      line-height: 47px;
      margin-top: 8px;
    }

    h4 {
      font-size: 18px;
      line-height: 1.2;
      letter-spacing: -0.32px;
      font-weight: 600;
    }

    p {
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.26px;
      cursor: pointer;
    }

    @media only screen and (max-width: 767px) { 
      width:100%;
      h2 {
        font-size: 22px;
      }
      h4 {
        font-size: 14px;
      }
      p {
        font-size: 13px;
      }
    }
  `,

  right: styled.div`
    flex-basis: 586px;
    width: 586px;
    display: flex;
    align-items: flex-end;

    & > div {
      bottom: -13px;
    }

    @media only screen and (max-width: 1059px) { 
       flex-basis: calc( 100% - 200px );
       width: calc( 100% - 200px );
    }

    @media only screen and (max-width: 767px) { 
       flex-basis: 100%;
       width: 100%;
    }

  `,

  bottomInfo: styled.div<{ curr: number; total: number }>`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 18px;
    line-height: 19px;
    letter-spacing: -0.26px;

    .not-blue {
      left: calc(80000 / 300000 * 100%);
      position: absolute;
    }
  `,

  modalBody: styled.div``,
};

export default MembershipDashboard;
