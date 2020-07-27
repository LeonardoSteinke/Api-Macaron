
exports.up = function(knex) {
  return knex.schema.createTable('calendario_receita', function (table) {
    table.increments("id").unique().primary();
    table.integer("id_receita").notNullable();
    table.foreign("id_receita").references("id").inTable("receita");
    table.integer("id_ingrediente").notNullable();
    table.foreign("id_ingrediente").references("id").inTable("ingrediente");
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('calendario_receita');
};
