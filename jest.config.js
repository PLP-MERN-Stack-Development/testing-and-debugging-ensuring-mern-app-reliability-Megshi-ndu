// jest.config.js - Root Jest configuration file

module.exports = {
  // Base configuration for all tests
  projects: [
    // Server-side tests configuration
    {
      displayName: 'server',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/backend/test/**/*.test.js'],
      moduleFileExtensions: ['js', 'json', 'node'],
      // setupFilesAfterEnv: ['<rootDir>/backend/test/setup.js'], // Optional: if you create a setup file
      coverageDirectory: '<rootDir>/coverage/backend',
      collectCoverageFrom: [
        'backend/**/*.js',
        '!backend/test/**',
        '!**/node_modules/**',
      ],
    },
    
    // Client-side tests configuration
    {
      displayName: 'frontend',
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/frontend/src/**/*.test.{js,jsx}'],
      moduleFileExtensions: ['js', 'jsx', 'json'],
      moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/frontend/src/__tests__/__mocks__/fileMock.js',
      },
      // setupFilesAfterEnv: ['<rootDir>/frontend/src/setupTests.js'], // Default for Create React App
      transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
      },
      coverageDirectory: '<rootDir>/coverage/frontend',
      collectCoverageFrom: [
        'frontend/src/**/*.{js,jsx}',
        '!frontend/src/index.js',
        '!**/node_modules/**',
      ],
    },
  ],
  
  // Global configuration
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 60,
      functions: 70,
      lines: 70,
    },
  },
  testTimeout: 10000,
}; 