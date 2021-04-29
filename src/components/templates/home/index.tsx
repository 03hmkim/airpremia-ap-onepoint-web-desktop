import styled from 'styled-components';
import randomIMG from './randomImage';
import {
  MainSecTitle,
  MainSecEvent,
  MainSecNotice,
  QuickMenu,
} from 'src/components';

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
    max-width: 100% !important;
    padding: 0 !important;
    margin-top: 0 !important;

    .innerWrapper {
      box-sizing: border-box;
      max-width: 1920px;
      /* min-width: 1440px; */
      margin: 0 auto;
      padding: 0 80px;
    }
    .heroWrapper {
      width: 100%;
      /* min-width: 1440px; */
      height: 800px;
      background-image: url(${randomIMG});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
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
      margin: 80px 0;
    }
    .sectionWrapper{
      padding: 0 25px;
      margin-bottom: 130px;
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
      max-width: 1300px;
      margin-left: auto;
      margin-right: auto;
    }

    @media only screen and (max-width: 1440px) {
      .heroWrapper {
        height: 600px;
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
