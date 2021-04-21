import { checkPasswordPartially } from '../lib/auth';

describe('[checkPasswordPartially] 사용자 암호 부분 체크 테스트 (회원가입시 / 비밀번호 변경시 사용) - 문자 포함, 숫자 포함, 특수문자 포함, 길이 8~20자 이내', () => {
  test('숫자만 포함시', () => {
    expect(checkPasswordPartially('1234')).toStrictEqual([
      false,
      true,
      false,
      false,
    ]);
  });
  test('문자, 특수문자 포함시', () => {
    expect(
      checkPasswordPartially('1234!@#'),
    ).toStrictEqual([false, true, true, false]);
  });
  test('모든 조건 충족', () => {
    expect(
      checkPasswordPartially('airpremia1234!'),
    ).toStrictEqual([true, true, true, true]);
  });
});
