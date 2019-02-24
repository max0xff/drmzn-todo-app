// jest.config.js
const { defaults } = require('jest-config');
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  modulePaths: ["/path/to/app"],
  moduleFileExtensions: ["js", "ts", "tsx"],
  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src/$1",
  },
  transform: {
    "\\.(ts|tsx)$": "ts-jest"
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom'
};