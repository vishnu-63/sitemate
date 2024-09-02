"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
};
exports.default = config;
//# sourceMappingURL=jest.config.js.map