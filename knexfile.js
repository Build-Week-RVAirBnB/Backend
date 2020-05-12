module.exports = {
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: { min: 2, max: 10 },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    }
  },
  development: {
    client: "pg",
    connection: `postgres://${process.env.USER}:${process.env.PW}@${process.env.HOST}:${process.env.PORT}/${process.env.INSTANCE}?${process.env.OPTION1KEY}=${process.env.OPTION1VALUE}?${process.env.OPTION2KEY}=${process.env.OPTION2VALUE}`,
    pool: { min: 2, max: 10 },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    }
  },
  testing: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/test.db3",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./data/seeds",
    }
  }
};
