const connection = require("../database/connections");

module.exports = {
  async index(req, res) {
    const usuarios = await connection("usuario").select("*");

    return res.json(usuarios);
  },
  async create(req, res) {
    const { nome, email, senha } = req.body;

    const created_at = Date.now();

    await connection("usuario").insert({
      nome,
      email,
      senha,
      created_at
    });
    return res.json({ nome });
  },
};
