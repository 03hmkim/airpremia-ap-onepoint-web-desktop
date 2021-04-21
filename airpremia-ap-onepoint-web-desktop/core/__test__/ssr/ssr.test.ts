import { getInitialName } from '@airpremia/core/lib/ssr';

describe('SSR - 공통', () => {
  test('이니셜 가져오기', () => {
    const name = 'KYU HOON';
    const calculated = 'KH';

    expect(getInitialName(name)).toStrictEqual(calculated);
  });
});
