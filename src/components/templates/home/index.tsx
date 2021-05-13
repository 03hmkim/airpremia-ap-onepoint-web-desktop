import styled from 'styled-components';

import {
  MainSecTitle,
  MainSecEvent,
  MainSecNotice,
  QuickMenu,
} from 'src/components';
// import randomIMG from './randomImage';

interface IStyleProps {}
interface IProps extends IStyleProps {
  hero: React.ReactElement;
  eventNavigation: React.ReactElement;
  noticeNavigation: React.ReactElement;
}

function Home({
  hero,
  // eventNavigation,
  // noticeNavigation,
}: IProps) {
  return (
    <S.container>
      <div className="heroWrapper">
        <div className="innerWrapper">{hero}</div>
      </div>
      <div className="quickWrapper max">
        <QuickMenu />
      </div>
      <div className="sectionWrapper max">
        <div className="title">
          <MainSecTitle title="EVENT" goto="/ticket/promotion" />
        </div>
        <div className="cont">
          <MainSecEvent />
        </div>
      </div>
      <div className="sectionWrapper max">
        <div className="title">
          <MainSecTitle title="NOTICE" goto="/customer/notice" />
        </div>
        <div className="cont">
          <MainSecNotice />
        </div>
      </div>
      {/* <div className="navigationWrapper innerWrapper">
        <div className="eventNavigationWrapper">
          {eventNavigation}
        </div>
        <div className="noticeNavigationWrapper">
          {noticeNavigation}
        </div>
      </div> */}
    </S.container>
  );
}

Home.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    .innerWrapper {
      box-sizing: border-box;
      margin: 0 auto;
      padding: 0 120px;
    }
    .heroWrapper {
      width: 100%;
      height: 600px;
      // background-image: url();
      // background-size: cover;
      // background-repeat: no-repeat;
      // background-position: center;
    }
    .navigationWrapper {
      padding-top: 800px;
      display: flex;
      .eventNavigationWrapper {
        width: 360px;
      }
      .noticeNavigationWrapper {
        flex: 1;
        margin-left: 80px;
      }
    }
    .quickWrapper{
      margin: 55px 0 120px;
    }
    .sectionWrapper{
      padding: 0 120px;
      margin-bottom: 140px;
      box-sizing: border-box;

      &:last-child{
        margin-bottom: 0;
      }

      .title {

      }

      .cont {
        margin-top: 24px;
      }
    }

    .max{
      max-width: 1710px;
      margin-left: auto;
      margin-right: auto;
    }
    
    @media only screen and (max-width: 1430px) {
      .innerWrapper {
        padding: 0 60px;
      }

      .sectionWrapper {
        max-width: 1280px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 25px;
        padding-right: 25px;
        box-sizing: content-box;
      }
    }

    @media only screen and (max-width: 1059px) {
      .innerWrapper {
        padding: 0 25px;
      }
    }

    @media only screen and (max-width: 767px) {

      .sectionWrapper{
        margin-bottom: 70px;

        .cont {
          margin-top: 10px;
        } 
      }
    }

    @media only screen and (max-width: 599px) {
      .heroWrapper {
        height: 470px;
      }
    }
  `,
};

export default Home;
