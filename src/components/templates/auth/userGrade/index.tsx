import { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface IProps {
  title: string;
  gradeDashboard: ReactElement;
  membershipDashboard: ReactElement;
  userGradeGuideTable: ReactElement;
  caution: ReactElement;
}

const UserGradeTemplate: FC<IProps> = ({
  title,
  gradeDashboard,
  membershipDashboard,
  userGradeGuideTable,
  caution,
}) => {
  return (
    <S.container>
      <S.title>
        <h1 className="font-bold">{title}</h1>
      </S.title>
      <S.gradeDashboard>{gradeDashboard}</S.gradeDashboard>
      <S.membershipDashboard>
        {membershipDashboard}
      </S.membershipDashboard>
      <S.userGradeGuideTable>
        {userGradeGuideTable}
      </S.userGradeGuideTable>
      <S.caution>{caution}</S.caution>
    </S.container>
  );
};

const S = {
  container: styled.div``,

  title: styled.div`
    h1 {
      font-size: 36px;
      line-height: 50px;
      letter-spacing: -0.72px;
    }
    margin-bottom: 80px;
    
    @media only screen and (max-width: 1059px) { 
        margin-bottom: 60px;
    }
    @media only screen and (max-width: 767px) { 
        h1 {
          font-size: 26px;
        }
        margin-bottom: 40px;
    }
  `,

  gradeDashboard: styled.div``,

  membershipDashboard: styled.div`
    margin-top: 10px;
  `,

  userGradeGuideTable: styled.div`
    margin-top: 80px;
    @media only screen and (max-width: 1059px) { 
        margin-top: 60px;
    }
    @media only screen and (max-width: 767px) { 
        margin-top: 40px;
    }
  `,

  caution: styled.div`
    margin-top: 80px;
    @media only screen and (max-width: 1059px) { 
        margin-top: 60px;
    }
    @media only screen and (max-width: 767px) { 
        margin-top: 40px;
    }
  `,
};

export default UserGradeTemplate;
