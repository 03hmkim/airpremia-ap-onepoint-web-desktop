import styled from 'styled-components';
import {
  LIGHT_GRAY6,
  LIGHT_GRAY5,
} from '@airpremia/cdk/styles/colors';
import { Checkbox } from 'src/components';
import { TaskButton } from 'src/components';

interface IStyleProps {}
interface IProps extends IStyleProps {
  top: React.ReactElement;
  title: React.ReactElement;
  tickets: React.ReactElement[];
  detailButton: React.ReactElement;
  agreeButtons: React.ReactElement[];
  isAgree: boolean;
  onChangeAgree: () => void;
  onClickPayMethodButton: () => void;
}

function TicketPayConfirm({
  top,
  title,
  tickets,
  detailButton,
  agreeButtons,
  isAgree,
  onChangeAgree,
  onClickPayMethodButton,
}: IProps) {
  const getTickets = tickets?.map(
    (ticket: React.ReactElement, index: number) => {
      return (
        <div key={`${index}`} className="ticketWrapper">
          {ticket}
        </div>
      );
    },
  );
  const getAgreeButtons = agreeButtons?.map(
    (agreeButton: React.ReactElement, index: number) => {
      return (
        <div
          key={`${index}`}
          className="agreeButtonWrapper"
        >
          {agreeButton}
        </div>
      );
    },
  );

  return (
    <S.container>
      <div className="top">{top}</div>
      <h2 className="title">{title}</h2>
      <div className="tickets">{getTickets}</div>
      <div className="detailButtonWrapper">
        {detailButton}
      </div>
      <div className="section">
        <h3 className="font-bold">예약 규정 동의</h3>
        <div className="agreeButtonsWrapper">
          {getAgreeButtons}
        </div>
        <div className="agreeCheckboxWrapper">
          <Checkbox
            isActive={isAgree}
            onChange={onChangeAgree}
          >
            <span>
              상세 요금 내역과 예약 규정을 확인했습니다.
            </span>
          </Checkbox>
        </div>
      </div>
      <div className="nextButtonWrapper">
        <TaskButton
          disabled={!isAgree}
          onClick={onClickPayMethodButton}
        >
          결제 방식 선택
        </TaskButton>
      </div>
    </S.container>
  );
}

TicketPayConfirm.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    padding-bottom: 160px;
    .top {
      padding-top: 61px;
    }
    .tickets {
      margin-top: 100px;
      padding: 0 30px;
      border-radius: 8px;
      border: solid 1px ${LIGHT_GRAY6};
      .ticketWrapper {
        padding: 30px 0;
      }
      .ticketWrapper + .ticketWrapper {
        border-top: 1px solid ${LIGHT_GRAY5};
      }
    }
    .detailButtonWrapper {
      padding-top: 20px;
    }
    .section {
      padding-top: 80px;
      h3 {
        font-size: 22px;
        letter-spacing: -0.44px;
      }
    }
    .agreeButtonsWrapper {
      display: flex;
      justify-content: space-between;
      padding-top: 30px;

      .agreeButtonWrapper {
        width: calc(25% - 10px);
      }
    }
    .agreeCheckboxWrapper {
      padding-top: 30px;
    }
    .nextButtonWrapper {
      padding-top: 90px;
      width: 300px;
      margin: 0 auto;
    }

    @media only screen and (max-width: 767px) { 
      .tickets {
        padding: 0 20px;
        margin-top: 40px;
      }
      .agreeButtonsWrapper {
        display: block;
        height: auto;
        overflow: hidden;

        .agreeButtonWrapper {
          width: calc(50% - 5px);
          margin-bottom: 10px;
          float: left;

          &:nth-child(even){
            float: right;
          }
        }
      }
      .agreeCheckboxWrapper {
        padding-top: 10px;
      }
      .nextButtonWrapper {
        padding-top:40px;
      }
  }
  `,
};

export default TicketPayConfirm;
