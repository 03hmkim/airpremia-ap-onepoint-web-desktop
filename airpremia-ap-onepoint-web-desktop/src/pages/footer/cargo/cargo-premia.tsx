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
  ORANGE2,
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
            className="min hAuto"
            type={EScrollType.TYPE4}
            title={
              <S.modalTitle>
                <PopupTitle>기다려주세요 :-)</PopupTitle>
              </S.modalTitle>
            }
            body={
              <>
                <S.textArea className="auto">
                  국제선 취항 시 공개 예정입니다
                </S.textArea>
                <S.btnArea className="auto">
                  <TaskButton onClick={onHideNewModal}>확인</TaskButton>
                </S.btnArea>
              </>
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
        title="카고프레미아"
      />
      <C.wrap>
        <C.body>
          <C.title>카고 프레미아는 고객의 화물을 운송합니다.</C.title>
          <C.tmi>
            <C.p>일반 화물부터 생 동물, 특수의약품, 위험물 등까지 다양한 특수화물 운송 서비스를 제공합니다.</C.p>
            <C.p>에어프레미아에서 운영하는 B787-9 기종 항공기는 단위탑재 용기(ULD)에 화물 작업으로 최대 20톤의 대형화물 및 중/소형화물 운송이 가능합니다.</C.p>
          </C.tmi>
          <C.mlz onClick={onPrev}><u>스케줄 다운로드</u></C.mlz>
        </C.body>
        <C.body>
          <C.title>다양한 항공 화물 서비스를 이용해 보세요.<br />일반화물부터 특수화물까지 운송합니다.</C.title>
          <C.mlz onClick={onPrev}><u>화물 상품 소개</u></C.mlz>
        </C.body>
        <C.body>
          <C.title>이제 카고 프레미아에 연락 주세요.</C.title>
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
    </Container>
  );
}

const S = {
  container : styled.div`
    width: 800px;
    height: 400px;
    margin: 30px auto;
    color: ${ORANGE2};
    text-align: center;
  `,

  modalTitle : styled.div``,

  textArea: styled.div`
    height: 100%;
    &.auto{
      padding: 0 50px 50px;
      overflow-y: auto;
      box-sizing: border-box;
    }
  `,

  btnArea: styled.div`
    padding: 25px 50px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 1px solid ${LIGHT_GRAY5};
    &.auto{
      position: static;
    }
  `,
};

const C = {
  wrap: styled.div`
    margin-top: 70px;
    border-top: 2px solid ${DARK_GRAY1};
  `,
  body: styled.div`
    margin-top: 140px;
    &:first-of-type{
      margin-top: 30px;
    }
  `,
  sbody: styled.div`
    margin-top: 100px;
  `,
  title: styled.h4`
    font-size: 22px;
    font-weight: bold;
    line-height: 1.8;
  `,
  p: styled.p`
    font-size: 16px;
    color: ${DARK_GRAY1};
    line-height: 36px;
  `,
  b: styled.p`
    font-weight: bold;
  `,
  helpl: styled.p`
    width: 100%;
    padding-top: 80px;
    border-bottom: 1px solid ${LIGHT_GRAY5};
  `,
  tmi: styled.p`
    margin-top: 30px;
  `,
  txt: styled.p`
    font-size: 15px;
    line-height: 1.8;
  `,
  mlz: styled.a`
    margin-top: 30px;
    display: inline-block;
    font-size: 15px;
    color: ${BLUE1};
    cursor: pointer;
  `,
}


export default CargoPremia;