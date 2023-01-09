const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
    '\\.(css|sass|scss)$': 'identity-obj-proxy'
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/index.{ts,tsx}',
    '!src/**/layouts/**/*.{ts,tsx}',
    '!src/**/page.{ts,tsx}',
    '!src/**/layout.{ts,tsx}',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/*-email.{ts,tsx}',
    '!src/**/env.{ts,tsx}',
    '!src/**/infra/**/*.{ts,tsx}',
  ]
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
