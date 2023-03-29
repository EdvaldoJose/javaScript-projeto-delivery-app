const { User } = require('../../database/models');
const { BAD_REQUEST, HTTP_OK } = require('../utils/http_status');

async function login(email) {
  const user = await User.findOne({ attributes: ['email'], where: { email } });
    // console.log('USER :::::', user);
  
  if (!user) return { code: BAD_REQUEST, message: 'User not found', type: 'INPUT_VALUE' };
  
    // const token = generateToken(user.dataValues);
    // console.log('TOKEN >>>>', token);
  return { code: HTTP_OK, role: user.role };
} 
  
module.exports = { login };
