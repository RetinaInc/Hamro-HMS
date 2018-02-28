require('dotenv').config();

module.exports = {
    test: {
        client: 'sqlite3',
        connection: {
            filename: './back-end/test-db/test.sqlite3'
        },
        migrations: {
            tableName: 'migrations',
            directory: './back-end/migrations'
        }
    },
    runtime: {
        client: process.env.DB_CLIENT || 'postgresql',
        connection: {
            host : process.env.DB_HOST || 'localhost',
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        },
        pool: {
            min: process.env.DB_POOL_MIN || 2,
            max: process.env.DB_POOL_MAX || 10
        },
        migrations: {
            tableName: 'migrations',
            directory: 'back-end/migrations'
        }
    }
};
