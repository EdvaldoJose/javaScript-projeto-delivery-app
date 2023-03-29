const service = require('../services/loginService');

async function login(req, res) {
  const { email } = req.body;

  const { code, message, type, role } = await service.login(email);

  if (type) return res.status(code).json({ message });

  return res.status(code).json({ role });
}

module.exports = { login };
