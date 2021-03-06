module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./enzyme.config.js'],
  testPathIgnorePatterns: [
    '.yarn-cache/', '/node_modules/',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
};
