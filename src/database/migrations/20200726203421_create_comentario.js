exports.up = function (knex) {
  return knex.schema.createTable("comentario", function (table) {
    table.increments("id").primary().notNullable();
    table.integer('id_comentario');
    table.string('comentario').notNullable();
    table.integer('curtidas').notNullable();
    table.integer('id_receita').notNullable();
    table.integer('id_usuario').notNullable();
    table.foreign("id_usuario").references("id").inTable("usuario");
    table.foreign("id_receita").references("id").inTable("receita");
    table.timestamps();

  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("comentario");
};
