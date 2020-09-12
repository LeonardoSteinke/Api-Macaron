const connection = require("../database/connections");

module.exports = {
  async index(req, res) {
    return req.params.id
      ? res.json(await connection("ingrediente_receita").where({ id_receita: req.params.id }))
      : res.json(await connection("ingrediente_receita"));
  },
  async create(req, res) {
    const {
      id_receita,
      ingrediente,
      unidade_medida,
      quantidade
    } = req.body;

    await connection("ingrediente_receita").insert({
      id_receita,
      ingrediente,
      unidade_medida,
      quantidade
    });
    return res.json({ nome });
  },

  async update(req, res) {
    const { quantidade } = req.body;
    const { id } = req.params;

    return res.json(
      await connection("ingrediente_receita")
        .update({
          quantidade
        })
        .where({ id: id })
    );
  },

  async delete(req, res) {
    const { id } = req.params;
    return res.json(await connection("ingrediente_receita").delete().where({ id: id }));
  },
};
