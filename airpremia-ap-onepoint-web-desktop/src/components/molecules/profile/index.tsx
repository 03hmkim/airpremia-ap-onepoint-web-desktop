import { FC } from 'react';
import styled from 'styled-components';
import { LIGHT_GRAY7 } from '@airpremia/cdk/styles/colors';
import { Arrow } from 'src/components';

interface IProps {
  name: string;
  email: string;
  profileImage: any;
  onChangeMyInfomation?: () => void;
}

const Profile: FC<IProps> = ({
  name,
  email,
  profileImage,
  onChangeMyInfomation = () => {},
}) => {
  return (
    <S.container>
      <S.left>
        <img src={profileImage} alt="프로필이미지" />
      </S.left>
      <S.right>
        <S.name className="font-premia-bold">{name}</S.name>
        <S.email>{email}</S.email>
        <S.changeUserInfo onClick={onChangeMyInfomation}>
          회원 정보 변경{' '}
          <Arrow
            scale={0.5}
            borderWidth="3"
            color={LIGHT_GRAY7}
          />
        </S.changeUserInfo>
      </S.right>
    </S.container>
  );
};

const S = {
  container: styled.div`
    display: flex;
    align-items: center;
  `,

  left: styled.div`
    img {
      width: 66px;
      height: 90px;
    }
  `,

  right: styled.div`
    margin-left: 30px;
  `,

  name: styled.div`
    font-size: 28px;
    line-height: 28px;
    letter-spacing: -0.56px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 250px;
  `,

  email: styled.div`
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -0.26px;
    color: ${LIGHT_GRAY7};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 220px;
  `,

  changeUserInfo: styled.div`
    display: flex;
    align-items: center;
    margin-top: 25px;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -0.26px;
    color: ${LIGHT_GRAY7};
    font-weight: 600;
    cursor: pointer;
  `,
};

export default Profile;
