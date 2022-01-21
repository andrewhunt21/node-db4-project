const sharedConfig = {
    client: 'sqlite3',
    migrations: { directory: './data/migrations' },
    //sqlite3 specific
    useNullasDefault: true,
    pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) }
}

module.exports = {
    development: {
        ...sharedConfig,
        connection: { filename: './data/cook_book.db3' },
        seeds: { directory: './data/seeds' } // if all environments were using seed we could move it to line 4
    },
    testing: {
        ...sharedConfig,
        connection: { filename: './data/cook_book.test.db3' }
    },
    production: {}
}