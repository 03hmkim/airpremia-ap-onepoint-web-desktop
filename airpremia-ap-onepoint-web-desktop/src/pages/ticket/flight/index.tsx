import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
//import { map } from 'lodash';
import moment from 'moment';
import styled from 'styled-components';
import {
  Checkbox,
  TicketSearchHorizontal,
} from 'src/components';
import { useAuth, useLoading } from '@airpremia/core/hooks';
import { usePreventRouteChange } from 'src/hooks';
import { PopupPageoutAlert } from 'src/components';
import {
  DARK_GRAY1,
  LIGHT_GRAY8,
  LIGHT_GRAY7,
  LIGHT_GRAY6,
  WHITE1,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';
import { checkLogin } from '@airpremia/core/lib/storage';

function TicketFlight() {
  const router = useRouter();
  const { isLoading, hideLoading } = useLoading();
  const { handleLoadUserInfoData } = useAuth();
  const [routingUrl, setRoutingUrl] = useState('');
  const [isCloseToday, setIsCloseToday] = useState(false);
  const [isPreventedPage, setIsPreventedPage] = useState(
    false, // true로 하면 나갈때 체크함
  );

  const onPreventPageOut = (url: string) =>
    setRoutingUrl(url);

  const onChangePage = () => {
    if (isCloseToday) {
      localStorage.setItem(
        'ticketPageOutExpired',
        moment().add(1, 'days').format('YYYYMMDD'),
      );
    }
    setRoutingUrl('');
    setIsPreventedPage(false);
    setTimeout(() => router.push('/'), 0);
  };

  const closePopupStatusChange = () => {
    const expired =
      localStorage.getItem('ticketPageOutExpired') || '';

    if (moment() < moment(expired)) {
      setIsPreventedPage(false);
    }
  };

  const onChangeCloseToday = () =>
    setIsCloseToday(!isCloseToday);

  usePreventRouteChange(isPreventedPage, onPreventPageOut);

  const checkboxData = {
    isActive: isCloseToday,
    onChange: onChangeCloseToday,
  };

  const onLoadUserInfo = async () => {
    if (await checkLogin()) {
      handleLoadUserInfoData();
    }
  };

  useEffect(() => {
    if (isLoading) hideLoading();
    // onLoadPrimaryData();
    closePopupStatusChange();
    onLoadUserInfo();
  }, []);

  // const recentTicketList: {
  //   type: string;
  //   from: string;
  //   to: string;
  //   date: string;
  //   ticket: string;
  // }[] = [
  //   {
  //     type: '왕복',
  //     from: '서울/인천(ICN)',
  //     to: '호치민(SGN)',
  //     date: '10. 20. (일) - 10. 24. (수)',
  //     ticket: '성인2, 소아2, 유아1',
  //   },
  //   {
  //     type: '편도',
  //     from: '서울/인천(ICN)',
  //     to: '호치민(SGN)',
  //     date: '10. 20. (일) - 10. 24. (수)',
  //     ticket: '성인2, 소아2, 유아1',
  //   },
  //   {
  //     type: '왕복',
  //     from: '서울/인천(ICN)',
  //     to: '호치민(SGN)',
  //     date: '10. 20. (일) - 10. 24. (수)',
  //     ticket: '성인2, 소아2, 유아1',
  //   },
  // ];

  return (
    <S.container>
      {routingUrl && (
        <PopupPageoutAlert
          onClickFirstButton={onChangePage}
          onClickSecondButton={() => onPreventPageOut('')}
        >
          <S.popupContainer>
            <h3 className="font-bold">
              찾으시는 항공권이 없으신가요?
            </h3>
            <p>
              항공권을 재검색하는 경우 현재 금액의 항공권이
              매진되어 가격이 변동 될 수 있습니다. 페이지를
              나가시겠습니까?
            </p>
            <div className="remove-popup">
              <Checkbox {...checkboxData}>
                오늘 하루 다시 보지 않기
              </Checkbox>
            </div>
          </S.popupContainer>
        </PopupPageoutAlert>
      )}
      <S.bridgeWrapper>
        <h1 className="font-bold">
          에어프레미아와
          <br />
          함께 떠나보세요 :-)
        </h1>
        <S.body>
          <TicketSearchHorizontal hasItineraryType />
        </S.body>
        <S.recentTicket>
          {/* {!recentTicketList.length ? (
            <div className="no-history">
              <h4 className="font-bold">
                최근 검색한 항공권
              </h4>
              <sub>
                최근 검색 내역이 존재하지 않습니다. 검색
                내역은 쿠키 값으로 자동 저장됩니다.
                <br />
                항공권 예매 시 편리하게 이용해보세요.
              </sub>
              <p className="emoji">:-)</p>
            </div>
          ) : (
            <div>
              <h4 className="font-bold">
                최근 검색한 항공권 <em>3</em>
              </h4>
              <sub>
                최근 검색한 내역은 최대 3개까지 저장되며,
                항공권 검색은 항공권 가격에 영향을 주지
                않습니다.
              </sub>
              <div className="history-ticket">
                {map(recentTicketList, (item, i) => {
                  return (
                    <div
                      className="inner"
                      key={`recentTicket${i.toString()}`}
                    >
                      <div className="type">
                        {item.type}
                      </div>
                      <div className="traval">
                        <p>
                          {item.from} - {item.to}
                        </p>
                      </div>
                      <div className="info">
                        <p>{item.date}</p>
                        &nbsp;<p className="bar">{'|'}</p>&nbsp;
                        <p>{item.ticket}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )} */}
        </S.recentTicket>
      </S.bridgeWrapper>
    </S.container>
  );
}

const S = {
  container: styled.div`
    /* width: 1400px; */
    box-sizing: border-box;
  `,

  popupContainer: styled.div`
    h3 {
      font-size: 30px;
      line-height: 40px;
      letter-spacing: -0.6px;
      margin-bottom: 15px;
    }

    p {
      font-size: 14px;
      line-height: 26px;
      letter-spacing: -0.28px;
    }

    .remove-popup {
      height: 47px;
      font-size: 15px;
      font-weight: 600;
      display: flex;
      align-items: center;
      margin-top: 48px;
      color: ${LIGHT_GRAY7};
    }
  `,

  bridgeWrapper: styled.div`
    margin-top: 60px;
    h1 {
      font-size: 40px;
      font-weight: bold;
      line-height: 48px;
      letter-spacing: -0.3;
      margin-bottom: 100px;
    }
    @media only screen and (max-width: 767px) { 
      margin-bottom: 80px;
      h1 {
        font-size: 26px;
        line-height: 36px;
        letter-spacing: -0.52;
        margin-bottom: 80px;
      }
    }
  `,

  body: styled.div`
    user-select: none;

    .travel_type_wrapper {
      display: flex;
      margin-bottom: 30px;
    }
  `,

  recentTicket: styled.div`
    margin-top: 80px;
    h4 {
      font-size: 24px;
      margin-bottom: 20px;
    }

    em {
      font-size: 24px;
      font-style: normal;
      color: ${ORANGE2};
      font-weight: 600;
    }

    sub {
      font-size: 18px;
      bottom: 0;
      position: unset;
      vertical-align: unset;
      color: ${LIGHT_GRAY8};
    }

    .no-history {
      sub {
        color: ${LIGHT_GRAY7};
      }
    }

    .emoji {
      margin-top: 30px;
      font-size: 30px;
      line-height: 22px;
      letter-spacing: -0.6px;
      color: ${LIGHT_GRAY6};
    }

    .history-ticket {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 18px;
      margin-top: 30px;

      .inner {
        width: calc(33.33% - 20px);
        border-radius: 8px;
        border: solid 1px ${LIGHT_GRAY6};
        background-color: ${WHITE1};
        padding: 20px;
        box-sizing: border-box;
      }

      .type {
        padding: 4px 8px;
        border-radius: 4px;
        background-color: ${DARK_GRAY1};
        height: 20px;
        padding-bottom: 2px;
        width: fit-content;
        font-size: 18px;
        font-weight: 600;
        color: ${WHITE1};
        margin-bottom: 20px;
        display: flex;
        align-items: center;
      }

      .traval {
        margin-bottom: 13px;
        p {
          font-size: 18px;
        }
      }

      .info {
        font-size: 18px;
        display: flex;
        align-items: center;
        color: ${LIGHT_GRAY8};
      }
    }
    @media only screen and (max-width: 1300px) {
      .info {
        flex-direction: column;
        align-items: start !important;
      }
      .bar {
        display: none;
      }
    }
    @media only screen and (max-width: 1199px) {
      .selectsWrapper {
        .selectWrapper {
          width: 170px;
        }   
      }
    }
    @media only screen and (max-width: 1059px) {
      .history-ticket {
        .inner {
          width: calc(33.33% - 6px);
          }
        }
      }
    }
    @media only screen and (max-width: 999px) {
      .history-ticket {
        .traval {
          p {
            font-size: 16px;
            letter-spacing: -0.52px;
          }
        }
        .info {
          font-size: 16px;
        }
      }
    }
    @media only screen and (max-width: 767px) { 
      h4 {
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.2;
      }
      em {
        font-size: 20px;
      }
      sub {
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.2;
      }
      .history-ticket {
        flex-direction: column;
        .inner {
          width: 100%;
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0px;
          }
        }
        .type {
          font-size: 14px;
        }
        .info {
          font-size: 14px;
        }
      }
    }
    @media only screen and (max-width: 599px) {
      
    }
    @media only screen and (max-width: 479px) {
      h4 {
        font-size: 16px;
      }
      sub {
        font-size: 14px;
      }
      .history-ticket {
        .traval {
          p {
            font-size: 14px;
            letter-spacing: -0.3px;
          }
        }
        .info {
          font-size: 14px;
        }
      }
    }
  `,
};

//   body: styled.div`
//     user-select: none;

//     .travel_type_wrapper {
//       display: flex;
//       margin-bottom: 30px;
//     }
//   `,

//   ticketWrapper: styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     height: 56px;
//     margin-top: 24px;
//   `,

//   ticketMultiWrapper: styled.div`
//     height: 100%;
//     margin-top: 24px;

//     .date {
//       .calendar {
//         top: 45px;
//         left: 0;
//       }
//     }
//   `,

//   ticketBox: styled.div`
//     width: 1030px;
//     height: 100%;
//     border-radius: 8px;
//     border: solid 1px ${BLACK};
//     display: flex;
//     align-items: center;

//     & > div {
//       height: 20px;
//       padding: 0 20px;
//       box-sizing: border-box;
//       & > div {
//         & > input {
//           height: 20px;
//           border: 0;
//         }
//       }
//     }

//     .service_location,
//     .ticket {
//       top: 30px;
//       z-index: 10;
//       left: -20px;
//       position: relative;
//     }

//     .from {
//       width: 230px;
//       border-right: solid 1px ${GRAY5};
//     }
//     .to {
//       width: 230px;
//       border-right: solid 1px ${GRAY5};
//     }
//     .date {
//       width: 249px;
//       border-right: solid 1px ${GRAY5};

//       .calendar {
//         top: 30px;
//         z-index: 10;
//         left: -20px;
//         position: relative;
//       }
//     }
//     .travelers {
//       width: 320px;
//     }
//   `,

//   ticketBoxMulti: styled.div`
//     width: 100%;
//     height: 56px;
//     border-radius: 8px;
//     border: solid 1px ${BLACK};
//     display: flex;
//     align-items: center;

//     margin-bottom: 10px;

//     & > div {
//       height: 20px;
//       box-sizing: border-box;
//       position: relative;
//       & > div {
//         & > input {
//           height: 20px;
//           border: 0;
//         }
//       }
//     }

//     .section_no {
//       width: 80px;
//       color: ${BLUE};
//       text-align: center;
//       letter-spacing: -0.3px;
//       border-right: solid 1px ${GRAY5};
//     }

//     .from,
//     .to {
//       padding: 0 20px;
//       width: 360px;
//       border-right: solid 1px ${GRAY5};

//       .service_location {
//         top: 45px;
//         left: 0;
//         z-index: 1;
//       }
//     }

//     .date {
//       padding: 0 20px;
//       width: 386px;
//     }

//     .travelers {
//       width: 320px;
//     }
//   `,

//   travelers: styled.div`
//     display: flex;
//     position: relative;
//     justify-content: space-between;
//     width: 100%;
//     height: 56px;

//     .input_wrapper {
//       display: flex;
//       align-items: center;
//       height: 100%;
//       width: 1030px;
//       border-radius: 8px;
//       border: solid 1px ${BLACK};
//       padding: 0 20px;
//       box-sizing: border-box;
//       & > div:first-of-type {
//         height: 20px;
//         width: 988px;
//       }
//       input {
//         height: 20px;
//         border: 0;
//       }
//     }

//     .ticket {
//       position: absolute;
//       top: 65px;
//       left: 0;
//     }
//   `,

//   searchBtn: styled.button`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 160px;
//     height: 100%;
//     background-color: ${NAVY};
//     color: ${WHITE};
//     border-radius: 8px;
//   `,
// };

export default TicketFlight;
