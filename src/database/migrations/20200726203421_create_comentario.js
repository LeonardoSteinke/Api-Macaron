exports.up = function (knex) {
  return knex.schema.createTable("comentario", function (table) {
    table.increments("id").unique().primary();
    table.integer('id_comentario');
    table.string('comentario').notNullable();
    table.integer('curtidas').notNullable();
    table.integer('id_receita').notNullable();
    table.integer('id_usuario').notNullable();
    table.foreign("id_usuario").references("id").inTable("usuario");
    table.foreign("id_receita").references("id").inTable("receita");
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());

  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("comentario");
};
