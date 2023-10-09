import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  collectCoverage: false,
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
  ],
  extensionsToTreatAsEsm: ['.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  verbose: true,
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleNameMapper: {
    // '^(\\.{1,2}/.*)\\.js$': '$1',
    '^axios$': '<rootDir>/node_modules/axios/dist/axios.js',
    '^hexRgb$': '<rootDir>/node_modules/hex-rgb/index.js',
    'swiper/react': '<rootDir>/node_modules/swiper/react/swiper-react.js',
    'swiper/css': '<rootDir>/node_modules/swiper/swiper.min.css',
    '^swiper-vars$': '<rootDir>/node_modules/swiper/swiper-vars.scss',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/src/tests/__mocks__/styleMock.ts',
    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    // '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__mocks__/fileMock.js`,
    // Handle module aliases
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
  testEnvironmentOptions: {
    customExportConditions: [], // don't load "browser" field
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    '^.+\\.css$': 'jest-transform-css',
    // '^.+\\.tsx?$': [
    //   'ts-jest',
    //   {
    //     useESM: true,
    //   },
    // ],
  },
  // testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
    'node_modules/(?!(swiper|ssr-window|dom7)/)',
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
