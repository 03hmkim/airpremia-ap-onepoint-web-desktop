import { flow, map } from 'lodash/fp';
import styled from 'styled-components';
import FlightIcon from 'public/images/ticket/ico-flight.svg';
import { ORANGE2 } from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {
  tags: React.ReactElement | React.ReactElement[];
  passengers: string;
  origin: string;
  originTime: string;
  destination: string;
  destinationTime: string;
  startDate: string;
  classType: string;
  price: string;
  currency: string;
}

function Ticket({
  tags,
  passengers,
  origin,
  originTime,
  destination,
  destinationTime,
  startDate,
  classType,
  price,
  currency,
}: IProps) {
  const getTags = flow(
    map((tag: React.ReactElement) => {
      return (
        <div key={`${tag.key}`} className="tagWrapper">
          {tag}
        </div>
      );
    }),
  )(tags);

  return (
    <S.container>
      <S.top>
        <div className="left">{getTags}</div>
        <div className="right">{passengers}</div>
      </S.top>
      <S.bottom>
        <div className="left">
          <div className="originWrapper">
            <div className="label">{origin}</div>
            <div className="value">{originTime}</div>
          </div>
          <div className="flightIconWrapper">
            <FlightIcon />
          </div>
          <div className="destinationWrapper">
            <div className="label">{destination}</div>
            <div className="value">{destinationTime}</div>
          </div>
          <div className="startTimeWrapper">
            <div className="label">출발일</div>
            <div className="value">{startDate}</div>
          </div>
          <div className="classTypeWrapper">
            <div className="label">클래스</div>
            <div className="value">{classType}</div>
          </div>
        </div>
        <div className="right">
          <div className="price font-bold">{price}</div>
          <div className="currency">{currency}</div>
        </div>
      </S.bottom>
    </S.container>
  );
}

Ticket.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>``,
  top: styled.div`
    display: flex;
    justify-content: space-between;
    > .left {
      display: flex;
      .tagWrapper + .tagWrapper {
        padding-left: 3px;
      }
    }
    > .right {
      font-size: 14px;
      font-weight: 600;
      letter-spacing: -0.28px;
    }
  `,
  bottom: styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    > .left {
      display: flex;
      align-items: flex-end;
      .label {
        font-size: 13px;
        letter-spacing: -0.26px;
      }
      .value {
        padding-top: 12px;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.54;
        letter-spacing: -0.36px;
      }
      .flightIconWrapper {
        padding: 0 20px;
      }
      .destinationWrapper {
        width: 146px;
      }
      .startTimeWrapper {
        width: 193px;
      }
    }
    > .right {
      display: flex;
      align-items: flex-end;
      padding-bottom: 5px;
      color: ${ORANGE2};
      .price {
        font-size: 26px;
        letter-spacing: -0.52px;
      }
      .currency {
        padding-bottom: 2px;
        font-size: 18px;
        padding-left: 4px;
      }
    }

    @media only screen and (max-width: 1059px) { 
      display: block;

      .left{
        width: 100%;
        justify-content: space-between;
      }

      .right{
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    }

    @media only screen and (max-width: 767px) { 
      .left {
        height: auto;
        display: block;
        overflow: hidden;

        .value {
          font-size: 16px;
        }
        .originWrapper {
          width: calc( 50% - 70px );
          float: left;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
        }
        .flightIconWrapper {
          width: 100px;
          float: left;
        }
        .destinationWrapper {
          width: calc(50% - 70px);
          float: left;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          flex-direction: column;
        }
        .startTimeWrapper {
          width: 50%;
          margin-top: 20px;
          clear: both;
          float: left;          
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
        }
        .classTypeWrapper{
          width: 50%;
          margin-top: 20px;
          float: left;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          flex-direction: column;
        }
      }
    }
  `,
};

export default Ticket;
