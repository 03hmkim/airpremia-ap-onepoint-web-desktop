import React, { FC, Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import { Container } from 'src/styles/layout';
import { TaskButton, ByeUserTemplate, Title } from 'src/components';
import {
  DARK_BLUE1,
  LIGHT_GRAY6,
  LIGHT_GRAY7,
  WHITE1,
} from '@airpremia/cdk/styles/colors';
import { useMe, useAuth } from '@airpremia/core/hooks';
import { get } from 'lodash/fp';
import { Checkbox } from '@airpremia/cdk/components';
import { useModal } from 'src/hooks';

interface IProps {
}

const Bye: FC<IProps> = ({
  
}) => {
  const router = useRouter();
 
  const { onByeUserLeave, meStore } = useMe();
  const { onLogout } = useAuth();
  const [isAgreeActive, setAgreeActive] = useState(false);
  const { onShowToastPopup } = useModal();

  const {
    userInfo,
  } = meStore;

   /** 이름 */
//   const firstName = useState(userInfo?.name.first);
  /** 성 */
//  const lastName = useState(userInfo?.name.last);
  /** 아이디 */
//  const email = useState(userInfo?.email);
  /** 회원번호 */
//  const customerNumber = useState(userInfo?.customerNumber);
  /** 보유 포인트 */
//  const point = useState(userInfo?.points);

  console.log("fdfdfd", userInfo?.points);


  const onSubmit = async (e: any) => {
    if (isAgreeActive) {
      e.preventDefault();

      try {
        onShowToastPopup(
          '탈퇴 되었습니다.',
        );
        onByeUserLeave();
        onLogout();
      } catch (e) {
        alert(get(e, 'response.data.message'));
      }
    }
  };


  const checkboxProps = {
    isActive: isAgreeActive,
    onChange: () => setAgreeActive(!isAgreeActive),
  };



//   function onClickBye() {
//     postUserLeave();
//  }
    

  const onClickBack = () => router.push('/me/change-user-infomation');

  return (
    <Container>
        <ByeUserTemplate
        title={'회원탈퇴'}
        description={
          '회원탈퇴 전, 아래 유의사항을 확인해주세요.'
        }
        subtitle={<Title>에어프레미아 회원탈퇴 유의사항</Title>}
        content={
          <div>
            <div className="content">
            회원 탈퇴 완료 시, 고객님의 개인정보는 에어프레미아 <a href="/footer/term/personal-info">개인정보처리방침</a>에 따라 관리 됩니다.
            <br></br>
            회원 탈퇴가 완료되면, 보유하신 포인트 및 쿠폰은 모두 소멸되며, 재가입시에도 복원 불가합니다.
            <br></br>
            회원 탈퇴 후 재가입을 하셔도 이전의 예매내역을 조회하실 수 없습니다
            <br></br>
            탈퇴 일로부터 14일동안은 재가입이 불가하며, 동일 ID 사용이 제한됩니다
            <br></br>
            회원 탈퇴는 인터넷 회원 정보를 포함한 에어프레미아 기록 전체에 대한 탈퇴이므로 신중히 고려해 주시기 바랍니다.
            </div>
            <hr></hr>
            <ul>
              <li>{userInfo?.name.first}  {userInfo?.name.last}</li>
              <li>{userInfo?.email}</li>
              <li>{userInfo?.customerNumber}</li> 
              <li>{userInfo?.points}</li>
            </ul>
          </div>
        }

        checkpoint={  <Checkbox {...checkboxProps}>
                        위의 유의사항을 확인하고 회원탈퇴에 동의합니다</Checkbox>}
        button={
            <Fragment>
            <TaskButton
              color={LIGHT_GRAY7}
              border={`solid 1px ${LIGHT_GRAY7}`}
              backgroundColor={WHITE1}
              onClick={onClickBack}
            >
              취소
            </TaskButton>
            <TaskButton  
            backgroundColor={isAgreeActive ? DARK_BLUE1 : LIGHT_GRAY6}
            onClick={isAgreeActive ? onSubmit : () => {}}
            >
              회원탈퇴
            </TaskButton>
          </Fragment>
        }
        >
        </ByeUserTemplate>
          
    </Container>
  );
};

export default Bye;




