const connection = require("../database/connections");

module.exports = {
  async index(req, res) {
    return req.params.id ?
      res.json(await connection("receita").where({ id: req.params.id }).first())
      :
      res.json(await connection("receita"));
  },

  async findByName(req, res) {
    return res.json(await connection("receita").where('nome', 'like', `%${req.params.nome}%`));
  },

  async create(req, res) {

    try {
      return res.json(await connection("receita").insert(
        req.body
      ));

    } catch (error) {
      return res.json({ error: "Ocorreu um erro" });
    }
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
