module.exports = {
  "roots": [
    "./"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  "testMatch": ["**/?(*.)+(test).(js|ts|tsx)"],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "moduleNameMapper": {
    "\\.(scss|css|png)$": "identity-obj-proxy"
  },
  "setupFilesAfterEnv": ["./setupTests.ts"],
  "coverageDirectory": "test-coverage",
  "coverageThreshold": {
    "global": {
      "branches": 0,
      "functions": 0,
      "lines": 0,
      "statements": 0
    }
  },
}
