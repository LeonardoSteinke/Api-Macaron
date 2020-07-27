exports.up = function (knex) {
  return knex.schema.createTable("receita", function (table) {
    table.increments("id").primary().notNullable();
    table.string("nome").notNullable();
    table.string("categoria").notNullable();
    table.string("modo_preparo").notNullable();
    table.integer("tempo_preparo").notNullable();
    table.integer("dificuldade").notNullable();
    table.integer("porcoes").notNullable();
    table.integer("avaliacao").notNullable();
    table.integer("tipo").notNullable();
    table.integer("id_usuario").notNullable();
    table.foreign("id_usuario").references("id").inTable("usuario");
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("receita");
};
