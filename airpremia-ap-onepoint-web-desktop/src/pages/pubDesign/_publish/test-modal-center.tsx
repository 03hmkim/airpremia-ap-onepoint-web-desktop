import styled from 'styled-components';
import { useModal } from 'src/hooks';
import {
  NewModal,
  PopupTitle,
  PopupDescription,
  TaskButton,
} from 'src/components';
//import { testModalDetail } from 'src/components';
import {
    ORANGE2,
} from '@airpremia/cdk/styles/colors';

function 이름변경_testModalCenter(){

  
  const {
    onShowNewModal,
    UIStore: { newModal },
  } = useModal();
  
  const 이름변경_onPopup2 = () =>
    onShowNewModal('이름변경_팝업1');

  const 이름변경_onPopup1 = () =>
    onShowNewModal('이름변경_팝업2');

  const onClickModal = () => {
    switch (newModal.target) {
      case '이름변경_팝업1':
        return (
          <NewModal
            title={
              <S.modalTitle>
                <PopupTitle>팝업1</PopupTitle>
                <PopupDescription>팝업 설명입니다.</PopupDescription>
              </S.modalTitle>
            }
            body={
              <>
                <p>내용넣어주세요.</p>
              </>
            }
          />
        );
      case '이름변경_팝업2':
        return (
          <NewModal
            title={
              <S.modalTitle>
                <PopupTitle>팝업2</PopupTitle>
              </S.modalTitle>
            }
            body={
              <>
                <p>내용넣어주세요.</p>
              </>
            }
          />
        );
      default:
        return null;   
    }
  };

  return (
    <TestPub>
      {onClickModal()}
      <S.container>
        <p className="font-bold">모달_Test</p>
        <S.button>
          <TaskButton onClick={이름변경_onPopup1}>
            테스트_팝업1
          </TaskButton>
        </S.button>
        
        <S.button>
          <TaskButton onClick={이름변경_onPopup2}>
            테스트_팝업2
          </TaskButton>
        </S.button>
      </S.container>
    </TestPub>
  )  
};

const TestPub = styled.div`
  padding: 200px 0;
`;

const S = {
  container : styled.div`
    width: 800px;
    height: 400px;
    margin: 30px auto;
    color: ${ORANGE2};
    text-align: center;
  `,
  button : styled.div`
    text-align: center;
    margin-top: 30px;
    button{
      width: 300px;
      height: 50px;
    }
  `,
  modalTitle : styled.div``,
};

export default 이름변경_testModalCenter;