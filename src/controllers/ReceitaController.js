const connection = require("../database/connections");

module.exports = {
  async index(req, res) {
    const usuarios = await connection("receita").select("*");

    return res.json(usuarios);
  },
  async create(req, res) {
    const {
      categoria,
      nome,
      modo_preparo,
      tempo_preparo,
      dificuldade,
      porcoes,
      avaliacao,
      tipo,
      id_usuario,
    } = req.body;

    await connection("receita").insert({
      categoria,
      nome,
      modo_preparo,
      tempo_preparo,
      dificuldade,
      porcoes,
      avaliacao,
      tipo,
      id_usuario,
    });
    return res.json({ nome });
  },
};
