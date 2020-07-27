const connection = require("../database/connections");

module.exports = {
  async index(req, res) {
    return req.params.id
      ? res.json(await connection("ingrediente").where({ id: req.params.id }))
      : res.json(await connection("ingrediente"));
  },
  async create(req, res) {
    const { nome, unidade_medida } = req.body;

    await connection("ingrediente").insert({
      nome,
      unidade_medida,
    });
    return res.json({ nome });
  },

  async update(req, res) {
    const { nome, unidade_medida } = req.body;
    const { id } = req.params;

    return res.json(
      await connection("ingrediente")
        .update({
          nome,
          unidade_medida,
        })
        .where({ id: id })
    );
  },

  async delete(req, res) {
    const { id } = req.params;
    return res.json(await connection("ingrediente").delete().where({ id: id }));
  },
};
