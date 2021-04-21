/*import styled from 'styled-components';
import { useModal } from 'src/hooks';
import {
  TaskButton,
  ModalRightSide,
} from 'src/components';
import { testModalDetail } from 'src/components';
import {
    ORANGE2,
} from '@airpremia/cdk/styles/colors';

function testPage(){

  
  const {
    onShowNewModal,
    UIStore: { newModal },
  } = useModal();
  
  const 이름변경_onPopupCenter = () =>
    onShowNewModal('이름변경_가운데');

  const 이름변경_onPopupRight = () =>
    onShowNewModal('이름변경_오른쪽');

  const onClickModal = () => {
    switch (newModal.target) {
      case '이름변경_가운데':
        return (
          <NewModal
            title={
              <S.modalTitle>
                <PopupTitle>가운데 팝업</PopupTitle>
                <PopupDescription>팝업 설명입니다.</PopupDescription>
              </S.modalTitle>
            }
            body={
              <>
                <p>잘 나옵니다.</p>
                <testModalDetail />
              </>
            }
          />
        );
      case '이름변경_오른쪽':
        return (
          <NewModal
            title={
              <S.modalTitle>
                <PopupTitle>오른쪽 팝업</PopupTitle>
              </S.modalTitle>
            }
            body={
              <>
                <ModalRightSide>
                

                </ModalRightSide>
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
      {modalName && (
        <ModalRightSide
          modal={modalOptions}
          onHide={closeModal}
        >
          {getModalElement({
            modalName,
            trips,
            passengers,
            onSubmit,
          })}
        </ModalRightSide>
      )}
      <S.container>
        <p className="font-bold">모달_오른쪽_Test</p>
        <S.button>
          <TaskButton onClick={이름변경_onPopupRight}>
            테스트_오른쪽 팝업
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
  container: styled.div``,
};

export default testPage;*/