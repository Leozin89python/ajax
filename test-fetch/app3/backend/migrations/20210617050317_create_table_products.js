
exports.up = function(knex) {
  return knex.schema.createTable('products',(table) => {
      table.increments('id').primary().notNull()
      table.string('item').notNull()
       table.string('categ').notNull()
      table.float('preco').notNull()
      table.integer('qtde').notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('products')
};
