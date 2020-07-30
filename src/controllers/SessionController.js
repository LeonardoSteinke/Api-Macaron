const connection = require("../database/connections");

module.exports = {
  async login(req, res) {
    const { email, senha } = req.body;
    return res.json(
      await connection("usuario").where({ email: email, senha: senha })
    );
  },
};
