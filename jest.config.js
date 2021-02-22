module.exports = {
  "roots": [
    "./"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupFilesAfterEnv": ["./setupTests.js"]
}
