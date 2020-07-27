exports.up = function (knex) {
  return knex.schema.createTable("ingrediente", function (table) {
    table.increments("id").primary().notNullable();
    table.string("nome").notNullable();
    table.integer("unidade_medida").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("ingrediente");
};
