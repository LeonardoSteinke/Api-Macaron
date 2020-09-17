const connection = require("../database/connections");

module.exports = {
  async index(req, res) {
    return req.params.id
      && res.json(
        await connection("receita").where({
          id_usuario: req.params.id,
        })
      );
  },

};
