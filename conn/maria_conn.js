import mysql from "mysql2/promise"

import "../config/env"
import { 
    DB_HOST,
    DB_PORT,
    DB_PW,
    DB_USER,
    DB_DATABASE
} from "../config/db"

export const maria_conn = () => {
    return mysql.createPool({
        host: DB_HOST,
        user: DB_USER,
        port: DB_PORT,
        password: DB_PW,
        connectionLimit: 4,
        database: DB_DATABASE,
    })
}