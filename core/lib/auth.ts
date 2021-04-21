import moment from 'moment';
import { reduce, includes } from 'lodash';
import {
  IInputData,
  EAuthPopup,
} from '../stores/models/auth/types';
import { makeDefaultInputData } from './service';
// import { useBooking } from '@airpremia/core/hooks';

export const emailRegExp = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const findCharacter = /[a-zA-Z]/;
// export const findNotCharacter = /[^a-zA-Z]/;
export const findNotCharacter = /[^가-힣a-zA-Z]/;
export const findKoCharacter = /^[가-힣]+$/;
export const regExp = /^[0-9]+$/;
export const findNumber = /[0-9]/;
export const findSpecialCharacter = /^(?=.*\W)/;
export const phoneNumberRegExp = /^[0-9]{3}[0-9]{3,4}[0-9]{4}$/;

export const checkPasswordPartially = (
  pw: string,
): boolean[] => {
  const status = [false, false, false, false];

  if (!pw) return status;

  status[0] = findCharacter.test(pw);
  status[1] = findNumber.test(pw);
  status[2] = findSpecialCharacter.test(pw);
  status[3] = pw.length >= 8 && pw.length <= 20;

  return status;
};

export const checkInputForm = (
  ...args: IInputData[]
): boolean => {
  const isTextInputFilled = reduce(
    args,
    (res, next) => {
      return Boolean(res && next.value && !next.error);
    },
    true,
  );

  if (!isTextInputFilled) return false;

  return true;
};

export const checkPrivacyTerms = (termsCheckList: any) =>
  reduce(
    termsCheckList.slice(1, 4),
    (flag, next) => flag && next,
    true,
  );

export const checkSignupForm = (...args: any[]) => {
  const [
    gender,
    lastName,
    firstName,
    birthDate,
    termsCheckList,
  ] = args;

  if (!gender) return false;

  const inputFormStatus = checkInputForm(
    lastName,
    firstName,
    birthDate,
  );

  if (!inputFormStatus) return false;

  const isTermsChecked = checkPrivacyTerms(termsCheckList);
  if (!isTermsChecked) return false;

  return true;
};

export const hasAuthType = (
  type: string | string[],
): boolean => {
  if (type && Array.isArray(type)) {
    return includes(EAuthPopup, type[0]);
  }
  return includes(EAuthPopup, type);
};

export const checkEmailValid = (_data: IInputData) => {
  const data = { ..._data };

  const [isEmpty, isInvalid] = [
    '이메일 주소를 입력해주세요.',
    '올바른 이메일 주소 형식을 입력해주세요.',
  ];

  if (!data.value || data.value.length === 0) {
    return { ...data, error: true, msg: isEmpty };
  } else if (!emailRegExp.test(data.value)) {
    return { ...data, error: true, msg: isInvalid };
  }
  return { ...data, error: false, msg: '' };
};

export const checkPasswordValid = (_data: IInputData) => {
  const data = { ..._data };

  const [isEmpty, isInvalid] = [
    '패스워드를 입력해주세요.',
    '올바른 패스워드를 입력해주세요.',
  ];

  if (data.value.length === 0) {
    return { ...data, error: true, msg: isEmpty };
  } else if (
    includes(checkPasswordPartially(data.value), false)
  ) {
    return { ...data, error: true, msg: isInvalid };
  }
  return { ...data, error: false, msg: '' };
};

export const checkNameValid = (
  type: string,
  _data: IInputData,
) => {
  const data = { ..._data };

  // const errorData: { [type: string]: any } = {
  //   lastName: {
  //     isEmpty: '영문 성을 입력해주세요.',
  //     isNotChar: '영문으로만 기입해주세요.',
  //   },
  //   firstName: {
  //     isEmpty: '영문 이름을 입력해주세요.',
  //     isNotChar: '영문으로만 기입해주세요.',
  //   },
  // };

  const errorData: { [type: string]: any } = {
    lastName: {
      isEmpty: '신분증에 표시된 언어로 성을 입력해주세요.',
      isNotChar: '신분증에 표시된 언어로 성을 입력해주세요.',
    },
    firstName: {
      isEmpty: '신분증에 표시된 언어로 이름을 입력해주세요.',
      isNotChar: '신분증에 표시된 언어로 이름을 입력해주세요.',
    },
  };

  if (!data.value.length) {
    return {
      ...data,
      error: true,
      msg: errorData[type].isEmpty,
    };
  } else if (findNotCharacter.test(data.value)) {
    return {
      ...data,
      error: true,
      msg: errorData[type].isNotChar,
    };
  }
  return {
    ...data,
    value: data.value.toUpperCase(),
    error: false,
    msg: '',
  };
};

export const checkPhoneValid = (_data: IInputData) => {
  const data = { ..._data };

  const [isEmpty, isInvalid] = [
    '휴대번호를 입력해주세요',
    '정확한 휴대번호를 입력해주세요',
  ];
  if (!data.value.length) {
    alert(
      isEmpty
    )
    return { ...data, error: true, msg: isEmpty };
  } else if (!phoneNumberRegExp.test(data.value)) {
    alert(
      isInvalid
    )
    return { ...data, error: true, msg: isInvalid };
  } 

  return {
    ...data,
    error: false,
    msg: '',
  };
};



//●
export const checkBirthValid = (_data: IInputData, check?: String) => {

  console.log("사람구분", check); 

  const data = { ..._data };
  const [isEmpty, isError, isError2, isError3] = [
    '생년월일을 입력해주세요.',
    '생년월일 8자리를 정확히 입력해주세요.  예) 20170810',
    '생년월일은 숫자만 입력해주세요',
    '나이계산기와 맞지않는 생년월일 입니다',
  ];

  console.log("data", data.value);
  const checkAge = moment(data.value);
  console.log("checkAge",checkAge);
  const removedCommaValue = data.value.split('.').join('');
  console.log("removedCommaValue",removedCommaValue);
  
  if(check===undefined){ //회원정보 수정
    if(data.value==="" || data.value.includes('+') || data.value.includes('-') || 
    !findNumber.test(data.value) || findCharacter.test(data.value) || findKoCharacter.test(data.value)){
      data.value=="";
      alert("생년월일을 정확히 입력해주세요");
      // return { ...data, error: true, msg: isErrpr4 };
    }
    const getAge = () => {
      const birDateMoment = moment(removedCommaValue);

      if (birDateMoment.isValid()) {
        const today = moment();//현재날짜 기준
        console.log("나이체크",today.diff(birDateMoment,'year'));
        return today.diff(birDateMoment,'year');
      }
      else{
        return { ...data, error: true, msg: isError3 };
      }
    }

    const age = getAge();
      if (age && age < 0) {
        alert('0살 이하는 입력할 수 없습니다.');
      } 
      else if (age >150) {
        alert('150살 이상은 입력할 수 없습니다.');
      }
  }
  else{ //예매, 마지막여정일 기준★
    if (!data.value || data.value=="" || data.value==null) {
      return { ...data, error: true, msg: isEmpty };
    }
    else if(!regExp.test(data.value)){
      alert(isError2)
      console.log("data.value",data.value);
      data.value="";
      return { ...data, error: true, msg: isError2 };
    }
    else if (
      data.value.length !== 8 ||
      !moment(data.value.toString()).isValid()
    ) {
      alert(
        isError
      )
      return { ...data, error: true, msg: isError };
    }
    else{
      if(check!==undefined){

        const getAge = () => {
        const birDateMoment = moment(data.value);

        // const { bookingSessionStore } = useBooking();
        // const { date } = bookingSessionStore;

        if (birDateMoment.isValid()) {
          //<AgeCalculater baseDate={date.length === 2 ? date[1] : date[0] || ''} />
          const today = moment();//현재날짜 기준으로 한듯..?()에 마지막날짜 넣기★
          // const today = moment(date[0]);
          console.log("나이체크",today.diff(birDateMoment,'year'));
          return today.diff(birDateMoment,'year');
        }
        else{
          return { ...data, error: true, msg: isError3 };
        }
      }
      const age = getAge();

      function checkAge (){
      if (age && age < 0) {
        alert('0살 이하는 입력할수 없습니다.');
        return { ...data, error: true, msg: isError3 };
      } 
      else {
        if (age || age === 0) {
          if (age < 2) {
            return 'infant';
          }
          if (age > 1 && age < 12) {
            return 'child';
          }
          if (age >150) {
            alert('150살 이상은 입력할 수 없습니다.');
            return { ...data, error: true, msg: isError3 };
          }
          return 'adult';
        }
      }
    }
    if(checkAge()!=check){
      alert('생년월일을 다시 확인해주세요');
      return { ...data, error: true, msg: isError3 };
    }
  }
  }
}

  return {
    ...data,
    error: false,
    msg: '',
  };
};

export const checkRecordLocatorValid = (
  _data: IInputData,
) => {
  const data = { ..._data };
  const [isEmpty, isError] = [
    '예약번호는 6자리의 영문+숫자 입니다.',
    '예약번호는 6자리의 영문+숫자 입니다.',
  ];

  if (!data.value.length) {
    return { ...data, error: true, msg: isEmpty };
  } else if (
    (!findCharacter.test(data.value) ||
      !findNumber.test(data.value)) &&
    findSpecialCharacter.test(data.value)
  ) {
    return { ...data, error: true, msg: isError };
  }
  return {
    ...data,
    value: data.value.toUpperCase(),
    error: false,
    msg: '',
  };
};

export const checkPassportNumberValid = (
  _data: IInputData,
) => {
  const data = { ..._data };
  const [isEmpty, isError] = [
    '여권 번호를 입력해주세요.',
    '여권번호는 영문+숫자로 구성 됩니다.',
  ];

  if (!data.value.length) {
    return { ...data, error: true, msg: isEmpty };
  } else if (
    (!findCharacter.test(data.value) ||
      !findNumber.test(data.value)) &&
    findSpecialCharacter.test(data.value)
  ) {
    return { ...data, error: true, msg: isError };
  }
  return {
    ...data,
    value: data.value.toUpperCase(),
    error: false,
    msg: '',
  };
};

export const checkValid = (
  type: string,
  _value: IInputData | string,
  check?: string,//●
) => {
  const value: IInputData =
    typeof _value === 'string'
      ? makeDefaultInputData(_value)
      : _value;

  switch (type) {
    case 'email':
      return checkEmailValid(value);
    case 'password':
      return checkPasswordValid(value);
    case 'firstName':
    case 'lastName':
      return checkNameValid(type, value);
    case 'birthDate':
      return checkBirthValid(value, check);//●
    case 'phoneNumber':
      return checkPhoneValid(value);
    case 'recordLocator':
      return checkRecordLocatorValid(value);
    case 'passportNumber':
      return checkPassportNumberValid(value);

    default:
      return value;
  }
};

export const checkForgotEmailForm = (...args: any[]) => {
  const [
    lastName,
    firstName,
    countryCode,
    authNumber,
    phoneNumber,
    isSend,
  ] = args;

  const isTextInputFilled = reduce(
    [lastName, firstName],
    (res, next) => {
      return res && next.value && !next.error;
    },
    true,
  );
  if (!isTextInputFilled) return false;

  if (
    !countryCode ||
    !authNumber ||
    !phoneNumber ||
    !isSend
  )
    return false;

  return true;
};

export const checkForgotPwForm = (...args: any[]) => {
  const [
    email,
    countryCode,
    authNumber,
    phoneNumber,
    isSend,
  ] = args;

  const isTextInputFilled = reduce(
    [email],
    (res, next) => {
      return res && next.value && !next.error;
    },
    true,
  );
  if (!isTextInputFilled) return false;

  if (
    !countryCode ||
    !authNumber ||
    !phoneNumber ||
    !isSend
  )
    return false;

  return true;
};

export const getNeedChangePasswordStatus = (
  date: Date,
): boolean => {
  return (
    moment
      .duration(moment().diff(moment(new Date(date))))
      .asDays() > 365
  );
};