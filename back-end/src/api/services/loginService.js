const md5 = require('md5');
const { Op } = require('sequelize');
const { NOT_FOUND, HTTP_OK, CREATED, CONFLICT } = require('../utils/http_status');

const { User } = require('../../database/models');
const createToken = require('../utils/jwtToken');

async function login(email, password) {
  const user = await User.findOne({ 
    attributes: ['role', 'email', 'name', 'password', 'id'], where: { email } });
  
  if (!user) return { code: NOT_FOUND, message: 'User not found', type: 'INPUT_VALUE' };

  const passwordHash = md5(password);
  
  const valid = passwordHash === user.dataValues.password;
  if (!valid) return { code: NOT_FOUND, message: 'Invalid Password', type: 'INPUT_VALUE' };
  const token = createToken(user.dataValues);
  user.dataValues.token = token;
  return { code: HTTP_OK, role: user.dataValues };
}

async function createUser(obj) {
  const data = await User.findOne({ where: { email: obj.email } });
  if (data) return { code: CONFLICT, message: 'Email ja esta em uso', type: 'INPUT_VALUE' };

  const password = md5(obj.password);

  await User.create({ email: obj.email, password, name: obj.name });

  const newUser = await User.findOne({ where: { email: obj.email } });

  const token = createToken(newUser.dataValues);
  newUser.dataValues.token = token;

  return { code: CREATED, role: newUser };
}

async function createUserByAdm({ username, password, email, role }) {
  const data = await User.findOne({ where: { [Op.or]: [{ email }, { name: username }] } });
  if (data) return { code: CONFLICT, message: 'Name ou Email em uso', type: 'INPUT_VALUE' };

  const pass = md5(password);
  const newUser = await User.create({ email, password: pass, name: username, role });

  return { code: CREATED, user: newUser.dataValues };
}
  
module.exports = { login, createUser, createUserByAdm };
