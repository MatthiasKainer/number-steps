module.exports = {
    collectCoverage: true,
    coverageReporters: ["json", "html", "text"],
    collectCoverageFrom: [
        "<rootDir>/src/**/*.js",
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    }
}