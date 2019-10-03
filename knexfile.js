// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/byob',
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations'
    }
  }

};
