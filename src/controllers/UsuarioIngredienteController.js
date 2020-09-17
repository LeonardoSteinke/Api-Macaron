const connection = require("../database/connections");

module.exports = {
  async index(req, res) {
    return req.params.id & res.json(await connection("usuario_ingrediente").where({ id_secundario: req.params.id }))

  },
  async create(req, res) {
    const {
      id_secundario,
      ingrediente,
      unidade_medida,
      quantidade
    } = req.body;

    await connection("usuario_ingrediente").insert({
      id_secundario,
      ingrediente,
      unidade_medida,
      quantidade
    });
    return res.json(await connection("usuario_ingrediente").where({ id_secundario: id_secundario }));
  },

  async update(req, res) {
    const { quantidade } = req.body;
    const { id } = req.params;

    return res.json(
      await connection("usuario_ingrediente")
        .update({
          quantidade
        })
        .where({ id: id })
    );
  },

  async delete(req, res) {
    const { id } = req.params;
    return res.json(await connection("usuario_ingrediente").delete().where({ id: id }));
  },
};
