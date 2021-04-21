import { useState } from 'react';
import { makeDefaultInputData } from '@airpremia/core/lib/service';
import { formattingDate } from '@airpremia/core/lib/me';

export const useChangeUserInfomationHook = () => {
  /** 이메일 */
  const [email] = useState('');
  /** 휴대폰 번호 */
  const [phoneNumber] = useState('01012341234');
  /** 국가 번호 */
  const [countryNumber] = useState(82);

  /** 이름 */
  const [firstName, setFirstName] = useState(
    makeDefaultInputData(''),
  );
  /** 성 */
  const [lastName, setLastName] = useState(
    makeDefaultInputData(''),
  );
  /** 성 */
  const [birthDate, setBirthDate] = useState(
    formattingDate(makeDefaultInputData('')),
  );

  /** 여권 */
  const [passport, setPassport] = useState('');

  const [, setCountryCode] = useState('');

  /** 탑승권 만료 */
  const [
    passportExpiredDate,
    setPassportExpiredDate,
  ] = useState('');

  /** 국적 */
  const [nationalityLabel, setNationalityLabel] = useState(
    '',
  );
  const [isNationalityShow, setNationalityShow] = useState(
    false,
  );
  /** 광고성 정보 수신 */
  const [isSubscribe, onChangeSubscribeStatus] = useState<
    boolean
  >(true);

  const onShowModal = (target: string) => {
    console.log(target);
  };

  return {
    email,
    phoneNumber,
    countryNumber,
    firstName,
    onChangeFirstName: setFirstName,
    lastName,
    onChangeLastName: setLastName,
    birthDate,
    onChangeBirthDate: setBirthDate,
    passport,
    onChangePassport: setPassport,
    nationalityLabel,
    onChangeNationalityLabel: setNationalityLabel,
    isNationalityShow,
    onChangeNationalityShow: setNationalityShow,
    passportExpiredDate,
    onChangePassportExpiredDate: setPassportExpiredDate,
    isSubscribe,
    onChangeSubscribeStatus,
    onShowModal,
    onChangeCountryCode: setCountryCode,
  };
};
