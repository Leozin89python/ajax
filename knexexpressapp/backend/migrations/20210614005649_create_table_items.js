
exports.up = function(knex) {
    return knex.schema.createTable('items', (table) => {
        table.increments('id').primary().notNull()
        table.string('nome').notNull()
        table.string('categoria').notNull()
        table.float('preco').notNull()
        table.integer('quantidade').notNull()
        table.string('distribuidor').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('items')
};
