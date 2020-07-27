const connection = require("../database/connections");

module.exports = {
  async index(req, res) {
    return req.params.id
      ? res.json(
          await connection("calendario_receita").where({
            id_usuario: req.params.id,
          })
        )
      : res.json(await connection("calendario_receita"));
  },
  async create(req, res) {
    const { id_receita, id_usuario } = req.body;

    return res.json(
      await connection("calendario_receita").insert({
        id_receita,
        id_usuario,
      })
    );
  },

  async delete(req, res) {
    const { id } = req.params;
    return res.json(
      await connection("calendario_receita").delete().where({ id: id })
    );
  },
};
