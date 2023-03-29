const md5 = require('md5');
const { NOT_FOUND, HTTP_OK } = require('../utils/http_status');

const { User } = require('../../database/models');

async function login(email, password) {
  const user = await User.findOne({ 
    attributes: ['role', 'email', 'name', 'password'], where: { email } });
  
  if (!user) return { code: NOT_FOUND, message: 'User not found', type: 'INPUT_VALUE' };

  const passwordHash = md5(password);
  
  const valid = passwordHash === user.dataValues.password;
  if (!valid) return { code: NOT_FOUND, message: 'Invalid Password', type: 'INPUT_VALUE' };
    // const token = generateToken(user.dataValues);
    // console.log('TOKEN >>>>', token);
  return { code: HTTP_OK, role: user.dataValues };
} 
  
module.exports = { login };
