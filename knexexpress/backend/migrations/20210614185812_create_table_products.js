
exports.up = function(knex) {
    return knex.schema.createTable('products', (table) => {
        table.increments('id').notNull().primary()
        table.string('item').notNull()
        table.string('categoria').notNull()
        table.string('descricao').notNull()
        table.string('distribuidor').notNull()
        table.integer('quantidade').notNull()
        table.float('preco').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products')
};
