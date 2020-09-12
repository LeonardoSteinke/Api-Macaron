const mongoose = require('mongoose');

const ReceitaSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        tempo_preparo: {
            type: integer,
            required: true
        },
        dificuldade: {
            type: integer,
            required: true
        },
        porcoes: {
            type: integer,
            required: true
        },
        categoria: {
            type: String,
            required: true
        },
        tipo: {
            type: integer,
            required: true
        },
        modo_preparo: {
            type: String,
            required: true
        },
        avaliacao: {
            type: integer,
            required: true
        },
        id_usuario: {
            type: integer,
            required: true
        },

    }
)

module.exports = mongoose.model('Receita', ReceitaSchema);