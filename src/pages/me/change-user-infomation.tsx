import { FC, useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import { Container } from 'src/styles/layout';
import {
  useBooking,
  useMe,
  useScroll,
} from '@airpremia/core/hooks';
import { useModal } from 'src/hooks';
import {
  ChangeUserInfomation,
  ChangeUserInfomationTemplate,
  NewModal,
  PopupTitle,
  ChangeEmail2,
  ChangePhoneNumber2,
  ChangePassword2,
} from 'src/components';
import { Title, TaskButton } from 'src/components';
import {
  LIGHT_GRAY7,
  WHITE1,
} from '@airpremia/cdk/styles/colors';
import {
  makeDefaultInputData,
  getValuableObject,
} from '@airpremia/core/lib/service';
import moment from 'moment';
import { formattingDate } from '@airpremia/core/lib/me';
import { BtnType11 } from '@airpremia/cdk/components';
import { EScrollType } from 'src/components/templates/centerPopup';

interface IProps {}

const ChangeUserInfomationPage: FC<IProps> = ({}) => {
  const router = useRouter();
  const {
    UIStore: { newModal },
    onShowNewModal,
    onHideNewModal,
  } = useModal();
  const { meStore, onUpdateUserInfomation } = useMe();
  const {
    onLoadCountryCodeList,
    bookingStore,
  } = useBooking();
  const { countryCodeList } = bookingStore;
  const {
    userInfo,
    isPasswordConfirmForModifingInfomation,
  } = meStore;
  const { upScroll } = useScroll();

  const [email, setEmail] = useState(userInfo?.email);
  const [phoneNumber, setPhoneNumber] = useState(
    userInfo?.phoneNumber,
  );
  const [countryNumber, setCountryNumber] = useState(
    userInfo?.countryNumber,
  );
  const [phoneAuthToken, setPhoneAuthToken] = useState<
    string | undefined
  >(undefined);

  const [countryCode, setCountryCode] = useState(
    userInfo?.countryCode,
  );

  /** 이름 */
  const [firstName, setFirstName] = useState(
    makeDefaultInputData(userInfo?.name.first),
  );
  /** 성 */
  const [lastName, setLastName] = useState(
    makeDefaultInputData(userInfo?.name.last),
  );
  /** 생년월일 */
  const [birthDate, setBirthDate] = useState(
    formattingDate(
      makeDefaultInputData(userInfo?.birthDate),
    ),
  );
  /** 여권 */
  const [passport, setPassport] = useState(
    userInfo?.passportNumber,
  );

  /** 탑승권 만료 */
  const [
    passportExpiredDate,
    setPassportExpiredDate,
  ] = useState(userInfo?.passportExpiringAt); //

  const countryCodeText = countryCodeList?.find(
    (item: any) => item.countryCode === countryCode,
  )?.countryText;

  /** 국적 */
  const [nationalityLabel, setNationalityLabel] = useState(
    countryCodeText || userInfo?.nationality,
  );
  const [isNationalityShow, setNationalityShow] = useState(
    false,
  );
  /** 광고성 정보 수신 */
  const [isSubscribe, onChangeSubscribeStatus] = useState<
    boolean
  >(true);

  const onChangeNewValue = ({
    target,
    value,
  }: {
    target: string;
    value: string;
  }) => {
    onHideNewModal();

    switch (target) {
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setCountryNumber(Number(value.split('|')[0]));
        setPhoneNumber(value.split('|')[1]);
        break;
      case 'phoneAuthToken':
        setPhoneAuthToken(value);
        break;

      default:
        break;
    }
  };

  const renderModal = () => {
    switch (newModal.target) {
      case 'changeEmail2':
        return (
          <NewModal
            className="hAuto"
            type={EScrollType.TYPE1}
            title={
              <PopupTitle>이메일 주소 변경</PopupTitle>
            }
            body={
              <ChangeEmail2
                onChangeNewValue={onChangeNewValue}
              />
            }
          />
        );

      case 'changePhoneNumber2':
        return (
          <NewModal
            className="hAuto"
            type={EScrollType.TYPE1}
            overflow="initial"
            title={
              <PopupTitle>휴대폰 번호 변경</PopupTitle>
            }
            body={
              <ChangePhoneNumber2
                onChangeNewValue={onChangeNewValue}
              />
            }
          />
        );

      case 'changePassword2':
        return (
          <NewModal
            className="hAuto"
            type={EScrollType.TYPE1}
            title={<PopupTitle>비밀번호 변경</PopupTitle>}
            body={<ChangePassword2 />}
          />
        );

      default:
        return null;
    }
  };

 
  const onClickBye1 = () => router.push('/me/bye');

  const onClickSave = () => {
    const newObj = getValuableObject({
      email,
      phoneNumber,
      countryNumber,
      phoneAuthToken,
      passportNumber: passport,
      countryCode,
      birthDate: birthDate.value.split('.').join(''),
      name: {
        first: firstName.value,
        last: lastName.value,
      },
      passportExpiringAt: moment(
        passportExpiredDate,
      ).format('YYYYMMDD'),
    });
    onUpdateUserInfomation({
      ...newObj,
      notiOfEmail: isSubscribe,
      notiOfSms: isSubscribe,
    });
  };

  const onClickBack = () => router.push('/me');

  useEffect(() => {
    upScroll();
    onLoadCountryCodeList();
    if (!isPasswordConfirmForModifingInfomation) {
      router.push('/');
    }
  }, []);

  return (
    <Container>
      {renderModal()}
      <ChangeUserInfomationTemplate
        title={<Title>회원정보변경</Title>}
        description={
          '항공권 예약 전에는 이름과 생년월일을 변경할 수 있습니다.'
        }
        content={
          <ChangeUserInfomation
            canChange={true}
            firstName={firstName}
            onChangeFirstName={setFirstName}
            lastName={lastName}
            onChangeLastName={setLastName}
            birthDate={birthDate}
            onChangeBirthDate={setBirthDate}
            passport={passport}
            onChangePassport={setPassport}
            nationalityLabel={nationalityLabel}
            onChangeNationalityLabel={setNationalityLabel}
            isNationalityShow={isNationalityShow}
            onChangeNationalityShow={setNationalityShow}
            passportExpiredDate={passportExpiredDate}
            onChangePassportExpiredDate={
              setPassportExpiredDate
            }
            isSubscribe={isSubscribe}
            onChangeSubscribeStatus={
              onChangeSubscribeStatus
            }
            onShowModal={onShowNewModal}
            email={email}
            phoneNumber={phoneNumber}
            countryNumber={countryNumber}
            onChangeCountryCode={setCountryCode}
          />
        }
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
            <TaskButton onClick={onClickSave}>
              저장
            </TaskButton>
          </Fragment>
        }
        button2={
          <Fragment>
            <BtnType11 onClick={onClickBye1}>
              회원 탈퇴
            </BtnType11>
          </Fragment>
        }
      />
    </Container>
  );
};

export default ChangeUserInfomationPage;
