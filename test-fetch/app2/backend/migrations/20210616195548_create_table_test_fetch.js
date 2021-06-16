
exports.up = function(knex) {
       return knex.schema.createTable('test_fetch', (table) => {
            table.increments('id').notNull().primary()
            table.string('item').notNull()
            table.integer('qtde').notNull()
       })
};

exports.down = function(knex) {
    return knex.schema.dropTable('test_fetch')
};
