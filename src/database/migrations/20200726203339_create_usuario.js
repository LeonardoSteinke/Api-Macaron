exports.up = function (knex) {
  return knex.schema.createTable("usuario", function (table) {
    table.increments("id").unique().primary();
    table.string("nome").notNullable();
    table.string("email").notNullable();
    table.string("senha").notNullable();
    table.string("uf", 2);
    table.string("pais");
    table.string("foto");
    table.integer("tolerancias");
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("usuario");
};
