import { Client } from 'pg'
import { dbConfig } from '../config/database'

export function getClient() {
    const client = new Client({
        database: dbConfig.POSTGRES_DB,
        host: dbConfig.PGHOST,
        port: dbConfig.PGPORT,
        user: dbConfig.PGUSER,
        password: dbConfig.POSTGRES_PASSWORD,
    })
    return client
}