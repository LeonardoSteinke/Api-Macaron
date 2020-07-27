exports.up = function (knex) {
  return knex.schema.createTable("receita_usuario", function (table) {
    table.increments("id").primary().notNullable();
    table.integer("id_receita").notNullable();
    table.foreign("id_receita").references("id").inTable("receita");
    table.integer("id_usuario").notNullable();
    table.foreign("id_usuario").references("id").inTable("usuario");
    table.integer('fav');
    
  });
};

exports.down = function (knex) {
  return knex.schema.dropTale("receita_usuario");
};
