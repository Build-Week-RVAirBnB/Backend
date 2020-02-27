// Update with your config settings.

module.exports = {

  development: {
    //clientansers: which type(sqlite3, postgresql, mysql, oracle...etc'
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db3'
    },
    useNullAsDefault: true,
    migrations:{directory:"./data/migrations",}

  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
