import { maskingEmail } from '../../lib/util';

describe('[maskingEmail] 사용자 이메일 마스킹 처리', () => {
  const email = 'lyhlg0201@airpremia.com';
  test('이메일 전달, 마스킹 범위 Default(2)', () => {
    expect(maskingEmail(email)).toBe(
      'ly*******@airpremia.com',
    );
  });
  test('이메일 전달 특수문자포함', () => {
    expect(maskingEmail('lyhlg_0201@airpremia.com')).toBe(
      'ly********@airpremia.com',
    );
  });
  test('이메일 전달, 마스킹 범위 Default(5)', () => {
    expect(maskingEmail(email, 5)).toBe(
      'lyhlg****@airpremia.com',
    );
  });
});
