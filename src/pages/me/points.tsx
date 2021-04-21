import { FC, useState, useEffect } from 'react';
import { useMe } from '@airpremia/core/hooks';
import { useMeLocal } from 'src/hooks';
import {
  PointsHeader,
  PointsBody,
  ButtonSubType5,
  Caution,
  PointsTemplate,
} from 'src/components';
import { Container } from 'src/styles/layout';

interface IProps {}

const Mileage: FC<IProps> = ({}) => {
  const { meStore, onLoadPointsStatus } = useMe();
  const { userFullName } = useMeLocal();
  const { pointsStatus, pointsTransactionsList } = meStore;
  const [moreUnit, setMoreUnit] = useState(1);
  const onClickMore = () => {
    setMoreUnit(moreUnit + 1);
  };

  const caution = {
    title: '포인트 유의사항',
    body: [
      '적립 금액은 각종 프로모션, 쿠폰 적용 후의 항공권 결제 금액만을 기준으로 하며 유류할증료, 공항사용료, 세금, 부가서비스 결제 금액은 적립에서 제외됩니다.',
      '포인트로 구매한 항공권, 포인트로 승급한 좌석처럼 포인트로 결제한 금액에 대해서는 포인트가 적립되지 않습니다.',
      '이벤트, 특가 항공권 등 포인트 적립이 되지 않는 클래스가 존재합니다. 클래스 선택 단계에서 안내하고 있으며 구매 전 확인이 필요합니다.',
      '실제 탑승 후 n영업일 안에 탑승자 본인 명의의 계정으로 적립되며 탑승하지 않았을 경우 포인트는 적립되지 않습니다.',
      '왕복 여정 탑승 시 가는 편 여정에 탑승 한 뒤 적립 인정 결제 금액의 50%가 적립되며 오는 편 여정에 탑승 한 뒤에 나머지 50%가 적립됩니다.',
      '현장에서 좌석 업그레이드를 현금, 카드 등으로 결제할 경우 업그레이드 가격에 대한 포인트도 적립됩니다.',
      '좌석을 점유하지 않는 유아(0~2세)용 항공권은 포인트가 적립되지 않습니다.',
      '좌석을 점유하는 유아 및 소아(24개월~12세)는 포인트 적립 대신 함께 예약한 성인에게 다음 예약 시 사용할 수 있는 할인 쿠폰을 제공합니다. 소아와 함께 탑승해야만 사용할 수 있으며 항공권 결제 금액에 따라 30만원 미만 10,000원, 30만원 이상 ~ 60만원 미만 20,000원, 60만원 이상 ~ 100만원 미만 30,000원, 100만원 이상 ~ 150만원 미만 40,000원, 150만원 이상 50,000원 할인 쿠폰을 제공합니다. 이 할인 쿠폰의 유효 기간은 n년입니다.',
      '포인트 유효기간은 탑승일 기준 3년입니다.',
    ],
  };

  useEffect(() => {
    onLoadPointsStatus();
  }, []);

  return (
    <Container>
      <PointsTemplate
        hasMoreButton={
          pointsTransactionsList.length > 10 * moreUnit
        }
        title="포인트"
        pointsHeader={
          <PointsHeader
            name={userFullName}
            points={pointsStatus?.active}
            expirationDate={pointsStatus?.toBeExpiredAt}
            toBeExpiratedPoints={pointsStatus?.toBeExpired}
          />
        }
        pointsBody={
          <PointsBody
            list={pointsTransactionsList.slice(
              0,
              10 * moreUnit,
            )}
          />
        }
        more={
          <ButtonSubType5
            text="탑승권 더보기"
            onClick={onClickMore}
          />
        }
        caution={
          <Caution
            isTitleBold
            title={caution.title}
            body={caution.body}
          />
        }
      />
    </Container>
  );
};

export default Mileage;
