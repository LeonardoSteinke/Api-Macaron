exports.up = function (knex) {
  return knex.schema.createTable("ingrediente", function (table) {
    table.increments("id").unique().primary();
    table.string("nome").notNullable();
    table.integer("unidade_medida").notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("ingrediente");
};
