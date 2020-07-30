const connection = require("../database/connections");

module.exports = {
  async index(req, res) {
    return req.params.id
      ? res.json(await connection("usuario").where({ id: req.params.id }))
      : res.json(await connection("usuario"));
  },
  async create(req, res) {
    const { nome, email, senha } = req.body;
    try {
      await connection("usuario").insert({
        nome,
        email,
        senha,
      });
      return res.json({ nome });
    } catch (error) {
      return res.json({error: "Esse e-mail já foi cadastrado"});
    }
  },

  async update(req, res) {
    const { nome, email, senha, uf, pais, foto, tolerancias } = req.body;
    const { id } = req.params;

    return res.json(
      await connection("usuario")
        .update({
          nome,
          email,
          senha,
          uf,
          pais,
          foto,
          tolerancias,
        })
        .where({ id: id })
    );
  },

  async delete(req, res) {
    const { id } = req.params;
    return res.json(await connection("usuario").delete().where({ id: id }));
  },
};
