exports.up = function (knex) {
  return knex.schema.createTable("usuario", function (table) {
    table.increments("id").primary().notNullable();
    table.string("nome").notNullable();
    table.string("email").notNullable();
    table.string("senha").notNullable();
    table.string("uf", 2);
    table.string("pais");
    table.string("foto");
    table.integer("tolerancias");
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("usuario");
};
