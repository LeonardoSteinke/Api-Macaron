const connection = require("../database/connections");

module.exports = {
  async index(req, res) {
    return req.params.id & res.json(await connection("ingrediente_receita").where({ id_secundario: req.params.id }));

  },
  async create(req, res) {
    const {
      id_secundario,
      ingrediente,
      unidade_medida,
      quantidade
    } = req.body;

    await connection("ingrediente_receita").insert({
      id_receita: id_secundario,
      ingrediente,
      unidade_medida,
      quantidade
    });
    return res.json(await connection("ingrediente_receita").where({ id_receita: id_secundario }));
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
