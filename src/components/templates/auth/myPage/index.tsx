import { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface IProps {
  title: string;
  profileGroup: ReactElement;
  tab: ReactElement;
  tripList: ReactElement;
  // linkBarWithImage: ReactElement;
  warningList: ReactElement;
  paging: ReactElement;
}

const MyPageTemplate: FC<IProps> = ({
  title,
  profileGroup,
  tab,
  tripList,
  // linkBarWithImage,
  warningList,
  paging,
}) => {
  return (
    <S.container>
      <S.title>
        <h1 className="font-bold">{title}</h1>
      </S.title>
      <S.profileGroup>{profileGroup}</S.profileGroup>
      <S.tab>{tab}</S.tab>
      <S.table>{tripList}</S.table>
      <S.paging>{paging}</S.paging>
      {/* <S.linkBarWithImage>
        {linkBarWithImage}
      </S.linkBarWithImage> */}
      <S.cautionGuide>{warningList}</S.cautionGuide>
    </S.container>
  );
};

const S = {
  container: styled.div``,

  title: styled.div`
    h1 {
      font-size: 40px;
      line-height: 40px;
      letter-spacing: -0.8px;
    }

    @media only screen and (max-width: 767px) { 
        h1 {
          font-size: 30px;
        }
    }
  `,

  profileGroup: styled.div`
    margin-top: 100px;

    @media only screen and (max-width: 1059px) { 
        margin-top: 80px;
    }

    @media only screen and (max-width: 767px) { 
        margin-top: 60px;
    }
  `,

  tab: styled.div`
    margin-top: 100px;

    @media only screen and (max-width: 1059px) { 
        margin-top: 80px;
    }

    @media only screen and (max-width: 767px) { 
        margin-top: 60px;
    }
  `,

  table: styled.div`
    margin: 60px 0 80px;

    @media only screen and (max-width: 1059px) { 
        margin: 40px 0 60px;
    }

    @media only screen and (max-width: 767px) { 
        margin: 20px 0 40px;
    }
  `,

  linkBarWithImage: styled.div``,

  cautionGuide: styled.div`
    margin-top: 80px;

    @media only screen and (max-width: 1059px) { 
        margin-top: 60px;
    }

    @media only screen and (max-width: 767px) { 
        margin-top: 40px;
    }
  `,
  paging: styled.div`
    // padding: 200px 0;

    p {
      margin-bottom: 100px;
      font-size: 30px;
      text-align: center;
    }

    @media only screen and (max-width: 1059px) { 
        p {
          margin-bottom: 80px;
        }
    }
    
    @media only screen and (max-width: 767px) { 
        p {
          margin-bottom: 60px;
          font-size: 22px;
        }
    }
  `,
};

export default MyPageTemplate;
