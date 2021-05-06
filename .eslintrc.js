module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint', 'import'],
  env: {
    node: true,
    browser: true, // for predefined globals
    es6: true, // enables es6 features
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/button-has-type': 0,
    'no-param-reassign': 0,
    'no-await-in-loop': 0,
    'no-underscore-dangle': 0,
    'no-restricted-syntax': 0,
    'no-console': 0,
    'linebreak-style': 0,
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],

    // Buffer uses constructor: `new Buffer.from(...)`
    'new-cap': 'off',

    // Database references are done w/underscore notation
    camelcase: 'off',

    // Rejects returning a {success: false} object are acceptable
    'prefer-promise-reject-errors': 'off',

    // Low-scope helpers defined within a class is acceptable
    'class-methods-use-this': 'off',

    // Styles defined at bottom of file is clean
    'no-use-before-define': ['error', { variables: false }],

    // Parenthesizing is preferred, just turning this off to reduce clutter
    'no-mixed-operators': 'off',

    // In some cases, giving control to the function rather than the caller can be useful
    'no-param-reassign': 'off',

    // When checking if null, abstract equality can actually be better, also some apis use strings for numbers
    eqeqeq: 'off',

    // No alternative logger added yet
    'no-console': 'off',

    // Alerts are ok
    'no-alert': 'off',

    // Object provides flexible style typing
    'react/forbid-prop-types': [2, { forbid: ['object', 'array'] }],
    'jsx-a11y/label-has-for': [2, { required: { some: ['nesting', 'id'] } }], // Requires either linked id or wrapped label, not both
    'no-restricted-globals': 'off',
    'import/no-unresolved': 'error',
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/button-has-type': 0,
    'no-param-reassign': 0,
    'no-await-in-loop': 0,
    'no-underscore-dangle': 0,
    'no-restricted-syntax': 0,
    'no-console': 0,
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/require-default-props': 0,
    'react/display-name': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'no-continue': 0,

    // Next.js takes care of anchors for us
    'jsx-a11y/anchor-is-valid': 0,
    'no-control-regex': 'off',
    'no-loop-func': 'off',
    'no-underscore-dangle': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/no-array-index-key': 2,
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'no-multi-assign': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-multi-comp': 'off',
    'react/jsx-filename-extension': 'off',
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'linebreak-style': 0,
    'no-bitwise': 'off',
    'jsx-a11y/control-has-associated-label': 0,
    'react/jsx-fragments': 0,
    'react/jsx-curly-newline': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    'react/jsx-props-no-spreading': 0,
    'lines-between-class-members': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 0,
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['tsconfig.json'],
      },
    },
  },
  globals: {
    React: 'writable',
  },
};
