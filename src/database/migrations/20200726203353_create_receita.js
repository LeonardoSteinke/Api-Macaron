exports.up = function (knex) {
  return knex.schema.createTable("receita", function (table) {
    table.increments("id").unique().primary();
    table.string("nome").notNullable();
    table.integer("tempo_preparo").notNullable();
    table.integer("dificuldade").notNullable();
    table.integer("porcoes").notNullable();
    table.string("categoria").notNullable();
    table.integer("tipo").notNullable();
    table.string("modo_preparo").notNullable();
    table.integer("avaliacao").notNullable();
    table.integer("id_usuario").notNullable();
    table.foreign("id_usuario").references("id").inTable("usuario");
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("receita");
};
