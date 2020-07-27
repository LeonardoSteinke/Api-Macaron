exports.up = function (knex) {
  return knex.schema.createTable("ingrediente_receita", function (table) {
    table.increments("id").primary().notNullable();
    table.integer("id_receita").notNullable();
    table.foreign("id_receita").references("id").inTable("receita");
    table.integer("id_ingrediente").notNullable();
    table.foreign("id_ingrediente").references("id").inTable("ingrediente");
    table.integer("quantidade").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("ingrediente_receita");
};
