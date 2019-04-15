const mysql = require('mysql2/promise');
const config = require('config');
const configConnection = config.get('db.createConn');

const connectionPromise = mysql.createConnection(configConnection);
async function execute(sql, bindings) {
    const connection = await connectionPromise;
    const [rows] = await connection.execute(sql, bindings);
    return rows;
}

module.exports = {
    execute
};


