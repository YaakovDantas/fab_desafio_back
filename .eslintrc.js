module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: ['airbnb', 'prettier', 'prettier/react'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      'import/prefer-default-export': 'off',
      'react/prop-types': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'react/jsx-one-expression-per-line': 'off',
      'global-require': 'off',
      'no-underscore-dangle': 'off',
      camelcase: 'off',
      'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'no-param-reassign': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'off',
      'import/no-mutable-exports': 'off',
      'prefer-const': 'off',
    },
  };
  