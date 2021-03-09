const { resolve } = require("path");
const root = resolve(__dirname);
module.exports = {
  rootDir: root,
  displayName: "root-tests", // root-tests default
  testMatch: ["<rootDir>/src/**/*.test.ts"], // só vai dar meet nos q tiverem dentro da past src
  testEnvironment: "node",
  clearMocks: true,
  preset: "ts-jest",
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1",
    "@test/(.*)": "<rootDir>/test/$1",
  },
};
