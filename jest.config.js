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
    "\\.(scss)$": "identity-obj-proxy",
  },
  "setupFilesAfterEnv": ["./setupTests.ts"],
}
