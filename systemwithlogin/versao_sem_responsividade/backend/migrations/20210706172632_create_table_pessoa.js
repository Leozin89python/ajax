
exports.up = function(knex) {
    return knex.schema.createTable('pessoa',(table) => {
        table.increments('id').notNull().primary()
        table.string('name').notNull()
        table.string('job').notNull()
        table.string('department').notNull()
        table.float('salary').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('pessoa')
};
