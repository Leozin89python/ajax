
module.exports = {

    client: 'postgresql',
    connection: {
      database: 'knexexpress_auth',
      user:     'postgres',
      password: '123456'
    },
    pool: {
      min: 2,
      max: 10
    }

};
