exports.up = function (knex) {
    return knex.schema.createTable("usuario_ingrediente", function (table) {
        table.increments("id").unique().primary();
        table.integer("id_secundario").notNullable();
        table.foreign("id_secundario").references("id").inTable("usuario");
        table.string("ingrediente").notNullable();
        table.integer("unidade_medida").notNullable();
        table.integer("quantidade").notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("usuario_ingrediente");
};
