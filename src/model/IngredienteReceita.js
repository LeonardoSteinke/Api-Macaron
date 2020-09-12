const mongoose = require('mongoose');

const IngredienteReceitaSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        id_receita: {
            type: String,
            required: true
        },
        ingrediente: {
            type: String,
            required: true
        },
        unidade_medida: {
            type: integer,
            required: true
        },
        quantidade: {
            type: integer,
            required: true
        },

    }
)

module.exports = mongoose.model('Ingrediente_Receita', IngredienteReceitaSchema);