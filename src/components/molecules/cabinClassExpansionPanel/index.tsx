import styled from 'styled-components';
import map from 'lodash/map';
import {
  LIGHT_GRAY6,
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';
import {
  Arrow,
  CabinClassSpec,
  CabinClassTicketCard,
  NewModal,
  PopupTitle,
  TaskButton,
} from 'src/components';
import { IFlightTicketSearchProductClass } from '@airpremia/core/api/ticket/types';
import { useModal } from 'src/hooks';
import { EScrollType } from 'src/components/templates/centerPopup';
import FlightRuleTab from './flightRuleTab/index';

interface IProps {
  isShow: boolean;
  classType: string;
  classText: string;
  productClassList: IFlightTicketSearchProductClass[];
  selectedProduct: string;
  // onClickFlightRule: () => void;
  onChangeProductType: (key: string) => void;
}

function CabinClassExpansionPanel({
  isShow,
  classType,
  selectedProduct,
  productClassList,
  // onClickFlightRule,
  onChangeProductType,
}: IProps) {
  const {
    onShowNewModal,
    UIStore: { newModal },
  } = useModal();

  const { onHideNewModal } = useModal();
  
  const onClickFlightRule = () =>
    onShowNewModal('onClickFlightRule');

  const onClickModal = () => {
    switch (newModal.target) {
      case 'onClickFlightRule':
        return (
          <NewModal
            className="max hAuto"
            // 탭X, 테이블 따로 ver -> className에 hAuto 제거
            type={EScrollType.TYPE1}
            title={
              <PopupTitle>항공권 규정</PopupTitle>
            }
            body={
              <>
                {/* <T.table>
                  <div className="tbWrap">
                    <table>
                      <colgroup>
                        <col width="20%"></col>
                        <col width="16%"></col>
                        <col width="16%"></col>
                        <col width="16%"></col>
                        <col width="16%"></col>
                        <col width="16%"></col>
                      </colgroup>
                      <thead>
                        <tr>
                          <th rowSpan={2}>운임규정</th>
                          <td colSpan={3}>이코노미35"</td>
                          <td colSpan={2}>프레미아42"</td>
                        </tr>
                        <tr>
                          <td>라이트</td>
                          <td>스탠다드</td>
                          <td>플렉스</td>
                          <td>스탠다드</td>
                          <td>플렉스</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>변경/취소</th>
                          <td>7,000</td>
                          <td>5,000</td>
                          <td>3,000</td>
                          <td>3,000</td>
                          <td>3,000</td>
                        </tr>
                        <tr>
                          <th>No-show</th>
                          <td>8,000</td>
                          <td>8,000</td>
                          <td>8,000</td>
                          <td>8,000</td>
                          <td>8,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </T.table>  */}
                {/* 탭X, 테이블 합침 ver */}
                {/* <C.tmi>
                  <C.title>이코노미35"</C.title>
                  <T.table>
                    <div className="tbWrap">
                      <table>
                        <colgroup>
                          <col width="25%"></col>
                          <col width="25%"></col>
                          <col width="25%"></col>
                          <col width="25%"></col>
                        </colgroup>
                        <thead>
                          <tr>
                            <th></th>
                            <td>라이트</td>
                            <td>스탠다드</td>
                            <td>플렉스</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>변경/취소</th>
                            <td>7,000KRW</td>
                            <td>5,000KRW</td>
                            <td>3,000KRW</td>
                          </tr>
                          <tr>
                            <th>No-show</th>
                            <td>8,000KRW</td>
                            <td>8,000KRW</td>
                            <td>8,000KRW</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </T.table>
                </C.tmi>
                <C.tmi>
                  <C.title>프레미아42"</C.title>
                  <T.table>
                    <div className="tbWrap">
                      <table>
                        <colgroup>
                          <col width="33%"></col>
                          <col width="33%"></col>
                          <col width="33%"></col>
                        </colgroup>
                        <thead>
                          <tr>
                            <th></th>
                            <td>스탠다드</td>
                            <td>플렉스</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>변경/취소</th>
                            <td>3,000KRW</td>
                            <td>3,000KRW</td>
                          </tr>
                          <tr>
                            <th>No-show</th>
                            <td>8,000KRW</td>
                            <td>8,000KRW</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </T.table>
                </C.tmi> */}
                {/* 탭X, 테이블 따로 ver */}
                <FlightRuleTab />
                {/* 탭O ver */}
              </>
            }
            button={
              <TaskButton onClick={onHideNewModal}>확인</TaskButton>
            }
          />
        );         
      default:
        return null;
    };
  };

  return (
    <S.container
      isShow={isShow}
      className="expansion-panel"
    >
      <S.contentWrapper>
        {onClickModal()}
        <S.cabinClassSpec>
          <CabinClassSpec classType={classType} />
        </S.cabinClassSpec>

        <S.cardWrapper>
          {map(productClassList, (productClass, i) => {
            const isSelected =
              selectedProduct ===
              productClass.fareAvailabilityKey;
            return (
              <S.cabinClassTicketCard
                key={`CabinClassTicketCard${i.toString()}`}
              >
                <CabinClassTicketCard
                  isSelected={isSelected}
                  productClass={productClass}
                  classType={classType}
                  onClick={onChangeProductType}
                />
              </S.cabinClassTicketCard>
            );
          })}
        </S.cardWrapper>
      </S.contentWrapper>
      <S.flightRule>
        <p onClick={onClickFlightRule}>
          항공권 규정 자세히 보기 <Arrow />
        </p>
      </S.flightRule>
    </S.container>
  );
}


const S = {
  container: styled.div<{ isShow: boolean }>`
    width: 100%;
  `,

  contentWrapper: styled.div`
    height: 321px;
    border-radius: 12px;
    border: solid 1px ${LIGHT_GRAY6};
    display: flex;
    justify-content: space-between;
    overflow: hidden;

    @media only screen and (max-width: 767px) { 
      display: block;
      height: auto;
    }
  `,

  cabinClassSpec: styled.div`
    padding: 40px 10px 30px 30px;

    @media only screen and (max-width: 767px) { 
      padding: 20px 10px 20px 10px;
    }
  `,

  cardWrapper: styled.div`
    width: 100%;
    display: flex;
    flex: 1;

    @media only screen and (max-width: 479px) {
      display: block;
    }
  `,

  cabinClassTicketCard: styled.div`
    flex: 1;
    border-left: dotted 1px ${LIGHT_GRAY6};

    @media only screen and (max-width: 767px) {
      border-top: dotted 1px ${LIGHT_GRAY6};

      &:first-child {
        border-left: 0;
      }
    }

    @media only screen and (max-width: 479px) {
      width: 100%;
      border-left: 0;
    }
  `,

  flightRule: styled.div`
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.26px;
    color: ${DARK_GRAY1};
    font-weight: 600;
    margin-top: 15px;
    cursor: pointer;

    &:after {
      content: "";
      display: block;
      clear: both;
    }

    p {
      float: right;

      .arrow {
        position: relative;
        top: 4px;
        display: inline-flex;
      }
    }

    @media only screen and (max-width: 767px) {
      font-size: 13px;

      p {
        .arrow {
          width: 14px;
          height: 14px;
          top: 3px;
        }
      }
    }
  `,
};

// const C = {
//   tmi: styled.p`
//     margin-top: 60px;
//     &:first-child {
//       margin-top: 0;
//     }
//     @media only screen and (max-width: 767px){
//       margin-top: 40px;
//     }
//   `,
//   title: styled.p`
//     font-size: 21px;
//     font-weight: 700;
//     margin-bottom: 30px;
//     @media only screen and (max-width: 767px){
//       font-size: 16px;
//       margin-bottom: 20px;
//     }
//   `,
// }

// const T = {
//   table: styled.div`
//   `,
// }

export default CabinClassExpansionPanel;
