// module.exports = {
//   preset: 'react-native',
//   setupFilesAfterEnv: [
//     '@testing-library/jest-native/extend-expect',
//   ],
//   transformIgnorePatterns: [
//     'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation)',
//   ],
// };
// module.exports = {
//   preset: 'react-native',
//   setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
//   transform: {
//     '^.+\\.[jt]sx?$': 'babel-jest', // handle JSX, JS, TS, TSX
//   },
//   transformIgnorePatterns: [
//     'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation)',
//   ],
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   moduleNameMapper: {
//     // stub out images, fonts, and styles if needed
//     '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
//     '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
//   },
// };

module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation)',
  ],
  moduleNameMapper: {
    '^@react-native-async-storage/async-storage$': '@react-native-async-storage/async-storage/jest/async-storage-mock',
  },
};