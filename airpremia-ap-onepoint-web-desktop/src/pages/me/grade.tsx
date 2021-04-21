import { FC } from 'react';
import { Container } from 'src/styles/layout';
import { useAuth, useMe } from '@airpremia/core/hooks';
import {
  GradeDashboard,
  MembershipDashboard,
  UserGradeGuideTable,
  Caution,
  UserGradeTemplate,
} from 'src/components';

interface IProps {}

const Grade: FC<IProps> = ({}) => {
  useAuth({ canAccessOnlyLogin: true });
  const {
    meStore: { userInfo },
  } = useMe();

  const grade = userInfo?.grade.toUpperCase();

  const caution = {
    title: '회원 등급 유의사항',
    body: [
      '회원 등급의 승급, 유지, 강등 심사는 매월 1일에만 실시하며 2023년 5월 1일에는 2021년 5월 ~ 2023년 4월에 적립된 포인트가 기준입니다.',
      '최근 24개월 동안 적립된 포인트가 80,000 M 이상일 경우 SILVER, 300,000 M 이상일 경우 GOLD 등급으로 회원 등급이 승급됩니다.',
      '승급된 회원 등급은 24개월 동안 유지되며 24개월 후의 포인트 적립 실적에 따라 승급, 유지, 강등이 이루어집니다.',
      'SILVER, GOLD 회원은 등급이 유지되는 24개월 안에 승급에 필요한 포인트 기준을 달성할 경우 등급이 유지되며 아닐 경우 강등됩니다.',
      '포인트 적립 정책에 따라 항공권 결제를 통해 적립된 포인트만 등급 산정 기준에 포함됩니다.',
      '포인트 충전, 선물받은 포인트, 제휴 포인트 등 항공권 결제를 통해 적립되지 않은 포인트는 등급 산정에서 제외됩니다.',
    ],
  };

  return (
    <Container>
      <UserGradeTemplate
        title="회원 등급"
        gradeDashboard={<GradeDashboard grade={grade} />}
        membershipDashboard={
          <MembershipDashboard
            mileage={1000}
            grade={grade}
          />
        }
        userGradeGuideTable={
          <UserGradeGuideTable grade={grade} />
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

export default Grade;
