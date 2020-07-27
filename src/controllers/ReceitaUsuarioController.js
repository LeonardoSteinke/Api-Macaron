const connection = require("../database/connections");

module.exports = {
  async index(req, res) {
    return req.params.id
      ? res.json(
          await connection("receita_usuario").where({
            id_usuario: req.params.id,
          })
        )
      : res.json(await connection("receita_usuario"));
  },
  async create(req, res) {
    const { id_receita, id_usuario } = req.body;

    return res.json(
      await connection("receita_usuario").insert({
        id_receita,
        id_usuario,
      })
    );
  },

  async update(req, res) {
    const { fav } = req.body;
    const { id } = req.params;

    return res.json(
      await connection("receita_usuario")
        .update({
          fav,
        })
        .where({ id: id })
    );
  },

  async delete(req, res) {
    const { id } = req.params;
    return res.json(
      await connection("receita_usuario").delete().where({ id: id })
    );
  },
};
