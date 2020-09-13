exports.up = function (knex) {
  return knex.schema.createTable("ingrediente_receita", function (table) {
    table.increments("id").unique().primary();
    table.integer("id_secundario").notNullable();
    table.foreign("id_secundario").references("id").inTable("receita");
    table.string("ingrediente").notNullable();
    table.integer("unidade_medida").notNullable();
    table.integer("quantidade").notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("ingrediente_receita");
};
