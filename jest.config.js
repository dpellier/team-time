
module.exports = {
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{js,jsx}'
    ],
    coverageDirectory: '<rootDir>/test/coverage',
    transform: {
        '^.+\\.js|jsx$': 'babel-jest',
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
    }
};
