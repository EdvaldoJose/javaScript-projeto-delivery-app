const service = require('../services/loginService');

async function login(req, res) {
  const { email, password } = req.body;

  const { code, message, type, role } = await service.login(email, password);

  if (type) return res.status(code).json({ message });

  return res.status(code).json(role);
}

async function createUser(req, res) {
  const { code, message, type, role } = await service.createUser(req.body);
  if (type) return res.status(code).json({ message });

  return res.status(code).json(role);
}

module.exports = { login, createUser };