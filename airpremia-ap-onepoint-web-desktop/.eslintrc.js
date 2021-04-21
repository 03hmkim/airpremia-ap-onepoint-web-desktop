module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    // "plugin:react-hooks/recommended",
    // 'plugin:import/errors',
  ],
  env: {
    browser: true,
    node: true,
    // jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 0, // 인터페이스임을 구분하기 위해 I prefix를 앞에 붙인다
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-empty-interface': 0, // default prop를 정의하기 위함
    '@typescript-eslint/no-empty-function': 0, // empty function을 허용함
    'react/prop-types': 0, // proptypes을 정의하지 않았을때의 에러 제거
    'react/display-name': 0,
    'react/react-in-jsx-scope': 0, // next에서는 React import가 필요 없어서 제거함
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    // 'import/no-cycle': [2, { maxDepth: 1 }],
    // 'import/no-unresolved': 2,
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
