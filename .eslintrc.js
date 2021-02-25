module.exports = {
  parser: `@typescript-eslint/parser`,
  extends: [
    `airbnb`,
    `prettier`,
    `plugin:jsx-a11y/recommended`,
    `eslint:recommended`,
    `plugin:react/recommended`,
    `plugin:prettier/recommended`,
  ],
  plugins: [`react`, `@typescript-eslint`, `prettier`, `jsx-a11y`],
  settings: {
    'import/resolver': {
      node: {
        extensions: [`.js`, `.jsx`, `.ts`, `.tsx`],
      },
      typescript: {},
    },
  },
  globals: {
    window: true,
    document: true,
    WebSocket: true,
    shallow: true,
    render: true,
    mount: true,
  },
  env: {
    browser: true,
    jasmine: true,
    jest: true,
  },
  rules: {
    'no-use-before-define': `off`,
    '@typescript-eslint/no-use-before-define': `warn`,
    'jsx-a11y/href-no-hash': `off`,
    'react/jsx-filename-extension': `off`,
    'react/prop-types': 0,
    'import/prefer-default-export': `off`,
    '@typescript-eslint/explicit-function-return-type': `off`,
    '@typescript-eslint/no-unused-vars': [`warn`, { argsIgnorePattern: `^_` }],
    'react/state-in-constructor': `off`,
    'import/no-extraneous-dependencies': [
      `error`,
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'prettier/prettier': [
      `error`,
      {
        trailingComma: `all`,
        singleQuote: true,
        printWidth: 120,
      },
    ],
    quotes: [`error`, `backtick`],
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: [`*.ts`, `*.tsx`],
      rules: {
        '@typescript-eslint/explicit-function-return-type': [`error`],
      },
    },
  ],
};
