const connection = require("../database/connections");

module.exports = {
  async index(req, res) {
    const usuarios = await connection("receita");

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

    return res.json(
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
      })
    );
  },
  async update(req, res) {
    const { id } = req.params;
    if (req.body.avaliacao) {
      const { avaliacao } = req.body;
      return res.json(
        await connection("receita").update({ avaliacao }).where({ id: id })
      );
    } else {
      const {
        categoria,
        nome,
        modo_preparo,
        tempo_preparo,
        dificuldade,
        porcoes,
        tipo,
      } = req.body;

      return res.json(
        await connection("receita")
          .update({
            categoria,
            nome,
            modo_preparo,
            tempo_preparo,
            dificuldade,
            porcoes,
            avaliacao,
            tipo,
            id_usuario,
          })
          .where({ id: id })
      );
    }
  },
  async delete(req, res) {
    const { id } = req.params;
    return res.json(await connection("receita").delete().where({ id: id }));
  },
};
