const connection = require("../database/connections");

module.exports = {
  async index(req, res) {
    console.log("entrou no index");
    return req.params.id > 0 ?
      res.json(await connection("ingrediente_receita").where({ id_secundario: req.params.id }))
      :
      res.json(await connection("ingrediente_receita").select());

  },
  async searchByName(req, res) {
    const { ingrediente } = req.body;
    console.log(ingrediente);
    return req.body &
      res.json(await connection("ingrediente_receita").where({ingrediente: ingrediente}));

  },
  async create(req, res) {
    const {
      id_secundario,
      ingrediente,
      unidade_medida,
      quantidade
    } = req.body;

    await connection("ingrediente_receita").insert({
      id_secundario,
      ingrediente,
      unidade_medida,
      quantidade
    });
    return res.json(await connection("ingrediente_receita").where({ id_secundario: id_secundario }));
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
