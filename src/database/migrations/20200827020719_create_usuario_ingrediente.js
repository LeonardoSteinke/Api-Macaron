
exports.up = function(knex) {
    return knex.schema.createTable("usuario_ingrediente", function (table) {
        table.increments("id").unique().primary();
        table.integer("id_usuario").notNullable();
        table.foreign("id_usuario").references("id").inTable("usuario");
        table.integer("id_ingrediente").notNullable();
        table.foreign("id_ingrediente").references("id").inTable("ingrediente");
        table.integer("quantidade").notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("usuario_ingrediente");
};
