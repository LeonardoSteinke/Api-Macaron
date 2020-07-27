const connection = require("../database/connections");

module.exports = {
  async index(req, res) {
    return req.params.id
      ? res.json(await connection("comentario").where({ id: req.params.id }))
      : res.json(await connection("comentario"));
  },
  async create(req, res) {
    const {
      id_receita,
      id_usuario,
      id_comentario,
      mensagem,
    } = req.body;

    await connection("comentario").insert({
      id_receita,
      id_usuario,
      id_comentario,
      mensagem,
    });
    return res.json({ nome });
  },

  async update(req, res) {
    const { mensagem, curtidas } = req.body;
    const { id } = req.params;

    return res.json(
      await connection("comentario")
        .update({
          updated_at,
          mensagem,
          curtidas,
        })
        .where({ id: id })
    );
  },

  async delete(req, res) {
    const { id } = req.params;
    return res.json(await connection("comentario").delete().where({ id: id }));
  },
};
