import { FC } from 'react';
import { useRouter } from 'next/router';
import ProfileMan from 'public/images/profile-img.png';
import styled from 'styled-components';
import { useModal } from 'src/hooks';
import { useMe } from '@airpremia/core/hooks';
import {
  Profile,
  LinkButtonInMyPage,
  NewModal,
  PopupTitle,
  PopupDescription,
  PreCheckModalForUserInfoChange,
} from 'src/components';
import { EScrollType } from 'src/components/templates/centerPopup';

interface ILinkButtonData {
  title: string;
  description: string | number;
  link: string;
  needArrow?: boolean;
  isEmphasis?: boolean;
}

interface IProps {
  linkButtonList?: ILinkButtonData[];
}

const ProfileGroup: FC<IProps> = ({ linkButtonList }) => {
  const router = useRouter();
  const { meStore } = useMe();
  const {
    onShowNewModal,
    UIStore: { newModal },
  } = useModal();
  const {
    isPasswordConfirmForModifingInfomation,
    userInfo,
  } = meStore;

  const onChangeMyInfomation = () => {
    if (isPasswordConfirmForModifingInfomation) {
      router.push('/me/change-user-infomation');
    } else {
      onShowNewModal('changeMyInfomation');
    }
  };

  const onClickModal = () => {
    switch (newModal.target) {
      case 'changeMyInfomation':
        return (
          <NewModal
            className="hAuto btnN"
            type={EScrollType.TYPE1}
            title={
              <S.modalTitle>
                <PopupTitle>회원정보변경</PopupTitle>
                <PopupDescription>
                  본인 확인을 위해 비밀번호를 한 번 더
                  입력해주세요.
                </PopupDescription>
              </S.modalTitle>
            }
            body={
              <S.modalBody>
                <PreCheckModalForUserInfoChange />
              </S.modalBody>
            }
          />
        );

      default:
        return null;
    }
  };

  return (
    <S.container>
      {onClickModal()}
      <S.profile>
        <Profile
          profileImage={ProfileMan}
          name={
            userInfo?.name
              ? `${userInfo?.name?.last} ${userInfo?.name?.first}`
              : 'airpremian name'
          }
          email={
            userInfo?.email || 'airpremia@airpremia.com'
          }
          onChangeMyInfomation={onChangeMyInfomation}
        />
      </S.profile>
      <S.linkButtonInMyPage>
        {linkButtonList?.map((item, i) => (
          <LinkButtonInMyPage
            key={`linkButtonListInMyPage${i.toString()}`}
            needArrow={item.needArrow || false}
            isEmphasis={item.isEmphasis || false}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </S.linkButtonInMyPage>
    </S.container>
  );
};

const S = {
  container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 767px) { 
      display:block;
    }
  `,

  profile: styled.div``,

  linkButtonInMyPage: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div {
      &:nth-child(1) {
        margin-right: 60px;
      }
      &:nth-child(2) {
        margin-right: 80px;
      }
      &:nth-child(3) {
        margin-right: 60px;
      }
    }

    @media only screen and (max-width: 767px) { 
      margin-top:40px;
      
      & > div {
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          margin-right: 0px;
        }
      }
    }
  `,

  modalTitle: styled.div``,

  modalBody: styled.div``,
};

export default ProfileGroup;
