import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: 'localhost',
    user : 'root',
    password : '@#New7890',
    database : 'moviecritic_db',
})

export default pool;