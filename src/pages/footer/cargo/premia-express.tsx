import styled from 'styled-components';
import { useModal } from 'src/hooks';
import {
  ComTitle,
  NewModal,
  PopupTitle,
  TaskButton,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import { EScrollType } from 'src/components/templates/centerPopup';


function CargoPremia(){

  const {
    onShowNewModal,
    UIStore: { newModal },
  } = useModal();

  const { onHideNewModal } = useModal();
  
  const onPrev = () =>
    onShowNewModal('onPrev');

  const onClickModal = () => {
    switch (newModal.target) {
      case 'onPrev':
        return (
          <NewModal
            className="hAuto"
            type={EScrollType.TYPE1}
            title={
              <S.modalTitle>
                <PopupTitle>기다려주세요 :-)</PopupTitle>
              </S.modalTitle>
            }
            body={
              <>
                <S.textArea>
                  국제선 취항 시 공개 예정입니다
                </S.textArea>
              </>
            }
            button={
              <S.btnArea>
                <TaskButton onClick={onHideNewModal}>확인</TaskButton>
              </S.btnArea>
            }
          />
        );
      default:
        return null;
    };
  };

  return (
    <Container>
      {onClickModal()}
      <ComTitle
        title="프레미아 익스프레스"
      />
      <S.container>
        <C.wrap>
          <C.body>
            <C.title>프레미아 익스프레스를 통해 door to door service를 이용해 보세요.</C.title>
            <C.tmi>
              <C.p>사업상 파트너에게 중요한 화물을 보내거나 당신의 사랑하는 사람에게 따듯한 마음을 빠르고 안전하게 원하는 장소까지 보내세요.
                  국내 항공사 최초로 카고 프레미아는 고객의 화물을 직접 받아 고객이 원하는 곳까지 운송하여 드립니다. (Last mile service)</C.p>
            </C.tmi>
            <C.mlz onClick={onPrev}><u>그 밖에 화물 상품 소개</u></C.mlz>
            <C.m100>
              <C.title>이제 카고 프레미아에 연락 주세요.</C.title>
            </C.m100>
            <C.tmi>
              <C.p>여러분의 국제화물운송을 더욱 편하게 이용할 수 있는 그 가능성을 열어드립니다.</C.p>
            </C.tmi>
            <C.tmi>
              <C.txt>연락처: <span className="info">070-7468-1623</span></C.txt>
              <C.txt>이메일: <span className="info">contact@airpremia.com</span></C.txt>
            </C.tmi>
            <C.mlz onClick={onPrev}><u>카고 뉴스 바로가기</u></C.mlz>
          </C.body>
        </C.wrap>
      </S.container>
    </Container>
  );
}

const S = {
  container : styled.div`
  `,

  modalTitle : styled.div``,

  textArea: styled.div`
  `,

  btnArea: styled.div`
  `,
};

const C = {
  wrap: styled.div`
  `,
  body: styled.div`
    border-top: 2px solid ${DARK_GRAY1};
    padding-top: 30px;
    @media only screen and (max-width: 767px){
      padding-top: 20px;
    }
  `,
  m100: styled.div`
    margin-top: 100px;
    @media only screen and (max-width: 767px){
      margin-top: 60px;
    }
  `,
  title: styled.h4`
    font-size: 24px;
    font-weight: 700;
    line-height: 2em;

    @media only screen and (max-width: 767px) {
      font-size: 22px;
    }
  `,
  p: styled.p`
    font-size: 18px;
    color: ${DARK_GRAY1};
    line-height: 2em;

    @media only screen and (max-width: 767px) {
      font-size: 14px;
    }
  `,
  b: styled.p`
    font-weight: 700;
  `,
  helpl: styled.p`
    width: 100%;
    padding-top: 80px;
    border-bottom: 1px solid ${LIGHT_GRAY5};
  `,
  tmi: styled.p`
    margin-top: 30px;

    @media only screen and (max-width: 767px) {
      margin-top: 20px;
    }
  `,
  txt: styled.p`
    font-size: 18px;
    line-height: 2em;

    @media only screen and (max-width: 767px) {
      font-size: 14px;
    }
  `,
  mlz: styled.a`
    display: inline-block;
    font-size: 18px;
    line-height: 2em;
    color: ${BLUE1};
    cursor: pointer;

    @media only screen and (max-width: 767px) {
      font-size: 14px;
    }
  `,
}


export default CargoPremia;