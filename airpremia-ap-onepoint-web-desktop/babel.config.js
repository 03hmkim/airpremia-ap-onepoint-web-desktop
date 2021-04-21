module.exports = {
  presets: ['next/babel', '@zeit/next-typescript/babel'],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      { loose: true },
    ],
    [
      'styled-components',
      { ssr: true, displayName: true, preprocess: false },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@airpremia/core': './core',
          '@airpremia/cdk': './cdk',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    [
      'inline-react-svg',
      {
        svgo: {
          plugins: [
            {
              removeAttrs: { attrs: '(data-name)' },
            },
            {
              cleanupIDs: true,
            },
          ],
        },
      },
    ],
  ],
};
