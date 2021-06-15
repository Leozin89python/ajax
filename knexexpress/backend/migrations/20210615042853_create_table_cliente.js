
exports.up = function(knex) {
    return knex.schema.createTable('cliente', (table) => {
            table.increments('id').notNull().primary()
            table.string('cnpj_razao').notNull()
            table.string('mercadoria').notNull()
            table.string('telefone').notNull()
            table.string('email').notNull()
            table.string('endereco').notNull()
            table.integer('quantidade_mercadorias').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('cliente')
};
