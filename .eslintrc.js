module.exports = {
  rules: {
    'no-unused-vars': process.env.CI ? 'warn' : 'error',
  },
};
// comment