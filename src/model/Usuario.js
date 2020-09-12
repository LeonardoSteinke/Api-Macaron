const mongoose = require('mongoose');

const UsuarioSchema
    = new mongoose.Schema(
        {
            id: {
                type: String,
                required: true
            },
            nome: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            senha: {
                type: String,
                required: true
            },
            uf: {
                type: String,
            },
            pais: {
                type: String,
            },
            foto: {
                type: String,
            },
            tolerancia: {
                type: integer,
                required: true
            },

        }
    )

module.exports = mongoose.model('Usuario', UsuarioSchema);