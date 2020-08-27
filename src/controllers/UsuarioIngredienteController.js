const connection = require('../database/connections');
const { index } = require('./CalendarioReceitaController');

module.exports = {
    async index(req, res) {
        const response = await connection("usuario_ingrediente").where({
            id_usuario: req.params.id,
        });
        return response;
    },
    async create(req, res) {
        const { id_ingrediente, id_usuario, quantidade } = req.body;

        return res.json(
            await connection("usuario_ingrediente").insert({
                id_ingrediente,
                id_usuario,
                quantidade
            })
        );
    },
    async update(req, res) {
        const { quantidade } = req.body;
        const { id } = req.params;

        return res.json(
            await connection("usuario")
                .update({
                   quantidade
                })
                .where({ id: id })
        );
    },

    async delete(req, res) {
        const { id } = req.params;
        return res.json(
            await connection("usuario_ingrediente").delete().where({ id: id })
        );
    },



}