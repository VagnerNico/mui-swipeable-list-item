const { defaults } = require('jest-config');

module.exports = {
  bail: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  coverageDirectory: './coverage',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  roots: ['.'],
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  setupFilesAfterEnv: [
    './setupTests.ts'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  verbose: true,
  'moduleDirectories': ['node_modules', 'src']
};
