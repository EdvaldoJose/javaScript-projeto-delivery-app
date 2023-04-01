const jwt = require('jsonwebtoken');
const fs = require('fs');

const createToken = (token) => {
  const secret = fs
  .readFileSync(`${__dirname}/../../../jwt.evaluation.key`, { encoding: 'utf-8' });
  return jwt.sign(token, secret);
};

module.exports = createToken;