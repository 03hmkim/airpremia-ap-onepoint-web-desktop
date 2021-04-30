import styled from 'styled-components';
import {
  LIGHT_BLUE1,
  WHITE1,
} from '@airpremia/cdk/styles/colors';
import SvgKakao from 'public/images/ico_kakaotalk.svg';
import SvgLink from 'public/images/ico_link.svg';

interface IStyleProps {}
interface IProps extends IStyleProps {}

const onUrlCopy = async () =>
  {
    var element = document.createElement("textarea");
    document.body.appendChild(element);
    element.value = window.location.protocol + "//" + window.location.host + "/checkin/online";
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
    alert("URL이 복사되었습니다.");
  };

function PassengerInfoShareButton({}: IProps) {
  return (
    <S.container>
      <div className="description">
        주소를 탑승객들에게 공유하면 탑승객들이 직접 여권
        정보를 입력할 수 있어요!
      </div>
      <div className="buttonWrapper">
        <button className="kakao" onClick={() => {}}>
          <SvgKakao />
          <span className="label">카톡 공유</span>
        </button>
        <button className="url" onClick={onUrlCopy}>
          <SvgLink />
          <span className="label">URL 복사</span>
        </button>
      </div>
    </S.container>
  );
}

PassengerInfoShareButton.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding: 0 30px;
    border-radius: 8px;
    background-color: ${LIGHT_BLUE1};
    .description {
      font-size: 18px;
      font-weight: 600;
      letter-spacing: -0.3px;
    }
    .buttonWrapper {
      button + button {
        margin-left: 10px;
      }
      button {
        width: 119px;
        height: 40px;
        border-radius: 19px;
        background-color: ${WHITE1};
        svg {
          vertical-align: bottom;
        }
        .label {
          padding-left: 6px;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: -0.3px;
          line-height: 1;
        }
      }
    }

    @media only screen and (max-width: 1059px) { 
      display:block;
      height:auto;
      padding:20px;

      .buttonWrapper {
        margin-top:20px;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
      }

      .description {
        display:flex;
        justify-content:center;
        align-items:center;
      }
    }

    @media only screen and (max-width: 767px) { 
      .buttonWrapper {
        button .label {
          font-size: 14px;
        }
      }

      .description {
        font-size: 15px;
        line-height: 1.5em;
      }
    }
  `,
};

export default PassengerInfoShareButton;
